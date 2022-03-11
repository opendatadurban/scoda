import React, { Component } from 'react'
import Sidebar_left from './Sidebar_left'
import Subnav from './Subnav'
import Stat_Panel from './Human.Resources.Stat.Panel'
import Charts_dashboards from './Charts.Human.Resources'

const Socr_Human_Resources = () => {
        return (
            <div className='sorc_dashboards'>
                <div className='spacer--top'></div>
                <Subnav name='State of Cities Reports' dropdownName='Human Resources' dropDownItem='Human Resources' buttonText="Download as PNG" />
                <Sidebar_left />
                <div id='content'>
                <Stat_Panel/>
                <Charts_dashboards/>
                </div>
            </div>
        )
    }
export default Socr_Human_Resources;