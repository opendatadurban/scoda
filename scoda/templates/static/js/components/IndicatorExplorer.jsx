import React, { Component } from 'react';

import IndicatorExplorerDataCard from '../components/IndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container pb-5">
               <div className="row pb-5 ">
                   <div className="col-12">
                        <IndicatorExplorerDataCard
                        />
                   </div>
               </div>
            </div>
        )
    }
}