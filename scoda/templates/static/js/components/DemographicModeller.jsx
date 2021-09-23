import React, { Component } from 'react';

import DemographicModellerDataCard from '../components/DemographicModeller.Data.Card';
import DemographicModellerFooterCard from '../components/DemographicModeller.Footer.Card';

export default class DemographicModeller extends Component {
    constructor(props) {
        super(props);

        this.downloadMethodology = this.downloadMethodology.bind(this);
        this.downloadTimeChart = this.downloadTimeChart.bind(this);
        this.downloadMapData = this.downloadMapData.bind(this);
    }

    downloadMapData(region,ward) {
        let fileName = 'demographics.csv';
        let dataUrl = '/demographics/' + region + '/' + ward + '/download';

        this.downloadData(dataUrl,fileName);
    }

    downloadTimeChart() {
        let dataUri = document.getElementById('timeChartPng').value;

        this.downloadData(dataUri,'chart.png');
    }

    downloadMethodology() {
        let fileName = 'report.pdf';
        let encodedUri = '/static/dist/data/report.pdf';
        this.downloadData(encodedUri,fileName);
    }

    downloadData(uri,filename) {
        let link = document.createElement("a");
        link.download = filename;
        link.href = uri;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
               <div className="row">
                   <div className="col-sm-12">
                        <DemographicModellerDataCard
                         downloadEvent={this.downloadTimeChart}
                         downloadMapEvent={this.downloadMapData}
                        />
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-12">
                       <DemographicModellerFooterCard 
                       downloadEvent={this.downloadMethodology}/>
                   </div>
               </div>
            </div>
        )
    }
}