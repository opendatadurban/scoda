import React from 'react'
import Sidebar_left from '../Sidebar_left'
import Subnav from '../Subnav'
import Stat_Panel from './City.Finances.Stat.Panel'
import Charts_dashboards from './Charts.City.Finances'

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

const Socr_City_Finances = () => {
        return (
            <div className='sorc_dashboards'>
                <div className='spacer--top'></div>
                <Subnav name='State of Cities Reports' dropdownName='City Finances' dropDownItem={subNavContent} buttonText="Download as PNG" />
                {/* <Sidebar_left /> */}
                <div id='content'>
                <Stat_Panel/>
                <Charts_dashboards/>
                </div>
            </div>
        )
    }

export default Socr_City_Finances;