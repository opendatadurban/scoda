import React, { useEffect, useState } from 'react'
import Subnav from '../Subnav'
import { ChartGrid } from './ChartGrid'
import { peopleHouseholdColors, secondaryColors } from './helpers/helpers'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'
import '../../../scss/components/PeopleHouseHold.scss'
import { populateChartGroup } from './data/api'
import { Modal, ModalBody, Spinner } from 'reactstrap'
import Sidebar_left from '../Sidebar_left'

const PeopleHousehold = ({ indicator_ids, minYear, maxYear, gridItems, subNavContent,
  dropdownName, colors }) => {

  const [chartGroup, setChartGroup] = useState([])
  const [originalValues, setOriginalValues] = useState([])

  useEffect(() => {

    populateChartGroup(
      setChartGroup,
      indicator_ids, // this array determines the number of charts generated on your grid
      minYear, maxYear, //year min max
      colors, //color presets
      setOriginalValues,
      gridItems
    )
  }, [indicator_ids, minYear, maxYear, colors])

  return (
    chartGroup.length === gridItems ? <div className='people_household_dashboard'>

      <Subnav name='State of Cities Reports' dropdownName={dropdownName} dropDownItem={subNavContent} buttonText="Download as PNG" />
      <Sidebar_left />
      <div id='content'>
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
export default PeopleHousehold;