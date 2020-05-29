import React, { Component } from 'react';

import FilterPillSmall from '../components/Filter.Pill.Small';

export default class IndicatorExplorerDataBoxChartFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const yearOptions = this.props.yearOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        const cityOptions = this.props.cityOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        let filterArray = this.props.filters.split(',');

        const pill = filterArray.map((filter,index) =>(
            <div className="col-0 ml-2 p-1"><FilterPillSmall key={filter} filter={filter} /></div>
        ));

        return (
                        <div className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      Select Data
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">Year:</div>
                                <select id="year-selector" className="pl-3 mt-2 mr-2 ie-dropdown-small">
                                  {yearOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col mt-3 ml-2 mr-2 Smt-3 ie-small-border"></div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">City:</div>
                                <select id="city-selector" className="pl-3 mt-2 mr-2 ie-dropdown-small">
                                  {cityOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                            {pill}
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}