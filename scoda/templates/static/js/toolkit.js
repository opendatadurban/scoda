//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import loader from "./gif/Spinner.gif"


const DataStoriesSpacial =  lazy(() => import('./templates/datastories/Spatial_transformation'));
const HouseholdBills =  lazy(() => import('./templates/datastories/DatastoryHouseholdBills'));
const StateOfTheCityFinance =  lazy(() => import('./templates/datastories/DatastoryStateOfTheCityFin2020'));
const DataStoriesUrbanSafety =  lazy(() => import('./templates/datastories/Urban_safety'));
const DataStoriesEPW =  lazy(() => import('./templates/datastories/EPW_metro'));
const DataStoriesAffordability =  lazy(() => import('./templates/datastories/Affordability'));
const IndicatorExplorer =  lazy(() => import('./templates/Explore'));
const DataStoriesDetails =  lazy(() => import('./templates/datastories/Home'));
const State_of_finance =  lazy(() => import('./templates/datastories/State_of_finance'));
const CBIndicatorExplorer =  lazy(() => import('./templates/codebook/Explore'));
const Codebook =  lazy(() => import('./templates/codebook/Codebook'));
const Demographic =  lazy(() => import('./templates/Demographic'));

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

      <Route exact path="/data-stories-details" component={()=><DataStoriesDetails />} />
      <Route exact path="/codebook" component={() => <Codebook />} />
      <Route exact path="/ds-state-of-finance-2018" component={()=> <State_of_finance />} />
      <Route exact path="/ds-spatial-transformation-2018" component={()=> <DataStoriesSpacial />} />
      <Route exact path="/ds-household-bills-and-affordibility" component={()=> <HouseholdBills />} />
      <Route exact path="/ds-state-of-the-city-finance-2020" component={()=> <StateOfTheCityFinance />} />
      <Route exact path="/ds-urban-safety-2018" component={()=> <DataStoriesUrbanSafety />} />
      <Route exact path="/ds-epw-metro-2018" component={()=> <DataStoriesEPW />} />
      <Route exact path="/ds-affordability-2018" component={()=> <DataStoriesAffordability />} />
      <Route exact path='/home' component={()=> <Home />} />
      <Route exact path="/explorer" component={()=> <IndicatorExplorer />}/>
      <Route exact path='/codebook-explorer/:id' render={()=> <CBIndicatorExplorer/>} />
      <Route exact path="/demographic-modeller" component={()=><Demographic />} />
      </Suspense>
    </HashRouter>
);