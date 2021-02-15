import React, { Component } from 'react';

import Image from '../components/Image';


export default class DataStoriesInfoBanner extends Component {
    constructor(props) {
        super(props);
    }
    render() {

       
        let main_class = `ds-durban-edge-card ds-info-banner-width ml-0 mt-2 p-0 mt-4 data-story-card ${this.props.filter_type}`
        return (
            <div className={main_class}>
               <div className="row m-0" >
                   <div className="col-0 ds-info-banner-image">
                       <Image imgSrc={this.props.imgSrc}/>
                   </div>
                   <div className="col-9 pl-3">
                       <div className="row">
                           <div className="col-10 ds-info-banner-detail-width">
                               <div className="row">
                                    <div title={this.props.showTitle} className="col ds-info-banner-title">{this.props.title}</div>
                                </div>
                                <div className="row">
                                    <div className="col ds-info-banner-subtitle">{this.props.subtitle}</div>
                               </div>
                           </div>
                          
                           <div className="col-0 info-banner-mins">
                               <div className="row">
                                 <div className="col-0 ds-info-banner-title"><span className="ds-info-banner-title-num">{this.props.minutes}</span></div>
                               </div>
                               <div className="row">
                                        <div className="ds-info-banner-subtitle"><span className="ds-info-banner-title-mins">MINS</span></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}