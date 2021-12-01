import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../../components/Navigation_scoda'));
const DataStories =  lazy(() => import('../../components/DataStories'));
const Footer =  lazy(() => import('../../components/Footer'));

const State_of_finance = () => {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <DataStories />
            <Footer />
        </div>
    )
}

export default State_of_finance
