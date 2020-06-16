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
        if(this.props.results.length !== 0) {
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
              packages:['controls', 'bar', 'corechart', 'geochart'],
              callback: function() {
                    var data = new google.visualization.DataTable();

                    dataSet = dataSet.table;

                    let rows = [];
                    let rowHeader = [];
                    for(let i=0;i<=dataSet[0].length-1;i++) {
                        rowHeader.push(dataSet[0][i]);
                    }
                
                    rows.push(rowHeader);
                    
                    for(let j=1;j<=dataSet.length-1;j++) {
                        let rowItem = dataSet[j];
                        let row = [];
                        if(rowItem[1].toString() === selectedYear) {
                        for(let k=0;k<rowItem.length;k++) {
                        row.push(rowItem[k].toString());
                        }
                        rows.push(row);
                      }
                    }

                    //var data = new google.visualization.arrayToDataTable(rows);

                    var data = new google.visualization.DataTable(document.getElementById('table'));
                    var csvData = google.visualization.dataTableToCsv(data);

                    //var meta = 'Definition:' + ',{{ indicator.definition }}' + '\n' + 'Unit:' + ',{{ indicator.unit }}' + '\n'  +'Frequency:' + ',{{ indicator.frequency }}' + '\n' + 'Theme:' + ',{{ indicator.theme }}' + '\n' + 'Sub-theme:' + ',{{ indicator.sub_theme }}' + '\n' + 'Source' + ',{{ indicator.source }}' + '\n';

                    //var csvString = rowHeader.join(',') + '\n' + csvData + '\n';
                    
                    //document.getElementById('csv').value=csvString;
                }
            });
        });
    }

    renderDataSet(dataSetType,filter) {
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
                        filter={filter}
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

        let dataUri = document.getElementById('chartPng').value;

        this.downloadData(dataUri,'chart.png');
    }

    render() {
        let downloadEvent = '';
        if(this.props.resultType !== 'map') {
          downloadEvent = <div className="ie-button-download" onClick={()=>this.download(this.props.resultType)}>Download</div>;
        }

        return (
            <div id="dashboard">
                        <div id="card" className="ie-box-card">
                            <div className="ie-box-card-header">
                              <div className="row">
                                  <div className="col ml-3">
                                      {this.props.resultTitle}
                                  </div>
                                  <div className="col-0 mt-2 mr-4 float-right">
                                      {downloadEvent}
                                  </div>
                              </div>
                            </div>
                            <div className="col pt-3">
                                <div className="mt-2 ml-3 mb-4">
                                  {this.renderDataSet(this.props.resultType,this.props.filter)}
                                </div>  

                                <input type="hidden" id="csv"></input>   
                                <canvas style={{display:'none'}}></canvas>          
                            </div>
                        </div>
                </div>
        )
    }
}