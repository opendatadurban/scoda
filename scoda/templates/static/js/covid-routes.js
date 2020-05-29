import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Title_block from './components/Title_block';
import Navigation_covid from './components/Navigation_covid';
import Breadcrumbs from './components/Breadcrumbs';
import Button from './components/Button';
import Listing_basic from './components/Listing_basic';
import Footer_mobile_light from './components/Footer_mobile_light';
import Layout from './templates/Layout';

// import more components
export default (
  <HashRouter history={hashHistory}>



  {/* Listing example */}
     < Route path = '/listing'  render = {(props) => 
     <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">Community Tourism<br/>Organisations<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Municipal Funding</h2>
        <span>(Increased from R250 000 to  R500 000)</span>
        <label>For more info send an email to:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="mailto:zimasa.dlamini@durban.gov.za">zimasa.dlamini@durban.gov.za</Button>
      </Listing_basic>} />
     </Layout>
     }/>
     
     {/* Home Layout */}
     < Route 
        path = '/home'
        render = {(props) => < Navigation_covid {...props}
        expanded = {true}
        className = "bg_transparent nav_dark box-shadow"
        menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
        social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
        brandText = "logo"
        brandHref = "/#/home"
        logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
        logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
        />}
      />
     < Route path = '/home'  render = {(props) => 
      <Layout>
        <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center">What assistance are<br/>you looking for?</Title_block>} />
        <Route path = '/'  render = {(props) => <Button {...props} className="bg_brand_primary btn_giant square" href="#/grants">Grants</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} className="bg_brand_secondary btn_giant square" text="Loans" />} />
        <Route path = '/'  render = {(props) => <Button {...props} className="bg_brand_tertiary btn_giant square">Repayment Holidays<br/>Tax Reliefs<br/>Assistance: Salary Payments</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} className="bg_brand_grey btn_giant square">No financial support<br/><span className="thin-weight">(Funding Applications, Strategy,<br/> Accounting, Tax & Legal Support)</span></Button>} />
      </Layout>} 
     />



    {/* Grants page */}
    < Route 
       path = '/grants'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"]]}}
         />}
       />
     <Route path = '/grants'  render = {(props) => 
      <Layout>
        <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center">What sector does your <br/>business belong to?</Title_block>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-tourism" className="bg_brand_primary btn_giant square">Tourism Orgs, Products & <br /> support services</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-agriculture" className="bg_brand_primary btn_giant square">Agriculture</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-other-sectors" className="bg_brand_primary btn_giant square">Other sectors</Button>} />
      </Layout>} 
     />



    {/* grants/tourism */}
    < Route 
       path = '/grants-tourism'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-tourism' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants-tourism","Tourism Orgs, Products..."]]}}
         />}
       />
     <Route path = '/grants-tourism'  render = {(props) => 
      <Layout>
        <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center">Which of these best<br/>describes your business</Title_block>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-tourism-community" className="bg_brand_primary btn_giant square">Community Tourism<br />Organisation</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-tourism-smmes" className="bg_brand_primary btn_giant square">SMMEs: Revenue of <br />R2,5 Million or less / year</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-tourism-sole-proprietor" className="bg_brand_primary btn_giant square">Formal Sole Proprietor</Button>} />
      </Layout>} 
     />



    {/* grants/tourism/community */}
    < Route 
       path = '/grants-tourism-community'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-tourism-community' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants-tourism","Tourism Orgs, Products..."],["/#/grants-tourism-community","community tourism org..."]]}}
         />}
       />
     <Route path = '/grants-tourism-community'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">Community Tourism<br/>Organisations<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Municipal Funding</h2>
        <span>(Increased from R250 000 to  R500 000)</span>
        <label>For more info send an email to:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="mailto:zimasa.dlamini@durban.gov.za">zimasa.dlamini@durban.gov.za</Button>
      </Listing_basic>} />
      </Layout>} 
     />



    {/* grants/tourism/SMMEs */}
    < Route 
       path = '/grants-tourism-SMMEs'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-tourism-SMMEs' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants-tourism","Tourism Orgs, Products..."],["/#/grants-tourism-SMMEs","SMMEs"]]}}
         />}
       />
     <Route path = '/grants-tourism-SMMEs'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">SMMEs: Revenue of<br />R2,5 Million or less / year<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Tourism Relief Funding</h2>
        <label>For more info:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="">Click here to view the website</Button>
      </Listing_basic>} />
      </Layout>} 
     />


    {/* grants/tourism/sole-proprietor */}
    < Route 
       path = '/grants-tourism-sole-proprietor'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-tourism-sole-proprietor' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants/tourism","Tourism Orgs, Products..."],["/#/grants/tourism/sole-proprietor","Formal Sole Proprietors"]]}}
         />}
       />
     <Route path = '/grants-tourism-sole-proprietor'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">formal sole proprietors<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Sukuma Relief Program</h2>
        <label>For more info:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="">Click here to view the website</Button>
        <p className="text-center">*Please take note that this fund is <br/>currently over subscribed</p>
      </Listing_basic>} />
      </Layout>} 
     />


    {/* grants/agriculture */}
    < Route 
       path = '/grants-agriculture'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-agriculture' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants-agriculture","agriculture"]]}}
         />}
       />
     <Route path = '/grants-agriculture'  render = {(props) => 
      <Layout>
        <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center">Which of these best<br/>describes your business</Title_block>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-agriculture-informal" className="bg_brand_primary btn_giant square">Informal: Revenue of<br />R10 Million or less / year</Button>} />
        <Route path = '/'  render = {(props) => <Button {...props} href="/#/grants-agriculture-sole-proprietor" className="bg_brand_primary btn_giant square">Formal Sole Proprietor</Button>} />
      </Layout>} 
     />


    {/* grants/agriculture/informal */}
    < Route 
       path = '/grants-agriculture-informal'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-agriculture-informal' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants/agriculture","Agriculture"],["/#/grants-agriculture-informal","Formal Sole Proprietor"]]}}
         />}
       />
     <Route path = '/grants-agriculture-informal'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">informal: revenue of<br/>R10 million or less / year <br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Agricultural food and land bank grant</h2>
        <label>For more info:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="">Click here to view the website</Button>
        <p className="text-center">*Please take note that this fund is <br/>currently over subscribed</p>
      </Listing_basic>} />
      </Layout>} 
     />


    {/* grants/agriculture/sole-proprietor */}
    < Route 
       path = '/grants-agriculture-sole-proprietor'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-agriculture-sole-proprietor' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants/agriculture","Agriculture"],["/#/grants-agriculture-sole-proprietor","Formal Sole Proprietor"]]}}
         />}
       />
     <Route path = '/grants-agriculture-sole-proprietor'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">formal sole proprietors<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Sukuma Relief Program</h2>
        <label>For more info:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="">Click here to view the website</Button>
        <p className="text-center">*Please take note that this fund is <br/>currently over subscribed</p>
      </Listing_basic>} />
      </Layout>} 
     />


         {/* grants/other sectors */}
    < Route 
       path = '/grants-other-sectors'
       render = {(props) => < Navigation_covid {...props}
       expanded = {false}
       className = "bg_transparent nav_dark box-shadow"
       menu = {{ items:[["who we are","/"],["our work","/our work"],["collaborate","/collaborate"]]}}
       social = {{items:[["https://www.instagram.com/black_box_durban/","fab fa-instagram"],["https://www.facebook.com/blackbox.io/","fab fa-facebook-f"],["https://www.linkedin.com/company/37061856/admin/","fab fa-linkedin-in"]]}} // Link, Font Awesome Class
       brandText = "logo"
       brandHref = "/#/home"
       logoPath = '../../../../static/dist/img/covid/logo_unselected.svg'
       logoIconPath = '../../../../static/dist/img/covid/logo_edge_square-only.svg'
       />}
     />
      < Route path = '/grants-other-sectors' render = {(props) => 
         < Breadcrumbs {...props} 
         className = ""
         breadcrumb = {{items:[["/#/grants","grants"],["/#/grants/agriculture","Agriculture"],["/#/grants-other-sectors","Formal Sole Proprietor"]]}}
         />}
       />
     <Route path = '/grants-other-sectors'  render = {(props) => 
      <Layout>
     <Route path = '/'  render = {(props) => <Title_block {...props} className="text-center font-colour_primary">Other sectors<br/><span className="font-colour_general"><i>can apply to this fund:</i></span></Title_block>} />
      <Route path = '/'  render = {(props) => <Listing_basic {...props}>
        <h2>Sukuma Relief Program</h2>
        <label>For more info:</label>
        <Button className="btn_light border-colour_brand_primary no-margin" href="">Click here to view the website</Button>
        <p className="text-center">*Please take note that this fund is <br/>currently over subscribed</p>
      </Listing_basic>} />
      </Layout>} 
     />




        <Route path = '/'  render = {(props) => <Footer_mobile_light {...props} logoPath="https://i.imgur.com/pYSxC44.png"/>} />
 
    </HashRouter>
);