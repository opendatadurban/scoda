import React, { lazy } from 'react';
import { mhr_text_only_data } from '../components/GenericDashboardSetup/data/data';
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
                active: true
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
                indicator_ids={[970, 968, 968, 969]}
                minYear={2014}
                maxYear={2018}
                subNavContent={subNavContent}
                gridItems={4}
                dropdownName={subNavContent.dropdownMenu[2].name}
                colors={peopleHouseholdColors}
            />
            <Footer />
        </div>

    )
};

export default Home;