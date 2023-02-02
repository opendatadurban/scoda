import React, { useEffect, useState } from "react"
import { Chart } from '../Chart'
import '../../../../scss/components/chart/ChartHeader.scss'
import {
  phChartTitles, echartTitles, dChartTitles,
  hiChartTitles, hhiDropdownNames, leChartTitles, fsChartTitles, sustainabilityChartTitles, isArrayOfIndicatorCodes, ictChartTitles, tpChartTitles, ceChartTitles, sdChartTitles, mhrChartTitles
} from "../helpers/helpers"
import { ErrorClose } from "../../../../svg_components/ErrorClose"
import { useCloseAllErrors } from "../../../context"
import { dropdownChartTitle, getSourceTitle, getYAxisTitle } from "../helpers/dropdownChartTitles"

export const ChartWrapper = ({ chartGroup, indicator_ids, dropdownName, toggle, isNumber, selectedDropDownChart,
  genericIndex }) => {


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


  let chartTitles = dropdownName === "Municipal Human Resources" ?
    mhrChartTitles : dropdownName === "Service Delivery" ?
      sdChartTitles : dropdownName === "Citizen Engagement" ?
        ceChartTitles : dropdownName === "People and Households" ?
          phChartTitles : dropdownName === "Employment" ?
            echartTitles : dropdownName === "Dwellings" ?
              dChartTitles : dropdownName === "Household Income" ?
                hiChartTitles : dropdownName === "Life Expectancy and Health" ?
                  leChartTitles : dropdownName === "Food Security, Literacy and Inequality" ?
                    fsChartTitles : dropdownName === "Sustainability" ?
                      sustainabilityChartTitles(dropdownName, genericIndex) : dropdownName === "ICT Infrastructure" ?
                        ictChartTitles : dropdownName === "Public Transport Spend" ?
                          tpChartTitles(genericIndex) :
                          []

  const elements = chartGroup



  for (let i = 0; i < elements.length; i++) {

    const element = elements[i]

    if (typeof (indicator_ids[i]) === "number" || indicator_ids[i].manual_toggle_values) {

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicator_ids[i]}`

      let newElement = JSON.parse(JSON.stringify(element))

      const isToggleChart = Array.isArray(newElement[0].values[0])

      if (isToggleChart) {

        newElement = newElement.map((item) => {

          item.values = isNumber ? item.values[0] : item.values[1]
          return item
        })
      }

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors}>
        <div className='heading_wrapper'>
          <div className="heading_stack">

            {chartTitles.top_main ?
              <p className="top_main">{chartTitles.top_main[i]}</p> :
              ""}
            <div className='heading'>{chartTitles.main[i]}</div>

            {chartTitles.sub_main ?
              <p className="sub_main">{chartTitles.sub_main[i]}</p> :
              ""}

          </div>

          {
            isToggleChart ?
              <div className="button_group">

                <button className={isNumber ? "number" : "number deselect"} onClick={() => { toggle(true) }}>Number</button>
                <button className={isNumber ? "percent" : "percent select"} onClick={() => { toggle(false) }}>Percent</button>
                <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
              </div>
             
              :
             
                <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
           
          }




        </div>
        {chartTitles.hasOwnProperty("source") && <p className="source_title"> <span className="source_pre">Source: </span>{chartTitles.source[i]}</p>}
        <div className="chart">
          <Chart graphData={newElement} title={(dropdownName === "Household Income" && !isNumber) ? "Percent of Households" : chartTitles.yAxes[i]}
            dropdownName={dropdownName} stacked={false} chartIndex={i} genericIndex={genericIndex} />
        </div>
      </div>
      )
    } else if (Array.isArray(indicator_ids[i]) &&
      (indicator_ids[i][0].toggle_calculation || indicator_ids[i][0].single_city_select
        || indicator_ids[i][0].barchart_by_year)) {

      const isSingleEndpoint = indicator_ids[i][0].toggle_calculation ? true : false

      const isBarChartByYear = indicator_ids[i][0].barchart_by_year ? true : false

      const indicatorNumber = hhiDropdownNames(indicator_ids[0])[selectedDropDownChart]
        .endpoints[isSingleEndpoint ?
          0 :
          (isNumber ? 1 : 0)]

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${indicatorNumber}`

      const isStacked = ((dropdownName === "Public Transport Spend") && (genericIndex === 1))

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors}>

        <div className='heading_wrapper'>

          {dropdownChartTitle(indicator_ids, hhiDropdownNames, selectedDropDownChart,
            genericIndex, dropdownName, isNumber)}

          <div className="button_group">

            {isStacked ?
              ""
              : <>
                <button className={isNumber ? "number" : "number deselect"} onClick={() => { toggle(true) }}>Number</button>
                <button className={isNumber ? "percent" : "percent select"} onClick={() => { toggle(false) }}>Percent</button>
              </>}

            {
              isBarChartByYear ?
                ""
                : <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
            }

          </div>
        </div>

        {getSourceTitle(genericIndex, dropdownName)}
        <div className="chart">
          <Chart graphData={isNumber ? JSON.parse(JSON.stringify(chartGroup[0][0][0])) : JSON.parse(JSON.stringify(chartGroup[0][0][1]))}
            title={getYAxisTitle(isNumber, genericIndex, dropdownName)}
            dropdownName={dropdownName} stacked={isStacked} chartIndex={i} genericIndex={genericIndex} />
        </div>
      </div>
      )
    } else if (Array.isArray(indicator_ids[i]) && indicator_ids[i][0].text_only) {


      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper text_box'>
          <div className='heading'>Municipal Post Breakdown: Indicators</div>
        </div>
        <div className="text text_only">
          <div className="headings">
            <p className="code">CODE</p>
            <p className="name">NAME</p>
          </div>

          {
            indicator_ids[i][0].number.name.map( (codeName, codeIndex) => {

              return<>
              <div className="content">
  
                <p className="code">{indicator_ids[i][0].number.code[codeIndex]}</p>
                <p className="name">{codeName}</p>
                
              </div>
              <a className="view_codebook" href={"/scoda/toolkit#/codebook-explorer/" + indicator_ids[i][0].endpoints[codeIndex]} target='_blank'>View Indicator in data explorer</a>
            </>
            })
          }
          
        </div>
      </div>)
    }
    else if (Array.isArray(indicator_ids[i])) {

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].endpoints[isNumber ? 1 : 0]}`

      items.push(<div className='chart_wrapper' key={i.toString()} onClick={clearAllErrors}>
        <div className='heading_wrapper'>

          {dropdownChartTitle(indicator_ids, hhiDropdownNames, selectedDropDownChart,
            genericIndex, dropdownName, isNumber)}

          <div className="button_group">

            <button className={isNumber ? "number" : "number deselect"} onClick={() => { toggle(true) }}>Number</button>
            <button className={isNumber ? "percent" : "percent select"} onClick={() => { toggle(false) }}>Percent</button>
            <a className='link' href={codebookUrl} target='_blank' >Raw Data</a>
          </div>
        </div>

        {getSourceTitle(genericIndex, dropdownName)}
        <div className="chart">
          <Chart graphData={isNumber ? JSON.parse(JSON.stringify(chartGroup[0][0][0])) : JSON.parse(JSON.stringify(chartGroup[0][0][0]))}
            title={getYAxisTitle(isNumber, genericIndex, dropdownName)}
            dropdownName={dropdownName} stacked={false} chartIndex={i} genericIndex={genericIndex} />
        </div>
      </div>
      )
    }
    else if (typeof (indicator_ids[i]) === "string" &&
      (indicator_ids[i].charAt(0) === "n" || indicator_ids[i] === "single year combination chart")) {

      items.push(<div className='chart_wrapper' key={indicator_ids[i].toString()} onClick={clearAllErrors} >
        <div className='heading_wrapper'>
          <div className='heading'>{chartTitles.main[i]}</div>
          <a className='link' onClick={() => {
            setErrorState(i)
          }} style={{ opacity: "0.4" }}>Raw Data</a>
        </div>
        {chartTitles.hasOwnProperty("source") && <p className="source_title"> <span className="source_pre">Source: </span>{chartTitles.source[i]}</p>}
        <div className="chart">
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName}
            stacked={false} chartIndex={i} genericIndex={genericIndex} />
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
          <Chart graphData={element} title={chartTitles.yAxes[i]} dropdownName={dropdownName}
            stacked={true} genericIndex={genericIndex} />
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
      const isSingleEndpoint = indicator_ids[0][0].toggle_calculation ? true : false
      const codebookUrlForText = isArrayOfIndicatorCodes(indicator_ids, selectedDropDownChart) ?
        hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].endpoints.map((endpoint) => {
          return `/scoda/toolkit#/codebook-explorer/${endpoint}`
        })
        : `/scoda/toolkit#/codebook-explorer/${hhiDropdownNames(indicator_ids[0])[selectedDropDownChart]
          .endpoints[isSingleEndpoint ?
          0 :
          isNumber ? 1 : 0]}`

      items.push(<div className='chart_wrapper' key={i.toString()} >
        <div className='heading_wrapper text_box'>
          <div className='heading'>Selected Indicator</div>
        </div>
        <div className="text">
          <div className="headings">
            <p className="code">CODE</p>
            <p className="name">NAME</p>
          </div>{isArrayOfIndicatorCodes(indicator_ids, selectedDropDownChart) ?
            <>
              {
                hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].numberCode
                  .map((code, codeIndex) => {

                    return <>
                      <div className="content">
                        <p className="code">{isNumber ? code : hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].percentCode[codeIndex]}</p>
                        <p className="name">{isNumber ? hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].numberName[codeIndex] : hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].percentName[codeIndex]}</p>
                      </div>
                      <a className="view_codebook" href={codebookUrlForText[codeIndex]} target='_blank'>View Indicator in data explorer</a>
                    </>
                  })
              }
            </>
            : <>
              <div className="content">
                <p className="code">{isNumber ? hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].numberCode : hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].percentCode}</p>
                <p className="name">{isNumber ? hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].numberName : hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].percentName}</p>
              </div>
              <a className="view_codebook" href={codebookUrlForText} target='_blank'>View Indicator in data explorer</a>
            </>
          }

        </div>
      </div>)
    }
  }

  return items
}
