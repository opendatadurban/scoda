import { ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import React, { useState } from 'react'

export const MiniSelect = ({ names, selected, setSelected,setSelectedChart,
    isDropDownChart,dropdownName,genericIndex}) => {

    const [show, visibility] = useState(false)

    const select = (index) => {
        setSelected(typeof (names[index]) === "string" ? names[index] : names[index].shortName)
        if(isDropDownChart){
            setSelectedChart(index)
        }
    }

    return (
        isDropDownChart ?
            <div className="title_wrapper">
                <p className="dropdown_title">
                    {dropdownName === "Education" ? "SCHOOLING LEVEL":
                    dropdownName === "Sustainability" && genericIndex === 0? "ENERGY TYPE":
                    dropdownName === "Sustainability" && genericIndex === 1? "POLLUTION TYPE":
                    dropdownName === "Travel Time" && genericIndex === 0? "TRAVEL TIME":
                    dropdownName === "Travel Time" && genericIndex === 1? "TRANSPORT METHOD":
                    dropdownName === "Transport Mode" ? "PASSENGERS BY MODE":
                    "Main Source of Income:"}
                </p>
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
