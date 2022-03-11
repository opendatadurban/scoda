import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from './Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import HumanResourcesData from '../data/HumanResourceData'

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
// let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]

let total_number_of_municipal_posts = []
let total_number_of_municipal_posts_data = []
let total_number_of_municipal_posts_clean = []
let final_total_number_of_municipal_posts = []
let voterTurnoutCollection = [];

let municipal_management_vacancies = []
let total_number_of_municipal_posts_data_local = []
let total_number_of_municipal_posts_clean_local = []
let final_municipal_management_vacancies = []
let voterTurnoutCollection_local = [];

let number_of_senior_management_vacancies = []
let number_of_senior_management_vacancies_data = []
let number_of_senior_management_vacancies_clean = []
let final_number_of_senior_management_vacancies = []
let NumberOfSeniorManagementVacanciesCollection = [];


//Testing data

let tot_num_of_municipal_posts = [
  [5096, 28403, 27685, 17660, 7549, 8111, 29364, 24268], //2014
  [5528, 29398, 26731, 17639, 8327, 6665, 29394, 24623],//2015
  [5646, 29653, 27082, 19640, 7574, 6991, 26449, 27452],//2016
  [5644, 29909, 26555, 20102, 6773, 6792, 22032, 27296],//2017
]
let municiapal_mv = [
  [2, 0, 0, 8, 2, 1, 1, 0], //2014
  [2, 2, 3, 3, 4, 2, 2, 0],//2015
  [2, 1, 9, 4, 4, 2, 2, 4],//2016
  [1, 0, 14, 6, 2, 11, 0, 2],//2017
]

let senior_mv = [
  [2, 0, 0, 8, 2, 1, 1, 0], //2000
  [2, 2, 3, 3, 4, 2, 2, 0],//2006
  [2, 1, 9, 4, 4, 2, 2, 4],//2011
  [1, 0, 14, 6, 2, 11, 0, 2],//2016
]

//chart declarations
var chartRef1,chartRef2,chartRef3,chartRef4,chartRef5

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
  // let [final_total_number_of_municipal_posts, setFinal_total_number_of_municipal_posts] = useState([])
  const [stepSize, setStepSize] = useState(200000);
  const [isMulti, setIsMulti] = useState(true);
  const [loader, setLoader] = useState(false);
  const [chartYears, setChartYears] = useState(['Year', '2014', '2015', '2016', '2017']);
  const [noYears, setNoYears] = useState(['2014', '2015', '2016', '2017']);
  const [noYears1, setNoYears1] = useState(['2000', '2006', '2011', '2016']);
  const [pie, setPie] = useState(['a']);
  const [management_posts, setManagement_posts] = useState([100,25]);
  const [senior_management_posts, setSenior_management_posts] = useState([100,5]);
  const [data,setData] = useState(HumanResourcesData)
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
    console.log(data)
    if (!mounted.current) {
      //equivilent to componentdidmount
      number_of_municipal_posts();
      management_vacancies();
      senior_management_vacancies();

      renderChart_number_of_municipal_posts();
      renderChart_management_vacancies();
      renderChart_senior_management_vacancies();
      renderChart_municipal_management_posts();
      renderChart_senior_management_posts();
      mounted.current = true;
    }
    else {
      //equivilent to componentdidupdate
      renderChart_number_of_municipal_posts();
      renderChart_management_vacancies();
      renderChart_senior_management_vacancies();
    }
  });
  const number_of_municipal_posts = () => {
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
      voterTurnoutCollection.push(tot_num_of_municipal_posts[toNum[year] - 1]);
      total_number_of_municipal_posts.push(voterTurnoutCollection[count])
      total_number_of_municipal_posts_clean.push(total_number_of_municipal_posts)
      count++
    }
    final_total_number_of_municipal_posts = total_number_of_municipal_posts_clean[0]
  }
  const management_vacancies = () => {
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
      voterTurnoutCollection_local.push(municiapal_mv[toNum[year] - 1]);
      municipal_management_vacancies.push(voterTurnoutCollection_local[count])
      total_number_of_municipal_posts_clean_local.push(municipal_management_vacancies)
      count++
    }
    final_municipal_management_vacancies = total_number_of_municipal_posts_clean_local[0]
  }
  const senior_management_vacancies = () => {
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
      NumberOfSeniorManagementVacanciesCollection.push(senior_mv[toNum[year] - 1]);
      number_of_senior_management_vacancies.push(NumberOfSeniorManagementVacanciesCollection[count])
      number_of_senior_management_vacancies_clean.push(number_of_senior_management_vacancies)
      count++
    }
    final_number_of_senior_management_vacancies = number_of_senior_management_vacancies_clean[0]
  }

  const handleMultiChange = (option) => {
    setMultiValue(option)

    total_number_of_municipal_posts_data = []
    total_number_of_municipal_posts_data_local = []
    number_of_senior_management_vacancies_data = []

    let cYears = chartYears
    for (let item = 0; item < cYears.length - 1; item++) {
      total_number_of_municipal_posts_data.push([])
      total_number_of_municipal_posts_data_local.push([])
      number_of_senior_management_vacancies_data.push([])
    }

    //Empty array so new data can be assigned
    myData = []

    //new 
    final_total_number_of_municipal_posts = []
    final_municipal_management_vacancies = []
    final_number_of_senior_management_vacancies = []


    option.map(function (item, i) {

      myData.push(item.value);

      sortedData = myData.sort()
      if (sortedData.includes('BUF')) {
        //total_number_of_municipal_posts_data[year][index]  voterTurnoutCollection[year][index]
        for (let index = 0; index < cYears.length - 1; index++) {

          total_number_of_municipal_posts_data[index][0] = voterTurnoutCollection[index][0]
          total_number_of_municipal_posts_data_local[index][0] = voterTurnoutCollection_local[index][0]
          number_of_senior_management_vacancies_data[index][0] = NumberOfSeniorManagementVacanciesCollection[index][0]
        }

      }
      if (sortedData.includes('CCT')) {

        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][1] = voterTurnoutCollection[index][1]
          total_number_of_municipal_posts_data_local[index][1] = voterTurnoutCollection_local[index][1]
          number_of_senior_management_vacancies_data[index][1] = NumberOfSeniorManagementVacanciesCollection[index][1]
        }

      }
      if (sortedData.includes('EKH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][2] = voterTurnoutCollection[index][2]
          total_number_of_municipal_posts_data_local[index][2] = voterTurnoutCollection_local[index][2]
          number_of_senior_management_vacancies_data[index][2] = NumberOfSeniorManagementVacanciesCollection[index][2]
        }
      }
      if (sortedData.includes('ETK')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][3] = voterTurnoutCollection[index][3]
          total_number_of_municipal_posts_data_local[index][3] = voterTurnoutCollection_local[index][3]
          number_of_senior_management_vacancies_data[index][3] = NumberOfSeniorManagementVacanciesCollection[index][3]
        }
      }
      if (sortedData.includes('JHB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][4] = voterTurnoutCollection[index][4]
          total_number_of_municipal_posts_data_local[index][4] = voterTurnoutCollection_local[index][4]
          number_of_senior_management_vacancies_data[index][4] = NumberOfSeniorManagementVacanciesCollection[index][4]
        }
      }
      if (sortedData.includes('MAN')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][5] = voterTurnoutCollection[index][5]
          total_number_of_municipal_posts_data_local[index][5] = voterTurnoutCollection_local[index][5]
          number_of_senior_management_vacancies_data[index][5] = NumberOfSeniorManagementVacanciesCollection[index][5]
        }
      }
      if (sortedData.includes('NMB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][6] = voterTurnoutCollection[index][6]
          total_number_of_municipal_posts_data_local[index][6] = voterTurnoutCollection_local[index][6]
          number_of_senior_management_vacancies_data[index][6] = NumberOfSeniorManagementVacanciesCollection[index][6]

        }
      }
      if (sortedData.includes('TSH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          total_number_of_municipal_posts_data[index][7] = voterTurnoutCollection[index][7]
          total_number_of_municipal_posts_data_local[index][7] = voterTurnoutCollection_local[index][7]
          number_of_senior_management_vacancies_data[index][7] = NumberOfSeniorManagementVacanciesCollection[index][7]
        }
      }

      for (let index = 0; index < cYears.length - 1; index++) {
        final_total_number_of_municipal_posts[index] = total_number_of_municipal_posts_data[index].filter(Boolean)
        final_municipal_management_vacancies[index] = total_number_of_municipal_posts_data_local[index].filter(Boolean)
        final_number_of_senior_management_vacancies[index] = number_of_senior_management_vacancies_data[index].filter(Boolean)
      }

    })
  }

  const renderChart_number_of_municipal_posts = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_total_number_of_municipal_posts[i],
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
              stepSize: 5000,
              callback: function (value, index, values) {
                  values = Math.round(value) / 100000 + 'K ';
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Posts",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  const renderChart_management_vacancies = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_municipal_management_vacancies[i],
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
              stepSize: 2,
              callback: function (value, index, values) {
                return value+"   "
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Vacancies",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }
  const renderChart_senior_management_vacancies = () => {
    let color = '#d6d6d6'
    let data = {
      labels: sortedData,
      datasets: []
    }
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_number_of_senior_management_vacancies[i],
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
              stepSize: 2,
              callback: function (value, index, values) {
                return value+" "
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Vacancies",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
    });
  }

  //Pie chart
  const renderChart_municipal_management_posts = () => {
    let color = '#d6d6d6'
    let data = {
      labels:['Total filled Posts','Vacancies'],
      datasets: []
    }
    pie.forEach(function (a, i) {
      switch (i) {
        case 0:
          color =  ['#0570B0','#E7E7E7']
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        data:management_posts,
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef4) { chartRef4.destroy(); }
    var ctx = document.getElementById('mc3').getContext('2d');
    chartRef4 = new Chart(ctx, {
      type: 'pie',
      data,
      options: {
        legend: {
          position:'right',
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 10,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },

        responsive: true,
      }
    });
  }
  const renderChart_senior_management_posts = () => {
    let color = '#d6d6d6'
    let data = {
      labels:['Total filled Posts','Vacancies'],
      datasets: []
    }
    pie.forEach(function (a, i) {
      switch (i) {
        case 0:
          color =  ['#0570B0','#E7E7E7']
          break;
        default:
          color = '#d6d6d6'
      }

      data.datasets.push({
        data:senior_management_posts,
        backgroundColor: color,
        borderColor: color,
      })
    })

    if (chartRef5) { chartRef5.destroy(); }
    var ctx = document.getElementById('mc4').getContext('2d');
    chartRef5 = new Chart(ctx, {
      type: 'pie',
      data,
      options: {
        legend: {
          position:'right',
          labels: {
            fontColor: "#4A4A4A",
            fontSize: 10,
            fontFamily: "Montserrat",
          }
        },
        title: {
          display: false,
          text: 'Title',
          fontFamily: "Montserrat",
        },

        responsive: true,
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
                <div className='col-md-4 left-container'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Total number of municipal posts</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc'></canvas>
                  </div>
                  <div className='post_breakdown-container'>
                      <h1>Municipal Post Breakdown</h1>
                  <table>
                    <tr>
                      <th>Department</th>
                      <th className='right'>Codebook ID</th>
                    </tr>
                    {data.map((item, i) => (
                      <tr key={i}>
                        <td>{item.department}</td>
                        <td className='right'><a href={item.link}>{item.codebook_id}</a></td>
                      </tr>
                    ))}

                  </table>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Vacancies</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc1'></canvas>
                  </div>
                  <div>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Posts</h1></div>

                    </div>
                    <canvas id='mc3'></canvas>
                  </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Posts</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank' /></div>
                    </div>
                    <canvas id='mc2'></canvas>
                  </div>
                  <div>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Senior Management Posts</h1></div>
                    </div>
                    <canvas id='mc4'></canvas>
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