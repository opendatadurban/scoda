import React from 'react'

import Subnav from '../Subnav'

import { Charts } from './Charts'
import { peopleHouseholdColors } from './helpers/helpers'

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
        active: true
      },
      {
        name: "Municipal Human Resources",
        href: "socr#/human_resources",
        active: false
      }
    ]
  }
  return (
    <div className='sorc_dashboards'>
      <div className='spacer--top'></div>
      <Subnav name='State of Cities Reports' dropdownName='Citizen Engagement' dropDownItem={subNavContent} buttonText="Download as PNG" />
      <div id='content' className='sorc_dashboards sorc_dashboards--citizen_engagement'>
       <Charts minYear={2015} maxYear={2018} 
       indicator_ids={[704, 699,701]} yearColors={peopleHouseholdColors}/>
      </div>
    </div>
  )
}
export default PeopleHousehold;