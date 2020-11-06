import React, { Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    Input,
    FormGroup } from 'reactstrap';
import filterData from '../data/filterData.js';

const modalStyle = {
    width: '1366px',
    opacity: '0.95',
    bordeRadius: '0 3px 0 0',
    backgroundColor: '#1E272E',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.3)',
};
const modalContainer = {
    minHeight: '720px',
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
            modalVisible: false,
            c88: filterData[0],
            socr: filterData[1],
            sdg: filterData[2],
            searchFilterValue: "",
            filterData: null
        };
    }

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    }

    toggleParent(event, isSelected) {
        const copyObj = this.state[event.target.name];
        const filterName = event.target.name;

        copyObj[filterName].parentSelected = !isSelected;
        copyObj[filterName].children.forEach(child => child.selected = !isSelected);

        // set an empty array when all items selected
        this.setState({
            // [this.state[filterName]]: copyObj
            [this.state[filterName]]: []
        });
    }

    toggleChild(event, index) {
        const copyObj = this.state[event.target.name];
        const filterName = event.target.name;

        copyObj[filterName].children[index].selected = !copyObj[filterName].children[index].selected;

        // if the parent is selected, this will deselect it when toggling a child
        if (copyObj[filterName].parentSelected === true) {
            copyObj[filterName].parentSelected = false;
        }

        // backwards logic to toggle parent item to true if all children are selected
        const deselectedChildren = copyObj[filterName].children.filter(child => child.selected === false);
        if (deselectedChildren.length === 0) {
            copyObj[filterName].parentSelected = true;
        }
        this.setState({
            [this.state[filterName]]: copyObj
        });
    }

    reset() {
        const copyC88 = this.state.c88;
        const copySOCR = this.state.socr;
        const copySDG = this.state.sdg;

        this.deselectToggles(copyC88.c88);
        this.deselectToggles(copySOCR.socr);
        this.deselectToggles(copySDG.sdg);

        this.setState({
            c88: copyC88,
            socr: copySOCR,
            sdg: copySDG,
            searchFilterValue: ""
        });
    }

    deselectToggles(parentObj) {
        parentObj.parentSelected = false;
        for(let child of parentObj.children) {
           child.selected = false;
        }
    }

    renderC88() {
        return(
            <Fragment>
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
                        <input
                            type="checkbox"
                            name="c88"
                            onChange={(event) => this.toggleParent(event, this.state.c88.c88.parentSelected)}
                            value={ this.state.c88.c88.parentSelected }
                            checked={ this.state.c88.c88.parentSelected }
                        />
                        <span className="slider round"></span>
                    </label>
                    { this.state.c88.c88.label }:

                </div>

                {
                    this.state.c88.c88.children.map((childItem, index) => {
                        return(
                            <Fragment>
                                <div className="row toggle-switch-row" key={index}>
                                    <label className="switch child-switch">
                                        <input
                                            type="checkbox"
                                            value={childItem.selected}
                                            name="c88"
                                            checked={this.state.c88.c88.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                    <p className="filter-label-text">{ childItem.label }</p>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        );
    }

    renderSOCR() {
        return (
            <Fragment>
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
                        <input
                            type="checkbox"
                            name="socr"
                            onChange={(event) => this.toggleParent(event, this.state.socr.socr.parentSelected)}
                            value={ this.state.socr.socr.parentSelected }
                            checked={ this.state.socr.socr.parentSelected }
                        />
                        <span className="slider round"></span>
                    </label>
                    { this.state.socr.socr.label }:
                </div>

                {
                    this.state.socr.socr.children.map((childItem, index) => {
                        return(
                            <Fragment key={index}>
                                <div className="row toggle-switch-row">
                                    <label className="switch child-switch">
                                        <input
                                            type="checkbox"
                                            name="socr"
                                            checked={this.state.socr.socr.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                    <p className="filter-label-text">{ childItem.label }</p>
                                </div>
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        )
    }

    renderSDG() {
        return(
            <Fragment>
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
                        <input
                            type="checkbox"
                            name="sdg"
                            onChange={(event) => this.toggleParent(event, this.state.sdg.sdg.parentSelected)}
                            value={ this.state.sdg.sdg.parentSelected }
                            checked={ this.state.sdg.sdg.parentSelected }
                        />
                        <span className="slider round"></span>
                    </label>
                    { this.state.sdg.sdg.label }:
                </div>
                {
                    this.state.sdg.sdg.children.map((childItem, index) => {
                        return(
                            <Fragment key={index}>
                                <div className="row toggle-switch-row">
                                    <label className="switch child-switch">
                                        <input
                                            type="checkbox"
                                            name="sdg"
                                            checked={this.state.sdg.sdg.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                    <p className="filter-label-text">{ childItem.label }</p>
                                </div>
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        );
    }

    handleChange(event) {
        this.setState({
            searchFilterValue: event.target.value
        })
    }

    transformFilterFields(children) {
        // used to return an array of strings for the filter query
        const selectedChildren = children.filter(child => child.selected === true);
        return selectedChildren.map(child => child.value);
    }

    submitForm() {
        const filterVal = {
            c88: this.transformFilterFields(this.state.c88.c88.children),
            socr: this.transformFilterFields(this.state.socr.socr.children),
            sdg: this.transformFilterFields(this.state.sdg.sdg.children),
            search: this.state.searchFilterValue
        }

        this.props.filter(filterVal);
    }

    render() {
        return (
            <>
                <Button className="filter-toggle" color="danger" onClick={() =>this.toggleModal()}>
                    <i className="fas fa-filter"></i>
                </Button>
                <Modal className="codebook-modal" isOpen={this.state.modalVisible} size="lg" backdrop={true} toggle={() => this.toggleModal()}>
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
                                                    <Input
                                                        value={ this.state.searchFilterValue }
                                                        onChange={(e) => this.handleChange(e)}
                                                        name="searchFilter"
                                                        type="text"
                                                        placeholder="Search by name..."
                                                        className="modal-search-bar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="pull-right">

                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                                <hr />
                                <div style={{padding: '0 5%'}}>
                                    <div className="row">
                                        <div style={modalSubtitle}>Filter</div>
                                    </div>
                                    <div className="row filter-container-row">
                                        <div className="col">
                                            <div className="themes-c88-border"></div>
                                            <div style={toggleSubItem}>
                                                <FormGroup>
                                                    { this.renderC88() }
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-socr-border"></div>
                                            <div>
                                                <div style={toggleSubItem}>
                                                    <FormGroup>
                                                        { this.renderSOCR() }
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-sdg-border"></div>
                                            <div>
                                                <div style={toggleSubItem}>
                                                    <FormGroup>
                                                        { this.renderSDG() }
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2 pb-3">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <Button className="modal-button filter" outline onClick={() => {
                                                this.toggleModal()
                                                this.submitForm()
                                            }}>Apply Search & Filter</Button>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <Button className="modal-button cancel" outline onClick={() => this.reset()}>Clear Search & Reset Filters</Button>
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
