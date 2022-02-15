import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Hero_Collapsable  =  lazy(() => import('../components/Hero.Collapsible'));
const DemographicModeller =  lazy(() => import('../components/DemographicModeller'));
const Footer =  lazy(() => import('../components/Footer'));

const _heroTitle_demo = 'Demographics Modeller';
const _heroContent_demo = 'With the demographic projection tool we provide both a powerful predictor of internal migration within South African metros, as well as a framework for the development of open, collaborative model building that is based on diverse and novel data sources.';
const _heroInfoTitle_demo = 'ANALYSIS TOOLS';
const _heroPrimaryColor_demo = '#FFAD5A';
const _heroSecondaryColor_demo = '#FFAD5A';
const _heroLinearGradient_demo = `linear-gradient(112deg, rgb(255, 173, 90) calc(57% - 1px), rgb(255, 173, 90), #fff calc(38% + 1px))`

const Demographic =()=> {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero_Collapsable title={_heroTitle_demo}
            content={_heroContent_demo}
            infoTitle={_heroInfoTitle_demo}
            primaryColor={_heroPrimaryColor_demo}
            secondaryColor={_heroSecondaryColor_demo}
            linearGradient={_heroLinearGradient_demo}/>
            <DemographicModeller />
            <Footer />
        </div>
    )
}

export default Demographic;
