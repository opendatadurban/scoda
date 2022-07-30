import React,{lazy} from 'react';

const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const PeopleHousehold = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

const Home = () => {

    return(
        <div className="socr--home" style={{backgroundColor:"white",overflowX:'hidden'}}>
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <PeopleHousehold 
            indicator_ids= {[704, "manual", 706, 699, 701, 711]}
            minYear={2015}
            maxYear={2018}/>
            <Footer />
        </div>
    )
};

export default Home;