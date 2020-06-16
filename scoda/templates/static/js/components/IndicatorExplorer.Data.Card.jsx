import React, { Component } from 'react';
import $ from 'jquery';

import axios from 'axios';

import IndicatorExplorerDataCardHeader from '../components/IndicatorExplorer.Data.Card.Header';
import IndicatorExplorerDataBox from '../components/IndicatorExplorer.Data.Box';
import IndicatorExplorerDataBoxChartFilter from '../components/IndicatorExplorer.Data.Box.Small.ChartFilter';
import IndicatorExplorerDataBoxMapFilter from '../components/IndicatorExplorer.Data.Box.Small.MapFilter';


export default class IndicatorExplorerDataCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicators:[],
            dataset:[],
            table:[],
            selectedYear:'2010',
            mapFilter:'NA',
            display:false
        }

        this.filterIndicatorData = this.filterIndicatorData.bind(this);
        this.toggleComponentDisplay = this.toggleComponentDisplay.bind(this);
        this.setMapFilter = this.setMapFilter.bind(this);
    }

    componentDidMount() {
       this.init();

       this.loadIndicators();
    }

    init() {
        this.toggleComponentDisplay(false);
    }

    toggleComponentDisplay(show) {
        if(show) {
            document.getElementById('explorer-details').style.display='block';
        }
        else {
            document.getElementById('explorer-details').style.display='none'; 
        }
    }

    loadIndicators() {
        axios.get('/api/indicators-list').then(res => {
            this.setState({ indicators:res.data });
        });
    }

    async filterIndicatorData(indicatorId) {
        let resultSet = await axios.get(`/api/explore?indicator_id=${indicatorId}`);

        if(resultSet !== null) {
            console.log(resultSet.data.year);

            this.setState({mapFilter: 'NA'});
            this.setState({selectedYear: resultSet.data.year});
            this.setState({dataset: resultSet.data});
            this.setState({table: resultSet.data.table});

            this.toggleComponentDisplay(true);
        }
        else {
                this.setState({mapFilter: 'NA'});
                this.setState({selectedYear:'2010'})
                this.setState({dataset:[]});
                this.setState({table: []});

                this.toggleComponentDisplay(false);
        }
    }

    setMapFilter(optionId) {
        this.setState({mapFilter:optionId});
    }

    render() {
        return (
            <div className="mt-4 ml-5 pr-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="ie-content-card">
                            <div className="ie-content-card-header">
                              <div className="row">
                                  <div className="col-sm-12">
                                      <IndicatorExplorerDataCardHeader
                                        datasetOptions={this.state.indicators}
                                        filterHook={this.filterIndicatorData}
                                        toggle = {this.toggleComponentDisplay}
                                        filterYear={this.state.selectedYear}
                                      />
                                  </div>
                              </div>
                            </div>
                            <div id="explorer-details" className="col-sx-4 col-md-12 col-sm-4 mt-3">
                                <div className="row">
                                <IndicatorExplorerDataBox 
                                            resultTitle="Selected Data"
                                            results={this.state.dataset}
                                            resultType="table"
                                            filterYear={this.state.selectedYear}
                                    />
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sx-12 col-md-3">
                                       <IndicatorExplorerDataBoxChartFilter 
                                         results={this.state.dataset}
                                         filterYear={this.state.selectedYear}
                                        />
                                        
                                    </div>
                                    <div className="col-sx-12 col-md-9">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Plotting Window"
                                            results={this.state.dataset}
                                            resultType="chart"
                                            filterYear={this.state.selectedYear}
                                    />
                                    </div>
                                </div>   
                                <div className="row mt-4">
                                    <div className="col-sx-12 col-md-3">
                                      <IndicatorExplorerDataBoxMapFilter 
                                      results={this.state.dataset}
                                      filterYear={this.state.selectedYear}
                                      changeHook={this.setMapFilter}
                                      />
                                    </div>
                                    <div className="col-sx-12 col-md-9">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Geographic Representation"
                                            results={this.state.dataset}
                                            resultType="map"
                                            filterYear={this.state.selectedYear}
                                            filter={this.state.mapFilter}
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