import { useState } from "react";

function GetCardInfo(){
    const [info] = useState(
        [
            {
              header:'Citizen Engagement',
              subheader:" (From SoCR 2021)",
              type:'DASHBOARD',
              class:'_citizen_engagement',
              href:'/scoda/socr#/citizen_engagement'
            },
            // {
            //   header:'City Finances',
            //   subheader:" (From SoCR 2021)",
            //   type:'DASHBOARD',
            //   class:'_city_finances',
            //   href:'/scoda/socr#/city_finances'
            // },
            {
                header:'Human Resources',
                subheader:" (From SoCR 2021)",
                type:'DASHBOARD',
                class:'_human_resources',
                href:'/scoda/socr#/human_resources'
              },
              {
                header:'Service Delivery',
                subheader:" (From SoCR 2021)",
                type:'DASHBOARD',
                class:'_service_delivery',
                href:'/scoda/socr#/service_delivery'
              },
              {
                header:'People and Households',
                subheader:" (From SoCR 2022)",
                type:'DASHBOARD',
                class:'_people_household',
                href:'/scoda/socr#/people_household'
              },
              {
                header:'Employment',
                subheader:" (From SoCR 2022)",
                type:'DASHBOARD',
                class:'_employment',
                href:'/scoda/socr#/employment'
              },
              {
                header:'Dwellings',
                subheader:" (From SoCR 2022)",
                type:'DASHBOARD',
                class:'_dwellings',
                href:'/scoda/socr#/dwellings'
              },
              {
                header:'Household Income',
                subheader:" (From SoCR 2022)",
                type:'DASHBOARD',
                class:'_household_income',
                href:'/scoda/socr#/household_income'
              }
            //   {
            //     header:'State of City Finances 2020: An Introduction',
            //     subheader:" (From SoCR 2021)",
            //     type:'DATA STORY',
            //     class:'_state_of_municipal_finance',
            //     href:'/scoda/toolkit#/ds-state-of-the-city-finance-2020'
            //   },
            //   {
            //   header:'Household Bills & Affordability',
            //   subheader:" (From SoCR 2021)",
            //   type:'DATA STORY',
            //   class:'_household_bills_affordability',
            //   href:'/scoda/toolkit#/ds-household-bills-and-affordibility'
            // },
          ]
    );

    return {info}
}
export default GetCardInfo;