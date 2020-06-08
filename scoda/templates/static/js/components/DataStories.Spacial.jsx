import React, { Component } from 'react';

import DataStoriesNavigation from '../components/DataStories.Navigation';
import DataStoriesContentCardSpacial from '../components/DataStories.Content.Card.Spacial';

export default class DataStoriesSpacial extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container px-3">
               <div className="row">
                    <div className="col w-50 d-flex justify-content-center">
                        <DataStoriesNavigation />
                    </div>
               </div>
               <div className="row">
                   <div className="col">
                        <DataStoriesContentCardSpacial
                          storyTitle="State of Cities Finance 2018"
                          storySubtitle="Financing Spatial Transformation"
                          filter="Productive Cities"
                          filterColor="#F05252"
                          author="The South African Cities Network"
                          publishedDate="31 January 2020"
                          infoBlockText="Cities are facing systemic problems that affect two urban policy goals: spatial transformation and building infrastructure"
                        />
                   </div>
               </div>
               <div className="row p-5"></div>
            </div>
        )
    }
}