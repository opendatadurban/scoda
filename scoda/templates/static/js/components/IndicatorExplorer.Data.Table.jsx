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

                    var selectedYear = dataSet[1][1];
                
                    for(let i=0;i<dataSet[0].length;i++) {
                        data.addColumn('string',dataSet[0][i] + '<br/><br/>');
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

                    data.addRow();

                    var cssClassNames = {
                        'headerRow': 'table-header-cell',
                        'tableRow': 'table-cell',
                        'oddTableRow': 'table-cell',
                        'selectedTableRow': 'table-cell',
                        'hoverTableRow': 'table-cell',
                        'headerCell': 'table-header-cell',
                        'tableCell': 'table-cell',
                        'table':'table'
                    };

                    var options = {'showRowNumber': false, 'allowHtml': true, 'cssClassNames': cssClassNames};
                        
                    var table = new google.visualization.Table(document.getElementById('table'));

                    table.draw(data, options);
                }
            });
        });
    }

    render() {

        return (
            <div style={{overflow:'hidden'}}>
                <div id="table" className="table-container"></div>
            </div>
        )
    }
}
