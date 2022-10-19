import React, { lazy } from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';
import { SelectContextState } from '../context';

const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
const Dwellings = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
        active: true
      },
      {
        name: "Household Income",
        href: "socr#/household_income",
        active: false
      }
      // {
      //   name: "Food Security, Literacy and Inequality", //7
      //   href: "socr#/food_security",
      //   active: false
      // },
      // {
      //   name: "Life Expectancy & Health",
      //   href: "socr#/life_expectancy",
      //   active: false
      // },
      // {
      //   name: "Education",
      //   href: "socr#/education",
      //   active: false
      // },
      // {
      //   name: "Sustainability",
      //   href: "socr#/sustainability",
      //   active: false
      // }
    ]
  }

  return (
    
      <div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }}>
        <Navigation_scoda logoHide={false} box_shadow={true} />
        <Dwellings
          indicator_ids={["n35", "n36", "combination", "n37", "n38"]}
          minYear={2015}
          maxYear={2018}
          subNavContent={subNavContent}
          gridItems={5}
          dropdownName={subNavContent.dropdownMenu[5].name}
          colors={peopleHouseholdColors} />
        <Footer />
      </div>
   
  )
};

export default Home;