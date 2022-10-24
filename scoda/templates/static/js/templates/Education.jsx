import React,{lazy} from 'react';
import { education_text_box_data, indicator_text_box_data, sustainability_text_box_data, sustainability_text_box_data_2 } from '../components/GenericDashboardSetup/data/data';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';


const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const HouseholdIncome = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

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
        active: true
      },
      {
        name: "Sustainability",
        href: "socr#/sustainability",
        active: false
      }
    ]
  }

    return(

        <div className="socr--home" style={{backgroundColor:"white",overflowX:'hidden'}}>
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <HouseholdIncome 
            indicator_ids= {[education_text_box_data,"indicator text box"]}
            minYear={2015}
            maxYear={2018}
            subNavContent={subNavContent}
            gridItems={2}
            dropdownName={subNavContent.dropdownMenu[9].name}
            colors={peopleHouseholdColors}
            />
            <Footer />
        </div> 
    )
};

export default Home;