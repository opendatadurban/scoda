import React, { lazy } from 'react';

const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Hero  =  lazy(() => import('../components/Hero'));
const Preview_block =  lazy(() => import('../components/Preview_block'));
const CTA_block =  lazy(() => import('../components/CTA_block'));
const CTA_block_analysis =  lazy(() => import('../components/CTA_block_analysis'));
const CTA_block_insights =  lazy(() => import('../components/CTA_block_insights'));
const Sub_Footer =  lazy(() => import('../components/Sub_Footer'));
const Footer =  lazy(() => import('../components/Footer'));

const Home = () => {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Hero/>
            <Preview_block/>
            <CTA_block />
            <CTA_block_analysis />
            <CTA_block_insights />
            <Sub_Footer />
            <Footer />
        </div>
    )
}
export default Home;