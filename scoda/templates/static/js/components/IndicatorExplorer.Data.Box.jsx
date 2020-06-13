import React, { Component } from 'react';

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
           this.loadGoogleVizApi(this.props.results);
        }
    }

    componentDidUpdate() {
        if(this.props.results.length > 0) {
            this.loadGoogleVizApi(this.props.results);
        }
    }

    loadGoogleVizApi(dataSet) {
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
                        for(let k=0;k<rowItem.length;k++) {
                        row.push(rowItem[k].toString());
                        }
                        data.addRow(row);
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
                            />
                break;
            case "chart": 
              return <IndicatorExplorerDataChart 
                        data={this.props.results}
                    />
            break;
            case "map":
                return <IndicatorExplorerDataMap
                        data={this.props.results}/>
             break;
        }
    }

    download() {
        let encodedUri = 'data:application/csv;charset=utf-8,' + encodeURIComponent(document.getElementById('csv').value);

        let link = document.createElement("a");
        link.download = 'table-data.csv';
        let uri = encodedUri;
        link.href = uri;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                                      <div className="ie-button-download" onClick={this.download}>Download</div>
                                  </div>
                              </div>
                            </div>
                            <div className="col pt-3 pl-3 pr-3">
                                <div className="ie-box-results mtp-2 ml-2 mr-2">
                                  {this.renderDataSet(this.props.resultType)}
                                </div>  
                                <input type="hidden" id="csv"></input>                      
                            </div>
                        </div>
        )
    }
}