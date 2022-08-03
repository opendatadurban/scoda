import React from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { phChartTitles,echartTitles,dChartTitles } from "../helpers/helpers"
import axios from "axios"

export const ChartWrapper = ({ chartGroup, indicator_ids,dropdownName}) => {

  let items = []

  let chartTitles = dropdownName === "People and Households" ? 
  phChartTitles : dropdownName === "Employment" ?
  echartTitles: dropdownName === "Dwellings" ?
  dChartTitles:[]

  for (let i = 0; i < chartGroup.length; i++) {
    const element = chartGroup[i]

    if (typeof(indicator_ids[i]) === "number"  ) {
      
      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element}  title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={false} />
        </div>
      </div>
      )
    } else if( indicator_ids[i] === 'manual' ) {
      
      items.push( <div className='chart_wrapper' key={"manual"} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/1'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={"Average Number of People"} dropdownName={dropdownName} stacked={false}/>
        </div>
      </div>)
    } else if(indicator_ids[i] === 'n8' ){
      items.push( <div className='chart_wrapper' key={"n8"} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/8'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={"Average Number of People"} dropdownName={dropdownName} stacked={false}/>
        </div>
      </div>)
    } else if(indicator_ids[i] === 'n35' ||indicator_ids[i] === 'n36'||indicator_ids[i] === 'n37'||indicator_ids[i] === 'n38' ){
      items.push( <div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/8'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={false}/>
        </div>
      </div>)
    }  else if(indicator_ids[i] === "combination"){
      items.push( <div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/8'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={true}/>
        </div>
      </div>)
    }    
  }
  return items
}
