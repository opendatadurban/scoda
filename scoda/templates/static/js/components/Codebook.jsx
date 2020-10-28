import React, { Component } from 'react';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';
import { Button, Modal, ModalBody, Container, Row, Col } from 'reactstrap';
import CodebookFilterModal from './Codebook_Filter_Search';

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
const searchboxStyle = {
    width: '291px',
    borderRadius: '12.5px',
    backgroundColor:' #FFFFFF',
    fontSize: 'small',
};

export default class Codebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    }

    renderModal() {
        return (
            <>
                <Modal isOpen={this.state.modalVisible} size="lg" backdrop={true} toggle={() => this.toggleModal()}>
                    <ModalBody>
                        <div style={modalContainer}>
                            <div style={{padding: '0 5%'}}>
                                <div className="row">
                                    <div>
                                        <div style={modalSubtitle}>
                                            Search
                                        </div>
                                        <div>
                                            <input style={searchboxStyle} type="text" placeholder="Search by name..."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div style={{padding: '0 5%'}}>
                                <div className="row">
                                    <div style={modalSubtitle}>Filter</div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={toggleSubItem}>

                                            <div className="row" style={{
                                                color: '#F73E55',
                                                fontFamily: 'Montserrat',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                letterSpacing: '0',
                                                lineHeight: '20px',
                                            }}>C88 Themes:
                                            </div>

                                            <div className="row">City Transformation</div>
                                            <div className="row">Energy & Electricity</div>
                                            <div className="row">Environment & Waste</div>
                                            <div className="row">Fire & Emergency</div>
                                            <div className="row">Governance</div>
                                            <div className="row">Housing & Community</div>
                                            <div className="row">Transport & Roads</div>
                                            <div className="row">Water & Sanitation</div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div style={toggleSubItem}>
                                            <div className="row" style={{
                                                color: '#EAB04B',
                                                fontFamily: 'Montserrat',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                letterSpacing: '0',
                                                lineHeight: '20px',
                                            }}>SOCR Themes:</div>
                                            <div className="row">Demography</div>
                                            <div className="row">Inclusive Cities</div>
                                            <div className="row">Poverty and Inequality</div>
                                            <div className="row">Productive Cities</div>
                                            <div className="row">Sustainable Cities</div>
                                            <div className="row">Well Governed Cities</div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div style={toggleSubItem}>
                                            <div className="row" style={{
                                                color: '#4F9DA6',
                                                fontFamily: 'Montserrat',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                letterSpacing: '0',
                                                lineHeight: '20px',
                                            }}>SDG Themes:</div>
                                            <div className="row">Goal 1. </div>
                                            <div className="row">Goal 2. </div>
                                            <div className="row">Goal 3. </div>
                                            <div className="row">Goal 4. </div>
                                            <div className="row">Goal 5. </div>
                                            <div className="row">Goal 6. </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="col">
                                        <div onClick={() => this.props.toggle()}>
                                            Apply Search & Filter
                                        </div>
                                    </div>

                                    <div className="col">
                                        Clear Search & Reset Filters
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
    
    render() {
        return(
            <Container fluid={true} className="codebook-components" style={{ leftPadding: '0px' }}>
                {
                    <Button className="filter-toggle" color="danger" onClick={() =>this.toggleModal()}>
                        <i className="fas fa-filter"></i>
                    </Button>
                }
                <Row>
                    <div>
                        { this.renderModal() }
                    </div>
                    <Col xs="auto" sm="auto" md="8" className="no-padding">
                        <CodebookDatatable />
                    </Col>
                    <Col xs="auto" sm="auto" md="4" className="no-padding">
                        <CodebookSidebar />
                    </Col>
                </Row>
            </Container>
        );
    }
} 
