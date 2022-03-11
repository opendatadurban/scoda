import React,{useState, lazy} from 'react';
const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const City_finances =  lazy(() => import('../components/CityFinances/Socr.City.Finances'));

const CityFinances = () => {

    return(
        <div className="socr--home">
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <City_finances/>
            <Footer />
        </div>
    )
};
export default CityFinances;