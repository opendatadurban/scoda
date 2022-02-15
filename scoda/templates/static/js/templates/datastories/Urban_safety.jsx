import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const DataStory =  lazy(() => import('../../components/DataStories.UrbanSafety'));
const Footer =  lazy(() => import('../../components/Footer'));

const Urban_safety = () => {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <DataStory />
            <Footer />
        </div>
    )
}

export default Urban_safety;
