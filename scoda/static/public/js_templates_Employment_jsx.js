"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_templates_Employment_jsx"],{

/***/ "./js/context.jsx":
/*!************************!*\
  !*** ./js/context.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloseAllErrors\": () => (/* binding */ CloseAllErrors),\n/* harmony export */   \"CloseDropdownGlobal\": () => (/* binding */ CloseDropdownGlobal),\n/* harmony export */   \"SelectContext\": () => (/* binding */ SelectContext),\n/* harmony export */   \"SelectContextState\": () => (/* binding */ SelectContextState),\n/* harmony export */   \"useCloseAllErrors\": () => (/* binding */ useCloseAllErrors),\n/* harmony export */   \"useGlobalClose\": () => (/* binding */ useGlobalClose),\n/* harmony export */   \"useSelectOpen\": () => (/* binding */ useSelectOpen)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar SelectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar CloseDropdownGlobal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar CloseAllErrors = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar useSelectOpen = function useSelectOpen() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SelectContext);\n};\nvar useGlobalClose = function useGlobalClose() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CloseDropdownGlobal);\n};\nvar useCloseAllErrors = function useCloseAllErrors() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CloseAllErrors);\n};\nvar SelectContextState = function SelectContextState(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    selectOpen = _useState2[0],\n    setSelect = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{\n      errorThrown: false\n    }, {\n      errorThrown: false\n    }, {\n      errorThrown: false\n    }, {\n      errorThrown: false\n    }, {\n      errorThrown: false\n    }, {\n      errorThrown: false\n    }]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    error = _useState4[0],\n    setError = _useState4[1];\n  var closeGlobally = function closeGlobally() {\n    if (selectOpen) {\n      setSelect(false);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContext.Provider, {\n    value: {\n      selectOpen: selectOpen,\n      setSelect: setSelect\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseDropdownGlobal.Provider, {\n    value: closeGlobally\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseAllErrors.Provider, {\n    value: {\n      error: error,\n      setError: setError\n    }\n  }, children)));\n};\n\n//# sourceURL=webpack://ocl_bb_library/./js/context.jsx?");

/***/ }),

/***/ "./js/templates/Employment.jsx":
/*!*************************************!*\
  !*** ./js/templates/Employment.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GenericDashboardSetup/helpers/helpers */ \"./js/components/GenericDashboardSetup/helpers/helpers.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./js/context.jsx\");\n\n\n\nvar Footer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c\"), __webpack_require__.e(\"vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js\"), __webpack_require__.e(\"vendors-node_modules_reactstrap_es_Popover_js-node_modules_reactstrap_es_PopoverBody_js-node_-72dee4\"), __webpack_require__.e(\"js_components_Footer_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Footer */ \"./js/components/Footer.jsx\"));\n});\nvar Navigation_scoda = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_jquery_dist_jquery_js\"), __webpack_require__.e(\"js_components_Navigation_scoda_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Navigation_scoda */ \"./js/components/Navigation_scoda.jsx\"));\n});\nvar Employment = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_jquery_dist_jquery_js\"), __webpack_require__.e(\"vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c\"), __webpack_require__.e(\"vendors-node_modules_chart_js_dist_Chart_js-node_modules_moment_locale_af_js-node_modules_mom-96435a\"), __webpack_require__.e(\"vendors-node_modules_reactstrap_es_Modal_js\"), __webpack_require__.e(\"vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js\"), __webpack_require__.e(\"vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_react-chartjs-2_es_index_js--eed459\"), __webpack_require__.e(\"vendors-node_modules_html-to-image_es_index_js-node_modules_reactstrap_es_ButtonDropdown_js-n-db2eeb\"), __webpack_require__.e(\"js_components_Subnav_jsx-node_modules_moment_locale_sync_recursive_\"), __webpack_require__.e(\"js_components_GenericDashboardSetup_GenericChart_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/GenericDashboardSetup/GenericChart */ \"./js/components/GenericDashboardSetup/GenericChart.jsx\"));\n});\nvar Home = function Home() {\n  var subNavContent = {\n    dropdownMenu: [{\n      name: \"Service Delivery\",\n      href: \"socr#/service_delivery\",\n      active: false\n    }, {\n      name: \"Citizen Engagement\",\n      href: \"socr#/citizen_engagement\",\n      active: false\n    }, {\n      name: \"Municipal Human Resources\",\n      href: \"socr#/human_resources\",\n      active: false\n    }, {\n      name: \"People and Households\",\n      href: \"socr#/people_household\",\n      active: false\n    }, {\n      name: \"Employment\",\n      href: \"socr#/employment\",\n      active: true\n    }, {\n      name: \"Dwellings\",\n      href: \"socr#/dwellings\",\n      active: false\n    }, {\n      name: \"Household Income\",\n      href: \"socr#/household_income\",\n      active: false\n    }, {\n      name: \"Food Security, Literacy and Inequality\",\n      href: \"socr#/food_security\",\n      active: false\n    }, {\n      name: \"Life Expectancy and Health\",\n      href: \"socr#/life_expectancy\",\n      active: false\n    }, {\n      name: \"Education\",\n      href: \"socr#/education\",\n      active: false\n    }, {\n      name: \"Sustainability\",\n      href: \"socr#/sustainability\",\n      active: false\n    }, {\n      name: \"ICT Infrastructure\",\n      href: \"socr#/infrastructure\",\n      active: false\n    }, {\n      name: \"Transport Mode\",\n      href: \"socr#/transport_mode\",\n      active: false\n    }, {\n      name: \"Public Transport Spend\",\n      href: \"socr#/public_transport_spend\",\n      active: false\n    }, {\n      name: \"Travel Time\",\n      href: \"socr#/travel_time\",\n      active: false\n    }]\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_2__.SelectContextState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"socr--home\",\n    style: {\n      backgroundColor: \"white\",\n      overflowX: 'hidden'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation_scoda, {\n    logoHide: false,\n    box_shadow: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Employment, {\n    indicator_ids: [935, 934, \"n8\", 933],\n    minYear: 2015,\n    maxYear: 2018,\n    subNavContent: subNavContent,\n    gridItems: 4,\n    dropdownName: subNavContent.dropdownMenu[4].name,\n    colors: _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.peopleHouseholdColors\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://ocl_bb_library/./js/templates/Employment.jsx?");

/***/ })

}]);