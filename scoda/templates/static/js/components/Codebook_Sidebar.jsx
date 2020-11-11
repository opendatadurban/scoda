import React, { Component } from 'react';
import { Modal, ModalBody, Spinner } from 'reactstrap';

const padding = {
    paddingBottom: '15px',
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

    getSDG(code) {
        if(!code) {
            return;
        }

        return code.match(/(?:)([0-9]+)/)[0];
    }

    renderFirstColumn() {
        return (
            <div>
                <div className="row sidebar-label">
                    INDICATOR SHORT NAME
                </div>
                <div className="row item-description">
                    { this.state.data.indicator }
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label">VAR CODE</div>
                        <div className="row item-codes">{ this.state.data.varCode }</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">IND. GROUP</div>
                        <div className="row item-codes">EE1.1.1</div>
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
                                <div className="circle-icon-text">{this.getC88Code(this.state.data.varCode)}</div>
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
                                <div className="circle-icon-text">{this.getSOCRCode(this.state.data.socr)}</div>
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
                                <div className="circle-icon-text">{this.getSDG(this.state.data.sdg)}</div>
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
                    <div className="row item-info">{this.state.data.definition}</div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label" >REPORTING RESPONSIBILITY</div>
                        <div className="row item-info">{this.state.data.reportingResponsibility}</div>
                    </div>
                    <div className="col">
                        <div className="row sidebar-label">GATHERING METHOD</div>
                        <div className="row item-info">Webscrape</div>
                    </div>
                </div>
                <div className="row" style={padding}>
                    <div className="col">
                        <div className="row sidebar-label">SOURCE</div>
                        <div className="row item-link">Stats SA Superweb General Household Survey</div>
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
                        <div className="row item-info">Number of households</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">NOTES ON CALCULATION</div>
                        <div className="row item-info">{this.state.data.notesOnCalculation}</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">FREQUENCY OF COLLECTION</div>
                        <div className="row item-info">{this.state.data.frequencyOfCollection}</div>
                    </div>
                    <div style={padding}>
                        <div className="row sidebar-label">PERIOD</div>
                        <div className="row item-info">January December</div>
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
                            <div className="item-info">{this.state.data.variableType}</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">AUTOMATABILITY</div>
                        </div>
                        <div className="row">
                            <div className="item-info">Yes</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">GRANULARITY</div>
                        </div>
                        <div className="row">
                            <div className="item-info">No</div>
                        </div>
                    </div>
                    <div className="col" style={padding}>
                        <div className="row">
                            <div className="sidebar-label">EXPANDABILITY</div>
                        </div>
                        <div className="row">
                            <div className="item-info">No</div>
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
            <div className="table-cell sidebar">
                { this.renderFirstColumn() }
                <hr style={padding} />
                { this.renderSecondColumn() }
                <hr style={padding} />
                { this.renderThirdColumn() }
                <hr style={padding} />
                { this.renderFourthColumn() }
                <div className="row" style={{ justifyContent: 'space-around' }}>
                    <button className="action-button">
                        <div className="action-button-text">View in Data Explorer</div>
                    </button>
                </div>
            </div>
        );
    }
}
