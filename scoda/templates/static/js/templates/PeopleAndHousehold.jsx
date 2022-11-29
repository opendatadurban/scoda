import React, { lazy} from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';


const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
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
        active: false
      },
      {
        name: "Travel Time",
        href: "socr#/travel_time",
        active: false
      }
    ]
  }

    return (

            <div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }}
              >
                <Navigation_scoda logoHide={false} box_shadow={true} />
                <PeopleHousehold
                    indicator_ids={[704, "n1", 706, 699, 701, 711]}
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