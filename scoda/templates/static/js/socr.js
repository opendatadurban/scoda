//Imports
import React, { Suspense, lazy } from 'react';
import { HashRouter, Route,Routes } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import loader from "./gif/Spinner.gif"

const SoCR = lazy(() => import('./templates/SoCR'));
const CitizenEngagements = lazy(() => import('./templates/CitizenEngagements'));
const ServiceDelivery = lazy(() => import('./templates/ServiceDelivery'));
const HumanResources = lazy(() => import('./templates/HumanResources'));
const CityFinances = lazy(() => import('./templates/CityFinances'));
const PeopleAndHousehold = lazy(() => import('./templates/PeopleAndHousehold'));
const Employment = lazy(() => import('./templates/Employment'));
const Dwellings = lazy(() => import('./templates/Dwellings'));
const HouseholdIncome = lazy(() => import('./templates/HouseholdIncome'));
const LifeExpectancy = lazy(()=> import('./templates/LifeExpectancyAndHealth'))
const FoodSecurity = lazy(()=> import('./templates/FoodSecurityLiteracyAndInequality'))
const Education = lazy(()=> import('./templates/Education'))
const Sustainability = lazy(()=> import('./templates/Sustainability'))
const Infrastructure = lazy(() => import('./templates/Infrastrucutre'))
const TransportMode = lazy(() => import('./templates/TransportMode'))
const PublicTransportSpend = lazy(() => import('./templates/PublicTransport'))
const TravelTime = lazy(() => import('./templates/TravelTime'))

const style = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
};

export const history = createHistory()

history.listen(() => {
  window.scrollTo(0, 0)
})

// import more components
export default (
  <HashRouter history={history}>

    <Suspense fallback={<div style={style}><img src={loader} alt='Loader'></img></div>}>
      <Routes>
          <Route path='/' element={<SoCR/>} />
          <Route path='/citizen_engagement' element={<CitizenEngagements/>} />
          <Route path='/service_delivery' element={<ServiceDelivery/>} />
          <Route path='/human_resources' element={<HumanResources/>} />
          <Route path='/city_finances' element={<CityFinances/>} />
          <Route path='/people_household' element={<PeopleAndHousehold/>} />
          <Route path='/employment' element={<Employment/>} />
          <Route path='/dwellings' element={<Dwellings/>} />
          <Route path='/household_income' element={<HouseholdIncome/>} />
          <Route path='/life_expectancy' element={<LifeExpectancy/>}/>
          <Route path='/food_security' element={<FoodSecurity/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/sustainability' element={<Sustainability/>}/>
          <Route path='/infrastructure' element={<Infrastructure/>}/>
          <Route path='/transport_mode' element={<TransportMode/>}/>
          <Route path='/public_transport_spend' element={<PublicTransportSpend/>}/>
          <Route path='/travel_time' element={<TravelTime/>}/>
      </Routes>
    </Suspense>
  </HashRouter>
);