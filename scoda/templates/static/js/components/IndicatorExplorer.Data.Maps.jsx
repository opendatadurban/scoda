import React, { Component } from 'react';
import $ from 'jquery';

export default class IndicatorExplorerDataMap extends Component {
  
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
      try
      {
        //if(typeof this.props.geo !== undefined) {
              this.loadGoogleVizApi(this.props.geo);
        //}
      }
      catch(e) {
        
      }
    }
  
    loadGoogleVizApi(resultSet) {

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
    
                    var selectedYear = resultSet.year;

                    var data = new google.visualization.DataTable();
                    
                    
                    data.addColumn('string',dataSet[0][0]);
                
                    for(let j=1;j<dataSet.length;j++) {
                        let rowItem = dataSet[j];
                        let row = [];
                        if(rowItem[1].toString() === selectedYear) {
                          data.addRow([rowItem[0].toString()]);
                         }
                    }
                    
                    var map = new google.visualization.ChartWrapper({
                      'chartType': 'GeoChart',
                      'containerId': 'map',
                      'options': {
                          region: 'ZA',
                          displayMode: 'markers',
                          resolution: 'provinces',
                          theme: 'material',
                          colorAxis: {colors: ['#FED976', '#FC4E2A', '#800026']},
                          height: '100%',
                          width:'100%',
                          tooltip: { isHtml: true },
                          keepAspectRatio: true
                      }
                  });

                  map.setDataTable(data);
          
                  map.draw();
                }
            });
        });
    }
    
    render() {
    
        return (
          <div>
              <div id="map"></div>
          </div>
        );
      }
}


