import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { populateChartGroup } from './data/api';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';

export const ChartGrid = ({ minYear, maxYear, indicator_ids, yearColors, getStatTotals }) => {

  const [chartGroup, setChartGroup] = useState([])
  const [originalValues, setOriginalValues] = useState([])
  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])

  useEffect(() => {

    populateChartGroup(
      setChartGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      yearColors, //color presets
      setOriginalValues
    )
  }, [minYear, maxYear, indicator_ids, yearColors])

  useEffect(() => {

    getStatTotals( originalValues)
    
  }, [originalValues])


  const filterCharts = () => {

    setChartGroup(prev => {

      let newArr = prev

      newArr[0] = selected[0]
      newArr[1] = selected[1]
      newArr[2] = selected[2]
      newArr[3] = selected[3]
      newArr[4] = selected[4]

      return [...newArr]
    })
  }


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
      {chartGroup.length === 6 ?
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
                indicator_ids={indicator_ids}
                manualChart={chartGroup[1]} />
            }
          </div>
        </div>
        :

        <Modal id="loader" isOpen={true} className="modal-dialog-centered loader">
          <ModalBody>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-0 ml-3 pt-4">
                <Spinner type="grow" color="secondary" size="sm" />
                <Spinner type="grow" color="success" size="sm" />
                <Spinner type="grow" color="danger" size="sm" />
                <Spinner type="grow" color="warning" size="sm" />
              </div>
              <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
            </div>
            <br />
          </ModalBody>
        </Modal>
      }
    </div>
  )
}