import React, { Component } from 'react';

import DemographicModellerDataMap from '../components/DemographicModeller.Data.Maps';

export default class DemographicModellerDataBox extends Component {
    constructor(props) {
        super(props);
    }

    renderDataSet(dataSetType) {

        switch(dataSetType) {
            case "map":
                return <DemographicModellerDataMap 
                       data={this.props.results}
                       />
             break;
        }
    }

    render() {

        return (
                <div className="dm-box-card">
                    <div className="dm-box-card-header">
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
                        <div className="mtp-2 ml-2 mr-2">
                            {this.renderDataSet(this.props.resultType)}
                        </div>                        
                    </div>
                </div>
        )
    }
}