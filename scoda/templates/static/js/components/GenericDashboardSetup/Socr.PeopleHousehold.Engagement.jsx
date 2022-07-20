import React from 'react'
import Subnav from '../Subnav'
import { ChartGrid } from './ChartGrid'
import { peopleHouseholdColors, secondaryColors } from './helpers/helpers'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'
import '../../../scss/components/PeopleHouseHold.scss'

const PeopleHousehold = () => {

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
  return (
    <div className='people_household_dashboard'>
    
       <Subnav name='State of Cities Reports' dropdownName='People and Households' dropDownItem={subNavContent} buttonText="Download as PNG" />
        <GenericStatsPanel
        /> 
        <ChartGrid minYear={2015} maxYear={2018}
          indicator_ids={[704, "manual", 699, 701, 706, 711]} 
          yearColors={peopleHouseholdColors}
        />
      <div className="spacer"></div>
    </div>
  )
}
export default PeopleHousehold;