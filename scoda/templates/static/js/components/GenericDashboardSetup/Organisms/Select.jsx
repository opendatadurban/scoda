import React, { useEffect, useState } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import { cityLabels } from '../helpers/helpers'
import '../../../../scss/components/Select.scss'

export const Select = ({ chartData, handleSelect, selected, setSelected }) => {

    const [show, visibility] = useState(false)
    const [options, setOptions] = useState([])

    

    useEffect(() => {

        selectedOptions()
    }, [chartData,options])

    const selectedOptions = () => { // Choose which charts will be affected by the selector using their index on the Chart Grid

        let filtered = []

        chartData.forEach((chart, index) => {

            if (index > 4) return
            filtered.push(chart)
        })

        setSelected(filtered)
    }

    const removeItem = (index) => {
    
        let filteredByChart = []
        let addOption = []


        selected.forEach((chart) => {
            let filteredByYear = []
            let  addOptionByYear = []


            chart.forEach((year) => {

                let optionLabel = year.labels[index]
                let optionValue = year.values[index]

                year.labels = year.labels.filter((exclude) => exclude !== year.labels[index])
                year.values = year.values.filter((exclude) => exclude !== year.values[index])

                filteredByYear.push(year)

                let newOption = {label: [optionLabel],values: [optionValue], year: year.year, color: year.color}

                addOptionByYear.push(newOption)
            })
            filteredByChart.push(filteredByYear)
            addOption.push(addOptionByYear)

        })
        let newArr = chartData
        newArr[0] = filteredByChart[0]
        newArr[1] = filteredByChart[1]
        newArr[2] = filteredByChart[2]
        newArr[3] = filteredByChart[3]
        newArr[4] = filteredByChart[4]
      
        setOptions([...addOption])
        setSelected([...filteredByChart])
        handleSelect([...newArr])
    }

    const addItem = (index) => {

    }

    const clearAll = () => {

        let filteredByChart = []


        selected.forEach((chart) => {
            let filteredByYear = []


            chart.forEach((year) => {
                year.labels = year.labels.filter((exclude) => exclude === "")
                year.values = year.values.filter((exclude) => exclude === "")

                filteredByYear.push(year)

            })
            filteredByChart.push(filteredByYear)

        })
        setSelected(filteredByChart)

        let newArr = chartData
        newArr[0] = filteredByChart[0]
        newArr[1] = filteredByChart[1]
        newArr[2] = filteredByChart[2]
        newArr[3] = filteredByChart[3]
        newArr[4] = filteredByChart[4]

        handleSelect([...newArr])
    }


    return (
        <div className='custom_select'>
            {
                selected.length > 1 ? selected[0][0].labels.map((tag, index) => {

                    return <p key={index.toString()} className="tag">{cityLabels(tag)}<XIcon cancel={() => {
                        removeItem(index)
                    }} /></p>
                }) :
                    ""

            }
            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                {
                    options[0] > 1  ?  
                    options[0][0].labels.map((city, index) => {
                        console.log(city)
                        return <p key={index.toString()} className="drop_content" onClick={() => {
                            addItem(index)
                        }}>{1}</p>
                    }) : ''
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