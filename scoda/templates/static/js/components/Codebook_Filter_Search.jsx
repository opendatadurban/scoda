import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Container,
    Row,
    Col,
    Form,
    Input,
    FormGroup } from 'reactstrap';

const modalStyle = {
    width: '1366px',
    opacity: '0.95',
    bordeRadius: '0 3px 0 0',
    backgroundColor: '#1E272E',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.3)',
};
const modalContainer = {
    height: '720px',
    width: '100%',
    opacity: '0.95',
    borderRadius: '0 3px 0 0',
    backgroundColor: '#1E272E',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.3)',
    // zIndex: '1',
    // position: 'absolute',
};
const modalSubtitle = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '30px',
};
const toggleSubItem = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    letterSpacing: '0',
    lineHeight: '30px',
};

export default class CodebookFilterModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
          visible: false,
        };
    }

    componentDidMount() {
        this.setState({
            visible: this.props.isOpen
        })
    }

    render() {
        return (
            <>
                <Modal className="codebook-modal" isOpen={this.state.visible} size="lg" backdrop={true} toggle={() => this.props.toggleModal()}>
                    <ModalBody style={{ padding: '0px' }}>
                        <Form>
                            <div style={modalContainer}>
                                <FormGroup>
                                    <div style={{padding: '0 5%'}}>
                                        <div className="row">
                                            <div>
                                                <div style={modalSubtitle}>
                                                    Search
                                                </div>
                                                <div>
                                                    <Input type="text" placeholder="Search by name..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                                <hr />
                                <div style={{padding: '0 5%'}}>
                                    <div className="row">
                                        <div style={modalSubtitle}>Filter</div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{ paddingLeft: '70px' }}>
                                            <div className="themes-c88-border"></div>
                                            <div style={toggleSubItem}>
                                                <FormGroup>
                                                    <div className="row" style={{
                                                        color: '#F73E55',
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        letterSpacing: '0',
                                                        lineHeight: '20px',
                                                        alignItems: 'flex-end'
                                                    }}>
                                                        <label className="switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                        C88 Themes:
                                                    </div>

                                                    <div className="row">
                                                        <label className="switch  child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>City Transformation
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                        Energy & Electricity
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Environment & Waste
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Fire & Emergency
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Governance
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Housing & Community
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Transport & Roads
                                                    </div>
                                                    <div className="row">
                                                        <label className="switch child-switch">
                                                            <Input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>Water & Sanitation
                                                    </div>
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-socr-border"></div>
                                            <div>
                                                <div style={toggleSubItem}>
                                                    <FormGroup>
                                                        <div className="row" style={{
                                                            color: '#EAB04B',
                                                            fontFamily: 'Montserrat',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            letterSpacing: '0',
                                                            lineHeight: '20px',
                                                            alignItems: 'flex-end'
                                                        }}>
                                                            <label className="switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>
                                                            SOCR Themes:
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Demography
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Inclusive Cities
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Poverty and Inequality
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Productive Cities
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Sustainable Cities
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Well Governed Cities
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-sdg-border"></div>
                                            <div>
                                                <div style={toggleSubItem}>
                                                    <FormGroup>
                                                        <div className="row" style={{
                                                            color: '#4F9DA6',
                                                            fontFamily: 'Montserrat',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            letterSpacing: '0',
                                                            lineHeight: '20px',
                                                            alignItems: 'flex-end'
                                                        }}>
                                                            <label className="switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>
                                                            SDG Themes:
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 1.
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 2.
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 3.
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 4.
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 5.
                                                        </div>
                                                        <div className="row">
                                                            <label className="switch child-switch">
                                                                <Input type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>Goal 6.
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Button outline onClick={() => this.props.toggleModal()}>Apply Search & Filter</Button>
                                        </div>

                                        <div className="col">
                                            <Button outline>Clear Search & Reset Filters</Button>
                                        </div>

                                        <div className="col">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
