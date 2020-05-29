import React, { Component } from 'react';

import IndicatorExplorerDataCardHeader from './IndicatorExplorer.Data.Card.Header';
import IndicatorExplorerDataBox from '../components/IndicatorExplorer.Data.Box';
import IndicatorExplorerDataBoxChartFilter from '../components/IndicatorExplorer.Data.Box.Small.ChartFilter';
import IndicatorExplorerDataBoxMapFilter from '../components/IndicatorExplorer.Data.Box.Small.MapFilter';

const _indicatorDataSet = [
    {
        Key: 1,
        Value:'Crime',

    },
    {
        Key:2,
        Value: 'Age'
    },
    {
        Key:3,
        Value: 'Race'
    }

];

const _yearDataSet = [
    {
        Key: 1,
        Value:'2013',

    },
    {
        Key:2,
        Value: '2019'
    },
    {
        Key:3,
        Value: '2020'
    }

];

const _cityDataSet = [
    {
        Key: 1,
        Value:'Pretoria',

    },
    {
        Key:2,
        Value: 'Cape Town'
    },
    {
        Key:3,
        Value: 'Pietermaritzburg'
    }

];

const _selectedData = [
    { 
        City: 'Cape Town', Year: '2013', DataField1: '105', DataField2: '105', DataField3:'105',  DataField4: '105', DataField5:'105'
    },
    { 
        City: 'Pretoria', Year: '2013', DataField1: '105', DataField2: '105', DataField3:'105',  DataField4: '105', DataField5:'105'
    },
    { 
        City: 'Johannesburg', Year: '2013', DataField1: '105', DataField2: '105', DataField3:'105',  DataField4: '105', DataField5:'105'
    }
];

const _plottingWindowData = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];


const _mapData = [
    {
      city: 'Cape Town', lat: '-33.92584', long: '18.42322'
    },
    {
      city: 'Pretoria', long: '25.74486',lat:'-28.18783'
    },
    {
        city: 'Pietermaritzburg', long: '29.61679' , lat: '-30.39278'
    }
];
  

export default class IndicatorExplorerDataCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="mt-4 ml-5 pr-5">
                <div className="row">
                    <div className="col-10">
                        <div className="ie-content-card">
                            <div className="ie-content-card-header">
                              <div className="row">
                                  <div className="col-12">
                                      <IndicatorExplorerDataCardHeader
                                        datasetOptions={_indicatorDataSet}
                                      />
                                  </div>
                              </div>
                            </div>
                            <div className="col mt-3 ml-3 mr-3">
                                <div className="row ml-1">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Selected Data"
                                            results={_selectedData}
                                            resultType="table"
                                    />
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3">
                                        <IndicatorExplorerDataBoxChartFilter 
                                         yearOptions={_yearDataSet}
                                         cityOptions={_cityDataSet}
                                         filters="Johannesburg,Pretoria,Durban,Cape Town"
                                        />
                                    </div>
                                    <div className="col">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Plotting Window"
                                            results={_plottingWindowData}
                                            resultType="chart"
                                    />
                                    </div>
                                </div>   
                                <div className="row mt-4">
                                    <div className="col-3">
                                      <IndicatorExplorerDataBoxMapFilter 
                                      datasetOptions={_indicatorDataSet}
                                      />
                                    </div>
                                    <div className="col">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Geographic Representation"
                                            results={_mapData}
                                            resultType="map"
                                    />
                                    </div>
                                </div>  
                                <div className="row mt-3"></div>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}