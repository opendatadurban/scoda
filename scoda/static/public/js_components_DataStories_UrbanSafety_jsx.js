"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_UrbanSafety_jsx"],{

/***/ "./js/components/DataStories.Content.Card.UrbanSafety.jsx":
/*!****************************************************************!*\
  !*** ./js/components/DataStories.Content.Card.UrbanSafety.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesContentCardUrbanSafety)
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







var DataStoriesContentCardUrbanSafety = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesContentCardUrbanSafety, _Component);
  var _super = _createSuper(DataStoriesContentCardUrbanSafety);
  function DataStoriesContentCardUrbanSafety(props) {
    _classCallCheck(this, DataStoriesContentCardUrbanSafety);
    return _super.call(this, props);
  }
  _createClass(DataStoriesContentCardUrbanSafety, [{
    key: "render",
    value: function render() {
      var contentBlockOne = "Cities worldwide generate about 80% of the gross value added in their respective countries. Due to their association with opportunity and better livelihoods, about 60% of the South African population live in its cities and towns. However due to inequality, among other factors, cities have high levels of violence and crime.";
      var contentBlockTwo = "From national statistics, cities record the lion\u2019s share of crime: <br/>\n        <ul>\n            <li style=\"margin-left:5%\">47% of murders</li>\n            <li style=\"margin-left:5%\">58% of residential robberies</li>\n            <li style=\"margin-left:5%\">64% of aggravated robberies</li>\n            <li style=\"margin-left:5%\">73% of vehicle thefts</li>\n            <li style=\"margin-left:5%\">76% of carjackings</li>\n        </ul>\n        <br/>Because crime and violence have a distinctly urban character, there\u2019s a need to focus on cities through research aimed at reliably establishing what drives crime trends and what the right responses should entail.";
      var contentBlockFour = "The demand to increase revenue makes cities focus on the gains to be made from greenfield development rather than brownfield development.\n        <br/><br/>\n        The two columns show the fiscal consequences of greenfield vs brownfield development.\n        <br/><br/>\n        A completed greenfield development will generate significantly higher revenue from property rates because of the lower value of rates payable on agricultural land.\n        <br/><br/>\n        The bottom row of the graphic shows very clearly the quantum difference in the percentage increase in the revenue received per property in a greenfield vs a brownfield development.";
      var contentBlockThree = "<o onClick=\"javascript:window.open('https://www.sacities.net/municipal-finance/','_new');\">Read</o> more SACN publications and research on municipal finance matters on the SACN website\n        <o onClick=\"javascript:window.open('https://www.sacities.net/state-of-cities-reporting','_new')\">Engage</o> with SACN\u2019s State of Cities Reporting for broader cities development context since 2004 Explore municipal finance\u2019s interactively on National Treasury\u2019s <o onClick=\"javascript:window.open('https://municipalmoney.gov.za/','_new')\">Municipal Money</o> Datatool\n        Explore the <o onClick=\"javascript:window.open('https://ckan.scoda.co.za/dataset/city-revenue-performance','_new')\">full collection of State of Cities Finances 2018 datasets</o> on SCODA\u2019s data portal\n        <br/><br/>\n        If you have any queries and further comment on this datastory, please email <o onClick=\"javascript:window.location='mailto:danga@sacities.net'\">Danga Mughogho</o> at SACN.";
      var resources = " <ul style=\"margin-left:2%\">\n        <li>Where can I read the full report? See the <a href=\"\">SACN</a> and <a href=\"\">SaferSpaces</a> webpages.</li>\n        <li>Download and analyse data at the <a href=\"\">SCODA</a> webpage</li>\n        <li>Are there <a href=\"\">events</a> I can join? (mini launches of the Report in SACN member cities \u2013 TBC)</li>\n        <li>What other publications should I be reading on this topic? \n            <ul style=\"margin-left:1%;list-style-type: none;\">\n                <li >- <a href=\"\">Urban Safety Policy Briefs</a></li>\n                <li>- <a href=\"\">IUDF (CoGTA, 2016)</a></li>\n                <li>- <a href=\"\">NUA Localisation Framework (SACN, 2018)</a></li>\n                <li>- <a href=\"\">White Paper on Safety & Security (CSPS, 2017)</a></li>\n                <li>- <a href=\"\">Know Your Block Toolkit (SACN & SACPLAN, 2014)</a></li>\n                <li>- <a href=\"\">Participatory Safety Planning Toolkit (GIZ-VCP, 2016</a>)</li>\n            </ul>\n        </li>\n    </ul>\n    <br/>\n    If you have any queries and further comment on this datastory, please email <a href=\"mailto:siphelele@sacities.net\">Siphelele Ngobese</a> at SACN.";
      var imgOne = "/static/dist/img/scoda/datastories/ds-urban-population.svg";
      var imgTwo = "/static/dist/img/scoda/datastories/ds-urban-percapita.svg";
      var imgThree = "/static/dist/img/scoda/datastories/ds-urban-murder.svg";
      var imgFour = "/static/dist/img/scoda/datastories/ds-urban-nummurders.svg";
      var imgFive = "/static/dist/img/scoda/datastories/ds-urban-table.PNG";
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
        contentHeading: "Introduction",
        content: contentBlockOne
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-urban-header"
      }, "Proportion Urban Population (1990-2050)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "population",
        imgSrc: imgOne
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "UN DESA (2014)"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 p-5 ds-urban-addressing-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-urban-addressing-heading"
      }, "Addressing inequality is a matter of life and violent death")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-3 ds-urban-addressing-content"
      }, "Since at least the 1970s, South Africa\u2019s murder levels have not been below 30 per 100 000, which is considered very high by global standards - only a handful of countries record murder rates at this level.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Comparative international research shows that a very strong predictor of a country\u2019s level of crime and violence is its level of inequality. As measured by its Gini coefficient, South Africa is one of the most unequal countries, if not the most unequal country, in the world.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Addressing inequality must no longer be considered an abstract and long-term ideal.  It is a matter of life and violent death.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-urban-header"
      }, "Per capita income or real GVA per capita (2013)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "percapita",
        imgSrc: imgTwo
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_Data_Information__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataHeading: "Source",
        dataDescription: "Quantec Research (2015)"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "What are South Africa\u2019s murder rate figures?",
        content: "South Africa records among the highest murder rates in the world. Although the country has almost halved its murder rates since 1994, they remain worryingly high. In the past 4 years, following an all-time low in 2011, murder rates have steadily climbed. This is cause for concern."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-urban-header"
      }, "South Africa\u2019s murder rate per 100 000 (1994/1995 - 2017/2018)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "murder",
        imgSrc: imgThree
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: contentBlockTwo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Why is there a need to focus crime research on cities?",
        content: "The need to focus research on cities is because national crime statistics do not reveal the actual distribution of crime and violence. City level data is therefore essential. For example, some South African metros record murder rates above the national average."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-urban-header"
      }, "Absolute number of murders compared to murder rates per 100 00 (2017/2018)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "nummurders",
        imgSrc: imgFour
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_HighlightBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
        infoBlockText: "City level data could enable city authorities to establish the \u2018why\u2019 and craft their responses according to place-specific drivers and to solve crime and violence challenges sustainably."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-4 mt-3 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "How do fear and perception of danger affect urban residents? ",
        content: "Fear and perceptions often trump actual rates of crime. This has a direct effect on how urban residents engage in public life and their feelings of safety in public space."
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ml-2 mt-3 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        alt: "table",
        imgSrc: imgFive
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Conclusion",
        content: "The nine metropolitan cities of South Africa are where most crime types occur. At the same time they are places of opportunity, with a significant role in improving livelihoods. <br/>\r City level data and evidence are critical to planning and practice that respond to the structural and place-specific  drivers of violence and crime; so that cities are safe, liveable and inclusive. "
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_ContentBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
        contentHeading: "Resources",
        content: resources
      })))))));
    }
  }]);
  return DataStoriesContentCardUrbanSafety;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.UrbanSafety.jsx":
/*!***************************************************!*\
  !*** ./js/components/DataStories.UrbanSafety.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesUrbanSafety)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DataStories_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Navigation */ "./js/components/DataStories.Navigation.jsx");
/* harmony import */ var _components_DataStories_Content_Card_UrbanSafety__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.Content.Card.UrbanSafety */ "./js/components/DataStories.Content.Card.UrbanSafety.jsx");
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



var DataStoriesUrbanSafety = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesUrbanSafety, _Component);
  var _super = _createSuper(DataStoriesUrbanSafety);
  function DataStoriesUrbanSafety(props) {
    _classCallCheck(this, DataStoriesUrbanSafety);
    return _super.call(this, props);
  }
  _createClass(DataStoriesUrbanSafety, [{
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Content_Card_UrbanSafety__WEBPACK_IMPORTED_MODULE_2__["default"], {
        storyTitle: "Urban Safety",
        storySubtitle: "South African Cities in Context",
        filter: "Well Governed Cities",
        filterColor: "#196CDB",
        author: "The South African Cities Network",
        publishedDate: "31 January 2020",
        infoBlockText: "Research and evidence are essential to crafting responses that address the structural drivers of crime and violence in South Africa\u2019s cities."
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row p-5"
      }));
    }
  }]);
  return DataStoriesUrbanSafety;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DataStories_UrbanSafety_jsx.js.map