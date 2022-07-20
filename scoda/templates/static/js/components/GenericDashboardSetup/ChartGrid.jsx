import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';
import { tableData } from './helpers/helpers';
import axios from 'axios';

export const ChartGrid = ({ minYear, maxYear, indicator_ids, yearColors}) => {

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

  const handleSelect = (newValue) =>{

    setChartGroup(newValue)
  }

const removeItem = (index) => {

    let filteredByChart = []
    let addOption = []
    

    selected.forEach((chart,chartIndex) => {
        let filteredByYear = []
        let  addOptionByYear = []
        let reference = originalValues[chartIndex]
      


        chart.forEach((year,yearIndex) => {

            let optionLabel = reference[yearIndex].labels.filter((exclude) => exclude === year.labels[index])
            let optionValue = reference[yearIndex].values.filter((exclude) => exclude === year.values[index])

            year.labels = year.labels.filter((exclude) => exclude !== year.labels[index])
            year.values = year.values.filter((exclude) => exclude !== year.values[index])

            filteredByYear.push(year)
            console.log(optionLabel,"label exclude",reference)
            let newOption = {label: [optionLabel],values: [optionValue], year: year.year, color: year.color}

            addOptionByYear.push(newOption)
        })
        filteredByChart.push(filteredByYear)
        addOption.push(addOptionByYear)

    })
    let newArr = chartGroup
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

    let newArr = chartGroup
    newArr[0] = filteredByChart[0]
    newArr[1] = filteredByChart[1]
    newArr[2] = filteredByChart[2]
    newArr[3] = filteredByChart[3]
    newArr[4] = filteredByChart[4]

    handleSelect([...newArr])
}


  return (
    <div className='chart_grid'>
      { chartGroup.length === 6 ?
        <div className='rounded_container'>
          <div className="select_wrapper">
            <Select
              chartData={chartGroup}
              selected={selected.length > 1 ? selected[0][0].labels: []}
              setSelected={setSelected}
              options={options.length > 1 ? options[0][0].label: []}
              setOptions={setOptions}
              removeItem={removeItem}
              addItem={addItem}
              clearAll={clearAll}
            />
          </div>

          <div className="grid-container" style={chartGridStyles}>
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