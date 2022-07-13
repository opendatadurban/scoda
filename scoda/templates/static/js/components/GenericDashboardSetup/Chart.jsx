import React, { useEffect } from 'react'
import { useState } from 'react';
import { BarChartGeneric } from '../BarChartGeneric';

const chartData = (graphData, setDatasets) => {

    setDatasets(graphData)
}

export const Chart = ({ graphData, labels }) => {

    const [dataset, setDatasets] = useState([{}])

    useEffect(() => {

        setTimeout(() => {
 
            if(graphData[0].year && graphData[0].labels && graphData[0].values){
                chartData(graphData, setDatasets)
            }
        }, 5000);
    }, [graphData])

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

    const data = {
        labels: labels,
        datasets: dataset.length > 1 ? dataset.map( (item, index)=> {
            console.log(item)
            return {
                label: item.year,
                data: item.values,
                backgroundColor: item.color
            }
        }) : [{}]
    }


    return (
        <>
            <BarChartGeneric options={options} data={data} />
        </>

    )
}
