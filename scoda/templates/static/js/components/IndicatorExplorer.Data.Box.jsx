import React, { Component } from 'react';

import IndicatorExplorerDataChart from '../components/IndicatorExplorer.Data.Charts';
import IndicatorExplorerDataTable from '../components/IndicatorExplorer.Data.Table';
import IndicatorExplorerDataMap from '../components/IndicatorExplorer.Data.Maps';

export default class IndicatorExplorerDataBox extends Component {
    constructor(props) {
        super(props);
    }

    renderDataSet(dataSetType) {

        switch(dataSetType) {
            case "table" :
                    return <IndicatorExplorerDataTable 
                             results={this.props.results}
                            />
                break;
            case "chart": 
              return <IndicatorExplorerDataChart 
                        data={this.props.results}
                    />
            break;
            case "map":
                return <IndicatorExplorerDataMap
                        data={this.props.results}/>
             break;
        }
    }

    render() {

        return (
                        <div className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      {this.props.resultTitle}
                                  </div>
                                  <div className="col-0 mt-2 mr-4 float-right">
                                      <div className="ie-button-download">Download</div>
                                  </div>
                              </div>
                            </div>
                            <div className="col pt-3 pl-3 pr-3">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                  {this.renderDataSet(this.props.resultType)}
                                </div>                        
                            </div>
                        </div>
        )
    }
}