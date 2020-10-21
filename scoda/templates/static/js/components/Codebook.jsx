import React, { Component } from 'react';
import CodebookDatatable from './Codebook_Datatable';
import CodebookSidebar from './Codebook_Sidebar';

export default class Codebook extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-8">
                        <CodebookDatatable />
                    </div>
                    <div className="col-4">
                        <CodebookSidebar />
                    </div>
                </div>
            </div>
        );
    }
} 
