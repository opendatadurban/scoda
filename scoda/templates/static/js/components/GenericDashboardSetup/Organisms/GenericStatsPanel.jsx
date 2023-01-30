import React, { useEffect, useState } from 'react'
import { MiniSelect } from './MiniSelect';
import { cityLabels } from '../helpers/helpers';
import {
    getStatTotals, getEmploymentStatTotals, getDwellingsStatTotals,
    getFoodSecurityStatTotals, getEducationStatTotals, getLifeExpectancyStatTotals, getTravelTimeStatsTotals, getICTStatsTotal, getTransportModeStatsTotal, getPublicTransportSpendStatsTotals, getServiceDeliveryStatTotals, getMHRStatTotals
} from '../helpers/statsBar';
import { useGlobalClose } from '../../../context';
import { useCloseAllErrors } from '../../../context';

const makeHumanReadable = (number) => {

    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

const initialValues = (dropName) => {

    const statsInit = dropName === "Municipal Human Resources" ? {
        adequite: [0, "TOTAL MUNICIPAL POSTS"],
        inadequite: [0, "MUNICIPAL MANAGEMENT VACANCIES"],
        severelyInadequite: [0, "SENIOR MANAGEMENT VACANCIES"],

        adequiteTot: [0, "TOTAL MUNICIPAL POSTS"],
        inadequiteTot: [0, "MUNICIPAL MANAGEMENT VACANCIES"],
        severelyInadequiteTot: [0, "SENIOR MANAGEMENT VACANCIES"],
  
    } : dropName === "Service Delivery" ? {
        adequite: [0, "WATER SUPPLY"],
        inadequite: [0, "BASIC SANITATION"],
        severelyInadequite: [0, "ELECTRICITY SUPPLY"],
        fourth: [0, "REFUSE REMOVAL"],
        adequiteTot: [0, "WATER SUPPLY"],
        inadequiteTot: [0, "BASIC SANITATION"],
        severelyInadequiteTot: [0, "ELECTRICITY SUPPLY"],
        fourthTot: [0, "REFUSE REMOVAL"]
    } :
        dropName === "People and Households" ?
            {
                totalHouseHolds: [0, "TOTAL Households"], houseHoldSize: [0, "Household size"], populationDensity: [0, "Population Density"],
                totalHouseHoldsAverage: [0, "TOTAL Households"],
                houseHoldSizeAverage: [0, "Household size"],
                populationDensityAverage: [0, "Population Density"],
                heading: null
            } :
            dropName === "Employment" || dropName === "Household Income" ? {
                heading: "Proportion of households whose main source of income is:",
                salaries: [0, "Salaries/wages/ commission"], businessIncome: [0, "Income from a business"], remittances: [0, "Remittances"], grants: [0, "Grants"], other: [0, "Other"],
                salariesAve: [0, "Salaries/wages/ commission"], businessIncomeAve: [0, "Income from a business"], remittancesAve: [0, "Remittances"], grantsAve: [0, "Grants"], otherAve: [0, "Other"]
            } :
                dropName === "Dwellings" ? {
                    formal: [0, "Formal Dwelling"], informal: [0, "Informal Dwelling"], traditional: [0, "Traditional Dwelling"], other: [0, "Other Dwelling"],
                    formalTot: [0, "Formal Dwelling"], informalTot: [0, "Informal Dwelling"], traditionalTot: [0, "Traditional Dwelling"], otherTot: [0, "Other Dwelling"],

                } :
                    dropName === "Food Security, Literacy and Inequality" ? {
                        adequite: [0, "Adequate Access to Food"],
                        inadequite: [0, "Inadequate Access to Food"],
                        severelyInadequite: [0, "Severely Inadequate Access to Food"],
                        adequiteTot: [0, "Adequate Access to Food"],
                        inadequiteTot: [0, "Inadequate Access to Food"],
                        severelyInadequiteTot: [0, "Severely Inadequate Access to Food"],
                    } :
                        dropName === "Life Expectancy and Health" ? {
                            aveMale: [0, "AVE. Male life Expectancy"],
                            aveFemale: [0, "AVE. Female life Expectancy"],
                            publicHealthCare: [0, "Public Healthcare Usage"],
                            medicalAid: [0, "Medical Aid Coverage"],
                            aveMaleTot: [0, "AVE. Male life Expectancy"],
                            aveFemaleTot: [0, "AVE. Female life Expectancy"],
                            publicHealthCareTot: [0, "Public Healthcare Usage"],
                            medicalAidTot: [0, "Medical Aid Coverage"],
                        } :
                            dropName === "Education" ? {
                                noSchooling: [0, "No Schooling"],
                                primarySchooling: [0, "Primary School Completed"],
                                secondarySchooling: [0, "Secondary SChool Completed"],
                                tertiaryEducation: [0, "Tertiary Edu. Completed"],
                                noSchoolingTot: [0, "No Schooling"],
                                primarySchoolingTot: [0, "Primary School Completed"],
                                secondarySchoolingTot: [0, "Secondary SChool Completed"],
                                tertiaryEducationTot: [0, "Tertiary Edu. Completed"],
                            } :
                                dropName === "Sustainability" ?
                                    null :
                                    dropName === "Travel Time" ? {
                                        first: [0, "15 minutes or less"],
                                        second: [0, "15 - 30 Minutes"],
                                        third: [0, "31 - 60 Minutes"],
                                        fourth: [0, "61 - 90 Minutes"],
                                        fifth: [0, "More Than 90 Minutes"],
                                        firstTot: [0, "15 minutes or less"],
                                        secondTot: [0, "15 - 30 Minutes"],
                                        thirdTot: [0, "31 - 60 Minutes"],
                                        fourthTot: [0, "61 - 90 Minutes"],
                                        fifthTot: [0, "More Than 90 Minutes"],
                                    } : dropName === "ICT Infrastructure" ? {
                                        first: [0, "Fixed Line Telephone"],
                                        second: [0, "Mobile Telephone"],
                                        third: [0, "internet ConnectioN"],
                                        firstTot: [0, "Fixed Line Telephone"],
                                        secondTot: [0, "Mobile Telephone"],
                                        thirdTot: [0, "internet ConnectioN"],
                                    } : dropName === "Transport Mode" ? {
                                        first: [0, "Walk"],
                                        second: [0, "MINIBUS TAXI"],
                                        third: [0, "BUS"],
                                        fourth: [0, "TRAIN"],
                                        fifth: [0, "OWN CAR"],
                                        firstTot: [0, "Walk"],
                                        secondTot: [0, "MINIBUS TAXI"],
                                        thirdTot: [0, "BUS"],
                                        fourthTot: [0, "TRAIN"],
                                        fifthTot: [0, "OWN CAR"]
                                    } : dropName === "Public Transport Spend" ? {
                                        first: [0, "< 10% of Household income"],
                                        second: [0, "10 - 20% of Household income"],
                                        third: [0, "20 - 30% of Household income"],
                                        fourth: [0, "> 30% of Household income"],

                                        firstTot: [0, "< 10% of Household income"],
                                        secondTot: [0, "10 - 20% of Household income"],
                                        thirdTot: [0, "20 - 30% of Household income"],
                                        fourthTot: [0, "> 30% of Household income"],
                                    } :
                                        {}

    return statsInit
}

export const GenericStatsPanel = ({ originalValues, dropName }) => {

    const [statsValues, setStats] = useState(initialValues(dropName))
    const [selected, setSelected] = useState('eThekwini')

    useEffect(() => {
        if (dropName === "Municipal Human Resources") {

            getMHRStatTotals(setStats, selected)
        }
        else if (dropName === "Service Delivery") {

            getServiceDeliveryStatTotals(setStats, selected)
        }
        else if (dropName === "People and Households") {

            getStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Employment" || dropName === "Household Income") {

            getEmploymentStatTotals(setStats, selected)
        } else if (dropName === "Dwellings") {

            getDwellingsStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Food Security, Literacy and Inequality") {

            getFoodSecurityStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Life Expectancy and Health") {

            getLifeExpectancyStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Education") {

            getEducationStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Sustainability") {

            setStats(null)
        } else if (dropName === "Travel Time") {

            getTravelTimeStatsTotals(setStats, selected)
        } else if (dropName === "ICT Infrastructure") {

            getICTStatsTotal(setStats, selected)
        } else if (dropName === "Transport Mode") {

            getTransportModeStatsTotal(setStats, selected)
        } else if (dropName === "Public Transport Spend") {

            getPublicTransportSpendStatsTotals(setStats, selected)
        }

    }, [selected])

    const globalCityDropDownClose = useGlobalClose()
    const closeAlerts = useCloseAllErrors()

    const closeAllAlerts = () => {
        globalCityDropDownClose()

        let isClearable = false

        closeAlerts.error.forEach((item) => {
            if (item.errorThrown === true) {
                isClearable = true
            }
        })

        if (isClearable) {

            const newState = closeAlerts.error.map((obj) => {

                return { errorThrown: false };
            });

            closeAlerts.setError(newState);
        }
    }

    return (<div className="stats_wrapper" onClick={closeAllAlerts}>
        {dropName === "People and Households" ?
            <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>

                <div className='first_panel'>

                    <p className='catagory-name '>Household Overview:  <span>City Averages 2018</span></p>
                    <div className='row'>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.totalHouseHoldsAverage[0])}</h1>
                            <p > {makeHumanReadable(statsValues.totalHouseHoldsAverage[1])}</p>
                        </div>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.houseHoldSizeAverage[0])}</h1>
                            <p>{makeHumanReadable(statsValues.houseHoldSizeAverage[1])}</p>
                        </div>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.populationDensityAverage[0])}</h1>
                            <p>{makeHumanReadable(statsValues.populationDensityAverage[1])}</p>
                        </div>

                    </div>
                </div>
                <div className='second_panel'>
                    <div className='top'>
                        <p className='catagory-name'> Household Overview: <span>Municipality Focus 2018</span></p>

                        <MiniSelect names={['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'eThekwini', 'Mangaung', 'Msunduzi', 'Nelson Mandela Bay', 'Tshwane']} setSelected={setSelected} selected={selected} />
                    </div>
                    <div className='bottom'>
                        <div className='stat'>
                            {/* <h1 className={total_municipal_posts < total_mun_posts_sum ? 'green' : total_municipal_posts > total_mun_posts_sum ? 'red' : 'none'}>{total_municipal_posts}</h1> */}
                            <h1>{makeHumanReadable(statsValues.totalHouseHolds[0])}</h1>
                            <p>{makeHumanReadable(statsValues.totalHouseHolds[1])}</p>
                        </div>
                        <div className='stat'>
                            {/* <h1 className={municipal_management_vacancies < mangement_mun_posts_sum ? 'green' : municipal_management_vacancies > mangement_mun_posts_sum ? 'red' : 'none'}>{municipal_management_vacancies}</h1> */}
                            <h1 >{makeHumanReadable(statsValues.houseHoldSize[0])}</h1>
                            <p>{makeHumanReadable(statsValues.houseHoldSize[1])}</p>
                        </div>
                        <div className='stat'>
                            {/* <h1 className={senior_posts_sum < senior_management_vacancies ? 'green' : senior_posts_sum > senior_management_vacancies ? 'red' : 'none'}>{senior_management_vacancies}</h1> */}
                            <h1 >{makeHumanReadable(statsValues.populationDensity[0])}</h1>
                            <p>{makeHumanReadable(statsValues.populationDensity[1])}</p>
                        </div>
                    </div>
                </div>
            </div> : dropName === "Employment" || dropName === "Household Income" ?
                <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>

                    <div className='first_panel'>

                        <p className='catagory-name '>
                            {"Main Source of Income: "}
                            <span>City Averages 2018</span>
                        </p>
                        <p className="heading">{statsValues.heading}</p>
                        <div className='row'>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.salariesAve[0])}%</h1>
                                <p style={{ width: '95px', display: "flex", textAlign: "center" }} > {makeHumanReadable(statsValues.salariesAve[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.businessIncomeAve[0])}%</h1>
                                <p style={{ width: '80px', display: "flex", textAlign: "center" }}>{makeHumanReadable(statsValues.businessIncomeAve[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.remittancesAve[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.remittancesAve[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.grantsAve[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.grantsAve[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.otherAve[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.otherAve[1])}</p>
                            </div>
                        </div>
                    </div>
                    <div className='second_panel'>
                        <div className='top'>
                            <p className='catagory-name'>
                                {"Main Source of Income: "}
                                <span>Municipality Focus 2018
                                </span></p>

                            <MiniSelect names={['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'Mangaung', 'Nelson Mandela Bay', 'Tshwane', 'eThekwini']} setSelected={setSelected} selected={selected} />
                        </div>
                        <p className="heading">{statsValues.heading}</p>
                        <div className='bottom'>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.salaries[0])}%</h1>
                                <p style={{ width: '95px', display: "flex", textAlign: "center" }} > {makeHumanReadable(statsValues.salaries[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.businessIncome[0])}%</h1>
                                <p style={{ width: '80px', display: "flex", textAlign: "center" }}>{makeHumanReadable(statsValues.businessIncome[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.remittances[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.remittances[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.grants[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.grants[1])}</p>
                            </div>
                            <div className='stat'>
                                <h1>{makeHumanReadable(statsValues.other[0])}%</h1>
                                <p>{makeHumanReadable(statsValues.other[1])}</p>
                            </div>
                        </div>
                    </div>
                </div> : dropName === "Dwellings" ?
                    <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>

                        <div className='first_panel'>

                            <p className='catagory-name '>Dwelling Type:  <span>City Averages 2018</span></p>
                            <div className='row'>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.formalTot[0])}%</h1>
                                    <p > {makeHumanReadable(statsValues.formalTot[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.informalTot[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.informalTot[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.traditionalTot[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.traditionalTot[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.otherTot[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.otherTot[1])}</p>
                                </div>

                            </div>
                        </div>
                        <div className='second_panel'>
                            <div className='top'>
                                <p className='catagory-name'> Dwelling Type: <span>Municipality Focus 2018</span></p>

                                <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                            </div>
                            <div className='bottom'>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.formal[0])}%</h1>
                                    <p > {makeHumanReadable(statsValues.formal[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.informal[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.informal[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.traditional[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.traditional[1])}</p>
                                </div>
                                <div className='stat'>
                                    <h1>{makeHumanReadable(statsValues.other[0])}%</h1>
                                    <p>{makeHumanReadable(statsValues.other[1])}</p>
                                </div>
                            </div>
                        </div>
                    </div> : dropName === "Food Security, Literacy and Inequality" ?
                        <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                            <div className='first_panel'>
                                <p className='catagory-name '>Access to Food Overview:  <span>City Averages 2018</span></p>
                                <div className='row'>
                                    <div className='stat adequiteTot'>
                                        <h1>{makeHumanReadable(statsValues.adequiteTot[0])}%</h1>
                                        <p > {makeHumanReadable(statsValues.adequiteTot[1])}</p>
                                    </div>
                                    <div className='stat inadequiteTot'>
                                        <h1>{makeHumanReadable(statsValues.inadequiteTot[0])}%</h1>
                                        <p>{makeHumanReadable(statsValues.inadequiteTot[1])}</p>
                                    </div>
                                    <div className='stat severelyInadequiteTot'>
                                        <h1>{makeHumanReadable(statsValues.severelyInadequiteTot[0])}%</h1>
                                        <p>{makeHumanReadable(statsValues.severelyInadequiteTot[1])}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='second_panel'>
                                <div className='top'>
                                    <p className='catagory-name'> Access to Food Overview: <span>Municipality Focus 2018</span></p>

                                    <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                                </div>
                                <div className='bottom'>
                                    <div className='stat adequite'>
                                        <h1>{makeHumanReadable(statsValues.adequite[0])}%</h1>
                                        <p > {makeHumanReadable(statsValues.adequite[1])}</p>
                                    </div>
                                    <div className='stat inadequite'>
                                        <h1>{makeHumanReadable(statsValues.inadequite[0])}%</h1>
                                        <p>{makeHumanReadable(statsValues.inadequite[1])}</p>
                                    </div>
                                    <div className='stat severelyInadequite'>
                                        <h1>{makeHumanReadable(statsValues.severelyInadequite[0])}%</h1>
                                        <p>{makeHumanReadable(statsValues.severelyInadequite[1])}</p>
                                    </div>

                                </div>
                            </div>
                        </div> : dropName === "Life Expectancy and Health" ?
                            <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                <div className='first_panel '>
                                    <p className='catagory-name '>Life & Health Overview:  <span>City Averages 2018</span></p>
                                    <div className='row closer'>
                                        {/* <div className='stat aveMaleTot'>
                                            <h1>{makeHumanReadable(statsValues.aveMaleTot[0])}</h1>
                                            <p > {makeHumanReadable(statsValues.aveMaleTot[1])}</p>
                                        </div>
                                        <div className='stat aveFemaleTot'>
                                            <h1>{makeHumanReadable(statsValues.aveFemaleTot[0])}</h1>
                                            <p>{makeHumanReadable(statsValues.aveFemaleTot[1])}</p>
                                        </div> */}
                                        <div className='stat publicHealthCareTot'>
                                            <h1>{makeHumanReadable(statsValues.publicHealthCareTot[0])}%</h1>
                                            <p>{makeHumanReadable(statsValues.publicHealthCareTot[1])}</p>
                                        </div>
                                        <div className='stat medicalAidTot'>
                                            <h1>{makeHumanReadable(statsValues.medicalAidTot[0])}%</h1>
                                            <p>{makeHumanReadable(statsValues.medicalAidTot[1])}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='second_panel'>
                                    <div className='top'>
                                        <p className='catagory-name'> Life & Health Overview: <span>Municipality Focus 2018</span></p>

                                        <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                                    </div>
                                    <div className='bottom closer'>
                                        {/* <div className='stat aveMale'>
                                            <h1>{makeHumanReadable(statsValues.aveMale[0])}</h1>
                                            <p > {makeHumanReadable(statsValues.aveMale[1])}</p>
                                        </div>
                                        <div className='stat aveFemale'>
                                            <h1>{makeHumanReadable(statsValues.aveFemale[0])}</h1>
                                            <p>{makeHumanReadable(statsValues.aveFemale[1])}</p>
                                        </div> */}
                                        <div className='stat publicHealthCare'>
                                            <h1>{makeHumanReadable(statsValues.publicHealthCare[0])}%</h1>
                                            <p>{makeHumanReadable(statsValues.publicHealthCare[1])}</p>
                                        </div>
                                        <div className='stat medicalAid'>
                                            <h1>{makeHumanReadable(statsValues.medicalAid[0])}%</h1>
                                            <p>{makeHumanReadable(statsValues.medicalAid[1])}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : dropName === "Education" ?
                                <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                    <div className='first_panel'>
                                        <p className='catagory-name '>Schooling Milestones:  <span>City Averages 2018</span></p>
                                        <p className="title">PROPORTION OF POPULATION WITH:</p>
                                        <div className='row'>

                                            <div className='stat noSchoolingTot'>
                                                <h1>{makeHumanReadable(statsValues.noSchoolingTot[0])}%</h1>
                                                <p > {makeHumanReadable(statsValues.noSchoolingTot[1])}</p>
                                            </div>
                                            <div className='stat primarySchoolingTot'>
                                                <h1>{makeHumanReadable(statsValues.primarySchoolingTot[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.primarySchoolingTot[1])}</p>
                                            </div>
                                            <div className='stat secondarySchoolingTot'>
                                                <h1>{makeHumanReadable(statsValues.secondarySchoolingTot[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.secondarySchoolingTot[1])}</p>
                                            </div>
                                            <div className='stat tertiaryEducationTot'>
                                                <h1>{makeHumanReadable(statsValues.tertiaryEducationTot[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.tertiaryEducationTot[1])}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='second_panel'>
                                        <div className='top'>
                                            <p className='catagory-name'> Schooling Milestones: <span>Municipality Focus 2018</span></p>

                                            <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                                        </div>
                                        <p className="title_header">PROPORTION OF POPULATION WITH:</p>
                                        <div className='bottom'>
                                            <div className='stat noSchooling'>
                                                <h1>{makeHumanReadable(statsValues.noSchooling[0])}%</h1>
                                                <p > {makeHumanReadable(statsValues.noSchooling[1])}</p>
                                            </div>
                                            <div className='stat primarySchooling'>
                                                <h1>{makeHumanReadable(statsValues.primarySchooling[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.primarySchooling[1])}</p>
                                            </div>
                                            <div className='stat secondarySchooling'>
                                                <h1>{makeHumanReadable(statsValues.secondarySchooling[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.secondarySchooling[1])}</p>
                                            </div>
                                            <div className='stat tertiaryEducation'>
                                                <h1>{makeHumanReadable(statsValues.tertiaryEducation[0])}%</h1>
                                                <p>{makeHumanReadable(statsValues.tertiaryEducation[1])}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> : dropName === "Sustainability" ?
                                    "" : dropName === "Travel Time" ?
                                        <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                            <div className='first_panel'>
                                                <p className='catagory-name '>Travel Time:  <span>City Averages 2018</span></p>
                                                <p className="title">PROPORTION OF TRAVELLERS WHO TRAVEL:</p>
                                                <div className='row'>

                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.firstTot[0])}%</h1>
                                                        <p > {makeHumanReadable(statsValues.firstTot[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.secondTot[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.secondTot[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.thirdTot[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.thirdTot[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.fourthTot[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.fourthTot[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.fifthTot[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.fifthTot[1])}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='second_panel'>
                                                <div className='top'>
                                                    <p className='catagory-name'> Travel Time: <span>Municipality Focus 2018</span></p>

                                                    <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"].sort()} setSelected={setSelected} selected={selected} />
                                                </div>
                                                <p className="title_header">PROPORTION OF TRAVELLERS WHO TRAVEL:</p>
                                                <div className='bottom'>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.first[0])}%</h1>
                                                        <p > {makeHumanReadable(statsValues.first[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.second[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.second[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.third[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.third[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.fourth[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.fourth[1])}</p>
                                                    </div>
                                                    <div className='stat tertiaryEducationTot'>
                                                        <h1>{makeHumanReadable(statsValues.fifth[0])}%</h1>
                                                        <p>{makeHumanReadable(statsValues.fifth[1])}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : dropName === "ICT Infrastructure" ?
                                            <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                                <div className='first_panel'>
                                                    <p className='catagory-name '>Infrastructure:  <span>City Averages 2018</span></p>
                                                    <p className="title">NUMBER OF POPULATION WITH ACCESS TO:</p>
                                                    <div className='row'>

                                                        <div className='stat noSchoolingTot'>
                                                            <h1>{makeHumanReadable(statsValues.firstTot[0])}</h1>
                                                            <p > {makeHumanReadable(statsValues.firstTot[1])}</p>
                                                        </div>
                                                        <div className='stat primarySchoolingTot'>
                                                            <h1>{makeHumanReadable(statsValues.secondTot[0])}</h1>
                                                            <p>{makeHumanReadable(statsValues.secondTot[1])}</p>
                                                        </div>
                                                        <div className='stat secondarySchoolingTot'>
                                                            <h1>{makeHumanReadable(statsValues.thirdTot[0])}</h1>
                                                            <p>{makeHumanReadable(statsValues.thirdTot[1])}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='second_panel'>
                                                    <div className='top'>
                                                        <p className='catagory-name'> Infrastructure: <span>Municipality Focus 2018</span></p>

                                                        <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"].sort()} setSelected={setSelected} selected={selected} />
                                                    </div>
                                                    <p className="title_header">NUMBER OF POPULATION WITH ACCESS TO:</p>
                                                    <div className='bottom'>
                                                        <div className='stat small'>
                                                            <h1>{makeHumanReadable(statsValues.first[0])}</h1>
                                                            <p > {makeHumanReadable(statsValues.first[1])}</p>
                                                        </div>
                                                        <div className='stat small'>
                                                            <h1>{makeHumanReadable(statsValues.second[0])}</h1>
                                                            <p>{makeHumanReadable(statsValues.second[1])}</p>
                                                        </div>
                                                        <div className='stat small'>
                                                            <h1>{makeHumanReadable(statsValues.third[0])}</h1>
                                                            <p>{makeHumanReadable(statsValues.third[1])}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div> : dropName === "Transport Mode" ?
                                                <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                                    <div className='first_panel'>
                                                        <p className='catagory-name '>Passengers by Mode:  <span>City Averages 2018</span></p>
                                                        <p className="title">PROPORTION OF TRAVELLERS WHO:</p>
                                                        <div className='row'>

                                                            <div className='stat noSchoolingTot'>
                                                                <h1>{makeHumanReadable(statsValues.firstTot[0])}%</h1>
                                                                <p > {makeHumanReadable(statsValues.firstTot[1])}</p>
                                                            </div>
                                                            <div className='stat extra_small'>
                                                                <h1>{makeHumanReadable(statsValues.secondTot[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.secondTot[1])}</p>
                                                            </div>
                                                            <div className='stat secondarySchoolingTot'>
                                                                <h1>{makeHumanReadable(statsValues.thirdTot[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.thirdTot[1])}</p>
                                                            </div>
                                                            <div className='stat tertiaryEducationTot'>
                                                                <h1>{makeHumanReadable(statsValues.fourthTot[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.fourthTot[1])}</p>
                                                            </div>
                                                            <div className='stat tertiaryEducationTot'>
                                                                <h1>{makeHumanReadable(statsValues.fifthTot[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.fifthTot[1])}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='second_panel'>
                                                        <div className='top'>
                                                            <p className='catagory-name'> Passengers by Mode: <span>Municipality Focus 2018</span></p>

                                                            <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"].sort()} setSelected={setSelected} selected={selected} />
                                                        </div>
                                                        <p className="title_header">PROPORTION OF TRAVELLERS WHO:</p>
                                                        <div className='bottom'>
                                                            <div className='stat noSchoolingTot'>
                                                                <h1>{makeHumanReadable(statsValues.first[0])}%</h1>
                                                                <p > {makeHumanReadable(statsValues.first[1])}</p>
                                                            </div>
                                                            <div className='stat extra_small'>
                                                                <h1>{makeHumanReadable(statsValues.second[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.second[1])}</p>
                                                            </div>
                                                            <div className='stat secondarySchoolingTot'>
                                                                <h1>{makeHumanReadable(statsValues.third[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.third[1])}</p>
                                                            </div>
                                                            <div className='stat tertiaryEducationTot'>
                                                                <h1>{makeHumanReadable(statsValues.fourth[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.fourth[1])}</p>
                                                            </div>
                                                            <div className='stat tertiaryEducationTot'>
                                                                <h1>{makeHumanReadable(statsValues.fifth[0])}%</h1>
                                                                <p>{makeHumanReadable(statsValues.fifth[1])}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                dropName === "Public Transport Spend" ?
                                                    <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                                        <div className='first_panel'>
                                                            <p className='catagory-name '>Travel Costs:  <span>City Averages 2018</span></p>
                                                            <p className="title">Proportion of Spending on Public Transport by households:</p>
                                                            <div className='row'>

                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.firstTot[0])}%</h1>
                                                                    <p > {makeHumanReadable(statsValues.firstTot[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.secondTot[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.secondTot[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.thirdTot[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.thirdTot[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.fourthTot[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.fourthTot[1])}</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className='second_panel'>
                                                            <div className='top'>
                                                                <p className='catagory-name'> Travel Costs: <span>Municipality Focus 2018</span></p>

                                                                <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"].sort()} setSelected={setSelected} selected={selected} />
                                                            </div>
                                                            <p className="title_header">Proportion of Spending on Public Transport by households:</p>
                                                            <div className='bottom'>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.first[0])}%</h1>
                                                                    <p > {makeHumanReadable(statsValues.first[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.second[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.second[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.third[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.third[1])}</p>
                                                                </div>
                                                                <div className='stat small'>
                                                                    <h1>{makeHumanReadable(statsValues.fourth[0])}%</h1>
                                                                    <p>{makeHumanReadable(statsValues.fourth[1])}</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div> : dropName === "Service Delivery" ?
                                                        <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                                            <div className='first_panel'>
                                                                <p className='catagory-name '>Averages 2018: <span>Access To Basic Services</span></p>
                                                                <div className='row'>
                                                                    <div className='stat adequiteTot'>
                                                                        <h1>{makeHumanReadable(statsValues.adequiteTot[0])}%</h1>
                                                                        <p > {makeHumanReadable(statsValues.adequiteTot[1])}</p>
                                                                    </div>
                                                                    <div className='stat inadequiteTot'>
                                                                        <h1>{makeHumanReadable(statsValues.inadequiteTot[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.inadequiteTot[1])}</p>
                                                                    </div>
                                                                    <div className='stat severelyInadequiteTot'>
                                                                        <h1>{makeHumanReadable(statsValues.severelyInadequiteTot[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.severelyInadequiteTot[1])}</p>
                                                                    </div>
                                                                    <div className='stat severelyInadequiteTot'>
                                                                        <h1>{makeHumanReadable(statsValues.fourthTot[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.fourthTot[1])}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='second_panel'>
                                                                <div className='top'>
                                                                    <p className='catagory-name'>Service Delivery Overview: <span>Municipality Focus 2018</span></p>

                                                                    <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                                                                </div>
                                                                <div className='bottom'>
                                                                    <div className='stat adequite'>
                                                                        <h1>{makeHumanReadable(statsValues.adequite[0])}%</h1>
                                                                        <p > {makeHumanReadable(statsValues.adequite[1])}</p>
                                                                    </div>
                                                                    <div className='stat inadequite'>
                                                                        <h1>{makeHumanReadable(statsValues.inadequite[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.inadequite[1])}</p>
                                                                    </div>
                                                                    <div className='stat severelyInadequite'>
                                                                        <h1>{makeHumanReadable(statsValues.severelyInadequite[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.severelyInadequite[1])}</p>
                                                                    </div>
                                                                    <div className='stat severelyInadequite'>
                                                                        <h1>{makeHumanReadable(statsValues.fourth[0])}%</h1>
                                                                        <p>{makeHumanReadable(statsValues.fourth[1])}</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div> : dropName === "Municipal Human Resources" ?
                                                            <div className='stat_display_panel' onClick={() => { globalCityDropDownClose() }}>
                                                                <div className='first_panel'>
                                                                    <p className='catagory-name '>Averages 2017: <span>Municipal Posts And Vacancies</span></p>
                                                                    <div className='row'>
                                                                        <div className='stat adequiteTot'>
                                                                            <h1>{makeHumanReadable(statsValues.adequiteTot[0])}</h1>
                                                                            <p > {makeHumanReadable(statsValues.adequiteTot[1])}</p>
                                                                        </div>
                                                                        <div className='stat inadequiteTot'>
                                                                            <h1>{makeHumanReadable(statsValues.inadequiteTot[0])}</h1>
                                                                            <p>{makeHumanReadable(statsValues.inadequiteTot[1])}</p>
                                                                        </div>
                                                                        <div className='stat severelyInadequiteTot'>
                                                                            <h1>{makeHumanReadable(statsValues.severelyInadequiteTot[0])}</h1>
                                                                            <p>{makeHumanReadable(statsValues.severelyInadequiteTot[1])}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className='second_panel'>
                                                                    <div className='top'>
                                                                        <p className='catagory-name'>Municipal Human Resources Overview: <span>{
                                                                           selected
                                                                        }</span>
                                                                        </p>

                                                                        <MiniSelect names={['Buffalo City', 'City of Cape Town', 'Ekurhuleni', 'eThekwini', 'City of Joburg', 'Mangaung', 'Nelson Mandela Bay', "Tshwane"]} setSelected={setSelected} selected={selected} />
                                                                    </div>
                                                                    <div className='bottom'>
                                                                        <div className='stat adequite'>
                                                                            <h1>{makeHumanReadable(statsValues.adequite[0])}</h1>
                                                                            <p > {makeHumanReadable(statsValues.adequite[1])}</p>
                                                                        </div>
                                                                        <div className='stat inadequite'>
                                                                            <h1>{makeHumanReadable(statsValues.inadequite[0])}</h1>
                                                                            <p>{makeHumanReadable(statsValues.inadequite[1])}</p>
                                                                        </div>
                                                                        <div className='stat severelyInadequite'>
                                                                            <h1>{makeHumanReadable(statsValues.severelyInadequite[0])}</h1>
                                                                            <p>{makeHumanReadable(statsValues.severelyInadequite[1])}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> :

                                                            ""}
    </div>
    )
}