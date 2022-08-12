import React, { useState } from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { phChartTitles,echartTitles,dChartTitles,hiChartTitles } from "../helpers/helpers"
import { indicator_text_box_data } from "../data/data"
import { Button } from "reactstrap"

export const ChartWrapper = ({ chartGroup, indicator_ids,dropdownName}) => {
  const [type,setType] = useState("number")
  const [textIndex,setTextIndex] = useState(0)
  const [selectedCode,setCode] = useState(indicator_text_box_data[textIndex][type].code)
  const [selectedName,setName] = useState(indicator_text_box_data[textIndex][type].name)

  let items = []

  let chartTitles = dropdownName === "People and Households" ? 
  phChartTitles : dropdownName === "Employment" ?
  echartTitles: dropdownName === "Dwellings" ?
  dChartTitles:dropdownName === "Household Income" ?
  hiChartTitles:[]

  for (let i = 0; i < chartGroup.length; i++) {

    const element = chartGroup[i]

    if (typeof(indicator_ids[i]) === "number"  ) {
      
      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          {dropdownName === "Household Income" ? 
          <div className="button_group">
            <button className="number">Number</button>
            <button className="percent">Percent</button>
            <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
          </div>: 
                      <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
        }
          
        </div>
        <div className="chart">
          <Chart graphData={element}  title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={false} />
        </div>
      </div>
      )
    } else if( indicator_ids[i] === 'n1' ) {
      
      items.push( <div className='chart_wrapper' key={"n1"} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' href={'/scoda/toolkit#/codebook-explorer/1'} target='_blank' >Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={"Average Number of People"} dropdownName={dropdownName} stacked={false}/>
        </div>
      </div>)
    } else if( indicator_ids[i] === 'n8' ){
      
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
    } else if(indicator_ids[i] === "indicator text box"){

      items.push( <div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper text_box'>
          <div className='heading'>Selected Indicator</div>
        </div>
        <div className="text">
          <div className="headings">
            <p className="code">CODE</p>
            <p className="name">NAME</p>
          </div>
          <div className="content">
            <p className="code">{selectedCode}</p>
            <p className="name">{selectedName}</p>
          </div>
        </div>
      </div>)
    }   
  }
  return items
}
