import React, { Component } from 'react';
import $ from 'jquery';

export default class IndicatorExplorerDataTable extends Component {
    constructor(props) {
        super(props);
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

                    var table = new google.visualization.Table(document.getElementById('table'));

                    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
                }
            });
        });
    }

    render() {

        return (
            <div>
                <div id="table"></div>
            </div>
        )
    }
}
