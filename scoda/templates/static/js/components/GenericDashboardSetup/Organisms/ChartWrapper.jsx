import React,{useEffect,useState} from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import { phChartTitles, echartTitles, dChartTitles, hiChartTitles, hhiDropdownNames } from "../helpers/helpers"
import { ErrorClose } from "../../../../svg_components/ErrorClose"
import { useCloseAllErrors } from "../../../context"

export const ChartWrapper = ({ chartGroup, indicator_ids, dropdownName, toggle, isNumber, selectedDropDownChart }) => {

  const errorContext = useCloseAllErrors()

  const setErrorState = (index) => {
    const newState = errorContext.error.map((obj, errorIndex) => {

      if (errorIndex === index) {
        return { ...obj, errorThrown: true };
      }

      return obj;
    });

    errorContext.setError(newState);
  };

  const clearErrorState = (index) => {

    const newState = errorContext.error.map((obj, errorIndex) => {

      if (errorIndex === index) {
        return { ...obj, errorThrown: false };
      }

      return obj;
    });

    errorContext.setError(newState);
  };

  const clearAllErrors = () => {

    let isClearable = false

    errorContext.error.forEach((item) => {
      if (item.errorThrown === true) {
        isClearable = true
      }
    })

    if (isClearable) {

      const newState = errorContext.error.map((obj) => {

        return { errorThrown: false };
      });

      errorContext.setError(newState);
    }

  }

  let items = []

  let chartTitles = dropdownName === "People and Households" ?
    phChartTitles : dropdownName === "Employment" ?
      echartTitles : dropdownName === "Dwellings" ?
        dChartTitles : dropdownName === "Household Income" ?
          hiChartTitles : []

  const elements = chartGroup

  for (let i = 0; i < elements.length; i++) {

    const element = elements[i]

    if (typeof (indicator_ids[i]) === "number" ) {

      

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors}>
        <div className='heading_wrapper'>
          {dropdownName === "Household Income" ?
            <p className="title">Main Source of Income:<span className="category">{"placeholder"}</span></p> :
            <div className='heading'>{chartTitles.main[i]}</div>
          }

          {dropdownName === "Household Income" ?
            <div className="button_group">
              <button className={isNumber ? "number" : "number deselect"} onClick={() => { toggle(true) }}>Number</button>
              <button className={isNumber ? "percent" : "percent select"} onClick={() => { toggle(false) }}>Percent</button>
              <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
            </div>
            :
            <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
          }
        </div>
        <div className="chart">
          <Chart graphData={element} title={(dropdownName === "Household Income" && !isNumber) ? "Percent of Households" : chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={false} chartIndex={i} />
        </div>
      </div>
      )
    }else if (Array.isArray(indicator_ids[i])){

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${hhiDropdownNames()[selectedDropDownChart].endpoints[isNumber?1:0]}`

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors}>
        <div className='heading_wrapper'>
          {dropdownName === "Household Income" ?
            <p className="title">Main Source of Income:<span className="category">{hhiDropdownNames()[selectedDropDownChart].shortName}</span></p> :
            <div className='heading'>{chartTitles.main[i]}</div>
          }

          {dropdownName === "Household Income" ?
            <div className="button_group">
              <button className={isNumber ? "number" : "number deselect"} onClick={() => { toggle(true) }}>Number</button>
              <button className={isNumber ? "percent" : "percent select"} onClick={() => { toggle(false) }}>Percent</button>
              <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
            </div>
            :
            <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
          }
        </div>
        <div className="chart">
          <Chart graphData={isNumber ?  JSON.parse(JSON.stringify(chartGroup[0][0][0])) : JSON.parse(JSON.stringify(chartGroup[0][0][1])) } 
          title={(dropdownName === "Household Income" && !isNumber) ? "Percent of Households" : chartTitles.yAxes[i]}
          dropdownName={dropdownName} stacked={false} chartIndex={i} />
        </div>
      </div>
      )
    }
    else if (indicator_ids[i] === 'n8' || indicator_ids[i] === 'n1' || indicator_ids[i] === 'n35' || indicator_ids[i] === 'n36' || indicator_ids[i] === 'n37' || indicator_ids[i] === 'n38') {

      items.push(<div className='chart_wrapper' key={indicator_ids[i].toString()} onClick={clearAllErrors} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' onClick={() => {
            setErrorState(i)
          }} style={{ opacity: "0.4" }}>Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={false} chartIndex={i} />
        </div>
        {errorContext.error[i].errorThrown ?
          <div className="error_message">
            <div className="top">
              <p className="title">Sorry!</p>
              <ErrorClose onClick={() => { clearErrorState(i) }} />
            </div>
            <p className="body">
              Raw data is not available for this indicator.
            </p>
          </div> : ""

        }
      </div>)
    } else if (indicator_ids[i] === "combination") {

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors} >
        <div className='heading_wrapper'>
          <p className='heading'>{chartTitles.main[i]}<span className="combination_year">{" (2018)"}</span></p>
          <a className='link' onClick={() => {
            setErrorState(i)
          }} style={{ opacity: "0.4" }}>Raw Data</a>
        </div>
        <div className="chart">
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName} stacked={true} />
        </div>
        {errorContext.error[i].errorThrown ?
          <div className="error_message">
            <div className="top">
              <p className="title">Sorry!</p>
              <ErrorClose onClick={() => { clearErrorState(i) }} />
            </div>
            <p className="body">
              Raw data is not available for this indicator.
            </p>
          </div> : ""

        }
      </div>)
    } else if (indicator_ids[i] === "indicator text box") {

      const codebookUrlForText = `/scoda/toolkit#/codebook-explorer/${hhiDropdownNames()[selectedDropDownChart].endpoints[isNumber?1:0]}`

      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper text_box'>
          <div className='heading'>Selected Indicator</div>
        </div>
        <div className="text">
          <div className="headings">
            <p className="code">CODE</p>
            <p className="name">NAME</p>
          </div>
          <div className="content">
            <p className="code">{isNumber? hhiDropdownNames()[selectedDropDownChart].numberCode:hhiDropdownNames()[selectedDropDownChart].percentCode}</p>
            <p className="name">{isNumber ? hhiDropdownNames()[selectedDropDownChart].numberName:hhiDropdownNames()[selectedDropDownChart].percentName}</p>
          </div>
          <a className="view_codebook" href={codebookUrlForText} target='_blank'>View Indicator in data explorer</a>
        </div>
      </div>)
    }
  }
  return items
}
