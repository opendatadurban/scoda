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
                    Data requires context to provide meaningful analysis. We
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
          <div className="container">
           
              <div className="row cta-info">
               
                 
                    <div className="col-md-6">
                      <div className="cta-image cta-image-analysis-data-explore "></div>
                    </div>
                 
                 
                  <div class="col-md-6 jumbotron cta-field-description-list-detailed">
                      <h5>Data Explorer</h5>

                      <p>
                        The data explorer provides access to the<br/>
                         102 indicators used by the South African Cities<br/>
                          Network in the State of Cities Report.
                      </p>

                      <a  href="/scoda/toolkit#/explorer">
                        <button className="btn cta-field-description-list-detailed-btn">See Our Data Explorer</button>
                      
                      </a>
                    </div>
                  
              
              </div>
            
          </div>
        </div>
        <div className="ml-auto cta-container">
          <div className="container ">
              <div className="row cta-info">
                    <div className="col-md-6">
                      <div className="cta-image cta-image-codebook"></div>
                    </div>
               
                 
                  <div class="col-md-6 jumbotron  cta-field-description-list-detailed">
                      <h5>Codebook</h5>

                      <p>
                       {"The codebook is a live list of common\n city indicators providing definitions,\n methodologies for collection, and data\n availability of comparable city data."}
                      </p>
                      <a  href="/scoda/toolkit#/codebook">
                        <button className="btn cta-field-description-list-detailed-btn cta-field-description-list-detailed-btn-codebook">See Our Codebook</button>
                      
                      </a>
                    </div>
                  
                
              </div>
       
          </div>
        </div>
        <div className="ml-auto cta-container ">
          <div className="container">
   
              <div className="row cta-info">
             
             
                    <div className="col-md-6">
                      <div className="cta-image cta-image-analysis-demo"></div>
                    </div>
                  
                 
                  <div class="col-md-6 jumbotron cta-field-description-list-detailed">
                      <h5>Demographics Modeller</h5>

                      <p>
                      {"With the demographic projection tool\n we provide both a powerful predictor of\n internal migration within South African\n metros, as well as a framework for the\n development of open, collaborative\n model building that is based on diverse\n and novel data sources."}
                      </p>
                      <a href="/scoda/toolkit#/demographic-modeller">
                        <button className="btn cta-field-description-list-detailed-btn"> See Our Demographics Modeller</button>
                       
                      </a>
                    </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
