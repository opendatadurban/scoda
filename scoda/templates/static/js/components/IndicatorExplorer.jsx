import React, { Component } from 'react';

import IndicatorExplorerDataCard from '../components/IndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container px-5">
               <div className="row">
                   <div className="col">
                        <IndicatorExplorerDataCard
                        />
                   </div>
               </div>
            </div>
        )
    }
}