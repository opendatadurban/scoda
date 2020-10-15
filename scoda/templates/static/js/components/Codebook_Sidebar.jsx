import React, { Component, Fragment } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class CodebookSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderFirstColumn() {
        return (
            <Fragment>
                <Row>
                    INDICATOR SHORT NAME
                </Row>
                <Row>
                    Number of households having access to electricity
                </Row>
                <Row>
                    <Col>
                        <Row>VAR CODE</Row>
                        <Row>EE1.1.1</Row>
                    </Col>
                    <Col>
                        <Row>IND. GROUP</Row>
                        <Row>EE1.1.1</Row>
                    </Col>
                    <Col>
                        <Row>THEMES:</Row>
                    </Col>
                    <Col>
                        <Row>C88</Row>
                        <Row>EE</Row>
                    </Col>
                    <Col>
                        <Row>SOCR</Row>
                        <Row>WG</Row>
                    </Col>
                    <Col>
                        <Row>SDG</Row>
                        <Row>7</Row>
                    </Col>
                </Row>
            </Fragment>
        );
    }

    renderSecondColumn() {
        return(
            <Fragment>
                <Row>DEFINITION</Row>
                <Row>This is the total number of households that have access to electricity</Row>
                <Row>
                    <Col>
                        <Row>REPORTING RESPONSIBILITY</Row>
                        <Row>National</Row>
                    </Col>
                    <Col>
                        <Row>GATHERING METHOD</Row>
                        <Row>Webscrape</Row>
                    </Col>
                </Row>
                <Row>SOURCE</Row>
                <Row>Stats SA Superweb General Household Survey</Row>
            </Fragment>
        );
    }

    renderThirdColumn() {

    }

    render() {
        return(
            <Container>
                { this.renderFirstColumn() }
                { this.renderSecondColumn() }
                <Row></Row>
                <Row></Row>
            </Container>
        );
    }
}
