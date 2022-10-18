import React, { lazy } from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';
import { SelectContextState} from '../context';


const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
const FoodSecurity = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

const Home = () => {


  const subNavContent = {
    dropdownMenu: [
      {//0
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
        name: "Food Security, Literacy and Inequality", //7
        href: "socr#/food_security",
        active: true
      },
      {
        name: "Life Expectancy & Health",
        href: "socr#/life_expectancy",
        active: false
      },
      {
        name: "Education",
        href: "socr#/education",
        active: false
      },
      {
        name: "Sustainability",
        href: "socr#/sustainability",
        active: false
      }
    ]
  }

  return (

<SelectContextState>
<div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }} >
        <Navigation_scoda logoHide={false} box_shadow={true} />
        <FoodSecurity
          indicator_ids={[ 1069,  1070, 1071,"n2","n3",959]}
          minYear={2015}
          maxYear={2018}
          subNavContent={subNavContent}
          gridItems={6}
          dropdownName={subNavContent.dropdownMenu[7].name}
          colors={peopleHouseholdColors} />
        <Footer />
      </div>
</SelectContextState>

  )
};

export default Home;