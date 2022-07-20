import React, { useEffect, useState } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import { cityLabels } from '../helpers/helpers'
import '../../../../scss/components/Select.scss'

export const Select = ({ chartData, selected, options,setSelected,removeItem,addItem,clearAll }) => {

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
console.log(options,"array ?")
    return (
        <div className='custom_select'>
            {
                selected.map((tag, index) => {

                    return <p key={index.toString()} className="tag">{cityLabels(tag)}<XIcon cancel={() => {
                        removeItem(index)
                    }} /></p>
                })
            }
            <div className={"dropdownbox " + `${ show ? "show" : ""}`} >
                {
                    options.length && options[0].map((city, index) => {       
                        console.log(city,"push next")
                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            addItem(index)}}>{city}</p>
                    })
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