import React, { Component } from 'react';
import Label from './Label';


export default class Switch_text extends Component {

  render(){
    return (
      <div className="form-group switch_text">
          
          {this.props.title ? <Label className="title" text={this.props.title}/> : ''}
          <input className="form-control " id="optionOne" name="type_id" required={true} type="radio" value="1" onChange={this.props.action} checked={this.props.toggle}/>
          <Label className="public btn option-one" text="Number" for="optionOne" />
          <input className="form-control" id="optionTwo" name="type_id" required={true} type="radio" value="2" onChange={this.props.action} />
          <Label className="private btn option-two" text="Percent" for="optionTwo"/>

        </div>
    );
  }
};