import React, { Component } from 'react';
import Iframe from './Iframe';

const src = 'https://scoda-socf-data-stories.opencitieslab.org/data-story-socf/household-bills-and-affordability'
export default class DataStoriesContentCardAffordability extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          
            <div className="mt-4 ml-2 pr-2">
                <div className="row">
                    <div className="col-12">
                        <div className="ds-content-card">
                        <Iframe src={src} height='3624px'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}