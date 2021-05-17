import React, { Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    Input,
    FormGroup } from 'reactstrap';
import filterData from '../data/filterData.js';
import Toggle from './Toggle';

export default class CodebookFilterModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            c88: filterData[0],
            socr: filterData[1],
            sdg: filterData[2],
            searchFilterValue: "",
            filterData: null,
            criteriaChanged: false
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
            [this.state[filterName]]: [],
            criteriaChanged: true
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
            [this.state[filterName]]: copyObj,
            criteriaChanged: true
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
            searchFilterValue: "",
            criteriaChanged: false
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
                        
                    <Toggle 
                        type="checkbox"
                        labelClass="primary-label"
                        className="primary-toggle"
                        name="c88"
                        id="C88Primary"
                        onChange={(event) => this.toggleParent(event, this.state.c88.c88.parentSelected)}
                        value={ this.state.c88.c88.parentSelected }
                        checked={ this.state.c88.c88.parentSelected }
                        labelOff={this.state.c88.c88.label}
                        labelOn={this.state.c88.c88.label}
                    />

                </div>

                {
                    this.state.c88.c88.children.map((childItem, index) => {
                        return(
                            <Fragment key={index}>
                                <div className="row toggle-switch-row" key={index}>
                               
                                        <Toggle
                                            type="checkbox"
                                            id={index}
                                            value={childItem.selected}
                                            name="c88"
                                            checked={this.state.c88.c88.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                            labelOff={childItem.label}
                                            labelOn={childItem.label}
                                            className="secondary-toggle"
                                        />

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
                        <Toggle
                            type="checkbox"
                            name="socr"
                            id="SOCRPrimary"
                            className="primary-toggle"
                            labelClass="primary-label"
                            onChange={(event) => this.toggleParent(event, this.state.socr.socr.parentSelected)}
                            value={ this.state.socr.socr.parentSelected }
                            checked={ this.state.socr.socr.parentSelected }
                            labelOn={this.state.socr.socr.label}
                            labelOff={this.state.socr.socr.label}
                        />
                </div>

                {
                    this.state.socr.socr.children.map((childItem, index) => {
                        return(
                            <Fragment key={index}>
                                <div className="row toggle-switch-row">
                                        <Toggle
                                            type="checkbox"
                                            name="socr"
                                            id={"socr_" + index}
                                            checked={this.state.socr.socr.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                            labelOn={childItem.label}
                                            labelOff={childItem.label}
                                            className="secondary-toggle"
                                        />
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
                        <Toggle
                            type="checkbox"
                            name="sdg"
                            id="SDGPrimary"
                            className="primary-toggle"
                            labelClass="primary-label"
                            onChange={(event) => this.toggleParent(event, this.state.sdg.sdg.parentSelected)}
                            value={ this.state.sdg.sdg.parentSelected }
                            checked={ this.state.sdg.sdg.parentSelected }
                            labelOn={this.state.sdg.sdg.label}
                            labelOff={this.state.sdg.sdg.label}
                        />
                </div>
                {
                    this.state.sdg.sdg.children.map((childItem, index) => {
                        return(
                            <Fragment key={index}>
                                <div className="row toggle-switch-row">
                                        <Toggle
                                            type="checkbox"
                                            className="secondary-toggle"
                                            name="sdg"
                                            id={"sdg_" + index}
                                            checked={this.state.sdg.sdg.parentSelected || childItem.selected}
                                            onChange={(event) => {this.toggleChild(event, index)}}
                                            labelOn={childItem.label}
                                            labelOff={childItem.label}
                                            title={childItem.label}
                                        />
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
                            <div className="modal-container">
                                <FormGroup>
                                    <div style={{padding: '0 5%'}}>
                                        <div className="row">
                                            <div>
                                                <div className="modal-subtitle">
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
                                                <div className="close" onClick={() => this.toggleModal()}> </div>
                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                                <hr />
                                <div className="filter-content-wrapper" style={{padding: '0 5%'}}>
                                    <div className="row">
                                        <div className="modal-subtitle">Filter</div>
                                    </div>
                                    <div className="row filter-container-row">
                                        <div className="col">
                                            <div className="themes-c88-border"></div>
                                            <div className="toggle-subitem">
                                                <FormGroup>
                                                    { this.renderC88() }
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-socr-border"></div>
                                            <div>
                                                <div className="toggle-subitem">
                                                    <FormGroup>
                                                        { this.renderSOCR() }
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="themes-sdg-border"></div>
                                            <div>
                                                <div className="toggle-subitem">
                                                    <FormGroup>
                                                        { this.renderSDG() }
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2 pb-3">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <Button className={"modal-button filter " + [this.state.criteriaChanged && " active"]} outline onClick={() => {
                                                this.toggleModal()
                                                this.submitForm()
                                            }}>Apply Search & Filter</Button>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <Button className={"modal-button cancel " + [this.state.criteriaChanged && " active"]} outline onClick={() => this.reset()}>Clear Search & Reset Filters</Button>
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
