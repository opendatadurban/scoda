import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const icon ="./../../../../static/dist/img/icon_departments.svg"


export default class Sidebar_left extends Component {
  constructor() {
    super();
    this.state = {
      sidebar: ""
    };
    this.sidebarTrigger = this.sidebarTrigger.bind(this);
  }


  // Function that adjusts state to open or close sidebar by adding or removing the "open" class
  sidebarTrigger() {
    console.log(this.state.sidebar === "open")
    if (this.state.sidebar) {
      this.setState({
        sidebar: ""
      })
    } else {
      this.setState({
        sidebar: "open"
      })
    }
  }

  render() {
    return (
      <div className={["sidebar_left "] + this.state.sidebar} id="sideBarleft">

        <div className="sidebar_left--tab">
            <div className="sidebar_left--tab--trigger" onClick={this.sidebarTrigger}>
            <img className="icon-left" src={icon} alt="Sidebar Left Icon"/>
            <span>{this.props.title}</span>
            {this.state.sidebar === "open" ? <i className="circle"><FontAwesomeIcon icon={faChevronRight}/></i> : <img className="icon-right" src={icon}  alt="Sidebar Right Icon"/>}

          </div>
        </div>

        <div className="sidebar_left--panel container">

          {this.props.content}
          {this.props.children}

        </div>
      </div>

    );
  }
}

Sidebar_left.propTypes = {
  /**
   * Title text for the modal
   */
  title: PropTypes.string,
  /**
   * Accepts children components
   */
  children: PropTypes.element,
  /**
   * Accepts content as well, if preffered over children
   */
  content: PropTypes.string
};