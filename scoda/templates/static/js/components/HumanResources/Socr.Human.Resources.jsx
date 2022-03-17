import React, { Component, useState } from 'react'
import axios from 'axios'
import Sidebar_left from '../Sidebar_left'
import Subnav from '../Subnav'
import Stat_Panel from './Human.Resources.Stat.Panel'
import Charts_dashboards from './Charts.Human.Resources'

const Socr_Human_Resources = () => {
    const subNavContent = {
        dropdownMenu: [ 
            {
              name: "Service Delivery", 
              href: "socr#/service-delivery", 
              active: false 
            },
            { 
              name: "Citizen Engagement", 
              href: "socr#/citizen-engagement", 
              active: false 
            }, 
            {
              name: "City Finances", 
              href: "socr#/city-finances", 
              active: false 
          }, 
          {
             name: "Human Resources", 
             href: "socr#/human-resources", 
             active: true 
          }
        ]
      }
      const [current_year, setCurrentYear] = useState(2015)
      const codebook_total_posts = ()=>{
        axios.get(`/api/explore/codebook?indicator_id=970`)
        .then(res=>{
            const table = res.data.table
            let data = []
            console.log('codebook_total_posts', res.data)
            let current_year = 2015
            while(table.filter(value => {return (value[1] === current_year.toString())}).length > 0){
                data.push({
                    [current_year] :  table.filter(value => {return (value[1] === current_year.toString())})
                })
                current_year = current_year +1
            }
            console.log('current_year', data)
        })
      }
      codebook_total_posts()
        return (
            <div className='sorc_dashboards'>
                <div className='spacer--top'></div>
                <Subnav name='State of Cities Reports' dropdownName='Human Resources' dropDownItem={subNavContent} buttonText="Download as PNG" />
                <Sidebar_left />
                <div id='content'>
                <Stat_Panel/>
                <Charts_dashboards/>
                </div>
            </div>
        )
    }
export default Socr_Human_Resources;