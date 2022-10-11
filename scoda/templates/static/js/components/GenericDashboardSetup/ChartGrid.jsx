import React, { useState } from 'react'
import {
  phAddItem, phRemoveItem, phClearAll,
  eAddItem, eRemoveItem, eClearAll,
  dAddItem, dClearAll, dRemoveItem,
  hiAddItem, hiRemoveItem, hiClearAll, leRemoveItem, leAddItem, leClearAll
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
  } : dropdownName === "Life Expectancy & Health" ? {
    removeItem: leRemoveItem,
    addItem: leAddItem,
    clearAll: leClearAll,
  } : dropdownName === "Life Expectancy & Health" ? {
    removeItem: leRemoveItem,
    addItem: leAddItem,
    clearAll: leClearAll,
  } : {}

  const hhiDash = dropdownName === "Household Income"
  const globalCityDropDownClose = useGlobalClose()

  return (
    <div className='chart_grid' onClick={() => { globalCityDropDownClose() }}>
      {
        <div className='rounded_container'>
          <div className={hhiDash ? "select_wrapper double" : "select_wrapper"}>
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
              chartDropName={dropdownName} />
            {
              dropdownName === "Household Income" ? <MiniSelect names={secondDropDown} selected={selectedName}
                setSelectedChart={setSelectedChart} setSelected={setSelectedName} chartDropName={"Household Income"} /> : ""
            }
          </div>

          <div className={gridItems > 4  ? "grid-container" :
            gridItems === 2 ? "grid-2-text" : "grid-container-4"}>
            {
              <ChartWrapper
                chartGroup={chartData}
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