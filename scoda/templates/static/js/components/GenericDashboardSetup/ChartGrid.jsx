import React, {useState } from 'react'

import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';

export const ChartGrid = ({ indicator_ids,
  chartGroup, setChartGroup,originalValues}) => {

  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])

  const removeItem = (clickIndex) => {
    //set labels and chart data
    let optionsTemp = []
    let selectTemp = []

    selected.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setOptions(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {

          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp

      return [...optionState]
    })

    setSelected(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]

          return selectedYear
        })
      })

      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = selectedState[0]
        newArr[1] = selectedState[1]
        newArr[2] = selectedState[2]
        newArr[3] = selectedState[3]
        newArr[4] = selectedState[4]

        return [...newArr]
      })

      return [...selectedState]
    })


  }

  const addItem = (clickIndex) => {

    let optionsTemp = []
    let selectTemp = []

    options.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })



    setSelected(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {

          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp


      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = optionState[0]
        newArr[1] = optionState[1]
        newArr[2] = optionState[2]
        newArr[3] = optionState[3]
        newArr[4] = optionState[4]

        return [...newArr]
      })

      return [...optionState]
    })

    setOptions(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          return selectedYear
        })
      })

      return [...selectedState]
    })


  }

  const clearAll = () => {
    // ['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK']

    setSelected(prev => {
      let newArr = prev

      let cleared = newArr.map((chart) => {
        return chart.map((year) => {
          year.labels = []
          year.values = []
          return year
        })
      })

      return cleared
    })

    setOptions(prev => {
      let newArr = prev

      let fallbackValue = JSON.parse(JSON.stringify(originalValues))
      let removed = fallbackValue.splice(-1)

      let filled = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let fillRef = fallbackValue[cIndex]
        return chart.map((year, yIndex) => {

          year.labels = ['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK']
          year.values = fillRef[yIndex].values

          return year
        })
      }) : fallbackValue


      return filled
    })


  }

  return (
    <div className='chart_grid'>
      {
        <div className='rounded_container'>
          <div className="select_wrapper">
            <Select
              chartData={chartGroup}
              selected={selected}
              setSelected={setSelected}
              options={options}
              setOptions={setOptions}
              removeItem={removeItem}
              addItem={addItem}
              clearAll={clearAll}
            />
          </div>

          <div className="grid-container">
            {
              <ChartWrapper
                chartGroup={chartGroup}
                indicator_ids={indicator_ids} />
            }
          </div>
        </div>
      }
    </div>
  )
}