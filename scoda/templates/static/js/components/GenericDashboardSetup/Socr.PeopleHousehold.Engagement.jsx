import React from 'react'

import Subnav from '../Subnav'

import { ChartGrid } from './ChartGrid'
import { peopleHouseholdColors } from './helpers/helpers'
import { GenericStatsPanel } from './Organisms/GenericStatsPanel'

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
    <div className='sorc_dashboards'>
    
      
      <div id='content' className='sorc_dashboards sorc_dashboards--citizen_engagement' style={{paddingTop: '80px'}}>
      <Subnav name='State of Cities Reports' dropdownName='People and Households' dropDownItem={subNavContent} buttonText="Download as PNG" />
      <GenericStatsPanel
      last_municipal_posts={["E"]}
      last_total_posts={["E"]}
      last_senior_management_posts={["E"]}
      />
       <ChartGrid minYear={2015} maxYear={2018} 
       indicator_ids={[704, 699,701,706,711]} yearColors={peopleHouseholdColors}/>
      </div>
    </div>
  )
}
export default PeopleHousehold;