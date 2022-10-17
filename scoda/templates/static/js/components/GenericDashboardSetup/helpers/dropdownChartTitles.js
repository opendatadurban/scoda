import React from "react"
export const dropdownChartTitle = (indicator_ids,hhiDropdownNames, selectedDropDownChart) => {
    let title = <p className="title">Main Source of Income:<span className="category">{hhiDropdownNames(indicator_ids[0])[selectedDropDownChart].shortName}</span></p> 

    return title
}