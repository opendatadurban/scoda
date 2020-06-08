import React, { Component } from 'react';

import DataStoriesSVGIcon from '../components/DataStories.Icon.Svg';

export default class DataStoriesNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let explorerUrl = 'http://scoda.herokuapp.com/explore';
        let homeUrl = '/scoda/#/data-stories-details';

        return (
            <div className="container-fluid mt-3">
               <div className="row">
                    <div className="col-0 ml-5 ds-main-navigation-button-back" onClick={()=>window.location = `${homeUrl}`}>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-0 ds-main-navigation-button-back-icon"><DataStoriesSVGIcon/></div>
                            <div className="col-0 ds-main-navigation-button-back-text">Back to Home</div>
                       </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-0 mr-5 float-right ds-main-navigation-button-explorer" onClick={()=>window.open(`${explorerUrl}`,'_new')}>
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