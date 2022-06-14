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
