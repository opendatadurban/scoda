"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_Affordability_jsx"],{

/***/ "./js/components/DataStories.Affordability.jsx":
/*!*****************************************************!*\
  !*** ./js/components/DataStories.Affordability.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesAffordability)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DataStories_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Navigation */ "./js/components/DataStories.Navigation.jsx");
/* harmony import */ var _components_DataStories_Content_Card_Affordability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.Content.Card.Affordability */ "./js/components/DataStories.Content.Card.Affordability.jsx");
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



var DataStoriesAffordability = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesAffordability, _Component);
  var _super = _createSuper(DataStoriesAffordability);
  function DataStoriesAffordability(props) {
    _classCallCheck(this, DataStoriesAffordability);
    return _super.call(this, props);
  }
  _createClass(DataStoriesAffordability, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container px-3 data-story-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col w-50 d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Affordability__WEBPACK_IMPORTED_MODULE_2__["default"], {
        storyTitle: "State of Cities Finance 2018",
        storySubtitle: "Affordability",
        filter: "Inclusive Cities",
        filterColor: "#FFC057",
        author: "The South African Cities Network",
        publishedDate: "31 January 2020"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row p-5"
      }));
    }
  }]);
  return DataStoriesAffordability;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.Content.Card.Affordability.jsx":
/*!******************************************************************!*\
  !*** ./js/components/DataStories.Content.Card.Affordability.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesContentCardAffordability)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Image */ "./js/components/Image.jsx");
/* harmony import */ var _components_DataStories_Content_Card_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataStories.Content.Card.Header */ "./js/components/DataStories.Content.Card.Header.jsx");
/* harmony import */ var _components_DataStories_Content_Card_HighlightBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DataStories.Content.Card.HighlightBlock */ "./js/components/DataStories.Content.Card.HighlightBlock.jsx");
/* harmony import */ var _components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DataStories.Content.Card.ContentBlock */ "./js/components/DataStories.Content.Card.ContentBlock.jsx");
/* harmony import */ var _components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DataStories.Content.Card.Data.Information */ "./js/components/DataStories.Content.Card.Data.Information.jsx");
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







var DataStoriesContentCardAffordability = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesContentCardAffordability, _Component);
  var _super = _createSuper(DataStoriesContentCardAffordability);
  function DataStoriesContentCardAffordability(props) {
    _classCallCheck(this, DataStoriesContentCardAffordability);
    return _super.call(this, props);
  }
  _createClass(DataStoriesContentCardAffordability, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (chart_js__WEBPACK_IMPORTED_MODULE_1___default().platform.disableCSSInjection) = true;
      this.renderDataTable();
      this.renderChart();
      this.renderChart2();
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      var chartColors1 = {
        yellow: 'rgb(255, 236,0)',
        green: 'rgb(113, 199,120)',
        blue: 'rgb(140, 171,228)',
        red: 'rgb(220,123,135)'
      };
      var chartRef = document.getElementById('mainChart').getContext('2d');
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(chartRef, {
        type: 'bar',
        data: {
          labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
          datasets: [{
            label: 'Type A',
            backgroundColor: chartColors1.yellow,
            stack: 'Stack 0',
            data: [1.8, 8.3, 2.8, 0.6, 4.2, 0.7, -1.6, 0.7, 1.6, 2.1]
          }, {
            label: 'Type B',
            backgroundColor: chartColors1.green,
            stack: 'Stack 1',
            data: [1.2, 5.5, 2.2, 0.6, 3.9, 1.1, -0.5, 0.9, 0.2, 1.7]
          }, {
            label: 'Type C',
            backgroundColor: chartColors1.blue,
            stack: 'Stack 2',
            data: [0.6, 5.2, 1.6, -0.1, 2.2, 1.7, 0.9, 0.9, 0.9, 1.6]
          }, {
            label: 'Type D',
            backgroundColor: chartColors1.red,
            stack: 'Stack 3',
            data: [0.5, 6.3, 1.3, -0.1, 0.9, -1.4, 1.5, 0.4, 1.2, 1.2]
          }]
        },
        options: {
          title: {
            display: false,
            text: 'Chart Title'
          },
          tooltips: {
            mode: 'index',
            intercept: false,
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label + '%';
              }
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '%  ';
                }
              },
              gridLines: {
                drawTicks: false
              }
            }]
          }
        }
      });
    }
  }, {
    key: "renderChart2",
    value: function renderChart2() {
      var chartColors = {
        colour_1: 'rgb(247, 208, 145)',
        colour_2: 'rgb(255, 182, 68)',
        colour_3: 'rgb(245, 149, 0)'
      };
      var barChartData_a = {
        labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
        datasets: [{
          label: '2010',
          backgroundColor: chartColors.colour_1,
          stack: 'Stack 0',
          data: [17.9, 9.5, 10.9, 17.4, 10.3, 14.1, 11.6, 16.4, 22.9]
        }, {
          label: '2012',
          backgroundColor: chartColors.colour_2,
          stack: 'Stack 1',
          data: [17.3, 10.9, 10.1, 18.6, 10.3, 14.5, 12.7, 19.0, 20.5]
        }, {
          label: '2014',
          backgroundColor: chartColors.colour_3,
          stack: 'Stack 2',
          data: [16.9, 13.6, 13.5, 14.8, 9.5, 13.3, 11.0, 17.2, 20.8]
        }]
      };
      var barChartData_b = {
        labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
        datasets: [{
          label: '2010',
          backgroundColor: chartColors.colour_1,
          stack: 'Stack 0',
          data: [12.7, 9.6, 8.3, 11.5, 7.2, 9.3, 9.2, 10.6, 14.6]
        }, {
          label: '2012',
          backgroundColor: chartColors.colour_2,
          stack: 'Stack 1',
          data: [12.2, 9.9, 8.2, 12.2, 6.8, 10.0, 10.0, 12.2, 15.4]
        }, {
          label: '2014',
          backgroundColor: chartColors.colour_3,
          stack: 'Stack 2',
          data: [11.8, 10.3, 9.9, 10.2, 6.9, 9.1, 8.9, 11.2, 12.8]
        }]
      };
      var barChartData_c = {
        labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
        datasets: [{
          label: '2010',
          backgroundColor: chartColors.colour_1,
          stack: 'Stack 0',
          data: [8.4, 7.8, 6.8, 8.5, 6.5, 7.1, 8.5, 8.2, 8.4]
        }, {
          label: '2012',
          backgroundColor: chartColors.colour_2,
          stack: 'Stack 1',
          data: [8.5, 8.2, 6.8, 9.1, 5.5, 7.8, 8.0, 9.3, 8.7]
        }, {
          label: '2014',
          backgroundColor: chartColors.colour_3,
          stack: 'Stack 2',
          data: [8.4, 8.9, 7.7, 7.7, 6.0, 7.8, 7.7, 9.0, 8.2]
        }]
      };
      var barChartData_d = {
        labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
        datasets: [{
          label: '2010',
          backgroundColor: chartColors.colour_1,
          stack: 'Stack 0',
          data: [6.5, 6.9, 6.9, 7.2, 6.0, 6.1, 8.2, 6.7, 6.4]
        }, {
          label: '2012',
          backgroundColor: chartColors.colour_2,
          stack: 'Stack 1',
          data: [6.8, 7.7, 6.8, 7.8, 7.4, 7.1, 7.5, 7.6, 6.6]
        }, {
          label: '2014',
          backgroundColor: chartColors.colour_3,
          stack: 'Stack 2',
          data: [6.9, 8.2, 7.2, 7.0, 7.8, 6.7, 6.6, 7.9, 6.2]
        }]
      };
      var ctx_b = document.getElementById('barChartTypeB').getContext('2d');
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx_b, {
        type: 'bar',
        data: barChartData_b,
        options: {
          title: {
            display: true,
            text: 'Type B (Cost as % of Income)'
          },
          tooltips: {
            mode: 'index',
            intercept: false,
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label + '%';
              }
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '%  ';
                }
              },
              gridLines: {
                drawTicks: false
              }
            }]
          }
        }
      });
      var ctx_a = document.getElementById('barChartTypeA').getContext('2d');
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx_a, {
        type: 'bar',
        data: barChartData_a,
        options: {
          title: {
            display: true,
            text: 'Type A (Cost as % of Income)'
          },
          tooltips: {
            mode: 'index',
            intercept: false,
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label + '%';
              }
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '%  ';
                }
              },
              gridLines: {
                drawTicks: false
              }
            }]
          }
        }
      });
      var ctx_c = document.getElementById('barChartTypeC').getContext('2d');
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx_c, {
        type: 'bar',
        data: barChartData_c,
        options: {
          title: {
            display: true,
            text: 'Type C (Cost as % of Income)'
          },
          tooltips: {
            mode: 'index',
            intercept: false,
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label + '%';
              }
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '%  ';
                }
              },
              gridLines: {
                drawTicks: false
              }
            }]
          }
        }
      });
      var ctx_d = document.getElementById('barChartTypeD').getContext('2d');
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(ctx_d, {
        type: 'bar',
        data: barChartData_d,
        options: {
          title: {
            display: true,
            text: 'Type D (Cost as % of Income)'
          },
          tooltips: {
            mode: 'index',
            intercept: false,
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label + '%';
              }
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                zeroLineBorderDash: [],
                zeroLineWidth: 2,
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '%  ';
                }
              },
              gridLines: {
                drawTicks: false
              }
            }]
          }
        }
      });
    }
  }, {
    key: "downloadChart",
    value: function downloadChart() {
      var url_base64jp = document.getElementById("mainChart").toDataURL("image/png");
      var a = document.getElementById("download");
      a.href = url_base64jp;
    }
  }, {
    key: "renderDataTable",
    value: function renderDataTable() {
      try {
        $('#example').DataTable({
          "order": [[1, "asc"], [0, "asc"]],
          "bPaginate": false,
          "info": false,
          dom: 'Bfrtip',
          buttons: ['copy', 'csv']
        });
        document.getElementsByTagName("input")[0].placeholder = "Search...";
        document.getElementsByTagName("button")[1].innerText = "Copy this Table";
        document.getElementsByTagName("button")[2].innerText = "Download as CSV";
        $('#example_filter').text('Search...');
      } catch (err) {
        location.reload();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var contentBlockOne = "Figure 1 shows that between 2015 and 2017, the cost of all service packages increased in all cities, with the exception of Nelson Mandela Bay (Type D) and Mangaung (Types A and B). Cape Town increased the cost of all its service packages at well above the average growth for the nine cities. (this increase was driven by higher charges for water combined with the abolition of the free 6kl for non-indigent households).\n        <br/><br/>\n        All this is important, but are the bills affordable? \n        <br/><br/>\n        The affordability of municipal bills depends on both the municipal rates and charges and household incomes. The distribution of household incomes is used to create benchmark household income categories ranging from about R3 000 to R 50 000, which are associated with the four service packages A, B, C, and D.";
      var contentBlockTwo2 = "An affordability analysis, which used an affordability threshold of 10% maximum of household income spent on tariffs, found that most Type A and B service packages are unaffordable.\n        <br/><br/>\n        The following two images show the ranking of all municipal bills across all cities from least affordable (in red) to most affordable (in green). The least affordable bills, across all cities, correspond to the service packages A and B associated with lower income consumers, while the most affordable bills correspond to the service packages C and D associated with higher income consumers.";
      var contentBlockTwo = "<ul style=\"margin-left:2%\">\n            <li>There is a mismatch in the job supply and demand in South Africa</li>\n            <li>The country\u2019s economy isn\u2019t creating jobs for the available labour force</li>\n            <li>The EPWP is an important programme that creates employment opportunities for the poor and unemployed unskilled and semi-skilled people in the country</li>\n            <li>More programmes like the EPWP will be required if jobs are not created for the available labour force of the country, especially with;\n                <ol type=\"a\">\n                    <li>job losses in the agricultural and mining sector and </li>\n                    <li>the industrial revolution that requires a new kind of skillset from the labour force.</li>\n                </ol>\n            </li>\n        </ul>";
      var resources = "<o onClick=\"javascript:window.open('https://www.sacities.net/municipal-finance/','_new');\">Read</o> more SACN publications and research on municipal finance matters on the SACN website\n        <o onClick=\"javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')\">Engage</o> with SACN\u2019s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance\u2019s interactively on National Treasury\u2019s <o onClick=\"javascript:window.open('https://municipalmoney.gov.za/','_new')\">Municipal Money</o> Datatool\n        Explore the <o onClick=\"javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')\">full collection of State of Cities Finances 2018 datasets</o> on SCODA\u2019s data portal\n        <br/><br/>\n        If you have any queries and further comment on this datastory, please email <o onClick=\"javascript:window.location='mailto:danga@sacities.net'\">Danga Mughogho</o> at SACN.";
      var contentBlockFour = "The demand to increase revenue makes cities focus on the gains to be made from greenfield development rather than brownfield development.\n        <br/><br/>\n        The two columns show the fiscal consequences of greenfield vs brownfield development.\n        <br/><br/>\n        A completed greenfield development will generate significantly higher revenue from property rates because of the lower value of rates payable on agricultural land.\n        <br/><br/>\n        The bottom row of the graphic shows very clearly the quantum difference in the percentage increase in the revenue received per property in a greenfield vs a brownfield development.";
      var contentBlockThree = "<o onClick=\"javascript:window.open('https://www.sacities.net/municipal-finance/','_new');\">Read</o> more SACN publications and research on municipal finance matters on the SACN website\n        <o onClick=\"javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')\">Engage</o> with SACN\u2019s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance\u2019s interactively on National Treasury\u2019s <o onClick=\"javascript:window.open('https://municipalmoney.gov.za/','_new')\">Municipal Money</o> Datatool\n        Explore the <o onClick=\"javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')\">full collection of State of Cities Finances 2018 datasets</o> on SCODA\u2019s data portal\n        <br/><br/>\n        If you have any queries and further comment on this datastory, please email <o onClick=\"javascript:window.location='mailto:danga@sacities.net'\">Danga Mughogho</o> at SACN.";
      var imgOne = "/static/dist/img/scoda/datastories/ds-mun.svg";
      var imgTwo = "/static/dist/img/scoda/datastories/muntable.PNG";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-4 ml-2 pr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        storyTitle: this.props.storyTitle,
        storySubtitle: this.props.storySubtitle,
        filter: this.props.filter,
        filterColor: this.props.filterColor,
        author: this.props.author,
        publishedDate: this.props.publishedDate
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card-body pt-4 pb-5 mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Increasing Cost of Municipal Bills",
        content: "A key message from the State of City Finances 2018 report is that citizens are in crisis. Although growth in the cost of municipal bills has slowed over the past two years, consumers are concerned by increased electricity and water costs, especially in an economic environment of rising costs generally."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "municipal",
        imgSrc: imgOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: "To these characteristics are added city tariffs for sanitation, other standard monthly charges added to household bills, and VAT on service charges."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "The Composition of a Municipal Bill"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Table 1",
        dataDescription: "Standard Service Packages"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "muntable",
        imgSrc: imgTwo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances Chapter 2, p. 38"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Increase in Cost of Municipal Bills Over Time"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Figure 1",
        dataDescription: "Average annual real growth in the cost of service packages by city between 2015 and 2017"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-10"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 float-right ds-download-button",
        onClick: this.downloadChart
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        id: "download",
        download: "chart.png",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, "Download as PNG")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "mainChart",
        className: "w-100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances, Chapter 2, p. 46."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockTwo2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Affordability of Municipal Bills"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Table 2",
        dataDescription: "Affordability of municipal bills"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row modal-body-2 mt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 w-100 visual-point"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        id: "example",
        className: "tabl table-striped table-bordered"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top',
          width: '98px'
        }
      }, "CITY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top'
        }
      }, "PACKAGE TYPE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top'
        }
      }, "2017 BENCHMARK MUNICIPAL BILL (2017 RANDS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top'
        }
      }, "MUNICIPAL BILL AS % OF BENCHMARK INCOME - 2015"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top'
        }
      }, "MUNICIPAL BILL AS % OF BENCHMARK INCOME - 2017"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        style: {
          verticalAlign: 'top'
        }
      }, "CHANGE IN AFFORDABILITY SINCE 2015"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "BCM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "1212.75"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "16.9%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "15.3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.6%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "JHB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "1128.28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "15.5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "14.3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.2%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "TSH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "1125.58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "15.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "14.3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.5%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "ETH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "951.35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "12.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "12.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-0.7%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "CCT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "928.12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "11.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "11.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "0.5%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "NMB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "919.44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "12.9%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "11.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.2%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "MSU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "906.53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "12.4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "11.5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "MAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "884.99"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "13.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "11.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "-1.8%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "EKU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a"
      }, "Type A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "754,46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "9.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "9.5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-a-row"
      }, "0,3%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "BCM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1616.71"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "11.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "10.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-1.0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "JHB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1581.54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "11.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "10.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-0.9%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "TSH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1514.19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "10.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "9.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-1.0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "CCT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1514.14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "9.7%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "9.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-0.1%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "EKU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1 010,75"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "6,6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "6,4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-0,2%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "MSU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1302.06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "9.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-1.0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "ETH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1285.95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8.7%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8.1%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-0.6%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "NMB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "1266.99"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-0.8%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "MAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b"
      }, "Type B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "205,47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "8,6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "7,6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-b-row"
      }, "-1,0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "BCM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "2516.60"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "8.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "8.0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0.8%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "CCT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "2464.67"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.9%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0.1%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "MAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "1205.47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "8.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-1.0%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "TSH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "2282.85"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "8.1%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0.9%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "JHB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "2132.00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6.8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0.7%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "ETH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "2106.12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "7.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6.7%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0.6%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "EKU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "1 991,16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6,8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6,3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0,5%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "MSU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c"
      }, "Type C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "895,64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6,6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "6,0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-c-row"
      }, "-0,6%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "NMB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "3 693,33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6,7%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5,8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,9%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "EKU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5 614,24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "9,8%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "8,9%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,9%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "TSH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "4019.77"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "7.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6.4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0.8%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "MSU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "3 305,90"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5,7%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5,2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,5%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "MAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "3 466,00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6,0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5,5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,5%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "JHB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "3531.23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6.2%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "5.6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0.6%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "CCT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "4 726,64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "7,4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "7,5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "0,1%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "BCM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "4 198,35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "7,4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6,6%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,7%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "ETH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d"
      }, "Type D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "4 052,74"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "7,0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "6,4%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "type-d-row"
      }, "-0,6%")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances, Chapter 2, p. 55."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: "All this to say that the ordinary consumer considers the costs of a municipal bill in relation to the other monthly, and other expenses that they face, and their income."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-content-card-highlight-block pb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-10 mt-4 ml-5 mx-5"
      }, "Citizens Municipal Bills Are Regressive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row ml-3 ds-content-card-highlight-block-text p-3"
      }, "Cities have generally regressive tariff structures. This means that municipal bills account for a proportionally greater share of the income of poorer households than that of wealthier households."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Affordability of Municipal Bills"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Figure 2",
        dataDescription: "Cost of packages Type A to D as a percentage of benchmark houshold incomes (2015 - 2017)"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "barChartTypeA",
        className: "w-100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "barChartTypeB",
        className: "w-100"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "barChartTypeC",
        className: "w-100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "barChartTypeD",
        className: "w-100"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances Chapter 2, p. 55"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Resources",
        content: resources
      })))))));
    }
  }]);
  return DataStoriesContentCardAffordability;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DataStories_Affordability_jsx.js.map