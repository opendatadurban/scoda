// ======================================================================================================

//                                        COMPONENT NOTES

// This component is built off boostraps toggle. The state has been built into the component, but doesn't 
// effect the ui. The ui changes in css checking the 'checked' property. The state just toggles onChange 
// of the checkbox. 

// ======================================================================================================

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      label: this.props.labelOff,
      customStyles: {
        backgroundColor: this.props.indicatorColour 
      }
    }
    this.toggleTrigger = this.toggleTrigger.bind(this);
  }

// Function that adjusts state to open or close sidebar by adding or removing the "open" class
toggleTrigger() {
  if (this.state.toggle === false) {
    this.setState({
      toggle : true,
      label : this.props.labelOn
    })
  } else {
    this.setState({
      toggle : false,
      label : this.props.labelOff
    })
  }
  console.log(this.state.toggle)
}

  render(){
    return (
      <div className={["toggle "] + this.props.className}>
  
        <div className="custom-control custom-switch">
          <input type="checkbox" checked={this.props.checked} name={this.props.name} value={this.props.value} className="custom-control-input" onChange={this.toggleTrigger, this.props.onChange} id={this.props.id} />
          <label className={"custom-control-label " + this.props.labelClass} title={this.props.title} htmlFor={this.props.id}>{this.state.label.replace(/(.{40})..+/, "$1...")}</label>
          {this.props.indicator && <div className={["toggle--indicator "] + this.state.toggle}  style={(this.state.toggle === true) ? this.state.customStyles : null }></div> }
        </div>
  
      </div>
    );
  }
};

Toggle.propTypes = {
  /**
   * Each item needs an item which defines units and allows individual switching
   */
  id: PropTypes.number.isRequired,
  /**
   * Text for the toggle when it is turned on
   */
  labelOn: PropTypes.string,
  /**
   * Text for the toggle when it is turned off
   */
  labelOff: PropTypes.string,

};


