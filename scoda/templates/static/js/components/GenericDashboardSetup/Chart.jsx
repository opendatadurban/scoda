import React, { useEffect,useState } from 'react'

import { BarChartGeneric } from '../BarChartGeneric';

export const Chart = ({ graphData, labels, title }) => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
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
                padding: (40/1140) * windowSize.innerWidth
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
        labels: graphData[0].chartData ? labels[0].labels : labels,
        datasets: graphData[0].chartData ?

            graphData.map((item, index) => {
                return {
                    label: item.chartData.label,
                    data: item.chartData.values,
                    backgroundColor: item.chartData.color
                }
            })

            : graphData.map((item, index) => {
                return {
                    label: item.year,
                    data: item.values,
                    backgroundColor: item.color
                }
            })
    }
    console.log(data, "generic chart data")
    return (
        <>
            <BarChartGeneric options={options} data={data} />
        </>
    )
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }