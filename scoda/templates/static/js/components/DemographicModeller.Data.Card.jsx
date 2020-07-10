import React, { Component } from 'react';

import DemographicModellerDataBox from '../components/DemographicModeller.Data.Box';
import DemographicModellerDataBoxMapFilter from '../components/DemographicModeller.Data.Box.Small.MapFilter';
import DemographicModellerDataBoxSmallChart from '../components/DemographicModeller.Data.Box.Small.Charts';

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
      city: 'Cape Town', lat: '-33.92584', long: '18.42322',count:5
    },
    {
      city: 'Pretoria', long: '25.74486',lat:'-28.18783',count:1
    },
    {
      city: 'Pietermaritzburg', long: '29.61679' , lat: '-30.39278', count:1
    }
];

const _timeData = [
    {
      name: 'Page A', uv: 4000,
    },
    {
      name: 'Page B', uv: 3000,
    },
    {
      name: 'Page C', uv: 2000,
    },
    {
      name: 'Page D', uv: 2780, 
    },
    {
      name: 'Page E', uv: 1890,
    },
    {
      name: 'Page F', uv: 2390,
    },
    {
      name: 'Page G', uv: 3490,
    },
  ];

export default class DemographicModellerDataCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeData: _timeData,
            mapData: _mapData,
            zoom:3,
            center:[25,-29.8]
        }

        this.setTimeData = this.setTimeData.bind(this);
    }

    setTimeData(data,map,zoom,center) {
        this.setState({timeData:data});
        this.setState({mapData:map});
        this.setState({zoom:zoom});
        this.setState({center:center});
    }

    getTimeData() {
        return this.state.timeData;
    }

    render() {

        return (
            <div className="demographic-card">
                <div className="row">
                    <div className="col-12">
                        <div className="ie-content-card">
                            <div className="col ">
                                <div className="row">
                                    <div className="col-md-4">
                                        <DemographicModellerDataBoxMapFilter 
                                         yearOptions={_yearDataSet}
                                         cityOptions={_cityDataSet}
                                         setTimeData={this.setTimeData}
                                        />
                                        <DemographicModellerDataBoxSmallChart 
                                            title="Time Series"
                                            data={this.state.timeData}
                                        />
                                    </div>
                                    <div className="col">
                                    <DemographicModellerDataBox 
                                            resultTitle="Geographic Representation"
                                            results={this.state.mapData}
                                            zoom={this.state.zoom}
                                            center={this.state.center}
                                            resultType="map"
                                    />
                                    
                                    </div>
                                </div>                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}