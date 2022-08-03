import React, { useEffect, useState } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'

export const Select = ({ chartData,originalValues, selected, options,
     setSelected,setChartGroup,setOptions,
      removeItem, addItem, clearAll }) => {

    const [show, visibility] = useState(false)

    useEffect(() => {

        selectedOptions()
    }, [chartData])

    const selectedOptions = () => { 
        let filtered = []

        chartData.forEach((chart, index) => {

            if (index > 4) return
            filtered.push(chart)
        })

        setSelected(filtered)
    }

    return (
        <div className='custom_select' onClick={()=> visibility(!show)}>
            {
                selected.length > 1 ? selected[0][0].labels.map((tag, index) => {

                    return <p key={index.toString()} className="tag">
                        {tag}

                        <span>
                        <XIcon cancel={() => { removeItem(index,selected,setSelected,setChartGroup,setOptions) }} />
                        </span>
                    </p>
                }) : ""
                    
            }
            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                {
                    options.length > 1 ? options[0][0].labels.map((city, index) => {
                   
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