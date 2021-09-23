import React, { Component } from 'react';

import CBIndicatorExplorer from '../codebook-explorer/CBIndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
        this.state={
            indicator_id : this.props.match.params.id
        }
    }

    componentDidMount(){
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
          window.scrollTo(0,0);
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