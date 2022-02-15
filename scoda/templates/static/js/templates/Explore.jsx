import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Hero_Collapsable  =  lazy(() => import('../components/Hero.Collapsible'));
const IndicatorExplorer =  lazy(() => import('../components/IndicatorExplorer'));
const Footer =  lazy(() => import('../components/Footer'));

const _heroTitle_explore = 'Data Explorer';
const _heroContent_explore = `Our Indicators: We use a diverse range of carefully selected and tested indicators to compile our State of Cities Report.  
You can browse, analyse and download these individual indicators using our Data Explorer tool.`;
const _heroInfoTitle_explore = 'ANALYSIS TOOLS';
const _heroPrimaryColor_explore = '#FFAD5A';
const _heroSecondaryColor_explore = '#FFAD5A';
const _heroLinearGradient_codebook = `linear-gradient(112deg, rgb(255, 173, 90) calc(40% - 1px), rgb(255, 173, 90), #fff calc(38% + 1px))`;

const Explore_ =()=> {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero_Collapsable title={_heroTitle_explore} 
            content={_heroContent_explore} 
            infoTitle={_heroInfoTitle_explore}
            primaryColor={_heroPrimaryColor_explore} 
            secondaryColor={_heroSecondaryColor_explore}
            linearGradient={_heroLinearGradient_codebook}/>
            <IndicatorExplorer />
            <Footer />
        </div>
    )
}

export default Explore_;
