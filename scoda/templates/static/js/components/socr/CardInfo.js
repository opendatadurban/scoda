import { useState } from "react";

function GetCardInfo(){
    const [info] = useState(
        [
            {
              header:'Citizen Engagement',
              subheader:" (From SoCR 2021)",
              type:'DASHBOARD',
              class:'_citizen_engagement',
              href:'/'
            },
            {
              header:'City Finances',
              subheader:" (From SoCR 2021)",
              type:'DASHBOARD',
              class:'_city_finances',
              href:'/'
            },
            {
              header:'Household Bills & Affordability',
              subheader:" (From SoCR 2021)",
              type:'DATA STORY',
              class:'_household_bills_affordability',
              href:'/'
            },
            {
                header:'Human Resources',
                subheader:" (From SoCR 2021)",
                type:'DASHBOARD',
                class:'_human_resources',
                href:'/'
              },
              {
                header:'Service Delivery',
                subheader:" (From SoCR 2021)",
                type:'DASHBOARD',
                class:'_service_delivery',
                href:'/'
              },
              {
                header:'State of Municipal Finance',
                subheader:" (From SoCR 2021)",
                type:'DATA STORY',
                class:'_state_of_municipal_finance',
                href:'/'
              },
          ]
    );

    return {info}
}
export default GetCardInfo;