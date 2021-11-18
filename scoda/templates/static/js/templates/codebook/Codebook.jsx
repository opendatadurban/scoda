import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const Hero_Collapsable  =  lazy(() => import('../../components/Hero.Collapsible'));
const Codebook_ =  lazy(() => import('../../components/Codebook'));
const Footer =  lazy(() => import('../../components/Footer'));

const _heroTitle_codebook = 'Codebook';
const _heroContent_codebook = 'The codebook is a live list of common city indicators providing definitions, methodologies for collection, and data availability of comparable city data. The codebook can be used to locate city data, understand how indicators have been constructed, where data is sourced from, and linked to the data explorer where information can be visualised and analysed.';
const _heroInfoTitle_codebook = 'ANALYSIS TOOLS';
const _heroPrimaryColor_codebook = '#FFAD5A';
const _heroSecondaryColor_codebook = '#FFAD5A';
const _heroLinearGradient_codebook = `linear-gradient(112deg, rgb(255, 173, 90) calc(40% - 1px), rgb(255, 173, 90), #fff calc(38% + 1px))`

const Codebook =()=> {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero_Collapsable title={_heroTitle_codebook}
            content={_heroContent_codebook}
            infoTitle={_heroInfoTitle_codebook}
            primaryColor={_heroPrimaryColor_codebook}
            secondaryColor={_heroSecondaryColor_codebook}
            linearGradient={_heroLinearGradient_codebook}/>
            <Codebook_ />
            <Footer />
        </div>
    )
}

export default Codebook;
