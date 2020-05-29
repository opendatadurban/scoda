import React, { Component } from 'react';

import DataStoriesSVGIcon from '../components/DataStories.Icon.Svg';

export default class DataStoriesNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container-fluid mt-3 ml-5 pr-5">
               <div className="row">
                    <div className="col-0 float-left ds-main-navigation-button-back">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-0 ds-main-navigation-button-back-icon"><DataStoriesSVGIcon/></div>
                            <div className="col-0 ds-main-navigation-button-back-text">Back to Home</div>
                       </div>
                    </div>
                    <div className="col w-75"></div>
                    <div className="col-0 float-right ds-main-navigation-button-explorer">
                        View This in the Data Explorer
                    </div>
                </div>
               <div className="row">
                   <div className="h-25 d-inline-block"></div>
               </div>
            </div>
        )
    }
}