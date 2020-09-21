import React, { Component } from 'react';


export default class IndicatorExplorerDataBoxMapFilter extends Component {
    constructor(props) {
        super(props);

        this.reBindMap = this.reBindMap.bind(this);
    }

    reBindMap() {
        if(this.props.results.plot_type === 2) {
            this.props.changeHook(document.getElementById('map-selector').value,2);
        }

        /*if(this.props.results.plot_type === 1) {
            var year = Number(document.getElementById('map-selector').value);
            this.props.changeHook(year,1);
        }*/
    }

    render() {
        let selectorOptions = [];
        if(this.props.results.length !== 0) {
            if(this.props.results.plot_type === 2) {
                selectorOptions = this.props.results.options_list.map((dataset,index) =>(
                    <option key={index} value={dataset.optid}>{dataset.optname}</option>
                ));
            }
            if(this.props.results.plot_type === 1) {
                selectorOptions = this.props.results.years_list.map((dataset,index) =>(
                    <option key={index} value={dataset.optid}>{dataset.optname}</option>
                ));
            }
           
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