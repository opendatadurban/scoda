import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const DataStory =  lazy(() => import('../../components/DataStories.Affordability'));
const Footer =  lazy(() => import('../../components/Footer'));

const Affordability = () => {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <DataStory />
            <Footer />
        </div>
    )
}

export default Affordability;
