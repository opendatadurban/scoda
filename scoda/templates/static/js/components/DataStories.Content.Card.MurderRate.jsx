import React, { Component } from 'react';
import LineChart from '../components/LineGraph';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock'

const line_options = {
    legend: {
        display: false,
        labels: {
            fontSize: 16,
            fontFamily: "Montserrat",
            fontColor: '#4A4A4A',
        }
    },
    title: {
        display: true,
        text: 'Proportion Urban Population (Percent)',
        position: 'left',
        fontSize: 18,
        fontColor: '#4A4A4A',
        fontFamily: "Montserrat",
        padding: 20,
    },
    plugins: { 
        datalabels: { 
            display: true,
            color: '#4A4A4A',
            fontSize:16,
            fontStyle:'bold',
            anchor:'end',
            align:'center',
            formatter: (value, ctx) => {
                return "R"+value
              }
         } },
    scales: {
        xAxes: [{
            borderWidth: 3,
            stacked: false,
            gridLines: {
                display: true,
                borderDash: [3, 4],
                color: "black",

            },
            ticks: {
                fontColor: "#4A4A4A",
                fontFamily: "Montserrat",
                fontSize: 14,
                fontStyle: 600,
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90

            }
        }],
        yAxes: [{
            stacked: false,
            ticks: {
                fontSize: 16,
                fontFamily: "Montserrat",
                fontColor: '#4A4A4A',
                beginAtZero: true,
                stepSize: 20,
                max: 80,
                min: 0,



            },
        }]
    }

}
const line_data = {
    labels: ['94/95', '95/96', '96/97', '97/98', '98/99', '99/00',
        '00/01', '01/02', '02/03', '03/04', '04/05', '05/06',
        '06/07', '07/08', '08/09', '09/10', '10/11', '11/12',
        '12/13', '13/14', '14/15', '15/16', '16/17', '17/18'
    ],
    datasets: [
        {

            fill: false,
            lineTension: 0.1,
            backgroundColor: '#F4A582',
            borderWidth: 2,
            borderColor: '#F4A582',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#F4A582',
            pointBackgroundColor: '#F4A582',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#F4A582',
            pointHoverBorderColor: '#F4A582',
            pointHoverBorderWidth: 1,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [69, 65, 61, 60, 57, 50, 49, 49, 47, 43, 40, 39, 40, 38, 36, 33, 31, 30, 31, 32, 33, 34, 34, 36]
        }
    ]
};

export default class MurderRate extends Component {
    render() {
        return (
            <div>
                <div  className="mb-5">
                <DataStoriesContentCardContentBlock
                    contentHeading="What are South Africa’s murder rate figures?"
                    content="South Africa records among the highest murder rates in the world. Although the country has almost halved its murder rates since 1994, they remain worryingly high. In the past 4 years, following an all-time low in 2011, murder rates have steadily climbed. 
                    This is cause for concern."
                />
                </div>


                <div className="row">
                    <div className="col-md-9">
                        <LineChart
                            height="140"
                            options={line_options}
                            data={line_data}
                            heading="South Africa’s murder rate per 100 000 (1994/1995 - 2017/2018)"
                            title=""
                            source=""

                        />

                    </div>
                    <div className="col-md-3">
                                     
                     <div className="ds-content-murder_rate">From national statistics, cities record the lion’s share of crime: </div>
                        <ul className="ds-content-murder_rate-list">
                            <li><b>47% </b> of murders</li>
                            <li><b>58%</b> of residential robberies</li>
                            <li><b>64%</b> of aggravated robberies </li>
                            <li><b>73%</b> of vehicle thefts</li>
                            <li><b>76% </b> of carjackings</li>
                        </ul>

                    </div>
                  

                </div>
                
              
                <DataStoriesContentCardContentBlock
                   
                    content="Because crime and violence have a distinctly urban character, there’s a need to focus on cities through research aimed at reliably establishing what drives crime trends and what the right responses should entail. "
                />

            </div>
        )
    }
}