import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Chart } from './Chart';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';

export const Charts = ({ minYear, maxYear, indicator_ids, yearColors }) => {

  const [chartGroup, setChartGroup] = useState(null)
  const [labelGroup, setLabelGroup] = useState(null)

  useEffect(() => {

    populateChartGroup(
      setChartGroup, setLabelGroup,
      indicator_ids, minYear,
      maxYear, yearColors
    )
  }, [])

  

  return (
    <div>
      {chartGroup && labelGroup ?

        <div className="grid-container" style={chartGridStyles}>
          {
            chartGroup.map((chart, index) => {
              
              console.log("parent", chart)
              return <div key={index.toString()} className="chart-wrapper" style={{ padding: '30px' }}>
                <Chart graphData={chart} labels={labelGroup} />
              </div>
            })
          }
          {/* <div className="chart-wrapper" style={{ padding: '30px' }}>
            <Chart />
          </div>
          <div className="chart-wrapper" style={{ padding: '30px' }}>
            <Chart />
          </div>
          <div className="chart-wrapper" style={{ padding: '30px' }}>
            <Chart />
          </div>
          <div className="chart-wrapper" style={{ padding: '30px' }}>
            <Chart />
          </div> */}


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
