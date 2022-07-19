import React, { Component, useEffect, useState } from 'react'
import Select from '../../Select'
import axios from 'axios';

import panelData from '../../../data/panelData';

export const GenericStatsPanel = () => {

    const [place, setPlace] = useState('Tshwane')

    const [data, setData] = useState(panelData[0])

    const [totalHouseHolds, setHouseHolds] = useState(null)
    const [houseAverage, setAverage] = useState(0)

    useEffect(() => {

        const endpoints = [
            `/api/explore_new?indicator_id=704&city=${place}&year=2002`, //Total households
            `/api-temp/explore/?indicator_id=2&city=${place}&year=2002`, //Gini coefficient being used in place of house hold size
        ]

        axios.get(endpoints[0].toString()).then((res) => {
            let total = 0
            res.data[0].values.forEach((item)=> total += item)
            setHouseHolds(Math.round((total + Number.EPSILON) * 100) / 100)
        }).catch(()=> console.log("server error in household stats"))

        axios.get(endpoints[1].toString()).then((res) => {
            let houseSizeData = res.data.table

            averageHouseSize(houseSizeData, setAverage)
        }).catch(()=>console.log("server error in house size stats"))
    }, [place])

    const averageHouseSize = (houseData, setAverage) => {

        if (houseData) {
            let total = 0
            let count = 0
            let average = 0
         
            houseData.forEach((item, index) => {

                if (item[0] === place ) {
                    total = total + item[2]
                    count++
                }else{
                    return
                }
            });

            average = total / count
            
            setAverage(Math.round((average + Number.EPSILON) * 100) / 100)

        } else {
            return
        }
    }

    const places = (e) => {

        setPlace(e.target.value);
    }

    return (
        <div className='stat_display_panel'>
            <div className='row stat_display_panel--numbers w-100'>
                <div className='col-md-6 first_panel'>
                    <div className='stat_display_panel--averages'>
                        <p className='catagory-name '>Household Overview:  <span>City Averages 2018</span></p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 p-0'>
                            <h1>1023392</h1>
                            <p > TOTAL Households</p>
                        </div>
                        <div className='col-md-4 p-0'>
                            <h1>0</h1>
                            <p>Household size</p>
                        </div>
                        <div className='col-md-4 p-0'>
                            <h1>1438</h1>
                            <p>Population Density</p>
                        </div>

                    </div>
                </div>
                <div className='col-md-6 second_panel'>
                    <div className='row'>
                        <div className='col-md-8'> <p className='catagory-name catagory-name--focusName'> Household Overview: <span>Municipality Focus 2018</span></p></div>
                        <div className='col-md-3 select-container'>
                            <Select
                                value={place}
                                placeholder='Select a City'
                                id={data.places.id}
                                multiple={data.places.multiple}
                                data={data.places.data}
                                name='gender'
                                onChange={places}
                            /></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            {/* <h1 className={total_municipal_posts < total_mun_posts_sum ? 'green' : total_municipal_posts > total_mun_posts_sum ? 'red' : 'none'}>{total_municipal_posts}</h1> */}
                            <h1 className={'none'}>{totalHouseHolds}</h1>
                            <p>TOTAL Households</p>
                        </div>
                        <div className='col-md-4'>
                            {/* <h1 className={municipal_management_vacancies < mangement_mun_posts_sum ? 'green' : municipal_management_vacancies > mangement_mun_posts_sum ? 'red' : 'none'}>{municipal_management_vacancies}</h1> */}
                            <h1 className={'none'}>{houseAverage}</h1>
                            <p>Household size</p>
                        </div>
                        <div className='col-md-4'>
                            {/* <h1 className={senior_posts_sum < senior_management_vacancies ? 'green' : senior_posts_sum > senior_management_vacancies ? 'red' : 'none'}>{senior_management_vacancies}</h1> */}
                            <h1 className={'none'}>0</h1>
                            <p>Population Density</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}