import React, { Component } from 'react';

export default class Button_state extends Component {
  
  // Manipulate data coming in
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    }

    setTimeout(() => {
     this.setState({
       status: 1
     }) 
    }, 3000);
    
  }

  // Add necessary functions
  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }
  

  // Render the UI
  render() {

    return (
      <div>
      <a href={this.props.href} target={this.props.target} id={this.props.id} onClick={this.onMakeOlder.bind(this)} className={this.props.className}>{this.state.status}&nbsp;{this.props.text}&nbsp;{this.props.icon}<strong>{this.state.age}</strong>{this.props.children}</a>
      </div>
    )
  }
}