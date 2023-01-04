import React, { lazy } from 'react';
import { indicator_text_box_data, public_transport_text_box_data, sustainability_text_box_data, sustainability_text_box_data_2, travel_time_text_box_data, travel_time_text_box_data_2 } from '../components/GenericDashboardSetup/data/data';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';

const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
const PublicTransportSpend = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
        name: "Food Security, Literacy and Inequality",
        href: "socr#/food_security",
        active: false
      },
      {
        name: "Life Expectancy and Health",
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
      },
      {
        name: "ICT Infrastructure",
        href: "socr#/infrastructure",
        active: false

      },
      {
        name: "Transport Mode",
        href: "socr#/transport_mode",
        active: false
      },
      {
        name: "Public Transport Spend",
        href: "socr#/public_transport_spend",
        active: true
      },
      {
        name: "Travel Time",
        href: "socr#/travel_time",
        active: false
      }
    ]
  }

  return (
    <div className="socr--home" id="content" style={{ backgroundColor: "white", overflowX: 'hidden' }}>
      <Navigation_scoda logoHide={false} box_shadow={true} />
     
        <PublicTransportSpend
          indicator_ids={[1084,1085,1086,1087]}
          minYear={2015}
          maxYear={2018}
          subNavContent={subNavContent}
          gridItems={4}
          dropdownName={subNavContent.dropdownMenu[13].name}
          colors={peopleHouseholdColors}
          secondaryChart={false}
          genericIndex={0}
        />
          <PublicTransportSpend
          indicator_ids={[public_transport_text_box_data, "indicator text box"]}
          minYear={2015}
          maxYear={2018}
          subNavContent={subNavContent}
          gridItems={2}
          dropdownName={subNavContent.dropdownMenu[13].name}
          colors={peopleHouseholdColors}
          secondaryChart={true}
          genericIndex={1}
        />
        <div style={{ height: "34px", backgroundColor: "rgb(241, 241, 241)" }}></div>
      <Footer />
    </div>
  )
};

export default Home;