import React, { useEffect, useState } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';
import { cityLabels } from './helpers/helpers';

export const Chart = ({ graphData, title, dropdownName, stacked, chartIndex }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
            labels: {
                fontSize: 8,
                boxWidth: 25,
                fontColor: 'rgba(74, 74, 74, 1)',
                fontFamily: 'Montserrat',
                padding: 25
            },
            onHover: function (e) {
                e.target.style.cursor = 'pointer';
            }
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
                    callback: function (value) { return value + "" }
                } : (chartIndex === 1 && dropdownName === "People and Households") ||
                    ((chartIndex === 3 || chartIndex === 4) && dropdownName === "Dwellings") ? {
                    fontFamily: "Montserrat",
                    beginAtZero: true,
                    step: 0.5,
                    stepValue: 0.5
                }
                    :
                    {
                        fontFamily: "Montserrat",
                        beginAtZero: true,
                        callback: function (value, index, values) {

                            if (value < 1000000 && value > 1000) { values = Math.round(value) / 1000 + 'K ' }
                            else if (value >= 1000000) { values = Math.round(value) / 1000000 + 'M ' }
                            else if (value <= 1000 && value > 11) { values = Math.round(value) / 1 }
                            else if (value <= 11) { values = Math.round(value) }
                            return values
                        },
                    },
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
            <BarChartGeneric options={options} data={data} height={dropdownName === "Employment" ? 170 :
                dropdownName === "Household Income" ?
                    100 :
                    dropdownName === "Employment" ? 100 :
                        210} />
        </>
    )
}

