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

    render() {

      console.log(this.props.yearOptions);

        const yearOptions = this.props.yearOptions.map((dataset,index) =>(
            <option key={index} value={dataset[0]}>{dataset[1]}</option>
        ));

        const cityOptions = this.props.cityOptions.map((dataset,index) =>(
            <option key={index} value={dataset[0]}>{dataset[1]}</option>
        ));

        const wardOptions = this.props.wardOptions.map((dataset,index) =>(
          <option key={index} value={dataset[0]}>{dataset[1]}</option>
      ));

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
                                <select id="ward-selector" className="pl-3 mt-2 mr-2 dm-dropdown-small">
                                  {wardOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}