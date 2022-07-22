import { Bar } from 'react-chartjs-2';

import React from 'react'

export const BarChartGeneric = ({options,data}) => {
  return (
    <Bar options={options} height={210} width={null} data={data}/>
  )
}
