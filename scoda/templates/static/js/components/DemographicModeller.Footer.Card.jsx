import React, { Component } from 'react';

export default class DemographicModellerFooterCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="mt-1 ml-5 pr-5">
                <div className="row">
                    <div className="col-12">
                        <div className="ie-content-card">
                            <div className="col mt-1 ml-3 mr-3">
                                <div className="row mt-3">
                                    <div className="col-4 mt-4">
                                        <div className="dm-footer-button-green">
                                          View Nightlights Explorer
                                        </div>
                                    </div>
                                    <div className="col mt-4 mr-4">
                                        <div className="dm-footer-button-white float-right">
                                         Download Methodology
                                        </div>
                                    </div>
                                </div>   
                                <div className="row mt-4"></div>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}