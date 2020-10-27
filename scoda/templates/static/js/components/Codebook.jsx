import React, { Component } from 'react';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';
import { Button } from 'reactstrap';
import CodebookFilterModal from './Codebook_Filter_Search';

const modalStyle = {
    width: '1366px',
    opacity: '0.95',
    bordeRadius: '0 3px 0 0',
    backgroundColor: '#1E272E',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.3)',
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
            modalVisible: !this.state.visible,
        });
    }
    
    render() {
        return(
            <div  className="codebook-components">
                {
                    <Button className="filter-toggle" color="danger" onClick={() =>this.toggleModal()}>
                        <i className="fas fa-filter"></i>
                    </Button>
                }
                <div className="row">
                    <div>
                        {/*<CodebookFilterModal visible={false} toggle={this.toggleModal}></CodebookFilterModal>*/}
                    </div>
                    <div className="col-8 no-padding">
                        <CodebookDatatable />
                    </div>
                    <div className="col-4 no-padding">
                        <CodebookSidebar />
                    </div>
                </div>
            </div>
        );
    }
} 
