import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';

import $, { data } from 'jquery';

import axios from 'axios';


import DemographicModellerDataBox from '../components/DemographicModeller.Data.Box';
import DemographicModellerDataBoxMapFilter from '../components/DemographicModeller.Data.Box.Small.MapFilter';
import DemographicModellerDataBoxSmallChart from '../components/DemographicModeller.Data.Box.Small.Charts';

export default class DemographicModellerDataCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataset:[],
            years: [1,'1996'],
            cities:[1,'Johannesburg'],
            wards:[1,'Ward 1'],
            table:[],
            geometries:[],
            max:1,
            region:1
        }

        this.loadData = this.loadData.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
    }

    async componentDidMount() {
       await this.loadData();
    }

    async loadData() {
       let result = await axios.get('/api/demographics').catch(error => {
          this.hideLoader();
          this.setState({modal:true, toggle:true});
        });

       try
       {
          if(result) {
              this.setState({ dataset:result.data});
              this.setState({ years: result.data.form_year});
              this.setState({ cities: result.data.form_city});
              this.setState({ wards: result.data.form_ward});
              this.setState({ table: result.data.table1});
              this.setState({ max: result.data.max1});
              this.setState({ region: result.data.region1});
              this.setState({ geometries: result.data.geometries1});
            }
            else {
              this.setState({ dataset:[]});
              this.setState({ years: [1,'1996']});
              this.setState({ cities: [1,'Johannesburg']});
              this.setState({ wards: [1,'Ward 1']});
              this.setState({ table: []});
              this.setState({ max: 1});
              this.setState({ region: 1});
              this.setState({ geometries: []});
            }
       }
       catch(error) {
         //For now we just swallow any errors. Any data errors get handled above in axios call.
         this.hideLoader();
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

  showLoader() {
    this.setState({loader:true});
  }
  
  hideLoader() {
    this.setState({loader:false});
  }


    render() {

       let modalCloseIcon = <i className="modal-close fa fa-times" aria-hidden="true" onClick={this.toggleModal}></i>;

        return (
            <div className="mt-4 ml-5 pr-5">
                <div className="row">
                    <div className="col-12">
                        <div className="ie-content-card">
                            <div className="col mt-3 ml-3 mr-3">
                                <div className="row mt-4">
                                    <div className="col-4 mt-4">
                                        <DemographicModellerDataBoxMapFilter 
                                         yearOptions={this.state.years}
                                         cityOptions={this.state.cities}
                                         wardOptions={this.state.wards}
                                        />
                                        {/*<DemographicModellerDataBoxSmallChart 
                                            title="Time Series"
                                            data={this.state.timeData}
                                        />*/}
                                    </div>
                                    <div className="col mt-4">
                                    {/*<DemographicModellerDataBox 
                                            resultTitle="Geographic Representation"
                                            results={this.state.mapData}
                                            zoom={this.state.zoom}
                                            center={this.state.center}
                                            resultType="map"
                                    />*/}
                                    
                                    </div>
                                </div>   
                                <div className="row mt-4"></div>                    
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