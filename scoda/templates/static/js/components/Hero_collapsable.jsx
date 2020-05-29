import React, { Component } from 'react';
export default class Data_story_banner extends Component {
    constructor() {
        super();
        this.state = {
          showing: true,
          carret: "fas fa-sort-up"
        };
      }
      handleClickShow() {
          if(this.state.showing = true){
            setTimeout(() => {
                this.setState({
                  showing: false,
                  carret: "fas fa-caret-down"
                });
              }, 2000);

          }
          else{
            setTimeout(() => {
                this.setState({
                  showing: true,
                  carret: "fas fa-sort-up"
                });
              }, 2000); 
          }
      }
    render() {
        return (
            <div className="hero-collapsible container">
                <div className="row">
                    <div className="col-7">
                        <h5>Data Management System <i class={this.state.carret} onClick={e => this.handleClickShow()} ></i></h5>
                    </div>
                </div>
                <div className="row hero-collapsable-content ">
                    <div className="col-7">
                        <p>What is the core purpose of the data management service we provide?  Talk about CKAN as the EVIDENCE base and it’s ability to share and output information, keep this section to about 100 words or less, What is the core purpose of the data management service we provide?  Talk about CKAN and it’s ability to share and output information.  What is the core purpose of the data management service we provide?  Talk about CKAN as.</p>
                        <a href="" className="btn">Got It!</a>
                    </div>
                    <div className="col-5 info-block-col" >
                        <div className="row info-block">
                            <div className="col-2 icon"></div>
                            <div className="col-10 d-flex align-items-center">
                                <h2>EVIDENCE TOOLS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}