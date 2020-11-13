import React, { Component } from 'react';

import DataStoriesNavigation from '../components/DataStories.Navigation';
import DataStoriesContentCardAffordability from '../components/DataStories.Content.Card.Affordability';

export default class DataStoriesAffordability extends Component {
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
                        <DataStoriesContentCardAffordability
                          storyTitle="State of Cities Finance 2018"
                          storySubtitle="Affordability"
                          filter="Inclusive Cities"
                          filterColor="#FFC057"
                          author="The South African Cities Network"
                          publishedDate="31 January 2020"
                        />
                   </div>
               </div>
               <div className="row p-5"></div>
            </div>
        )
    }
}