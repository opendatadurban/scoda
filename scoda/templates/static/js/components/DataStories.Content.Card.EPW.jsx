import React, { Component, useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import Select from './Select';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

const DataStoriesContentCardEPW = (props) => {

  let contentBlockOne = `The EPWP has created over 3.5 million work opportunities for the unemployed nationally, with a targeted 6 million work opportunities for Phase 3 (2014-2019).
  <br/><br/>
  In the period 2017/18, the South African cities have implemented 1448 EPWP projects that have created over 90 thousand work opportunities in their cities. 
  <br/><br/>
  These projects provide poverty relief for the poor and the large number of unemployed economic immigrants that move to the city to seek employment.`;

  let contentBlockTwo = `<ul style="margin-left:2%">
    <li>There is a mismatch in the job supply and demand in South Africa</li>
    <li>The country’s economy isn’t creating jobs for the available labour force</li>
    <li>The EPWP is an important programme that creates employment opportunities for the poor and unemployed unskilled and semi-skilled people in the country</li>
    <li>More programmes like the EPWP will be required if jobs are not created for the available labour force of the country, especially with;
        <ol type="a">
            <li>job losses in the agricultural and mining sector and </li>
            <li>the industrial revolution that requires a new kind of skillset from the labour force.</li>
        </ol>
    </li>
  </ul>`;

  let resources = ` <ul style="margin-left:2%;">
  <li>Where can I read the full report? See the <a href="https://www.sacities.net/the-state-of-the-expanded-public-works-programme-annual-report-2017-2018">SACN</a> website</li>
  <li>Download and analyse data at the <a href="/">SCODA</a> webpage</li>
  <li>Are there events I can join?
    <ul style="margin-left:1%;list-style-type: none;">
        <li className="dash">- Launch of the State of the Expanded Public Works Programme in South African Cities 2017/18, Report Launch
        <br>06 June 2019
        <br>Joburg Metro Building
        </li>
    </ul>
  </li>
  <li>What other publications should I be reading on this topic?
    <ul style="margin-left:1%;list-style-type: none;">
        <li className="dash">- <a href="">Economic Trends and Signals for Public Employment Programmes in South African Cities</a></li>
    </ul>
  </li>
  </ul>
  <br/>
  If you have any queries and further comment on this datastory, please email <a href="mailto:sadhna@sacities.net">Sadhna Bhana</a> at SACN.`;

  let contentBlockFour = `The demand to increase revenue makes cities focus on the gains to be made from greenfield development rather than brownfield development.
  <br/><br/>
  The two columns show the fiscal consequences of greenfield vs brownfield development.
  <br/><br/>
  A completed greenfield development will generate significantly higher revenue from property rates because of the lower value of rates payable on agricultural land.
  <br/><br/>
  The bottom row of the graphic shows very clearly the quantum difference in the percentage increase in the revenue received per property in a greenfield vs a brownfield development.`;


  let contentBlockThree = `<o onClick="javascript:window.open('https://www.sacities.net/municipal-finance/','_new');">Read</o> more SACN publications and research on municipal finance matters on the SACN website
  <o onClick="javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')">Engage</o> with SACN’s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance’s interactively on National Treasury’s <o onClick="javascript:window.open('https://municipalmoney.gov.za/','_new')">Municipal Money</o> Datatool
  Explore the <o onClick="javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')">full collection of State of Cities Finances 2018 datasets</o> on SCODA’s data portal
  <br/><br/>
  If you have any queries and further comment on this datastory, please email <o onClick="javascript:window.location='mailto:danga@sacities.net'">Danga Mughogho</o> at SACN.`;

  let imgOne = `/static/dist/img/scoda/datastories/ds-epw-needs.webp`;

  
  const mydata = {
    pl : {
      id: "my-select",
      multiple: false,
      data : ['Buffalo City','Cape Town','JHB','Tswane','Ekurhuleni','eThekwini','Mangaung','Msunduzi','NMB']
    }
  }
  let buffalo = [566,645,1266,1857,2307]
  let cpt = [27876,38574,9510,21317,25389]
  let jhb = [23603,26932,5734,14599,12468]
  let tswane = [17790,34639,5204,9096,9820]
  let ethekwini = [29838,28962,13016,14948,20508]
  let ekh = [6005,8434,7420,8412,5081]
  let mangaung = [1687,3031,2958,1208,627]
  let msunduzi = [1451,1595,1393,779,1813]
  let nhb = [5068,6390,1229,2431,4899]


  const [data,setData] = useState([566,645,1266,1857,2307])
  const [places, setPlaces] = useState("")

    const pie_data = {
          labels: ["Professionals", "Service & sales workers ", "Plant & machine operators & assemblers", "Technicians & associate professionals", "Clerical support workers", "Elementary occupations", "Managers", "Skilled agricultural, forestry, fishery, craft & related trades workers"],
          datasets: [{
            label: '2016',
            data: [58, 2, 0, 18, 6, 1, 13, 2],
            fill: false, // Prevents line graph fill, while keeping legend box fill -->
            backgroundColor: [
            'rgba(121, 169, 182, 1)',
            'rgba(240, 147, 65, 1)',
            'rgba(107, 111, 156, 1)',
            'rgba(117, 43, 38, 1)',
            'rgba(78, 127, 185, 1)',
            'rgba(186, 77, 83, 1)',
            'rgba(153, 185, 86, 1)',
            'rgba(35, 78, 122, 1)'
          ],
          borderColor: [
            'rgba(121, 169, 182, 1)',
            'rgba(240, 147, 65, 1)',
            'rgba(107, 111, 156, 1)',
            'rgba(117, 43, 38, 1)',
            'rgba(78, 127, 185, 1)',
            'rgba(186, 77, 83, 1)',
            'rgba(153, 185, 86, 1)',
            'rgba(35, 78, 122, 1)'
          ]
          }]
        }

    const place =(e) => {
        setPlaces(e.target.value)

      if(e.target.value ==='Buffalo City') {
          setData(buffalo)
        }
      if(e.target.value ==='Cape Town') {
          setData(cpt)
        }
      if(e.target.value ==='JHB') {
          setData(jhb)
        }
      if(e.target.value ==='Tswane') {
          setData(tswane)
        }
      if(e.target.value ==='Ekurhuleni') {
          setData(ekh)
        }
      if(e.target.value ==='eThekwini') {
          setData(ethekwini)
        }
      if(e.target.value ==='Mangaung') {
          setData(mangaung)
        }
      if(e.target.value ==='Msunduzi') {
          setData(msunduzi)
        }
      if(e.target.value ==='NMB') {
          setData(nhb)
        }
  } 

  //renderChart type:pie mainChart
  const data1 = {
    labels: ["Professionals", "Service & sales workers ", "Plant & machine operators & assemblers", "Technicians & associate professionals", "Clerical support workers", "Elementary occupations", "Managers", "Skilled agricultural, forestry, fishery, craft & related trades workers"],
    datasets: [{
      label: '2016',
      data: [58, 2, 0, 18, 6, 1, 13, 2],
      fill: false, // Prevents line graph fill, while keeping legend box fill -->
      backgroundColor: [
      'rgba(121, 169, 182, 1)',
      'rgba(240, 147, 65, 1)',
      'rgba(107, 111, 156, 1)',
      'rgba(117, 43, 38, 1)',
      'rgba(78, 127, 185, 1)',
      'rgba(186, 77, 83, 1)',
      'rgba(153, 185, 86, 1)',
      'rgba(35, 78, 122, 1)'
    ],
    borderColor: [
      'rgba(121, 169, 182, 1)',
      'rgba(240, 147, 65, 1)',
      'rgba(107, 111, 156, 1)',
      'rgba(117, 43, 38, 1)',
      'rgba(78, 127, 185, 1)',
      'rgba(186, 77, 83, 1)',
      'rgba(153, 185, 86, 1)',
      'rgba(35, 78, 122, 1)'
    ]
    }]
  }
  const options1 = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'right',
            labels: {
                fontFamily: "Montserrat"
            },
        },
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      }
  }
  //renderChart2 type: 'bar', mainChart2
  const data2 = {
    labels: ["Phase I", "Phase II", "Phase III"],
    datasets: [{
      label: 'WO Target',
      stack: 'Stack 0',
      data: [1000000, 4500000, 6000000],
      backgroundColor: [
        'rgba(253, 184, 99, 1)',
        'rgba(253, 184, 99, 1)',
        'rgba(253, 184, 99, 1)'
      ],
      borderColor: [
        'rgba(253, 184, 99, 1)',
        'rgba(253, 184, 99, 1)',
        'rgba(253, 184, 99, 1)'
      ]
    },
    {
        label: "WO's Created",
        stack: 'Stack 1',
        data: [1000000, 4900000, 3525002],
        backgroundColor: [
          'rgba(230, 97, 1, 1)',
          'rgba(230, 97, 1, 1)',
          'rgba(230, 97, 1, 1)'
        ],
        borderColor: [
          'rgba(230, 97, 1, 1)',
          'rgba(230, 97, 1, 1)',
          'rgba(230, 97, 1, 1)'
        ]
      }
]
  }
  const options2 = {
    title: {
      display: false,
      text: 'Title'
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
          ticks: {fontStyle: 'bold'},
          gridLines: {
              borderDash: [2],
              zeroLineBorderDash: [],
              zeroLineWidth: 2,
              lineWidth: 2,
              color: [0, 0, 0],
              drawTicks: true,
          }
      }],
      yAxes: [{
          stacked: true,
          ticks: {
              callback: function (value, index, values) {
                  return Math.round(value * 100) / 100 + '  ';
              }
          },
          gridLines: {
              drawTicks: false,
          },
          scaleLabel: {
              display: true,
              labelString: "Number of WO's",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 15
          }
      }],

  }
  }
  //renderChart3 type: bar mainChart3
  const data3 = {
    labels: ["Buffalo City", "Cape Town", "JHB", "Tswane", "Ekurhuleni", "eThekwini", "Mangaung", "Msunduzi", "NMB", "Average"],
    datasets: [{
      label: '2013/14',
      stack: 'Stack 1',
      data: [566, 27876, 23603, 17790, 6005, 29838, 1687, 1451, 5068, 12654],
      backgroundColor: [
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)'
      ],
      borderColor: [
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)'
      ]
    },
        {
        label: '2014/15',
        stack: 'Stack 2',
        data: [645, 38574, 26932, 34639, 8434, 28962, 3031, 1595, 6390,16578],
        backgroundColor: [
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)'
        ],
        borderColor: [
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)'
        ]
      },
      {
        label: '2015/16',
        stack: 'Stack 3',
        data: [1266, 9510, 5734, 5204, 7420, 13016, 2958, 1393, 1229, 5303],
        backgroundColor: [
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)'
        ],
        borderColor: [
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)'
        ]
      },
      {
        label: '2016/17',
        stack: 'Stack 4',
        data: [1857, 21317, 14559, 9096, 8412, 14948, 1208, 779, 2431, 8290],
        backgroundColor: [
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)'
        ],
        borderColor: [
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)'
        ]
      },
      {
        label: '2017/18',
        stack: 'Stack 5',
        data: [2307, 25389, 12468, 9820, 5081, 20508, 627, 1813, 4899, 9212],
        backgroundColor: [
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)'
        ],
        borderColor: [
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
            'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)'
        ]
      }
]
  }
  const options3 = {
    title: {
        display: false,
        text: 'Title'
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
            ticks: {fontStyle: 'bold'},
            gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true,
            }
        }],
        yAxes: [{
            stacked: true,
            ticks: {
                callback: function (value, index, values) {
                    return Math.round(value * 100) / 100 + '  ';
                }
            },
            gridLines: {
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
                labelString: "Number of WO's",
                fontStyle: 'bold',
                fontFamily: "Montserrat",
                fontSize: 15
            }
        }],

    }
  }
 //renderChart3_mobile type: bar mainChart3_mobile
  const data3_mobile = {
    labels: [places,"Average"],
    datasets: [{
      label: '2013/14',
      stack: 'Stack 1',
      data: [data[0], 12654],
      backgroundColor: [
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)'
      ],
      borderColor: [
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)',
          'rgba(68, 114, 196, 1)'
      ]
    },
        {
        label: '2014/15',
        stack: 'Stack 2',
        data: [data[1],16578],
        backgroundColor: [
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)'
        ],
        borderColor: [
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)',
          'rgb(203, 147, 109, 1)'
        ]
      },
      {
        label: '2015/16',
        stack: 'Stack 3',
        data: [data[2], 5303],
        backgroundColor: [
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)'
        ],
        borderColor: [
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)',
          'rgba(167, 167, 167, 1)'
        ]
      },
      {
        label: '2016/17',
        stack: 'Stack 4',
        data: [data[3], 8290],
        backgroundColor: [
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)'
        ],
        borderColor: [
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)',
          'rgba(212, 181, 85, 1)'
        ]
      },
      {
        label: '2017/18',
        stack: 'Stack 5',
        data: [data[4], 9212],
        backgroundColor: [
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)'
        ],
        borderColor: [
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)',
            'rgba(91, 155, 213, 1)',
          'rgba(91, 155, 213, 1)'
        ]
      }
  ]
    }
  const options3_mobile = {
    title: {
        display: false,
        text: 'Title'
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
            ticks: {fontStyle: 'bold'},
            gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true,
            }
        }],
        yAxes: [{
            stacked: true,
            ticks: {
                callback: function (value, index, values) {
                    return Math.round(value / 1000)+ 'K  ';
                }
            },
            gridLines: {
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
                labelString: "Number of WO's",
                fontStyle: 'bold',
                fontFamily: "Montserrat",
                fontSize: 15
            }
        }],

    }
  }
  const downloadChart = () => {
      var url_base64jp = document.getElementById("mainChart").toDataURL("image/png");

      var a =  document.getElementById("download");

      a.href = url_base64jp;
  }

  const downloadChart2 = () => {
      var url_base64jp = document.getElementById("mainChart2").toDataURL("image/png");

      var a =  document.getElementById("download2");

      a.href = url_base64jp;
  }

  const downloadChart3 = () => {
      var url_base64jp = document.getElementById("mainChart3").toDataURL("image/png");

      var a =  document.getElementById("download3");

      a.href = url_base64jp;
  }
  return (
      <div className="mt-4 ml-2 pr-2">
          <div className="row">
              <div className="col-12">
                  <div className="ds-content-card">
                      <div className="ds-content-card-header">
                          <DataStoriesContentCardHeader 
                              storyTitle={props.storyTitle}
                              storySubtitle={props.storySubtitle}
                              filter={props.filter}
                              filterColor={props.filterColor}
                              author={props.author}
                              publishedDate={props.publishedDate}
                          />
                      </div>
                      <div className="card-body pt-4 pb-5 mt-5">
                          <div className="row">
                              <DataStoriesContentCardContentBlock
                                contentHeading="Introduction"
                                content="The unemployment rate remains at an unfortunate 26.7% in South Africa. Curbing this rate has been a great challenge for the South African government, especially with the mismatch in the job demand and supply in the country. Public employment programmes such as the Department of Public Work’s Expanded Public Works Programme play a crucial role in creating employment for the country’s surplus of unskilled and semi-skilled labour."
                              />
                          </div>
                          <div className="row mt-4">
                          <DataStoriesContentCardHighlightBlock 
                              infoBlockText={props.infoBlockText}
                          />
                          </div>
                          <div className="row mt-4">
                              <DataStoriesContentCardContentBlock
                                contentHeading="South Africa’s Job Mismatch"
                                content="Recent statistics from Stats SA show that the majority of people who are not in employment, education or training (NEETs) in South Africa have some level of secondary schooling, but no matric. This implies that most of the people that are unemployed are either unskilled or semi-skilled."
                              />
                          </div>
                          <div className="row mt-5">
      


                              
                              <div className="module tabs tabs_vertical tabs_vertical_top" id="tabs_vertical">
                  
                  <div className="container-fluid">
                      <div className="row">
                      
                          <div className="col-md-7 tabs_vertical--content">
                              <div className="tab-content" id="v-pills-tabContent">
                              <div className="tab-pane fade show active" id="v-pills-top-1a" role="tabpanel" aria-labelledby="v-pills-top-1a-tab">
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-1.webp" />
                              </div>
                              <div className="tab-pane fade" id="v-pills-top-2a" role="tabpanel" aria-labelledby="v-pills-top-2a-tab">
                                  
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-2.webp"/>
                              </div>
                              <div className="tab-pane fade" id="v-pills-top-3a" role="tabpanel" aria-labelledby="v-pills-top-3a-tab">
                                  
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-3.webp"/>
                              </div>
                              <div className="tab-pane fade" id="v-pills-top-4a" role="tabpanel" aria-labelledby="v-pills-top-4a-tab">
                                  
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-4.webp"/>
                              </div>
                              <div className="tab-pane fade" id="v-pills-top-5a" role="tabpanel" aria-labelledby="v-pills-top-5a-tab">
                                  
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-5.webp"/>
                              </div>
                              <div className="tab-pane fade" id="v-pills-top-6a" role="tabpanel" aria-labelledby="v-pills-top-6a-tab">
                                  
                                  <img alt="diagram" src="/static/dist/img/scoda/datastories/diagram_sa-neets_slide-6.webp"/>
                              </div>
                          </div>
                        </div>
                        <div className="col-md-5 tabs_vertical--pills">
                          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      
                            <a className="tabs_vertical--pills--pill nav-link-2 active" id="v-pills-top-1a-tab" data-toggle="pill" href="#v-pills-top-1a" role="tab" aria-controls="v-pills-top-1a" aria-selected="true">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">Overview</span>
                      
                            <a className="tabs_vertical--pills--pill nav-link-2" id="v-pills-top-2a-tab" data-toggle="pill" href="#v-pills-top-2a" role="tab" aria-controls="v-pills-top-2a" aria-selected="false">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">The majority of young people between ages 15-24 are NEETs</span>
                            <a className="tabs_vertical--pills--pill nav-link-2" id="v-pills-top-3a-tab" data-toggle="pill" href="#v-pills-top-3a" role="tab" aria-controls="v-pills-top-3a" aria-selected="false">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">If we focus on young people that are NEETs, we begin to see a gender disparity.</span>
                              <a className="tabs_vertical--pills--pill nav-link-2" id="v-pills-top-4a-tab" data-toggle="pill" href="#v-pills-top-4a" role="tab" aria-controls="v-pills-top-4a" aria-selected="false">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">The overall NEET rate did not change from Q1: 2017 to Q1: 2018</span>
                              <a className="tabs_vertical--pills--pill nav-link-2" id="v-pills-top-5a-tab" data-toggle="pill" href="#v-pills-top-5a" role="tab" aria-controls="v-pills-top-5a" aria-selected="false">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">However, the male NEET rate dropped by 0,9 percentage pts</span>
                              <a className="tabs_vertical--pills--pill nav-link-2" id="v-pills-top-6a-tab" data-toggle="pill" href="#v-pills-top-6a" role="tab" aria-controls="v-pills-top-6a" aria-selected="false">show</a>
                            <span className="tabs_vertical--tooltips--tooltip">While, the female NEET rate rose by 1,0 percentage pt</span>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>

                  </div>

                  <div className="row mt-4">
                      <div className="col pt-4 pl-5 pr-5 pb-4 ds-light-highlight">
                      South Africa therefore requires a job demand of unskilled-semi skilled labour to absorb the majority of its unemployed. More of these jobs are required to absorb people who are losing their jobs in the agricultural and mining sectors. However, most of the jobs available require a skilled and professional labour force, making it difficult for the majority of job seekers to find jobs that match their skill levels.
                      </div>
                  </div>


                      <div className="row mt-4"></div>
                      
                          <div className="row mt-4 chart-heights-mobile">
                              <div className="col-10"></div>
                              <div className="col-0 float-right ds-download-button" onClick={downloadChart}>
                                  <a id="download" download="chart.png" style={{color:'#fff',textDecoration:'none'}}>
                                    Download as PNG
                                  </a>
                              </div>
                              <div className="container-fluid justify-content-center">
                                <div className="ds-subheader">Skill levels required in South Africa</div>
                              </div>
                              <br/><br/>
                              <div className="container-fluid justify-content-center desktop">
                                  <Pie id="mainChart" data={data1} options={options1}/>
                              </div>
                              <div className="container-fluid justify-content-center mobile">
                              <Pie
                              data={pie_data}
                              width={"30%"}
                              height={"250"}
                              options={{ maintainAspectRatio: false }}
/>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <DataStoriesContentCardDataInformation
                                  dataHeading="Source"
                                  dataDescription="micseta – Sector Skills Plan, 2018" 
                              />
                          </div>


                          <div className="row mt-5">
                              <DataStoriesContentCardContentBlock 
                                contentHeading="The Expanded Public Works Programme"
                                content="Programmes like the Expanded Public Works Programme (EPWP) become important in the South African context as they offer job opportunities and training to the unskilled and semi-skilled labour force in the country."
                              />
                          </div>

                          <div className="row mt-4"></div>
                      
                      <div className="row mt-4">
                          <div className="col-10"></div>
                          <div className="col-0 float-right ds-download-button" onClick={downloadChart2}>
                              <a id="download2" download="chart.png" style={{color:'#fff',textDecoration:'none'}}>
                                Download as PNG
                              </a>
                          </div>
                          <div className="container-fluid justify-content-center">
                            <div className="ds-subheader">Work opportunities created by the EPWP, Phase 1-3</div>
                          </div>
                          <br/><br/>
                          <div className="col chart-heights-mobile">
                            <Bar data={data2} options={options2}/>
                              </div>
                              <div className="col ml-3 ds-epwp">
                              <DataStoriesContentCardContentBlock 
                                content={contentBlockOne}
                              />
                              </div>
                      </div>
                      <div className="row mt-3">
                          <DataStoriesContentCardDataInformation
                              dataHeading="Source"
                              dataDescription="State of the EPWP in SA Cities Report, 2017/18" 
                          />
                      </div>

                      <div className="row mt-4">
                          <div className="col-10"></div>downloadChart3
                          <div className="col-0 float-right ds-download-button" onClick={downloadChart3}>
                              <a id="download3" download="chart.png" style={{color:'#fff',textDecoration:'none'}}>
                                Download as PNG
                              </a>
                          </div>
                          <div className="container-fluid mt-2 justify-content-center">
                            <div className="ds-subheader">Number of work opportunities created by the EPWP in South African cities</div>
                            <div className='chart-mainchart3--mobile'>
                            <p className='select2--label'>Cities :</p>
                            <Select 
                              value={places}
                              placeholder='Select'
                              id={mydata.pl.id}
                              multiple={mydata.pl.multiple}
                              data={mydata.pl.data}
                              name = 'gender'
                              onChange={place}
  
                            />
                            </div>
                          </div>
                          <br/><br/>
                          
    
                          <Bar id="mainChart3" className="chart-mainchart3--desktop" data={data3} options={options3}/>
                          <Bar id="mainChart3_mobile" className="chart-mainchart3--mobile" data={data3_mobile} options={options3_mobile}/>
    
                    
                      </div>
                      <div className="row mt-3">
                          <DataStoriesContentCardDataInformation
                              dataHeading="Source"
                              dataDescription="State of the EPWP in SA Cities Report, 2017/18" 
                          />
                      </div>
                      <div className="row mt-4">
                              <DataStoriesContentCardContentBlock 
                                contentHeading="Key Message"
                                content={contentBlockTwo}
                              />
                          </div>

                          <div className="row mt-4">
                              <DataStoriesContentCardContentBlock 
                                contentHeading="Resources"
                                content={resources}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DataStoriesContentCardEPW;