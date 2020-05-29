import React, { Component } from 'react';

import Image from '../components/Image';


export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let bannerImage = `/static/dist/img/scoda/datastories/${this.props.section}.png`;
        let viewButtonTitle = this.props.section.toUpperCase() + ' ' + this.props.viewType;

        return (
            <div className="container-fluid ml-0 mt-0 p-0">
               <div className="row">
                   <div className="col-0">
                       <Image className="ds-banner-logo" imgSrc={bannerImage}/>
                   </div>
                   <div className="ds-banner-content-vspacer"></div>
                   <div className="col-10">
                       <div className="row">
                           <div className="col-8 ds-banner-title">{this.props.title}</div>
                           <div className="col-2">
                                <div className="ds-banner-view-button">View the {viewButtonTitle}</div>
                           </div>
                       </div>
                       <div className="ds-banner-content-hspacer"></div>
                       <div className="row">
                            <div className="col-12 ds-banner-content">{this.props.content}</div>
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-12 mt-3 ds-banner-hr"></div>
               </div>
            </div>
        )
    }
}