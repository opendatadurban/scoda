import React,{useState, lazy} from 'react';
const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Human_resources =  lazy(() => import('../components/Socr.Human.Resources'));

const HumanResources = () => {

    return(
        <div className="socr--home">
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <Human_resources/>
            <Footer />
        </div>
    )
};
export default HumanResources;