import React, { lazy } from 'react';
import { useParams } from "react-router-dom";

const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const Hero_Collapsable  =  lazy(() => import('../../components/Hero.Collapsible'));
const CBIndicatorExplorer =  lazy(() => import('../../components/codebook-explorer/CBIndicatorExplorer'));
const Footer =  lazy(() => import('../../components/Footer'));

const _heroTitle_explore = 'Data Explorer';
const _heroContent_explore = `Our Indicators: We use a diverse range of carefully selected and tested indicators to compile our State of Cities Report.  
You can browse, analyse and download these individual indicators using our Data Explorer tool.`;
const _heroInfoTitle_explore = 'ANALYSIS TOOLS';
const _heroPrimaryColor_explore = '#FFAD5A';
const _heroSecondaryColor_explore = '#FFAD5A';

const Explore = () => {
    const { id } = useParams();
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero_Collapsable title={_heroTitle_explore}
            content={_heroContent_explore}
            infoTitle={_heroInfoTitle_explore}
            primaryColor={_heroPrimaryColor_explore}
            secondaryColor={_heroSecondaryColor_explore}/>
            <CBIndicatorExplorer id={id} />
            <Footer />
        </div>
    )
}
export default Explore;