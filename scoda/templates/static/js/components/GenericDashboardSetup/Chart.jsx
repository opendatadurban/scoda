import React, { useEffect } from 'react'
import { useState } from 'react';
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
                ticks: { fontFamily: "Montserrat", fontSize: 8, fontWeight:'bold' },
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
            console.log(item)
            return {
                label: item.year,
                data: item.values,
                backgroundColor: item.color
            }
        })
    }
    console.log(data)

    return (
        <>
            <BarChartGeneric options={options} data={data} />
        </>
    )
}
