import React, { Component } from 'react';
import { Modal, ModalBody, Spinner } from 'reactstrap';

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

        this.state = {
            data: null  ,
            loader: true
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
            loader: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Workaround for an issue when selecting a child item, the side-bar component does not update
        //  This helps us trigger a re-render
        if (prevProps.data !== this.props.data){
            this.setState({
                data: this.props.data
            })
        }
    }

    getC88Code(code) {
        if(!code) {
            return;
        }
        return code.split(".")[0]
    }

    getSOCRCode(code) {
        if(!code) {
            return;
        }
        const strArr = code.split(" ")

        let sorc = ""

        strArr.map((str) => {
            sorc += str.charAt(0)
        })

        return sorc
    }

    renderFirstColumn() {
        return (
            <div>
                <div className="row sidebar-label">
                    INDICATOR SHORT NAME
                </div>
                <div className="row" style={itemDescription}>
                    { this.state.data.indicator }
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label">VAR CODE</div>
                        <div className="row" style={itemCodes}>{ this.state.data.varCode }</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">IND. GROUP</div>
                        <div className="row" style={itemCodes}>EE1.1.1</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">THEMES:</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">C88</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#F73E55',
                                borderRadius: '50%' }}>
                                <div style={circleIconText}>{this.getC88Code(this.state.data.varCode)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">SOCR</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#EAB04B',
                                borderRadius: '50%'
                            }}>
                                <div style={circleIconText}>{this.getSOCRCode(this.state.data.socr)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">SDG</div>
                        <div className="row">
                            <div style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: '#4F9DA6',
                                borderRadius: '50%'
                            }}>
                                <div style={circleIconText}>{this.state.data.sdg}</div>
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
                    <div className="row sidebar-label">DEFINITION</div>
                    <div className="row" style={itemInfo}>{this.state.data.definition}</div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label" >REPORTING RESPONSIBILITY</div>
                        <div className="row" style={itemInfo}>{this.state.data.reportingResponsibility}</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">GATHERING METHOD</div>
                        <div className="row" style={itemInfo}>Webscrape</div>
                    </div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label">SOURCE</div>
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
                        <div className="row sidebar-label">UNIT OF MEASUREMENT</div>
                        <div className="row" style={itemInfo}>Number of households</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">NOTES ON CALCULATION</div>
                        <div className="row" style={itemInfo}>{this.state.data.notesOnCalculation}</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">FREQUENCY OF COLLECTION</div>
                        <div className="row" style={itemInfo}>{this.state.data.frequencyOfCollection}</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">PERIOD</div>
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
                            <div className="sidebar-label">VARIABLE TYPE</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>{this.state.data.variableType}</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">AUTOMATABILITY</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>Yes</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">GRANULARITY</div>
                        </div>
                        <div className="row">
                            <div style={itemInfo}>No</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">EXPANDABILITY</div>
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
        if(this.state.loader) {
            return(
                <Modal id="loader" isOpen={this.state.loader} className="modal-dialog-centered loader">
                    <ModalBody>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-0 ml-3 pt-4">
                                <Spinner type="grow" color="secondary" size="sm"/>
                                <Spinner type="grow" color="success" size="sm"/>
                                <Spinner type="grow" color="danger" size="sm"/>
                                <Spinner type="grow" color="warning" size="sm"/>
                            </div>
                            <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
                        </div>
                        <br/>
                    </ModalBody>
                </Modal>
            )
        }
        return(
            <div className="table-cell" style={sidebarStyle}>
                { this.renderFirstColumn() }
                <hr style={padding} />
                { this.renderSecondColumn() }
                <hr style={padding} />
                { this.renderThirdColumn() }
                <hr style={padding} />
                { this.renderFourthColumn() }
                <div className="row" style={{ justifyContent: 'space-around' }}>
                    <button style={actionButton}>
                        <div style={actionButtonText}>View in Data Explorer</div>
                    </button>
                </div>
            </div>
        );
    }
}
