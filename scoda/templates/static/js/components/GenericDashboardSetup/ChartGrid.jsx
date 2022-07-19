import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';

export const ChartGrid = ({ minYear, maxYear, indicator_ids, yearColors,secondaryColor }) => {

  const [loaded, isLoaded] = useState(false)

  const [chartGroup, setChartGroup] = useState(null)
  const [labelGroup, setLabelGroup] = useState(null)

  const [original, setOriginal] = useState([])
  const [selected, setSelected] = useState(original)
  const [options, setOptions] = useState([])

  useEffect(() => {
    populateChartGroup(
      setChartGroup, setLabelGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      yearColors, //color presets
      isLoaded// check the grid datahas arrived sychronously
    )

  }, [minYear, maxYear, indicator_ids, yearColors])

  return (
    <div>
      {chartGroup && labelGroup ?
        <>
          <Select chartData={chartGroup}
            setOriginal={setOriginal}
            setSelected={setSelected}
            setOptions={setOptions}
            selected={selected}
            options={options}
            original={original}
            setChartData={setChartGroup}
            setLabelGroup={setLabelGroup} />

          <div className="grid-container" style={chartGridStyles}>

            <ChartWrapper title={"Title"} chartGroup={chartGroup} indicator_ids={indicator_ids} labelGroup={labelGroup} />
          </div>
        </>
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