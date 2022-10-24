import React, { useState } from 'react'
import {
  phAddItem, phRemoveItem, phClearAll,
  eAddItem, eRemoveItem, eClearAll,
  dAddItem, dClearAll, dRemoveItem,
  hiAddItem, hiRemoveItem, hiClearAll,
  leRemoveItem, leAddItem, leClearAll,
  fsAddItem, fsRemoveItem, fsClearAll, edRemoveItem, edAddItem, edClearAll, sustainabilityAddItem, sustainabilityRemoveItem, sustainabilityClearAll
} from './helpers/citySelect';
import { Select } from './Organisms/Select';
import { ChartWrapper } from './Organisms/ChartWrapper';
import { MiniSelect } from './Organisms/MiniSelect';
import { useGlobalClose } from '../../context';

export const ChartGrid = ({ indicator_ids,
  chartGroup,
  setChartGroup,
  originalValues,
  dropdownName,
  gridItems,
  secondDropDown,
  selectedName,
  setSelectedName,
  setSelectedChart,
  selectedDropDownChart,
  genericIndex
}) => {

  const [isNumber, toggle] = useState(true)
  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])

  const chartData = chartGroup

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
  } : dropdownName === "Household Income" ? {
    removeItem: hiRemoveItem,
    addItem: hiAddItem,
    clearAll: hiClearAll,
  } : dropdownName === "Life Expectancy and Health" ? {
    removeItem: leRemoveItem,
    addItem: leAddItem,
    clearAll: leClearAll,
  } : dropdownName === "Food Security, Literacy and Inequality" ? {
    removeItem: fsRemoveItem,
    addItem: fsAddItem,
    clearAll: fsClearAll,
  } : dropdownName === "Education" ? {
    removeItem: edRemoveItem,
    addItem: edAddItem,
    clearAll: edClearAll,
  } : (dropdownName === "Sustainability" && secondDropDown) ? {
    removeItem: hiRemoveItem,
    addItem: hiAddItem,
    clearAll: hiClearAll,
  } : (dropdownName === "Sustainability" && genericIndex === 2) ? {
    removeItem: sustainabilityRemoveItem,
    addItem: sustainabilityAddItem,
    clearAll: sustainabilityClearAll,
  } : (dropdownName === "Sustainability" && genericIndex === 3) ? {
    removeItem: sustainabilityRemoveItem,
    addItem: sustainabilityAddItem,
    clearAll: sustainabilityClearAll,
  } :
    {}
  const isDropDownChart = Array.isArray(indicator_ids[0])
  const globalCityDropDownClose = useGlobalClose()

  const chartWrapperClassNames = gridItems > 4 && (dropdownName !== "Food Security, Literacy and Inequality") ? "grid-container" :
  gridItems > 4 && (dropdownName === "Food Security, Literacy and Inequality") ? "grid-container horizontal_food" :
    gridItems === 4 && (dropdownName === "Life Expectancy and Health") ? "grid-container-4 horizontal" :
    gridItems === 4 && (dropdownName !== "Life Expectancy and Health") ? "grid-container-4" :
    gridItems === 2 && indicator_ids.includes("indicator text box") ? "grid-2-text" :
    gridItems === 2 ? "grid-only-charts-2" : "grid-container-1"

  return (
    <div className='chart_grid' onClick={() => { globalCityDropDownClose() }}>
      {
        <div className='rounded_container'>
          <div className={isDropDownChart ? "select_wrapper double" : "select_wrapper"}>
            <Select chartData={chartGroup}
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
              isDropDownChart={isDropDownChart} />
            {
              isDropDownChart ? <MiniSelect names={secondDropDown} selected={selectedName}
                setSelectedChart={setSelectedChart} setSelected={setSelectedName} isDropDownChart={isDropDownChart} dropdownName={dropdownName} genericIndex={genericIndex} /> : ""
            }
          </div>

          <div className={chartWrapperClassNames}>
            {
              <ChartWrapper
                chartGroup={chartData}
                indicator_ids={indicator_ids}
                dropdownName={dropdownName}
                toggle={toggle}
                isNumber={isNumber}
                selectedDropDownChart={selectedDropDownChart}
                genericIndex={genericIndex} />
            }
          </div>
        </div>
      }
    </div>
  )
}