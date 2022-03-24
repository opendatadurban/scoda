import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from '../Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import HumanResourcesData from '../../data/HumanResourceData'
import Barchart from '../Barchart'
import Piechart from '../PieChart'
import axios from 'axios'
import _ from 'lodash';


const style = {
  control: (base) => ({
    ...base,
    border: '1px solid #4A4A4A',
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
    }
  })
};

const CitizenEngagmentes = ({ }) => {
  const [senior_management, setSeniorManagement] = useState([])
  const [senior_management_sum, setSeniorManagementSum] = useState()
  const [total_posts, setTotalPosts] = useState([])
  const [total_posts_sum, setTotalPostsSum] = useState(0)
  const [municipal_posts, setMunicipalPosts] = useState([])
  const [municipal_posts_sum, setMunicipalPostsSum] = useState()
  const [cities, setCities] = useState([])
  const [select_values, setSelectValues] = useState([])

 
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
        return "CCT"
      case 'City of Joburg':
        return "JHB"
      case 'Ekurhuleni':
        return "EKH"
      case "Mangaung":
        return "MAN"
      case "Msunduzi":
        return "PMB"
      case "Nelson Mandela Bay":
        return "NMB"
      case "Tshwane":
        return "TSH"
      case "eThekwini":
        return "ETK"
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
        //data :  current_data,
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
  }

  const codebook_municipal_posts_api = callback => {
    axios.get(`/api/explore/codebook?indicator_id=968`)
      .then(res => {
        console.log('codebook_municipal_posts_api', res)
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
    <div >
      { total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1?
        <Modal id="loader" isOpen={total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1} className="modal-dialog-centered loader">
          <ModalBody>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-0 ml-3 pt-4">
                <Spinner type="grow" color="secondary" size="sm" />
                <Spinner type="grow" color="success" size="sm" />
                <Spinner type="grow" color="danger" size="sm" />
                <Spinner type="grow" color="warning" size="sm" />
              </div>
              <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
            </div>
            <br />
          </ModalBody>
        </Modal>
        : ''
      }
      <div className='container-fluid charts_dashboards'>
        <div className='charts_dashboards--left_container p-0'>
          <div className='charts_dashboards--select'>
            <div className='charts_dashboards--select-container'>
              <Select
                id='multiple'
                name="filters"
                placeholder="Filter City"
                value={select_values}
                options={cities}
                onChange={onChange}
                isMulti={true}
                styles={style}
              />
            </div>
          </div>
          <div className='charts_dashboards--barcharts'>
            <div className='row'>
              <div className='col-md-4 left-container'>
                <div className='charts'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Total number of municipal posts</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/970' target='_blank' /></div>
                  </div>
                  {total_posts ? 
                  <Barchart stepSize={5000} hundred={true} divide={1000} x_label="Number of Posts"
                    data={{
                      labels: _.map(select_values, 'label'),
                      datasets: total_posts.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }}
                  />:""
                  }
                </div>
                <div className='post_breakdown-container'>
                  <h1>Municipal Post Breakdown</h1>
                  <table>
                    <tr>
                      <th>Department</th>
                      <th className='right'>Codebook ID</th>
                    </tr>
                    {HumanResourcesData.map((item, i) => (
                      <tr key={i}>
                        <td>{item.department}</td>
                        <td className='right'><a href={item.link} target='_blank'>{item.codebook_id}</a></td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='charts'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Vacancies</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/968' target='_blank' /></div>
                  </div>
                  <Barchart data={{
                    labels: _.map(select_values, 'label'),
                    datasets: municipal_posts.map(data => {
                      return ({
                        backgroundColor: data.color,
                        borderColor: data.color,
                        data: data.values,
                        label: data.year,
                        stack: data.year
                      })
                    })
                  }} stepSize={2} hundred={false} divide={1} x_label="Number of Vacancies" />
                </div>
                <div>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Posts</h1></div>

                    </div>
                    <Piechart data={{
                      labels: ['Total filled Posts', 'Vacancies'],
                      datasets: [{
                        data: [total_posts_sum, municipal_posts_sum],
                        backgroundColor: ['#0570B0', '#E7E7E7'],
                        borderColor: ['#0570B0', '#E7E7E7'],
                      }

                      ]
                    }} />
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='charts'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Number of Senior Management Vacancies</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/969' target='_blank' /></div>
                  </div>
                  <Barchart data={{
                    labels: _.map(select_values, 'label'),
                    datasets: senior_management.map(data => {
                      return ({
                        backgroundColor: data.color,
                        borderColor: data.color,
                        data: data.values,
                        label: data.year,
                        stack: data.year
                      })
                    })
                  }} stepSize={2} hundred={false} divide={1} x_label="Number of Vacancies" />
                </div>
                <div>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Senior Management Posts</h1></div>
                    </div>
                    <Piechart data={{
                      labels: ['Total filled Posts', 'Vacancies'],
                      datasets: [{
                        data: [total_posts_sum, senior_management_sum],
                        backgroundColor: ['#0570B0', '#E7E7E7'],
                        borderColor: ['#0570B0', '#E7E7E7'],
                      }

                      ]
                    }} />

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  )
}
export default CitizenEngagmentes;