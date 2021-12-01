import React, { Component } from 'react';

import Chart from 'chart.js';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

export default class DataStoriesContentCardAffordability extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Chart.platform.disableCSSInjection = true;

        this.renderDataTable();
        
        this.renderChart();
        this.renderChart2();
    }

    renderChart() {

      const chartColors1 = {
        yellow: 'rgb(255, 236,0)',
        green: 'rgb(113, 199,120)',
        blue: 'rgb(140, 171,228)',
        red: 'rgb(220,123,135)'
        };

        const chartRef = document.getElementById('mainChart').getContext('2d');

        new Chart(chartRef, {
            type: 'bar',
            data: {
              labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
			datasets: [{
				label: 'Type A',
				backgroundColor: chartColors1.yellow,
				stack: 'Stack 0',
				data: [
					1.8,
                    8.3,
                    2.8,
                    0.6,
                    4.2,
                    0.7,
                    -1.6,
                    0.7,
                    1.6,
                    2.1,
				]
			}, {
				label: 'Type B',
				backgroundColor: chartColors1.green,
				stack: 'Stack 1',
				data: [
					1.2,
                    5.5,
                    2.2,
                    0.6,
                    3.9,
                    1.1,
                    -0.5,
                    0.9,
                    0.2,
                    1.7,
				]
			}, {
				label: 'Type C',
				backgroundColor: chartColors1.blue,
				stack: 'Stack 2',
				data: [
					0.6,
                    5.2,
                    1.6,
                    -0.1,
                    2.2,
                    1.7,
                    0.9,
                    0.9,
                    0.9,
                    1.6,
				]
			},
			{
				label: 'Type D',
				backgroundColor: chartColors1.red,
				stack: 'Stack 3',
				data: [
					0.5,
                    6.3,
                    1.3,
                    -0.1,
                    0.9,
                    -1.4,
                    1.5,
                    0.4,
                    1.2,
                    1.2,
				]
			}]
            },
            options: {
              title: {
                  display: false,
                  text: 'Chart Title'
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
                          return label + '%';
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
                              return Math.round(value * 100) / 100 + '%  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      }
                  }],

              }
          }
      });
    }

    renderChart2() {
      const chartColors = {
        colour_1: 'rgb(247, 208, 145)',
        colour_2: 'rgb(255, 182, 68)',
        colour_3: 'rgb(245, 149, 0)',
        };
      
      var barChartData_a = {
            labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
            datasets: [{
              label: '2010',
              backgroundColor: chartColors.colour_1,
              stack: 'Stack 0',
              data: [
                17.9,
                9.5,
                10.9,
                17.4,
                10.3,
                14.1,
                11.6,
                16.4,
                22.9,
              ]
            }, {
              label: '2012',
              backgroundColor: chartColors.colour_2,
              stack: 'Stack 1',
              data: [
                17.3,
                10.9,
                10.1,
                18.6,
                10.3,
                14.5,
                12.7,
                19.0,
                20.5,
              ]
            }, {
              label: '2014',
              backgroundColor: chartColors.colour_3,
              stack: 'Stack 2',
              data: [
                16.9,
                13.6,
                13.5,
                14.8,
                9.5,
                13.3,
                11.0,
                17.2,
                20.8,
              ]
            },
            ]
      
          };

          var barChartData_b = {
            labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
            datasets: [{
              label: '2010',
              backgroundColor: chartColors.colour_1,
              stack: 'Stack 0',
              data: [
                12.7,
                9.6,
                8.3,
                11.5,
                7.2,
                9.3,
                9.2,
                10.6,
                14.6,
              ]
            }, {
              label: '2012',
              backgroundColor: chartColors.colour_2,
              stack: 'Stack 1',
              data: [
                12.2,
                9.9,
                8.2,
                12.2,
                6.8,
                10.0,
                10.0,
                12.2,
                15.4,
              ]
            }, {
              label: '2014',
              backgroundColor: chartColors.colour_3,
              stack: 'Stack 2',
              data: [
                11.8,
                10.3,
                9.9,
                10.2,
                6.9,
                9.1,
                8.9,
                11.2,
                12.8,
              ]
            }]
      
          };

          var barChartData_c = {
            labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
            datasets: [{
              label: '2010',
              backgroundColor: chartColors.colour_1,
              stack: 'Stack 0',
              data: [
                8.4,
                7.8,
                6.8,
                8.5,
                6.5,
                7.1,
                8.5,
                8.2,
                8.4,
              ]
            }, {
              label: '2012',
              backgroundColor: chartColors.colour_2,
              stack: 'Stack 1',
              data: [
                8.5,
                8.2,
                6.8,
                9.1,
                5.5,
                7.8,
                8.0,
                9.3,
                8.7,
              ]
            }, {
              label: '2014',
              backgroundColor: chartColors.colour_3,
              stack: 'Stack 2',
              data: [
                8.4,
                8.9,
                7.7,
                7.7,
                6.0,
                7.8,
                7.7,
                9.0,
                8.2,
              ]
            }]
      
          };

          var barChartData_d = {
            labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
            datasets: [{
              label: '2010',
              backgroundColor: chartColors.colour_1,
              stack: 'Stack 0',
              data: [
                6.5,
                6.9,
                6.9,
                7.2,
                6.0,
                6.1,
                8.2,
                6.7,
                6.4,
              ]
            }, {
              label: '2012',
              backgroundColor: chartColors.colour_2,
              stack: 'Stack 1',
              data: [
                6.8,
                7.7,
                6.8,
                7.8,
                7.4,
                7.1,
                7.5,
                7.6,
                6.6,
              ]
            }, {
              label: '2014',
              backgroundColor: chartColors.colour_3,
              stack: 'Stack 2',
              data: [
                6.9,
                8.2,
                7.2,
                7.0,
                7.8,
                6.7,
                6.6,
                7.9,
                6.2,
              ]
            }]
      
          };

      var ctx_b = document.getElementById('barChartTypeB').getContext('2d');
      new Chart(ctx_b, {
          type: 'bar',
          data: barChartData_b,
          options: {
              title: {
                  display: true,
                  text: 'Type B (Cost as % of Income)'
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
                          return label + '%';
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
                              return Math.round(value * 100) / 100 + '%  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      }
                  }],

              }
          }
      });

      var ctx_a = document.getElementById('barChartTypeA').getContext('2d');
      new Chart(ctx_a, {
          type: 'bar',
          data: barChartData_a,
          options: {
              title: {
                  display: true,
                  text: 'Type A (Cost as % of Income)'
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
                          return label + '%';
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
                              return Math.round(value * 100) / 100 + '%  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      }
                  }],

              }
          }
      });

      var ctx_c = document.getElementById('barChartTypeC').getContext('2d');
      new Chart(ctx_c, {
          type: 'bar',
          data: barChartData_c,
          options: {
              title: {
                  display: true,
                  text: 'Type C (Cost as % of Income)'
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
                          return label + '%';
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
                              return Math.round(value * 100) / 100 + '%  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      }
                  }],

              }
          }
      });

      var ctx_d = document.getElementById('barChartTypeD').getContext('2d');
      new Chart(ctx_d, {
          type: 'bar',
          data: barChartData_d,
          options: {
              title: {
                  display: true,
                  text: 'Type D (Cost as % of Income)'
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
                          return label + '%';
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
                              return Math.round(value * 100) / 100 + '%  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      }
                  }],

              }
          }
      });
    }


    downloadChart() {
        var url_base64jp = document.getElementById("mainChart").toDataURL("image/png");

        var a =  document.getElementById("download");

        a.href = url_base64jp;
    }

    renderDataTable(){
        try {
            $('#example').DataTable({
                "order": [[1, "asc"], [0, "asc"]],
                "bPaginate": false,
                "info": false,
                dom: 'Bfrtip',
                buttons: [
                'copy', 'csv']
            });
      
            document.getElementsByTagName("input")[0].placeholder="Search...";
            document.getElementsByTagName("button")[1].innerText ="Copy this Table";
            document.getElementsByTagName("button")[2].innerText ="Download as CSV";
           $('#example_filter').text('Search...');
          }
          catch(err) {
            location.reload();
          }
    }


    render() {


        let contentBlockOne = `Figure 1 shows that between 2015 and 2017, the cost of all service packages increased in all cities, with the exception of Nelson Mandela Bay (Type D) and Mangaung (Types A and B). Cape Town increased the cost of all its service packages at well above the average growth for the nine cities. (this increase was driven by higher charges for water combined with the abolition of the free 6kl for non-indigent households).
        <br/><br/>
        All this is important, but are the bills affordable? 
        <br/><br/>
        The affordability of municipal bills depends on both the municipal rates and charges and household incomes. The distribution of household incomes is used to create benchmark household income categories ranging from about R3 000 to R 50 000, which are associated with the four service packages A, B, C, and D.`;
        
        let contentBlockTwo2 = `An affordability analysis, which used an affordability threshold of 10% maximum of household income spent on tariffs, found that most Type A and B service packages are unaffordable.
        <br/><br/>
        The following two images show the ranking of all municipal bills across all cities from least affordable (in red) to most affordable (in green). The least affordable bills, across all cities, correspond to the service packages A and B associated with lower income consumers, while the most affordable bills correspond to the service packages C and D associated with higher income consumers.`;

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

        let resources = `<o onClick="javascript:window.open('https://www.sacities.net/municipal-finance/','_new');">Read</o> more SACN publications and research on municipal finance matters on the SACN website
        <o onClick="javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')">Engage</o> with SACN’s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance’s interactively on National Treasury’s <o onClick="javascript:window.open('https://municipalmoney.gov.za/','_new')">Municipal Money</o> Datatool
        Explore the <o onClick="javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')">full collection of State of Cities Finances 2018 datasets</o> on SCODA’s data portal
        <br/><br/>
        If you have any queries and further comment on this datastory, please email <o onClick="javascript:window.location='mailto:danga@sacities.net'">Danga Mughogho</o> at SACN.`;

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

        let imgOne = `/static/dist/img/scoda/datastories/ds-mun.svg`;
        let imgTwo = `/static/dist/img/scoda/datastories/muntable.PNG`;

        return (
          
            <div className="mt-4 ml-2 pr-2">
                <div className="row">
                    <div className="col-12">
                        <div className="ds-content-card">
                            <div className="ds-content-card-header">
                               <DataStoriesContentCardHeader 
                                    storyTitle={this.props.storyTitle}
                                    storySubtitle={this.props.storySubtitle}
                                    filter={this.props.filter}
                                    filterColor={this.props.filterColor}
                                    author={this.props.author}
                                    publishedDate={this.props.publishedDate}
                               />
                            </div>
                            <div className="card-body pt-4 pb-5 mt-5">
                               <div className="row">
                                   <DataStoriesContentCardContentBlock
                                     contentHeading="Increasing Cost of Municipal Bills"
                                     content="A key message from the State of City Finances 2018 report is that citizens are in crisis. Although growth in the cost of municipal bills has slowed over the past two years, consumers are concerned by increased electricity and water costs, especially in an economic environment of rising costs generally."
                                   />
                               </div>
                               
                               <div className="row mt-5"></div>
                               <div className="row">
                                 <Image imgSrc={imgOne} />
                               </div>
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                     content="To these characteristics are added city tariffs for sanitation, other standard monthly charges added to household bills, and VAT on service charges."
                                   />
                               </div>
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   contentHeading="The Composition of a Municipal Bill"
                                   />
                               </div>
                               <div className="row mt-1">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Table 1"
                                        dataDescription="Standard Service Packages" 
                                   />
                               </div>
                               <div className="row mt-2"></div>
                               <div className="row">
                                 <Image imgSrc={imgTwo} />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 2, p. 38" 
                                   />
                               </div>
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   content={contentBlockOne}
                                   />
                               </div>
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   contentHeading="Increase in Cost of Municipal Bills Over Time"
                                   />
                               </div>
                               <div className="row mt-1">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Figure 1"
                                        dataDescription="Average annual real growth in the cost of service packages by city between 2015 and 2017" 
                                   />
                               </div>
                               <div className="row mt-4">
                                   <div className="col-10"></div>
                                   <div className="col-0 float-right ds-download-button" onClick={this.downloadChart}>
                                       <a id="download" download="chart.png" style={{color:'#fff',textDecoration:'none'}}>
                                         Download as PNG
                                       </a>
                                   </div>
                                   <br/>
                                        <canvas
                                         id="mainChart"
                                        className="w-100"
                                        />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances, Chapter 2, p. 46." 
                                   />
                               </div>

                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   content={contentBlockTwo2}
                                   />
                               </div>
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   contentHeading="Affordability of Municipal Bills"
                                   />
                               </div>
                               <div className="row mt-1">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Table 2"
                                        dataDescription="Affordability of municipal bills" 
                                   />
                               </div>
                               <div className="row modal-body-2 mt-2">
                                <div className="col-0 w-100 visual-point">

                                <table id="example" className="tabl table-striped table-bordered">
                                <thead>
                                    <tr>
                                      <th style={{verticalAlign:'top',width:'98px'}}>CITY</th>
                                      <th style={{verticalAlign:'top'}}>PACKAGE TYPE</th>
                                      <th style={{verticalAlign:'top'}}>2017 BENCHMARK MUNICIPAL BILL (2017 RANDS)</th>
                                      <th style={{verticalAlign:'top'}}>MUNICIPAL BILL AS % OF BENCHMARK INCOME - 2015</th>
                                      <th style={{verticalAlign:'top'}}>MUNICIPAL BILL AS % OF BENCHMARK INCOME - 2017</th>
                                      <th style={{verticalAlign:'top'}}>CHANGE IN AFFORDABILITY SINCE 2015</th>
                                    </tr>
                                </thead>
                              <tbody>
                                
                                <tr>
                                    <td className="type-a">BCM</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">1212.75</td>
                                    <td className="type-a-row">16.9%</td>
                                    <td className="type-a-row">15.3%</td>
                                    <td className="type-a-row">-1.6%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">JHB</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">1128.28</td>
                                    <td className="type-a-row">15.5%</td>
                                    <td className="type-a-row">14.3%</td>
                                    <td className="type-a-row">-1.2%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">TSH</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">1125.58</td>
                                    <td className="type-a-row">15.8%</td>
                                    <td className="type-a-row">14.3%</td>
                                    <td className="type-a-row">-1.5%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">ETH</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">951.35</td>
                                    <td className="type-a-row">12.8%</td>
                                    <td className="type-a-row">12.0%</td>
                                    <td className="type-a-row">-0.7%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">CCT</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">928.12</td>
                                    <td className="type-a-row">11.2%</td>
                                    <td className="type-a-row">11.8%</td>
                                    <td className="type-a-row">0.5%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">NMB</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">919.44</td>
                                    <td className="type-a-row">12.9%</td>
                                    <td className="type-a-row">11.6%</td>
                                    <td className="type-a-row">-1.2%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">MSU</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">906.53</td>
                                    <td className="type-a-row">12.4%</td>
                                    <td className="type-a-row">11.5%</td>
                                    <td className="type-a-row">-1.0%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">MAN</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">884.99</td>
                                    <td className="type-a-row">13.0%</td>
                                    <td className="type-a-row">11.2%</td>
                                    <td className="type-a-row">-1.8%</td>
                                </tr>
                                <tr>
                                    <td className="type-a">EKU</td>
                                    <td className="type-a">Type A</td>
                                    <td className="type-a-row">754,46</td>
                                    <td className="type-a-row">9.8%</td>
                                    <td className="type-a-row">9.5%</td>
                                    <td className="type-a-row">0,3%</td>
                                </tr>

                                
                                <tr>
                                    <td className="type-b">BCM</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1616.71</td>
                                    <td className="type-b-row">11.2%</td>
                                    <td className="type-b-row">10.2%</td>
                                    <td className="type-b-row">-1.0%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">JHB</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1581.54</td>
                                    <td className="type-b-row">11.0%</td>
                                    <td className="type-b-row">10.0%</td>
                                    <td className="type-b-row">-0.9%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">TSH</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1514.19</td>
                                    <td className="type-b-row">10.6%</td>
                                    <td className="type-b-row">9.6%</td>
                                    <td className="type-b-row">-1.0%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">CCT</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1514.14</td>
                                    <td className="type-b-row">9.7%</td>
                                    <td className="type-b-row">9.6%</td>
                                    <td className="type-b-row">-0.1%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">EKU</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1 010,75</td>
                                    <td className="type-b-row">6,6%</td>
                                    <td className="type-b-row">6,4%</td>
                                    <td className="type-b-row">-0,2%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">MSU</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1302.06</td>
                                    <td className="type-b-row">9.2%</td>
                                    <td className="type-b-row">8.2%</td>
                                    <td className="type-b-row">-1.0%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">ETH</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1285.95</td>
                                    <td className="type-b-row">8.7%</td>
                                    <td className="type-b-row">8.1%</td>
                                    <td className="type-b-row">-0.6%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">NMB</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">1266.99</td>
                                    <td className="type-b-row">8.8%</td>
                                    <td className="type-b-row">8.0%</td>
                                    <td className="type-b-row">-0.8%</td>
                                </tr>
                                <tr>
                                    <td className="type-b">MAN</td>
                                    <td className="type-b">Type B</td>
                                    <td className="type-b-row">205,47</td>
                                    <td className="type-b-row">8,6%</td>
                                    <td className="type-b-row">7,6%</td>
                                    <td className="type-b-row">-1,0%</td>
                                </tr>

                                
                                <tr>
                                    <td className="type-c">BCM</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">2516.60</td>
                                    <td className="type-c-row">8.8%</td>
                                    <td className="type-c-row">8.0%</td>
                                    <td className="type-c-row">-0.8%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">CCT</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">2464.67</td>
                                    <td className="type-c-row">7.9%</td>
                                    <td className="type-c-row">7.8%</td>
                                    <td className="type-c-row">-0.1%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">MAN</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">1205.47</td>
                                    <td className="type-c-row">8.6%</td>
                                    <td className="type-c-row">7.6%</td>
                                    <td className="type-c-row">-1.0%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">TSH</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">2282.85</td>
                                    <td className="type-c-row">8.1%</td>
                                    <td className="type-c-row">7.2%</td>
                                    <td className="type-c-row">-0.9%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">JHB</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">2132.00</td>
                                    <td className="type-c-row">7.5%</td>
                                    <td className="type-c-row">6.8%</td>
                                    <td className="type-c-row">-0.7%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">ETH</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">2106.12</td>
                                    <td className="type-c-row">7.2%</td>
                                    <td className="type-c-row">6.7%</td>
                                    <td className="type-c-row">-0.6%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">EKU</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">1 991,16</td>
                                    <td className="type-c-row">6,8%</td>
                                    <td className="type-c-row">6,3%</td>
                                    <td className="type-c-row">-0,5%</td>
                                </tr>
                                <tr>
                                    <td className="type-c">MSU</td>
                                    <td className="type-c">Type C</td>
                                    <td className="type-c-row">895,64</td>
                                    <td className="type-c-row">6,6%</td>
                                    <td className="type-c-row">6,0%</td>
                                    <td className="type-c-row">-0,6%</td>
                                </tr>

                                <tr>
                                    <td className="type-d">NMB</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">3 693,33</td>
                                    <td className="type-d-row">6,7%</td>
                                    <td className="type-d-row">5,8%</td>
                                    <td className="type-d-row">-0,9%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">EKU</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">5 614,24</td>
                                    <td className="type-d-row">9,8%</td>
                                    <td className="type-d-row">8,9%</td>
                                    <td className="type-d-row">-0,9%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">TSH</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">4019.77</td>
                                    <td className="type-d-row">7.2%</td>
                                    <td className="type-d-row">6.4%</td>
                                    <td className="type-d-row">-0.8%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">MSU</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">3 305,90</td>
                                    <td className="type-d-row">5,7%</td>
                                    <td className="type-d-row">5,2%</td>
                                    <td className="type-d-row">-0,5%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">MAN</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">3 466,00</td>
                                    <td className="type-d-row">6,0%</td>
                                    <td className="type-d-row">5,5%</td>
                                    <td className="type-d-row">-0,5%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">JHB</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">3531.23</td>
                                    <td className="type-d-row">6.2%</td>
                                    <td className="type-d-row">5.6%</td>
                                    <td className="type-d-row">-0.6%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">CCT</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">4 726,64</td>
                                    <td className="type-d-row">7,4%</td>
                                    <td className="type-d-row">7,5%</td>
                                    <td className="type-d-row">0,1%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">BCM</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">4 198,35</td>
                                    <td className="type-d-row">7,4%</td>
                                    <td className="type-d-row">6,6%</td>
                                    <td className="type-d-row">-0,7%</td>
                                </tr>
                                <tr>
                                    <td className="type-d">ETH</td>
                                    <td className="type-d">Type D</td>
                                    <td className="type-d-row">4 052,74</td>
                                    <td className="type-d-row">7,0%</td>
                                    <td className="type-d-row">6,4%</td>
                                    <td className="type-d-row">-0,6%</td>
                                </tr>

                              </tbody>
                            </table>


                           </div>
                          </div>
                          <div className="row">
                              <DataStoriesContentCardDataInformation
                              dataHeading="Source"
                              dataDescription="State of City Finances, Chapter 2, p. 55." 
                              />
                          </div>
                          <div className="row">
                              <DataStoriesContentCardContentBlock 
                                content="All this to say that the ordinary consumer considers the costs of a municipal bill in relation to the other monthly, and other expenses that they face, and their income."
                              />
                          </div>
                          <div className="row mt-5"></div>
                               <div className="row">
                                   
                               <div className="col ds-content-card-highlight-block pb-3">
                                <div className="row">
                                    <div className="col-10 mt-4 ml-5 mx-5">
                                    Citizens Municipal Bills Are Regressive
                                    </div>
                                 </div>
                                 <div className="row ml-3 ds-content-card-highlight-block-text p-3">
                                 Cities have generally regressive tariff structures. This means that municipal bills account for a proportionally greater share of the income of poorer households than that of wealthier households.
                                 </div>
                               </div> 
                                   
                               </div>


                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock
                                   contentHeading="Affordability of Municipal Bills"
                                   />
                               </div>
                               <div className="row mt-1">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Figure 2"
                                        dataDescription="Cost of packages Type A to D as a percentage of benchmark houshold incomes (2015 - 2017)" 
                                   />
                               </div>

                               <div className="row mt-4">
                               <div className="col-md-6">

                                  <canvas id="barChartTypeA" className="w-100"></canvas>
                              </div>
                              <div className="col-md-6">

                                  <canvas id="barChartTypeB" className="w-100"></canvas>

                              </div>
                              </div>
                              <div className="row">
                              <div className="col-md-6">
                                  <canvas id="barChartTypeC" className="w-100"></canvas>
                              </div>
                              <div className="col-md-6">
                                  <canvas id="barChartTypeD" className="w-100"></canvas>
                              </div>   

                              </div>
                               
                               <div className="row mt-3">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 2, p. 55" 
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
}