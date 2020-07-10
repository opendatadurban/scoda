import React, { Component } from 'react';

export default class DemographicModellerFooterCard extends Component {
    constructor(props) {
        super(props);

        this.downloadEvent = this.downloadEvent.bind(this);
    }

    downloadEvent() {
        this.props.downloadEvent();
    }

    render() {

        return (
            <div className="mt-1 ">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="ie-content-card">
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="dm-footer-button-green">
                                          View Nightlights Explorer
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dm-footer-button-white ">
                                         Download Methodology
                                        </div>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}