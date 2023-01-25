import React, { lazy } from 'react';
import { greenGradientColors } from '../components/GenericDashboardSetup/helpers/helpers';
import { SelectContextState } from '../context';


const Footer = lazy(() => import('../components/Footer'));
const Navigation_scoda = lazy(() => import('../components/Navigation_scoda'));
const CitizenEngagement = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
                active: true
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

        <SelectContextState>
            <div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }} >
                <Navigation_scoda logoHide={false} box_shadow={true} />
                <CitizenEngagement
                    indicator_ids={[989, 985, 987, 983]}
                    minYear={2014}
                    maxYear={2017}
                    subNavContent={subNavContent}
                    gridItems={4}
                    dropdownName={subNavContent.dropdownMenu[1].name}
                    colors={greenGradientColors} />
                <Footer />
            </div>
        </SelectContextState>
    )
};

export default Home;