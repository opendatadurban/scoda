import React, { Component } from 'react';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

export default class DataStoriesContentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        let contentBlockOne = `While revenues are sufficient to cover operating expenditures in the metros, they do not generate enough internal finance to fully fund capital expenditure. 
        <br/><br/>
        The funding gap is the difference between the metros’ available revenue and capital finance, and the operating and capital expenditure required to adequately deliver on their mandates, and poses a risk to the ability of metros to provide and maintain adequate infrastructure in the medium to long term. The sources of capital finance and the funding gap for the metros is shown in figure 1.
        <br/><br/>
        The funding gap is shown in purple while the percentages on top of the bars indicate the funding gap as a percentage of capital expenditure in each city. It ranges from 12% in Buffalo City to 73% in Johannesburg.`;
        
        let contentBlockTwo = `Cities can and should take steps to close the gap but need policy support at national level to develop and implement alternative revenue models.`

        let contentBlockThree = `<o>Read</o> more SACN publications and research on municipal finance matters on the SACN website
        <o>Engage</o> with SACN’s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance’s interactively on National Treasury’s <o>Municipal Money</o> Datatool
        Explore the <o>full collection of State of Cities Finances 2018 datasets</o> on SCODA’s data portal
        <br/><br/>
        If you have any queries and further comment on this datastory, please email <o>Danga Mughogho</o> at SACN.`;

        let imgOne = `/static/dist/img/scoda/datastories/m1.png`;
        let imgTwo = `/static/dist/img/scoda/datastories/m2.png`;

        return (
            <div className="mt-4 ml-2 pr-2">
                <div className="row">
                    <div className="col-12">
                        <div className="ds-content-card">
                            <div className="ds-content-card-header">
                               <DataStoriesContentCardHeader 
                                    storyTitle={this.props.storyTitle}
                                    storySubtitle={this.props.storySubtitle}
                                    filter={this.props.filter}
                                    filterColor={this.props.filterColor}
                                    author={this.props.author}
                                    publishedDate={this.props.publishedDate}
                               />
                            </div>
                            <div className="card-body">
                               <div className="row">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText={this.props.infoBlockText}
                                />
                               </div>
                               <div className="row">
                                   <Image imgSrc={imgOne} />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockOne}
                                   />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Figure 1"
                                        dataDescription="Availability of capital finance and resulting funding gap" 
                                   />
                               </div>
                               <div className="row mt-3">
                                 <Image imgSrc={imgTwo} />
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardDataInformation
                                        dataHeading="Source"
                                        dataDescription="State of City Finances Chapter 4, p. 91" 
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Resolution to the Problem"
                                     content={contentBlockTwo}
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Resources"
                                     content={contentBlockThree}
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