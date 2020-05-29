import React, { Component } from 'react';

import DemographicModellerDataCard from '../components/DemographicModeller.Data.Card';
import DemographicModellerFooterCard from '../components/DemographicModeller.Footer.Card';

export default class DemographicModeller extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container px-5">
               <div className="row">
                   <div className="col-12">
                        <DemographicModellerDataCard
                        />
                   </div>
               </div>
               <div className="row">
                   <div className="col-12">
                       <DemographicModellerFooterCard />
                   </div>
               </div>
            </div>
        )
    }
}