import React, { Component } from 'react';

import DemographicModellerDataChart from '../components/DemographicModeller.Data.Charts';


export default class DemographicModellerDataBoxSmallChart extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
                        <div className="ie-box-card mt-4">
                            <div className="dm-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      {this.props.title}
                                  </div>
                                  <div className="col-0 mt-2 mr-4 float-right">
                                      <div className="ie-button-download">Download</div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                             <DemographicModellerDataChart 
                                  data={this.props.data}
                              />
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}