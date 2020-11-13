import React, { Component } from 'react';
export default class Paragraph extends Component {
  render() {
    return (
      <p id={this.props.id} className={this.props.classes}>{this.props.text}</p>
    )
  }
}