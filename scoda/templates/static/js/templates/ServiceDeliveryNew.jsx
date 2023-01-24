import React, { lazy } from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';
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
                active: true
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
                active: false
            },
            {
                name: "Travel Time",
                href: "socr#/travel_time",
                active: false
            }
        ]
    }

    const fbs_data_2018 = [76201, 320406, 237330, 174687, 15848, 29658, 73593, 57250]
    const fbs_data_2018_percent = [31.63, 25.96, 19.14, 15.07, 0.86, 11.28, 21.07, 5.02]
    const labels = ["BUF", "CPT", "EKU", "ETH", "JHB", "MAN", "NMA", "TSH"]
    const color = "#28a745"
    const manualToggleValues = [{
        values: [fbs_data_2018, fbs_data_2018_percent],
        labels: labels,
        year: "2018",
   
    }]

    return (

        <SelectContextState>
            <div className="socr--home" style={{ backgroundColor: "white", overflowX: 'hidden' }} >
                <Navigation_scoda logoHide={false} box_shadow={true} />
                <CitizenEngagement
                    indicator_ids={[392, 384, 12, 10, 1114,
                        { manual_toggle_values: manualToggleValues }
                    ]}
                    minYear={2000}
                    maxYear={2020}
                    subNavContent={subNavContent}
                    gridItems={6}
                    dropdownName={subNavContent.dropdownMenu[0].name}
                    colors={peopleHouseholdColors} />
                <Footer />
            </div>
        </SelectContextState>
    )
};

export default Home;