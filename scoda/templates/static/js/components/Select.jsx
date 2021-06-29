import React, { Component } from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
// import Label from './Label';
// import HelperText from './HelperText';
import PropTypes from 'prop-types';

// NOTICE
// This component makes use of the SELECT2 plugin, of which we're using the react wrapper found at https://github.com/rkit/react-select2-wrapper
// The width is set using this variable, which is accessed through inline styles below
var width = 100;

// const data = ['bug', 'feature', 'documents', 'discussion']; // Dummy data

export default class Select extends Component {
  render() {
    return (
      <div>

      {/* <Label className={this.props.className} text={this.props.label} required={this.props.required}></Label> */}

      <Select2
        multiple={this.props.multiple} 
        data={this.props.data} // For true data
        // data={data} // For dummy data
        name={this.props.name} 
        id={this.props.id} 
        className={["select "] + this.props.className}
        disabled={this.props.disabled}
        onChange={this.props.onChange}
        name={this.props.name} 
        value={this.props.value}
        required
        // required={required}
        options={
          {  
            placeholder:this.props.placeholder,
            width: width + '%',         
          }
        }
          
        />
      
        {/* <HelperText className={this.props.className + [this.props.error === true ? ' error' : '']} helperText={this.props.helperText}></HelperText> */}
        </div>
    );
  }
};

Select.propTypes = {
  /**
   * Select whether this is a multi-select or not
   */
  multiple: PropTypes.bool,
  /**
   * Enter text for placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Enter text for label
   */
  label: PropTypes.string,
  /**
   * Enter text for helper text below the component
   */
  helperText: PropTypes.string,
  /**
   * Add custom classes
   */
  className: PropTypes.string,
  /**
   * Disable or enable the component
   */
  disabled: PropTypes.bool,
  /**
   * Activate or deactivate the error state 
   */
  error: PropTypes.bool,
  /**
   * State whether input is required or not
   */
  required: PropTypes.bool,
  /**
   * Wire up data to the component in the form of an object
   */
  data: PropTypes.object,

};


