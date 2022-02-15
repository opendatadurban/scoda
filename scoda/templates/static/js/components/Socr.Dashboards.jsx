import React,{ Component, lazy } from 'react'

const Sidebar_left =  lazy(() => import('./Sidebar_left'));
const Subnav =  lazy(() => import('./Subnav'));
const Stat_Panel =  lazy(() => import('./Statistics.Display.Panel'));
const Charts_dashboards =  lazy(() => import('./Charts.Dashboards'));

const Socr_dashboards =()=>{
    return(
    <div className='sorc_dashboards'>
        <div className='spacer--top'></div>
          <Subnav name='State of Cities Reports' dropdownName='Service Delivery' buttonText="Download as PNG"/>
          <Sidebar_left/>
          <div id='content'>
           <Stat_Panel/>
           <Charts_dashboards/>
           <div className='spacer'></div>
          </div>
        </div>
    )
}
export default Socr_dashboards;