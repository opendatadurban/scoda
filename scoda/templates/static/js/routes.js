import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import Preview_block from './components/Preview_block';
import CTA_block from './components/CTA_block';
import Footer from './components/Footer';
import Sub_Footer from './components/Sub_Footer';
import Hero_collapsable from './components/Hero_collapsable';
// import more components
export default (
    <HashRouter history={hashHistory}>
     <div>
      <Route path='/' component={Hero} />
      <Route path='/' component={Hero_collapsable} />
      <Route path='/' component={Preview_block} />
      <Route path='/' component={CTA_block} />
      <Route path='/' component={Sub_Footer} />
      <Route path='/' component={Footer} />
     </div>
    </HashRouter>
);