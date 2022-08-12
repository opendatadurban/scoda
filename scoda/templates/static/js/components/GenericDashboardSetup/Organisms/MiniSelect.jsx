import { ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import React, { useState } from 'react'

export const MiniSelect = ({ names, selected, setSelected, textSelect }) => {

    const [show, visibility] = useState(false)

    const select = (index) => {
        
        setSelected(typeof(city) === "string" ? names[index]: names[index].shortName)
    }

    return (
        <div className={textSelect ? 'mini_select macro_select' : 'mini_select'} onClick={() => { visibility(!show) }}>

            <p className="title">
                {selected}
            </p>

            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                {
                    names.map((city, index) => {

                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            select(index)
                        }}>{typeof(city) === "string"? city: city.shortName}</p>
                    })
                }
            </div>

            <ChevronDown drop={() => {
                visibility(!show)
            }} />
        </div>
    )
}
