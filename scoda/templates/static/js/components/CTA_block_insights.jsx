import React, { Component } from "react";
export default class CTA_block extends Component {
  render() {
    return (
      <div className="cta_block cta_block_insight module-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-2">
              <div className="row info-block">
                <div className="col-2 icon"></div>
                <div className="col-10 d-flex align-items-center">
                  <h2>INSIGHT TOOLS</h2>
                </div>
                <div className="col-md-9 pl-0 mt-3">
                  <p>
                    Effective output of data is critical to information reaching
                    and being absorbed by the correct audience so that actions
                    can come from research. We understand that data outputs can
                    sometimes appear to be complicated which has led to the
                    development of our insight tools. These tools are designed
                    to simplify complex datasets into bite size and interesting
                    pieces of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto cta-container">
          <div className=" container ">
              <div className="row cta-info">
                    <div className="col-md-6">
                      <div className="cta-image cta-search"></div>
                        <div className="cta-search-half_shadow"></div>
                    </div>
  
                  <div class="col-md-6 jumbotron cta-field-description-list-detailed">
                      <h5>Data Stories</h5>
                      <p>
                        Data stories are a way to understand complex information
                        and data using a narrative that appeals to interested
                        readers.
                      </p>

                      <a href="/scoda/#/data-stories-details">
                      <button className="btn cta-field-description-list-detailed-btn"> See Our Data Stories</button>
                       
                      </a>
                    </div>
                
               
              </div>
          </div>
        </div>
      </div>
    );
  }
}
