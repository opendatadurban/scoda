import { ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import React, { useState } from 'react'

export const MiniSelect = ({ names, selected, setSelected, chartDropName }) => {

    const [show, visibility] = useState(false)

    const select = (index) => {

        setSelected(typeof (city) === "string" ? names[index] : names[index].shortName)
    }


    return (
        chartDropName === "Household Income" ?
            <div className="title_wrapper">
                <p className="dropdown_title">Main Source of Income:</p>
                <div className={'mini_select macro_select'} onClick={() => { visibility(!show) }}>

                    <p className="title">
                        {selected}
                    </p>

                    <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                        {
                            names.map((city, index) => {

                                return <p key={index.toString()} className="drop_content" onClick={() => {
                                    select(index)
                                }}>{typeof (city) === "string" ? city : city.shortName}</p>
                            })
                        }
                    </div>

                    <ChevronDown drop={() => {
                        visibility(!show)
                    }} />
                </div>
            </div>

            :
            <div className={'mini_select'} onClick={() => { visibility(!show) }}>

                <p className="title">
                    {selected}
                </p>

                <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                    {
                        names.map((city, index) => {

                            return <p key={index.toString()} className="drop_content" onClick={() => {
                                select(index)
                            }}>{typeof (city) === "string" ? city : city.shortName}</p>
                        })
                    }
                </div>

                <ChevronDown drop={() => {
                    visibility(!show)
                }} />
            </div>
    )
}
