import React, { useEffect } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';
import { cityLabels } from './helpers/helpers';

export const Chart = ({ graphData, title }) => {

    const options = {
        responsive: true,
        maintainAspectRatio: true,
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
                ticks: { fontFamily: "Montserrat", fontSize: 8, fontStyle: '600' },
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
                    fontStyle: '600'
                },
                gridLines: {
                    display: false
                },
                ticks: { fontFamily: "Montserrat", fontSize: 8 },
            }],
        },
    };

    const data = {
        labels: graphData[0].labels.map(city => cityLabels(city)),
        datasets: graphData.map((item, index) => {
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
