import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

import $ from 'jquery';

import axios from 'axios';

import IndicatorExplorerDataCardHeader from '../components/IndicatorExplorer.Data.Card.Header';
import IndicatorExplorerDataBox from '../components/IndicatorExplorer.Data.Box';
import IndicatorExplorerDataBoxChartFilter from '../components/IndicatorExplorer.Data.Box.Small.ChartFilter';
import IndicatorExplorerDataBoxMapFilter from '../components/IndicatorExplorer.Data.Box.Small.MapFilter';
import { AElement } from 'canvg';

export default class IndicatorExplorerDataCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicators:[],
            dataset:[],
            table:[],
            selectedYear:'2010',
            mapFilter:'NA',
            display:false,
            modal: false
        }

        this.filterIndicatorData = this.filterIndicatorData.bind(this);
        this.toggleComponentDisplay = this.toggleComponentDisplay.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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

    toggleModal() {
        if(!this.state.modal) {
            this.setState({modal:true});
        }
        else {
            this.setState({modal:false});
        }
    }


    loadIndicators() {
        axios.get('/api/indicators-list').then(res => {
            this.setState({ indicators:res.data });
        });
    }

    async filterIndicatorData(indicatorId) {

        let resultSet = await axios.get(`/api/explore?indicator_id=${indicatorId}`).catch(error => {
            this.setState({modal:true, toggle:true});
        });

        try
        {
                if(resultSet !== null) {
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
        catch(error) {
          //For now we just swallow any errors. Any data errors get handled above in axios call.
        }
    }

    setMapFilter(optionId) {
        this.setState({mapFilter:optionId});
    }

    render() {
        let modalCloseIcon = <i className="modal-close fa fa-times" aria-hidden="true" onClick={this.toggleModal}></i>;

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
                
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} modalClassName="fade">
                <ModalHeader toggle={this.toggleModal} modalClassName="modal-header" close={modalCloseIcon}><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;Server Error</ModalHeader>
                    <ModalBody className="modal-body">
                        <br/>
                        There is currently no data available for the selected indicator!<br/><br/>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}