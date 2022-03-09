//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
const CitizenEngagements =  lazy(() => import('./templates/CitizenEngagements'));

export const history = createHistory()

history.listen(() => {
    window.scrollTo(0, 0)
})

// import more components
export default (
    <HashRouter history={history}>
    <Suspense fallback={<></>}>
      <Route exact path='/citizen-engagement' component={CitizenEngagements} />
      </Suspense>
    </HashRouter>
);