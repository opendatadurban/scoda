//Imports
import React, {Suspense, lazy} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import loader from "./gif/Spinner.gif"
import Navigation from './components/adh/Navigation';
import Footer from './components/adh/Footer';

const Home =  lazy(() => import('./templates/Home'));
const IndicatorExplorer =  lazy(() => import('./components/IndicatorExplorer'));


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
      <Route exact path='/' component={()=> <Navigation />} />
      <Route exact path='/' component={()=> <IndicatorExplorer />} />
      <Route exact path='/' component={()=> <Footer />} />
      </Suspense>
    </HashRouter>
);