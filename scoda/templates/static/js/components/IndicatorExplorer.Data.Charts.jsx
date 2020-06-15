import React, { PureComponent } from 'react';
import $ from 'jquery';

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
                         row.push(rowItem[k].toString());
                      }
                      rows.push(row);
                    }
                }

                var bar = new google.visualization.ChartWrapper({
                  'chartType': 'Bar',
                  'containerId': 'chart',
                  'dataTable': rows,
                  'options': {
                      stacked: true,
                      legend: {position: 'right'},
                      bars: 'vertical',
                      vAxis: {minValue: 0},
                      hAxis: {slantedText: true},
                      height: '461px',
                      width:'296px',
                      bar: {groupWidth: '99%'},
                      tooltip: { isHtml: true },
                      series: resultSet.series
                  },
                  view: {'columns': resultSet.view}
              });

              bar.draw();
              
            }
        });
    });
}

render() {

    return (
      <div>
          <div id="chart" style={{height:'461px'}}></div>
      </div>
    );
  }
}
