import React, { useEffect, useState } from 'react'
import { MiniSelect } from './MiniSelect';
import { cityLabels } from '../helpers/helpers';

export const GenericStatsPanel = ({ originalValues }) => {

    const [statsValues, setStats] = useState({ totalHouseHolds: 0, houseHoldSize: 0, populationDensity: 0,
        totalHouseHoldsAverage: 0,
        houseHoldSizeAverage: 0,
        populationDensityAverage: 0})
    const [selected, setSelected] = useState('Tshwane')

    useEffect(() => {

        getStatTotals(originalValues)
    }, [selected])

    const getStatTotals = (originalValues) => {

        let totalHouseHolds = 0
        let houseHoldSize = 0
        let populationDensity = 0
        let totalHouseHoldsAverage = 0
        let houseHoldSizeAverage = 0
        let populationDensityAverage = 0

        if (originalValues.length < 1) return
        //Totals
        originalValues[0].forEach((values, index) => {

            let valueIndex = values.labels.indexOf(cityLabels(selected))

            if (values.year !== "2018" && valueIndex !== -1) return

            totalHouseHolds = values.values[valueIndex]
        })

        originalValues[1].forEach((values, index) => {

            let valueIndex = values.labels.indexOf(cityLabels(selected))

            if (values.year !== "2018" && valueIndex !== -1) return

            houseHoldSize = values.values[valueIndex]
        })

        originalValues[4].forEach((values, index) => {

            let valueIndex = values.labels.indexOf(cityLabels(selected))

            if (values.year !== "2018" && valueIndex !== -1) return

            populationDensity = values.values[valueIndex]
        })

        //Averages
        let thAverageCount = 0
        let hsAverageCount = 0
        let pdAverageCount = 0

        originalValues[0].forEach((values, index) => {

            if ( values.year !== "2018") return

            thAverageCount++
            totalHouseHoldsAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
        })

        originalValues[1].forEach((values, index) => {

            if (values.year !== "2018") return
            hsAverageCount++
            houseHoldSizeAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
        })

        originalValues[4].forEach((values, index) => {

            if (values.year !== "2018") return

            pdAverageCount++
            populationDensityAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
        })

        setStats({

            totalHouseHolds: Math.round((totalHouseHolds + Number.EPSILON) * 100) / 100,
            houseHoldSize: Math.round((houseHoldSize + Number.EPSILON) * 100) / 100,
            populationDensity: Math.round((populationDensity + Number.EPSILON) * 100) / 100,
            totalHouseHoldsAverage: Math.round((totalHouseHoldsAverage + Number.EPSILON) * 100) / 100,
            houseHoldSizeAverage: Math.round((houseHoldSizeAverage + Number.EPSILON) * 100) / 100,
            populationDensityAverage: Math.round((populationDensityAverage + Number.EPSILON) * 100) / 100
        })

    }

    return (
        <div className='stat_display_panel'>

            <div className='first_panel'>

                <p className='catagory-name '>Household Overview:  <span>City Averages 2018</span></p>
                <div className='row'>
                    <div className='stat'>
                        <h1>{statsValues.totalHouseHoldsAverage}</h1>
                        <p > TOTAL Households</p>
                    </div>
                    <div className='stat'>
                        <h1>{statsValues.houseHoldSizeAverage}</h1>
                        <p>Household size</p>
                    </div>
                    <div className='stat'>
                        <h1>{statsValues.populationDensityAverage}</h1>
                        <p>Population Density</p>
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
                        <h1>{statsValues.totalHouseHolds}</h1>
                        <p>TOTAL Households</p>
                    </div>
                    <div className='stat'>
                        {/* <h1 className={municipal_management_vacancies < mangement_mun_posts_sum ? 'green' : municipal_management_vacancies > mangement_mun_posts_sum ? 'red' : 'none'}>{municipal_management_vacancies}</h1> */}
                        <h1 >{statsValues.houseHoldSize}</h1>
                        <p>Household size</p>
                    </div>
                    <div className='stat'>
                        {/* <h1 className={senior_posts_sum < senior_management_vacancies ? 'green' : senior_posts_sum > senior_management_vacancies ? 'red' : 'none'}>{senior_management_vacancies}</h1> */}
                        <h1 >{statsValues.populationDensity}</h1>
                        <p>Population Density</p>
                    </div>
                </div>
            </div>
        </div>
    )
}