import React, { Component } from 'react';


export default class FilterPillSmall extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let pillStyle = {
            boxSizing: 'border-box',
            height: '19px',
            borderRadius: '12.5px',
            backgroundColor: 'rgba(207,221,232,0.6)',
            color: '#4A4A4A',
            fontFamily: 'Montserrat',
            fontSize: '10px',
            letterSpacing: '0',
            lineHeight: '17px',
            textAlign:'left'
        };

        let cursorStyle = {
            cursor: 'pointer'
        };

        return (
            <div style={pillStyle}>
                <div className="col ml-0">
                <i className="fas fa-times" style={cursorStyle}></i>&nbsp;&nbsp;{this.props.filter}
                </div>
            </div>
        )
    }
}