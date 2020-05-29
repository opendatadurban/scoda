import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero_fluid from './components/Hero_fluid';
import Card_chest from './components/Card_chest';
import Title_block from './components/Title_block';

// import more components
export default (
  <HashRouter history={hashHistory}>
     <div>

      < Route 
        path = '/'
        render = {(props) => < Navigation {...props}
            className = "bg_brand_dark nav_light"
            menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
            social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
            brandText = "logo"
            logoPath = '../../../../static/dist/img/blackbox/black-box-logo.png'
            />}
      />
      < Route 
        path = '/'
        render = {(props) => < Hero_fluid {...props}
            title = "human-centred"
            subtitle = 'Design & Development' 
            bodyText = 'Black Box is a design and development company that specialises in bringing digital products to life. We believe that design is the harmony of form and function, and when we get that right, people flourish. That’s why we design with you and your user at the heart of every process in our product pipeline, from concept to feedback.'
            buttonText = "Start Exploring"
            buttonURL = "/"
            buttonIcon = {[<i key className="fas fa-arrow-down"></i>]}
            buttonClasses = "btn btn_large hero--cta d-none d-md-inline-flex"
            buttonMobileClasses = "btn btn_large hero--cta d-md-none fas fa-arrow-down"
            />}
      />

      <Route path = '/' render={(props) => <Title_block {...props} title="Our Collection" className="text-center m-b"/>} />
      <Route path = '/' render={(props) => <Card_chest {...props} />} />

     </div>
    </HashRouter>
);