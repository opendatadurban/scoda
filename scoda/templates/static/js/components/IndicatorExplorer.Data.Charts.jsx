import React, { PureComponent } from 'react';

import $ from 'jquery';
import canvg from 'canvg';


export default class IndicatorExplorerDataChart extends PureComponent {
  constructor(props) {
        super(props);

        this.state = {
          containerWidth:'100%',
          containerHeight: '450px'
      }

      this.handleResize = this.handleResize.bind(this);
}

componentDidMount() {
  window.addEventListener('resize', this.handleResize);

  this.handleResize();
}

componentDidUpdate() {
  window.addEventListener('resize', this.handleResize);
  this.handleResize();

   if(this.props.data.length !== 0) {
    this.loadGoogleVizApi(this.props.data, this.props.filterYear,'100%','100%');
    }

}

handleResize() {

  var element = document.getElementById('chart');
  var positionInfo = element.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width;

  var elementT = document.getElementById('tableD');
  var positionInfoT = elementT.getBoundingClientRect();
  var heightT = positionInfoT.height;
  var widthT = positionInfoT.width;

  let windowWidth = document.body.clientWidth;
  let windowHeight = document.body.clientHeight;

  if(windowWidth <= 768) {
      windowWidth = width;
      windowHeight = '225px';
  }
  else {
      widthT = '96%';
      windowWidth = '100%';
      windowHeight = '450px';
  }

  document.getElementById('chart').style.height = windowHeight;
  document.getElementById('chart').style.width = windowWidth;
  
  if(this.props.data.length !== 0) {
      this.loadGoogleVizApi(this.props.data,this.props.filterYear,windowWidth,windowHeight);
  }
}

loadGoogleVizApi(resultSet,selectedYear,winWidth,winHeight) {
    var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi",
      };

     $.ajax(options).done(function(){
        google.load("visualization", "1", {
          packages:['controls', 'bar', 'corechart', 'geochart'],
          callback: function() {
                document.getElementById('chartPng').value = '';

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
                  'containerId':'chart',
                  'options': {
                      stacked: true,
                      legend: {position: 'right'},
                      bars: 'vertical',
                      vAxis: {minValue:0},
                      hAxis: {slantedText: true},
                      bar: {groupWidth: '99%'},
                      tooltip: { isHtml: true },
                      chartArea: {left:'10%',right:'60%'},
                      height:winHeight,
                      width:winWidth,
                      fontfamily: 'Montserrat',
                      fontsize:'10',
                      series: resultSet.series,
                  },
                  view: {'columns': resultSet.view}
              };

              var bar = new google.visualization.ChartWrapper(options);

              var cssClassNames = {
                 'headerRow': 'google-visualization-table-table',
                'tableRow': 'table-cell',
                'oddTableRow': 'table-cell',
                'selectedTableRow': 'table-cell',
                'hoverTableRow': 'table-cell',
                'tableCell': 'table-cell',
                'table':'google-visualization-table-table'
            };
 
            var table = new google.visualization.ChartWrapper({
                'chartType': 'Table',
                'containerId': 'tableD',
                'options': {
                    'showRowNumber': false, 'allowHtml': true, 'cssClassNames': cssClassNames
                  }
              });

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

              var data = google.visualization.arrayToDataTable(resultSet.table);

              var dashboard = new google.visualization.Dashboard();
              dashboard.bind([categoryPicker1,categoryPicker2],[bar,table]);
              dashboard.draw(data);

              google.visualization.events.addListener(table,'ready', function(event) {
    
                var tableData = table.getDataTable();
                var csvData = google.visualization.dataTableToCsv(tableData);
 
                var csvString = rowHeader.join(',') + '\n' + csvData + '\n';
                     
                document.getElementById('csv').value=csvString;

                let tmpDiv = document.createElement('div');
                tmpDiv.setAttribute('style','width:2000px;height:800px;font-size:10px,fontFamily:Montserrat,visibility:hidden');
                document.body.appendChild(tmpDiv);

                var optionsTmp = {
                  'chartType': 'Bar',
                  'dataTable': table.getDataTable(),
                  'options': {
                      stacked: true,
                      legend: {position: 'right'},
                      bars: 'vertical',
                      vAxis: {minValue:0},
                      hAxis: {slantedText: true},
                      bar: {groupWidth: '99%'},
                      tooltip: { isHtml: true },
                      chartArea: {left:'10%',right:'60%'},
                      height:'100%',
                      width:'100%',
                      fontfamily: 'Montserrat',
                      fontsize:'10',
                      series: resultSet.series,
                  },
                  view: {'columns': resultSet.view}
                };
                
                 var barTmp = new google.visualization.ChartWrapper(optionsTmp);
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
              });
            }
        })
    });
}

render() {
    return (
      <div>
          <div id="chart" style={{fontSize:'9px',fontFamily:'Montserrat',fontWeight:'500'}}></div>
          <input type="hidden" id="chartPng"></input>
      </div>
    );
  }
}
