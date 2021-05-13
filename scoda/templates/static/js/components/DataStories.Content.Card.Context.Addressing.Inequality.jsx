import React, { Component } from "react";
import LineChart from '../components/LineGraph';

const line_options = {
    legend: {
        display: true,
        labels: {
            fontSize: 16,
            fontFamily: "Montserrat",
            fontColor:'#4A4A4A',
           }
    },
    title: {
        display: true,
        text: 'Proportion Urban Population (Percent)',
        position: 'left',
        fontSize : 18,
        fontColor:'#4A4A4A',
        fontFamily: "Montserrat",
        padding:20,
    },
    plugins: { datalabels: { display: false }  },
    scales: {
        xAxes: [{
            borderWidth:3,
            stacked: false,
            gridLines: {
                display: true,
                borderDash:[3,4],
                color: "black",
                
            },
            ticks: {
                fontColor: "#4A4A4A",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontStyle: 600,
                autoSkip: false,
            
              }
        }],
        yAxes: [{
            stacked: false,
            ticks: {
                fontSize:16,
                fontFamily: "Montserrat",
                fontColor:'#4A4A4A',
                beginAtZero: true,
                stepSize: 10,
                max: 100,
                min:0,
               
                

            },
        }]
    }

}
const line_data = {
    labels: ['1990','2014', '2050'
            ],
    datasets: [
        {
            label:"world",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#8F8F8F',
            borderWidth:2,
            borderColor: '#8F8F8F',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#8F8F8F',
            pointBackgroundColor: '#8F8F8F',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#8F8F8F',
            pointHoverBorderColor: '#8F8F8F',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30,40,40]
        },
        {
            label:"Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FB9A99',
            borderWidth:2,
            borderColor: '#FB9A99',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FB9A99',
            pointBackgroundColor: '#FB9A99',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#FB9A99',
            pointHoverBorderColor: '#FB9A99',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [33,54,80]
        },
        {
            label:"Asia",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#CAB2D6',
            borderWidth:2,
            borderColor: '#CAB2D6',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#CAB2D6',
            pointBackgroundColor: '#CAB2D6',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#CAB2D6',
            pointHoverBorderColor: '#CAB2D6',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [23,34,70]
        },
        {
            label:"East Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#B15928',
            borderWidth:2,
            borderColor: '#B15928',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#B15928',
            pointBackgroundColor: '#B15928',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#B15928',
            pointHoverBorderColor: '#B15928',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37,54,60]
        },
        {
            label:"Central Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FDBF6F',
            borderWidth:2,
            borderColor: '#FDBF6F',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FDBF6F',
            pointBackgroundColor: '#FDBF6F',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#FDBF6F',
            pointHoverBorderColor: '#FDBF6F',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65,54,78]
        }
        ,
        {
            label:"Latin Am. & Caribbean",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#33A02C',
            borderWidth:2,
            borderColor: '#33A02C',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#33A02C',
            pointBackgroundColor: '#33A02C',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#33A02C',
            pointHoverBorderColor: '#33A02C',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37,84,90]
        }
        ,
        {
            label:"North Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#B2DF8A',
            borderWidth:2,
            borderColor: '#B2DF8A',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#B2DF8A',
            pointBackgroundColor: '#B2DF8A',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#B2DF8A',
            pointHoverBorderColor: '#B2DF8A',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [52,65,73]
        }
        ,
        {
            label:"West Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FF7F00',
            borderWidth:2,
            borderColor: '#FF7F00',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FF7F00',
            pointBackgroundColor: '#FF7F00',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#FF7F00',
            pointHoverBorderColor: '#FF7F00',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [43,61,80]
        },

        {
            label:"Oceania",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#E4E413',
            borderWidth:2,
            borderColor: '#E4E413',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#E4E413',
            pointBackgroundColor: '#E4E413',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#E4E413',
            pointHoverBorderColor: '#E4E413',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [63,81,90]
        }
        ,
        {
            label:"Southern Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#6A3D9A',
            borderWidth:2,
            borderColor: '#6A3D9A',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#6A3D9A',
            pointBackgroundColor: '#6A3D9A',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#6A3D9A',
            pointHoverBorderColor: '#6A3D9A',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [23,31,40]
        }
        ,
        {
            label:"South Africa",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#E31A1C',
            borderWidth:2,
            borderColor: '#E31A1C',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#E31A1C',
            pointBackgroundColor: '#E31A1C',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#E31A1C',
            pointHoverBorderColor: '#E31A1C',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37,53,68]
        },
        {
            label:"Europe",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#1F78B4',
            borderWidth:2,
            borderColor: '#1F78B4',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#1F78B4',
            pointBackgroundColor: '#1F78B4',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#1F78B4',
            pointHoverBorderColor: '#1F78B4',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37,53,68]
        },
        
        {
            label:"North America",
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#A6CEE3',
            borderWidth:2,
            borderColor: '#A6CEE3',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#A6CEE3',
            pointBackgroundColor: '#A6CEE3',
            pointBorderWidth: 2,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#A6CEE3',
            pointHoverBorderColor: '#A6CEE3',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37,53,68]
        }
    ]
};

export default class AddressingInequality extends Component {
    render() {
        return (
            <div>
                <div className="mt-4 ml-2 pr-2">
                    <div className="row">
                        <div className="col-12">
                            
                                <div className="row">
                                    <div className="col-md-7">
                                    <LineChart 
                                     height="270"
                                     options={line_options} 
                                     data={line_data} 
                                     heading="Total Annualised Quarterly Performance of Durban’s GDP"
                                     title="SOURCE:"
                                     source="UN DESA (2014)"
                                    
                                     />

                                    </div>
                                    <div className="col-md-5">
                                        <div className="ds-content-card-highlight-block-paragraph">
                                            <p className="ds-content-card-highlight-block-paragraph-text-title">Addressing inequality is a matter of life and violent death</p>
                                            
                                                <p className="ds-content-card-highlight-block-paragraph-text">
                                                    Since at least the 1970s, South Africa’s murder levels have not been below 30 per 100 000, which is considered very high by global standards - only a handful of countries record murder rates at this level.

                                                </p>
                                                <p className="ds-content-card-highlight-block-paragraph-text">

                                                    Comparative international research shows that a very strong predictor of a country’s level of crime and violence is its level of inequality.
                                                    As measured by its Gini coefficient, South Africa is one of the most unequal countries, if not the most unequal country, in the world.
                                                </p>
                                                <p className="ds-content-card-highlight-block-paragraph-text">
                                                    Addressing inequality must no longer be considered an abstract and long-term ideal.  It is a matter of life and violent death.

                                                </p>
                                            

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        
        )
    }
}