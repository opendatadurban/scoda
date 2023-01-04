import React from "react"
export const dropdownChartTitle = (indicator_ids, hhiDropdownNames, selectedDropDownChart,
    genericIndex, dropname, isNumber) => {

    if (genericIndex === 0 && dropname === "Sustainability") {

        return <p className="title">{isNumber ? "Number" : "Proportion"} of households whose main source of energy/fuel is:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span>
        </p>
    }
    else if (genericIndex === 1 && dropname === "Sustainability") {

        return <p className="title">{isNumber ? "Number" : "Proportion"} of households who experience:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span>
        </p>
    }
    else if (dropname === "Education") {

        return <p className="title">Schooling Level
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span></p>
    } else if (dropname === "Travel Time" && genericIndex === 0) {

        return <p className="title">Number of individuals that take:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span></p>
    } else if (dropname === "Travel Time" && genericIndex === 1) {

        return <p className="title">Number of individuals travelling to work by:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span></p>
    }  else if (dropname === "Transport Mode") {

        return <p className="title">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].longName}:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span></p>
    } else if (dropname === "Public Transport Spend" && genericIndex === 1) {

        return <p className="title"><span className="category">{"Household Proportional Spending on Public Transport"} </span></p>
    } else {

        return <p className="title">Main Source of Income:
            <span className="category"> {hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName} </span>
        </p>
    }
}

export const getYAxisTitle = (isNumber, genericIndex, dropname) => {
    let yAxisTitles = isNumber ? "Population" : "Percentage of Population"

    if (genericIndex === 0 && dropname === "Sustainability") {
        yAxisTitles = isNumber ? "Number of Households" : "Percentage of Households"
    }
    if (genericIndex === 1 && dropname === "Sustainability") {
        yAxisTitles = isNumber ? "Number of Households" : "Percentage of Households"
    }
    if (dropname === "Travel Time" || dropname === "Transport Mode") {
        yAxisTitles = isNumber ? "Number of People" : "Percentage of People"
    }

    if(dropname === "Public Transport Spend" && genericIndex === 1){
        yAxisTitles = "Percentage of Households"
    }

    return yAxisTitles
}

export const getSourceTitle = (genericIndex, dropname) => {

    let source =
        <p className={"dropdown_chart_source"}>
            <span className="source_pre">Source: </span>
            {dropname === "Travel Time" || dropname === "Transport Mode" ? 
            "StatsSA General Household Survey"
            :"Calculated from Stats SA General Household Survey"}
        </p>

    return source
}