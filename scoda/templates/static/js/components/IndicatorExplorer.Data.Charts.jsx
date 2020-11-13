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
  
  /*if(this.props.data.length !== 0) {
      this.loadGoogleVizApi(this.props.data,this.props.filterYear,windowWidth,windowHeight);
  }*/
}

loadGoogleVizApi(resultSet,selectedYear,winWidth,winHeight) {
    var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi",
      };

     $.ajax(options).done(function(){
        google.load("visualization", "1", {
          packages:['controls', 'bar', 'corechart', 'geochart','line'],
          callback: function() {
                document.getElementById('chartPng').value = '';

                var dataSet = resultSet.table;

                
                var options = {};

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
              
               
                if(resultSet.plot_type === 2) {
                  $('#categorySelector2').show();
                  $('#cat-spacer').show();

                  options = {
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

              }

                if(resultSet.plot_type === 1) {
                  options = {
                    'chartType': 'Line',
                    'containerId': 'chart',
                    'options': {
                      legend: {position: 'right' },
                      axes: {
                          y: {
                              all: {
                                  range: {
                                      max: resultSet.max,
                                      min: resultSet.min
                                  }
                              }
                          }
                      },
                      hAxis: {slantedText: true},
                      height: winHeight,
                      lineWidth: 4,
                      interpolateNulls: true,
                      tooltip: { isHtml: true },
                      pointSize: 5     
                   }
                  };

              }

              let bar = new google.visualization.ChartWrapper(options);

              let cssClassNames = {
                 'headerRow': 'google-visualization-table-table',
                'tableRow': 'table-cell',
                'oddTableRow': 'table-cell',
                'selectedTableRow': 'table-cell',
                'hoverTableRow': 'table-cell',
                'tableCell': 'table-cell',
                'table':'google-visualization-table-table'
            };
 
            let table = new google.visualization.ChartWrapper({
                'chartType': 'Table',
                'containerId': 'tableD',
                'options': {
                    'showRowNumber': false, 'allowHtml': true, 'cssClassNames': cssClassNames
                  }
              });

              let categoryPicker1 = new google.visualization.ControlWrapper({
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

           let categoryPicker2 = new google.visualization.ControlWrapper({
                'controlType': 'CategoryFilter',
                'containerId': 'categorySelector2',
                'id':'dateSelector',
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

             let data = google.visualization.arrayToDataTable(resultSet.table);
             
             let dashboard = new google.visualization.Dashboard();
              
              if(resultSet.plot_type === 2) {
                dashboard.bind([categoryPicker1,categoryPicker2],[bar,table]);
                dashboard.draw(data);
              }
              else {
                categoryPicker2.setDataTable(data);
                categoryPicker2.draw();


                table = new google.visualization.ChartWrapper({
                  'chartType': 'Table',
                  'containerId': 'tableD2',
                  'options': {
                    'allowHtml': true, 'cssClassNames': cssClassNames
                  }
                });

                
                data = new google.visualization.DataTable(resultSet.table_plot);
                dashboard.bind([categoryPicker1],[table]);
          
                dashboard.draw(data);
              }

              google.visualization.events.addListener(table,'ready', function(event) {
    
                var tableData = table.getDataTable();
                var csvData = google.visualization.dataTableToCsv(tableData);

                if(resultSet.plot_type === 1) {
                  $('#categorySelector2').hide();
                  $('#cat-spacer').hide();

                  tableData = table.getDataTable();
                  let filteredData = tableData;
                  let group = filteredData.getDistinctValues(0);
      
                  var columns = [2], groupColumns = [];
                  for (let i = 0; i < group.length; i++) {
                      var label = group[i];
                      columns.push({
                          type: 'number',
                          label: label,
                          calc: (function (name) {
                              return function (dt, row) {
                                  return (dt.getValue(row, 0) == name) ? dt.getValue(row, 1) : null;
                              }
                          })(label)
                      });
                      groupColumns.push({
                          type: 'number',
                          label: label,
                          column: i + 1,
                          aggregation: google.visualization.data.sum
                      });
                  }

                  rowHeader = [];
                  rowHeader.push('Year');
                  for(let i=0;i<groupColumns.length;i++) {
                    rowHeader.push(groupColumns[i].label);
                  }

                  let view = new google.visualization.DataView(filteredData);
                  view.setColumns(columns);

                  let groupedData = google.visualization.data.group(view, [0], groupColumns);
  
                  bar.setDataTable(groupedData);
                  bar.draw();

                  let table2 = new google.visualization.ChartWrapper({
                    'chartType': 'Table',
                    'containerId': 'tableD',
                    'options': {
                      'allowHtml': true, 'cssClassNames': cssClassNames
                    }
                  });

                  table2.setDataTable(groupedData);
                  table2.draw();

                  tableData = table2.getDataTable();
                  csvData = google.visualization.dataTableToCsv(tableData);
                  
                  //map
                  $('#map-selector').val(selectedYear);

                  let dataTable = table.getDataTable();
                  group = dataTable.getDistinctValues(0);

                  columns = [2], groupColumns = [];
                                for (let i = 0; i < group.length; i++) {
                                    let label = group[i];
                                    columns.push({
                                        type: 'number',
                                        label: label,
                                        calc: (function (name) {
                                            return function (dt, row) {
                                                return (dt.getValue(row, 0) == name) ? dt.getValue(row, 1) : null;
                                            }
                                        })(label)
                                    });
                                    groupColumns.push({
                                        type: 'number',
                                        label: label,
                                        column: i + 1,
                                        aggregation: google.visualization.data.sum
                                    });
                                }

                  view = new google.visualization.DataView(dataTable);
                  view.setColumns(columns);

                  groupedData = google.visualization.data.group(view, [0], groupColumns);
                  
                  let dt = transposeDataTable(groupedData);
                  
                  let myView = new google.visualization.DataView(dt);
                  myView.setColumns([0, Number(selectedYear)]);

                  let map = new google.visualization.ChartWrapper({
                    'chartType': 'GeoChart',
                    'containerId': 'map',
                    'options': {
                        region: 'ZA',
                        displayMode: 'markers',
                        resolution: 'provinces',
                        theme: 'material',
                        colorAxis: {colors: ['#FED976', '#FC4E2A', '#800026']},
                        height: winHeight,
                        width:winWidth,
                        tooltip: { isHtml: true },
                        keepAspectRatio: true
                    }
                });

                map.setDataTable(myView);
                map.draw();

                $('#map-selector').on('change', function(event) {
                    event.preventDefault();
                    var year = Number(document.getElementById('map-selector').value);
                    

                    var tableData = table.getDataTable();

                    var group = tableData.getDistinctValues(0);

                    var columns = [2], groupColumns = [];
                    for (var i = 0; i < group.length; i++) {
                        var label = group[i];
                        columns.push({
                            type: 'number',
                            label: label,
                            calc: (function (name) {
                                return function (dt, row) {
                                    return (dt.getValue(row, 0) == name) ? dt.getValue(row, 1) : null;
                                }
                            })(label)
                        });
                        groupColumns.push({
                            type: 'number',
                            label: label,
                            column: i + 1,
                            aggregation: google.visualization.data.sum
                        });
                    }

                    var view = new google.visualization.DataView(tableData);
                    view.setColumns(columns);

                    var groupedData = google.visualization.data.group(view, [0], groupColumns);

                    var dt = transposeDataTable(groupedData);
                    
                    var myView = new google.visualization.DataView(dt);

                    myView.setColumns([0, Number(year)]);

                    var map = new google.visualization.ChartWrapper({
                        'chartType': 'GeoChart',
                        'containerId': 'map',
                        'options': {
                            region: 'ZA',
                            displayMode: 'markers',
                            resolution: 'provinces',
                            theme: 'material',
                            colorAxis: {colors: ['#FED976', '#FC4E2A', '#800026']},
                            height: winHeight,
                            width:winWidth,
                            tooltip: { isHtml: true },
                            keepAspectRatio: true
                        }
                    });

                    map.setDataTable(myView);
                    map.draw();

                    $('#map-selector').val(year);
                 });
                }
                
                var csvString = rowHeader.join(',') + '\n' + csvData + '\n';
                     
                document.getElementById('csv').value=csvString;

               
                let tmpDiv = document.createElement('div');
                tmpDiv.setAttribute('style','width:2000px;height:800px;font-size:10px,fontFamily:Montserrat,visibility:hidden');
                document.body.appendChild(tmpDiv);
                
                var optionsTmp = {};
                
                if(resultSet.plot_type === 2) {
                  optionsTmp = {
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

                  //var dataSet = Number(document.getElementById('map-selector').value);

                  var dataSet = resultSet.table[0][2];
                  var dt = table.getDataTable();
                  var myView = new google.visualization.DataView(dt);

                  myView.setColumns([0, dataSet]);

                  let map = new google.visualization.ChartWrapper({
                    'chartType': 'GeoChart',
                    'containerId': 'map',
                    'options': {
                        region: 'ZA',
                        displayMode: 'markers',
                        resolution: 'provinces',
                        theme: 'material',
                        colorAxis: {colors: ['#FED976', '#FC4E2A', '#800026']},
                        height: winHeight,
                        width:winWidth,
                        tooltip: { isHtml: true },
                        keepAspectRatio: true
                    }
                });

               map.setDataTable(myView);
               map.draw();

               $('#map-selector').on('change', function(event) {
                      event.preventDefault();
                      var dataSet = Number(document.getElementById('map-selector').value);
                      dataSet = dataSet + 1;

                      var dt = table.getDataTable();
                      var myView = new google.visualization.DataView(dt);

                      myView.setColumns([0, dataSet]);

                      let map = new google.visualization.ChartWrapper({
                        'chartType': 'GeoChart',
                        'containerId': 'map',
                        'options': {
                            region: 'ZA',
                            displayMode: 'markers',
                            resolution: 'provinces',
                            theme: 'material',
                            colorAxis: {colors: ['#FED976', '#FC4E2A', '#800026']},
                            height: winHeight,
                            width:winWidth,
                            tooltip: { isHtml: true },
                            keepAspectRatio: true
                        }
                    });

                    map.setDataTable(myView);
                    map.draw();
               });
              }
                
              if(resultSet.plot_type === 1) {
                  var tableData = table.getDataTable();
                  var filteredData = tableData;
                  var group = filteredData.getDistinctValues(0);

                  var columns = [2], groupColumns = [];
                  for (var i = 0; i < group.length; i++) {
                      var label = group[i];
                      columns.push({
                          type: 'number',
                          label: label,
                          calc: (function (name) {
                              return function (dt, row) {
                                  return (dt.getValue(row, 0) == name) ? dt.getValue(row, 1) : null;
                              }
                          })(label)
                      });
                      groupColumns.push({
                          type: 'number',
                          label: label,
                          column: i + 1,
                          aggregation: google.visualization.data.sum
                      });
                  }

                  optionsTmp = {
                    'chartType': 'Line',
                    'options': {
                      legend: {position: 'right' },
                      axes: {
                          y: {
                              all: {
                                  range: {
                                      max: resultSet.max,
                                      min: resultSet.min
                                  }
                              }
                          }
                      },
                      hAxis: {slantedText: true},
                      height: '100%',
                      width:'100%',
                      lineWidth: 4,
                      interpolateNulls: true,
                      tooltip: { isHtml: true },
                      pointSize: 5     
                   }
                  };

                  var view = new google.visualization.DataView(filteredData);
                  view.setColumns(columns);

                  let groupedData = google.visualization.data.group(view, [0], groupColumns);
                  
                  var barTmp = new google.visualization.ChartWrapper(optionsTmp);
                  barTmp.setDataTable(groupedData);
                  barTmp.draw(tmpDiv);

                }

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

                function transposeDataTable(dataTable) {
                        //step 1: let us get what the columns would be
                        var rows = [];//the row tip becomes the column header and the rest become
                        for (var rowIdx=0; rowIdx < dataTable.getNumberOfRows(); rowIdx++) {
                            var rowData = [];
                            for( var colIdx = 0; colIdx < dataTable.getNumberOfColumns(); colIdx++) {
                                rowData.push(dataTable.getValue(rowIdx, colIdx));
                            }
                            rows.push( rowData);
                        }
                        var newTB = new google.visualization.DataTable();
                        newTB.addColumn('string', dataTable.getColumnLabel(0));
                        newTB.addRows(dataTable.getNumberOfColumns()-1);
                        var colIdx = 1;
                        for(var idx=0; idx < (dataTable.getNumberOfColumns() -1);idx++) {
                            var colLabel = dataTable.getColumnLabel(colIdx);
                            newTB.setValue(idx, 0, colLabel);
                            colIdx++;
                        }
                        for (var i=0; i< rows.length; i++) {
                            var rowData = rows[i];
                            newTB.addColumn('number',rowData[0]); //assuming the first one is always a header
                            var localRowIdx = 0;
            
                            for(var j=1; j< rowData.length; j++) {
                                newTB.setValue(localRowIdx, (i+1), rowData[j]);
                                localRowIdx++;
                            }
                        }
                        return newTB;
                    }
              });
            }
        });
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
