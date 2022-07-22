import React, { useEffect, useState } from 'react'
import axios from 'axios';

import panelData from '../../../data/panelData';
import { MiniSelect } from './MiniSelect';
import { cityLabels } from '../helpers/helpers';

export const GenericStatsPanel = ({originalValues}) => {

    const [statsValues, setStats] = useState({ totalHouseHolds: 0, houseHoldSize: 0, populationDensity: 0 })
    const [selected, setSelected] = useState('Tshwane')

    useEffect(()=>{

        getStatTotals(originalValues)
    },[selected])

    const getStatTotals = (originalValues) => {

        let totalHouseHolds = 0
        let houseHoldSize = 0
        let populationDensity = 0
    
        if (originalValues.length < 1) return
    
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
    
        setStats({
        
          totalHouseHolds: Math.round((totalHouseHolds + Number.EPSILON) * 100) / 100,
          houseHoldSize: Math.round((houseHoldSize + Number.EPSILON) * 100) / 100,
          populationDensity: Math.round((populationDensity + Number.EPSILON) * 100) / 100
        })
    
      }

    // const [totalHouseHolds, setHouseHolds] = useState(null)
    // const [houseAverage, setAverage] = useState(0)
   

    // useEffect(() => {

    //     const endpoints = [
    //         `/api/explore_new?indicator_id=704&city=${selected === "Cape Town"? "City of Cape Town": selected}&year=2002`, //Total households
    //         `/api-temp/explore/?indicator_id=2&city=${selected === "Cape Town"? "City of Cape Town": selected}&year=2002`, //Gini coefficient being used in selected of house hold size
    //     ]

    //     axios.get(endpoints[0].toString()).then((res) => {
    //         let total = 0
    //         res.data[0].values.forEach((item)=> total += item)
    //         setHouseHolds(Math.round((total + Number.EPSILON) * 100) / 100)
    //     }).catch(()=> console.log("server error in household stats"))

    //     axios.get(endpoints[1].toString()).then((res) => {
    //         let houseSizeData = res.data.table

    //         averageHouseSize(houseSizeData, setAverage)
    //     }).catch(()=>console.log("server error in house size stats"))
    // }, [selected])

    // const averageHouseSize = (houseData, setAverage) => {

    //     if (houseData) {
    //         let total = 0
    //         let count = 0
    //         let average = 0
         
    //         houseData.forEach((item, index) => {

    //             if (item[0] === (selected === "Cape Town"? "City of Cape Town": selected) ) {
    //                 total = total + item[2]
    //                 count++
    //             }else{
    //                 return
    //             }
    //         });

    //         average = total / count
            
    //         setAverage(Math.round((average + Number.EPSILON) * 100) / 100)

    //     } else {
    //         return
    //     }
    // }

    return (
        <div className='stat_display_panel'>
    
                <div className='first_panel'>
            
                        <p className='catagory-name '>Household Overview:  <span>City Averages 2018</span></p>
                    <div className='row'>
                        <div className='stat'>
                            <h1>1023392</h1>
                            <p > TOTAL Households</p>
                        </div>
                        <div className='stat'>
                            <h1>0</h1>
                            <p>Household size</p>
                        </div>
                        <div className='stat'>
                            <h1>1438</h1>
                            <p>Population Density</p>
                        </div>

                    </div>
                </div>
                <div className='second_panel'>
                    <div className='top'>
                        <p className='catagory-name'> Household Overview: <span>Municipality Focus 2018</span></p>
                     
                            <MiniSelect names={['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'eThekwini', 'Mangaung','Msunduzi', 'Nelson Mandela Bay', 'Tshwane']} setSelected={setSelected} selected={selected}/>
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