import React, { Component } from 'react';
import Chart from 'chart.js';


export default class TabAndFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
           selected: 'People and Households'
        };
    }

    componentDidMount() {
        Chart.platform.disableCSSInjection = true;

        this.renderMainChart();
        this.renderSubChartOne();
    }

    toggleFilterStyle(tabId){
        let activeClass = 'ds-vertical-tabs-active';
        let disabledClass = 'ds-vertical-tabs-none';

        let activeElement = document.getElementById(tabId);
        activeElement.classList.add(activeClass);
        activeElement.classList.remove(disabledClass);

        let tabArray = document.getElementsByTagName('a');

        for(let i=0;i<=tabArray.length-1;i++){
            let tabElement = tabArray[i].id;

            if(tabElement.indexOf('pill') !== -1) {
                if(tabElement !== tabId) {
                    let inactiveElement = document.getElementById(tabElement);
                    inactiveElement.classList.add(disabledClass);
                    inactiveElement.classList.remove(activeClass);
                }
            }
        }
    }

    renderMainChart() {
        const chartRef = document.getElementById('mainChart').getContext('2d');

        new Chart(chartRef, {
            type: 'bar',
            data: {
                labels: ['JHB','EKH','TSH','MNG','MSU','ETH','BUF','NMS','CT'],
                datasets: [{
                    label: ['2001'],
                    data: [1,1,1,1,1,1,1,1,1],
                    backgroundColor: '#9CD1BC'
                  },
                  {
                    label: ['2011'],
                    data: [1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5],
                    backgroundColor: '#4FA683'
                  }]
            },
            options: {

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display:false,
                    position: 'bottom',
                },
                fontSize: '14px',
                fontFamily: 'Montserrat'
            }
        });
    }

    renderSubChartOne() {
        const chartRef = document.getElementById('subChart1').getContext('2d');

        new Chart(chartRef, {
            type: 'bar',
            data: {
                labels: ['2001', '2011'],
                datasets: [{
                    label: 'Trad.',
                    backgroundColor: '#4F9DA6',
                    data: [15,10]
                }, {
                    label: 'Formal',
                    backgroundColor: '#FFAD5A',
                    data: [70,80]
                }, 
                {
                    label: 'Informal',
                    backgroundColor: '#F05252',
                    data: [15,10]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio:false,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                },
                legend: {
                    position: 'right',
                    reverse:true
                },
                fontSize: '12px',
                fontFamily: 'Montserrat'
            }
        });
    }
    renderTabPane(parent,websiteUrl) {

        let tabs = [];
        let panes = [];

        switch(parent) {
            case 'SACN':
                let resultSet = { 
                    "data":
                    [{
                        id:1,
                        value: 'People and Households',
                        mode:  'active',
                        display:'show',
                        chart: 'Growth: Number of Households: 9 Major Cities',
                        notes: 'The population of Johannesburg has doubled between 2001 and 2011. Fewer people are living in more houses which means the City has to provide infrastructure at a rate faster than the city is growing.',
                        city: 'Johannesburg',
                        year: '2011',
                        subchart: [
                            {
                                url:'https://stepsa.org',
                                link: 'See More at: StepSA.org'
                            },
                            {
                                url:'https://www.jhbsocr.org.za',
                                link: 'View JHB SoCR'
                            },
                        ]
                    },
                    {
                        id:2,
                        value: 'City Finance',
                        mode: 'none',
                        display:'none',
                        subchart: [
                            {
                                url:'http://stepsa.org',
                                link: 'See More at: StepSA.org'
                            },
                            {
                                url:'https://www.jhbsocr.org.za',
                                link: 'View JHB SoCR'
                            },
                        ]
                    },
                    {
                        id:3,
                        value: 'Service Delivery',
                        mode:'none',
                        display:'none',
                        subchart: [
                            {
                                url:'https://stepsa.org',
                                link: 'See More at: StepSA.org'
                            },
                            {
                                url:'https://www.jhbsocr.org.za',
                                link: 'View JHB SoCR'
                            },
                        ]
                    }]
                };

                tabs = resultSet.data.map((result,index) =>(
                    <a id={`pill-${result.value.split(' ').join('-')}`} key={`pill-${result.value.split(' ').join('-')}`}  className={`nav-link ds-vertical-tabs-${result.mode}`} id={`v-pills-${result.value.split(' ').join('-')}-tab`} data-toggle="pill" href={`#v-pills-${result.value.split(' ').join('-')}`} role="tab" aria-controls={`v-pills-${result.value.split(' ').join('-')}`} aria-selected="true" onClick={this.toggleFilterStyle.bind(this,`v-pills-${result.value.split(' ').join('-')}-tab`)}>{result.value}</a>
                  ));

                panes = resultSet.data.map((result,index) =>(
                    <div key={`pill-pane-${result.value.split(' ').join('-')}`} className={`tab-pane fade ${result.display} ${result.mode}`} id={`v-pills-${result.value.split(' ').join('-')}`} role="tabpanel" aria-labelledby={`v-pills-${result.value.split(' ').join('-')}-tab`}>
                        <div className="row ml-0 ds-tabs-filter-header mt-4">
                            <div id="title" className="col-8">{result.value}</div>
                            <div className="col-0 float-right"><img src='/static/dist/img/scoda/download.webp' /></div>
                            <div className="col-2 float-right ml-1 mt-2">
                             <div className="ds-banner-view-button" onClick={()=>window.open(`${websiteUrl}`,'_new')}>View the {parent} Website</div>
                            </div>
                        </div>
                        <div className="row ml-0 mt-4">
                            <div className="col-8">
                               <div className="row">
                                   <div className="col ds-tabs-filter-card-chart">
                                            <div className="row">
                                                <div className="mt-3 ml-3 ds-tabs-filter-subheading">
                                                    {result.chart}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="mt-3 ml-3 w-100">
                                                <canvas
                                                        id="mainChart"
                                                        className="w-100"
                                                        height="352"
                                                    />
                                                </div>
                                            </div>
                                   </div>
                               </div>
                               <div className="row mt-4">
                                <div className="col ds-tabs-filter-card-bottom">
                                    <div className="row ds-filter-tabs-context-border">
                                        <div className="mt-2 ml-3 ds-filter-tabs-context-header">
                                            <b>Context Notes:</b> {result.city}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ds-filter-tabs-context-content mt-3 ml-3 mb-3 mr-3">
                                        {result.notes}
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="col">
                                <div className="row">
                                    <div className="col ml-3 ds-tabs-filter-card">
                                        <div className="row">
                                        <div className="mt-2 text-break ml-3 ds-filter-tabs-context-header">
                                            <b>Dwelling Types: </b> <br/>{result.city}
                                        </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="mt-5 mb-3 ml-4 w-100">
                                            <canvas
                                                    id="subChart1"
                                                    className="w-75"
                                                    height="167"
                                                />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-2 mb-3">
                                    
                                            <div className="ds-filter-tabs-chart-button" onClick={()=>window.open(`${result.subchart[0].url}`,'_new')}>{result.subchart[0].link}</div>
                                   
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col ml-3 ds-tabs-filter-card">
                                        <div className="row">
                                         <div className="mt-2 text-break ml-3 ds-filter-tabs-context-header">
                                            <b>Population Density {result.year}: </b><br/> {result.city}
                                         </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="mt-5 mb-4">
                                                <div className="row ds-filter-tabs-textreport-header">
                                                    2 696
                                                </div>
                                                <div className="row ds-filter-tabs-textreport-footer">
                                                   PEOPLE / KM
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-3 justify-content-center">
                                          <div className="ds-filter-tabs-chart-button" onClick={()=>window.open(`${result.subchart[1].url}`,'_new')}>{result.subchart[1].link}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                  ));
            break;
        }


        return (
            <div className="row ml-0">
                <div className="col-0 ml-0 ds-vertical-tabs-box">
                    <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {tabs}
                    </div>
                </div>
            <div className="col-10 ml-0">
                <div className="tab-content" id="v-pills-tabContent">
                    {panes}
                </div>
            </div>
        </div>
      )
    }

    render() {
        const tabs = this.props.tabs.map((result,index) =>(
          <a key={`tab-${result.name}`} className={`nav-item nav-link ${result.mode}`} id={`tab-${result.name}`} data-toggle="tab" href={`#nav-${result.name}-content`} role="tab" aria-controls={`nav-${result.name}-content`} aria-selected="true">{result.name}</a>
        ));

        const tabPanes = this.props.tabs.map((result,index) =>(
            <div key={`tab-content-${result.name}`}  className={`tab-pane fade show ${result.mode}`} id={`nav-${result.name}-content`} role="tabpanel" aria-labelledby={`nav-${result.name}-tab`}>
                <div key={`tab-container-${result.name}`} className="container-flui pl-0 container-fluid-max-width">
                    {this.renderTabPane(result.name, result.url)}
                </div>
          </div>
        ));


        return (
            <div className="container-fluid ml-0 mt-0 p-0">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <span className="nav-stretch"></span>
                        {tabs}
                    </div>
               </nav>
               <div className="tab-content" id="nav-tabContent">
                  {tabPanes}
                </div>
            </div>
        )
    }
}