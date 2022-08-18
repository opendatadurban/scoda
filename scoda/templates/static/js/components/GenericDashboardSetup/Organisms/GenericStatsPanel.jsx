import React, { useEffect, useState } from 'react'
import { MiniSelect } from './MiniSelect';
import { cityLabels } from '../helpers/helpers';
import { getStatTotals, getEmploymentStatTotals,getDwellingsStatTotals } from '../helpers/statsBar';
import { useGlobalClose } from '../../../context';

const makeHumanReadable = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

const initialValues = (dropName) => {

    const statsInit = dropName === "People and Households" ?
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
        { }

    return statsInit
}

export const GenericStatsPanel = ({ originalValues, dropName }) => {

    const [statsValues, setStats] = useState(initialValues(dropName))
    const [selected, setSelected] = useState('eThekwini')

    useEffect(() => {
        if (dropName === "People and Households") {
            getStatTotals(originalValues, cityLabels, setStats, selected)
        } else if (dropName === "Employment" || dropName === "Household Income") {
            getEmploymentStatTotals(setStats, selected)
        }else if (dropName === "Dwellings") {
            getDwellingsStatTotals(originalValues,cityLabels,setStats,selected)
        }

    }, [selected])

    const globalCityDropDownClose = useGlobalClose()

    return (dropName === "People and Households" ?
        <div className='stat_display_panel' onClick={()=>{globalCityDropDownClose()}}>

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
            <div className='stat_display_panel'onClick={()=>{globalCityDropDownClose()}}>

                <div className='first_panel'>

                    <p className='catagory-name '>
                        Main Source of Income:  
                        <span>City Averages 2018</span>
                        </p>
                    <p className="heading">{statsValues.heading}</p>
                    <div className='row'>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.salariesAve[0])}%</h1>
                            <p style={{width:'95px',display:"flex",textAlign:"center"}} > {makeHumanReadable(statsValues.salariesAve[1])}</p>
                        </div>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.businessIncomeAve[0])}%</h1>
                            <p style={{width:'80px',display:"flex",textAlign:"center"}}>{makeHumanReadable(statsValues.businessIncomeAve[1])}</p>
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
                        Main Source of Income:
                             <span>Municipality Focus 2018
                                </span></p>

                        <MiniSelect names={['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'eThekwini', 'Mangaung', 'Msunduzi', 'Nelson Mandela Bay', 'Tshwane']} setSelected={setSelected} selected={selected} />
                    </div>
                    <p className="heading">{statsValues.heading}</p>
                    <div className='bottom'>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.salaries[0])}%</h1>
                            <p style={{width:'95px',display:"flex",textAlign:"center" }} > {makeHumanReadable(statsValues.salaries[1])}</p>
                        </div>
                        <div className='stat'>
                            <h1>{makeHumanReadable(statsValues.businessIncome[0])}%</h1>
                            <p style={{width:'80px',display:"flex",textAlign:"center"}}>{makeHumanReadable(statsValues.businessIncome[1])}</p>
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
            <div className='stat_display_panel'onClick={()=>{globalCityDropDownClose()}}>

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

                    <MiniSelect names={['Buffalo City', 'City of Cape Town','Ekurhuleni', 'eThekwini' ,'City of Joburg' , 'Mangaung','Nelson Mandela Bay',"Tshwane"]} setSelected={setSelected} selected={selected} />
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
        </div> : ""

    )
}