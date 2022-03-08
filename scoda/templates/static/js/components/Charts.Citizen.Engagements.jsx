import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from './Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
// let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]

let voter_turnout = []
let voter_turnout_data = []
let voter_turnout_clean = []
let final_voter_turnout = []
let voterTurnoutCollection = [];

let voter_turnout_local = []
let voter_turnout_data_local = []
let voter_turnout_clean_local = []
let final_voter_turnout_local = []
let voterTurnoutCollection_local = [];

let registered_voters = []
let registered_voters_data = []
let registered_voters_clean = []
let final_registered_voters = []
let registeredVotersCollection = [];

let registered_voters_local = []
let registered_voters_data_local = []
let registered_voters_clean_local = []
let final_registered_voters_local = []
let registeredVotersCollection_local = [];


//Testing data

let data_vt = [
  [141413, 514555, 1334176, 231545, 673331, 152454, 442457, 135545], //2014
  [161413, 564555, 1644176, 231545, 653331, 142454, 432457, 145464],//2015
  [141143, 545455, 1344176, 237635, 623331, 152454, 462457, 175435],//2016
  [112333, 544555, 1244176, 231535, 643331, 132454, 482457, 185464],//2017
]
let data_vt_local = [
  [141413, 514555, 1334176, 231545, 673331, 152454, 442457, 135545], //2014
  [161413, 564555, 1644176, 231545, 653331, 142454, 432457, 145464],//2015
  [141143, 545455, 1344176, 237635, 623331, 152454, 462457, 175435],//2016
  [112333, 544555, 1244176, 231535, 643331, 132454, 482457, 185464],//2017
]

let data_rv = [
  [141413, 514555, 1334176, 231545, 673331, 152454, 442457, 135545], //2000
  [161413, 564555, 1644176, 231545, 653331, 142454, 432457, 145464],//2006
  [141143, 545455, 1344176, 237635, 623331, 152454, 462457, 175435],//2011
  [112333, 544555, 1244176, 231535, 643331, 132454, 482457, 185464],//2016
]

let data_rv_local = [
  [141413, 514555, 1334176, 231545, 673331, 152454, 442457, 135545], //2000
  [161413, 564555, 1644176, 231545, 653331, 142454, 432457, 145464],//2006
  [141143, 545455, 1344176, 237635, 623331, 152454, 462457, 175435],//2011
  [112333, 544555, 1244176, 231535, 643331, 132454, 482457, 185464],//2016
]


//chart declarations
var chartRef1,chartRef2,chartRef3,chartRef4

//City and year data
let sortedData = ["BUF", "CCT", "EKH", "ETK", "JHB", "MAN", "NMB", "TSH"]

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

let myData = []

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

const style = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #4A4A4A',
    borderRadius: '12.5px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '12.5px',
    }
  })
};

const CitizenEngagmentes = () => {

  const mounted = useRef();
  // let [final_voter_turnout, setFinal_voter_turnout] = useState([])
  const [stepSize, setStepSize] = useState(200000);
  const [isMulti, setIsMulti] = useState(true);
  const [loader, setLoader] = useState(false);
  const [chartYears, setChartYears] = useState(['Year', '2014', '2015', '2016', '2017']);
  const [noYears, setNoYears] = useState(['2014', '2015', '2016', '2017']);
  const [noYears1, setNoYears1] = useState(['2000', '2006', '2011', '2016']);
  const [multiValue, setMultiValue] = useState([
    { value: "BUF", label: "BUF" },
    { value: "CCT", label: "CCT" },
    { value: "JHB", label: "JHB" },
    { value: "EKH", label: "EKH" },
    { value: "ETK", label: "ETK" },
    { value: "MAN", label: "MAN" },
    { value: "NMB", label: "NMB" },
    { value: "TSH", label: "TSH" }
  ]);
  const [filterOptions, setfilterOptions] = useState([
    { value: "BUF", label: "BUF" },
    { value: "CCT", label: "CCT" },
    { value: "JHB", label: "JHB" },
    { value: "EKH", label: "EKH" },
    { value: "ETK", label: "ETK" },
    { value: "MAN", label: "MAN" },
    { value: "NMB", label: "NMB" },
    { value: "TSH", label: "TSH" }
  ]);

  useEffect(() => {
    if (!mounted.current) {
      //equivilent to componentdidmount
      national_election_voter_turnout();
      national_election_registered_voters();
      national_election_voter_turnout_local();
      national_election_registered_voters_local();

      renderChart_national_election_voter_turnout();
      renderChart_national_election_voter_turnout_local();
      renderChart_national_election_registered_voters();
      renderChart_national_election_registered_voters_local();
      mounted.current = true;
    }
    else {
      //equivilent to componentdidupdate
      renderChart_national_election_voter_turnout();
      renderChart_national_election_voter_turnout_local();
      renderChart_national_election_registered_voters();
      renderChart_national_election_registered_voters_local();
    }
  });
  const national_election_voter_turnout = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      voterTurnoutCollection.push(data_vt[toNum[year] - 1]);
      voter_turnout.push(voterTurnoutCollection[count])
      voter_turnout_clean.push(voter_turnout)
      count++
    }
    final_voter_turnout = voter_turnout_clean[0]
  }
  const national_election_voter_turnout_local = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      voterTurnoutCollection_local.push(data_vt_local[toNum[year] - 1]);
      voter_turnout_local.push(voterTurnoutCollection_local[count])
      voter_turnout_clean_local.push(voter_turnout_local)
      count++
    }
    final_voter_turnout_local = voter_turnout_clean_local[0]
  }
  const national_election_registered_voters = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      registeredVotersCollection.push(data_rv[toNum[year] - 1]);
      registered_voters.push(registeredVotersCollection[count])
      registered_voters_clean.push(registered_voters)
      count++
    }
    final_registered_voters = registered_voters_clean[0]
  }
  const national_election_registered_voters_local = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      registeredVotersCollection_local.push(data_rv_local[toNum[year] - 1]);
      registered_voters_local.push(registeredVotersCollection_local[count])
      registered_voters_clean_local.push(registered_voters_local)
      count++
    }
    final_registered_voters_local = registered_voters_clean_local[0]
  }


  const handleMultiChange = (option) => {
    setMultiValue(option)

    voter_turnout_data = []
    voter_turnout_data_local = []
    registered_voters_data = []
    registered_voters_data_local = []

    let cYears = chartYears
    for (let item = 0; item < cYears.length - 1; item++) {
      voter_turnout_data.push([])
      voter_turnout_data_local.push([])
      registered_voters_data.push([])
      registered_voters_data_local.push([])
    }

    //Empty array so new data can be assigned
    myData = []

    //new 
    final_voter_turnout = []
    final_voter_turnout_local = []
    final_registered_voters = []
    final_registered_voters_local = []
    data_vt_local = []
    data_rv = []
    data_rv_local = []
    option.map(function (item, i) {

      myData.push(item.value);

      sortedData = myData.sort()
      if (sortedData.includes('BUF')) {
        //voter_turnout_data[year][index]  voterTurnoutCollection[year][index]
        for (let index = 0; index < cYears.length - 1; index++) {

          voter_turnout_data[index][0] = voterTurnoutCollection[index][0]
          voter_turnout_data_local[index][0] = voterTurnoutCollection_local[index][0]
          registered_voters_data[index][0] = registeredVotersCollection[index][0]
          registered_voters_data_local[index][0] = registeredVotersCollection_local[index][0]
        }

      }
      if (sortedData.includes('CCT')) {

        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][1] = voterTurnoutCollection[index][1]
          voter_turnout_data_local[index][1] = voterTurnoutCollection_local[index][1]
          registered_voters_data[index][1] = registeredVotersCollection[index][1]
          registered_voters_data_local[index][1] = registeredVotersCollection_local[index][1]
        }

      }
      if (sortedData.includes('EKH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][2] = voterTurnoutCollection[index][2]
          voter_turnout_data_local[index][2] = voterTurnoutCollection_local[index][2]
          registered_voters_data[index][2] = registeredVotersCollection[index][2]
          registered_voters_data_local[index][2] = registeredVotersCollection_local[index][2]
        }
      }
      if (sortedData.includes('ETK')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][3] = voterTurnoutCollection[index][3]
          voter_turnout_data_local[index][3] = voterTurnoutCollection_local[index][3]
          registered_voters_data[index][3] = registeredVotersCollection[index][3]
          registered_voters_data_local[index][3] = registeredVotersCollection_local[index][3]
        }
      }
      if (sortedData.includes('JHB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][4] = voterTurnoutCollection[index][4]
          voter_turnout_data_local[index][4] = voterTurnoutCollection_local[index][4]
          registered_voters_data[index][4] = registeredVotersCollection[index][4]
          registered_voters_data_local[index][4] = registeredVotersCollection_local[index][4]
        }
      }
      if (sortedData.includes('MAN')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][5] = voterTurnoutCollection[index][5]
          voter_turnout_data_local[index][5] = voterTurnoutCollection_local[index][5]
          registered_voters_data[index][5] = registeredVotersCollection[index][5]
          registered_voters_data_local[index][5] = registeredVotersCollection_local[index][5]
        }
      }
      if (sortedData.includes('NMB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][6] = voterTurnoutCollection[index][6]
          voter_turnout_data_local[index][6] = voterTurnoutCollection_local[index][6]
          registered_voters_data[index][6] = registeredVotersCollection[index][6]
          registered_voters_data_local[index][6] = registeredVotersCollection_local[index][6]
        }
      }
      if (sortedData.includes('TSH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][7] = voterTurnoutCollection[index][7]
          voter_turnout_data_local[index][7] = voterTurnoutCollection_local[index][7]
          registered_voters_data[index][7] = registeredVotersCollection[index][7]
          registered_voters_data_local[index][7] = registeredVotersCollection_local[index][7]
        }
      }

      for (let index = 0; index < cYears.length - 1; index++) {
        final_voter_turnout[index] = voter_turnout_data[index].filter(Boolean)
        final_voter_turnout_local[index] = voter_turnout_data_local[index].filter(Boolean)
        final_registered_voters[index] = registered_voters_data[index].filter(Boolean)
        final_registered_voters_local[index] = registered_voters_data_local[index].filter(Boolean)
      }

    })
  }

  const renderChart_national_election_voter_turnout = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#B7E0DE'
          break;
        case 1:
          color = '#89CCC9'
          break;
        case 2:
          color = '#4CB1AC'
          break;
        case 3:
          color = '#29938E'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_voter_turnout[i],
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef1) { chartRef1.destroy(); }
    var ctx = document.getElementById('mc').getContext('2d');
    chartRef1 = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        legend: {
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 8,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },
        tooltips: {
          mode: 'index',
          intercept: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: { fontStyle: 'bold', steps: 4, fontFamily: "Montserrat", },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              steps:10,
              stepSize: 200000,
              callback: function (value, index, values) {
                if(value < 800001) {
                  values = Math.round(value * 10) / 10000 + 'K ';
                  }else {
                    values = Math.round(value * 10) / 10000000 + 'M ';
                  }
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of People",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  const renderChart_national_election_voter_turnout_local = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#B7E0DE'
          break;
        case 1:
          color = '#89CCC9'
          break;
        case 2:
          color = '#4CB1AC'
          break;
        case 3:
          color = '#29938E'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_voter_turnout_local[i],
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef3) { chartRef3.destroy(); }
    var ctx = document.getElementById('mc2').getContext('2d');
    chartRef3 = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        legend: {
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 8,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },
        tooltips: {
          mode: 'index',
          intercept: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: { fontStyle: 'bold', steps: 4, fontFamily: "Montserrat", },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              steps:10,
              stepSize: 200000,
              callback: function (value, index, values) {
                if(value < 800001) {
                  values = Math.round(value * 10) / 10000 + 'K ';
                  }else {
                    values = Math.round(value * 10) / 10000000 + 'M ';
                  }
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of People",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  const renderChart_national_election_registered_voters = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#FFD0B7'
          break;
        case 1:
          color = '#FFAD81'
          break;
        case 2:
          color = '#EE702D'
          break;
        case 3:
          color = '#D44F08'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_registered_voters[i],
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef2) { chartRef2.destroy(); }
    var ctx = document.getElementById('mc1').getContext('2d');
    chartRef2 = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        legend: {
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 8,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },
        tooltips: {
          mode: 'index',
          intercept: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: { fontStyle: 'bold', steps: 4, fontFamily: "Montserrat", },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              steps:10,
              stepSize: 200000,
              callback: function (value, index, values) {
                if(value < 800001) {
                  values = Math.round(value * 10) / 10000 + 'K ';
                  }else {
                    values = Math.round(value * 10) / 10000000 + 'M ';
                  }
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of People",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  const renderChart_national_election_registered_voters_local = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#FFD0B7'
          break;
        case 1:
          color = '#FFAD81'
          break;
        case 2:
          color = '#EE702D'
          break;
        case 3:
          color = '#D44F08'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_registered_voters_local[i],
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef4) { chartRef4.destroy(); }
    var ctx = document.getElementById('mc3').getContext('2d');
    chartRef4 = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        legend: {
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 8,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },
        tooltips: {
          mode: 'index',
          intercept: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: { fontStyle: 'bold', steps: 4, fontFamily: "Montserrat", },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              steps:10,
              stepSize: 200000,
              callback: function (value, index, values) {
                if(value < 800001) {
                  values = Math.round(value * 10) / 10000 + 'K ';
                  }else {
                    values = Math.round(value * 10) / 10000000 + 'M ';
                  }
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of People",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  return (
    <div >
      {loader ?
        <Modal id="loader" isOpen={loader} className="modal-dialog-centered loader">
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
                    value={multiValue}
                    options={filterOptions}
                    onChange={handleMultiChange}
                    isMulti={isMulti}
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
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc'></canvas>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>National Election: Registered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc1'></canvas>
                  </div>
                </div>
              </div>
              <hr/>
              <div className='row'>
              <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Voter Turnout</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc2'></canvas>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Rgistered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc3'></canvas>
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