import React, { Component } from 'react';
export default class Navigation_scoda extends Component {
    render() {
        return (
            <div className="navigation-scoda">
                <div className="top-header d-flex align-items-center justify-content-end">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-end">
                                <a href="">Log In</a>
                                <a href="" className="register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/scoda/#/home">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Toolkits
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/scoda/#/about-us">About Us </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}