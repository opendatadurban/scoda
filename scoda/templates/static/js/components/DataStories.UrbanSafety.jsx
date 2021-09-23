import React, { Component } from 'react';

import DataStoriesNavigation from '../components/DataStories.Navigation';
import DataStoriesContentCardUrbanSafety from '../components/DataStories.Content.Card.UrbanSafety';

export default class DataStoriesUrbanSafety extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
          window.scrollTo(0,0);
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
                        <DataStoriesContentCardUrbanSafety
                          storyTitle="Urban Safety"
                          storySubtitle="South African Cities in Context"
                          filter="Well Governed Cities"
                          filterColor="#196CDB"
                          author="The South African Cities Network"
                          publishedDate="31 January 2020"
                          infoBlockText="Research and evidence are essential to crafting responses that address the structural drivers of crime and violence in South Africa’s cities."
                        />
                   </div>
               </div>
               <div className="row p-5"></div>
            </div>
        )
    }
}