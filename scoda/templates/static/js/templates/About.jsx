import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const About  =  lazy(() => import('../components/About'));
const SubFooter =  lazy(() => import('../components/Sub_Footer'));
const Footer =  lazy(() => import('../components/Footer'));

const About_ =()=> {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <About />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default About_;
