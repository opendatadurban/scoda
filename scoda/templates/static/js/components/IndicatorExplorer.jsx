import React, { Component } from 'react';

import IndicatorExplorerDataCard from '../components/IndicatorExplorer.Data.Card';

export default class IndicatorExplorer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //Remove spinner
       $('.spinner--container').remove();

        //window.scrollTo(0,0);

        this.props.logoHide ? (
            document.addEventListener("scroll", () => {
                const logo = window.scrollY < 50 ? "none" : "block";

                this.setState({ logo_hide: logo });
            })
        ) : this.setState({ logo_hide: "block" });
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