import React, { Component } from 'react';


export default class FilterPill extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let pillStyle = {
            boxSizing: 'border-box',
            height: '34px',
            width: '164px',
            border: `2px solid ${this.props.color}`,
            borderRadius: '25px',
            backgroundColor: this.props.color,
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '30px',
            textAlign: 'center'
        };

        return (
            <div style={pillStyle}>{this.props.filter}</div>
        )
    }
}