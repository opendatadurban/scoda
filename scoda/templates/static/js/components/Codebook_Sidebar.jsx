import React, { Component } from 'react';

const sidebarStyle = {
  backgroundColor: '#1E272E',
  padding:' 40px',
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
    paddingBottom: '20px',
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
const borderLine = {
    height: '1px',
    width: '100%',
    border: '1px solid #B2BEC3',
};
const padding = {
    paddingBottom: '15px',
};
const actionButton = {
    height: '24px',
    width: '252px',
    border: '1px solid #FFAD5A',
    borderRadius: '11px',
    backgroundColor: '#FFAD5A',
};
const actionButtonText = {
    height: '14px',
    width: '250px',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '14px',
    textAlign: 'center',
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
                <div className="row" style={padding}>
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
            </div>
        );
    }

    renderSecondColumn() {
        return(
            <div>
                <div style={padding}>
                    <div className="row" style={label}>DEFINITION</div>
                    <div className="row" style={itemInfo}>This is the total number of households that have access to
                        electricity
                    </div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row" style={label}>REPORTING RESPONSIBILITY</div>
                        <div className="row" style={itemInfo}>National</div>
                    </div>
                    <div className="col">
                        <div className="row" style={label}>GATHERING METHOD</div>
                        <div className="row" style={itemInfo}>Webscrape</div>
                    </div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row" style={label}>SOURCE</div>
                        <div className="row" style={link}>Stats SA Superweb General Household Survey</div>
                    </div>
                </div>
            </div>
        );
    }

    renderThirdColumn() {
        return(
            <div className="row">
                <div className="col">
                    <div style={padding}>
                        <div className="row" style={label}>UNIT OF MEASUREMENT</div>
                        <div className="row" style={itemInfo}>Number of households</div>
                    </div>
                    <div style={padding}>
                        <div className="row" style={label}>NOTES ON CALCULATION</div>
                        <div className="row" style={itemInfo}>NA</div>
                    </div>
                    <div style={padding}>
                        <div className="row" style={label}>FREQUENCY OF COLLECTION</div>
                        <div className="row" style={itemInfo}>Annual Midyear following year</div>
                    </div>
                    <div style={padding}>
                        <div className="row" style={label}>PERIOD</div>
                        <div className="row" style={itemInfo}>January December</div>
                    </div>
                </div>
            </div>
        );
    }

    renderFourthColumn() {
        return(
            <div>
                <div className="row">
                    <div className="col" style={padding}>
                        <div className="row">
                            <div style={label}>VARIABLE TYPE</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>Float</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div style={label}>AUTOMATABILITY</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>Yes</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={padding}>
                        <div className="row">
                            <div style={label}>GRANULARITY</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>No</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div style={label}>EXPANDABILITY</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>No</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className="table-cell" style={sidebarStyle}>
                { this.renderFirstColumn() }
                <hr style={padding} />
                { this.renderSecondColumn() }
                <hr style={padding} />
                { this.renderThirdColumn() }
                <hr style={padding} />
                { this.renderFourthColumn() }
                <button style={actionButton}>
                    <div style={actionButtonText}>View in Data Explorer</div>
                </button>
            </div>
        );
    }
}
