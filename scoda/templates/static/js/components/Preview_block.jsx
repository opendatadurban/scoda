import React, { Component } from 'react';
export default class Preview_block extends Component {
    render() {
        return (
            <div className="preview_block module-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 mb-5">
                            <h2>What Products Do We Offer?</h2>
                            <p>South African Cities Network (SACN) are continually developing our range of tools to help cities employees perform their functions more effecively and efficiently.  These tools are built around our core research concepts:</p>
                        </div>
                        <div className="col-md-10 offset-md-1">
                            <div className="row product-evidence mt-5 mb-5 d-flex align-items-center">
                                <div className="col-md-2 icon"></div>
                                <div className="col-md-9">
                                    <h5>EVIDENCE TOOLS</h5>
                                    <p>Data and Information is stored on a trusted and robust <i>Data Management System</i>  that empowers effective analysis and insight.</p>
                                </div>
                            </div>
                            <div className="row product-analysis mt-5 mb-5 d-flex align-items-center">
                                <div className="col-md-2 icon"></div>
                                <div className="col-md-9">
                                    <h5>ANALYSIS TOOLS</h5>
                                    <p>Analytics tools like the <i>Data Explorer, City Dashboards, and Migration Model</i> allow for deeper analysis and insight into complex issues.</p>
                                </div>
                            </div>
                            <div className="row product-insight mt-5 mb-5 d-flex align-items-center">
                                <div className="col-md-2 icon"></div>
                                <div className="col-md-9">
                                    <h5>INSIGHT TOOLS</h5>
                                    <p><i>Data Stories</i> turn raw data and analysis into narratives through sharing complex information in a succinct and visual manner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}