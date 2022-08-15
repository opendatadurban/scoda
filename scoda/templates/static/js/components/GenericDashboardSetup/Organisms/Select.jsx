import React, { useEffect, useState,useContext } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import { SelectContext } from '../../../context'

export const Select = ({ chartData,originalValues, selected, options,
     setSelected,setChartGroup,setOptions,
      removeItem, addItem, clearAll,chartDropName }) => {

    const {selectOpen, setSelect} = useContext(SelectContext)

    useEffect(() => {

        selectedOptions()
    }, [chartData])

    const selectedOptions = () => { 
        let filtered = []
        

        if(chartDropName === "People and Households"){
            chartData.forEach((chart, index) => {
           
                if (index > 4 ) return
                filtered.push(chart)
            })
        }else if(chartDropName === "People and Households"){
            chartData.forEach((chart, index) => {
           
                if (index > 0 ) return
                filtered.push(chart)
            })
        }else{
            chartData.forEach((chart, index) => {
           
                filtered.push(chart)
            })
        }
        
     
        setSelected(filtered)
    }

    return (
        <div className='custom_select' onClick={()=> setSelect(!selectOpen)}>
            {
                selected.length > 0 ? selected[0][0].labels.map((tag, index) => {

                    return <p key={index.toString()} className="tag">
                        {tag}

                        <XIcon cancel={() => { removeItem(index,selected,setSelected,setChartGroup,setOptions) }} />
                       
                    </p>
                }) : ""       
            }
            <div className={"dropdownbox " + `${selectOpen ? "show" : ""}`} >
                {
                    options.length > 0 ? options[0][0].labels.map((city, index) => {
                   
                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            addItem(index,options,setSelected,setChartGroup,setOptions)
                        }}>{city}</p>
                    }):""
                }
            </div>
            <XIcon cancel={() => {
                clearAll(originalValues,setSelected,setOptions)
            }} />
            <Line />
            <ChevronDown drop={() => {
               
            }} />
        </div>
    )
}