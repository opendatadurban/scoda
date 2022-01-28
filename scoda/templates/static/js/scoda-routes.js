//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import loader from "./gif/loader.gif"

const DataStoriesSpacial =  lazy(() => import('./templates/datastories/Spatial_transformation'));
const DataStoriesUrbanSafety =  lazy(() => import('./templates/datastories/Urban_safety'));
const DataStoriesEPW =  lazy(() => import('./templates/datastories/EPW_metro'));
const IndicatorExplorer =  lazy(() => import('./templates/Explore'));
const CBIndicatorExplorer =  lazy(() => import('./templates/codebook/Explore'));
const State_of_finance =  lazy(() => import('./templates/datastories/State_of_finance'));
const Demographic =  lazy(() => import('./templates/Demographic'));
const DataStoriesAffordability =  lazy(() => import('./templates/datastories/Affordability'));
const Codebook =  lazy(() => import('./templates/codebook/Codebook'));
const Socr_Dashboards =  lazy(() => import('./templates/SocrDashboard'));
const DataStoriesDetails =  lazy(() => import('./templates/datastories/Home'));
const About =  lazy(() => import('./templates/About'));
const Home =  lazy(() => import('./templates/Home'));
const SoCR =  lazy(() => import('./templates/SoCR'));
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
      <Route path="/ds-state-of-finance-2018" component={()=> <State_of_finance />} />
      <Route path="/ds-spatial-transformation-2018" component={()=> <DataStoriesSpacial />} />
      <Route path="/ds-urban-safety-2018" component={()=> <DataStoriesUrbanSafety />} />
      <Route path="/ds-epw-metro-2018" component={()=> <DataStoriesEPW />} />
      <Route path="/ds-affordability-2018" component={()=> <DataStoriesAffordability />} />
      <Route exact path='/home' component={()=> <Home />} />
      <Route exact path="/demographic-modeller" component={()=><Demographic />} />
      <Route path='/about-us' component={About} />
      <Route exact path="/explorer" component={()=> <IndicatorExplorer />}/>
      <Route exact path='/codebook-explorer/:id' render={()=> <CBIndicatorExplorer/>} />
      <Route exact path='/socr-dashboards' component={Socr_Dashboards} />
      <Route exact path='/socr' component={SoCR} />

      </Suspense>
    </HashRouter>
);