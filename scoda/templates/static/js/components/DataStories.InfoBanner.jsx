import React, { Component } from 'react';

import Image from '../components/Image';


export default class DataStoriesInfoBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let bannerImage = `/static/dist/img/scoda/datastories/edge.png`;
        let main_class = `ds-info-banner-width ml-0 mt-2 p-0 data-story-card ${this.props.filter_type}`
        return (
            <div className={main_class}>
               <div className="row">
                   <div className="col-0 ds-info-banner-image">
                       <Image imgSrc={bannerImage}/>
                   </div>
                   <div className="ds-info-banner-vspacer"></div>
                   <div className="col-0">
                       <div className="row">
                           <div className="col-0 ds-info-banner-detail-width">
                               <div className="row">
                                    <div className="col-0 ds-info-banner-title">{this.props.title}</div>
                                </div>
                                <div className="row">
                                    <div className="col-0 ds-info-banner-subtitle">{this.props.subtitle}</div>
                               </div>
                           </div>
                          
                           <div className="col-0 pl-1">
                               <div className="row">
                                 <div className="col-0 ds-info-banner-title">&nbsp;&nbsp;{this.props.minutes}</div>
                               </div>
                               <div className="row">
                                        <div className="ds-info-banner-subtitle">MINS</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}