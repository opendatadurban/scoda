"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_IndicatorExplorer_Data_Box_Small_ChartFilter_jsx-js_components_IndicatorExplore-c66174"],{

/***/ "./js/components/IndicatorExplorer.Data.Box.Small.ChartFilter.jsx":
/*!************************************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Box.Small.ChartFilter.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataBoxChartFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var IndicatorExplorerDataBoxChartFilter = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataBoxChartFilter, _Component);
  var _super = _createSuper(IndicatorExplorerDataBoxChartFilter);
  function IndicatorExplorerDataBoxChartFilter(props) {
    _classCallCheck(this, IndicatorExplorerDataBoxChartFilter);
    return _super.call(this, props);
  }
  _createClass(IndicatorExplorerDataBoxChartFilter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.results.length !== 0) {
        this.loadGoogleVizApi(this.props.results, this.props.filterYear);
      }
    }
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(resultSet, selectedYear) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ['controls', 'bar', 'corechart', 'geochart'],
          callback: function callback() {
            var dataSet = resultSet.table;
            var rows = [];
            var rowHeader = [];
            for (var i = 0; i < dataSet[0].length; i++) {
              rowHeader.push(dataSet[0][i]);
            }
            rows.push(rowHeader);
            for (var j = 1; j < dataSet.length; j++) {
              var rowItem = dataSet[j];
              var row = [];
              if (rowItem[1].toString() === selectedYear) {
                for (var k = 0; k < rowItem.length; k++) {
                  row.push(rowItem[k]);
                }
                rows.push(row);
              }
            }
            var data = google.visualization.arrayToDataTable(resultSet.table);
            var categoryPicker1 = new google.visualization.ControlWrapper({
              'controlType': 'CategoryFilter',
              'containerId': 'categorySelector1',
              'state': {
                'selectedValues': resultSet.cities
              },
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
              'state': {
                'selectedValues': resultSet.years
              },
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

            //var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard'));
            //dashboard.bind(categoryPicker1,categoryPicker2,bar);
            //dashboard.draw(data);
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card box-height"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, "Select Data"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-2 ml-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "categorySelector2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "cat-spacer",
        className: "ml-2 mr-2 mt-4 mb-2 ie-small-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "categorySelector1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }));
    }
  }]);
  return IndicatorExplorerDataBoxChartFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Box.Small.MapFilter.jsx":
/*!**********************************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Box.Small.MapFilter.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataBoxMapFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndicatorExplorerDataBoxMapFilter = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataBoxMapFilter, _Component);
  var _super = _createSuper(IndicatorExplorerDataBoxMapFilter);
  function IndicatorExplorerDataBoxMapFilter(props) {
    var _this;
    _classCallCheck(this, IndicatorExplorerDataBoxMapFilter);
    _this = _super.call(this, props);
    _this.reBindMap = _this.reBindMap.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(IndicatorExplorerDataBoxMapFilter, [{
    key: "reBindMap",
    value: function reBindMap() {
      if (this.props.results.plot_type === 2) {
        this.props.changeHook(document.getElementById('map-selector').value, 2);
      }

      /*if(this.props.results.plot_type === 1) {
          var year = Number(document.getElementById('map-selector').value);
          this.props.changeHook(year,1);
      }*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var selectorOptions = [];
      if (this.props.results.length !== 0) {
        if (this.props.results.plot_type === 2) {
          selectorOptions = this.props.results.options_list.map(function (dataset, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
              key: index,
              value: dataset.optid
            }, dataset.optname);
          });
        }
        if (this.props.results.plot_type === 1) {
          selectorOptions = this.props.results.years_list.map(function (dataset, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
              key: index,
              value: dataset.optid
            }, dataset.optname);
          });
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, "Data on Map"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-2 pl-1 pr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-results mtp-2 mr-2 ml-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "map-selector",
        className: "mt-2 mr-2 ie-dropdown-small",
        onChange: function onChange() {
          return _this2.reBindMap();
        }
      }, selectorOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }));
    }
  }]);
  return IndicatorExplorerDataBoxMapFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Box.jsx":
/*!******************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Box.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_IndicatorExplorer_Data_Charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IndicatorExplorer.Data.Charts */ "./js/components/IndicatorExplorer.Data.Charts.jsx");
/* harmony import */ var _components_IndicatorExplorer_Data_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IndicatorExplorer.Data.Table */ "./js/components/IndicatorExplorer.Data.Table.jsx");
/* harmony import */ var _components_IndicatorExplorer_Data_Maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IndicatorExplorer.Data.Maps */ "./js/components/IndicatorExplorer.Data.Maps.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var IndicatorExplorerDataBox = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataBox, _Component);
  var _super = _createSuper(IndicatorExplorerDataBox);
  function IndicatorExplorerDataBox(props) {
    var _this;
    _classCallCheck(this, IndicatorExplorerDataBox);
    _this = _super.call(this, props);
    _this.state = {
      csv: []
    };
    return _this;
  }
  _createClass(IndicatorExplorerDataBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.results.length > 0) {
        this.loadGoogleVizApi(this.props.results, this.props.filterYear);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.results.length !== 0) {
        this.loadGoogleVizApi(this.props.results, this.props.filterYear);
      }
    }
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(dataSet, selectedYear) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ['controls', 'bar', 'corechart', 'geochart'],
          callback: function callback() {
            var data = new google.visualization.DataTable();
            dataSet = dataSet.table;
            var rows = [];
            var rowHeader = [];
            for (var i = 0; i <= dataSet[0].length - 1; i++) {
              rowHeader.push(dataSet[0][i]);
            }
            rows.push(rowHeader);
            for (var j = 1; j <= dataSet.length - 1; j++) {
              var rowItem = dataSet[j];
              var row = [];
              if (rowItem[1].toString() === selectedYear) {
                for (var k = 0; k < rowItem.length; k++) {
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
  }, {
    key: "renderDataSet",
    value: function renderDataSet(dataSetType, filter) {
      switch (dataSetType) {
        case "table":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IndicatorExplorer_Data_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
            results: this.props.results,
            key: dataSetType,
            filterYear: this.props.filterYear
          });
          break;
        case "chart":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IndicatorExplorer_Data_Charts__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: this.props.results,
            key: dataSetType,
            filterYear: this.props.filterYear
          });
          break;
        case "map":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IndicatorExplorer_Data_Maps__WEBPACK_IMPORTED_MODULE_4__["default"], {
            geo: this.props.results,
            key: dataSetType,
            filterYear: this.props.filterYear,
            filter: filter
          });
          break;
      }
    }
  }, {
    key: "download",
    value: function download(downloadType) {
      switch (downloadType) {
        case "table":
          this.downloadTable();
          break;
        case "chart":
          this.downloadChart();
          break;
      }
    }
  }, {
    key: "downloadTable",
    value: function downloadTable() {
      var encodedUri = 'data:application/csv;charset=utf-8,' + encodeURIComponent(document.getElementById('csv').value);
      this.downloadData(encodedUri, 'data.csv');
    }
  }, {
    key: "downloadData",
    value: function downloadData(uri, filename) {
      var link = document.createElement("a");
      link.download = filename;
      link.href = uri;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click(function (e) {
        e.preventDefault();
        document.body.removeChild(link);
      });
    }
  }, {
    key: "downloadChart",
    value: function downloadChart() {
      var dataUri = document.getElementById('chartPng').value;
      this.downloadData(dataUri, 'chart.png');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var downloadEvent = '';
      if (this.props.resultType !== 'map') {
        downloadEvent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "ie-button-download",
          onClick: function onClick() {
            return _this2.download(_this2.props.resultType);
          }
        }, "Download");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "dashboard",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "card",
        className: "ie-box-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, this.props.resultTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-2 mr-4 float-right"
      }, downloadEvent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ie-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-2 ml-3 mb-4"
      }, this.renderDataSet(this.props.resultType, this.props.filter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "hidden",
        id: "csv"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        style: {
          display: 'none'
        }
      }))));
    }
  }]);
  return IndicatorExplorerDataBox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Card.Header.jsx":
/*!**************************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Card.Header.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataCardHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import Select from './Select';



var IndicatorExplorerDataCardHeader = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataCardHeader, _Component);
  var _super = _createSuper(IndicatorExplorerDataCardHeader);
  function IndicatorExplorerDataCardHeader(props) {
    var _this;
    _classCallCheck(this, IndicatorExplorerDataCardHeader);
    _this = _super.call(this, props);
    _this.state = {
      loader: true
    };
    _this.resetForm = _this.resetForm.bind(_assertThisInitialized(_this));
    _this.filterData = _this.filterData.bind(_assertThisInitialized(_this));
    // this.enableFilter = this.enableFilter.bind(this);
    return _this;
  }
  _createClass(IndicatorExplorerDataCardHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          loader: false
        });
      }.bind(this), 5000); // wait 5 seconds, then reset to false
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#selector').select2({
        placeholder: "Empty"
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#selector').on('select2:select', function (e) {
        var filterValue = document.getElementById('selector').value;
        if (filterValue > 0) {
          document.getElementById('button-search').classList.remove('ie-button-inactive');
        } else {
          document.getElementById('button-search').classList.add('ie-button-inactive');
        }
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      console.log('reset');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#selector').select2('val', 0);
      document.getElementById('button-search').classList.add('ie-button-inactive');
      this.props.toggle(false);
    }
  }, {
    key: "filterData",
    value: function filterData() {
      var selectedIndex = document.getElementById('selector').value;
      console.log('filtered', selectedIndex);
      this.props.filterHook(selectedIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      console.log('current option', this.props.datasetOptions);
      var selectorOptions = this.props.datasetOptions.map(function (dataset, index) {
        // <option key={index} value={dataset[0]}>{dataset[1].match(/.{1,10}(\s|$)/g)}</option>
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: index,
          value: dataset[0]
        }, dataset[1]);
      });

      //populate select option with the current indicator
      var currentOption = this.props.datasetOptions.map(function (dataset, index) {
        if (dataset[0] === _this2.props.indicator_id) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
            key: index,
            value: dataset[0]
          }, dataset[1]);
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, this.state.loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "loader",
        isOpen: this.state.loader,
        className: "modal-dialog-centered loader"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ml-3 pt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "grow",
        color: "secondary",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "grow",
        color: "success",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "grow",
        color: "danger",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "grow",
        color: "warning",
        size: "sm"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-4 pl-4 float-left"
      }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ie-element-label"
      }, "Choose Your Indicator:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "selector",
        className: "ie-dropdown mb-2",
        onChange: this.enableFilter
      }, currentOption.length ? currentOption : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "0"
      }, "Empty"), selectorOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "button-search",
        className: "ie-button-search ie-button-search-explorer ie-button-inactive",
        onClick: this.filterData
      }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-button-reset",
        onClick: this.resetForm
      }, "Reset Form")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-5 explainer-text"
      }, "The data explorer provides access to the different indicators used by the South African Cities Network in the State of Cities Report."));
    }
  }]);
  return IndicatorExplorerDataCardHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Charts.jsx":
/*!*********************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Charts.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! canvg */ "./node_modules/canvg/lib/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IndicatorExplorerDataChart = /*#__PURE__*/function (_PureComponent) {
  _inherits(IndicatorExplorerDataChart, _PureComponent);
  var _super = _createSuper(IndicatorExplorerDataChart);
  function IndicatorExplorerDataChart(props) {
    var _this;
    _classCallCheck(this, IndicatorExplorerDataChart);
    _this = _super.call(this, props);
    _this.state = {
      containerWidth: '100%',
      containerHeight: '450px'
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(IndicatorExplorerDataChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      if (this.props.data.length !== 0) {
        this.loadGoogleVizApi(this.props.data, this.props.filterYear, '100%', '100%');
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var element = document.getElementById('chart');
      var positionInfo = element.getBoundingClientRect();
      var height = positionInfo.height;
      var width = positionInfo.width;
      var elementT = document.getElementById('tableD');
      var positionInfoT = elementT.getBoundingClientRect();
      var heightT = positionInfoT.height;
      var widthT = positionInfoT.width;
      var windowWidth = document.body.clientWidth;
      var windowHeight = document.body.clientHeight;
      if (windowWidth <= 768) {
        windowWidth = width;
        windowHeight = '225px';
      } else {
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
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(resultSet, selectedYear, winWidth, winHeight) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ['controls', 'bar', 'corechart', 'geochart', 'line'],
          callback: function callback() {
            document.getElementById('chartPng').value = '';
            var dataSet = resultSet.table;
            var options = {};
            var rows = [];
            var rowHeader = [];
            for (var i = 0; i < dataSet[0].length; i++) {
              rowHeader.push(dataSet[0][i]);
            }
            rows.push(rowHeader);
            for (var j = 1; j < dataSet.length; j++) {
              var rowItem = dataSet[j];
              var row = [];
              if (rowItem[1].toString() === selectedYear) {
                for (var k = 0; k < rowItem.length; k++) {
                  row.push(rowItem[k]);
                }
                rows.push(row);
              }
            }
            if (resultSet.plot_type === 2) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()('#categorySelector2').show();
              jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cat-spacer').show();
              options = {
                'chartType': 'Bar',
                'dataTable': rows,
                'containerId': 'chart',
                'options': {
                  stacked: true,
                  legend: {
                    position: 'right'
                  },
                  bars: 'vertical',
                  vAxis: {
                    minValue: 0
                  },
                  hAxis: {
                    slantedText: true
                  },
                  bar: {
                    groupWidth: '99%'
                  },
                  tooltip: {
                    isHtml: true
                  },
                  chartArea: {
                    left: '10%',
                    right: '60%'
                  },
                  height: winHeight,
                  width: winWidth,
                  fontfamily: 'Montserrat',
                  fontsize: '10',
                  series: resultSet.series
                },
                view: {
                  'columns': resultSet.view
                }
              };
            }
            if (resultSet.plot_type === 1) {
              options = {
                'chartType': 'Line',
                'containerId': 'chart',
                'options': {
                  legend: {
                    position: 'right'
                  },
                  axes: {
                    y: {
                      all: {
                        range: {
                          max: resultSet.max,
                          min: resultSet.min > 0 ? 0 : resultSet.min - 1
                        }
                      }
                    }
                  },
                  hAxis: {
                    slantedText: true
                  },
                  height: winHeight,
                  lineWidth: 4,
                  interpolateNulls: true,
                  tooltip: {
                    isHtml: true
                  },
                  pointSize: 5
                }
              };
            }
            var bar = new google.visualization.ChartWrapper(options);
            var cssClassNames = {
              'headerRow': 'google-visualization-table-table',
              'tableRow': 'table-cell',
              'oddTableRow': 'table-cell',
              'selectedTableRow': 'table-cell',
              'hoverTableRow': 'table-cell',
              'tableCell': 'table-cell',
              'table': 'google-visualization-table-table'
            };
            var table = new google.visualization.ChartWrapper({
              'chartType': 'Table',
              'containerId': 'tableD',
              'options': {
                'showRowNumber': false,
                'allowHtml': true,
                'cssClassNames': cssClassNames
              }
            });
            var categoryPicker1 = new google.visualization.ControlWrapper({
              'controlType': 'CategoryFilter',
              'containerId': 'categorySelector1',
              'state': {
                'selectedValues': resultSet.cities
              },
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
              'id': 'dateSelector',
              'state': {
                'selectedValues': resultSet.years
              },
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
            if (resultSet.plot_type === 2) {
              dashboard.bind([categoryPicker1, categoryPicker2], [bar, table]);
              dashboard.draw(data);
            } else {
              categoryPicker2.setDataTable(data);
              categoryPicker2.draw();
              table = new google.visualization.ChartWrapper({
                'chartType': 'Table',
                'containerId': 'tableD2',
                'options': {
                  'allowHtml': true,
                  'cssClassNames': cssClassNames
                }
              });
              data = new google.visualization.DataTable(resultSet.table_plot);
              dashboard.bind([categoryPicker1], [table]);
              dashboard.draw(data);
            }
            google.visualization.events.addListener(table, 'ready', function (event) {
              var tableData = table.getDataTable();
              var csvData = google.visualization.dataTableToCsv(tableData);
              if (resultSet.plot_type === 1) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#categorySelector2').hide();
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cat-spacer').hide();
                tableData = table.getDataTable();
                var _filteredData = tableData;
                var _group = _filteredData.getDistinctValues(0);
                var columns = [2],
                  groupColumns = [];
                for (var _i = 0; _i < _group.length; _i++) {
                  var label = _group[_i];
                  columns.push({
                    type: 'number',
                    label: label,
                    calc: function (name) {
                      return function (dt, row) {
                        return dt.getValue(row, 0) == name ? dt.getValue(row, 1) : null;
                      };
                    }(label)
                  });
                  groupColumns.push({
                    type: 'number',
                    label: label,
                    column: _i + 1,
                    aggregation: google.visualization.data.sum
                  });
                }
                rowHeader = [];
                rowHeader.push('Year');
                for (var _i2 = 0; _i2 < groupColumns.length; _i2++) {
                  rowHeader.push(groupColumns[_i2].label);
                }
                var _view = new google.visualization.DataView(_filteredData);
                _view.setColumns(columns);
                var groupedData = google.visualization.data.group(_view, [0], groupColumns);
                bar.setDataTable(groupedData);
                bar.draw();
                var table2 = new google.visualization.ChartWrapper({
                  'chartType': 'Table',
                  'containerId': 'tableD',
                  'options': {
                    'allowHtml': true,
                    'cssClassNames': cssClassNames
                  }
                });
                table2.setDataTable(groupedData);
                table2.draw();
                tableData = table2.getDataTable();
                csvData = google.visualization.dataTableToCsv(tableData);

                //map
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-selector').val(selectedYear);
                var dataTable = table.getDataTable();
                _group = dataTable.getDistinctValues(0);
                columns = [2], groupColumns = [];
                for (var _i3 = 0; _i3 < _group.length; _i3++) {
                  var _label = _group[_i3];
                  columns.push({
                    type: 'number',
                    label: _label,
                    calc: function (name) {
                      return function (dt, row) {
                        return dt.getValue(row, 0) == name ? dt.getValue(row, 1) : null;
                      };
                    }(_label)
                  });
                  groupColumns.push({
                    type: 'number',
                    label: _label,
                    column: _i3 + 1,
                    aggregation: google.visualization.data.sum
                  });
                }
                _view = new google.visualization.DataView(dataTable);
                _view.setColumns(columns);
                groupedData = google.visualization.data.group(_view, [0], groupColumns);
                var _dt = transposeDataTable(groupedData);
                var _myView = new google.visualization.DataView(_dt);
                _myView.setColumns([0, Number(selectedYear)]);
                var map = new google.visualization.ChartWrapper({
                  'chartType': 'GeoChart',
                  'containerId': 'map',
                  'options': {
                    region: 'ZA',
                    displayMode: 'markers',
                    resolution: 'provinces',
                    theme: 'material',
                    colorAxis: {
                      colors: ['#FED976', '#FC4E2A', '#800026']
                    },
                    height: winHeight,
                    width: winWidth,
                    tooltip: {
                      isHtml: true
                    },
                    keepAspectRatio: true
                  }
                });
                map.setDataTable(_myView);
                map.draw();
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-selector').on('change', function (event) {
                  event.preventDefault();
                  var year = Number(document.getElementById('map-selector').value);
                  var tableData = table.getDataTable();
                  var group = tableData.getDistinctValues(0);
                  var columns = [2],
                    groupColumns = [];
                  for (var i = 0; i < group.length; i++) {
                    var label = group[i];
                    columns.push({
                      type: 'number',
                      label: label,
                      calc: function (name) {
                        return function (dt, row) {
                          return dt.getValue(row, 0) == name ? dt.getValue(row, 1) : null;
                        };
                      }(label)
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
                      colorAxis: {
                        colors: ['#FED976', '#FC4E2A', '#800026']
                      },
                      height: winHeight,
                      width: winWidth,
                      tooltip: {
                        isHtml: true
                      },
                      keepAspectRatio: true
                    }
                  });
                  map.setDataTable(myView);
                  map.draw();
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-selector').val(year);
                });
              }
              var csvString = rowHeader.join(',') + '\n' + csvData + '\n';
              document.getElementById('csv').value = csvString;
              var tmpDiv = document.createElement('div');
              tmpDiv.setAttribute('style', 'width:2000px;height:800px;font-size:10px,fontFamily:Montserrat,visibility:hidden');
              document.body.appendChild(tmpDiv);
              var optionsTmp = {};
              if (resultSet.plot_type === 2) {
                optionsTmp = {
                  'chartType': 'Bar',
                  'dataTable': table.getDataTable(),
                  'options': {
                    stacked: true,
                    legend: {
                      position: 'right'
                    },
                    bars: 'vertical',
                    vAxis: {
                      minValue: 0
                    },
                    hAxis: {
                      slantedText: true
                    },
                    bar: {
                      groupWidth: '99%'
                    },
                    tooltip: {
                      isHtml: true
                    },
                    chartArea: {
                      left: '10%',
                      right: '60%'
                    },
                    height: '100%',
                    width: '100%',
                    fontfamily: 'Montserrat',
                    fontsize: '10',
                    series: resultSet.series
                  },
                  view: {
                    'columns': resultSet.view
                  }
                };
                var barTmp = new google.visualization.ChartWrapper(optionsTmp);
                barTmp.draw(tmpDiv);

                //var dataSet = Number(document.getElementById('map-selector').value);

                var dataSet = resultSet.table[0][2];
                var dt = table.getDataTable();
                var myView = new google.visualization.DataView(dt);
                myView.setColumns([0, dataSet]);
                var _map = new google.visualization.ChartWrapper({
                  'chartType': 'GeoChart',
                  'containerId': 'map',
                  'options': {
                    region: 'ZA',
                    displayMode: 'markers',
                    resolution: 'provinces',
                    theme: 'material',
                    colorAxis: {
                      colors: ['#FED976', '#FC4E2A', '#800026']
                    },
                    height: winHeight,
                    width: winWidth,
                    tooltip: {
                      isHtml: true
                    },
                    keepAspectRatio: true
                  }
                });
                _map.setDataTable(myView);
                _map.draw();
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-selector').on('change', function (event) {
                  event.preventDefault();
                  var dataSet = Number(document.getElementById('map-selector').value);
                  dataSet = dataSet + 1;
                  var dt = table.getDataTable();
                  var myView = new google.visualization.DataView(dt);
                  myView.setColumns([0, dataSet]);
                  var map = new google.visualization.ChartWrapper({
                    'chartType': 'GeoChart',
                    'containerId': 'map',
                    'options': {
                      region: 'ZA',
                      displayMode: 'markers',
                      resolution: 'provinces',
                      theme: 'material',
                      colorAxis: {
                        colors: ['#FED976', '#FC4E2A', '#800026']
                      },
                      height: winHeight,
                      width: winWidth,
                      tooltip: {
                        isHtml: true
                      },
                      keepAspectRatio: true
                    }
                  });
                  map.setDataTable(myView);
                  map.draw();
                });
              }
              if (resultSet.plot_type === 1) {
                var tableData = table.getDataTable();
                var filteredData = tableData;
                var group = filteredData.getDistinctValues(0);
                var columns = [2],
                  groupColumns = [];
                for (var i = 0; i < group.length; i++) {
                  var label = group[i];
                  columns.push({
                    type: 'number',
                    label: label,
                    calc: function (name) {
                      return function (dt, row) {
                        return dt.getValue(row, 0) == name ? dt.getValue(row, 1) : null;
                      };
                    }(label)
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
                    legend: {
                      position: 'right'
                    },
                    axes: {
                      y: {
                        all: {
                          range: {
                            //max: resultSet.max,
                            min: 0
                          }
                        }
                      }
                    },
                    hAxis: {
                      slantedText: true
                    },
                    height: '100%',
                    width: '100%',
                    lineWidth: 4,
                    interpolateNulls: true,
                    tooltip: {
                      isHtml: true
                    },
                    pointSize: 5
                  }
                };
                var view = new google.visualization.DataView(filteredData);
                view.setColumns(columns);
                var _groupedData = google.visualization.data.group(view, [0], groupColumns);
                var barTmp = new google.visualization.ChartWrapper(optionsTmp);
                barTmp.setDataTable(_groupedData);
                barTmp.draw(tmpDiv);
              }
              google.visualization.events.addListener(barTmp, 'ready', function (event) {
                var chartArea = tmpDiv.children[0];
                var svgObject = chartArea.children[0].children[0];
                var svg = svgObject.outerHTML;
                var canvas = document.querySelector('canvas');
                var ctx = canvas.getContext('2d');
                var renderObject = canvg__WEBPACK_IMPORTED_MODULE_2__["default"].fromString(ctx, svg);
                renderObject.start();
                var dataUri = canvas.toDataURL("image/png");
                document.getElementById('chartPng').value = dataUri;
                document.body.removeChild(tmpDiv);
              });
              function transposeDataTable(dataTable) {
                //step 1: let us get what the columns would be
                var rows = []; //the row tip becomes the column header and the rest become
                for (var rowIdx = 0; rowIdx < dataTable.getNumberOfRows(); rowIdx++) {
                  var rowData = [];
                  for (var colIdx = 0; colIdx < dataTable.getNumberOfColumns(); colIdx++) {
                    rowData.push(dataTable.getValue(rowIdx, colIdx));
                  }
                  rows.push(rowData);
                }
                var newTB = new google.visualization.DataTable();
                newTB.addColumn('string', dataTable.getColumnLabel(0));
                newTB.addRows(dataTable.getNumberOfColumns() - 1);
                var colIdx = 1;
                for (var idx = 0; idx < dataTable.getNumberOfColumns() - 1; idx++) {
                  var colLabel = dataTable.getColumnLabel(colIdx);
                  newTB.setValue(idx, 0, colLabel);
                  colIdx++;
                }
                for (var i = 0; i < rows.length; i++) {
                  var rowData = rows[i];
                  newTB.addColumn('number', rowData[0]); //assuming the first one is always a header
                  var localRowIdx = 0;
                  for (var j = 1; j < rowData.length; j++) {
                    newTB.setValue(localRowIdx, i + 1, rowData[j]);
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
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "chart",
        style: {
          fontSize: '9px',
          fontFamily: 'Montserrat',
          fontWeight: '500'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "hidden",
        id: "chartPng"
      }));
    }
  }]);
  return IndicatorExplorerDataChart;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Maps.jsx":
/*!*******************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Maps.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var IndicatorExplorerDataMap = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataMap, _Component);
  var _super = _createSuper(IndicatorExplorerDataMap);
  function IndicatorExplorerDataMap(props) {
    var _this;
    _classCallCheck(this, IndicatorExplorerDataMap);
    _this = _super.call(this, props);
    _this.state = {
      containerWidth: '100%',
      containerHeight: '450px'
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(IndicatorExplorerDataMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.addEventListener('resize', this.handleResize);
      if (this.props.geo.length !== 0) {
        this.loadGoogleVizApi(this.props.geo, this.props.filterYear, this.props.filter, '100%', '100%');
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var windowWidth = document.body.clientWidth;
      var windowHeight = document.body.clientHeight;
      var element = document.getElementById('map');
      var positionInfo = element.getBoundingClientRect();
      var height = positionInfo.height;
      var width = positionInfo.width;
      if (windowWidth <= 768) {
        windowWidth = width;
        windowHeight = '225px';
      } else {
        windowWidth = '100%';
        windowHeight = '450px';
      }
      document.getElementById('map').style.height = windowHeight;
      document.getElementById('map').style.width = windowWidth;
      if (this.props.geo.length !== 0) {
        //this.loadGoogleVizApi(this.props.geo,this.props.filterYear,this.props.filter,windowWidth,windowHeight);
      }
    }
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(resultSet, selectedYear, filter, winWidth, winHeight) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ['controls', 'bar', 'corechart', 'geochart', 'table'],
          callback: function callback() {
            var dataSet = resultSet.table;
            var filterItem = '';
            if (filter === 'NA') {
              filterItem = dataSet[0][2];
            } else {
              filterItem = filter;
            }
            var filterRow = 0;
            var rows = [];
            var rowHeader = [];
            rowHeader.push(dataSet[0][0]);
            for (var i = 0; i <= dataSet[0].length - 1; i++) {
              if (dataSet[0][i].toString() !== 'Year') {
                if (dataSet[0][i].toString() === filterItem) {
                  filterRow = i;
                  rowHeader.push(dataSet[0][i]);
                }
              }
            }
            rows.push(rowHeader);
            for (var j = 1; j <= dataSet.length - 1; j++) {
              var rowItem = dataSet[j];
              var row = [];
              if (rowItem[1].toString() === selectedYear) {
                rows.push([rowItem[0], rowItem[filterRow]]);
                /* for(let k=0;k<rowItem[k].length;k++) {
                     if(rowItem[k].toString() !== selectedYear) {
                        row.push(rowItem[k]);
                     }
                 }*/
              }
            }

            /*if(resultSet.plot_type === 2) {
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
                  map.setDataTable(rows);
                                map.draw();
              }*/
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "map",
        style: {
          fontSize: '9px',
          fontFamily: 'Montserrat',
          fontWeight: '500',
          marginTop: '0px'
        }
      }));
    }
  }]);
  return IndicatorExplorerDataMap;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/IndicatorExplorer.Data.Table.jsx":
/*!********************************************************!*\
  !*** ./js/components/IndicatorExplorer.Data.Table.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndicatorExplorerDataTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var IndicatorExplorerDataTable = /*#__PURE__*/function (_Component) {
  _inherits(IndicatorExplorerDataTable, _Component);
  var _super = _createSuper(IndicatorExplorerDataTable);
  function IndicatorExplorerDataTable(props) {
    _classCallCheck(this, IndicatorExplorerDataTable);
    return _super.call(this, props);
  }
  _createClass(IndicatorExplorerDataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.results.length !== 0) {
        this.loadGoogleVizApi(this.props.results, this.props.filterYear);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.results.length !== 0) {
        this.loadGoogleVizApi(this.props.results, this.props.filterYear);
      }
    }
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(dataSet, selectedYear) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ["corechart"],
          callback: function callback() {
            var data = new google.visualization.DataTable();
            dataSet = dataSet.table;
            for (var i = 0; i < dataSet[0].length; i++) {
              data.addColumn('string', dataSet[0][i] + '<br/><br/>');
            }
            for (var j = 1; j < dataSet.length; j++) {
              var rowItem = dataSet[j];
              var row = [];
              if (rowItem[1].toString() === selectedYear) {
                for (var k = 0; k < rowItem.length; k++) {
                  row.push(rowItem[k].toString());
                }
                data.addRow(row);
              }
            }
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hiddenTable = {
        display: 'none'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "tableD"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "tableD2",
        style: hiddenTable
      }));
    }
  }]);
  return IndicatorExplorerDataTable;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_IndicatorExplorer_Data_Box_Small_ChartFilter_jsx-js_components_IndicatorExplore-c66174.js.map