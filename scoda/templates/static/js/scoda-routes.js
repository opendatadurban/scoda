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

import Context from './components/DataStories.Context'

import TabsAndFilters from './components/TabsAndFilters'
import DemographicModeller from './components/DemographicModeller';
import DataStoriesAffordability from './components/DataStories.Affordability';
import Codebook from './components/Codebook';

const _heroTitle = 'Data Management System';
const _heroContent = ' Central to activities on this platform is the Data Management System, where our evidence base is securely housed. We use the CKAN data portal framework, the same system used by various governments around the world, to store, manage, and share data across the SCODA ecosystem. From this dynamic, version-controlled and API-responsive data-store, we can efficiently gather and process the myriad sources required for insight generation.Central to activities on this platform is the Data Management System, where our evidence base is securely housed. We use the CKAN data portal framework, the same system used by various governments around the world, to store, manage, and share data across the SCODA ecosystem. From this dynamic, version-controlled and API-responsive data-store, we can efficiently gather and process the myriad sources required for insight generation.';
const _heroInfoTitle = 'Evidence Tools';
const _heroPrimaryColor = '#F05252';
const _heroSecondaryColor = '#F64343';


const _heroTitle_insight = 'Data Stories';
const _heroContent_insight = 'More detailed writeup about data stories.';
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



const _tabs = [
  {
      name: 'SACN', mode:'active',url: 'http://www.sacn.co.za'
  },
  {
      name: 'eThekwini', mode: 'none', url: 'http://www.google.com'
  }
];

// import more components
export default (
    <HashRouter history={hashHistory}>

      {/* <Route exact path="/demographic-modeller" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/demographic-modeller" component={()=> <Hero_Collapsable title={_heroTitle_demographics} 
            content={_heroContent_demographics} 
            infoTitle={_heroInfoTitle_demographics}
            primaryColor={_heroPrimaryColor_demographics} 
            secondaryColor={_heroSecondaryColor_demographics}/>}/>
            <Route exact path="/demographic-modeller" component={()=><DemographicModeller />} /> */}
      

       {/*<Route exact path="/hero_collapsible" component={()=> <Hero_Collapsable title={_heroTitle} 
            content={_heroContent} 
            infoTitle={_heroInfoTitle}
            primaryColor={_heroPrimaryColor} 
            secondaryColor={_heroSecondaryColor}/>}/>
      <Route exact path="/hero" component={()=> <Hero title={_heroTitle} 
            content={_heroContent} 
            infoTitle={_heroInfoTitle}
            primaryColor={_heroPrimaryColor} 
secondaryColor={_heroSecondaryColor}/>}/>*/}

    <Route path='/data-stories-details'  component={()=> <Navigation_scoda box_shadow={true} />}/>
    <Route exact path="/data-stories-details" component={()=> <Hero_Collapsable title={_heroTitle_insight} 
            content={_heroContent_insight} 
            infoTitle={_heroInfoTitle_insight}
            primaryColor={_heroPrimaryColor_insight} 
            secondaryColor={_heroSecondaryColor_insight}/>}/>

      <Route exact path="/data-stories-details" component={()=>
            <DataStoriesDetails />} />
      <Route path='/data-stories-details' component={Footer} />

      <Route path="/codebook" component={() => <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/codebook" component={() => <Hero_Collapsable title={_heroTitle_codebook}
            content={_heroContent_codebook}
            infoTitle={_heroInfoTitle_codebook}
            primaryColor={_heroPrimaryColor_codebook}
            secondaryColor={_heroSecondaryColor_codebook} /> } />
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


      <Route path="/ds-context" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-context" component={()=> <Context />} />
      <Route path="/ds-context" component={Footer} />

      <Route path="/ds-affordability-2018" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route path="/ds-affordability-2018" component={()=> <DataStoriesAffordability />} />
      <Route path="/ds-affordability-2018" component={Footer} />

      <Route exact path="/tabs-and-filters" component={()=><TabsAndFilters tabs={_tabs}/>} />
      
   
      <Route path='/preview-block' component={Preview_block} />
      <Route path='/cta-block' component={CTA_block} />
      <Route path='/sub-footer' component={Sub_Footer} />
      <Route path='/footer' component={Footer} />
      
      <Route path='/datastory' component={DataStories} />

      <Route path='/home' component={()=> <Navigation_scoda box_shadow={false} />} />
      <Route path='/home' component={Hero} />
      <Route path='/home' component={Preview_block} />
      <Route path='/home' component={CTA_block} />
      <Route path='/home' component={CTA_block_analysis} />
      <Route path='/home' component={CTA_block_insights} />
      <Route path='/home' component={Sub_Footer} />
      <Route path='/home' component={Footer} />

      <Route path='/about-us' component={()=> <Navigation_scoda box_shadow={false} />} />
      <Route path='/about-us' component={About} />
      <Route path='/about-us' component={Sub_Footer} />
      <Route path='/about-us' component={Footer} />

      <Route path='/demographic-modeller' component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/demographic-modeller" component={()=> <Hero_Collapsable title={_heroTitle_demo} 
            content={_heroContent_demo} 
            infoTitle={_heroInfoTitle_demo}
            primaryColor={_heroPrimaryColor_demo} 
            secondaryColor={_heroSecondaryColor_demo}/>}/>
      <Route exact path="/demographic-modeller" component={()=><DemographicModeller />} />
      <Route path="/demographic-modeller" component={Footer} />

      <Route path="/explorer" component={()=> <Navigation_scoda box_shadow={true} />} />
      <Route exact path="/explorer" component={()=> <Hero_Collapsable title={_heroTitle_explore} 
            content={_heroContent_explore} 
            infoTitle={_heroInfoTitle_explore}
            primaryColor={_heroPrimaryColor_explore} 
            secondaryColor={_heroSecondaryColor_explore}/>}/>
      <Route exact path="/explorer" component={()=> <IndicatorExplorer />}/>
      <Route path="/explorer" component={Footer} />
    </HashRouter>
);