import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer footer">
                <div className="container">
                    <div className="row">
                        <div className="span4 footer--col_one">
                            <a href="https://ckan.org/"><img className="ckan" src="../../../../static/dist/img/ckan-logo.png" alt="ckan logo" /></a>
                            <span><span className="sacn">SACN</span> in partnership with <span className="sacn">ODD</span> <br/>Creative Commons License</span>
                        </div>
                        <div class="span4 footer--col_two">
                            <span>
                                <p>email us:</p>
                                    <a href="mailto:scoda@sacities.net">scoda@sacities.net</a>
                            </span>
                        </div>
                        <div className="span4 footer--col_three">
                            <a href="http://www.sacncloud.net/index.php/login">
                                <img src="../../../../static/dist/img/cloud.png" alt="cloud logo" />
                            </a>
                            <a href="https://www.facebook.com/SACitiesNetwork">
                                <img class="icon" src="../../../../static/dist/img/facebook.png" alt="facebook logo" />
                            </a>
                            <a href="https://twitter.com/SACitiesNetwork">
                                <img src="../../../../static/dist/img/twitter.png" alt="twitter logo" />
                            </a>
                            <a href="https://www.linkedin.com/company/3168975/admin/">
                                <img class="icon" src="../../../../static/dist/img/linkedin.png" alt="linkedin logo" />
                            </a>
                            <a href="https://www.instagram.com/sacitiesnetwork/">
                                <img src="../../../../static/dist/img/instagram.png" alt="instagram logo" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC1Ro42Ivb9f0La57fuhjJFA/videos?view_as=subscriber">
                                <img class="icon" src="../../../../static/dist/img/youtube.png" alt="youtube logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            )
        }
    }