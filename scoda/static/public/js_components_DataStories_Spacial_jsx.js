"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_Spacial_jsx"],{

/***/ "./js/components/DataStories.Content.Card.Spacial.jsx":
/*!************************************************************!*\
  !*** ./js/components/DataStories.Content.Card.Spacial.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesContentCardSpacial)
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







var DataStoriesContentCardSpacial = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesContentCardSpacial, _Component);
  var _super = _createSuper(DataStoriesContentCardSpacial);
  function DataStoriesContentCardSpacial(props) {
    _classCallCheck(this, DataStoriesContentCardSpacial);
    return _super.call(this, props);
  }
  _createClass(DataStoriesContentCardSpacial, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (chart_js__WEBPACK_IMPORTED_MODULE_1___default().platform.disableCSSInjection) = true;
      this.renderChart();
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
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
          labels: ['JHB', 'CCT', 'ETH', 'TSH', 'EKU', 'NMB', 'MAN', 'BCM', 'MSU'],
          datasets: [{
            label: 'Greenfield Developments',
            backgroundColor: chartColors.green,
            stack: 'Stack 0',
            data: [5604.3, 4249.7, 8545.8, 10339.7, 5602.0, 8013.7, 8675.6, 8446.1, 7793.6]
          }, {
            label: 'Brownfield Developments',
            backgroundColor: chartColors.yellow,
            stack: 'Stack 1',
            data: [3181.1, 2755.7, 4796.1, 6563.1, 3288.6, 5156.9, 4877.8, 5464.2, 5805.4]
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
                  return Math.round(value * 100) / 100 + '  ';
                }
              },
              gridLines: {
                drawTicks: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Rands'
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
    key: "render",
    value: function render() {
      var contentBlockOne = "Despite the fact that South Africa\u2019s national urban agenda prioritises urban densification, the municipal revenue model, which is dependent on property rates, incentivises urban sprawl.\n        <br/>\n        <br/>\n        What explains why our cities continue to sprawl, and despite policy prescriptions, urban planners and finance departments seem powerless to prevent this happening?";
      var contentBlockTwo = "Greenfield development is development from land zoned for agricultural use, while brownfield development is a proxy for the rezoning of industrial use urban land.\n\n        <br/><br/>\n        As Figure 1 shows, both brownfield and greenfield developments have a positive impact on revenues in all nine metros, but greenfield development has a significantly higher impact.";
      var contentBlockFour = "The demand to increase revenue makes cities focus on the gains to be made from greenfield development rather than brownfield development.\n        <br/><br/>\n        The two columns show the fiscal consequences of greenfield vs brownfield development.\n        <br/><br/>\n        A completed greenfield development will generate significantly higher revenue from property rates because of the lower value of rates payable on agricultural land.\n        <br/><br/>\n        The bottom row of the graphic shows very clearly the quantum difference in the percentage increase in the revenue received per property in a greenfield vs a brownfield development.";
      var contentBlockThree = "<o onClick=\"javascript:window.open('https://www.sacities.net/municipal-finance/','_new');\">Read</o> more SACN publications and research on municipal finance matters on the SACN website\n        <o onClick=\"javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')\">Engage</o> with SACN\u2019s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance\u2019s interactively on National Treasury\u2019s <o onClick=\"javascript:window.open('https://municipalmoney.gov.za/','_new')\">Municipal Money</o> Datatool\n        Explore the <o onClick=\"javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')\">full collection of State of Cities Finances 2018 datasets</o> on SCODA\u2019s data portal\n        <br/><br/>\n        If you have any queries and further comment on this datastory, please email <o onClick=\"javascript:window.location='mailto:danga@sacities.net'\">Danga Mughogho</o> at SACN.";
      var imgOne = "/static/dist/img/scoda/datastories/ds-spacial.svg";
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
        className: "col p-2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Explaining the Revenue Incentive"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "FIGURE 1",
        dataDescription: "Impact of Brownfield and Greenfield developments on per-property municipal revenue"
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
        download: "chart.png",
        style: {
          color: '#fff',
          textDecoration: 'none'
        }
      }, "Download as PNG")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
        id: "mainChart",
        className: "w-100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances Chapter 3, p. 78"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockTwo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_HighlightBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
        infoBlockText: "This clearly indicates a fiscal incentive for municipalities to promote greenfield developments over brownfield developments: sprawl is incentivised and densification not."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Data Story 2 Sub-Story",
        dataDescription: "Illustrating the financial mechanics that underpin the revenue logic of city finance"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_HighlightBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
        infoBlockText: "What financial mechanisms explain why cities prefer sprawl to densification?"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Illustrating the Logic"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "spacial",
        imgSrc: imgOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "State of City Finances Chapter 3, p. 81"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockFour
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
      }, "Resolution to the Problem")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row ml-3 ds-content-card-highlight-block-text p-3"
      }, "The gap between city finance (core revenue model) and spatial transformation needs to be bridged, to ensure that the desired spatial objectives are incentivised and built into the day-to-day running of cities."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Resources",
        content: contentBlockThree
      })))))));
    }
  }]);
  return DataStoriesContentCardSpacial;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.Spacial.jsx":
/*!***********************************************!*\
  !*** ./js/components/DataStories.Spacial.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesSpacial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DataStories_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Navigation */ "./js/components/DataStories.Navigation.jsx");
/* harmony import */ var _components_DataStories_Content_Card_Spacial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.Content.Card.Spacial */ "./js/components/DataStories.Content.Card.Spacial.jsx");
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



var DataStoriesSpacial = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesSpacial, _Component);
  var _super = _createSuper(DataStoriesSpacial);
  function DataStoriesSpacial(props) {
    _classCallCheck(this, DataStoriesSpacial);
    return _super.call(this, props);
  }
  _createClass(DataStoriesSpacial, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Spacial__WEBPACK_IMPORTED_MODULE_2__["default"], {
        storyTitle: "State of Cities Finance 2018",
        storySubtitle: "Financing Spatial Transformation",
        filter: "Productive Cities",
        filterColor: "#F05252",
        author: "The South African Cities Network",
        publishedDate: "31 January 2020",
        infoBlockText: "Cities are facing systemic problems that affect two urban policy goals: spatial transformation and building infrastructure"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row p-5"
      }));
    }
  }]);
  return DataStoriesSpacial;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DataStories_Spacial_jsx.js.map