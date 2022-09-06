

import React from 'react'
import { Bar } from 'react-chartjs-2'

export const BarChartGeneric = ({options,data,height}) => {
   
  return (
    <Bar options={options} data={data} height={height} plugins={
      [{
        beforeInit: (chart, options) => {
          chart.legend.afterFit = () => {
           
            if (chart.legend.margins) {
              // Put some padding around the legend/labels
              chart.legend.options.labels.padding = 16;
              chart.legend.margins.bottom += 400

            }
          };
        }
      }]
    }></Bar>
  )
}
