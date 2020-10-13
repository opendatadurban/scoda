import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CodebookDatatable from './Codebook_Datatable';

export default class Codebook extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
           <div>
                <Row>
                    <Col xs="8">
                        <CodebookDatatable />
                    </Col>
                    <Col xs="4">
                        
                    </Col>
                </Row>
           </div>
        );
    }
} 