import React, { Component } from 'react';
export default class Button extends Component {
  render() {
    return (
      <a href={this.props.href} target={this.props.target} id={this.props.id} onClick={this.props.onClick} className={"btn " + this.props.className}>{this.props.text}{this.props.icon}{this.props.children}</a>
    )
  }
}