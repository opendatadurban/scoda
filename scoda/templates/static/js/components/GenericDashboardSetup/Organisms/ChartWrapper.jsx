import React from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { chartTitles } from "../helpers/helpers"
import axios from "axios"

export const ChartWrapper = ({ chartGroup, indicator_ids}) => {

  let items = []

  for (let i = 0; i < chartGroup.length; i++) {
    const element = chartGroup[i]

    if (indicator_ids[i] !== 'manual') {
      
      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element}  title={chartTitles.yAxes[i]} />
        </div>
      </div>
      )
    } else {
      
      items.push( <div className='chart_wrapper' key={"manual"} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/1'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={"Average Number of People"} />
        </div>
      </div>)
    }
  }

  return items
}
