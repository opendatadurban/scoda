import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar_left from '../Sidebar_left'
import Subnav from '../Subnav'
import Stat_Panel from './Human.Resources.Stat.Panel'
import Charts_dashboards from './Charts.Human.Resources'
import _ from 'lodash';

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
          name: "City Finances", 
          href: "socr#/city_finances", 
          active: false 
      }, 
      {
         name: "Human Resources", 
         href: "socr#/human_resources", 
         active: true 
      }
    ]
  }

const Socr_Human_Resources = () => {

      //Senior Management



        return (
            <div className='sorc_dashboards'>
                <div className='spacer--top'></div>
                <Subnav name='State of Cities Reports' dropdownName='Human Resources' dropDownItem={subNavContent} buttonText="Download as PNG" />
                <Sidebar_left />
                <div id='content'>
                <Stat_Panel/>
                <Charts_dashboards />
                </div>
            </div>
        )
    }
export default Socr_Human_Resources;