//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route,Routes  } from 'react-router-dom';
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

       <Routes>
          <Route path="/data-stories-details" element={<DataStoriesDetails />} />
          <Route path="/codebook" element={ <Codebook />} />
          <Route path="/ds-state-of-finance-2018" element={<State_of_finance />} />
          <Route path="/ds-spatial-transformation-2018" element={<DataStoriesSpacial />} />
          <Route path="/ds-household-bills-and-affordibility" element={<HouseholdBills />} />
          <Route path="/ds-state-of-the-city-finance-2020" element={<StateOfTheCityFinance />} />
          <Route path="/ds-urban-safety-2018" element={<DataStoriesUrbanSafety />} />
          <Route path="/ds-epw-metro-2018" element={<DataStoriesEPW />} />
          <Route path="/ds-affordability-2018" element={<DataStoriesAffordability />} />
          <Route path='/home' element={<DataStoriesDetails />} />
          <Route path="/explorer" element={<IndicatorExplorer />}/>
          <Route path='/codebook-explorer/:id' element={ <CBIndicatorExplorer/>} />
          <Route path="/demographic-modeller" element={<Demographic />} />
       </Routes>
      </Suspense>
    </HashRouter>
);