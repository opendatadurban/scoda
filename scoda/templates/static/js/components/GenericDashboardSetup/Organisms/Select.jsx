import React, { useEffect, useState } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import { cityLabels } from '../helpers/helpers'
import '../../../../scss/components/Select.scss'

export const Select = ({ chartData, selected, options, setSelected, removeItem, addItem, clearAll }) => {

    const [show, visibility] = useState(false)

    useEffect(() => {

        selectedOptions()
    }, [chartData])

    const selectedOptions = () => { // Choose which charts will be affected by the selector using their index on the Chart Grid

        let filtered = []

        chartData.forEach((chart, index) => {

            if (index > 4) return
            filtered.push(chart)
        })

        setSelected(filtered)
    }

    return (
        <div className='custom_select'>
            {
                selected.length > 1 ? selected[0][0].labels.map((tag, index) => {

              
                    return <p key={index.toString()} className="tag">
                        {tag}
                        <XIcon cancel={() => { removeItem(index) }} />
                    </p>
                }) :
                    ""
            }
            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
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
                visibility(!show)
            }} />
        </div>
    )
}