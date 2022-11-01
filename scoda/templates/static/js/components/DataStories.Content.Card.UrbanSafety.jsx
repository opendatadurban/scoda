import React, { Component } from 'react';

import Chart from 'chart.js';

import Image from '../components/Image';

import DataStoriesContentCardHeader from '../components/DataStories.Content.Card.Header';
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.HighlightBlock';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';
import DataStoriesContentCardDataInformation from '../components/DataStories.Content.Card.Data.Information';

export default class DataStoriesContentCardUrbanSafety extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        let contentBlockOne = `Cities worldwide generate about 80% of the gross value added in their respective countries. Due to their association with opportunity and better livelihoods, about 60% of the South African population live in its cities and towns. However due to inequality, among other factors, cities have high levels of violence and crime.`;
        
        let contentBlockTwo = `From national statistics, cities record the lion’s share of crime: <br/>
        <ul>
            <li style="margin-left:5%">47% of murders</li>
            <li style="margin-left:5%">58% of residential robberies</li>
            <li style="margin-left:5%">64% of aggravated robberies</li>
            <li style="margin-left:5%">73% of vehicle thefts</li>
            <li style="margin-left:5%">76% of carjackings</li>
        </ul>
        <br/>Because crime and violence have a distinctly urban character, there’s a need to focus on cities through research aimed at reliably establishing what drives crime trends and what the right responses should entail.`

        let contentBlockFour = `The demand to increase revenue makes cities focus on the gains to be made from greenfield development rather than brownfield development.
        <br/><br/>
        The two columns show the fiscal consequences of greenfield vs brownfield development.
        <br/><br/>
        A completed greenfield development will generate significantly higher revenue from property rates because of the lower value of rates payable on agricultural land.
        <br/><br/>
        The bottom row of the graphic shows very clearly the quantum difference in the percentage increase in the revenue received per property in a greenfield vs a brownfield development.`;

        let contentBlockThree = `<o onClick="javascript:window.open('https://www.sacities.net/municipal-finance/','_new');">Read</o> more SACN publications and research on municipal finance matters on the SACN website
        <o onClick="javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')">Engage</o> with SACN’s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance’s interactively on National Treasury’s <o onClick="javascript:window.open('https://municipalmoney.gov.za/','_new')">Municipal Money</o> Datatool
        Explore the <o onClick="javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')">full collection of State of Cities Finances 2018 datasets</o> on SCODA’s data portal
        <br/><br/>
        If you have any queries and further comment on this datastory, please email <o onClick="javascript:window.location='mailto:danga@sacities.net'">Danga Mughogho</o> at SACN.`;

        let resources = ` <ul style="margin-left:2%">
        <li>Where can I read the full report? See the <a href="">SACN</a> and <a href="">SaferSpaces</a> webpages.</li>
        <li>Download and analyse data at the <a href="">SCODA</a> webpage</li>
        <li>Are there <a href="">events</a> I can join? (mini launches of the Report in SACN member cities – TBC)</li>
        <li>What other publications should I be reading on this topic? 
            <ul style="margin-left:1%;list-style-type: none;">
                <li >- <a href="">Urban Safety Policy Briefs</a></li>
                <li>- <a href="">IUDF (CoGTA, 2016)</a></li>
                <li>- <a href="">NUA Localisation Framework (SACN, 2018)</a></li>
                <li>- <a href="">White Paper on Safety & Security (CSPS, 2017)</a></li>
                <li>- <a href="">Know Your Block Toolkit (SACN & SACPLAN, 2014)</a></li>
                <li>- <a href="">Participatory Safety Planning Toolkit (GIZ-VCP, 2016</a>)</li>
            </ul>
        </li>
    </ul>
    <br/>
    If you have any queries and further comment on this datastory, please email <a href="mailto:siphelele@sacities.net">Siphelele Ngobese</a> at SACN.`;

        let imgOne = `/static/dist/img/scoda/datastories/ds-urban-population.svg`;
        let imgTwo = `/static/dist/img/scoda/datastories/ds-urban-percapita.svg`;
        let imgThree = `/static/dist/img/scoda/datastories/ds-urban-murder.svg`;
        let imgFour = `/static/dist/img/scoda/datastories/ds-urban-nummurders.svg`;
        let imgFive = `/static/dist/img/scoda/datastories/ds-urban-table.PNG`;

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
                            <div className="card-body pt-4 pb-5 mt-5">
                               <div className="row">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText={this.props.infoBlockText}
                                />
                               </div>
                               <div className="row">
                                   <div className="col p-2"></div>
                               </div>
                               <div className="row">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Introduction"
                                     content={contentBlockOne}
                                   />
                               </div>
                               <div className="row mt-5"></div>
                               <div className="row">
                                   <div className="col">
                                       <div className="row">
                                           <div className="col ds-urban-header">
                                             Proportion Urban Population (1990-2050)
                                           </div>
                                       </div>
                                       <div className="row">
                                           <div className="col-0 w-100">
                                            <Image alt='population' imgSrc={imgOne} />
                                           </div>
                                       </div>
                                       <div className="row">
                                        <DataStoriesContentCardDataInformation
                                            dataHeading="Source"
                                            dataDescription="UN DESA (2014)" 
                                            />
                                       </div>
                                   </div>
                                   <div className="col-1"></div>
                                   <div className="col-0 p-5 ds-urban-addressing-block">
                                       <div className="row">
                                           <div className="col ds-urban-addressing-heading">
                                           Addressing inequality is a matter of life and violent death
                                           </div>
                                       </div>
                                       <div className="row">
                                            <div className="col p-3 ds-urban-addressing-content">
                                            Since at least the 1970s, South Africa’s murder levels have not been below 30 per 100 000, which is considered very high by global standards - only a handful of countries record murder rates at this level.
                                            <br/><br/>
                                            Comparative international research shows that a very strong predictor of a country’s level of crime and violence is its level of inequality.
                                            As measured by its Gini coefficient, South Africa is one of the most unequal countries, if not the most unequal country, in the world.
                                            <br/><br/>
                                            Addressing inequality must no longer be considered an abstract and long-term ideal.  It is a matter of life and violent death.
                                           </div>
                                       </div>
                                   </div>
                               </div>


                               <div className="row mt-5">
                                   <div className="col">
                                       <div className="row">
                                           <div className="col ds-urban-header">
                                             Per capita income or real GVA per capita (2013)
                                           </div>
                                       </div>
                                       <div className="row">
                                           <div className="col-0 w-100">
                                            <Image alt='percapita' imgSrc={imgTwo} />
                                           </div>
                                       </div>
                                       <div className="row">
                                        <DataStoriesContentCardDataInformation
                                            dataHeading="Source"
                                            dataDescription="Quantec Research (2015)" 
                                            />
                                       </div>
                                   </div>
                               </div>

                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="What are South Africa’s murder rate figures?"
                                     content="South Africa records among the highest murder rates in the world. Although the country has almost halved its murder rates since 1994, they remain worryingly high. In the past 4 years, following an all-time low in 2011, murder rates have steadily climbed. This is cause for concern."
                                     />
                               </div>

                               <div className="row mt-5">
                                   <div className="col">
                                       <div className="row">
                                           <div className="col ds-urban-header">
                                           South Africa’s murder rate per 100 000 (1994/1995 - 2017/2018)
                                           </div>
                                       </div>
                                       <div className="row mt-5">
                                           <div className="col-0 w-100">
                                            <Image alt='murder' imgSrc={imgThree} />
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     content={contentBlockTwo}
                                   />
                               </div>
                               <div className="row mt-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Why is there a need to focus crime research on cities?"
                                     content="The need to focus research on cities is because national crime statistics do not reveal the actual distribution of crime and violence. City level data is therefore essential. For example, some South African metros record murder rates above the national average."
                                   />
                               </div>

                               <div className="row mt-4">
                                   <div className="col">
                                       <div className="row">
                                           <div className="col ds-urban-header">
                                           Absolute number of murders compared to murder rates per 100 00 (2017/2018)
                                           </div>
                                       </div>
                                       <div className="row mt-5">
                                           <div className="col-0">
                                            <Image alt='nummurders' imgSrc={imgFour} />
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="row mt-4"></div>
                               <div className="row mt-4">
                                <DataStoriesContentCardHighlightBlock 
                                    infoBlockText="City level data could enable city authorities to establish the ‘why’ and craft their responses according to place-specific drivers and to solve crime and violence challenges sustainably."
                                />
                               </div>
                               <div className="row mt-5">
                                   <div className="col-md-4 mt-3 mb-3">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="How do fear and perception of danger affect urban residents? "
                                     content="Fear and perceptions often trump actual rates of crime. This has a direct effect on how urban residents engage in public life and their feelings of safety in public space."
                                   />

                                   </div>
                                   <div className="col ml-2 mt-3 mb-3">
                                    <Image alt='table' imgSrc={imgFive} />
                                   </div>
                               </div>
                                <div className="row mt-3">
                                <DataStoriesContentCardContentBlock 
                                  contentHeading="Conclusion"
                                  content="The nine metropolitan cities of South Africa are where most crime types occur. At the same time they are places of opportunity, with a significant role in improving livelihoods. <br/>
                                  City level data and evidence are critical to planning and practice that respond to the structural and place-specific  drivers of violence and crime; so that cities are safe, liveable and inclusive. "
                                />
                                </div>
                              
                               <div className="row mt-4">
                                   <DataStoriesContentCardContentBlock 
                                     contentHeading="Resources"
                                     content={resources}
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