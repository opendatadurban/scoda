import React, { Component } from 'react';
// import Select from './Select';
import $ from 'jquery'
import select2 from 'select2';
import { Container, Row, Col, Modal, ModalBody, Spinner } from 'reactstrap';


export default class IndicatorExplorerDataCardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader:true,
        }
        this.resetForm = this.resetForm.bind(this);
        this.filterData = this.filterData.bind(this);
        // this.enableFilter = this.enableFilter.bind(this);
        
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({loader:false});
       }.bind(this),5000);  // wait 5 seconds, then reset to false
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
        console.log('filtered',selectedIndex)
        this.props.filterHook(selectedIndex);
    }
    
    render() {
        const selectorOptions = this.props.datasetOptions.map((dataset,index) =>{
            // <option key={index} value={dataset[0]}>{dataset[1].match(/.{1,10}(\s|$)/g)}</option>
            return index < 1 ? <option key={index} value={dataset[this.props.indicator_id]}>{dataset[1]}</option> :
            <option key={index} value={dataset[0]}>{dataset[1]}</option>
        });


            
        
        return (
            
            <div className="row">
                {this.state.loader ?                 <Modal id="loader" isOpen={this.state.loader} className="modal-dialog-centered loader">
                    <ModalBody>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-0 ml-3 pt-4">
                                <Spinner type="grow" color="secondary" size="sm"/>
                                <Spinner type="grow" color="success" size="sm"/>
                                <Spinner type="grow" color="danger" size="sm"/>
                                <Spinner type="grow" color="warning" size="sm"/>
                            </div>
                            <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
                        </div>
                        <br/>
                    </ModalBody>
                </Modal> :''}
                    <div className="col-6">

                        <div className="row">
                            <div className="col ie-element-label">
                                Choose Your Indicator:
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                              <select id="selector" className="ie-dropdown mb-2" onChange={this.enableFilter}>                     
                                  {/* <option value="0">Empty</option> */}
                                  {selectorOptions.length ? selectorOptions : <option value="0">Empty</option>}

                              </select>
                            </div>
                        </div>
                            <div className='ie-spacer'></div>
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