import React, { useEffect, useState } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';
import { cityLabels } from './helpers/helpers';

export const Chart = ({ graphData, title }) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowSize());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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
                padding: (40 / 1140) * windowDimensions.innerWidth
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

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}