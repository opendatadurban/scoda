import React, { Component } from 'react';

import Image from '../components/Image';
import DataStoriesInfoBanner from '../components/DataStories.InfoBanner';


export default class ContentSectionRight extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let sectionImage = `/static/dist/img/scoda/datastories/${this.props.img}`;
        let main_class = `container-fluid ml-0 mt-3 p-0 data-story-card ${this.props.filter_type}`
        let filterTag = {
            boxSizing: 'border-box',
            height: '34px',
            width: '34px',
            border: '2px solid #FFFFFF',
            backgroundColor: this.props.filterColor,
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            letterSpacing: '0',
            lineHeight: '29px',
            textAlign: 'center',
            borderRadius:'50px',
            position:'relative',
            top:'40px',
            left:'8px'
        };

        return (
            <div className={main_class}>
                <a href={this.props.href_} className="card-trigger"></a>
               <div className="row">
                   <div className="col-0 ds-content-image">
                       <div style={filterTag}>{this.props.imageTag}</div>
                       <Image imgSrc={sectionImage} />
                   </div>
                   <div className="col-0 ds-right-content-width">
                       <div className="row">
                           <div className="col-0 mt-2 ds-content-title"><br/>{this.props.title}</div>
                       </div>
                       <div className="ds-right-content-hspacer"></div>
                       <div className="row">
                           <div className="col-0 ds-content-subtitle">{this.props.subtitle}</div>
                       </div>
                       <div className="ds-right-content-hspacer"></div>
                       <div className="row">
                            <div className="col-0 ds-content">{this.props.content}</div>
                       </div>
                       <div className="ds-right-content-hspacer"></div>
                       <div className="row">
                            <div className="col">
                                <DataStoriesInfoBanner 
                                  title={this.props.infoBannerTitle}
                                  subtitle={this.props.infoBannerDate}
                                  minutes={this.props.infoBannerMins}
                                />
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}