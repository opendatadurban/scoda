import React, { useEffect } from 'react'
import { XIcon, Line, ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import { useSelectOpen } from '../../../context'
import { useCloseAllErrors } from '../../../context'

export const Select = ({ chartData, originalValues, selected, options,
    setSelected, setChartGroup, setOptions,
    removeItem, addItem, clearAll, chartDropName,isDropDownChart, genericIndex}) => {

    useEffect(() => {

        selectedOptions()
    }, [chartData])

    const selectContext = useSelectOpen()
    const closeAlerts = useCloseAllErrors()

    const closeAllAlerts = () => {

        let isClearable = false

        closeAlerts.error.forEach((item) => {
            if (item.errorThrown === true) {
                isClearable = true
            }
        })

        if (isClearable) {

            const newState = closeAlerts.error.map((obj) => {

                return { errorThrown: false };
            });

            closeAlerts.setError(newState);
        }
    }

    const selectedOptions = () => {

        let filtered = []

        if (chartDropName === "People and Households") {
            chartData.forEach((chart, index) => {
               
                if (index > 4) return
                filtered.push(chart)
            })
        } else if (chartDropName === "Household Income" || chartDropName === "Education" ||
        chartDropName === "Transport Mode" ||
         (chartDropName === "Sustainability" && isDropDownChart)|| 
         (chartDropName === "Travel Time" && isDropDownChart) ||
         (chartDropName === "Public Transport Spend" && genericIndex === 1)
         ) {
            
            chartData[0][0].forEach((chart, index) => {
        
                filtered.push(chart)           
            })
        } else if(chartDropName === "Life Expectancy and Health"){
            chartData.forEach((chart, index) => {
               
                if (index > 1 ) return
                filtered.push(chart)
            })
        }
        else {
            chartData.forEach((chart, index) => {

                filtered.push(chart)
            })
        }
        setSelected(filtered)
    }

    return (<div className="conditional_select_wrapper" onClick={closeAllAlerts}>
        {
            isDropDownChart ? <>
                <p className="select_title">Choose Cities</p>
                <div className='custom_select'
                onClick={ () => selectContext.setSelect(!selectContext.selectOpen)}>
                    {
                        selected && selected.length > 0 ? selected[0][0].labels.map((tag, index) => {

                            return <p key={index.toString()} className="tag">
                                {tag}

                                <XIcon cancel={() => { removeItem(index, selected, setSelected, setChartGroup, setOptions) }} />
                            </p>
                        }) :
                         ""
                    }
                    <div className={"dropdownbox " + `${selectContext.selectOpen ? "show" : ""}`} >
                        {
                           options && options.length > 0 ? options[0][0].labels.map((city, index) => {

                                return <p key={index.toString()} className="drop_content" onClick={() => {
                                    addItem(index, options, setSelected, setChartGroup, setOptions)
                                }}>{city}</p>
                            })
                               :""
                        }
                    </div>
                    <XIcon cancel={() => {
                        clearAll(originalValues, setSelected, setOptions)
                    }} />
                    <Line />
                    <ChevronDown drop={() => {

                    }} />
                </div>
            </>
                :
                <div className='custom_select' onClick={() => selectContext.setSelect(!selectContext.selectOpen)}>
                    {
                       selected && selected.length > 0? selected[0][0].labels.map((tag, index) => {

                            return <p key={index.toString()} className="tag">
                                {tag}

                                <XIcon cancel={() => { removeItem(index, selected, setSelected, setChartGroup, setOptions) }} />

                            </p>
                        }) :
                        ""
                    }
                    <div className={"dropdownbox " + `${selectContext.selectOpen ? "show" : ""}`} >
                        {
                           options && options.length > 0 ? options[0][0].labels.map((city, index) => {

                                return <p key={index.toString()} className="drop_content" onClick={() => {
                                    addItem(index, options, setSelected, setChartGroup, setOptions)
                                }}>{city}</p>
                            }) 
                            :""
                        }
                    </div>
                    <XIcon cancel={() => {
                        clearAll(originalValues, setSelected, setOptions)
                    }} />
                    <Line />
                    <ChevronDown drop={() => {

                    }} />
                </div>
        }
    </div>
    )
}