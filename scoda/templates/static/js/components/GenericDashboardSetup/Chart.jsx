import React, { useEffect } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';

export const Chart = ({ graphData, labels,title }) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            labels: {
                fontSize: 8
            },
            onHover: function (e) {
                e.target.style.cursor = 'pointer';
            }
        },
        scales: {
            xAxes: [{
               
                gridLines: {
                    display: false
                },
                ticks: { fontFamily: "Montserrat", fontSize: 8, fontStyle:'600' },
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: title,
                    fontFamily: "Montserrat", 
                    fontSize: 8, 
                    fontStyle:'600' 
                  },
                gridLines: {
                    display: false
                },
                ticks: { fontFamily: "Montserrat", fontSize: 8 },
            }],
        },
    };

    const data = {
        labels:  graphData[0].chartData ? labels[0].labels :labels,
        datasets: graphData[0].chartData?

        graphData.map( (item, index)=> {
            return {
                label: item.chartData.label,
                data: item.chartData.values,
                backgroundColor: item.chartData.color
            }
        })
        
        :graphData.map( (item, index)=> {
            return {
                label: item.year,
                data: item.values,
                backgroundColor: item.color
            }
        })
    }

    return (
        <>
            <BarChartGeneric options={options} data={data} />
        </>
    )
}
