import { Bar } from 'react-chartjs-2';

import React from 'react'

export const BarChartGeneric = ({options,data,height}) => {
  return (
    <Bar options={options} height={height} width={null} data={data}/>
  )
}
