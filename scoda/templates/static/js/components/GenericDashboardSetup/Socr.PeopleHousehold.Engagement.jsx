import React from 'react'
import Subnav from '../Subnav'
import { ChartGrid } from './ChartGrid'
import { peopleHouseholdColors, secondaryColors } from './helpers/helpers'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'
import { cityLabels } from './helpers/helpers'
import '../../../scss/components/PeopleHouseHold.scss'
import { useState } from 'react'

const PeopleHousehold = () => {

  const [statsValues, setStats] = useState({ totalHouseHolds: 0, houseHoldSize: 0, populationDensity: 0 })
  const [selected, setSelected] = useState('Tshwane')

  const subNavContent = {
    dropdownMenu: [
      {
        name: "Service Delivery",
        href: "socr#/service_delivery",
        active: false
      },
      {
        name: "Citizen Engagement",
        href: "socr#/citizen_engagement",
        active: false
      },
      {
        name: "Municipal Human Resources",
        href: "socr#/human_resources",
        active: false
      },
      {
        name: "People and Households",
        href: "socr#/people_household",
        active: true
      }
    ]
  }

  const getStatTotals = (originalValues) => {

    let totalHouseHolds = 0
    let houseHoldSize = 0
    let populationDensity = 0

    if (originalValues.length < 1) return

    originalValues[0].forEach((values, index) => {

      let valueIndex = values.labels.indexOf(cityLabels(selected))

      if (values.year !== "2018" && valueIndex !== -1) return

      totalHouseHolds = values.values[valueIndex]
    })

    originalValues[1].forEach((values, index) => {

      let valueIndex = values.labels.indexOf(cityLabels(selected))

      if (values.year !== "2018" && valueIndex !== -1) return

      houseHoldSize = values.values[valueIndex]
    })

    originalValues[4].forEach((values, index) => {

      let valueIndex = values.labels.indexOf(cityLabels(selected))

      if (values.year !== "2018" && valueIndex !== -1) return

      populationDensity = values.values[valueIndex]
    })

    setStats({
      ...statsValues,
      totalHouseHolds: Math.round((totalHouseHolds + Number.EPSILON) * 100) / 100,
      houseHoldSize: Math.round((houseHoldSize + Number.EPSILON) * 100) / 100,
      populationDensity: Math.round((populationDensity + Number.EPSILON) * 100) / 100
    })
  
  }

  return (
    <div className='people_household_dashboard'>

      <Subnav name='State of Cities Reports' dropdownName='People and Households' dropDownItem={subNavContent} buttonText="Download as PNG" />
      <GenericStatsPanel
        statsValues={statsValues}
        setSelected={setSelected}
        selected={selected}
      />
      <ChartGrid minYear={2015} maxYear={2018}
        indicator_ids={[704, "manual", 706, 699, 701, 711]}
        yearColors={peopleHouseholdColors}
        getStatTotals={getStatTotals}
      />
      <div className="spacer"></div>
    </div>
  )
}
export default PeopleHousehold;