import React, { Component, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar ,Pie} from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = (props) => {
  const [options, setOptions] = useState({
    legend: {
      position:'right',
      labels: {
        fontColor: "#4A4A4A",
        fontSize: 8,
        fontFamily: "Montserrat",
      }
    },
    title: {
      display: false,
      text: 'Title',
      fontFamily: "Montserrat",
    },

    responsive: true,
  })
    return (
      <div className={"container doughnut chart " + props.className}>
            <div className="row">
                <div className="col-12">
                    <h3 className={props.class}>{props.title}</h3>
                    <Pie options={options} data={props.data} redraw={true}/>
                    <p className="source">{props.source}</p>
                </div>
            </div>
        </div>
    )
}
export default Charts;