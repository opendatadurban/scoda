import React, { Component } from 'react';

import $, { data } from 'jquery';
import canvg from 'canvg';

import IndicatorExplorerDataChart from '../components/IndicatorExplorer.Data.Charts';
import IndicatorExplorerDataTable from '../components/IndicatorExplorer.Data.Table';
import IndicatorExplorerDataMap from '../components/IndicatorExplorer.Data.Maps';

export default class IndicatorExplorerDataBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            csv:[]
        }
    }

    componentDidMount() {
        if(this.props.results.length > 0) {
           this.loadGoogleVizApi(this.props.results,this.props.filterYear);
        }
    }

    componentDidUpdate() {
        if(this.props.results.length > 0) {
            this.loadGoogleVizApi(this.props.results,this.props.filterYear);
        }
    }

    loadGoogleVizApi(dataSet,selectedYear) {
        var options = {
            dataType: "script",
            cache: true,
            url: "https://www.google.com/jsapi",
          };

          $.ajax(options).done(function(){
            google.load("visualization", "1", {
              packages:["corechart"],
              callback: function() {
                    var data = new google.visualization.DataTable();
    
                    for(let i=0;i<dataSet[0].length;i++) {
                        data.addColumn('string',dataSet[0][i]);
                    }
                    
                    for(let j=1;j<dataSet.length;j++) {
                        let rowItem = dataSet[j];
                        let row = [];
                        if(rowItem[1].toString() === selectedYear) {
                        for(let k=0;k<rowItem.length;k++) {
                        row.push(rowItem[k].toString());
                        }
                        data.addRow(row);
                      }
                    }

                    var csvData = google.visualization.dataTableToCsv(data);
                    
                    document.getElementById('csv').value=csvData;
                }
            });
        });
    }

    renderDataSet(dataSetType) {
        switch(dataSetType) {
            case "table" :
                    return <IndicatorExplorerDataTable 
                             results={this.props.results}
                             key={dataSetType}
                             filterYear={this.props.filterYear}
                            />
                break;
            case "chart": 
              return <IndicatorExplorerDataChart 
                        data={this.props.results}
                        key={dataSetType}
                        filterYear={this.props.filterYear}
                    />
            break;
            case "map":
                return <IndicatorExplorerDataMap
                        geo={this.props.results}
                        key={dataSetType}
                        filterYear={this.props.filterYear}
                        />
             break;
        }
    }

    download(downloadType) {
        switch(downloadType) {
            case "table":
                this.downloadTable();
            break;
            case "chart":
                this.downloadChart();
            break;
        }
        
    }

    downloadTable() {
        let encodedUri = 'data:application/csv;charset=utf-8,' + encodeURIComponent(document.getElementById('csv').value);
        this.downloadData(encodedUri,'data.csv');
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

    downloadChart() {
       let chartDiv = document.getElementById('chart');

       var chartArea = chartDiv.children[0];
       var svg = chartArea.innerHTML.substring(chartArea.innerHTML.indexOf("<svg"),
            chartArea.innerHTML.indexOf("</svg>") + 6);

        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
            
        let renderObject = canvg.fromString(ctx, svg);

        renderObject.start();

        let dataUri = canvas.toDataURL("image/png");

        this.downloadData(dataUri,'chart.png');
    }

    render() {

        return (
                        <div className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      {this.props.resultTitle}
                                  </div>
                                  <div className="col-0 mt-2 mr-4 float-right">
                                      <div className="ie-button-download" onClick={()=>this.download(this.props.resultType)}>Download</div>
                                  </div>
                              </div>
                            </div>
                            <div className="col ie-results pt-3 pl-2 pr-3">
                                <div className="ie-results mt-2 ml-2 mr-2">
                                  {this.renderDataSet(this.props.resultType)}
                                </div>  

                                <input type="hidden" id="csv"></input>   
                                <canvas style={{display:'none'}}></canvas>          
                            </div>
                        </div>
        )
    }
}