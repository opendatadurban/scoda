import React, { useEffect, useState } from 'react'
import Select from '../../Select';


import panelData from '../../../data/panelData';

const HumanResourcesStatPanel = ({
    last_municipal_posts,
    last_total_posts,
    last_senior_management_posts
}) => {

    const [place, setPlace] = useState('Buffalo City')
    const [total_municipal_posts, setTotal_municipal_posts] = useState()
    const [municipal_management_vacancies, setVacancies] = useState()
    const [senior_management_vacancies, setSenior_management_vacancies] = useState()
    //set data
    const [data, setData] = useState(panelData[0])
    const [total_mun_posts_sum, setTotalMunPostsSum] = useState()
    const [mangement_mun_posts_sum, setTotalManagementMunPostsSum] = useState()
    const [senior_posts_sum, setSeniorPostsSum] = useState()


    let municipality_focus = [
        {
            percentage: total_municipal_posts,
            type: `Total Municipal<br/>Posts`
        },
        {
            percentage: municipal_management_vacancies,
            type: `Municipal Management<br/>Vacancies`
        },
        {
            percentage: senior_management_vacancies,
            type: `Senior Management<br/>Vacancies`
        },

    ]

    const places = (e) => {
        setPlace(e.target.value);
        if (e.target.value === 'Buffalo City') {
            setTotal_municipal_posts(last_total_posts[0][2])
            setVacancies(last_municipal_posts[0][2])
            setSenior_management_vacancies(last_senior_management_posts[0][2])
        }
        if (e.target.value === 'City of Cape Town') {
            setTotal_municipal_posts(last_total_posts[1][2])
            setVacancies(last_municipal_posts[1][2])
            setSenior_management_vacancies(last_senior_management_posts[1][2])
        }
        if (e.target.value === 'City of Joburg') {
            setTotal_municipal_posts(last_total_posts[2][2])
            setVacancies(last_municipal_posts[2][2])
            setSenior_management_vacancies(last_senior_management_posts[2][2])
        }
        if (e.target.value === 'Ekurhuleni') {
            setTotal_municipal_posts(last_total_posts[3][2])
            setVacancies(last_municipal_posts[3][2])
            setSenior_management_vacancies(last_senior_management_posts[3][2])
        }
        if (e.target.value === 'eThekwini') {
            setTotal_municipal_posts(last_total_posts[8][2])
            setVacancies(last_municipal_posts[8][2])
            setSenior_management_vacancies(last_senior_management_posts[8][2])
        }
        if (e.target.value === 'Mangaung') {
            setTotal_municipal_posts(last_total_posts[4][2])
            setVacancies(last_municipal_posts[4][2])
            setSenior_management_vacancies(last_senior_management_posts[4][2])
        }
        if (e.target.value === 'Nelson Mandela Bay') {
            setTotal_municipal_posts(last_total_posts[6][2])
            setVacancies(last_municipal_posts[6][2])
            setSenior_management_vacancies(last_senior_management_posts[6][2])
        }
        if (e.target.value === 'Tshwane') {
            setTotal_municipal_posts(last_total_posts[7][2])
            setVacancies(last_municipal_posts[7][2])
            setSenior_management_vacancies(last_senior_management_posts[7][2])
        }
        if (e.target.value === 'Msunduzi') {
            setTotal_municipal_posts(last_total_posts[5][2])
            setVacancies(last_municipal_posts[5][2])
            setSenior_management_vacancies(last_senior_management_posts[5][2])
        }
    }

    const isObjectEmpty = (obj) => {
        return (
            obj // 👈 null and undefined check
            && Object.keys(obj).length === 0
            && Object.getPrototypeOf(obj) === Object.prototype
        )
    }

    useEffect(() => {
        if (!isObjectEmpty(last_total_posts)) {
            setTotal_municipal_posts(last_total_posts[0][2])
            let sum = 0;
            for (let i = 0; i < last_total_posts.length; i++) {
                sum += last_total_posts[i][2]
            }
            setTotalMunPostsSum((sum/last_total_posts.length).toFixed(0))
        }
    }, [last_total_posts])
    
    useEffect(() => {
        if (!isObjectEmpty(last_municipal_posts)) {
            setVacancies(last_municipal_posts[0][2])
            let sum = 0;
            for (let i = 0; i < last_municipal_posts.length; i++) {
                sum += last_municipal_posts[i][2]
            }
            setTotalManagementMunPostsSum((sum/last_municipal_posts.length).toFixed(0))
        }
    }, [last_municipal_posts])


    useEffect(() => {
        if (!isObjectEmpty(last_senior_management_posts)) {
            setSenior_management_vacancies(last_senior_management_posts[0][2])
            let sum = 0;
            for (let i = 0; i < last_senior_management_posts.length; i++) {
                sum += last_senior_management_posts[i][2]
            }
            setSeniorPostsSum((sum/last_senior_management_posts.length).toFixed(0))
        }
    }, [last_senior_management_posts])

    return (
        <div className='stat_display_panel'>
            <div className='row stat_display_panel--numbers w-100'>
                <div className='col-md-6 first_panel'>
                    <div className='stat_display_panel--averages'>
                        <p className='catagory-name '>Averages {!isObjectEmpty(last_municipal_posts) ?last_municipal_posts[0][1] : ""}  <span>(Municipal Posts and Vacancies)</span></p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 p-0'>
                            <h1>{total_mun_posts_sum ? total_mun_posts_sum : ""}</h1>
                            <p > Total Municipal<br />Posts</p>
                        </div>
                        <div className='col-md-4 p-0'>
                            <h1>{mangement_mun_posts_sum ? mangement_mun_posts_sum : ""}</h1>
                            <p>Municipal Management<br />Vacancies</p>
                        </div>
                        <div className='col-md-4 p-0'>
                            <h1>{senior_posts_sum ? senior_posts_sum : ""}</h1>
                            <p>Senior Management<br />Vacancies</p>
                        </div>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-8'> <p className='catagory-name catagory-name--focusName'> {!isObjectEmpty(last_municipal_posts) ? "Municipality Focus " + last_municipal_posts[0][1] + ":" : "Municipality Focus : "} {place}</p></div>
                        <div className='col-md-3 select-container'>
                            <Select
                                value={place}
                                placeholder='Select a City'
                                id={data.places.id}
                                multiple={data.places.multiple}
                                data={data.places.data}
                                name='gender'
                                onChange={places}
                            />
                    
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                        {/* <h1 className={total_municipal_posts < total_mun_posts_sum ? 'green' : total_municipal_posts > total_mun_posts_sum ? 'red' : 'none'}>{total_municipal_posts}</h1> */}
                        <h1 className={ 'none'}>{total_municipal_posts?total_municipal_posts:0}</h1>
                            <p>Total Municipal<br />Posts</p>
                        </div>
                        <div className='col-md-4'>
                            {/* <h1 className={municipal_management_vacancies < mangement_mun_posts_sum ? 'green' : municipal_management_vacancies > mangement_mun_posts_sum ? 'red' : 'none'}>{municipal_management_vacancies}</h1> */}
                            <h1 className={ 'none'}>{municipal_management_vacancies?municipal_management_vacancies:0}</h1>
                            <p>Municipal Management<br />Vacancies</p>
                        </div>
                        <div className='col-md-4'>
                            {/* <h1 className={senior_posts_sum < senior_management_vacancies ? 'green' : senior_posts_sum > senior_management_vacancies ? 'red' : 'none'}>{senior_management_vacancies}</h1> */}
                            <h1 className={ 'none'}>{senior_management_vacancies ? senior_management_vacancies : 0}</h1>
                            <p>Senior Management<br />Vacancies</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HumanResourcesStatPanel;