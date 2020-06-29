import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';

import $, { data } from 'jquery';

import axios from 'axios';


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
            dataset:[],
            years:[],
            cities:[],
            wards:[],
            table:[]
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
          if(result !== null) {
              console.log(result.data);

              this.setState({ dataset:result.data});
              this.setState({ years: result.data.from_year});
              this.setState({ cities: result.data.from_city});
              this.setState({ wards: result.data.from_ward});
              this.setState({ table: result.data.table1});
            }
            else {
              this.setState({ dataset:[]});
              this.setState({ years: [1,'1996']});
              this.setState({ cities: [1,'Johannesburg']});
              this.setState({ wards: [1,'Ward 1']});
              this.setState({ table: []});
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