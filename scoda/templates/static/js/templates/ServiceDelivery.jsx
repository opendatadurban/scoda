import React, { lazy } from 'react';
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Dashboard  =  lazy(() => import('../components/ServiceDelivery/Socr.Service.Delivery'));
const Footer =  lazy(() => import('../components/Footer'));

const Socr =()=> {
    return (
        <div>
            <Navigation_scoda box_shadow={true} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Socr;
