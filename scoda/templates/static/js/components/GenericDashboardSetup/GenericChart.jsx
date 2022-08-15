import React, { useEffect, useState } from 'react'
import Subnav from '../Subnav'
import { ChartGrid } from './ChartGrid'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'
import '../../../scss/components/PeopleHouseHold.scss'
import { populateChartGroup } from './data/api'
import { Modal, ModalBody, Spinner } from 'reactstrap'
import Sidebar_left from '../Sidebar_left'
import { indicator_text_box_data } from './data/data';

const hhiDropdownNames = () => {

  const options = indicator_text_box_data.map((item, index) => {
    let shortName = item.number.name.split(": ")
    let endpoints = item.endpoints
    return { shortName: shortName[1], endpoints: endpoints,index:index }
  })

  return options
}

const GenericChart = ({ indicator_ids, minYear, maxYear, gridItems, subNavContent,
  dropdownName, colors }) => {

  const [chartGroup, setChartGroup] = useState([])
  const [originalValues, setOriginalValues] = useState([])

  const [selectedChart, setSelectedChart] = useState(0)
  const [selectedName, setSelectedName] = useState(hhiDropdownNames()[selectedChart].shortName)
  const [isNumber, toggle] = useState(true)

  useEffect(() => {
    if (dropdownName === "HouseHold Income") return
    populateChartGroup(
      setChartGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      colors, //color presets
      setOriginalValues
    )
  }, [indicator_ids, minYear, maxYear, colors])

  useEffect(() => {

    if (dropdownName === "Household Income") {
      populateChartGroup(
        setChartGroup,
        [hhiDropdownNames()[selectedChart].endpoints[isNumber ? 0 : 1], "indicator text box"], // this array determines the number of charts generated on your grid
        minYear, maxYear, //year min max
        colors, //color presets
        setOriginalValues
      )
      let chartDropDownNames = hhiDropdownNames().map(item=>{
        return item.shortName
      })
      setSelectedChart(
        chartDropDownNames.indexOf(selectedName)
      )
    }
  }, [isNumber,selectedName])

  const selectedDropDownChart = hhiDropdownNames().map(item=>{
    return item.shortName
  }).indexOf(selectedName)


  return (
    chartGroup.length === gridItems ? <div className='people_household_dashboard'>

      <Subnav name='State of Cities Reports' dropdownName={dropdownName} dropDownItem={subNavContent} buttonText="Download as PNG" />
      <Sidebar_left />
      <div id='content' >
        <GenericStatsPanel
          originalValues={originalValues}
          dropName={dropdownName}
        />
        <ChartGrid
          indicator_ids={indicator_ids}
          chartGroup={chartGroup}
          setChartGroup={setChartGroup}
          originalValues={originalValues}
          gridItems={gridItems}
          dropdownName={dropdownName}
          secondDropDown={dropdownName === "Household Income" ? hhiDropdownNames() : null}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          setSelectedChart={setSelectedChart}
          toggle={toggle}
          isNumber= {isNumber}
          selectedDropDownChart = {selectedDropDownChart}
    
        />
      </div>
      <div className="spacer"></div>
    </div> :
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
  )
}
export default GenericChart;