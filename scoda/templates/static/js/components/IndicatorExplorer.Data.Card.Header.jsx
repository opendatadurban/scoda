import React, { Component } from 'react';


export default class IndicatorExplorerDataCardHeader extends Component {
    constructor(props) {
        super(props);

        this.resetForm = this.resetForm.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    enableFilter() {
        let filterValue = document.getElementById('selector').value;

        if(filterValue > 0) {
          document.getElementById('button-search').classList.remove('ie-button-inactive');
        }
        else {
                document.getElementById('button-search').classList.add('ie-button-inactive');
        }
    }

    resetForm() {
        document.getElementById('selector').selectedIndex = 0;

        document.getElementById('button-search').classList.add('ie-button-inactive');

        this.props.toggle(false);
    }

    filterData() {
        let selectedIndex = document.getElementById('selector').value;

        this.props.filterHook(selectedIndex);
    }

    render() {
        const selectorOptions = this.props.datasetOptions.map((dataset,index) =>(
            <option key={index} value={dataset[0]}>{dataset[1]}</option>
        ));

        return (
            <div className="row mt-3 pl-1 pb-3">
                    <div className="col ml-3">
                        <div className="row">
                            <div className="col ie-element-label">
                                Choose Your Indicator:
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-1 ml-2 mr-2">
                              <select id="selector" className="pl-3 mt-2 mr-2 ie-dropdown" onChange={this.enableFilter}>
                                  <option value="0">Empty</option>
                                  {selectorOptions}
                              </select>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col">
                                <div id="button-search" className="ie-button-search ie-button-search-explorer ie-button-inactive" onClick={this.filterData}>Search</div>
                            </div>
                            <div className="col ">
                                 <div className="ie-button-reset float-right" onClick={this.resetForm}>Reset Form</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-0 ml-3 ie-content-card-header-vl"></div>
                    <div className="col-0 pl-5 pt-4 pr-5 ie-content-card-header-info">
                        The data explorer provides access to the 102 different indicators used by the South African Cities Network in the State of Cities Report.
                    </div>
           </div> 
        )
    }
}