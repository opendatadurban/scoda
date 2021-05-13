import React from "react";
import { Component } from "react";
import DataStoriesContentCardHeader from "../components/DataStories.Content.Card.New.Header";
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.Carousel.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';


export default class ContextHeader extends Component {
    render() {
        return (
            <div>
                <div className="mt-4 ml-2 pr-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="ds-content-card ds-content-card-carousel">
                                <div className="ds-content-card-header ds-content-card-header-carousel ds-content-card-color">
                                    <DataStoriesContentCardHeader
                                        storyTitle="Urban Safety:"
                                        storySubtitle="South African Cities in Context"
                                        filter="Well Governed Cities"
                                        filterColor="#196CDB"
                                        author="The South African Cities Network"
                                        publishedDate="31 January 2020"
                                    />
                                </div>

                            </div>
                            <div className="card-body card-body-new_header pt-4 pb-5 mt-5">
                                <div className="row">
                                    <DataStoriesContentCardContentBlock
                                        contentHeading="Introduction"
                                        content="Cities worldwide generate about 80% of the gross value added in their respective countries. Due to their association with opportunity and better livelihoods, about 60% of the South African population live in its cities and towns. However due to inequality, among other factors, cities have high levels of violence and crime."
                                        className="mb-4"
                                    />
                                </div>
                                <div className="row mt-4">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockTitle="Data Story Topic:"
                                    infoBlockText="Research and evidence are essential to crafting responses that address the structural drivers of crime and violence in South Africa’s cities. "
                                    className="ds-content-card-highlight-block-header-title-carousel"

                                />
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}