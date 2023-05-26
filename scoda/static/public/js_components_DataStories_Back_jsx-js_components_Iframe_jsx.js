"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStories_Back_jsx-js_components_Iframe_jsx"],{

/***/ "./js/components/DataStories.Back.jsx":
/*!********************************************!*\
  !*** ./js/components/DataStories.Back.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataStoriesNavigation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_DataStories_Icon_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataStories.Icon.Svg */ \"./js/components/DataStories.Icon.Svg.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar DataStoriesNavigation = /*#__PURE__*/function (_Component) {\n  _inherits(DataStoriesNavigation, _Component);\n  var _super = _createSuper(DataStoriesNavigation);\n  function DataStoriesNavigation(props) {\n    _classCallCheck(this, DataStoriesNavigation);\n    return _super.call(this, props);\n  }\n  _createClass(DataStoriesNavigation, [{\n    key: \"render\",\n    value: function render() {\n      var homeUrl = '/scoda/toolkit#/data-stories-details';\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"container-fluid mt-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-0 ml-5 ds-main-navigation-button-back2 ml-0\",\n        onClick: function onClick() {\n          return window.location = \"\".concat(homeUrl);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-2\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-0 ds-main-navigation-button-back-icon\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_Icon_Svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-0 ds-main-navigation-button-back-text\"\n      }, \"Back to Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"h-25 d-inline-block\"\n      })));\n    }\n  }]);\n  return DataStoriesNavigation;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n//# sourceURL=webpack://ocl_bb_library/./js/components/DataStories.Back.jsx?");

/***/ }),

/***/ "./js/components/DataStories.Icon.Svg.jsx":
/*!************************************************!*\
  !*** ./js/components/DataStories.Icon.Svg.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataStoriesSVGIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar DataStoriesSVGIcon = /*#__PURE__*/function (_Component) {\n  _inherits(DataStoriesSVGIcon, _Component);\n  var _super = _createSuper(DataStoriesSVGIcon);\n  function DataStoriesSVGIcon(props) {\n    _classCallCheck(this, DataStoriesSVGIcon);\n    return _super.call(this, props);\n  }\n  _createClass(DataStoriesSVGIcon, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n        width: \"26px\",\n        height: \"24px\",\n        viewBox: \"0 0 26 24\",\n        version: \"1.1\",\n        xmlns: \"https://www.w3.org/2000/svg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"defs\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"filter\", {\n        x: \"-6.0%\",\n        y: \"-40.0%\",\n        width: \"112.0%\",\n        height: \"180.0%\",\n        filterUnits: \"objectBoundingBox\",\n        id: \"filter-1\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feOffset\", {\n        dx: \"0\",\n        dy: \"1\",\n        \"in\": \"SourceAlpha\",\n        result: \"shadowOffsetOuter1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feGaussianBlur\", {\n        stdDeviation: \"2.5\",\n        \"in\": \"shadowOffsetOuter1\",\n        result: \"shadowBlurOuter1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feColorMatrix\", {\n        values: \"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0\",\n        type: \"matrix\",\n        \"in\": \"shadowBlurOuter1\",\n        result: \"shadowMatrixOuter1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feMerge\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feMergeNode\", {\n        \"in\": \"shadowMatrixOuter1\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"feMergeNode\", {\n        \"in\": \"SourceGraphic\"\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", {\n        id: \"Data-Stories\",\n        stroke: \"none\",\n        \"stroke-width\": \"1\",\n        fill: \"none\",\n        \"fill-rule\": \"evenodd\",\n        \"stroke-linecap\": \"round\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", {\n        id: \"State-of-Cities-Finance-2018---Financing-Infrastructure\",\n        transform: \"translate(-139.000000, -84.000000)\",\n        \"fill-rule\": \"nonzero\",\n        stroke: \"#4A4A4A\",\n        \"stroke-width\": \"1.79581363\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", {\n        id: \"Back-Button\",\n        filter: \"url(#filter-1)\",\n        transform: \"translate(113.000000, 79.000000)\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", {\n        id: \"icon_return\",\n        transform: \"translate(39.500000, 16.000000) rotate(-270.000000) translate(-39.500000, -16.000000) translate(33.000000, 9.000000)\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"line\", {\n        x1: \"6.5\",\n        y1: \"0\",\n        x2: \"6.5\",\n        y2: \"13\",\n        id: \"Line\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n        d: \"M0,9 L5.66749664,13.6885432 C6.15056216,14.0881683 6.84943784,14.0881683 7.33250336,13.6885432 L13,9 L13,9\",\n        id: \"Path-3\"\n      })))))));\n    }\n  }]);\n  return DataStoriesSVGIcon;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n//# sourceURL=webpack://ocl_bb_library/./js/components/DataStories.Icon.Svg.jsx?");

/***/ }),

/***/ "./js/components/Iframe.jsx":
/*!**********************************!*\
  !*** ./js/components/Iframe.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar Iframe = function Iframe(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"iframe\", {\n    src: props.src,\n    height: props.height,\n    width: \"100%\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iframe);\n\n//# sourceURL=webpack://ocl_bb_library/./js/components/Iframe.jsx?");

/***/ })

}]);