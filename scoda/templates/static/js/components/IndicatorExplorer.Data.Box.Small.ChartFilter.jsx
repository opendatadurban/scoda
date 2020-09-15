import React, { Component } from 'react';
import $ from 'jquery';


export default class IndicatorExplorerDataBoxChartFilter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate() {

        if(this.props.results.length !== 0) {
           this.loadGoogleVizApi(this.props.results, this.props.filterYear);
         }
     }

 
    loadGoogleVizApi(resultSet,selectedYear) {
        var options = {
            dataType: "script",
            cache: true,
            url: "https://www.google.com/jsapi",
          };
    
          $.ajax(options).done(function(){
            google.load("visualization", "1", {
              packages:['controls', 'bar', 'corechart', 'geochart'],
              callback: function() {
                    var dataSet = resultSet.table;

                    let rows = [];
                    let rowHeader = [];
                    for(let i=0;i<dataSet[0].length;i++) {
                        rowHeader.push(dataSet[0][i]);
                    }
                    
                    rows.push(rowHeader);

                    for(let j=1;j<dataSet.length;j++) {
                        let rowItem = dataSet[j];
                        let row = [];
                        if(rowItem[1].toString() === selectedYear) {
                        for(let k=0;k<rowItem.length;k++) {
                            row.push(rowItem[k]);
                        }
                        rows.push(row);
                        }
                    }
                    var data = google.visualization.arrayToDataTable(resultSet.table);

                    var categoryPicker1 = new google.visualization.ControlWrapper({
                        'controlType': 'CategoryFilter',
                        'containerId': 'categorySelector1',
                        'state': {'selectedValues':resultSet.cities},
                        'options': {
                            'filterColumnLabel': 'City',
                            'ui': {
                                'labelStacking': 'vertical',
                                'allowMultiple': true,
                                'allowNone': false,
                                'allowTyping': false,
                                'caption': 'Choose a city...'
                            }
                        }
                    });
        
                    var categoryPicker2 = new google.visualization.ControlWrapper({
                        'controlType': 'CategoryFilter',
                        'containerId': 'categorySelector2',
                        'state': {'selectedValues': resultSet.years},
                        'options': {
                            'filterColumnLabel': 'Year',
                            'ui': {
                                'labelStacking': 'vertical',
                                'allowTyping': false,
                                'allowMultiple': false,
                                'allowNone': false
                            }
                        }
                    });

                    //var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard'));
                    //dashboard.bind(categoryPicker1,categoryPicker2,bar);
                    //dashboard.draw(data);
                }
            });
        });
    }

    render() {


        return (
                        <div className="ie-box-card box-height">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      Select Data
                                  </div>
                              </div>
                            </div>
                            <div className="mt-2 ml-2 mr-2">
                                <div id="categorySelector2"></div>
                                <div id="cat-spacer" className="ml-2 mr-2 mt-4 mb-2 ie-small-border"></div>
                                <div id="categorySelector1"></div>
                            </div>
                            
                            {/*<div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">Year:</div>
                                <select id="year-selector" className="pl-3 mt-2 mr-2 ie-dropdown-small">
                                  {yearOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col mt-3 ml-2 mr-2 Smt-3 ie-small-border"></div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                <div className="ie-element-label-small">City:</div>
                                <select id="city-selector" className="pl-3 mt-2 mr-2 ie-dropdown-small">
                                  {cityOptions}
                                </select>
                                </div>                        
                            </div>
                            <div className="col-0 pt-2 pl-1 pr-1">
                            {pill}
        </div>*/}
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}