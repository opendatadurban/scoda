import React, { Component } from 'react';
import Image from './Image';
export default class Navigation_scoda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo_hide:"block"
        }
    }


    //HIDE LOGO ON SCROLL
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const logo = window.scrollY < 50 ? "block" : "none";
    
          this.setState({ logo_hide: logo });
        });
      }
    render() {
        
        
        let style_ = ""
        if (this.props.box_shadow == true) {
            style_ = "navbar navbar-expand-lg navbar-light bg-light box-shadow"
        }
        else {
            style_ = "navbar navbar-expand-lg navbar-light bg-light "
        }
        return (
            <div className="navigation-scoda">
                <div className="top-header d-flex align-items-center justify-content-end">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-end">
                                <a href="https://scoda.co.za/user/login">Log In</a>
                                <a href="https://scoda.co.za/user/register" className="register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className={style_}>

                        <a style={{position:"absolute",left:"0"}}   className="navbar-brand d-flex align-items-center">
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
                                        <a className="dropdown-item" href="/scoda/#/data-stories-details">Data stories</a>
                                        <a className="dropdown-item" href="/scoda/#/explorer">Indicator explore</a>
                                        <a className="dropdown-item" href="/scoda/#/demographic-modeller">Demographic modeller</a>
                                        <a className="dropdown-item" href="/scoda/#/codebook">Codebook</a>
                                    </div>
                                </li>
                                <li className="nav-item about_">
                                    <a className="nav-link " href="/scoda/#/about-us">About Us </a>
                                </li>
                                {/* <li className="nav-item help_">
           <a className="nav-link " href="#">Help</a>
       </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }
}
