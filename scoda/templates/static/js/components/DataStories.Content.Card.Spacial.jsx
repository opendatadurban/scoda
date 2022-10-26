import React, { Component } from 'react';

import Chart from 'chart.js';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

export default class DataStoriesContentCardSpacial extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Chart.platform.disableCSSInjection = true;
        
        this.renderChart();
    }

    renderChart() {

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
                        labels: ['JHB','CCT','ETH','TSH','EKU','NMB','MAN','BCM','MSU'],
			datasets: [{
				label: 'Greenfield Developments',
				backgroundColor: chartColors.green,
				stack: 'Stack 0',
				data: [
					5604.3,
					4249.7,
					8545.8,
					10339.7,
					5602.0,
					8013.7,
					8675.6,
					8446.1,
					7793.6,
				]
			}, {
				label: 'Brownfield Developments',
				backgroundColor: chartColors.yellow,
				stack: 'Stack 1',
				data: [
					3181.1,
					2755.7,
					4796.1,
					6563.1,
					3288.6,
					5156.9,
					4877.8,
					5464.2,
					5805.4,
				]
			    }]
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
                            labelString: 'Rands'
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

    render() {


        let contentBlockOne = `Despite the fact that South Africa’s national urban agenda prioritises urban densification, the municipal revenue model, which is dependent on property rates, incentivises urban sprawl.
        <br/>
        <br/>
        What explains why our cities continue to sprawl, and despite policy prescriptions, urban planners and finance departments seem powerless to prevent this happening?`;
        
        let contentBlockTwo = `Greenfield development is development from land zoned for agricultural use, while brownfield development is a proxy for the rezoning of industrial use urban land.

        <br/><br/>
        As Figure 1 shows, both brownfield and greenfield developments have a positive impact on revenues in all nine metros, but greenfield development has a significantly higher impact.`

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

        let imgOne = `/static/dist/img/scoda/datastories/ds-spacial.svg`;

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
                                   <div className="col p-2"></div>
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockOne}
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Explaining the Revenue Incentive"
                                   />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="FIGURE 1"
                                        dataDescription="Impact of Brownfield and Greenfield developments on per-property municipal revenue" 
                                   />
                               </div>
                               <div className="row mt-3"></div>
                               <div className="row mt-3">
                                   <div className="col-10"></div>
                                   <div className="col-0 float-right ds-download-button" onClick={this.downloadChart}>
                                       <a id="download" download="chart.png" style={{color:'#fff',textDecoration:'none'}}>
                                         Download as PNG
                                       </a>
                                   </div>
                                   <br/><br/>
                                        <canvas
                                         id="mainChart"
                                        className="w-100"
                                        />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 3, p. 78" 
                                   />
                               </div>
                              
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockTwo}
                                   />
                               </div>
                               <div className="row mt-5"></div>
                               <div className="row">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText="This clearly indicates a fiscal incentive for municipalities to promote greenfield developments over brownfield developments: sprawl is incentivised and densification not."
                                />
                               </div>
                               <div className="row mt-3"></div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Data Story 2 Sub-Story"
                                        dataDescription="Illustrating the financial mechanics that underpin the revenue logic of city finance" 
                                   />
                               </div>
                               <div className="row mt-3"></div>
                               <div className="row">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText="What financial mechanisms explain why cities prefer sprawl to densification?"
                                />
                               </div>
                               <div className="row mt-3"></div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Illustrating the Logic"
                                   />
                               </div>
                               <div className="row mt-5"></div>
                               <div className="row">
                                 <Image alt='spacial' imgSrc={imgOne} />
                               </div>
                               <div className="row">
                                   <div className="col p-3"></div>
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 3, p. 81" 
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockFour}
                                   />
                               </div>
                               <div className="row mt-5"></div>
                               <div className="row">
                                   
                               <div className="col ds-content-card-highlight-block pb-3">
                                <div className="row">
                                    <div className="col-10 mt-4 ml-5 mx-5">
                                      Resolution to the Problem
                                    </div>
                                 </div>
                                 <div className="row ml-3 ds-content-card-highlight-block-text p-3">
                                    The gap between city finance (core revenue model) and spatial transformation needs to be bridged, to ensure that the desired spatial objectives are incentivised and built into the day-to-day running of cities.
                                 </div>
                               </div> 
                                   
                               </div>
                              
                               <div className="row mt-4">
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