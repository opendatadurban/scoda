import React, { useState } from 'react'
import {
  phAddItem, phRemoveItem, phClearAll,
  eAddItem, eRemoveItem, eClearAll,
  dAddItem, dClearAll, dRemoveItem,
  hiAddItem,hiRemoveItem,hiClearAll
} from './helpers/citySelect';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';
import { MiniSelect } from './Organisms/MiniSelect';

export const ChartGrid = ({ indicator_ids,
  chartGroup,
  setChartGroup,
  originalValues,
  dropdownName,
  secondDropDown,
  selectedName,
  setSelectedName,
  toggle,
  isNumber,
  selectedDropDownChart,
}) => {

  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])

  const hhiStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const selectControls = dropdownName === "People and Households" ? {
    removeItem: phRemoveItem,
    addItem: phAddItem,
    clearAll: phClearAll,
  } : dropdownName === "Employment" ? {
    removeItem: eRemoveItem,
    addItem: eAddItem,
    clearAll: eClearAll,
  } : dropdownName === "Dwellings" ? {
    removeItem: dRemoveItem,
    addItem: dAddItem,
    clearAll: dClearAll,
  } :dropdownName === "Household Income" ? {
    removeItem: hiRemoveItem,
    addItem: hiAddItem,
    clearAll: hiClearAll,
  } : {

  }

  const hhiDash = dropdownName === "Household Income"
  console.log(isNumber,"isnUmber")

  return (
    <div className='chart_grid'>
      {
        <div className='rounded_container'>
          <div className="select_wrapper" style={hhiDash ? hhiStyles : {}}>
            <Select
              chartData={chartGroup}
              originalValues={originalValues}
              selected={selected}
              options={options}
              setChartGroup={setChartGroup}
              setOptions={setOptions}
              setSelected={setSelected}
              removeItem={selectControls.removeItem}
              addItem={selectControls.addItem}
              clearAll={selectControls.clearAll}
              chartDropName={dropdownName}
            />
            {
              dropdownName === "Household Income" ? <MiniSelect names={secondDropDown} selected={selectedName} setSelected={setSelectedName} textSelect={true} /> : ""
            }
          </div>

          <div className={(dropdownName === "People and Households") || (dropdownName === "Dwellings") ? "grid-container" :
            (dropdownName === "Household Income") ? "grid-2-text" : "grid-container-4"}>
            {
              <ChartWrapper
                chartGroup={chartGroup}
                indicator_ids={indicator_ids}
                dropdownName={dropdownName}
                toggle={toggle}
                isNumber={isNumber}
                selectedDropDownChart={selectedDropDownChart} />
            }
          </div>
        </div>
      }
    </div>
  )
}