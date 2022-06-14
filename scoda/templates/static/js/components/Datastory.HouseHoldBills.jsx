import React, { Component } from 'react';

import DataStoriesNavigation from '../components/DataStories.Back';
import DataStoriesContentCardEPW from '../components/DataStories.HouseholdBills.Card';

export default class DataStoriesEPW extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="container px-3 data-story-page">
               <div className="row">
                    <div className="col w-50 d-flex justify-content-center">
                        <DataStoriesNavigation />
                    </div>
               </div>
               <div className="row">
                   <div className="col">
                        <DataStoriesContentCardEPW/>
                   </div>
               </div>
               <div className="row p-5"></div>
            </div>
        )
    }
}