import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from '../Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
// let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]

let voter_turnout = []
let voter_turnout_data = []
let voter_turnout_clean = []
let final_voter_turnout = []
let WastefulExpenditureCollection = [];

let voter_turnout_local = []
let voter_turnout_data_local = []
let voter_turnout_clean_local = []
let final_voter_turnout_local = []
let IrregularExpenditureCollection = [];

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
  [296933, 1059706, 1315799, 965751, 276986, 423817, 825630, 991520], //2014
  [316478, 1362376, 1562604, 1120768, 295664, 460123, 969515, 1330184],//2015
  [300025, 1460652, 1660009, 1200739, 300197, 444999, 1118268, 1439877],//2016
  [276182, 1402925, 1622378, 1200968, 278161, 404253, 1132461, 1395061],//2017
]
let data_vt_local = [
  [199655, 719444, 612937, 513676, 160011, 290638, 422829, 517341], //2014
  [189628, 744967, 708664, 537523, 155482, 289449, 440941, 616256],//2015
  [218108, 1134144, 1107068, 804170, 204967, 369366, 736009, 990263],//2016
  [235369, 1271923, 1281864, 921547, 245908, 390323, 896973, 1148559],//2017
]

let data_rv = [
  [358812, 1448232, 1751381, 1254407, 345371, 514360, 1072466, 1375431], //2000
  [387452, 1719878, 2003007, 1420748, 372733, 566668, 1218917, 1639153],//2006
  [399556, 1911429, 2184484, 1547459, 401048, 592749, 1456362, 1824339],//2011
  [421247, 2008243, 2291299, 1631056, 425263, 607134, 1557224, 1961406],//2016
]

let data_rv_local = [
  [341665, 1269582, 1552791, 1137951, 314428, 469424, 925884, 1233786], //2000
  [358460, 1486781, 1739292, 1240348, 343594, 513491, 1064759, 1385923],//2006
  [384910, 1745853, 1424392, 372692, 282708, 569470, 1326427, 1666549],//2011
  [419044, 1977690, 2239966, 1587116, 425211, 609217, 1512524, 1919724],//2016
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
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
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
      WastefulExpenditureCollection.push(data_vt[toNum[year] - 1]);
      voter_turnout.push(WastefulExpenditureCollection[count])
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
      IrregularExpenditureCollection.push(data_vt_local[toNum[year] - 1]);
      voter_turnout_local.push(IrregularExpenditureCollection[count])
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
        //voter_turnout_data[year][index]  WastefulExpenditureCollection[year][index]
        for (let index = 0; index < cYears.length - 1; index++) {

          voter_turnout_data[index][0] = WastefulExpenditureCollection[index][0]
          voter_turnout_data_local[index][0] = IrregularExpenditureCollection[index][0]
          registered_voters_data[index][0] = registeredVotersCollection[index][0]
          registered_voters_data_local[index][0] = registeredVotersCollection_local[index][0]
        }

      }
      if (sortedData.includes('CCT')) {

        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][1] = WastefulExpenditureCollection[index][1]
          voter_turnout_data_local[index][1] = IrregularExpenditureCollection[index][1]
          registered_voters_data[index][1] = registeredVotersCollection[index][1]
          registered_voters_data_local[index][1] = registeredVotersCollection_local[index][1]
        }

      }
      if (sortedData.includes('EKH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][2] = WastefulExpenditureCollection[index][2]
          voter_turnout_data_local[index][2] = IrregularExpenditureCollection[index][2]
          registered_voters_data[index][2] = registeredVotersCollection[index][2]
          registered_voters_data_local[index][2] = registeredVotersCollection_local[index][2]
        }
      }
      if (sortedData.includes('ETK')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][3] = WastefulExpenditureCollection[index][3]
          voter_turnout_data_local[index][3] = IrregularExpenditureCollection[index][3]
          registered_voters_data[index][3] = registeredVotersCollection[index][3]
          registered_voters_data_local[index][3] = registeredVotersCollection_local[index][3]
        }
      }
      if (sortedData.includes('JHB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][4] = WastefulExpenditureCollection[index][4]
          voter_turnout_data_local[index][4] = IrregularExpenditureCollection[index][4]
          registered_voters_data[index][4] = registeredVotersCollection[index][4]
          registered_voters_data_local[index][4] = registeredVotersCollection_local[index][4]
        }
      }
      if (sortedData.includes('MAN')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][5] = WastefulExpenditureCollection[index][5]
          voter_turnout_data_local[index][5] = IrregularExpenditureCollection[index][5]
          registered_voters_data[index][5] = registeredVotersCollection[index][5]
          registered_voters_data_local[index][5] = registeredVotersCollection_local[index][5]
        }
      }
      if (sortedData.includes('NMB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][6] = WastefulExpenditureCollection[index][6]
          voter_turnout_data_local[index][6] = IrregularExpenditureCollection[index][6]
          registered_voters_data[index][6] = registeredVotersCollection[index][6]
          registered_voters_data_local[index][6] = registeredVotersCollection_local[index][6]
        }
      }
      if (sortedData.includes('TSH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          voter_turnout_data[index][7] = WastefulExpenditureCollection[index][7]
          voter_turnout_data_local[index][7] = IrregularExpenditureCollection[index][7]
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
    var ctx = document.getElementById('national_election_voter_turnout').getContext('2d');
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
    var ctx = document.getElementById('national_election_voter_turnout_local').getContext('2d');
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
    var ctx = document.getElementById('national_election_registered_voters').getContext('2d');
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
    var ctx = document.getElementById('national_election_registered_voters_local').getContext('2d');
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
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                    {/**National election voter turnout chart */}
                    <canvas id='national_election_voter_turnout'></canvas>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>National Election: Registered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                     {/**National election registered voters chart */}
                    <canvas id='national_election_registered_voters'></canvas>
                  </div>
                </div>
              </div>
              <hr/>
              <div className='row'>
              <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Voter Turnout</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                     {/**Local election voter turnout chart */}
                    <canvas id='national_election_voter_turnout_local'></canvas>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Local Election: Rgistered Voters</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                    {/**Local election registered voters chart */}
                    <canvas id='national_election_registered_voters_local'></canvas>
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