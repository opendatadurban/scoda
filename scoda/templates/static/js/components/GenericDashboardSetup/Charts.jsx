import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Chart } from './Chart';
import { populateChartGroup } from './data/api';
import { chartGridStyles } from './helpers/styles';
import Stat_Panel from './Human.Resources.Stat.Panel';
import panelData from '../../data/panelData';
import Select from '../Select';
import Button from '../Button'

export const Charts = ({ minYear, maxYear, indicator_ids, yearColors }) => {

  const [chartGroup, setChartGroup] = useState([{}])
  const [labelGroup, setLabelGroup] = useState([{}])

  //stats
  const [last_municipal_posts, setLastMunicipalPost] = useState({})
  const [last_total_posts, setLastTotalPosts] = useState({})
  const [last_senior_management_posts, setLastSeniorManagementPost] = useState({})

  //select
  const [place,setPlace] = useState('Buffalo City')
  const [data,setData] = useState(panelData[0])

  useEffect(() => {

    populateChartGroup(
      setChartGroup, setLabelGroup,
      indicator_ids, minYear,
      maxYear, yearColors
    )

  }, [])

  const places = (e) => {
   
}

  const chartGridData = () => {


    if (chartGroup === [{}]) return

    let items = []

    for (let i = 0; i < chartGroup.length; i++) {

      const element = chartGroup[i]

      const codebookUrl = `/scoda/toolkit#/codebook-explorer/${element.indicator_id}`

      items.push(<div className='chart-wrapper'>
        <div className='row'>
          <div className='col-md-9'><h1 className='charts_dashboards--households'>National Election: Voter Turnout</h1></div>
          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href={codebookUrl} target='_blank' /></div>
        </div>
        <div key={i.toString()} className="chart-wrapper" style={{ padding: '30px' }}>
          <Chart graphData={element} labels={labelGroup} />
        </div>
      </div>
      )

    }

    return items
  }

  return (
    <div>
      {chartGroup ?
        <>
          <Stat_Panel
            last_municipal_posts={last_municipal_posts}
            last_total_posts={last_total_posts}
            last_senior_management_posts={last_senior_management_posts}
          />

          <Select
            value={place}
            placeholder='Select a City'
            id={data.places.id}
            multiple={data.places.multiple}
            data={data.places.data}
            name='gender'
            onChange={places}
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
