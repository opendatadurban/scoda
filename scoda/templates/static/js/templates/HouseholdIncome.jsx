import React,{lazy,useContext,useState} from 'react';
import { peopleHouseholdColors } from '../components/GenericDashboardSetup/helpers/helpers';
import { SelectContext } from '../context';

const Footer =  lazy(() => import('../components/Footer'));
const Navigation_scoda =  lazy(() => import('../components/Navigation_scoda'));
const HouseholdIncome = lazy(() => import('../components/GenericDashboardSetup/GenericChart'));

const Home = () => {

  const [selectOpen, setSelect] = useState(false)

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
            active: true
          }
        ]
      }

    return(
         <SelectContext.Provider value={{ selectOpen, setSelect }}>
        <div className="socr--home" style={{backgroundColor:"white",overflowX:'hidden'}}
        onClick={() => {
          if (selectOpen) { setSelect(false) }
        }}>
            <Navigation_scoda logoHide={false} box_shadow={true} />
            <HouseholdIncome 
            indicator_ids= {[901,"indicator text box"]}
            minYear={2015}
            maxYear={2018}
            subNavContent={subNavContent}
            gridItems={2}
            dropdownName={subNavContent.dropdownMenu[6].name}
            colors={peopleHouseholdColors}
            />
            <Footer />
        </div> </SelectContext.Provider>
    )
};

export default Home;