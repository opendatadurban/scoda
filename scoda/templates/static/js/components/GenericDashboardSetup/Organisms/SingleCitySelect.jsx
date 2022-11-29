import React, { useState } from 'react'
import '../../../../scss/components/Select.scss'
import { ChevronDown } from '../../../../svg_components/SelectIcons'
import { cityLabels, extendAbbreviation } from '../helpers/helpers'

export const SingleCitySelect = ({ singleCityIndex, setSingleCityIndex, isSingleYear }) => {

    const [show, visibility] = useState(false)

    const cities = [
        "Buffalo City",
        "City of Cape Town",
        "City of Joburg",
        "Ekurhuleni",
        "Mangaung",
        "Nelson Mandela Bay",
        "Tshwane",
        "eThekwini"
    ]

    const years = [
        "2015", "2016", "2017", "2018"
    ]

    const select = (index) => {
       setSingleCityIndex(index)
    }

    return (
        <div className={isSingleYear ? "title_wrapper" : "title_wrapper_single_city"}>
            <p className="dropdown_title">
                {
                    isSingleYear ?
                    "CHOOSE A YEAR":
                    "CHOOSE ONE CITY"
                }
            </p>
            <div className={'mini_select macro_select'} onClick={() => { visibility(!show) }}>

                <p className="title">
                    {isSingleYear ? 
                    years[singleCityIndex]:
                     cities[singleCityIndex]}
                </p>

                <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                    {isSingleYear ?
                    years.map((year, index) => {

                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            select(index)
                        }}>{ year}</p>
                    })
                    :
                        cities.map((city, index) => {

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
    )
}
