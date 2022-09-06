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
        name: "Municipal Human Resources",
        href: "socr#/human_resources",
        active: true
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
      }
    ]
  }

const Socr_Human_Resources = () => {
  const [senior_management, setSeniorManagement] = useState([])
  const [senior_management_sum, setSeniorManagementSum] = useState()
  const [total_posts, setTotalPosts] = useState([])
  const [total_posts_sum, setTotalPostsSum] = useState(0)
  const [municipal_posts, setMunicipalPosts] = useState([])
  const [municipal_posts_sum, setMunicipalPostsSum] = useState()
  const [cities, setCities] = useState([])
  const [select_values, setSelectValues] = useState([])
  const [last_total_posts, setLastTotalPosts] =useState({})
  const [last_municipal_posts, setLastMunicipalPost] =useState({})
  const [last_senior_management_posts, setLastSeniorManagementPost] =useState({})

  const emptyChartsData = ()=>{
    setTotalPosts([])
    setMunicipalPosts([])
    setSeniorManagement([])
  }
  const colorsByYear = year => {
    switch (year) {
      case 2014:
        return '#E0E0E0'
      case 2015:
        return '#D0D1E6'
      case 2016:
        return '#74A9CF'
      case 2017:
        return '#0570B0'
      default:
        return '#d6d6d6'
    }
  }
  const labels = city => {
    switch (city) {
      case 'Buffalo City':
        return "BUF";
      case 'City of Cape Town':
        return "CPT"
      case 'City of Joburg':
        return "JHB"
      case 'Ekurhuleni':
        return "EKU"
      case "Mangaung":
        return "MAN"
      case "Msunduzi":
        return "MSU"
      case "Nelson Mandela Bay":
        return "NMA"
      case "Tshwane":
        return "TSH"
      case "eThekwini":
        return "ETH"
    }
  }
    //Total posts
    const total_posts_callback = table => {
      let data = []
      let current_year = 2014
      let sum = 0
      while (table.filter(value => { return (value[1] === current_year.toString()) }).length > 0) {
  
        let current_data = table.filter(value => { return (value[1] === current_year.toString()) })
        let chart_labels = []
        let values = []
  
        for (let i = 0; i < current_data.length; i++) {
          current_data[i][0] = labels(current_data[i][0])
          chart_labels.push({ label: current_data[i][0], value: current_data[i][0] })
          values.push(current_data[i][2])
          sum += current_data[i][2] ? current_data[i][2] : 0
        }
        data.push({
          year: current_year,
          data :  current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYear(current_year)
        })
        setCities(chart_labels)
        setSelectValues(chart_labels)
        current_year = current_year + 1
      }
      setTotalPostsSum(sum)
      setTotalPosts(data)
      setLastTotalPosts(data[data.length - 1].data)
      console.log('total_posts', data[data.length - 1])
    }
    const codebook_total_posts_api = callback => {
      axios.get(`/api/explore/codebook?indicator_id=970`)
        .then(res => {
          callback(res.data.table)
        })
    }
    useEffect(() => {
      codebook_total_posts_api(total_posts_callback)
    }, [])
    //End Total posts
  
  
    // Municipal posts/vacancies 
    const municipal_posts_callback = table => {
      let data = []
      let current_year = 2014
      let sum = 0
      while (table.filter(value => { return (value[1] === current_year.toString()) }).length > 0) {
  
        let current_data = table.filter(value => { return (value[1] === current_year.toString()) })
        let chart_labels = []
        let values = []
        for (let i = 0; i < current_data.length; i++) {
          current_data[i][0] = labels(current_data[i][0])
          chart_labels.push(current_data[i][0])
          values.push(current_data[i][2])
          sum += current_data[i][2] ? current_data[i][2] : 0
        }
        data.push({
          year: current_year,
          data: current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYear(current_year)
        })
        //setCities(chart_labels)
        current_year = current_year + 1
      }
      setMunicipalPosts(data)
      setMunicipalPostsSum(sum)
      setLastMunicipalPost(data[data.length -1].data)
      console.log('last_municipal_posts', data[data.length -1])
    }
  
    const codebook_municipal_posts_api = callback => {
      axios.get(`/api/explore/codebook?indicator_id=968`)
        .then(res => {
          callback(res.data.table)
        })
  
    }
    useEffect(() => {
      codebook_municipal_posts_api(municipal_posts_callback)
    }, [])
    // End Municipal posts/vacancies 
  
  
    const senior_management_callback = table => {
      let data = []
      let current_year = 2014
      let sum = 0
      while (table.filter(value => { return (value[1] === current_year.toString()) }).length > 0) {
  
        let current_data = table.filter(value => { return (value[1] === current_year.toString()) })
        let chart_labels = []
        let values = []
        for (let i = 0; i < current_data.length; i++) {
          current_data[i][0] = labels(current_data[i][0])
          chart_labels.push(current_data[i][0])
          values.push(current_data[i][2])
          sum += current_data[i][2] ? current_data[i][2] : 0
        }
        data.push({
          year: current_year,
          data: current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYear(current_year)
        })
        //setCities(chart_labels)
        current_year = current_year + 1
      }
      setSeniorManagement(data)
      setSeniorManagementSum(sum)
      setLastSeniorManagementPost(data[data.length -1].data)
      console.log('last_senior_management_posts', data[data.length -1])
    }
  
    const codebook_senior_management_api = callback => {
      axios.get(`/api/explore/codebook?indicator_id=969`)
        .then(res => {
          console.log('codebook_senior_management_api', res)
          callback(res.data.table)
        })
  
    }
  
    const onChange = (e) => {
      setSelectValues(e)
      emptyChartsData()
      axios.get(`/api/explore/codebook?indicator_id=970`)
        .then(res => {
          callback_select(res.data.table, setTotalPosts, e, setTotalPostsSum)
        })
  
      axios.get(`/api/explore/codebook?indicator_id=968`)
        .then(res => {
          callback_select(res.data.table, setMunicipalPosts, e, setMunicipalPostsSum)
        })
  
      axios.get(`/api/explore/codebook?indicator_id=969`)
        .then(res => {
          callback_select(res.data.table, setSeniorManagement, e, setSeniorManagementSum)
        })
  
    }
  
    const callback_select = (table, callback, select_values, sum_callback) => {
      console.log(table,"table value")
      var cit = _.map(select_values, 'value')
      let data = []
      let current_year = 2014
      let sum = 0
      while (table.filter(value => { return (value[1] === current_year.toString()) }).length > 0) {
        let current_data = table.filter(value => { return (value[1] === current_year.toString()) })
        let values = []
        let chart_labels = []
        for (let i = 0; i < current_data.length; i++) {
          var label = labels(current_data[i][0])
          if (cit.includes(label)) {
            current_data[i][0] = label
            values.push(current_data[i][2])
            sum += current_data[i][2] ? current_data[i][2] : 0
          }
        }
        data.push({
          year: current_year,
          data: current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYear(current_year)
        })
        //setCities(chart_labels)
        current_year = current_year + 1
      }
      callback(data)
      sum_callback(sum)
    }
  
    useEffect(() => {
      codebook_senior_management_api(senior_management_callback)
    }, [])
  
        return (
            <div className='sorc_dashboards'>
                <div className='spacer--top'></div>
                <Subnav name='State of Cities Reports' dropdownName='Municipal Human Resources' dropDownItem={subNavContent} buttonText="Download as PNG" />
                {/* <Sidebar_left /> */}
                <div id='content'>
                <Stat_Panel
                last_municipal_posts = {last_municipal_posts}
                last_total_posts = {last_total_posts}
                last_senior_management_posts = {last_senior_management_posts}
                />
                <Charts_dashboards
                  select_values = {select_values}
                  total_posts = {total_posts}
                  municipal_posts = {municipal_posts}
                  cities = {cities}
                  onChange = {onChange} 
                  senior_management ={senior_management}
                />
                </div>
            </div>
        )
    }
export default Socr_Human_Resources;