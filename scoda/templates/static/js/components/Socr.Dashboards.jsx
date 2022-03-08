import React,{ Component } from 'react'
import Sidebar_left from './Sidebar_left'
import Subnav from './Subnav'
import Stat_Panel from './Statistics.Display.Panel'
import Charts_dashboards from './Charts.Dashboards'

export default class Socr_dashboards extends Component {
    render(){
        return(
        <div className='sorc_dashboards'>
            <div className='spacer--top'></div>
              <Subnav name='State of Cities Reports' dropdownName='Service Delivery' dropDownItem='Service Delivery' buttonText="Download as PNG"/>
              <Sidebar_left/>
              <div id='content'>
               <Stat_Panel/>
               <Charts_dashboards/>
               <div className='spacer'></div>
              </div>
            </div>
        )
    }
}