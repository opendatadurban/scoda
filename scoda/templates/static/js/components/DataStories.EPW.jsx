import React, { Component } from 'react';

import DataStoriesNavigation from '../components/DataStories.Navigation';
import DataStoriesContentCardEPW from '../components/DataStories.Content.Card.EPW';

export default class DataStoriesEPW extends Component {
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
                        <DataStoriesContentCardEPW
                          storyTitle="The EPWP in metropolitan municipalities"
                          storySubtitle="Lowering the high unemployment rate and alleviating poverty in South Africa"
                          filter="Inclusive Cities"
                          filterColor="#FFC057"
                          author="The South African Cities Network"
                          publishedDate="31 January 2020"
                          infoBlockText="What is the role of Public Employment Programmes in creating jobs in South Africa?"
                        />
                   </div>
               </div>
               <div className="row p-5"></div>
            </div>
        )
    }
}