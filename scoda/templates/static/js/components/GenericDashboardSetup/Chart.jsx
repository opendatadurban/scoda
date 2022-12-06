import React from 'react'

import { BarChartGeneric } from '../BarChartGeneric';
import { cityLabels, chartHeights } from './helpers/helpers';
import { tickExceptionsForDwellings } from './helpers/tickExceptions';

export const Chart = ({ graphData, title, dropdownName, stacked, chartIndex, genericIndex }) => {


    const options = {
        responsive: true,
        maintainAspectRatio: true,

        legend: {
            display: true,

            labels: {
                fontSize: 12,
                boxWidth: 25,
                fontColor: 'rgba(74, 74, 74, 1)',
                fontFamily: 'Montserrat',
            },
            onHover: function (e) {
                e.target.style.cursor = 'pointer';
            },


        },

        scales: {
            xAxes: [{
                stacked: stacked,
                gridLines: {
                    display: false
                },
                ticks: {
                    fontFamily: "Montserrat", fontSize: 12, fontStyle: '600',

                },
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                stacked: stacked,
                scaleLabel: {
                    display: true,
                    labelString: title,
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    fontStyle: '600',

                    fontColor: "rgba(74, 74, 74, 1)"
                },
                gridLines: {
                    display: false
                },
                ticks: stacked ? {

                    fontFamily: "Montserrat",
                    min: 0,
                    max: 100,
                    callback: function (value) {
                        return value + ""
                    }
                }
                    :

                    tickExceptionsForDwellings(dropdownName, chartIndex, genericIndex),
            }],
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
                    label += isNaN(tooltipItem.yLabel) ? '0' : Math.round(tooltipItem.yLabel * 100) / 100;
                    return label;
                }
            }
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
            <BarChartGeneric options={options} data={data} height={chartHeights(dropdownName, genericIndex)} />
        </>
    )
}

