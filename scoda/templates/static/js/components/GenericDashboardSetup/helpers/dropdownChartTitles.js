import React from "react"
export const dropdownChartTitle = (indicator_ids,hhiDropdownNames, selectedDropDownChart,
    secondaryChartIndex,dropname,isNumber) => {
    let title = <p className="title">Main Source of Income:<span className="category">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName}</span></p> 

    if(secondaryChartIndex === 0 && dropname === "Sustainability"){
        title = <p className="title">{isNumber?"Number":"Proportion"} of households whose main source of energy/fuel is: <span className="category">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName}</span></p> 
    }
    if(secondaryChartIndex === 1 && dropname === "Sustainability"){
        title = <p className="title">{isNumber?"Number":"Proportion"} of households who experience: <span className="category">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName}</span></p> 
    }

    if(dropname === "Education"){
        title = <p className="title">School Level: <span className="category">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName}</span></p> 
    }

    return title
}

export const getYAxisTitle = (isNumber, genericIndex,dropname) => {
    let yAxisTitles =  isNumber ? "Population" : "Percentage of Population"

    if(genericIndex === 0 && dropname === "Sustainability"){
        yAxisTitles = isNumber ? "Number of Households": "Percentage of Households"
    }
    if(genericIndex === 1 && dropname === "Sustainability"){
        yAxisTitles = isNumber ? "Number of Households": "Percentage of Households"
    }

    return yAxisTitles
}

export const getSourceTitle= (genericIndex,dropname) => {
    let source = <p className={"dropdown_chart_source"}>Source: Calculated from Stats SA General Household Survey</p>

    return source
}