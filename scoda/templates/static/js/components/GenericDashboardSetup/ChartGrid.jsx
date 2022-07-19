import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';
import { tableData } from './helpers/helpers';
import axios from 'axios';

export const ChartGrid = ({ minYear, maxYear, indicator_ids, yearColors, secondaryColor }) => {

  const [loaded, isLoaded] = useState(false)

  const [chartGroup, setChartGroup] = useState(null)
  const [labelGroup, setLabelGroup] = useState(null)

  const [original, setOriginal] = useState([])
  const [selected, setSelected] = useState(original)
  const [options, setOptions] = useState([])

  const [manualChart, setManualData] = useState(null)

  useEffect(() => {
    populateChartGroup(
      setChartGroup, setLabelGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      yearColors, //color presets
    )

  }, [minYear, maxYear, indicator_ids, yearColors])

  useEffect(()=>{
    axios.get("/api-temp/explore/?indicator_id=1").then((res) => {
      
      const table = res.data.table
      setManualData(tableData(table))
    })
  },[])

  return (
    <div className='chart_grid'>
      {chartGroup && labelGroup ?
        <div className='rounded_container'>
          <div className="select_wrapper">
          <Select chartData={chartGroup}
            setOriginal={setOriginal}
            setSelected={setSelected}
            setOptions={setOptions}
            selected={selected}
            options={options}
            original={original}
            setChartData={setChartGroup}
            setLabelGroup={setLabelGroup} />
          </div>
          

          <div className="grid-container" style={chartGridStyles}>

            {
              manualChart && <ChartWrapper title={"Title"} chartGroup={chartGroup} indicator_ids={indicator_ids}
              labelGroup={labelGroup} manualChart={manualChart}/>
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