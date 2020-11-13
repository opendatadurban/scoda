import React, { Component } from 'react';
import Button from './../components/Button';
import contentImage from '../../../../static/dist/img/blackbox/hero-image.png';
import contentMobileImage from '../../../../static/dist/img/blackbox/hero-image_mobile.png';

var heroContentImage = {
  backgroundImage: `url(${contentImage})` 
}

export default class Hero_fluid extends Component {
  render() {
    return (

      <div className="wrapper hero hero_fluid">
        <div className="container animated fadeIn delay-1s hero--image d-flex align-items-center justify-content-center" style={heroContentImage}>
        <div className="container hero--content">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <h1 className="hero--title">{this.props.title}</h1>
              <h2 className="hero--subtitle">{this.props.subtitle}</h2>
              <p className="hero--body-text">{this.props.bodyText}</p>
              <Button className={this.props.buttonClasses} text={this.props.buttonText} icon={this.props.buttonIcon} />
              <Button className={this.props.buttonMobileClasses} />
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}