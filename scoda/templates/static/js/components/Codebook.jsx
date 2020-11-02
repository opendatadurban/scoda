import React, { Component } from 'react';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';
import {
    Button,
    Container,
    Row,
    Col} from 'reactstrap';
import CodebookFilterModal from './Codebook_Filter_Search';

export default class Codebook extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Container fluid={true} className="codebook-components" style={{ leftPadding: '0px' }}>
                <CodebookFilterModal />
                <Row>

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
