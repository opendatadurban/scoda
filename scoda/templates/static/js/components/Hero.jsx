import React, { Component } from 'react';
//import '../../../../static/dist/css/main.min.css';
export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero_image: props.hero_image,
            hero_title: props.hero_title
        }
    }
    render() {
        return (
            <div className="hero-mini module-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="logo" style={{backgroundImage: "url('../../../../static/dist/img/SCODA Assets V3_0/1 Landing Page/1_1 Hero Banner/logo_hero-banner_round-font.png')"}}></div>
                            <h5> {this.state.test_data}</h5>
                            <p>
                                <span>SCODA</span> is a city-centric data portal that provides<br /> 
                                <span>Evidence,</span> <span>Analysis</span> & <span>Insight</span> <br /> 
                                Of current and comparable information<br />  
                                About South African cities<br />  
                                To help inform evidence-based decision-making and reporting.
                            </p>
                        </div>
                        <div className="col-md-4 hero-image"></div>
                    </div>
                </div>
            </div>
        )
    }
}