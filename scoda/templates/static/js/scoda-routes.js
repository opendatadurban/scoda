//Imports
import React, {useEffect, useState} from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';

import Home from './components/Home';
import Hero from './components/Hero';
import Preview_block from './components/Preview_block';
import CTA_block from './components/CTA_block';
import CTA_block_analysis from './components/CTA_block_analysis';
import CTA_block_insights from './components/CTA_block_insights';
import Footer from './components/Footer';
import Sub_Footer from './components/Sub_Footer';
import Hero_collapsable from './components/Hero_collapsable';
import Navigation_scoda from './components/Navigation_scoda';
import About from './components/About';


import Hero_Collapsable from './components/Hero.Collapsible';
import DataStoriesDetails from './components/DataStoriesDetails';
import DataStories from './components/DataStories';

import DataStoriesSpacial from './components/DataStories.Spacial';
import DataStoriesUrbanSafety from './components/DataStories.UrbanSafety';
import DataStoriesEPW from './components/DataStories.EPW';
import IndicatorExplorer from './components/IndicatorExplorer';
import CBIndicatorExplorer from './components/codebook-explorer/CBIndicatorExplorer'
import TabsAndFilters from './components/TabsAndFilters'
import DemographicModeller from './components/DemographicModeller';
import DataStoriesAffordability from './components/DataStories.Affordability';
import Codebook from './components/Codebook';

//SOCR Dashboards
import Socr_Dashboards from './components/Socr.Dashboards'
import CitizensEngagements from './components/Socr.Citizens.Engagement'

const _heroTitle = 'Data Management System';
const _heroContent = ' Central to activities on this platform is the Data Management System, where our evidence base is securely housed. We use the CKAN data portal framework, the same system used by various governments around the world, to store, manage, and share data across the SCODA ecosystem. From this dynamic, version-controlled and API-responsive data-store, we can efficiently gather and process the myriad sources required for insight generation.Central to activities on this platform is the Data Management System, where our evidence base is securely housed. We use the CKAN data portal framework, the same system used by various governments around the world, to store, manage, and share data across the SCODA ecosystem. From this dynamic, version-controlled and API-responsive data-store, we can efficiently gather and process the myriad sources required for insight generation.';
const _heroInfoTitle = 'Evidence Tools';
const _heroPrimaryColor = '#F05252';
const _heroSecondaryColor = '#F64343';


const _heroTitle_insight = 'Data Stories';
const _heroContent_insight = 'Data stories are a way to understand complex information and data using a narrative that appeals to interested readers.<br/><br/>They can be thought of as a series of dashboards connected with explainer text.  The topic is clearly defined and explored using information broken into understandable chunks which result in a finding or conclusion with calls to action to encourage the reader to learn and explore more.';
const _heroInfoTitle_insight = 'INSIGHT TOOLS';
const _heroPrimaryColor_insight = '#4F9DA6';
const _heroSecondaryColor_insight = '#4F9DA6';

const _heroTitle_explore = 'Data Explorer';
const _heroContent_explore = `Our Indicators: We use a diverse range of carefully selected and tested indicators to compile our State of Cities Report.  
You can browse, analyse and download these individual indicators using our Data Explorer tool.`;
const _heroInfoTitle_explore = 'ANALYSIS TOOLS';
const _heroPrimaryColor_explore = '#FFAD5A';
const _heroSecondaryColor_explore = '#FFAD5A';

const _heroTitle_demo = 'Demographics Modeller';
const _heroContent_demo = 'With the demographic projection tool we provide both a powerful predictor of internal migration within South African metros, as well as a framework for the development of open, collaborative model building that is based on diverse and novel data sources.';
const _heroInfoTitle_demo = 'ANALYSIS TOOLS';
const _heroPrimaryColor_demo = '#FFAD5A';
const _heroSecondaryColor_demo = '#FFAD5A';

const _heroTitle_codebook = 'Codebook';
const _heroContent_codebook = 'The codebook is a live list of common city indicators providing definitions, methodologies for collection, and data availability of comparable city data. The codebook can be used to locate city data, understand how indicators have been constructed, where data is sourced from, and linked to the data explorer where information can be visualised and analysed.';
const _heroInfoTitle_codebook = 'ANALYSIS TOOLS';
const _heroPrimaryColor_codebook = '#FFAD5A';
const _heroSecondaryColor_codebook = '#FFAD5A';

// Linear gradients
const _heroLinearGradient_demo = `linear-gradient(112deg, rgb(255, 173, 90) calc(57% - 1px), rgb(255, 173, 90), #fff calc(38% + 1px))`
const _heroLinearGradient_codebook = `linear-gradient(112deg, rgb(255, 173, 90) calc(40% - 1px), rgb(255, 173, 90), #fff calc(38% + 1px))`
const _heroLinearGradient_datastories = `linear-gradient(112deg, rgba(79,157,166,1) calc(54% - 1px), rgba(79,157,166,1), #fff calc(38% + 1px))`



const _tabs = [
  {
      name: 'SACN', mode:'active',url: 'https://www.sacn.co.za'
  },
  {
      name: 'eThekwini', mode: 'none', url: 'https://www.google.com'
  }
];

import createHistory from "history/createBrowserHistory"

export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

// import more components
export default (
    <HashRouter history={history}>


      {/* DATA STORY DETAILS */}
    <Route path='/data-stories-details'  component={()=> <Navigation_scoda box_shadow={true} />}/>
    <Route exact path="/data-stories-details" component={()=> <Hero_Collapsable title={_heroTitle_insight} 
            content={_heroContent_insight} 
            infoTitle={_heroInfoTitle_insight}
            primaryColor={_heroPrimaryColor_insight} 
            secondaryColor={_heroSecondaryColor_insight}
            linearGradient={_heroLinearGradient_datastories}/> } />

      <Route exact path="/data-stories-details" component={()=>
            <DataStoriesDetails />} />
      <Route path='/data-stories-details' component={Footer} />

      {/* CODE BOOK */}
      <Route path="/codebook" component={() => <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/codebook" component={() => <Hero_Collapsable title={_heroTitle_codebook}
            content={_heroContent_codebook}
            infoTitle={_heroInfoTitle_codebook}
            primaryColor={_heroPrimaryColor_codebook}
            secondaryColor={_heroSecondaryColor_codebook} 
            linearGradient={_heroLinearGradient_codebook}/> } />
      <Route exact path="/codebook" component={() => <Codebook />} />      
      <Route path="/codebook" component={Footer} />
      
      <Route path="/ds-state-of-finance-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-state-of-finance-2018" component={()=> <DataStories />} />
      <Route path="/ds-state-of-finance-2018" component={Footer} />

      <Route path="/ds-spatial-transformation-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-spatial-transformation-2018" component={()=> <DataStoriesSpacial />} />
      <Route path="/ds-spatial-transformation-2018" component={Footer} />
      
      <Route path="/ds-urban-safety-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-urban-safety-2018" component={()=> <DataStoriesUrbanSafety />} />
      <Route path="/ds-urban-safety-2018" component={Footer} />

      <Route path="/ds-epw-metro-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-epw-metro-2018" component={()=> <DataStoriesEPW />} />
      <Route path="/ds-epw-metro-2018" component={Footer} />

      <Route path="/ds-affordability-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-affordability-2018" component={()=> <DataStoriesAffordability />} />
      <Route path="/ds-affordability-2018" component={Footer} />

      <Route exact path="/tabs-and-filters" component={()=><TabsAndFilters tabs={_tabs}/>} />
      
   
      <Route path='/preview-block' component={Preview_block} />
      <Route path='/cta-block' component={CTA_block} />
      <Route path='/sub-footer' component={Sub_Footer} />
      <Route path='/footer' component={Footer} />
      
      <Route path='/datastory' component={DataStories} />

      <Route path='/home' component={()=> <Navigation_scoda logoHide={true} box_shadow={false} />} />
      <Route path='/home' component={Hero} />
      <Route path='/home' component={Preview_block} />
      <Route path='/home' component={CTA_block} />
      <Route path='/home' component={CTA_block_analysis} />
      <Route path='/home' component={CTA_block_insights} />
      <Route path='/home' component={Sub_Footer} />
      <Route path='/home' component={Footer} />

      <Route path='/about-us' component={()=> <Navigation_scoda logoHide={true} box_shadow={false} />} />
      <Route path='/about-us' component={About} />
      <Route path='/about-us' component={Sub_Footer} />
      <Route path='/about-us' component={Footer} />

      <Route path='/demographic-modeller' component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/demographic-modeller" component={()=> <Hero_Collapsable title={_heroTitle_demo} 
            content={_heroContent_demo} 
            infoTitle={_heroInfoTitle_demo}
            primaryColor={_heroPrimaryColor_demo} 
            secondaryColor={_heroSecondaryColor_demo}
            linearGradient={_heroLinearGradient_demo}/>}/>
      <Route exact path="/demographic-modeller" component={()=><DemographicModeller />} />
      <Route path="/demographic-modeller" component={Footer} />

      <Route path="/explorer" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/explorer" component={()=> <Hero_Collapsable title={_heroTitle_explore} 
            content={_heroContent_explore} 
            infoTitle={_heroInfoTitle_explore}
            primaryColor={_heroPrimaryColor_explore} 
            secondaryColor={_heroSecondaryColor_explore}
            linearGradient={_heroLinearGradient_codebook}/>}/>
      <Route exact path="/explorer" component={()=> <IndicatorExplorer />}/>
      <Route path="/explorer" component={Footer} />

      <Route exact path='/codebook-explorer/:id' render={(props)=> <Navigation_scoda box_shadow={true} {...props}/>} />
      <Route exact path='/codebook-explorer/:id' render={(props)=> <Hero_Collapsable {...props} title={_heroTitle_explore}
            content={_heroContent_explore}
            infoTitle={_heroInfoTitle_explore}
            primaryColor={_heroPrimaryColor_explore}
            secondaryColor={_heroSecondaryColor_explore}/>}/>
        <Route exact path='/codebook-explorer/:id' render={(props)=> <CBIndicatorExplorer className=""  {...props}/>} />
      <Route path="/codebook-explorer/:id" component={Footer} />

      <Route path='/socr-dashboards' component={()=> <Navigation_scoda logoHide={false} box_shadow={true} />} />
      <Route path='/socr-dashboards' component={Socr_Dashboards} />
      <Route path='/socr-dashboards' component={Footer} />

    </HashRouter>
);