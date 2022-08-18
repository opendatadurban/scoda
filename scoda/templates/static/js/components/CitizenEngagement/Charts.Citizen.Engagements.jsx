import React, {useEffect, useState } from 'react'
import Select from "react-select";
import Button from '../Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import BarChart from '../Barchart'
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
const CitizenEngagment = () => {
  const [cities, setCities] = useState([])
  const [ turnout, setTurnout] = useState([])
  const [ local_turnout, setLocalTurnout] = useState([])
  const [registered_voters, setRegistered_voters] = useState([])
  const [local_registered_voters, setLocalRegistered_voters] = useState([])
  const [select_values, setSelectValues] = useState([])

  const colorsByYearGreen = count => {
    switch (count) {
      case 0:
        return '#B7E0DE'
      case 1:
        return '#6ABFBB'
      case 2:
        return '#2D9B96'
      case 3:
        return '#0F7671'
      default:
        return '#0F7671'
    }
  }

  const colorsByYearOrange = count => {
    switch (count) {
      case 0:
        return '#FFD0B7'
      case 1:
        return '#FFAD81'
      case 2:
        return '#EE702D'
      case 3:
        return '#D44F08'
      default:
        return '#D44F08'
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

  const emptyChartsData = () =>{
    setTurnout([])
    setRegistered_voters([])
    setLocalRegistered_voters([])
    setLocalTurnout([])
  }

  const onChange = (e) => {
  
    setSelectValues(e)
    emptyChartsData()
    axios.get(`/api/explore/codebook?indicator_id=989`)
      .then(res => {
        callback_select(res.data.table, setTurnout, e, colorsByYearGreen)
      })

    axios.get(`/api/explore/codebook?indicator_id=989`)
      .then(res => {
        callback_select(res.data.table, setRegistered_voters, e, colorsByYearOrange)
      })
      axios.get(`/api/explore/codebook?indicator_id=987`)
      .then(res => {
        callback_select(res.data.table, setLocalTurnout, e, colorsByYearGreen)
      })
    axios.get(`/api/explore/codebook?indicator_id=983`)
      .then(res => {
        callback_select(res.data.table, setLocalRegistered_voters, e, colorsByYearOrange)
      })


  }

  const callback_select = (table, callback, select_values, colors) => {
    var cit = _.map(select_values, 'value')
    let data = []
    let current_year = 2000
    let sum = 0
    let count = 0
    while (current_year <= new Date().getFullYear()) {
      if(table.filter(value => { return (value[1] === current_year.toString()) }).length > 0){
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
          color: colors(count)
        })
        count = count + 1
      }
      //setCities(chart_labels)
      current_year = current_year + 1
    }
    callback(data)
  }

  const api = (url, callback) => {
    axios.get(url)
      .then(res => {
        callback(res.data.table)
      })
  }
  const voter_turnout_callback = (table)=>{
    let data = []
    let current_year = 2000
    let sum = 0 
    let count = 0
    while (current_year <= new Date().getFullYear() ) {
      if(table.filter(value => { return (value[1] === current_year.toString()) }).length > 0){
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
          color: colorsByYearGreen(count)
        })
        setCities(chart_labels)
        setTurnout(data)
        setSelectValues(chart_labels)
        count = count + 1

      }
      current_year = current_year + 1
    }
    
    setTurnout(data)
}

const registered_voters_callback = (table)=>{
  let data = []
  let current_year = 2000
  let sum = 0
  let count = 0
  while (current_year <= new Date().getFullYear()) {
    if(table.filter(value => { return (value[1] === current_year.toString()) }).length > 0){
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
        color: colorsByYearOrange(count)
      })
      count = count + 1

    }
    current_year = current_year + 1
  }
  setRegistered_voters(data)
}
const local_voter_turnout_callback = (table)=>{
  let data = []
  let current_year = 2000
  let sum = 0
  let count = 0
  while (current_year <= new Date().getFullYear()) {
    if(table.filter(value => { return (value[1] === current_year.toString()) }).length > 0){
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
        color: colorsByYearGreen(count)
      })
      count = count + 1

    }
    current_year = current_year + 1
  }
  setLocalTurnout(data)
}
const local_registered_voters_callback = (table)=>{
  let data = []
  let current_year = 2000
  let sum = 0 
  let count = 0
  while (current_year <= new Date().getFullYear() ) {
    if(table.filter(value => { return (value[1] === current_year.toString()) }).length > 0){
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
        color: colorsByYearOrange(count)
      })
      count = count + 1

    }
    current_year = current_year + 1
  }
  setLocalRegistered_voters(data)
}



  useEffect(() => {
    api(`/api/explore/codebook?indicator_id=989`, voter_turnout_callback)
    api( `/api/explore/codebook?indicator_id=985`, registered_voters_callback)
    api( `/api/explore/codebook?indicator_id=987`, local_voter_turnout_callback)
    api( `/api/explore/codebook?indicator_id=983`, local_registered_voters_callback)

  }, [])
  return (
    <div >
      {turnout.length < 1 && local_turnout.length < 1  && registered_voters.length < 1  && local_registered_voters.length < 1  ?
        <Modal id="loader" isOpen={turnout.length < 1  && local_turnout.length < 1  && registered_voters.length < 1  && local_registered_voters.length < 1 } className="modal-dialog-centered loader">
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
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>National Election: Voter Turnout</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/989' target='_blank' /></div>
                    </div>
                    {/**National election voter turnout chart */}

                    <BarChart data={{
                      labels: _.map(select_values, 'label'),
                      datasets: turnout.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }} stepSize={200000} hundred={true} divide={1000} x_label="Number of People" />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>National Election: Registered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/985' target='_blank' /></div>
                    </div>
                     {/**National election registered voters chart */}
                     <BarChart data={{
                      labels: _.map(select_values, 'label'),
                      datasets: registered_voters.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }} stepSize={500000} hundred={true} divide={1000} x_label="Number of People" />
                  </div>
                </div>
              </div>
              <hr/>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Voter Turnout</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/987' target='_blank' /></div>
                    </div>
                    {/**Local election registered voters chart */}
                    <BarChart data={{
                      labels: _.map(select_values, 'label'),
                      datasets: local_turnout.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }} stepSize={500000} hundred={true} divide={1000} x_label="Number of People"/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Registered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/983' target='_blank' /></div>
                    </div>
                     {/**Local election voter turnout chart */}
                     <BarChart data={{
                      labels: _.map(select_values, 'label'),
                      datasets: local_registered_voters.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }} stepSize={200000} hundred={true} divide={1000} x_label="Number of People"/>
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
export default CitizenEngagment;