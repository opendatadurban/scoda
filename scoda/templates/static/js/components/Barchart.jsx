import React, { Component } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
const Charts = (props) => {
    
     const data = {
        labels: ["2020/02/17", "", "2020/02/23", "", "2020/02/29", ""],
        datasets: [
          {
            type: "bar",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            label: "標籤一",
            data: [60, 49, 72, 90, 100, 60]
          },
          {
            type: "line",
            label: "標籤二",
            data: [25, 13, 30, 35, 25, 40],
            lineTension: 0, // 曲線的彎度，設 0 表示直線
            fill: true // 是否填滿色彩
          }
        ]
      }

      const options= {
        legend: {
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
        tooltips: {
          mode: 'index',
          intercept: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: { fontStyle: 'bold', steps: 4, fontFamily: "Montserrat", },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              stepSize: 5000,
              callback: function (value, index, values) {
                  values = Math.round(value) / 100000 + 'K ';
                return values
              },

            },
            gridLines: {
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Posts",
              fontStyle: 'bold',
              fontFamily: "Montserrat",
              fontSize: 12
            }
          }],

        }
      }
        return (
          <div className={"container doughnut chart " + props.className}>
                <div className="row">
                    <div className="col-12">
                        <h3 className={props.class}>{props.title}</h3>
                        <Bar options={options} data={props.data} />
                        <p className="source">{props.source}</p>
                    </div>
                </div>
            </div>
            
        )
}
export default Charts;