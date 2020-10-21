import React, { Component } from 'react';

const sidebarStyle = {
  backgroundColor: '#1E272E',
};
const circleIconText = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '10px',
    letterSpacing: '0',
    lineHeight: '13px',
    textAlign: 'center',
    paddingTop: '15%',
};
const label = {
    height: '13px',
    color: '#B2BEC3',
    fontFamily: 'Montserrat',
    fontSize: '10px',
    letterSpacing: '0',
    lineHeight: '13px',
};
const itemDescription = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '0',
    lineHeight: '24px',
};
const itemCodes = {
    height: '20px',
    width: '43px',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '20px',
};
const itemInfo = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    letterSpacing: '0',
    lineHeight: '20px',
};
const link = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'italic',
    letterSpacing: '0',
    lineHeight: '20px',
};

export default class CodebookSidebar extends Component {
    constructor(props) {
        super(props);
    }

    renderFirstColumn() {
        return (
            <div>
                <div className="row" style={label}>
                    INDICATOR SHORT NAME
                </div>
                <div className="row" style={itemDescription}>
                    Number of households having access to electricity
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row" style={label}>VAR CODE</div>
                        <div className="row" style={itemCodes}>EE1.1.1</div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>IND. GROUP</div>
                        <div className="row" style={itemCodes}>EE1.1.1</div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>THEMES:</div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>C88</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#F73E55',
                                borderRadius: '50%' }}>
                                <div style={circleIconText}>EE</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>SOCR</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#EAB04B',
                                borderRadius: '50%'
                            }}>
                                <div style={circleIconText}>WG</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>SDG</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#4F9DA6',
                                borderRadius: '50%'
                            }}>
                                <div style={circleIconText}>7</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }

    renderSecondColumn() {
        return(
            <div>
                <div className="row" style={label}>DEFINITION</div>
                <div className="row" style={itemInfo}>This is the total number of households that have access to electricity</div>
                <div className="row">
                    <div className="col">
                        <div className="row" style={label}>REPORTING RESPONSIBILITY</div>
                        <div className="row" style={itemInfo}>National</div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>GATHERING METHOD</div>
                        <div className="row" style={itemInfo}>Webscrape</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row" style={label}>SOURCE</div>
                        <div className="row" style={link}>Stats SA Superweb General Household Survey</div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }

    renderThirdColumn() {
        return(
            <div className="row">
                <div className="col">
                    <div>
                        <div className="row" style={label}>UNIT OF MEASUREMENT</div>
                        <div className="row" style={itemInfo}>Number of households</div>
                    </div>
                    <div>
                        <div className="row" style={label}>NOTES ON CALCULATION</div>
                        <div className="row" style={itemInfo}>NA</div>
                    </div>
                    <div>
                        <div className="row" style={label}>FREQUENCY OF COLLECTION</div>
                        <div className="row" style={itemInfo}>Annual Midyear following year</div>
                    </div>
                    <div>
                        <div className="row" style={label}>PERIOD</div>
                        <div className="row" style={itemInfo}>January December</div>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }

    renderFourthColumn() {
        return(
            <div>
                <div>
                    <div className="row">
                        <div className="col" style={label}>VARIABLE TYPE</div>
                        <div className="col" style={label}>AUTOMATABILITY</div>
                    </div>
                    <div className="row">
                        <div className="col" style={itemInfo}>Float</div>
                        <div className="col" style={itemInfo}>Yes</div>
                    </div>
                </div>
               <div>
                   <div className="row">
                       <div className="col" style={label}>GRANULARITY</div>
                       <div className="col" style={label}>EXPANDABILITY</div>
                   </div>
                   <div className="row">
                       <div className="col" style={itemInfo}>No</div>
                       <div className="col" style={itemInfo}>No</div>
                   </div>
               </div>
            </div>
        );
    }

    render() {
        return(
            <div className="table-cell" style={sidebarStyle}>
                { this.renderFirstColumn() }
                { this.renderSecondColumn() }
                { this.renderThirdColumn() }
                { this.renderFourthColumn() }
            </div>
        );
    }
}
