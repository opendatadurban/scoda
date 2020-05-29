import React, { Component } from 'react';

export default class DemographicModellerDataBoxMapFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCity: 'Pretoria'
        }
    }

    setActiveCity() {
        let city = document.getElementById('city-selector').value;

        this.setState({selectedCity: city});
    }

    setChartData() {
        //To be replaced by proper dataset
        let timeDataSet = [];
        let mapDataSet = [];
        let zoom = 1;
        let center = [25,-29.8];
        let ward = document.getElementById('ward-selector').value;

        switch(ward) {
            case 'Ward 2 - Centurion':
                timeDataSet = [
                    {
                      name: 'Area 1', uv: 400,
                    },
                    {
                      name: 'Area 2', uv: 200,
                    },
                    {
                      name: 'Area 3', uv: 800,
                    }
                  ];

                  mapDataSet = [
                    {
                      city: 'Pta East', long: '25.74486',lat:'-28.18783',count:3
                    },
                    {
                      city: 'Cent', long: '25.850187',lat:'-26.00000',count:2
                    }
                ];

                center = [25,-28];
                zoom = 5;
            break;
            case 'Ward 2 - Paarl':
                timeDataSet = [
                    {
                      name: 'Area A', uv: 10,
                    },
                    {
                      name: 'Area B', uv: 100,
                    },
                    {
                      name: 'Area C', uv: 50,
                    }
                  ];

                  mapDataSet = [
                    {
                      city: 'CPT', lat: '-33.92584', long: '18.42322',count:5
                    },
                    {
                      city: 'PRL', lat: ' -33.715546', long:'21.5000',count:9
                    }
                ];

                center = [20,-33];
                zoom = 5;
            break;
            case 'Ward 2 - North Coast':
                timeDataSet = [
                    {
                      name: 'AA', uv: 350,
                    },
                    {
                      name: 'AB', uv: 1000,
                    },
                    {
                      name: 'AC', uv: 50,
                    }
                  ];

                  mapDataSet = [
                    {
                        city: 'PMB', long: '29.61679' , lat: '-30.39278',count:0
                    },
                    {
                        city: 'DRB', long: '29.883333' , lat: '-31.049999',count:2
                    }
                ];

                center = [29,-31];
                zoom = 5;
            break;
            default:
                timeDataSet = [
                    {
                      name: 'D1', uv: 150,
                    },
                    {
                      name: 'D2', uv: 150,
                    },
                    {
                      name: 'D3', uv: 150,
                    }
                  ];

                  mapDataSet = [
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

                center = [25,-28];
                zoom = 3;
            break;
        }

        this.props.setTimeData(timeDataSet,mapDataSet,zoom,center);
    }

    renderWards() {
        //To be pulled from real dataset based on selected city state
        let wardDataSet = [];

        let selectedCity = this.state.selectedCity;

        switch(selectedCity) {
            case 'Pretoria':
                wardDataSet = [
                    {
                        Key: 1,
                        Value:'Ward 1 - Pretoria East',
                
                    },
                    {
                        Key:2,
                        Value: 'Ward 2 - Centurion'
                    },
                    {
                        Key:3,
                        Value: 'Ward 3 - Midrand'
                    }
                
                ];
            break;
            case 'Cape Town':
                wardDataSet = [
                    {
                        Key: 1,
                        Value:'Ward 1 - City Center',
                
                    },
                    {
                        Key:2,
                        Value: 'Ward 2 - Paarl'
                    },
                    {
                        Key:3,
                        Value: 'Ward 3 - Strand'
                    }
                
                ];
            break;
            case 'Pietermaritzburg':
                wardDataSet = [
                    {
                        Key: 1,
                        Value:'Ward 1 - Durban',
                
                    },
                    {
                        Key:2,
                        Value: 'Ward 2 - North Coast'
                    },
                    {
                        Key:3,
                        Value: 'Ward 3 - Midlands'
                    }
                
                ];
            break;
        }
        
        return wardDataSet.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));
    }

    
    render() {

        const yearOptions = this.props.yearOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        const cityOptions = this.props.cityOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        const wardOptions = this.renderWards();

        return (
                        <div className="ie-box-card">
                            <div className="dm-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      Area Selector
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">Year:</div>
                                <select id="year-selector" className="pl-3 mt-2 mr-2 dm-dropdown-small">
                                  {yearOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col mt-3 ml-2 mr-2 mt-3 ie-small-border dm-line-width"></div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">City:</div>
                                <select id="city-selector" className="pl-3 mt-2 mr-2 dm-dropdown-small" onChange={this.setActiveCity.bind(this)}>
                                  {cityOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col mt-3 ml-2 mr-2 Smt-3 ie-small-border dm-line-width"></div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">Ward:</div>
                                <select id="ward-selector" className="pl-3 mt-2 mr-2 dm-dropdown-small" onChange={this.setChartData.bind(this)}>
                                  {wardOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}