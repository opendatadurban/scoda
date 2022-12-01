"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DemographicModeller_jsx"],{

/***/ "./js/components/DemographicModeller.Data.Box.Small.Charts.jsx":
/*!*********************************************************************!*\
  !*** ./js/components/DemographicModeller.Data.Box.Small.Charts.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerDataBoxSmallChart)
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



var DemographicModellerDataBoxSmallChart = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerDataBoxSmallChart, _Component);
  var _super = _createSuper(DemographicModellerDataBoxSmallChart);
  function DemographicModellerDataBoxSmallChart(props) {
    var _this;
    _classCallCheck(this, DemographicModellerDataBoxSmallChart);
    _this = _super.call(this, props);
    _this.state = {
      chartHeight: '310px'
    };
    _this.download = _this.download.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModellerDataBoxSmallChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.table.length > 0) {
        this.loadGoogleVizApi(this.props.table, this.props.max);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.table.length != 0) {
        this.loadGoogleVizApi(this.props.table, this.props.max);
      }
    }
  }, {
    key: "loadGoogleVizApi",
    value: function loadGoogleVizApi(table, max) {
      var options = {
        dataType: "script",
        cache: true,
        url: "https://www.google.com/jsapi"
      };
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax(options).done(function () {
        google.load("visualization", "1", {
          packages: ['controls', 'bar', 'corechart', 'geochart', 'line'],
          callback: function callback() {
            var data = google.visualization.arrayToDataTable(table);
            var options = {
              curveType: 'function',
              legend: {
                position: 'none'
              },
              chartArea: {
                top: "10%"
              },
              lineWidth: 5,
              tooltip: {
                isHtml: true
              },
              hAxis: {
                gridlines: {
                  count: 4
                }
              },
              axes: {
                y: {
                  all: {
                    range: {
                      max: max,
                      min: 0
                    }
                  }
                }
              },
              colors: ['#BD0026']
            };
            var chart = new google.charts.Line(document.getElementById('timechart'));
            chart.draw(data, google.charts.Line.convertOptions(options));
            google.visualization.events.addListener(chart, 'ready', function (event) {
              var chartArea = document.getElementById('timechart').children[0];
              var svgObject = chartArea.children[0].children[0];
              var svg = svgObject.outerHTML;
              var canvas = document.querySelector('canvas');
              var ctx = canvas.getContext('2d');
              var renderObject = canvg__WEBPACK_IMPORTED_MODULE_2__["default"].fromString(ctx, svg);
              renderObject.start();
              var dataUri = canvas.toDataURL("image/png");
              document.getElementById('timeChartPng').value = dataUri;
            });
          }
        });
      });
    }
  }, {
    key: "download",
    value: function download() {
      this.props.downloadEvent();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card mt-4 mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dm-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-2 mr-4 float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-button-download",
        onClick: this.download
      }, "Download")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-2 pl-2 pr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        style: {
          display: 'none'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "timechart",
        style: {
          height: this.state.chartHeight
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "hidden",
        id: "timeChartPng"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }));
    }
  }]);
  return DemographicModellerDataBoxSmallChart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.Data.Box.Small.MapFilter.jsx":
/*!************************************************************************!*\
  !*** ./js/components/DemographicModeller.Data.Box.Small.MapFilter.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerDataBoxMapFilter)
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

var DemographicModellerDataBoxMapFilter = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerDataBoxMapFilter, _Component);
  var _super = _createSuper(DemographicModellerDataBoxMapFilter);
  function DemographicModellerDataBoxMapFilter(props) {
    var _this;
    _classCallCheck(this, DemographicModellerDataBoxMapFilter);
    _this = _super.call(this, props);
    _this.state = {
      selectedCity: 'Pretoria'
    };
    _this.rebind = _this.rebind.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModellerDataBoxMapFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('year-selector').selectedIndex = 1;
    }
  }, {
    key: "rebind",
    value: function rebind() {
      var city = document.getElementById('city-selector').value;
      var year = document.getElementById('year-selector').value;
      var ward = document.getElementById('ward-selector').value;
      this.props.dataBindEvent(year, city, ward);
    }
  }, {
    key: "render",
    value: function render() {
      var yearOptions = this.props.yearOptions.map(function (dataset, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: index,
          value: dataset[0]
        }, dataset[1]);
      });
      var cityOptions = this.props.cityOptions.map(function (dataset, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: index,
          value: dataset[0]
        }, dataset[1]);
      });
      var wardOptions = this.props.wardOptions.map(function (dataset, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: index,
          value: dataset[0]
        }, dataset[1]);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dm-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, "Area Selector"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-2 pl-1 pr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-results mtp-2 ml-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-element-label-small"
      }, "Year:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "year-selector",
        className: "pl-3 mt-2 mr-2 dm-dropdown-small"
      }, yearOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col mt-3 ml-2 mr-2 mt-3 ie-small-border dm-line-width"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-2 pl-1 pr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-results mtp-2 ml-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-element-label-small"
      }, "City:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "city-selector",
        className: "pl-3 mt-2 mr-2 dm-dropdown-small"
      }, cityOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col mt-3 ml-2 mr-2 Smt-3 ie-small-border dm-line-width"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-2 pl-1 pr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-box-results mtp-2 ml-2 mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-element-label-small"
      }, "Ward:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        id: "ward-selector",
        className: "pl-3 mt-2 mr-2 dm-dropdown-small"
      }, wardOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 offset-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "button-search",
        className: "ie-button-search",
        onClick: this.rebind
      }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }));
    }
  }]);
  return DemographicModellerDataBoxMapFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.Data.Box.jsx":
/*!********************************************************!*\
  !*** ./js/components/DemographicModeller.Data.Box.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerDataBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DemographicModeller_Data_Maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DemographicModeller.Data.Maps */ "./js/components/DemographicModeller.Data.Maps.jsx");
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


var DemographicModellerDataBox = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerDataBox, _Component);
  var _super = _createSuper(DemographicModellerDataBox);
  function DemographicModellerDataBox(props) {
    var _this;
    _classCallCheck(this, DemographicModellerDataBox);
    _this = _super.call(this, props);
    _this.download = _this.download.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModellerDataBox, [{
    key: "renderDataSet",
    value: function renderDataSet(dataSetType) {
      switch (dataSetType) {
        case "map":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Data_Maps__WEBPACK_IMPORTED_MODULE_1__["default"], {
            data: this.props.results
          });
          break;
      }
    }
  }, {
    key: "download",
    value: function download() {
      this.props.downloadEvent();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dm-box-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dm-box-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-3"
      }, this.props.resultTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-2 mr-4 float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-button-download",
        onClick: this.download
      }, "Download")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, this.renderDataSet(this.props.resultType))));
    }
  }]);
  return DemographicModellerDataBox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.Data.Card.jsx":
/*!*********************************************************!*\
  !*** ./js/components/DemographicModeller.Data.Card.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerDataCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DemographicModeller_Data_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemographicModeller.Data.Box */ "./js/components/DemographicModeller.Data.Box.jsx");
/* harmony import */ var _components_DemographicModeller_Data_Box_Small_MapFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DemographicModeller.Data.Box.Small.MapFilter */ "./js/components/DemographicModeller.Data.Box.Small.MapFilter.jsx");
/* harmony import */ var _components_DemographicModeller_Data_Box_Small_Charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DemographicModeller.Data.Box.Small.Charts */ "./js/components/DemographicModeller.Data.Box.Small.Charts.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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






var DemographicModellerDataCard = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerDataCard, _Component);
  var _super = _createSuper(DemographicModellerDataCard);
  function DemographicModellerDataCard(props) {
    var _this;
    _classCallCheck(this, DemographicModellerDataCard);
    _this = _super.call(this, props);
    _this.state = {
      dataset: [],
      years: [1, '1996'],
      cities: [1, 'Johannesburg'],
      wards: [1, 'Ward 1'],
      table: [],
      geometries: [],
      max: 1,
      region: 1,
      ward: 'None'
    };
    _this.loadData = _this.loadData.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.showLoader = _this.showLoader.bind(_assertThisInitialized(_this));
    _this.hideLoader = _this.hideLoader.bind(_assertThisInitialized(_this));
    _this.rebind = _this.rebind.bind(_assertThisInitialized(_this));
    _this.downloadMapData = _this.downloadMapData.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModellerDataCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadData();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader();
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/demographics')["catch"](function (error) {
                  _this2.hideLoader();
                  _this2.setState({
                    modal: true,
                    toggle: true
                  });
                });
              case 3:
                result = _context2.sent;
                try {
                  if (result) {
                    this.setState({
                      dataset: result.data
                    });
                    this.setState({
                      years: result.data.form_year
                    });
                    this.setState({
                      cities: result.data.form_city
                    });
                    this.setState({
                      wards: result.data.form_ward
                    });
                    this.setState({
                      table: result.data.table1
                    });
                    this.setState({
                      max: result.data.max1
                    });
                    this.setState({
                      region: result.data.region1
                    });
                    this.setState({
                      geometries: result.data.geometries1
                    });
                  } else {
                    this.setState({
                      dataset: []
                    });
                    this.setState({
                      years: [1, '1996']
                    });
                    this.setState({
                      cities: [1, 'Johannesburg']
                    });
                    this.setState({
                      wards: [1, 'Ward 1']
                    });
                    this.setState({
                      table: []
                    });
                    this.setState({
                      max: 1
                    });
                    this.setState({
                      region: 1
                    });
                    this.setState({
                      geometries: []
                    });
                  }
                  this.hideLoader();
                } catch (error) {
                  //For now we just swallow any errors. Any data errors get handled above in axios call.
                  this.hideLoader();
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function loadData() {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }()
  }, {
    key: "rebind",
    value: function () {
      var _rebind = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(year, city, ward) {
        var _this3 = this;
        var data, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader();
                data = {
                  'city_ward_code': ward,
                  'region_id': city,
                  'year': year
                };
                if (ward === '') {
                  ward = 'None';
                }
                this.setState({
                  region: city,
                  ward: ward
                });
                _context3.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  method: 'post',
                  url: '/api/demographics',
                  data: data,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })["catch"](function (error) {
                  _this3.hideLoader();
                  _this3.setState({
                    modal: true,
                    toggle: true
                  });
                });
              case 6:
                result = _context3.sent;
                try {
                  if (result) {
                    this.setState({
                      dataset: result.data
                    });
                    this.setState({
                      table: result.data.table1
                    });
                    this.setState({
                      max: result.data.max1
                    });
                    this.setState({
                      region: result.data.region1
                    });
                    this.setState({
                      geometries: result.data.geometries1
                    });
                  } else {
                    this.setState({
                      dataset: []
                    });
                    this.setState({
                      table: []
                    });
                    this.setState({
                      max: 1
                    });
                    this.setState({
                      region: 1
                    });
                    this.setState({
                      geometries: []
                    });
                  }
                  this.hideLoader();
                } catch (error) {
                  //For now we just swallow any errors. Any data errors get handled above in axios call.
                  this.hideLoader();
                }
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function rebind(_x, _x2, _x3) {
        return _rebind.apply(this, arguments);
      }
      return rebind;
    }()
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      if (!this.state.modal) {
        this.setState({
          modal: true
        });
      } else {
        this.setState({
          modal: false
        });
      }
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.setState({
        loader: true
      });
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.setState({
        loader: false
      });
    }
  }, {
    key: "downloadMapData",
    value: function downloadMapData() {
      this.props.downloadMapEvent(this.state.region, this.state.ward);
    }
  }, {
    key: "render",
    value: function render() {
      var modalCloseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "modal-close fa fa-times",
        "aria-hidden": "true",
        onClick: this.toggleModal
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "demographic-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-content-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Data_Box_Small_MapFilter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        yearOptions: this.state.years,
        cityOptions: this.state.cities,
        wardOptions: this.state.wards,
        dataBindEvent: this.rebind
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Data_Box_Small_Charts__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Time Series",
        table: this.state.table,
        max: this.state.max,
        downloadEvent: this.props.downloadEvent
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Data_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        resultTitle: "Geographic Representation",
        results: this.state.geometries,
        downloadEvent: this.downloadMapData,
        resultType: "map"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isOpen: this.state.modal,
        toggle: this.toggleModal,
        modalclassname: "fade"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggle: this.toggleModal,
        modalclassname: "modal-header",
        close: modalCloseIcon
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-exclamation-triangle",
        "aria-hidden": "true"
      }), "\xA0Server Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "modal-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "There is currently no data available for the selected indicator!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isOpen: this.state.loader,
        className: "modal-dialog-centered loader"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ml-3 pt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "grow",
        color: "secondary",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "grow",
        color: "success",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "grow",
        color: "danger",
        size: "sm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "grow",
        color: "warning",
        size: "sm"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pt-4 pl-4 float-left"
      }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))));
    }
  }]);
  return DemographicModellerDataCard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.Data.Maps.jsx":
/*!*********************************************************!*\
  !*** ./js/components/DemographicModeller.Data.Maps.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerDataMap)
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

var DemographicModellerDataMap = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerDataMap, _Component);
  var _super = _createSuper(DemographicModellerDataMap);
  function DemographicModellerDataMap(props) {
    var _this;
    _classCallCheck(this, DemographicModellerDataMap);
    _this = _super.call(this, props);
    _this.loadMap = _this.loadMap.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModellerDataMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.data.length > 0) {
        var container = L.DomUtil.get('map');
        if (container != null) {
          container._leaflet_id = null;
        }
        this.loadMap();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.data.length !== 0) {
        var container = L.DomUtil.get('map');
        if (container != null) {
          container._leaflet_id = null;
        }
        this.loadMap();
      }
    }
  }, {
    key: "loadMap",
    value: function loadMap() {
      var geojson;
      var map = L.map('map').setView([-26.195246, 28.034088], 10);

      //Note: HACK to prevent 404 tile errors
      //Riaan Snyders - 1 July 2020
      try {
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }).addTo(map);
      } catch (e) {}
      var info1 = L.control();
      info1.onAdd = function (map) {
        this._div = L.DomUtil.create('div');
        this._div.setAttribute('id', 'infoDiv');
        this.update();
        return this._div;
      };
      info1.update = function (props) {
        var div = document.getElementById('infoDiv');
        if (div) {
          div.classList.add('info');
          div.innerHTML = '<h4>Demographic Model Data</h4>' + (props ? '<b>' + props.name + '</b><br />Migration Value for <b>' + props.year + '</b>: ' + props.density + '<br />Flow Value: ' + props.flow : 'Hover over a region');
        }
      };
      info1.addTo(map);
      var statesData = this.props.data.features;
      geojson = L.geoJson(statesData, {
        style: function style(feature) {
          var d = feature.properties.flow;
          var color = d > 5000 ? '#b2182b' : d > 2500 ? '#d6604d' : d > 1000 ? '#f4a582' : d > 500 ? '#fddbc7' : d > 0 ? '#f7f7f7' : d > -500 ? '#d1e5f0' : d > -1000 ? '#92c5de' : d > -2500 ? '#4393c3' : d > -5000 ? '#2166ac' : '#053061';
          return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: .7,
            fillColor: color
          };
        },
        onEachFeature: function onEachFeature(feature, layer) {
          layer.on({
            mouseover: function mouseover(e) {
              var layer = e.target;
              layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: .7
              });
              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
              }
              info1.update(layer.feature.properties);
            },
            mouseout: function mouseout(e) {
              geojson.resetStyle(e.target);
              info1.update();
            },
            click: function click(e) {
              map.fitBounds(e.target.getBounds());
            }
          });
        }
      }).addTo(map);
      map.fitBounds(geojson.getBounds());
      var legend = L.control({
        position: 'bottomright'
      });
      legend.onAdd = function (map) {
        var legendDiv = document.getElementById('legend');
        if (!legendDiv) {
          var div = L.DomUtil.create('div'),
            grades = [-5000, -2500, -1000, -500, 0, 500, 1000, 2500, 5000],
            labels = [],
            from,
            to;
          div.setAttribute('id', 'legend');
          for (var i = 0; i < grades.length; i++) {
            from = grades[i];
            to = grades[i + 1];
            var d = from + 1;
            var color = d > 5000 ? '#b2182b' : d > 2500 ? '#d6604d' : d > 1000 ? '#f4a582' : d > 500 ? '#fddbc7' : d > 0 ? '#f7f7f7' : d > -500 ? '#d1e5f0' : d > -1000 ? '#92c5de' : d > -2500 ? '#4393c3' : d > -5000 ? '#2166ac' : '#053061';
            labels.push('<i style="background:' + color + ';padding: 1px 10px; margin-right:2px;"></i>  ' + from + (to ? '&ndash;' + to : '+'));
          }
          div.innerHTML = labels.join('<br>');
          return div;
        } else {
          return legendDiv;
        }
      };
      legend.addTo(map);
      document.getElementById('legend').classList.add('info');
      document.getElementById('legend').classList.add('legend');
    }
  }, {
    key: "style",
    value: function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: .7,
        fillColor: this.getMapColor(feature.properties.flow)
      };
    }
  }, {
    key: "getMapColor",
    value: function getMapColor(d) {
      return d > 5000 ? '#b2182b' : d > 2500 ? '#d6604d' : d > 1000 ? '#f4a582' : d > 500 ? '#fddbc7' : d > 0 ? '#f7f7f7' : d > -500 ? '#d1e5f0' : d > -1000 ? '#92c5de' : d > -2500 ? '#4393c3' : d > -5000 ? '#2166ac' : '#053061';
    }
  }, {
    key: "highlightFeature",
    value: function highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: .7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
      info1.update(layer.feature.properties);
    }
  }, {
    key: "resetHighlight",
    value: function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info1.update();
    }
  }, {
    key: "zoomToFeature",
    value: function zoomToFeature(e) {
      map1.fitBounds(e.target.getBounds());
    }
  }, {
    key: "onEachFeature",
    value: function onEachFeature(feature, layer) {
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "map"
      }));
    }
  }]);
  return DemographicModellerDataMap;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.Footer.Card.jsx":
/*!***********************************************************!*\
  !*** ./js/components/DemographicModeller.Footer.Card.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModellerFooterCard)
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

var DemographicModellerFooterCard = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModellerFooterCard, _Component);
  var _super = _createSuper(DemographicModellerFooterCard);
  function DemographicModellerFooterCard(props) {
    _classCallCheck(this, DemographicModellerFooterCard);
    return _super.call(this, props);
  }
  _createClass(DemographicModellerFooterCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-1 "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ie-content-card ie-content-card-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dm-footer-button-white ",
        href: this.props.report,
        target: "_blank"
      }, "Download Methodology"))))))));
    }
  }]);
  return DemographicModellerFooterCard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DemographicModeller.jsx":
/*!***********************************************!*\
  !*** ./js/components/DemographicModeller.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemographicModeller)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DemographicModeller_Data_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DemographicModeller.Data.Card */ "./js/components/DemographicModeller.Data.Card.jsx");
/* harmony import */ var _components_DemographicModeller_Footer_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemographicModeller.Footer.Card */ "./js/components/DemographicModeller.Footer.Card.jsx");
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



var report = '/static/dist/data/report.pdf';
var DemographicModeller = /*#__PURE__*/function (_Component) {
  _inherits(DemographicModeller, _Component);
  var _super = _createSuper(DemographicModeller);
  function DemographicModeller(props) {
    var _this;
    _classCallCheck(this, DemographicModeller);
    _this = _super.call(this, props);
    _this.downloadMethodology = _this.downloadMethodology.bind(_assertThisInitialized(_this));
    _this.downloadTimeChart = _this.downloadTimeChart.bind(_assertThisInitialized(_this));
    _this.downloadMapData = _this.downloadMapData.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DemographicModeller, [{
    key: "downloadMapData",
    value: function downloadMapData(region, ward) {
      var fileName = 'demographics.csv';
      var dataUrl = '/demographics/' + region + '/' + ward + '/download';
      this.downloadData(dataUrl, fileName);
    }
  }, {
    key: "downloadTimeChart",
    value: function downloadTimeChart() {
      var dataUri = document.getElementById('timeChartPng').value;
      this.downloadData(dataUri, 'chart.png');
    }
  }, {
    key: "downloadMethodology",
    value: function downloadMethodology() {
      var fileName = 'report.pdf';
      var encodedUri = '/static/dist/data/report.pdf';
      this.downloadData(encodedUri, fileName);
    }
  }, {
    key: "downloadData",
    value: function downloadData(uri, filename) {
      var link = document.createElement("a");
      link.download = filename;
      link.href = uri;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container pb-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Data_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        downloadEvent: this.downloadTimeChart,
        downloadMapEvent: this.downloadMapData
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-sm-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DemographicModeller_Footer_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        report: report
      }))));
    }
  }]);
  return DemographicModeller;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DemographicModeller_jsx.js.map