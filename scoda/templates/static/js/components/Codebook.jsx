import React, { Component } from 'react';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';
import { Container, Row, Col, Modal, ModalBody, Spinner } from 'reactstrap';
import CodebookFilterModal from './Codebook_Filter_Search';
import axios from 'axios';
import $ from 'jquery';

export default class Codebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            loader: false,
            filterData: null
        };

        this.setSelected = this.setSelected.bind(this);
        this.filterData = this.filterData.bind(this);
        this.scrollToAnchor = this.scrollToAnchor.bind(this);
    }

    componentDidMount() {
        this.showLoader();
        this.getFirstChildItem();
        this.scrollToAnchor('content-scoda', 'html,body', true);
    }

    scrollToAnchor(id, scrollElement, animate){
        // Set the anchor
        var to = $('#' + id);
        // Animate or jump scrollElement to anchor point
        if (animate) {
          $(scrollElement).animate({scrollTop: to.offset().top},'fast');
        } else {
          $(scrollElement).scrollTop(to.offset().top);
        }
        console.log('scroll function run')
      }

    setSelected(childItem) {
        this.setState({
            selected: childItem,
        });
    }

    showLoader() {
        this.setState({
            loader: true
        });
    }

    hideLoader() {
        this.setState({
            loader: false
        });
    }

    filterData(filters) {
        this.setState({
            filterData: filters
        })
    }

    getFirstChildItem() {
        axios.get('/api/codebook/1').then(res => {
            const firstItem = res.data.slice(1, 2);
            this.setState({
                selected: firstItem[0].children[0]
            });
            this.hideLoader();
        });
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
            <Container fluid={true} className="codebook-components" style={{ leftPadding: '0px' }}>
                <CodebookFilterModal filter={this.filterData} />
                <Row>
                    <Col xs="12" sm="12" md="12" lg="8" className="no-padding">
                        <CodebookDatatable setSelectedChild={ this.setSelected } filteredData={ this.state.filterData } />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="4" className="no-padding">
                        <CodebookSidebar data={ this.state.selected } />
                    </Col>
                </Row>
            </Container>
        );
    }
}
