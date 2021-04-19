import React, { Component } from 'react';

import CBIndicatorExplorer from '../codebook-explorer/CBIndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
        this.state={
            indicator_id : this.props.match.params.id
        }
    }

    render() {

        return (
            <div className="container pb-5">
               <div className="row pb-5 ">
                   <div className={"col-12 " + this.props.className }>
                        <CBIndicatorExplorer indicator_id={this.state.indicator_id}
                        />
                   </div>
               </div>
            </div>
        )
    }
}