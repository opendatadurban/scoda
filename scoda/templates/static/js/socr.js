//Imports
import React, { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';
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

      <Route exact path='/' component={SoCR} />
      <Route exact path='/citizen_engagement' component={CitizenEngagements} />
      <Route exact path='/service_delivery' component={ServiceDelivery} />
      <Route exact path='/human_resources' component={HumanResources} />
      <Route exact path='/city_finances' component={CityFinances} />
      <Route exact path='/people_household' component={PeopleAndHousehold} />
      <Route exact path='/employment' component={Employment} />
      <Route exact path='/dwellings' component={Dwellings} />
      <Route exact path='/household_income' component={HouseholdIncome} />
      {/* <Route exact path='/life_expectancy' component={LifeExpectancy} />
      <Route exact path='/food_security' component={FoodSecurity} />
      <Route exact path='/education' component={Education} />
      <Route exact path='/sustainability' component={Sustainability} /> */}
    </Suspense>
  </HashRouter>
);