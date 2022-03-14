import React, { Component,useEffect, useState } from 'react'
import Select from './Select'
import axios from 'axios';

import panelData from '../data/panelData.js';

const CitizenEngagmentStatPanel = () => {

    const [place,setPlace] = useState('Buffalo City')
    const [voter_turnout_national, setVoter_turnout_national] = useState(40)
    const [registered_national, setRegistered_national] = useState(64)
    const [voter_turnout_local, setVoter_turnout_local] = useState(51)
    const [registered_local, setRegistered_local] = useState(62)
    //set data
    const [data,setData] = useState(panelData[0])
    const [voting_and_reg_2019_averages,setVoting_and_reg_2019_averages] = useState(panelData[1].voting_and_reg_2019_averages)

    
    let municipality_focus = [
        {
            percentage: voter_turnout_national,
            type: `VOTER TURNOUT<br/>NATIONAL`
        },
        {
            percentage: registered_national,
            type: `REGISTERED<br/>NATIONAL`
        },
        {
            percentage: voter_turnout_local,
            type: `VOTER TURNOUT<br/>LOCAL`
        },
        {
            percentage: registered_local,
            type: `REGISTERED<br/>LOCAL`
        }
    ]

    const places = (e) => {
        setPlace(e.target.value);
        console.log('selected city :',e.target.value)
        if(e.target.value ==='Buffalo City'){
            setVoter_turnout_national(40)
            setRegistered_national(64)
            setVoter_turnout_local(51) 
            setRegistered_local(62)
        }
        if(e.target.value ==='City of Cape Town'){
            setVoter_turnout_national(12)
            setRegistered_national(32)
            setVoter_turnout_local(56) 
            setRegistered_local(43)
        }
        if(e.target.value ==='City of Joburg'){
            setVoter_turnout_national(34)
            setRegistered_national(89)
            setVoter_turnout_local(56) 
            setRegistered_local(43)
        }
        if(e.target.value ==='Ekurhuleni'){
            setVoter_turnout_national(45)
            setRegistered_national(34)
            setVoter_turnout_local(75) 
            setRegistered_local(56)
        }
        if(e.target.value ==='eThekwini'){
            setVoter_turnout_national(12)
            setRegistered_national(34)
            setVoter_turnout_local(34) 
            setRegistered_local(56)
        }
        if(e.target.value ==='Mangaung'){
            setVoter_turnout_national(90)
            setRegistered_national(54)
            setVoter_turnout_local(34) 
            setRegistered_local(67)
        }
        if(e.target.value ==='Nelson Mandela Bay'){
            setVoter_turnout_national(34)
            setRegistered_national(45)
            setVoter_turnout_local(56) 
            setRegistered_local(64)
        }
        if(e.target.value ==='Tshwane'){
            setVoter_turnout_national(23)
            setRegistered_national(42)
            setVoter_turnout_local(12) 
            setRegistered_local(76)
        }
    }
    return (
        <div className='stat_display_panel'>
            <div className='row stat_display_panel--numbers w-100'>
                <div className='col-md-6 first_panel'>
                    <p className='catagory-name '>Averages 2019 <span>(Voting and Registration)</span></p>
                    <div className='row'>
                        {voting_and_reg_2019_averages.map((item, i) => (
                            <div className='col p-0'>
                                <h1>{item.percentage}%</h1>
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
                            <div className='col'>
                                <h1 className={item.percentage > voting_and_reg_2019_averages[i].percentage ? 'green' : item.percentage < voting_and_reg_2019_averages[i].percentage ? 'red' : 'none'}>{item.percentage}%</h1>
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
export default CitizenEngagmentStatPanel;