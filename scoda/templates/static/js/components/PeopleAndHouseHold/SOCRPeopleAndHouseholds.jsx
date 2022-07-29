import React from 'react'
import { GenericDashBoard } from '../GenericDashboardSetup/GenericDashboard'

const SOCRPeopleAndHouseholds = () => {

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
            }
        ]
    }
    console.log(subNavContent)
    return (
       
            <GenericDashBoard indicator_ids={[704, "manual", 706, 699, 701, 711]}
                minYear={2015} maxYear={2018} subNavContent={subNavContent} gridItems={6} />
        

    )
}

export default SOCRPeopleAndHouseholds