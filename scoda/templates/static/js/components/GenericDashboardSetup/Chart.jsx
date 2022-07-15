import React, { useEffect } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';



export const Chart = ({ graphData, labels }) => {

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
                gridLines: {
                    display: false
                },
                ticks: { fontFamily: "Montserrat", fontSize: 8 },
            }],
        },
    };

    const data = {
        labels: labels,
        datasets: graphData.map( (item, index)=> {
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
