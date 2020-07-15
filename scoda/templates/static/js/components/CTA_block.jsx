import React, { Component } from 'react';
export default class CTA_block extends Component {
    render() {
        return (
            <div className="cta_block module-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 offset-2">
                            <div className="row info-block">
                                <div className="col-2 icon"></div>
                                <div className="col-10 d-flex align-items-center">
                                    <h2>EVIDENCE TOOLS</h2>
                                </div>
                                <div className="col-md-9 pl-0 mt-3">
                                    <p>Our data management system forms the framework for evidence-based learnings.
                                        This powerful tool allows users to process complex raw data in an understandable way.
                                        By building understanding, users are now able to prove or disprove analyses and insights based on empirical data which can then be verified and tested in the real world with our city partners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container cta-container">
                    <div className="row ">
                        <div className="col-md-10 offset-md-1">
                            <div className="row cta-info">
                                <div className="col-md-6">
                                    <div className="cta-image"></div>
                                    <a href="https://scoda.co.za/dataset" className="btn">See Our Data Management System</a>
                                </div>
                                <div className="col-md-6">
                                    <h5>Data Management System</h5>
                                    <p>Central to activities on this platform is the Data Management System, where our evidence base is securely housed. We use the CKAN data portal framework, the same system used by various governments around the world, to store, manage, and share data across the SCODA ecosystem. From this dynamic, version-controlled and API-responsive data-store, we can efficiently gather and process the myriad sources required for insight generation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}