import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer footer">
                <div className="container">
                    <div className="row">
                        <div className="span4 footer--col_one">
                            <a href="https://ckan.org/" target="blank__"><img className="ckan" src="../../../../static/dist/img/ckan-logo.png" alt="ckan logo" /></a>
                            <span><span className="sacn"><a href="https://www.sacities.net/" target="blank__">SACN</a></span> in partnership with <span className="sacn"><a target="blank__" href="https://opendata.durban/odd/home">OCL</a></span> <br/> <span className="ccl"> Creative Commons License</span></span>
                        </div>
                        <div className="span4 footer--col_two">
                            <span>
                                <p>email us:</p>
                                    <a href="mailto:scoda@sacities.net">scoda@sacities.net</a>
                            </span>
                        </div>
                        <div className="span4 footer--col_three">
                            <a href="http://www.sacncloud.net/index.php/login" target="blank__">
                                <img src="../../../../static/dist/img/cloud.png" alt="cloud logo" />
                            </a>
                            <a href="https://www.facebook.com/SACitiesNetwork" target="blank__">
                                <img class="icon" src="../../../../static/dist/img/facebook.png" alt="facebook logo" />
                            </a>
                            <a href="https://twitter.com/SACitiesNetwork" target="blank__">
                                <img src="../../../../static/dist/img/twitter.png" alt="twitter logo" />
                            </a>
                            <a href="https://www.linkedin.com/company/3168975/admin/" target="blank__">
                                <img class="icon" src="../../../../static/dist/img/linkedin.png" alt="linkedin logo" />
                            </a>
                            <a href="https://www.instagram.com/sacitiesnetwork/" target="blank__">
                                <img src="../../../../static/dist/img/instagram.png" alt="instagram logo" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC1Ro42Ivb9f0La57fuhjJFA/videos?view_as=subscriber" target="blank__">
                                <img class="icon" src="../../../../static/dist/img/youtube.png" alt="youtube logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            )
        }
    }