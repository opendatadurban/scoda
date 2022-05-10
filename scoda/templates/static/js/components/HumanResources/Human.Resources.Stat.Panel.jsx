import React, { Component,useEffect, useState } from 'react'
import Select from '../Select'
import axios from 'axios';

import panelData from '../../data/panelData.js';

const HumanResourcesStatPanel = () => {

    const [place,setPlace] = useState('Buffalo City')
    const [total_municipal_posts, setTotal_municipal_posts] = useState(29465)
    const [irregular_expenditure, setirregular_expenditure] = useState(64)
    const [senior_management_vacancies, setSenior_management_vacancies] = useState(51)
    //set data
    const [data,setData] = useState(panelData[0])
    const [municipal_posts_and_vacancies,setMunicipal_posts_and_vacancies] = useState(panelData[2].municipal_posts_and_vacancies)

    
    let municipality_focus = [
        {
            percentage: total_municipal_posts,
            type: `Total Municipal<br/>Posts`
        },
        {
            percentage: irregular_expenditure,
            type: `Municipal Management<br/>Vacancies`
        },
        {
            percentage: senior_management_vacancies,
            type: `Senior Management<br/>Vacancies`
        },

    ]

    const places = (e) => {
        setPlace(e.target.value);
        console.log('selected city :',e.target.value)
        if(e.target.value ==='Buffalo City'){
            setTotal_municipal_posts(40)
            setirregular_expenditure(64)
            setSenior_management_vacancies(51) 
        }
        if(e.target.value ==='City of Cape Town'){
            setTotal_municipal_posts(12)
            setirregular_expenditure(32)
            setSenior_management_vacancies(56) 
        }
        if(e.target.value ==='City of Joburg'){
            setTotal_municipal_posts(34)
            setirregular_expenditure(89)
            setSenior_management_vacancies(56) 
        }
        if(e.target.value ==='Ekurhuleni'){
            setTotal_municipal_posts(45)
            setirregular_expenditure(34)
            setSenior_management_vacancies(75) 
        }
        if(e.target.value ==='eThekwini'){
            setTotal_municipal_posts(12)
            setirregular_expenditure(34)
            setSenior_management_vacancies(34) 
        }
        if(e.target.value ==='Mangaung'){
            setTotal_municipal_posts(90)
            setirregular_expenditure(54)
            setSenior_management_vacancies(34) 
        }
        if(e.target.value ==='Nelson Mandela Bay'){
            setTotal_municipal_posts(34)
            setirregular_expenditure(45)
            setSenior_management_vacancies(56) 
        }
        if(e.target.value ==='Tshwane'){
            setTotal_municipal_posts(23)
            setirregular_expenditure(42)
            setSenior_management_vacancies(12) 
        }
    }
    return (
        <div className='stat_display_panel'>
            <div className='row stat_display_panel--numbers w-100'>
                <div className='col-md-6 first_panel'>
                <div className='stat_display_panel--averages'>
                <p className='catagory-name '>Averages 2017 <span>(Municipal Posts and Vacancies)</span></p>
                </div>
                    <div className='row'>
                        {municipal_posts_and_vacancies.map((item, i) => (
                            <div className='col-md-4 p-0'>
                                <h1>{item.percentage}</h1>
                                <p dangerouslySetInnerHTML={{__html:item.type}}></p>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-8'> <p className='catagory-name catagory-name--focusName'>Municipality Focus 2018: {place}</p></div>
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
                        {municipality_focus.map((item, i) => (
                            <div className='col-md-4'>
                                {i !=0 ? <h1 className={item.percentage < municipal_posts_and_vacancies[i].percentage ? 'green' : item.percentage > municipal_posts_and_vacancies[i].percentage ? 'red' : 'none'}>{item.percentage}</h1> :<h1>{item.percentage}</h1>}
                                <p dangerouslySetInnerHTML={{__html:item.type}}></p>
                            </div>
                        )
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HumanResourcesStatPanel;