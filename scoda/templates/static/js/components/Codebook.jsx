import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';

export default class Codebook extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Container fluid={true}>
                <Row>
                    <Col xs="8">
                        <CodebookDatatable />
                    </Col>
                    <Col xs="4">
                        <CodebookSidebar />
                    </Col>
                </Row>
            </Container>
        );
    }
} 
