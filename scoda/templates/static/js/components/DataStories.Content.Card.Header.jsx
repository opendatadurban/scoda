import React, { Component } from 'react';

import FilterPill from '../components/Filter.Pill';


export default class DataStoriesContentCardHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col mt-5 ml-5 ds-content-story-title">{this.props.storyTitle.toUpperCase()} :</div>
                            <div className="col-0 float-right mt-4 mr-5">
                                <FilterPill filter={this.props.filter} color={this.props.filterColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-1 ml-5 ds-content-story-subtitle">{this.props.storySubtitle}</div>
                        </div>
                        <div className="row">
                            <div className="col mx-5 mt-3">
                                <div className="ds-content-card-header-hr ds-content-card-header-hr-carousel"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-4 ml-5">
                                <div className="row ml-1">
                                    <div className="col-0 mt-2 pr-2 ds-content-card-header-sub ">AUTHOR : </div>
                                    <div className="col-0 ds-content-card-header-main ml-1 ">{this.props.author}</div>
                                </div>
                            </div>
                            <div className="col float-right mt-4 mr-5">
                                <div className="row float-right">
                                    <div className="col-0 mt-2 pr-2 ds-content-card-header-sub ">PUBLISHED : </div>
                                    <div className="col-0 ds-content-card-header-main ml-1 r">{this.props.publishedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row p-3"></div>
                    </div>
           </div> 
        )
    }
}