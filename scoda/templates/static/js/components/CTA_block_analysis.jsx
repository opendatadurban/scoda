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
          <div className="container ">
        
              <div className="row cta-info">


                <div className="col-md-6">
                  <div className="cta-image cta-image-analysis-dashboard"></div>
                </div>
                <div class="col-md-6 jumbotron cta-field-description-list-detailed">
                  <h5>City Dashboards</h5>
                  <p>
                   {" The city dashboards provide a visual\n snapshot of key information surrounding\n cities in South Africa."}
                    </p>

                  <a href="/scoda/#/dashbo">
                    <button className="btn cta-field-description-list-detailed-btn">See Our Dashboards</button>

                  </a>
                </div>

                
              

                <div className="cta-field-description"></div>
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
                        The data explorer provides access to the 102 indicators
                        used by the South African Cities Network in the State of
                        Cities Report.
                      </p>

                      <a  href="/scoda/#/explorer">
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
                      <div className="cta-image cta-image-analysis-constructor"></div>
                    </div>
               
                 
                  <div class="col-md-6 jumbotron  cta-field-description-list-detailed">
                      <h5>Analysis Constructor</h5>

                      <p>
                       {" The analysis constructor allows for\n individual indicators to be combined\n with one another in a structure-\npreserving manner. It also allows for the\n separation of indicators into their various\n time-series."}
                      </p>
                      <a  href="/scoda/#/explorer">
                        <button className="btn cta-field-description-list-detailed-btn">See Our Analysis Constructor</button>
                      
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
                      <a href="/scoda/#/demographic-modeller">
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
