import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = ({
  x_label,
  stepSize,
  finance,
  hundred,
  divide,
  className,
  h3class,
  title,
  data,
  source
}) => {

    const [options] = useState({
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
            label += isNaN(tooltipItem.yLabel) ? '0' : Math.round(tooltipItem.yLabel * 100) / 100;
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
            stepSize: stepSize,
             
            callback: function (value, index, values) {
              if(!finance){
                if(hundred){
                  if(value < 1000000){values = Math.round(value) / divide + 'K ';}
                  else {values = Math.round(value) / 1000000 + 'M ';}
                }
                else {
                  values = Math.round(value) / divide;
                }
              return values+' '
            }  
            else {
              return value+' '
              }

          }

          },
          gridLines: {
            drawTicks: false,
          },
          scaleLabel: {
            display: true,
            labelString: x_label ? x_label : "",
            fontStyle: 'bold',
            fontFamily: "Montserrat",
            fontSize: 12
          }
        }],

      }
    })

        return (
          <div className={"container doughnut chart " + className}>
                <div className="row">
                    <div className="col-12">
                        <h3 className={h3class}>{title}</h3>
                        <Bar options={options}  data={data} redraw={true}/>
                        <p className="source">{source}</p>
                    </div>
                </div>
            </div>
            
        )
}
export default Charts;