import React, { Component } from 'react';
import Image from './Image';
import $ from 'jquery'
export default class Navigation_scoda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo_hide:"none"
        }
    }


    // //HIDE SCODA LOGO ON SCROLL
    componentDidMount() {

          //window.scrollTo(0,0);

        this.props.logoHide ? (
            document.addEventListener("scroll", () => {
                const logo = window.scrollY < 50 ? "none" : "block";
                
                this.setState({ logo_hide: logo });
            })
        ) : this.setState({ logo_hide: "block" });


        $(document).ready(function () {

            $(".navbar-nav li a").click(function () {
                var id = $(this);

                $(".active").removeClass("active");
                $(id).addClass("active");
                localStorage.setItem("selectedolditem", $(id).text());

            });

            var selectedolditem = localStorage.getItem('selectedolditem');

            if (selectedolditem !== null) {

                $("a:contains('" + selectedolditem + "')").addClass("active");
            }
        });
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

                        <a style={{position:"absolute",left:"0"}}   className="navbar-brand d-flex align-items-center" href='/#/home'>
                            <Image className="navigation-logo"  style={{width:"105px",display:`${this.state.logo_hide}`}} imgSrc="/static/img/scoda_logo.png" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">

                                <li className="nav-item home_">
                                    <a className="nav-link " href="/scoda/#/home">Home</a>
                                </li>
                                <li className="nav-item tookit_ dropdown">
                                    <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Toolkits
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" target="_blank"  href="https://ckan.scoda.co.za/dataset">Data Management System</a>
                                        <a className="dropdown-item" href="/scoda/#/explorer">Data Explorer</a>
                                        <a className="dropdown-item" href="/scoda/#/codebook">Codebook</a>
                                        <a className="dropdown-item" href="/scoda/#/demographic-modeller">Demographic Modeller</a>
                                        <a className="dropdown-item" href="/scoda/#/data-stories-details">Data Stories</a>
                                        {/* <a className="dropdown-item" href="/scoda/#/socr-dashboards">SOCR</a> */}
                                    </div>
                                </li>
                                {/* <li className="nav-item tookit_ dropdown">
                                    <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SoCR
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/scoda/#/socr-dashboards">SoCR Dashboards</a>
                                    </div>
                                </li> */}
                                <li className="nav-item about_">
                                    <a className="nav-link " href="/scoda/#/socr">SoCR </a>
                                </li>
                                <li className="nav-item about_">
                                    <a className="nav-link " href="/scoda/#/about-us">About Us </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }
}
