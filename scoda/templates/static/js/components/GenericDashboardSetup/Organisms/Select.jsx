import React, { useEffect, useState } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import { cityLabels, populateSelect } from '../helpers/helpers'

export const Select = ({ chartData, setChartData, setOriginal, setSelected, setOptions,
    options, selected, original,setLabelGroup }) => {

    const [show, visibility] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        populateSelect(chartData, setOriginal, cityLabels, setSelected)
      }, 8000);

    }, [chartData])

    const removeItem = (setSelected, setOptions, index, setChartData,setLabelGroup) => {
        let labelGroupNew = selected.filter(exclusion => exclusion !== selected[index])

        setSelected(prev => {
            const newlySelected = prev.filter(exclusion => exclusion !== prev[index])

            labelGroupNew = newlySelected

            return newlySelected
        })
        setOptions(prev => [...prev, selected[index]])

        setLabelGroup(prev => prev.map((item, index) => {
            console.log(labelGroupNew)
            return labelGroupNew
        } ))
    }
    const clearAll = (setSelected, setOptions, original) => {

        setSelected([])
        setOptions(original)
    }
    const addItem = (setSelected, setOptions, index) => {
        let labelGroupNew = selected.filter(exclusion => exclusion !== selected[index])
        

        setOptions(prev => prev.filter(inclusion => inclusion !== prev[index]))
        setSelected(prev => [...prev, options[index]])

        setLabelGroup(prev => prev.map((item, index) => {
            console.log(labelGroupNew)
            return labelGroupNew
        } ))
    }

    return (
        <div className='custom_select'>
            {
                selected.map((tag, index) => {

                    return <p className="tag">{tag}<XIcon cancel={() => {
                        removeItem(setSelected, setOptions, index, setChartData,setLabelGroup)
                    }} /></p>
                })

            }
            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                {
                    options.map((city, index) => {
                        return <p className="drop_content" onClick={() => {
                            addItem(setSelected, setOptions, index)
                        }}>{city}</p>
                    })
                }
            </div>
            <XIcon cancel={() => {
                clearAll(setSelected, setOptions, original)
            }} />
            <Line />
            <ChevronDown drop={() => {
                visibility(!show)
            }} />
        </div>
    )
}