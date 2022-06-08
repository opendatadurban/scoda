import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from '../Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import Barchart from '../Barchart'
import Piechart from '../PieChart'
import axios from 'axios'
import _ from 'lodash';
import Table from './Table';


const style = {
  control: (base) => ({
    ...base,
    border: '1px solid #4A4A4A',
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
    }
  })
};

const CitizenEngagmentes = ({
  select_values,
  total_posts,
  municipal_posts,
  cities,
  onChange,
  senior_management
 }) => {

  return (
    <div >
      { total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1?
        <Modal id="loader" isOpen={total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1} className="modal-dialog-centered loader">
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
        : ''
      }
      <div className='container-fluid charts_dashboards'>
        <div className='charts_dashboards--left_container p-0'>
          <div className='charts_dashboards--select'>
            <div className='charts_dashboards--select-container'>
              <Select
                id='multiple'
                name="filters"
                placeholder="Filter City"
                value={select_values}
                options={cities}
                onChange={onChange}
                isMulti={true}
                styles={style}
              />
            </div>
          </div>
          <div className='charts_dashboards--barcharts'>
            <div className='row'>
              <div className='col-md-12 left-container'>
                <div className='row'>
                 <div className='col-12 col-md-6'>
                <div className='charts'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Total number of municipal posts</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/970' target='_blank' /></div>
                  </div>
                  {total_posts ? 
                  <Barchart stepSize={5000} hundred={true} divide={1000} x_label="Number of Posts"
                    data={{
                      labels: _.map(select_values, 'label'),
                      datasets: total_posts.map(data => {
                        return ({
                          backgroundColor: data.color,
                          borderColor: data.color,
                          data: data.values,
                          label: data.year,
                          stack: data.year
                        })
                      })
                    }}
                  />:""
                  }
                  </div>
                </div>
                <div className='col-md-6'>
                <div className='charts '>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Municipal Management Vacancies</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/968' target='_blank' /></div>
                  </div>
                  <Barchart data={{
                    labels: _.map(select_values, 'label'),
                    datasets: municipal_posts.map(data => {
                      return ({
                        backgroundColor: data.color,
                        borderColor: data.color,
                        data: data.values,
                        label: data.year,
                        stack: data.year
                      })
                    })
                  }} stepSize={2} hundred={false} divide={1} x_label="Number of Vacancies" />
                </div>
                </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <Table/>
                  </div>
                      <div className='col-12 col-md-6'>
                      <div className='charts'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Number of Senior Management Vacancies</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/scoda/toolkit#/codebook-explorer/969' target='_blank' /></div>
                  </div>
                  <Barchart data={{
                    labels: _.map(select_values, 'label'),
                    datasets: senior_management.map(data => {
                      return ({
                        backgroundColor: data.color,
                        borderColor: data.color,
                        data: data.values,
                        label: data.year,
                        stack: data.year
                      })
                    })
                  }} stepSize={2} hundred={false} divide={1} x_label="Number of Vacancies" />
                </div>
                      </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  )
}
export default CitizenEngagmentes;