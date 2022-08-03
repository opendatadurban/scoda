import React,{lazy} from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';

const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const Employment = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
            active: false
          },
          {
            name: "Employment",
            href: "socr#/employment",
            active: true
          },
          {
            name: "Dwellings",
            href: "socr#/dwellings",
            active: false
          }
        ]
      }

    return(
        <div className="socr--home" style={{backgroundColor:"white",overflowX:'hidden'}}>
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <Employment 
            indicator_ids= {[935,934,"n8", 933]}
            minYear={2015}
            maxYear={2018}
            subNavContent={subNavContent}
            gridItems={4}
            dropdownName={subNavContent.dropdownMenu[4].name}
            colors={peopleHouseholdColors}/>
            <Footer />
        </div>
    )
};

export default Home;