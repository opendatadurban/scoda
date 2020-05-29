import React, { Component } from 'react';


export default class IndicatorExplorerDataCardHeader extends Component {
    constructor(props) {
        super(props);

        this.resetForm = this.resetForm.bind(this);
    }

    resetForm() {
        document.getElementById('selector').selectedIndex = 0;
    }

    render() {

        const selectorOptions = this.props.datasetOptions.map((dataset,index) =>(
            <option key={index} value={dataset.Value}>{dataset.Value}</option>
        ));

        return (
            <div className="row mt-4 px-2">
                    <div className="col ml-3">
                        <div className="row">
                            <div className="col ie-element-label">
                                Choose Your Indicator:
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-0 mt-2 ml-2">
                              <select id="selector" className="pl-3 mt-2 mr-2 ie-dropdown">
                                  {selectorOptions}
                              </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col float-left">
                                <div className="ie-button-search ie-button-inactive">Search</div>
                            </div>
                            <div className="col-2 ml-2"></div>
                            <div className="col float-right">
                                 <div className="ie-button-reset" onClick={this.resetForm}>Reset Form</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-0 ml-3 ie-content-card-header-vl"></div>
                    <div className="col ml-2 mr-3 ie-content-card-header-info">
                        The data explorer provides access to the 102 different indicators used by the South African Cities Network in the State of Cities Report.
                    </div>
           </div> 
        )
    }
}