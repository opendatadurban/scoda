import React, { Component } from 'react';
import $ from 'jquery';

export default class IndicatorExplorerDataMap extends Component {
  
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

        if(this.props.geo.length !== 0) {
            this.loadGoogleVizApi(this.props.geo,this.props.filterYear,this.props.filter,'100%','100%');
        }
    }

    handleResize() {

        let windowWidth = document.body.clientWidth;
        let windowHeight = document.body.clientHeight;

        var element = document.getElementById('map');
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height;
        var width = positionInfo.width;

        if(windowWidth <= 768) {
            windowWidth = width;
            windowHeight = '225px';
        }
        else {
            windowWidth = '100%';
            windowHeight = '450px';
        }

        document.getElementById('map').style.height = windowHeight;
        document.getElementById('map').style.width = windowWidth;
        
        if(this.props.geo.length !== 0) {
            //this.loadGoogleVizApi(this.props.geo,this.props.filterYear,this.props.filter,windowWidth,windowHeight);
        }
    }
  
    loadGoogleVizApi(resultSet,selectedYear,filter,winWidth,winHeight) {
        var options = {
            dataType: "script",
            cache: true,
            url: "https://www.google.com/jsapi",
          };
    
          $.ajax(options).done(function(){
            google.load("visualization", "1", {
              packages:['controls', 'bar', 'corechart', 'geochart','table'],
              callback: function() {
                     var dataSet = resultSet.table;

                     var filterItem = '';

                     if(filter === 'NA') {
                         filterItem = dataSet[0][2];
                     }
                     else {
                         filterItem = filter;
                     }

                      let filterRow = 0;
                      let rows = [];
                      let rowHeader = [];
                      rowHeader.push(dataSet[0][0]);
                      for(let i=0;i<=dataSet[0].length-1;i++) {
                            if(dataSet[0][i].toString() !== 'Year') {
                                if(dataSet[0][i].toString() === filterItem) {
                                  filterRow = i;
                                  rowHeader.push(dataSet[0][i]);
                                }
                            }
                      }
                      
                      rows.push(rowHeader);
      
                      for(let j=1;j<=dataSet.length-1;j++) {
                          let rowItem = dataSet[j];
                          let row = [];
                          if(rowItem[1].toString() === selectedYear) {
                              rows.push([rowItem[0],rowItem[filterRow]]);
                           /* for(let k=0;k<rowItem[k].length;k++) {
                                if(rowItem[k].toString() !== selectedYear) {
                                   row.push(rowItem[k]);
                                }
                            }*/
                          }

                      }

                      if(resultSet.plot_type === 2) {
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
  
                        try
                        {
                            map.setDataTable(rows);
                
                            map.draw();
                        }catch {}
                        

                      }
                      
                      if(resultSet.plot_type === 1) {
                            var dataTable = new google.visualization.DataTable(resultSet.table_plot);

                            var group = dataTable.getDistinctValues(0);

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

                            var view = new google.visualization.DataView(dataTable);
                            view.setColumns(columns);

                            var groupedData = google.visualization.data.group(view, [0], groupColumns);

                            var dt = transposeDataTable(groupedData);
                            //var csv = google.visualization.dataTableToCsv(dt);
                            
                            var myView = new google.visualization.DataView(dt);

                            myView.setColumns([0, Number(selectedYear)]);

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

                            $('#map-selector').val(selectedYear);

                            $('#map-selector').on('change', function(event) {
                                event.preventDefault();
                                var year = Number(document.getElementById('map-selector').value);
                                

                                var dataTable = new google.visualization.DataTable(resultSet.table_plot);

                                var group = dataTable.getDistinctValues(0);
    
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
    
                                var view = new google.visualization.DataView(dataTable);
                                view.setColumns(columns);
    
                                var groupedData = google.visualization.data.group(view, [0], groupColumns);
    
                                var dt = transposeDataTable(groupedData);
                                //var csv = google.visualization.dataTableToCsv(dt);
                                
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
                  }
            });
        });
    }
    
    render() {
    
        return (
          <div>
              <div id="map" style={{fontSize:'9px',fontFamily:'Montserrat',fontWeight:'500',marginTop:'0px'}}></div>
          </div>
        );
      }
}


