import React, { Component } from 'react';


export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero_caret: 'fa fa-caret-up fa-2x hero-block-arrow-expand',
            hero_state: 'expand'
        }

        this.toggleHero = this.toggleHero.bind(this);
    }

    toggleHero() {
        let switchState = this.state.hero_state;

        if(switchState == 'expand') {
            this.setState({hero_state: 'collapse'});
            this.setState({hero_caret: 'fa fa-caret-down fa-2x hero-block-arrow-expand'});

            document.getElementById('contentContainer').style.display = 'none';
            document.getElementById('buttonContainer').style.display = 'none';
            document.getElementById('infoBlockContainer').style.visibility = 'hidden';

            document.getElementById('infoBlock').style.height = '80px';
        }
        else {
            this.setState({hero_state: 'expand'});
            this.setState({hero_caret: 'fa fa-caret-up fa-2x hero-block-arrow-expand'});

            document.getElementById('contentContainer').style.display = 'block';
            document.getElementById('buttonContainer').style.display = 'block';
            document.getElementById('infoBlockContainer').style.visibility = 'visible';

            document.getElementById('infoBlock').style.height = '525px';
        }
    }

    render() {

        var primaryColor = {
            color: this.props.primaryColor
        };

        var backgroundPrimary = {
            backgroundColor: this.props.primaryColor
        };

        var buttonPrimaryColor = {
            border: `2px solid ${this.props.primaryColor}`,
            color: this.props.primaryColor
        };

        var secondaryColor = {
            color: this.props.secondaryColor
        };

        var infoBlock = {
            color: this.props.primaryColor,
            border: `2px solid ${this.props.secondaryColor}`
        };

        var infoBlockBackground = {
            background: `linear-gradient(75deg, ${this.props.primaryColor} calc(38% - 1px), ${this.props.primaryColor}, #fff calc(38% + 1px))`
        }

        var infoTitleCaps = this.props.infoTitle.substring(0,1);

        return (
            <div id="hero" className="hero-block">
            <div className="container-fluid mt-0 p-0">
                <div className="row ml-0 mr-0 p-0">
                    <div className="col-md-5">
                        <div className="hero-block-vspacer"></div>
                        <div className="row ml-5">
                            <div className="col-0 hero-block-title" style={primaryColor}>{this.props.title}</div>
                            <div className="col-1"><i className={this.state.hero_caret} style={primaryColor} aria-hidden="true" onClick={this.toggleHero}></i></div>
                        </div>
                        <div className="hero-block-vspacer"></div>
                        <div id="contentContainer" className="row ml-5">
                            <div className="col hero-block-text">
                           {this.props.content}
                            </div>
                        </div>
                        <div className="hero-block-vspacer"></div>
                        <div className="hero-block-vspacer"></div>
                        <div id="buttonContainer" className="row ml-5">
                            <button className="hero-block-button" style={buttonPrimaryColor}>Got It!</button>
                        </div>
                    </div>
                    {/*Info bar and background*/}
                    <div id="infoBlock" className="col-md-7 hero-block-background p-0 mr-0" style={infoBlockBackground}>
                        <div className="hero-block-spacer"></div>
                        <div id="infoBlockContainer" className="row ml-0 p-0 hero-block-info-display">
                            <div className="col-0 hero-block-info-hspacer"></div>
                            <div className="col-0 hero-block-info-logo hero-block-info-logo-title" style={infoBlock}>{infoTitleCaps}</div>
                            <div className="col-0 hero-block-info-hspacer"></div>
                            <div className="col-0 hero-block-info-display-text" style={secondaryColor}>{this.props.infoTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}