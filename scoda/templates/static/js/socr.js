//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import loader from "./gif/Spinner.gif"

const Socr_Dashboards =  lazy(() => import('./templates/SocrDashboard'));
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
      <Route exact path='/socr-dashboards' component={Socr_Dashboards} />
      <Route exact path='/' component={SoCR} />
      </Suspense>
    </HashRouter>
);