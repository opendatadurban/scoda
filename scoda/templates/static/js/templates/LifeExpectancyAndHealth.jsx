import React, { lazy } from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';
import { SelectContextState} from '../context';


const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
const LifeExpectancy = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
        active: false
      },
      {
        name: "Dwellings",
        href: "socr#/dwellings",
        active: false
      },
      {
        name: "Household Income",
        href: "socr#/household_income",
        active: false
      },
      {
        name: "Life Expectancy & Health",
        href: "socr#/life_expectancy",
        active: true
      }
    ]
  }

  return (

<SelectContextState>
<div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }} >
        <Navigation_scoda logoHide={false} box_shadow={true} />
        <LifeExpectancy
          indicator_ids={[719, 721, 1081, 1081]}
          minYear={2015}
          maxYear={2018}
          subNavContent={subNavContent}
          gridItems={4}
          dropdownName={subNavContent.dropdownMenu[7].name}
          colors={peopleHouseholdColors} />
        <Footer />
      </div>
</SelectContextState>

  )
};

export default Home;