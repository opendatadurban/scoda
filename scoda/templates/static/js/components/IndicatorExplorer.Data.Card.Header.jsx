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
        console.log('current option',this.props.datasetOptions)
          
        const selectorOptions = this.props.datasetOptions.map((dataset,index) =>{
            // <option key={index} value={dataset[0]}>{dataset[1].match(/.{1,10}(\s|$)/g)}</option>
            return <option key={index} value={dataset[0]}>{dataset[1]}</option>
        });

        //populate select option with the current indicator
        const currentOption = this.props.datasetOptions.map((dataset,index) =>{
            if(dataset[0] === this.props.indicator_id) {
                return  <option key={index} value={dataset[0]}>{dataset[1]}</option>
            }
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
                                  {currentOption.length ? currentOption : <option value="0">Empty</option>}
                                  {selectorOptions}

                              </select>
                            </div>
                        </div>
                            <div className='ie-spacer'></div>
                        <div className="row">
                            <div className="col-6">
                                <div id="button-search" className="ie-button-search ie-button-search-explorer ie-button-inactive" style={{width:'170px'}} onClick={this.filterData}>Display the Data</div>
                            </div>
                            <div className="col-6">
                                 {/* <div className="ie-button-reset" onClick={this.resetForm}>Reset Form</div> */}
                            </div>
                        </div>

                    </div>
                    <div className="col-6 explainer-text" style={{marginLeft: 0}} >
                        <span  style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '20px'
                    }}>
                    The purpose of this data explorer is to visually display data in a way that breaks a large dataset into smaller understandable constituent parts.  In this case the focus is on gender per country that may be less apparent when the data are viewed together.<br/><br/>
 
                     Data is sourced from the <a href="" target='_blank' style={{
                        textDecoration: 'underline',
                        color: '#CACACA',
                        fontStyle: 'italic',
                        fontWeight: '500'
                     }}>World Bank</a>.

                        </span>
                    </div>
           </div> 
        )
    }
}