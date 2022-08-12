import React,{lazy,useContext} from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';

const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const PeopleHousehold = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

const Home = () => {



    const subNavContent = {
        dropdownMenu: [
          {
            name: "Service Delivery",
            href: "socr#/service_delivery",
            active: false
          },
          {
            name: "Citizen Engagement",
            href: "socr#/citizen_engagement",
            active: false
          },
          {
            name: "Municipal Human Resources",
            href: "socr#/human_resources",
            active: false
          },
          {
            name: "People and Households",
            href: "socr#/people_household",
            active: true
          },
          {
            name: "Employment",
            href: "socr#/employment",
            active: false
          }
        ]
      }

    return(
        <div className="socr--home" style={{backgroundColor:"white",overflowX:'hidden'}}>
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <PeopleHousehold 
            indicator_ids= {[704, "n1", 706, 699, 701, 711]}
            minYear={2015}
            maxYear={2018} subNavContent={subNavContent}
            gridItems={6}
            dropdownName={subNavContent.dropdownMenu[3].name}
            colors={peopleHouseholdColors}
            />
            <Footer />
        </div>
    )
};

export default Home;