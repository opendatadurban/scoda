import React, { Component } from "react";
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
                  <p>
                    Our data management system forms the framework for
                    evidence-based learnings. This powerful tool allows users to
                    process complex raw data in an understandable way. By
                    building understanding, users are now able to prove or
                    disprove analyses and insights based on empirical data which
                    can then be verified and tested in the real world with our
                    city partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container">
          <div className="container ">
            <div className="">
              <div className="row cta-info">
                
                
                    <div className="col-md-6">
                      <div className="cta-image cta-image-computer"></div>
                      <a target="_blank"  href="https://scoda.co.za/dataset">
                       <button className="btn cta-field-description-list-detailed-btn">Data Management System</button>
                      </a>
                    </div>

                  <div class=" col-md-6 jumbotron cta-field-description-list-detailed">
                      <h5>Data Management System</h5>
                      <p>
                        {" Central to activities on this platform is the\n Data Management System, where our\n evidence base is securely housed. We use\n the CKAN data portal framework, the same\n system used by various governments\n around the world, to store, manage, and \nshare data across the SCODA ecosystem.\n From this dynamic, version-controlled and\n API-responsive data-store, we can\n efficiently gather and process the myriad\n sources required for insight  generation."}
                      </p>
                    </div>
                
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
