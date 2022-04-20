import React, { Component,useEffect, useState } from 'react'
import Select from '../Select'
import panelData from '../../data/panelData.js';

const HumanResourcesStatPanel = () => {

    const [place,setPlace] = useState('Buffalo City')
    const [total_municipal_posts, setTotal_municipal_posts] = useState(39300000)
    const [irregular_expenditure, setirregular_expenditure] =  useState(4300000)
    const [senior_management_vacancies, setSenior_management_vacancies] =  useState(3800000)
    //set data
    const [data,setData] = useState(panelData[0])
    const [expenditure,setExpenditure] = useState(panelData[3].expenditure)

    
    let municipality_focus = [
        {
            percentage: total_municipal_posts,
            type: `Irregular<br/>Expenditure`
        },
        {
            percentage: irregular_expenditure,
            type: `Fruitless & Wasteful<br/>Expenditure`
        },
        {
            percentage: senior_management_vacancies,
            type: `Unauthorised<br/>Expenditure`
        },

    ]

    const places = (e) => {
        setPlace(e.target.value);
        console.log('selected city :',e.target.value)
        if(e.target.value ==='Buffalo City'){
            setTotal_municipal_posts(39300000)
            setirregular_expenditure(43000000)
            setSenior_management_vacancies(3800000) 
        }
        if(e.target.value ==='City of Cape Town'){
            setTotal_municipal_posts(33455412)
            setirregular_expenditure(1323421)
            setSenior_management_vacancies(1234234) 
        }
        if(e.target.value ==='City of Joburg'){
            setTotal_municipal_posts(12345876)
            setirregular_expenditure(45783111)
            setSenior_management_vacancies(5432567) 
        }
        if(e.target.value ==='Ekurhuleni'){
            setTotal_municipal_posts(1234564)
            setirregular_expenditure(1432234)
            setSenior_management_vacancies(2345678) 
        }
        if(e.target.value ==='eThekwini'){
            setTotal_municipal_posts(123453)
            setirregular_expenditure(1234565)
            setSenior_management_vacancies(6554321) 
        }
        if(e.target.value ==='Mangaung'){
            setTotal_municipal_posts(1234563)
            setirregular_expenditure(34554321)
            setSenior_management_vacancies(3345534) 
        }
        if(e.target.value ==='Nelson Mandela Bay'){
            setTotal_municipal_posts(32343454)
            setirregular_expenditure(4234515)
            setSenior_management_vacancies(5612222) 
        }
        if(e.target.value ==='Tshwane'){
            setTotal_municipal_posts(2123323)
            setirregular_expenditure(4133212)
            setSenior_management_vacancies(12123211) 
        }
    }
    return (
        <div className='stat_display_panel'>
            <div className='row stat_display_panel--numbers w-100'>
                <div className='col-md-6 first_panel'>
                <div className='stat_display_panel--averages'>
                    <p className='catagory-name '>Averages 2019 <span>(Expenditure)</span></p>
                    </div>
                    <div className='row'>
                        {expenditure.map((item, i) => (
                            <div className='col-md-4 p-0'>
                                <h1>R{(Math.abs(Number(item.percentage)) / 1.0e+6).toFixed(2) + "M"}</h1>
                                <p dangerouslySetInnerHTML={{__html:item.type}}></p>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-8'> <p className='catagory-name '>Municipality Focus 2018: {place}</p></div>
                        <div className='col-md-3'>
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
                                <h1 className={item.percentage > expenditure[i].percentage ? 'green' : item.percentage < expenditure[i].percentage ? 'red' : 'none'}>R{(Math.abs(Number(item.percentage)) / 1.0e+6).toFixed(2) + "M"}</h1>
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