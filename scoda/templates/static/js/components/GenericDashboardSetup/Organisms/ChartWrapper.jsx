import React, { useEffect, useState } from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { chartTitles, tableData } from "../helpers/helpers"
import axios from "axios"

export const ChartWrapper = ({ title, chartGroup, indicator_ids, labelGroup }) => {

  const [manualChart, setManualData] = useState(null)

  useEffect(() => {
    axios.get("/api-temp/explore/?indicator_id=1").then((res) => {

      const table = res.data.table
      setManualData(tableData(table))
    })
  },[])

  let items = []

  for (let i = 0; i < chartGroup.length; i++) {

    if (indicator_ids[i] !== 'manual') {
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
    } else {
      
      items.push(manualChart? <div className='chart_wrapper' >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/1'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={manualChart} labels={manualChart} title={"Average Number of People"} />
        </div>
      </div>:"")
    }
  }

  return items
}
