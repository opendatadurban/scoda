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
            document.getElementById('contentContainer').style.height = '0px';
            document.getElementById('buttonContainer').style.display = 'none';
            document.getElementById('infoBlockContainer').style.visibility = 'hidden';
            document.getElementById('infoBlock').style.height = '50px';
            document.getElementById('hero-content-column').style.height = '50px';
            document.getElementById('hero-content-column').style.paddingBottom = '0px';
            document.getElementById('hero-title').style.paddingBottom = '0px';
        }
        else {
            this.setState({hero_state: 'expand'});
            this.setState({hero_caret: 'fa fa-caret-up fa-2x hero-block-arrow-expand'});

            document.getElementById('contentContainer').style.display = 'block';
            //document.getElementById('contentContainer').style.height = '560px';
            document.getElementById('buttonContainer').style.display = 'block';
            document.getElementById('infoBlockContainer').style.visibility = 'visible';
            document.getElementById('infoBlock').style.height = '450px';
            document.getElementById('hero-content-column').style.height = '393px';
           // document.getElementById('hero-content-column').style.transition = 'all 1.2s ease-in-out';
            document.getElementById('hero-content-column').style.paddingBottom = '90px';
      
            
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
            background: `linear-gradient(112deg, ${this.props.primaryColor} calc(54% - 1px), ${this.props.primaryColor}, #fff calc(38% + 1px))`
        }

        var infoTitleCaps = this.props.infoTitle.substring(0,1);

        return (
            <div id="hero" className="hero-block">
                <div className="container-fluid mt-0 p-0 hero-tab-header">
                    <div className={[this.state.hero_state + " row ml-0 mr-0 p-0 content-collapsible"]}>
                        <div className="row hero-title p-0" id="hero-title">
                            <a className="click-layer" onClick={this.toggleHero}></a>
                            <div className="col-0 hero-block-title"  onClick={this.toggleHero}>{this.props.title}</div>
                            <div className="col-1 tooglebtn"><i className={this.state.hero_caret} aria-hidden="true"></i></div>
                        </div>
                        <div className=" col-md-5 hero-content-column" id="hero-content-column">
                            <div id="contentContainer" className="row">
                                <div className="col hero-block-text" dangerouslySetInnerHTML={{__html:this.props.content}}>
                                </div>
                                <div className="col-12">
                                    <button className="hero-block-button" style={buttonPrimaryColor} onClick={this.toggleHero}>Got It!</button>
                                </div>
                            </div>
                            <div id="buttonContainer" className="row">
                            </div>
                        </div>
                        {/*Info bar and background*/}
                        <div id="infoBlock" className="col-md-7 hero-block-background p-0 mr-0" style={infoBlockBackground}>
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