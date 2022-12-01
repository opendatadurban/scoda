"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_Back_jsx-js_components_Iframe_jsx"],{

/***/ "./js/components/DataStories.Back.jsx":
/*!********************************************!*\
  !*** ./js/components/DataStories.Back.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_DataStories_Icon_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Icon.Svg */ "./js/components/DataStories.Icon.Svg.jsx");
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


var DataStoriesNavigation = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesNavigation, _Component);
  var _super = _createSuper(DataStoriesNavigation);
  function DataStoriesNavigation(props) {
    _classCallCheck(this, DataStoriesNavigation);
    return _super.call(this, props);
  }
  _createClass(DataStoriesNavigation, [{
    key: "render",
    value: function render() {
      var homeUrl = '/scoda/toolkit#/data-stories-details';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ml-5 ds-main-navigation-button-back2 ml-0",
        onClick: function onClick() {
          return window.location = "".concat(homeUrl);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-main-navigation-button-back-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Icon_Svg__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-main-navigation-button-back-text"
      }, "Back to Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "h-25 d-inline-block"
      })));
    }
  }]);
  return DataStoriesNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.Icon.Svg.jsx":
/*!************************************************!*\
  !*** ./js/components/DataStories.Icon.Svg.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesSVGIcon)
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

var DataStoriesSVGIcon = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesSVGIcon, _Component);
  var _super = _createSuper(DataStoriesSVGIcon);
  function DataStoriesSVGIcon(props) {
    _classCallCheck(this, DataStoriesSVGIcon);
    return _super.call(this, props);
  }
  _createClass(DataStoriesSVGIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        width: "26px",
        height: "24px",
        viewBox: "0 0 26 24",
        version: "1.1",
        xmlns: "https://www.w3.org/2000/svg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
        x: "-6.0%",
        y: "-40.0%",
        width: "112.0%",
        height: "180.0%",
        filterUnits: "objectBoundingBox",
        id: "filter-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feOffset", {
        dx: "0",
        dy: "1",
        "in": "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
        stdDeviation: "2.5",
        "in": "shadowOffsetOuter1",
        result: "shadowBlurOuter1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix", {
        values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0",
        type: "matrix",
        "in": "shadowBlurOuter1",
        result: "shadowMatrixOuter1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feMerge", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feMergeNode", {
        "in": "shadowMatrixOuter1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feMergeNode", {
        "in": "SourceGraphic"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        id: "Data-Stories",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        id: "State-of-Cities-Finance-2018---Financing-Infrastructure",
        transform: "translate(-139.000000, -84.000000)",
        "fill-rule": "nonzero",
        stroke: "#4A4A4A",
        "stroke-width": "1.79581363"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        id: "Back-Button",
        filter: "url(#filter-1)",
        transform: "translate(113.000000, 79.000000)"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        id: "icon_return",
        transform: "translate(39.500000, 16.000000) rotate(-270.000000) translate(-39.500000, -16.000000) translate(33.000000, 9.000000)"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
        x1: "6.5",
        y1: "0",
        x2: "6.5",
        y2: "13",
        id: "Line"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M0,9 L5.66749664,13.6885432 C6.15056216,14.0881683 6.84943784,14.0881683 7.33250336,13.6885432 L13,9 L13,9",
        id: "Path-3"
      })))))));
    }
  }]);
  return DataStoriesSVGIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Iframe.jsx":
/*!**********************************!*\
  !*** ./js/components/Iframe.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Iframe = function Iframe(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
    src: props.src,
    height: props.height,
    width: "100%"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iframe);

/***/ })

}]);
//# sourceMappingURL=js_components_DataStories_Back_jsx-js_components_Iframe_jsx.js.map