import React, { useEffect, useState,useContext } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import { SelectContext } from '../../../context'

export const Select = ({ chartData, selected, options, setSelected, removeItem, addItem, clearAll }) => {

    const {selectOpen, setSelect} = useContext(SelectContext)

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
        <div className='custom_select' onClick={()=> setSelect(!selectOpen)}>
            {
                selected.length > 1 ? selected[0][0].labels.map((tag, index) => {

                    return <p key={index.toString()} className="tag">
                        {tag}
                        <XIcon cancel={() => { removeItem(index) }} />
                    </p>
                }) : ""
                    
            }
            <div className={"dropdownbox " + `${selectOpen ? "show" : ""}`} >
                {
                    options.length > 1 ? options[0][0].labels.map((city, index) => {
                   
                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            addItem(index)
                        }}>{city}</p>
                    }):""
                }
            </div>
            <XIcon cancel={() => {
                clearAll()
            }} />
            <Line />
            <ChevronDown drop={() => {
               
            }} />
        </div>
    )
}