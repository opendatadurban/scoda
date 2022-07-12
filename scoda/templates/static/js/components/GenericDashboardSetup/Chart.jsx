import React, { useEffect } from 'react'
import { useState } from 'react';
import { BarChartGeneric } from '../BarChartGeneric';

export const Chart = ({ graphData, labels }) => {

    const [chartState, setChartState] = useState(null)

    useEffect(() => {
        setChartState(graphData)
    }, [])

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
                ticks: { fontFamily: "Montserrat", fontSize: 8 },
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: { fontFamily: "Montserrat", fontSize: 8 },
            }],
        },
    };

    console.log(chartState, "child")


    const data = chartState ? {
        labels: labels,
        datasets:
            chartState.map((item, index) => {
                console.log(item,"loop test")
                return {
                
                    data: item.values
                }
            })

    } : {}


    return (
        <BarChartGeneric options={options} data={data} />
    )
}
