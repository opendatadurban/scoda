import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';

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
            modal: false,
            loader:false
        }

        this.filterIndicatorData = this.filterIndicatorData.bind(this);
        this.toggleComponentDisplay = this.toggleComponentDisplay.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.setMapFilter = this.setMapFilter.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
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

    showLoader() {
        this.setState({loader:true});
    }
      
    hideLoader() {
        this.setState({loader:false});
    }

    async filterIndicatorData(indicatorId) {
        this.showLoader();

        let resultSet = await axios.get(`/api/explore?indicator_id=${indicatorId}`).catch(error => {
            this.hideLoader();
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

                validateDocumentReady();
        }
        catch(error) {
          //For now we just swallow any errors. Any data errors get handled above in axios call.
          this.hideLoader();
        }
    }

    validateDocumentReady() {
        var isLoaded = setInterval(validateLoaded,2000);
        
        function validateLoaded() {
            if(document.getElementById('chartPng').value !== '') {
                clearInterval(isLoaded);
                this.hideLoader();
            }
        }
    }

    setMapFilter(optionId) {
        this.setState({mapFilter:optionId});
    }

    render() {
        let modalCloseIcon = <i className="modal-close fa fa-times" aria-hidden="true" onClick={this.toggleModal}></i>;

        return (
            <div className="mt-4 ">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="ie-content-card">
                            <div className="ie-content-card-header">
                              <div className="row">
                                  <div className="col-md-12">
                                      <IndicatorExplorerDataCardHeader
                                        datasetOptions={this.state.indicators}
                                        filterHook={this.filterIndicatorData}
                                        toggle = {this.toggleComponentDisplay}
                                        filterYear={this.state.selectedYear}
                                      />
                                  </div>
                              </div>
                            </div>
                            <div id="explorer-details" className="col-md-12 col-lg-12 col-xl-12 mt-3">
                                <div className="row">
                                <div className="col-md-12 col-lg-12 col-xl-12">
                                <IndicatorExplorerDataBox 
                                            resultTitle="Selected Data"
                                            results={this.state.dataset}
                                            resultType="table"
                                            filterYear={this.state.selectedYear}
                                    />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-3 col-xl-3">
                                       <IndicatorExplorerDataBoxChartFilter 
                                         results={this.state.dataset}
                                         filterYear={this.state.selectedYear}
                                        />
                                        
                                    </div>
                                    <div className="col-md-12 col-lg-9 col-xl-9">
                                    <IndicatorExplorerDataBox 
                                            resultTitle="Plotting Window"
                                            results={this.state.dataset}
                                            resultType="chart"
                                            filterYear={this.state.selectedYear}
                                    />
                                    </div>
                                </div>   
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-3 col-xl-3">
                                      <IndicatorExplorerDataBoxMapFilter 
                                      results={this.state.dataset}
                                      filterYear={this.state.selectedYear}
                                      changeHook={this.setMapFilter}
                                      />
                                    </div>
                                    <div className="col-md-12 col-lg-9 col-xl-9">
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
                
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} modalclassname="fade">
                <ModalHeader toggle={this.toggleModal} modalclassname="modal-header" close={modalCloseIcon}><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;Server Error</ModalHeader>
                    <ModalBody className="modal-body">
                        <br/>
                        There is currently no data available for the selected indicator!<br/><br/>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.loader} className="modal-dialog-centered loader">
                <ModalBody>
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-0 ml-3 pt-4"> 
                      <Spinner type="grow" color="secondary" size="sm"/>
                      <Spinner type="grow" color="success" size="sm"/>
                      <Spinner type="grow" color="danger" size="sm"/>
                      <Spinner type="grow" color="warning" size="sm"/>
                      </div>
                    <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
                  </div>
                  <br/>
                </ModalBody>
               </Modal>

            </div>
        )
    }
}