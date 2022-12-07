import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const DataStoriesDetails =  lazy(() => import('../../components/DataStoriesDetails'));
const Hero_Collapsable  =  lazy(() => import('../../components/Hero.Collapsible'));
const Footer =  lazy(() => import('../../components/Footer'));

const _heroTitle_insight = 'Data Stories';
const _heroContent_insight = 'Data stories are a way to understand complex information and data using a narrative that appeals to interested readers.<br/><br/>They can be thought of as a series of dashboards connected with explainer text.  The topic is clearly defined and explored using information broken into understandable chunks which result in a finding or conclusion with calls to action to encourage the reader to learn and explore more.';
const _heroInfoTitle_insight = 'INSIGHT TOOLS';
const _heroPrimaryColor_insight = '#4F9DA6';
const _heroSecondaryColor_insight = '#4F9DA6';
const _heroLinearGradient_datastories = `linear-gradient(112deg, rgba(79,157,166,1) calc(54% - 1px), rgba(79,157,166,1), #fff calc(38% + 1px))`;

const Home = () => {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero_Collapsable title={_heroTitle_insight} 
            content={_heroContent_insight} 
            infoTitle={_heroInfoTitle_insight}
            primaryColor={_heroPrimaryColor_insight} 
            secondaryColor={_heroSecondaryColor_insight}
            linearGradient={_heroLinearGradient_datastories} 
            collapseHeight={447}/>
            <DataStoriesDetails />
            <Footer />
        </div>
    )
}

export default Home;
