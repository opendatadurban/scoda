import React, { useEffect, useState } from 'react'
import Subnav from '../Subnav'
import { ChartGrid } from './ChartGrid'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'
import '../../../scss/components/GenericDashboard.scss'
import { populateChartGroup } from './data/api'
import { Modal, ModalBody, Spinner } from 'reactstrap'
import { SelectContextState } from '../../context'
import { hhiDropdownNames } from './helpers/helpers'

const GenericChart = ({ indicator_ids, minYear, maxYear,
  gridItems, subNavContent, genericIndex,
  dropdownName, colors, secondaryChart }) => {

  const [chartGroup, setChartGroup] = useState([])
  const [originalValues, setOriginalValues] = useState([])
  const [selectedChart, setSelectedChart] = useState(0)
  const [singleCityIndex, setSingleCityIndex] = useState(0)
  const [selectedName, setSelectedName] = useState(Array.isArray(indicator_ids[0]) ?
    hhiDropdownNames(indicator_ids[0])[0].shortName : "")

  useEffect(() => {

    setChartGroup([])

    populateChartGroup(

      setChartGroup,
      Array.isArray(indicator_ids[0]) ?
        [indicator_ids[0][selectedChart], indicator_ids[1]]
        :
        indicator_ids,
      minYear, maxYear,
      colors, 
      setOriginalValues,
      dropdownName,
      genericIndex,
      singleCityIndex
    )
  }, [selectedName, selectedChart, singleCityIndex])


  console.log(chartGroup,"ORIGINAL GROUP")
  const isDropDownChart = Array.isArray(indicator_ids[0])
  const firstDashboardClass = (genericIndex === 0) ? "first_chart" : ""

  return (
    chartGroup.length === gridItems ?
      <SelectContextState>
        <div className={'generic_dashboard ' + (secondaryChart ? "secondary " : "") + firstDashboardClass}>
          {secondaryChart ? "" : <>
            <Subnav name='State of Cities Reports' dropdownName={dropdownName} dropDownItem={subNavContent} buttonText="Download as PNG" />
            {/* <Sidebar_left /> */}
          </>}
          <div id='content' >
            
            {secondaryChart ?
              "" :
              <GenericStatsPanel
                originalValues={originalValues}
                dropName={dropdownName}
              />
            }

            <ChartGrid
              indicator_ids={indicator_ids}
              chartGroup={chartGroup}
              setChartGroup={setChartGroup}
              originalValues={originalValues}
              gridItems={gridItems}
              dropdownName={dropdownName}
              secondDropDown={isDropDownChart ? hhiDropdownNames(indicator_ids[0]) : null}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
              setSelectedChart={setSelectedChart}
              selectedDropDownChart={selectedChart}
              genericIndex={genericIndex}
              singleCityIndex={singleCityIndex}
              setSingleCityIndex={setSingleCityIndex}
            />
          </div>
        </div>
      </SelectContextState> : <>
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

        <div className="placeholder"
          style={{
             width: "100%", 
             height: "450px", 
             backgroundColor: "transparent" 
             }}>
          {/* The place hold er div simply maintains the scroll position
              of the page when charts are rerendered
              making sure the user stays in the same place */}
        </div>
      </>


  )
}
export default GenericChart;