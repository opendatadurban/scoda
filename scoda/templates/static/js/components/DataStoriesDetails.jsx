import React, { Component } from 'react';

import Banner from './DataStories.Banner';
import FilterBar from './DataStories.Filterbar';
import ContentSectionRight from './DataStories.ContentSection.Right';
import ContentSectionTop from './DataStories.ContentSection.Top';
import DataStoriesInfoBanner from './DataStories.InfoBanner';

export default class DataStoriesDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let sacnContent = "The South African Cities Network data stories provide succinct visual insight into the key narratives from the South African Cities Network research outputs.";

        let edgeContent = "The eThekwini data stories provide succinct visual insight into the key narratives surrounding economic development and employment in the City.";

        let sacnFilters = "Productive Cities,Inclusive Cities,Well Governed Cities,Sustainable Cities,Built Enviroment,City Demographics";
        let sacnColors = "#F05252,#FFC057,#196CDB,#31C198,#870672,#131421";

        let edgeFilters = "Employment,Services,Economy";
        let edgeColors = "#F05252,#FFC057,#196CDB";

        let sacnSectionOneImage = 'spatial.png';
        let sacnSectionOneTitle = 'State of City Finances 2018';
        let sacnSectionOneSubTitle = 'Financing Spatial Transformation';
        let sacnSectionOneContent = 'Despite the fact that South Africa’s national urban agenda prioritises urban densification, the municipal revenue mode…';

        return (
            <div className="container-fluid ml-0 mt-0 p-0 data-story-landig-page">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <span className="nav-stretch"></span>
                        <a className="nav-item nav-link active" id="nav-sacn-tab" data-toggle="tab" href="#nav-sacn-content" role="tab" aria-controls="nav-sacn-content" aria-selected="true">SACN</a>
                        <a className="nav-item nav-link" id="nav-eThekwini-tab" data-toggle="tab" href="#nav-eThekwini-content" role="tab" aria-controls="nav-eThekwini-content" aria-selected="false">eThekwini</a>
                    </div>
               </nav>
               <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-sacn-content" role="tabpanel" aria-labelledby="nav-sacn-tab">
                      <div className="container-fluid">
                          <div className="row">
                             <div className="col-md-1"></div>
                             <div className="col-md-10">
                                <div className="ds-content-hspacer"></div>
                                <Banner 
                                  section="sacn"
                                  title="SACN Data Stories"
                                  content={sacnContent}
                                  viewType="Webpage"
                                />
                                <FilterBar 
                                        filters={sacnFilters} 
                                        colors={sacnColors} 
                                />
                                <ContentSectionRight 
                                        img={sacnSectionOneImage} 
                                        title={sacnSectionOneTitle} 
                                        subtitle={sacnSectionOneSubTitle} 
                                        content={sacnSectionOneContent}
                                        filterColor="#F05252"
                                        filter="Productive Cities"
                                        imageTag="P"
                                        filter_type = "data-story-card-productive"
                                        infoBannerTitle="The Durban EDGE"
                                        infoBannerDate="August 2018"
                                        infoBannerMins="9"
                                        filter_type = "data-story-card-productive"
                                        href_ = '/scoda/#/ds-spatial-transformation-2018'
                                />
                                <div className="row">
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="stateof.png"
                                        title="State of the EPWP" 
                                        subtitle="South African Cities 2017/18"
                                        content="The unemployment rate remains at an unfortunate 26.7% in South Africa. Curbing this rate has been a great challenge for the ..."
                                        filterColor="#FFC057"
                                        filter="Inclusive Cities"
                                        imageTag="I"
                                        filter_type = "data-story-card-inclusives"
                                        href_ = '/scoda/#/ds-epw-metro-2018'
                                    />
                                    <DataStoriesInfoBanner 
                                        title="South African Cities Network"
                                        subtitle="July 2018"
                                        minutes="8"
                                        filter_type = "data-story-card-inclusives"
                                    />
                                    </div>
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="affordability.png"
                                        title="State of the City Finances 2018" 
                                        subtitle="Afordability"
                                        content="A key message from the State of City Finances 2018 report is that citizens are in crisis. Although growth in the cost of munic..."
                                        filterColor="#FFC057"
                                        filter="Inclusive Cities"
                                        imageTag="I"
                                        filter_type = "data-story-card-inclusives"
                                        href_ = '/scoda/#/ds-affordability-2018'
                                    />
                                    <DataStoriesInfoBanner 
                                        title="South African Cities Network"
                                        subtitle="July 2018"
                                        minutes="5"
                                        filter_type = "data-story-card-inclusives"
                                    />
                                    </div>
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="urban-safety.png"
                                        title="Urban Safety" 
                                        subtitle="South African Cities in Context"
                                        content="Cities worldwide generate about 80% of the gross value added in their respective countries. Due to their association with opp..."
                                        filterColor="#196CDB"
                                        filter="Well Governed Cities"
                                        filter_type = "data-story-card-well"
                                        imageTag="W"
                                        href_ = '/scoda/#/ds-urban-safety-2018'
                                        
                                    />
                                    <DataStoriesInfoBanner 
                                        title="South African Cities Network"
                                        subtitle="July 2018"
                                        minutes="6"
                                        filter_type = "data-story-card-well"
                                    />
                                    </div>
                                </div>
                                <ContentSectionRight 
                                        img="infrastructure.png" 
                                        title="State of City Finances 2018" 
                                        subtitle="Financing Infrastructure" 
                                        content="While revenues are sufficient to cover operating expenditures in the metros, they do not generate enough internal finance to…"
                                        filterColor="#196CDB"
                                        filter="Well Governed Cities"
                                        imageTag="W"
                                        filter_type = "data-story-card-well"
                                        infoBannerTitle="The Durban EDGE"
                                        infoBannerDate="August 2018"
                                        infoBannerMins="7"
                                        filter_type = "data-story-card-well"
                                        href_ = '/scoda/#/ds-state-of-finance-2018'
                                />
                             </div>
                             <div className="ds-content-vspacer"></div>
                          </div>
                          <div className="pt-5"></div>
                          <div className="ds-content-vspacer"></div>  
                      </div>
                    </div>
                    {/*TAB2 Content*/}
                    <div className="tab-pane fade" id="nav-eThekwini-content" role="tabpanel" aria-labelledby="nav-eThekwini-tab">
                    <div className="container-fluid">
                          <div className="row">
                          <div className="col-md-1"></div>
                             <div className="col-md-10">
                                <div className="ds-content-hspacer"></div>
                                <Banner 
                                  section="edge"
                                  title="eThekwini Data Stories (via the Durban EDGE)"
                                  content={edgeContent}
                                  viewType="Portal"
                                />
                                 <FilterBar filters={edgeFilters} colors={edgeColors} />
                                 <div className="row">
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="unemployed.png"
                                        title="Unemployment in SA’s Major Cities" 
                                        subtitle=""
                                        content="Three line opening sentence which can be custom written or taken from the first part of the introduction until elipses are needed…"
                                        filterColor="#F05252"
                                        filter="Employment"
                                        imageTag="E"
                                        filter_type = "data-story-card-employment"
                                        href_ = 'https://data-stories.edge.durban/edge/unemployed_around_major_citiies'
                                    />

                                    {/**here */}
                                 <div className="">
                                    <DataStoriesInfoBanner 
                                        title="The Durban EDGE"
                                        subtitle="2 August 2019"
                                        minutes="5"
                                        filter_type = "data-story-card-employment"
                                    />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="durban.png"
                                        title="Durban's Economy Recovers in the Second Quarter" 
                                        subtitle=""
                                        content="Three line opening sentence which can be custom written or taken from the first part of the introduction until elipses are needed…"
                                        filterColor="#196CDB"
                                        filter="Economy"
                                        imageTag="Ec"
                                        filter_type = "data-story-card-economy"
                                        href_ = 'https://data-stories.edge.durban/edge/durban_economy_2nd_Q'
                                    />
                                        <div className="">
                                    <DataStoriesInfoBanner 
                                        title="The Durban EDGE"
                                        subtitle="14 October 2019"
                                        minutes="4"
                                        filter_type = "data-story-card-economy"
                                    />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <ContentSectionTop 
                                        img="electricity.png"
                                        title="Electricity Usage" 
                                        subtitle=""
                                        content="Three line opening sentence which can be custom written or taken from the first part of the introduction until elipses are needed…"
                                        filterColor="#FFC057"
                                        filter="Service"
                                        imageTag="S"
                                        filter_type = "data-story-card-service"
                                        href_ = ''
                                    />
                                               <div className="">
                                    <DataStoriesInfoBanner 
                                        title="The Durban EDGE"
                                        subtitle="June 2019"
                                        minutes="6"
                                        filter_type = "data-story-card-service"
                                    />
                                    </div>
                                    
                                    </div>
                                </div>
                                <div className="row mt-4">
                            
                                </div>
                                <ContentSectionRight 
                                        img="economy.png" 
                                        title="Economic Overview: State of the Durban Economy" 
                                        subtitle="" 
                                        content="Three line opening sentence which can be custom written or taken from the first part of the introduction until elipses are needed…"
                                        filterColor="#F05252"
                                        filter="Economy"
                                        imageTag="Ec"
                                        infoBannerTitle="The Durban EDGE"
                                        infoBannerDate="June 2019"
                                        infoBannerMins="8"
                                        filter_type = "data-story-card-economy"
                                        href_ = 'https://data-stories.edge.durban/edge/durban_economy'

                                        
                                />
                             </div>
                             <div className="ds-content-vspacer"></div>
                          </div>
                    </div>
                    <div className="pt-5"></div>
                    <div className="ds-content-vspacer"></div>    
                    </div>
                </div>
              
            </div>
        )
    }
}