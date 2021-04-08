import React, { Component } from 'react';
// import Select from './Select';
import $ from 'jquery'
import select2 from 'select2';



export default class IndicatorExplorerDataCardHeader extends Component {
    constructor(props) {
        super(props);
        
        this.resetForm = this.resetForm.bind(this);
        this.filterData = this.filterData.bind(this);
        // this.enableFilter = this.enableFilter.bind(this);
        
    }

    componentDidMount(){
        $('#selector').select2({
            placeholder:"Empty"
            }
        );
        $('#selector').on('select2:select', function (e) { 
            let filterValue = document.getElementById('selector').value;

            if(filterValue > 0) {
              document.getElementById('button-search').classList.remove('ie-button-inactive');
            }
            else {
                document.getElementById('button-search').classList.add('ie-button-inactive');
            }
        });
    }


    resetForm() {
        console.log('reset')
        $('#selector').select2('val', 0);

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
            <div className="row">
                    <div className="col-6">

                        <div className="row">
                            <div className="col ie-element-label">
                                Choose Your Indicator:
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                              <select id="selector" className="ie-dropdown" onChange={this.enableFilter}>                     
                                  <option value="0">Empty</option>
                                  {selectorOptions}

                              </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div id="button-search" className="ie-button-search ie-button-search-explorer ie-button-inactive" onClick={this.filterData}>Search</div>
                            </div>
                            <div className="col-6">
                                 <div className="ie-button-reset" onClick={this.resetForm}>Reset Form</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-5 explainer-text">
                        The data explorer provides access to the different indicators used by the South African Cities Network in the State of Cities Report.
                    </div>
           </div> 
        )
    }
}