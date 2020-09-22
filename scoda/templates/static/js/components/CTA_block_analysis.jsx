import React, { Component } from "react";
export default class CTA_block extends Component {
  render() {
    return (
      <div className="cta_block cta_block_analysis module-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-2">
              <div className="row info-block">
                <div className="col-2 icon"></div>
                <div className="col-10 d-flex align-items-center">
                  <h2>ANALYSIS TOOLS</h2>
                </div>
                <div className="col-md-9 pl-0 mt-3">
                  <p>
                    Data requires context to provide meanginful analysis. We
                    offer a range of public and city management friendly data
                    analysis tools which feed directly from a central management
                    system to allow overlays of comparable data to help users
                    build contextual analyses which are easy to share with
                    relevant people, groups and organisations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container ">
          <div className="row container ">
            <div className="">
              <div className="row cta-info">
                <ul className="cta-field-description-list">
                  <li>
                    <div className="container">
                      <div className="cta-image cta-image-analysis-dashboard"></div>
                    </div>
                  </li>
                  
                  <li>
                  <div class="cta-field-description-list-detailed">
                    <h5>City Dashboards</h5>
                    <p>
                      The city dashboards provide a visual snapshot of key
                      information surrounding cities in South Africa.
                    </p>
                    </div>
                  </li>
                
                </ul>

                <div className="cta-field-description"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container ">
          <div className="row container  ">
            <div className="">
              <div className="row cta-info">
                <ul className="cta-field-description-list">
                  <li>
                    <div className="container">
                      <div className="cta-image cta-image-analysis-data-explore "></div>
                    </div>
                  </li>
                  <li>
                  <div class="cta-field-description-list-detailed">
                      <h5>Data Explorer</h5>

                      <p>
                        The data explorer provides access to the 102 indicators
                        used by the South African Cities Network in the State of
                        Cities Report.
                      </p>

                      <a  href="/scoda/#/explorer">
                        <button className="btn cta-field-description-list-detailed-btn">See Our Data Explorer</button>
                      
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container">
          <div className="row container ">
            <div className="">
              <div className="row cta-info">
                <ul className="cta-field-description-list">
                  <li>
                    <div className="container">
                      <div className="cta-image cta-image-analysis-constructor"></div>
                    </div>
                  </li>
                  <li>
                  <div class="cta-field-description-list-detailed">
                      <h5>Analysis Constructor</h5>

                      <p>
                        The analysis constructor allows for individual
                        indicators to be combined with one another in a
                        structure-preserving manner. It also allows for the
                        separation of indicators into their various time-series.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container ">
          <div className="row container  ">
            <div className=" ">
              <div className="row cta-info">
                <ul className="cta-field-description-list">
                  <li>
                    <div className="container">
                      <div className="cta-image cta-image-analysis-demo"></div>
                    </div>
                  </li>
                  <li>
                  <div class="cta-field-description-list-detailed">
                      <h5>Demographics Modeller</h5>

                      <p>
                        With the demographic projection tool we provide both a
                        powerful predictor of internal migration within South
                        African metros, as well as a framework for the
                        development of open, collaborative model building that
                        is based on diverse and novel data sources.
                      </p>
                      <a href="/scoda/#/demographic-modeller">
                        <button className="btn cta-field-description-list-detailed-btn"> See Our Demographics Modeller</button>
                       
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
