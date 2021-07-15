import React, { Component } from 'react';
import $, { data } from 'jquery';
import canvg from 'canvg';

export default class DemographicModellerDataBoxSmallChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartHeight:'310px'
        }

        this.download = this.download.bind(this);
    }

    componentDidMount() {
        if(this.props.table.length > 0) {
            this.loadGoogleVizApi(this.props.table, this.props.max);
         }
    }

    componentDidUpdate() {
        if(this.props.table.length != 0) {
           this.loadGoogleVizApi(this.props.table, this.props.max);
        }
    }

    loadGoogleVizApi(table,max) {
        var options = {
            dataType: "script",
            cache: true,
            url: "https://www.google.com/jsapi",
          };
    
         $.ajax(options).done(function(){
            google.load("visualization", "1", {
              packages:['controls', 'bar', 'corechart', 'geochart','line'],
              callback: function() {
            
                let data = google.visualization.arrayToDataTable(table);

                let options = {
                  curveType: 'function',
                  legend: {position:'none'},
                  chartArea: {top: "10%"},
                  lineWidth: 5,
                  tooltip: { isHtml: true },
                  hAxis: {gridlines: {count: 4}},
                  axes: {
                            y: {
                                all: {
                                    range: {
                                        max: max,
                                        min: 0
                                    }
                                }
                            }
                        },
                  colors: ['#BD0026'],
                };
        
                 let chart = new google.charts.Line(document.getElementById('timechart'));
        
                 chart.draw(data, google.charts.Line.convertOptions(options));

                google.visualization.events.addListener(chart,'ready', function(event) {
                    var chartArea = document.getElementById('timechart').children[0];
   
                    var svgObject = chartArea.children[0].children[0];
    
                    var svg = svgObject.outerHTML;
    
                    let canvas = document.querySelector('canvas');
                    let ctx = canvas.getContext('2d');
    
                    let renderObject = canvg.fromString(ctx, svg);
    
                    renderObject.start();
    
                    let dataUri = canvas.toDataURL("image/png");
    
                    document.getElementById('timeChartPng').value = dataUri;
                  });
                }
            })
        });
    }

    download() {
        this.props.downloadEvent();
    }

    render() {

        return (
                        <div className="ie-box-card mt-4 mb-0">
                            <div className="dm-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      {this.props.title}
                                  </div>
                                  <div className="col-0 mt-2 mr-4 float-right">
                                      <div className="ie-button-download" onClick={this.download}>Download</div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-0 pt-2 pl-2 pr-1">
                              <canvas style={{display:'none'}}></canvas>
                              <div id="timechart" style={{height:this.state.chartHeight}}></div>
                              <input type="hidden" id="timeChartPng"></input>
                            </div>
                            <div className="row mt-3"></div>
                        </div>
        )
    }
}