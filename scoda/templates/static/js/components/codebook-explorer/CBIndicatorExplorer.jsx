import React, { Component } from 'react';

import CBIndicatorExplorer from '../codebook-explorer/CBIndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container pb-5">
               <div className="row pb-5 ">
                   <div className="col-12">
                        <CBIndicatorExplorer
                        />
                   </div>
               </div>
            </div>
        )
    }
}