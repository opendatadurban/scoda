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
  const [selected, setSelected] = useState([])

  useEffect(() => {
    populateChartGroup(
      setChartGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      yearColors, //color presets
    )
  }, [minYear, maxYear, indicator_ids, yearColors])

  const handleSelect = (newValue) =>{
    console.log(newValue)
    setChartGroup(newValue)
  }

  console.log(chartGroup, "state change toparent ?")

  return (
    <div className='chart_grid'>
      { chartGroup.length === 6 ?
        <div className='rounded_container'>
          <div className="select_wrapper">
            <Select
              chartData={chartGroup}
              handleSelect={handleSelect}
              selected={selected}
              setSelected={setSelected}
              
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