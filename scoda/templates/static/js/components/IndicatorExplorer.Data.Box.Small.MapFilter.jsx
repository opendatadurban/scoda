import React, { Component } from 'react';


export default class IndicatorExplorerDataBoxMapFilter extends Component {
    constructor(props) {
        super(props);

        this.reBindMap = this.reBindMap.bind(this);
    }

    reBindMap() {
        this.props.changeHook(document.getElementById('map-selector').value);
    }

    render() {
        let selectorOptions = [];
        if(this.props.results.length !== 0) {
            selectorOptions = this.props.results.options_list.map((dataset,index) =>(
                <option key={index} value={dataset.optname}>{dataset.optname}</option>
            ));
        }

        return (
                        <div className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      Data on Map
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 mr-2 ml-2">
                                <select id="map-selector" className="mt-2 mr-2 ie-dropdown-small" onChange={()=>this.reBindMap()}>
                                  {selectorOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}