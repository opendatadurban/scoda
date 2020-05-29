import React, { Component } from 'react';
export default class Image extends Component {
  render() {
    return (
      <img id={this.props.id} className={this.props.className} alt={this.props.alt} src={this.props.imgSrc}/>
    )
  }
}