import React, { Component } from 'react';

import FilterPill from '../components/Filter.Pill';


export default class FilterBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let i = 0;
        let filterArray = this.props.filters.split(',');
        let colorArray = this.props.colors.split(',');

        const pill = filterArray.map((filter,index) =>(
            <div className="col-0 p-1"><FilterPill key={filter} filter={filter} color={colorArray[index]} /></div>
        ));

        return (
            <div className="container-fluid ml-0 mt-0 p-0 d-none">
               <div className="row">
                   <div className="col-0 ds-filter-title">
                       FILTERS:
                   </div>
               </div>
               <div className="row">
                  {pill}
               </div>
            </div>
        )
    }
}