import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const c88Themes = [

];

const socrThemes = [

];

const sdgThemes = [

];

export default class CodebookFilterSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Modal>
                    <ModalHeader>Search</ModalHeader>
                    <ModalBody>
                        Filter
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
            </>
        );
    }
}
