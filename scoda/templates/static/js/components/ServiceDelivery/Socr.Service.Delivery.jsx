import React,{ Component, lazy } from 'react'

const Sidebar_left =  lazy(() => import('../Sidebar_left'));
const Subnav =  lazy(() => import('../Subnav'));
const Stat_Panel =  lazy(() => import('./Service.Delivery.Stat.Panel'));
const Charts_dashboards =  lazy(() => import('./Charts.Service.Delivery'));

const Socr_dashboards =()=>{
  const subNavContent = {
    dropdownMenu: [
      {
        name: "Service Delivery",
        href: "socr#/service_delivery",
        active: true
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
        active: false
      },
      {
        name: "Employment",
        href: "socr#/employment",
        active: false
      },
      {
        name: "Dwellings",
        href: "socr#/dwellings",
        active: false
      },
      {
        name: "Household Income",
        href: "socr#/household_income",
        active: false
      },
      {
        name: "Food Security, Literacy and Inequality",
        href: "socr#/food_security",
        active: false
      },
      {
        name: "Life Expectancy and Health",
        href: "socr#/life_expectancy",
        active: false
      },
      {
        name: "Education",
        href: "socr#/education",
        active: false
      },
      {
        name: "Sustainability",
        href: "socr#/sustainability",
        active: false
      },
      {
        name: "ICT Infrastructure",
        href: "socr#/infrastructure",
        active: false

      },
      {
        name: "Transport Mode",
        href: "socr#/transport_mode",
        active: false
      },
      {
        name: "Public Transport Spend",
        href: "socr#/public_transport_spend",
        active: false
      },
      {
        name: "Travel Time",
        href: "socr#/travel_time",
        active: false
      }
    ]
  }
    return(
    <div className='sorc_dashboards'>
        <div className='spacer--top'></div>
          <Subnav name='State of Cities Reports' dropdownName='Service Delivery' dropDownItem={subNavContent} buttonText="Download as PNG"/>
          {/* <Sidebar_left/> */}
          <div id='content'>
           <Stat_Panel/>
           <Charts_dashboards/>
           <div className='spacer'></div>
          </div>
        </div>
    )
}
export default Socr_dashboards;
