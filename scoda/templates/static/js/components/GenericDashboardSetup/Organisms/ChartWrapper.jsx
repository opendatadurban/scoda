import React from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { chartTitles } from "../helpers/helpers"


export const ChartWrapper = ({ title, chartGroup, indicator_ids, labelGroup }) => {

  let items = []
  
  
  for (let i = 0; i < chartGroup.length; i++) {
  
    const element = chartGroup[i]
    const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

    items.push(<div className='chart_wrapper' key={i.toString()} >
      <div className='heading_wrapper'>
        <div className='heading'>{chartTitles.main[i]}</div>
        <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
      </div>
      <div className="chart">
        <Chart graphData={element} labels={labelGroup[i]} title={chartTitles.yAxes[i]} />
      </div>
    </div>
    )
  }

  return items
}
