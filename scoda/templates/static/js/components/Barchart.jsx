import React, { Component } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
const Charts = (props) => {
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
                        <Bar data={props.data} redraw={true}/>
                        <p className="source">{props.source}</p>
                    </div>
                </div>
            </div>
            
        )
}
export default Charts;