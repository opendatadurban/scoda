import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Chart } from './Chart';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';
import Stat_Panel from './Organisms/Human.Resources.Stat.Panel';
import { handleSelectChange } from './helpers/helpers';
import Select from "react-select";
import makeAnimated from "react-select/animated"
import Button from '../Button'

import '../../../../../static/scss/components/ChartHeader.scss'

const style = {
  control: (base) => ({
    ...base,
    width:'60%',
    border: '1px solid #4A4A4A',
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
    }
  })
};

export const Charts = ({ minYear, maxYear, indicator_ids, yearColors }) => {

  const [loaded,isLoaded] = useState(false)

  const [chartGroup, setChartGroup] = useState(null)
  const [labelGroup, setLabelGroup] = useState(null)

  const [last_municipal_posts, setLastMunicipalPost] = useState({})
  const [last_total_posts, setLastTotalPosts] = useState({})
  const [last_senior_management_posts, setLastSeniorManagementPost] = useState({})

  const [selectedValues, setSelectValues] = useState({label:"chai",value:'chai'})
  const [cities, setCities] = useState([{label:"coco",value:'vanilla'},{label:"chai",value:'chai'},{label:"pepsi",value:'pepsi'}])


  useEffect(() => {
      populateChartGroup(
        setChartGroup, setLabelGroup,
        indicator_ids, // this array determines the number of charts generated on your grid
        minYear,maxYear, //year min max
        yearColors, //color presets
        isLoaded// check the grid datahas arrived sychronously
      )
  }, [minYear, maxYear, indicator_ids, yearColors])


  const animatedComponents = makeAnimated()

  const chartGridData = () => {

    let items = []
    
    for (let i = 0; i < chartGroup.length; i++) {

      const element = chartGroup[i]

/**
 * Todo : extract indicator id from element
 */
      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${element[0].indicator_id}`

      items.push(<div className='chart-wrapper' key={i.toString()} >
        <div className='heading_wrapper'>
          <h1 className='heading'>National Election: Voter Turnout</h1>
          <Button className='btn' text='Raw Data' href={codebookUrl} target='_blank' />
        </div>
        <div className="chart-wrapper" style={{ padding: '30px' }}>
          <Chart graphData={element} labels={labelGroup}  />
        </div>
      </div>
      )
    }

    return items
  }

console.log(loaded,"new")
  return (
    <div>
      {chartGroup !== null ?
        <>
        {
          //TODO: Implement Api into stats panel + styling
        }
          <Stat_Panel
            last_municipal_posts={last_municipal_posts}
            last_total_posts={last_total_posts}
            last_senior_management_posts={last_senior_management_posts}
          />

          <Select
            id='multiple'
            name="filters"
            placeholder="Filter City"
            defaultValue={cities}
            options={cities}
            onChange={handleSelectChange}
            isMulti={true}
            styles={style}
            components={ animatedComponents }
          />

          <div className="grid-container" style={chartGridStyles}>

            {
            chartGridData()
            }
          </div>
        </>

        :
        <Modal id="loader" isOpen={true} className="modal-dialog-centered loader">
          <ModalBody>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-0 ml-3 pt-4">
                <Spinner type="grow" color="secondary" size="sm" />
                <Spinner type="grow" color="success" size="sm" />
                <Spinner type="grow" color="danger" size="sm" />
                <Spinner type="grow" color="warning" size="sm" />
              </div>
              <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
            </div>
            <br />
          </ModalBody>
        </Modal>
      }

    </div>
  )
}
