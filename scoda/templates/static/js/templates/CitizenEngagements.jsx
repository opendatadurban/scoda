import React,{useState, lazy} from 'react';
const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const CitizensEngagements =  lazy(() => import('../components/Socr.Citizens.Engagement'));

const Home = () => {

    return(
        <div className="socr--home">
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <CitizensEngagements/>
            <Footer />
        </div>
    )
};
export default Home;