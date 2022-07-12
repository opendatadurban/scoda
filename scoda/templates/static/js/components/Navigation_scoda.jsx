import React, { Component } from 'react';
import Image from './Image';
import $ from 'jquery'
export default class Navigation_scoda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo_hide: "none"
        }
        this.checkSoCR = this.checkSoCR.bind(this)
        this.checkToolkit = this.checkToolkit.bind(this)
        this.checkHome = this.checkHome.bind(this)
    }

    checkHome() {
        if (document.location.href == window.location.origin + '/scoda/home#/' ||
        document.location.href == window.location.origin + '/scoda/#/') {
            return true
        }
        return false
    }

    checkSoCR() {
        if (document.location.href == window.location.origin + '/scoda/socr#/' ||
        document.location.href == window.location.origin + '/scoda/socr#/human_resources' ||
        document.location.href == window.location.origin + '/scoda/socr#/city_finances' ||
        document.location.href == window.location.origin + '/scoda/socr#/citizen_engagement' ||
        document.location.href == window.location.origin + '/scoda/socr#/service_delivery' 
        ) {
            return true
        }
        return false
    }
    checkToolkit() {
        if ((document.location.href == window.location.origin + '/scoda/toolkit#/explorer') || 
        (document.location.href == window.location.origin + '/scoda/toolkit#/codebook') || 
        (document.location.href == window.location.origin + '/scoda/toolkit#/demographic-modeller') || 
        (document.location.href == window.location.origin + '/scoda/toolkit#/data-stories-details')) {
            return true;
        }
        return false;
    }


    // //HIDE SCODA LOGO ON SCROLL
    componentDidMount() {
        //Remove spinner
       $('.spinner--container').remove();

        //window.scrollTo(0,0);

        this.props.logoHide ? (
            document.addEventListener("scroll", () => {
                const logo = window.scrollY < 50 ? "none" : "block";

                this.setState({ logo_hide: logo });
            })
        ) : this.setState({ logo_hide: "block" });
    }
    render() {


        let dropShadow = ""
        this.props.box_shadow && (dropShadow = "box-shadow")
        this.state.logo_hide == "block" ? dropShadow = "box-shadow" : '';

        return (
            <div className={"navigation-scoda " + dropShadow}>
                <div className="top-header d-flex align-items-center justify-content-end">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-end">
                                <a href="https://ckan.scoda.co.za/user/login">Log In</a>
                                <a href="https://ckan.scoda.co.za/user/register" className="register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <a style={{ position: "absolute", left: "0" }} className="navbar-brand d-flex align-items-center" href="/scoda/home#/">
                            <Image className="navigation-logo" style={{ width: "105px", display: `${this.state.logo_hide}` }} imgSrc="/static/img/scoda_logo.png" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">

                                <li className="nav-item home_">
                                    <a className={this.checkHome() ? "nav-link active" : "nav-link "} href="/scoda/home">Home</a>
                                </li>
                                <li className="nav-item tookit_ dropdown">
                                    <a className={this.checkToolkit() ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
                                        href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Toolkits
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" target="_blank" href="https://ckan.scoda.co.za/dataset">Data Management System</a>
                                        <a className="dropdown-item" href="/scoda/toolkit#/explorer">Data Explorer</a>
                                        <a className="dropdown-item" href="/scoda/toolkit#/codebook">Codebook</a>
                                        <a className="dropdown-item" href="/scoda/toolkit#/demographic-modeller">Demographic Modeller</a>
                                        <a className="dropdown-item" href="/scoda/toolkit#/data-stories-details">Data Stories</a>
                                    </div>
                                </li>
                                <li className="nav-item tookit_ socr_ dropdown">
                                    <a className={this.checkSoCR() ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
                                        href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SoCR
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/scoda/socr">SoCR Directory</a>
                                        <a className="dropdown-item" href="/scoda/socr#/citizen_engagement">Citizen Engagement</a>
                                        {/* <a className="dropdown-item" href="/scoda/socr">Household Bills & Affordability</a> */}
                                        <a className="dropdown-item" href="/scoda/socr#/human_resources">Municipal Human Resources</a>
                                        <a className="dropdown-item" href="/scoda/socr#/service_delivery">Service Delivery</a>
                                        <a className="dropdown-item" href="/scoda/socr#/people_household">{"People & House Hold"}</a>
                                        {/* <a className="dropdown-item" href="/scoda/socr">State of Municipal Finance</a> */}
                                    </div>
                                </li>
                                <li className="nav-item about_">
                                    <a className={document.location.href == window.location.origin + '/scoda/about-us#/' ? "nav-link active" : "nav-link "} href="/scoda/about-us">About Us </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }
}
