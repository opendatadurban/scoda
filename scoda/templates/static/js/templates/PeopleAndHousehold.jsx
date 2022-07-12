import React,{lazy} from 'react';

const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const PeopleHousehold = lazy(() => import('../components/GenericDashboardSetup/Socr.PeopleHousehold.Engagement'));

const Home = () => {

    return(
        <div className="socr--home">
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <PeopleHousehold/>
            <Footer />
        </div>
    )
};

export default Home;