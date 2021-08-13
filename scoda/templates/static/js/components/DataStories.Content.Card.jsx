import React, { Component } from 'react';

import Chart from 'chart.js';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

export default class DataStoriesContentCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Chart.platform.disableCSSInjection = true;
        
        this.renderCapitalGrants();
    }

    renderCapitalGrants() {

        const chartRef = document.getElementById('mainChart').getContext('2d');
        
        const chartColors = {
            yellow: 'rgb(255,201,105)',
            green: 'rgb(113,199,120)',
            blue: 'rgb(140,171,228)',
            orange: 'rgb(245,149,0)',
            red: 'rgb(220,123,135)',
            };

           new Chart(chartRef, {
                    type: 'bar',
                    data: {
                    labels: ['JHB','CPT','ETH','TSH','EKU','NMB','MAN','BCM'],
                    datasets: [{
                        label: 'Capital Grants',
                        backgroundColor: chartColors.yellow,
                        stack: 'Stack 0',
                        data: [
                            40.0,
                            32.8,
                            40.0,
                            40.3,
                            41.4,
                            14.3,
                            15.7,
                            15.0,
                        ]
                    }, {
                        label: 'Existing Development Charges',
                        backgroundColor: chartColors.green,
                        stack: 'Stack 0',
                        data: [
                            5.9,
                            1.4,
                            0.0,
                            1.9,
                            0.0,
                            1.8,
                            2.5,
                            0.0,
                        ]
                    }, {
                        label: 'Internal Funds',
                        backgroundColor: chartColors.blue,
                        stack: 'Stack 0',
                        data: [
                            7.3,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                        ]
                    }, {
                        label: 'New Loans',
                        backgroundColor: chartColors.orange,
                        stack: 'Stack 0',
                        data: [
                            8.4,
                            11.7,
                            30.7,
                            47.6,
                            7.1,
                            3.1,
                            4.8,
                            10.1,
                        ]
                    }, {
                        label: 'Funding Gap',
                        backgroundColor: chartColors.red,
                        stack: 'Stack 0',
                        data: [
                            170.5,
                            107.9,
                            71.3,
                            72.5,
                            117.3,
                            16.2,
                            9.7,
                            3.6,
                        ]
                        }
                    ]
                  },
                  options: {
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
                    maintainAspectRatio:false,
                    scales: {
                        xAxes: [{
                            stacked: true,
                            ticks: {fontStyle: 'bold'},
                            gridLines: {
                                borderDash: [2],
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
                                labelString: 'Nominal Rands, Nearest R billion',
                                fontStyle: 'bold'
                            },
                            borderSkipped: 'bottom',
                        }],

                    }
                }

            });
    }

    downloadChart() {
        var url_base64jp = document.getElementById("mainChart").toDataURL("image/jpg");

        var a =  document.getElementById("download");

        a.href = url_base64jp;
    }

    render() {


        let contentBlockOne = `While revenues are sufficient to cover operating expenditures in the metros, they do not generate enough internal finance to fully fund capital expenditure. 
        <br/><br/>
        The funding gap is the difference between the metros’ available revenue and capital finance, and the operating and capital expenditure required to adequately deliver on their mandates, and poses a risk to the ability of metros to provide and maintain adequate infrastructure in the medium to long term. The sources of capital finance and the funding gap for the metros is shown in figure 1.
        <br/><br/>
        The funding gap is shown in purple while the percentages on top of the bars indicate the funding gap as a percentage of capital expenditure in each city. It ranges from 12% in Buffalo City to 73% in Johannesburg.`;
        
        let contentBlockTwo = `Cities can and should take steps to close the gap but need policy support at national level to develop and implement alternative revenue models.`

        let contentBlockThree = `<o onClick="javascript:window.open('https://www.sacities.net/municipal-finance/','_new');">Read</o> more SACN publications and research on municipal finance matters on the SACN website
        <o onClick="javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')">Engage</o> with SACN’s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance’s interactively on National Treasury’s <o onClick="javascript:window.open('https://municipalmoney.gov.za/','_new')">Municipal Money</o> Datatool
        Explore the <o onClick="javascript:window.open('https://scoda.co.za/dataset/city-revenue-performance','_new')">full collection of State of Cities Finances 2018 datasets</o> on SCODA’s data portal
        <br/><br/>
        If you have any queries and further comment on this datastory, please email <o onClick="javascript:window.location='mailto:danga@sacities.net'">Danga Mughogho</o> at SACN.`;

        let imgOne = `/static/dist/img/scoda/datastories/ds-finance2018.svg`;

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
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText={this.props.infoBlockText}
                                />
                               </div>
                               <div className="row">
                                   <div className="col p-3"></div>
                               </div>
                               <div className="row">
                                 <Image imgSrc={imgOne} />
                               </div>
                               <div className="row">
                                   <div className="col p-3"></div>
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockOne}
                                   />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Figure 1"
                                        dataDescription="Availability of capital finance and resulting funding gap" 
                                   />
                               </div>
                               <div className="row mt-3"></div>
                               <div className="row mt-3">
                                   <div className="col-10"></div>
                                   <div className="col-0 float-right ds-download-button" onClick={this.downloadChart}>
                                       <a id="download" download="chart.jpg" style={{color:'#fff',textDecoration:'none'}}>
                                         Download
                                       </a>
                                   </div><br/><br/>
                                                    <canvas
                                                        id="mainChart"
                                                        className="w-100"
                                                    />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 4, p. 91" 
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Resolution to the Problem"
                                     content={contentBlockTwo}
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Resources"
                                     content={contentBlockThree}
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