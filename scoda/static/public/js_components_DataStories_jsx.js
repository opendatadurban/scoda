"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_jsx"],{

/***/ "./js/components/DataStories.Content.Card.jsx":
/*!****************************************************!*\
  !*** ./js/components/DataStories.Content.Card.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesContentCard)
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







var DataStoriesContentCard = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesContentCard, _Component);
  var _super = _createSuper(DataStoriesContentCard);
  function DataStoriesContentCard(props) {
    _classCallCheck(this, DataStoriesContentCard);
    return _super.call(this, props);
  }
  _createClass(DataStoriesContentCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (chart_js__WEBPACK_IMPORTED_MODULE_1___default().platform.disableCSSInjection) = true;
      this.renderCapitalGrants();
    }
  }, {
    key: "renderCapitalGrants",
    value: function renderCapitalGrants() {
      var chartRef = document.getElementById('mainChart').getContext('2d');
      var chartColors = {
        yellow: 'rgb(255,201,105)',
        green: 'rgb(113,199,120)',
        blue: 'rgb(140,171,228)',
        orange: 'rgb(245,149,0)',
        red: 'rgb(220,123,135)'
      };
      new (chart_js__WEBPACK_IMPORTED_MODULE_1___default())(chartRef, {
        type: 'bar',
        data: {
          labels: ['JHB', 'CPT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM'],
          datasets: [{
            label: 'Capital Grants',
            backgroundColor: chartColors.yellow,
            stack: 'Stack 0',
            data: [40.0, 32.8, 40.0, 40.3, 41.4, 14.3, 15.7, 15.0]
          }, {
            label: 'Existing Development Charges',
            backgroundColor: chartColors.green,
            stack: 'Stack 0',
            data: [5.9, 1.4, 0.0, 1.9, 0.0, 1.8, 2.5, 0.0]
          }, {
            label: 'Internal Funds',
            backgroundColor: chartColors.blue,
            stack: 'Stack 0',
            data: [7.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          }, {
            label: 'New Loans',
            backgroundColor: chartColors.orange,
            stack: 'Stack 0',
            data: [8.4, 11.7, 30.7, 47.6, 7.1, 3.1, 4.8, 10.1]
          }, {
            label: 'Funding Gap',
            backgroundColor: chartColors.red,
            stack: 'Stack 0',
            data: [170.5, 107.9, 71.3, 72.5, 117.3, 16.2, 9.7, 3.6]
          }]
        },
        options: {
          title: {
            display: false,
            text: 'Title'
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
                return label;
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                fontStyle: 'bold'
              },
              gridLines: {
                borderDash: [2],
                lineWidth: 2,
                color: [0, 0, 0],
                drawTicks: true
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function callback(value, index, values) {
                  return Math.round(value * 100) / 100 + '  ';
                }
              },
              gridLines: {
                drawTicks: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Nominal Rands, Nearest R billion',
                fontStyle: 'bold'
              },
              borderSkipped: 'bottom'
            }]
          }
        }
      });
    }
  }, {
    key: "downloadChart",
    value: function downloadChart() {
      var url_base64jp = document.getElementById("mainChart").toDataURL("image/jpg");
      var a = document.getElementById("download");
      a.href = url_base64jp;
    }
  }, {
    key: "render",
    value: function render() {
      var contentBlockOne = "While revenues are sufficient to cover operating expenditures in the metros, they do not generate enough internal finance to fully fund capital expenditure. \n        <br/><br/>\n        The funding gap is the difference between the metros\u2019 available revenue and capital finance, and the operating and capital expenditure required to adequately deliver on their mandates, and poses a risk to the ability of metros to provide and maintain adequate infrastructure in the medium to long term. The sources of capital finance and the funding gap for the metros is shown in figure 1.\n        <br/><br/>\n        The funding gap is shown in purple while the percentages on top of the bars indicate the funding gap as a percentage of capital expenditure in each city. It ranges from 12% in Buffalo City to 73% in Johannesburg.";
      var contentBlockTwo = "Cities can and should take steps to close the gap but need policy support at national level to develop and implement alternative revenue models.";
      var contentBlockThree = "<o onClick=\"javascript:window.open('https://www.sacities.net/municipal-finance/','_new');\">Read</o> more SACN publications and research on municipal finance matters on the SACN website\n        <o onClick=\"javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')\">Engage</o> with SACN\u2019s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance\u2019s interactively on National Treasury\u2019s <o onClick=\"javascript:window.open('https://municipalmoney.gov.za/','_new')\">Municipal Money</o> Datatool\n        Explore the <o onClick=\"javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')\">full collection of State of Cities Finances 2018 datasets</o> on SCODA\u2019s data portal\n        <br/><br/>\n        If you have any queries and further comment on this datastory, please email <o onClick=\"javascript:window.location='mailto:danga@sacities.net'\">Danga Mughogho</o> at SACN.";
      var imgOne = "/static/dist/img/scoda/datastories/ds-finance2018.svg";
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_HighlightBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
        infoBlockText: this.props.infoBlockText
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "finance2018",
        imgSrc: imgOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Figure 1",
        dataDescription: "Availability of capital finance and resulting funding gap"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-10"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 float-right ds-download-button",
        onClick: this.downloadChart
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        id: "download",
        download: "chart.jpg",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, "Download")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "mainChart",
        className: "w-100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances Chapter 4, p. 91"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Resolution to the Problem",
        content: contentBlockTwo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Resources",
        content: contentBlockThree
      })))))));
    }
  }]);
  return DataStoriesContentCard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.jsx":
/*!***************************************!*\
  !*** ./js/components/DataStories.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStories)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DataStories_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Navigation */ "./js/components/DataStories.Navigation.jsx");
/* harmony import */ var _components_DataStories_Content_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.Content.Card */ "./js/components/DataStories.Content.Card.jsx");
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



var DataStories = /*#__PURE__*/function (_Component) {
  _inherits(DataStories, _Component);
  var _super = _createSuper(DataStories);
  function DataStories(props) {
    _classCallCheck(this, DataStories);
    return _super.call(this, props);
  }
  _createClass(DataStories, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        storyTitle: "State of Cities Finance 2018",
        storySubtitle: "Financing Infrastructure",
        filter: "Sustainable Cities",
        filterColor: "#31C198",
        author: "The South African Cities Network",
        publishedDate: "31 January 2020",
        infoBlockText: "Cities are facing systemic problems that affect two urban policy goals: spatial transformation and building infrastructure"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row p-5"
      }));
    }
  }]);
  return DataStories;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DataStories_jsx.js.map