import React, { PureComponent } from 'react';

import $ from 'jquery';
import canvg from 'canvg';

export default class IndicatorExplorerDataChart extends PureComponent {
  constructor(props) {
        super(props);
}

componentDidUpdate() {
    if(this.props.data.length !== 0) {
        this.loadGoogleVizApi(this.props.data, this.props.filterYear);
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

                var options = {
                  'chartType': 'Bar',
                  'dataTable': rows,
                  'options': {
                      stacked: true,
                      legend: {position: 'right'},
                      bars: 'vertical',
                      vAxis: {minValue:0},
                      hAxis: {slantedText: true},
                      bar: {groupWidth: '99%'},
                      tooltip: { isHtml: true },
                      chartArea: {left:'10%',right:'60%'},
                      height:'450',
                      width:'100%',
                      fontfamily: 'Montserrat',
                      fontsize:'10',
                      series: resultSet.series,
                  },
                  view: {'columns': resultSet.view}
              };

              var bar = new google.visualization.ChartWrapper(options);
              bar.draw(document.getElementById('chart'));

              let tmpDiv = document.createElement('div');
              tmpDiv.setAttribute('style','width:2000px;height:800px;font-size:10px,fontFamily:Montserrat,visibility:hidden');
              document.body.appendChild(tmpDiv);

              var barTmp = new google.visualization.ChartWrapper(options);
              barTmp.draw(tmpDiv);

              google.visualization.events.addListener(barTmp, 'ready',
              function(event) {
                var chartArea = tmpDiv.children[0];

                var svgObject = chartArea.children[0].children[0];

                var svg = svgObject.outerHTML;

                let canvas = document.querySelector('canvas');
                let ctx = canvas.getContext('2d');

                let renderObject = canvg.fromString(ctx, svg);

                renderObject.start();

                let dataUri = canvas.toDataURL("image/png");

                document.getElementById('chartPng').value = dataUri;

                document.body.removeChild(tmpDiv);
              });
            }
        });
    });
}

render() {
    return (
      <div>
          <div id="chart" style={{fontSize:'9px',fontFamily:'Montserrat',fontWeight:'500',width:'100%',height:'100%'}}></div>
          <input type="hidden" id="chartPng"></input>
      </div>
    );
  }
}
