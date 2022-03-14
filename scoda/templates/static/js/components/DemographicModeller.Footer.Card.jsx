import React, { Component } from 'react';

export default class DemographicModellerFooterCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="mt-1 ">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="ie-content-card ie-content-card-footer">
                            <div className="col">
                                <div className="row">
                                    {/* <div className="col-md-6">
                                        <div className="dm-footer-button-green">
                                          View Nightlights Explorer
                                        </div>
                                    </div> */}
                                    <div className="col-md-12">
                                        <a className="dm-footer-button-white " href={this.props.report} target='_blank'>
                                         Download Methodology
                                        </a>
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