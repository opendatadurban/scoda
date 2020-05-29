import React, { Component } from 'react';


export default class DataStoriesContentCardDataInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                    <div className="col">
                        <div className="row">
                            <div className="col-0 mt-3 ds-content-card-data-description ds-content-card-data-description-title">{this.props.dataHeading.toUpperCase()}: </div>
                            <div className="col-0 mt-3 ml-1 ds-content-card-data-description">{this.props.dataDescription}</div>
                        </div>
                    </div> 
        )
    }
}