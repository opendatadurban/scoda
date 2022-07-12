import React, {lazy, Component } from 'react'

import Subnav from '../Subnav'
import Charts_dashboards from './Charts.Citizen.Engagements'

const Socr_Citizens_Engagement = () => {

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
  console.log(PeopleChart)
  return (
    <div className='sorc_dashboards'>
      <div className='spacer--top'></div>
      <Subnav name='State of Cities Reports' dropdownName='Citizen Engagement' dropDownItem={subNavContent} buttonText="Download as PNG" />
      <div id='content' className='sorc_dashboards sorc_dashboards--citizen_engagement'>
       <Charts_dashboards/>
      </div>
    </div>
  )
}
export default Socr_Citizens_Engagement;