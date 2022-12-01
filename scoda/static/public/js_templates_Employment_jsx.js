"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_templates_Employment_jsx"],{

/***/ "./js/context.jsx":
/*!************************!*\
  !*** ./js/context.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseAllErrors": () => (/* binding */ CloseAllErrors),
/* harmony export */   "CloseDropdownGlobal": () => (/* binding */ CloseDropdownGlobal),
/* harmony export */   "SelectContext": () => (/* binding */ SelectContext),
/* harmony export */   "SelectContextState": () => (/* binding */ SelectContextState),
/* harmony export */   "useCloseAllErrors": () => (/* binding */ useCloseAllErrors),
/* harmony export */   "useGlobalClose": () => (/* binding */ useGlobalClose),
/* harmony export */   "useSelectOpen": () => (/* binding */ useSelectOpen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SelectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var CloseDropdownGlobal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var CloseAllErrors = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var useSelectOpen = function useSelectOpen() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SelectContext);
};
var useGlobalClose = function useGlobalClose() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CloseDropdownGlobal);
};
var useCloseAllErrors = function useCloseAllErrors() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CloseAllErrors);
};
var SelectContextState = function SelectContextState(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectOpen = _useState2[0],
    setSelect = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      errorThrown: false
    }, {
      errorThrown: false
    }, {
      errorThrown: false
    }, {
      errorThrown: false
    }, {
      errorThrown: false
    }, {
      errorThrown: false
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var closeGlobally = function closeGlobally() {
    if (selectOpen) {
      setSelect(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContext.Provider, {
    value: {
      selectOpen: selectOpen,
      setSelect: setSelect
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseDropdownGlobal.Provider, {
    value: closeGlobally
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseAllErrors.Provider, {
    value: {
      error: error,
      setError: setError
    }
  }, children)));
};

/***/ }),

/***/ "./js/templates/Employment.jsx":
/*!*************************************!*\
  !*** ./js/templates/Employment.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GenericDashboardSetup/helpers/helpers */ "./js/components/GenericDashboardSetup/helpers/helpers.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./js/context.jsx");



var Footer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Popover_js-node_modules_reactstrap_es_PopoverBody_js-node_-72dee4"), __webpack_require__.e("js_components_Footer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Footer */ "./js/components/Footer.jsx"));
});
var Navigation_scoda = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "js_components_Navigation_scoda_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Navigation_scoda */ "./js/components/Navigation_scoda.jsx"));
});
var Employment = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Modal_js"), __webpack_require__.e("vendors-node_modules_chart_js_dist_Chart_js-node_modules_moment_locale_af_js-node_modules_mom-96435a"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_react-chartjs-2_es_index_js"), __webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_html-to-image_es_index_js-no-b4b12f"), __webpack_require__.e("js_components_Subnav_jsx"), __webpack_require__.e("js_components_GenericDashboardSetup_GenericChart_jsx-node_modules_moment_locale_sync_recursive_")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/GenericDashboardSetup/GenericChart */ "./js/components/GenericDashboardSetup/GenericChart.jsx"));
});
var Home = function Home() {
  var subNavContent = {
    dropdownMenu: [{
      name: "Service Delivery",
      href: "socr#/service_delivery",
      active: false
    }, {
      name: "Citizen Engagement",
      href: "socr#/citizen_engagement",
      active: false
    }, {
      name: "Municipal Human Resources",
      href: "socr#/human_resources",
      active: false
    }, {
      name: "People and Households",
      href: "socr#/people_household",
      active: false
    }, {
      name: "Employment",
      href: "socr#/employment",
      active: true
    }, {
      name: "Dwellings",
      href: "socr#/dwellings",
      active: false
    }, {
      name: "Household Income",
      href: "socr#/household_income",
      active: false
    }, {
      name: "Food Security, Literacy and Inequality",
      href: "socr#/food_security",
      active: false
    }, {
      name: "Life Expectancy and Health",
      href: "socr#/life_expectancy",
      active: false
    }, {
      name: "Education",
      href: "socr#/education",
      active: false
    }, {
      name: "Sustainability",
      href: "socr#/sustainability",
      active: false
    }, {
      name: "ICT Infrastructure",
      href: "socr#/infrastructure",
      active: false
    }, {
      name: "Transport Mode",
      href: "socr#/transport_mode",
      active: false
    }, {
      name: "Public Transport Spend",
      href: "socr#/public_transport_spend",
      active: false
    }, {
      name: "Travel Time",
      href: "socr#/travel_time",
      active: false
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context__WEBPACK_IMPORTED_MODULE_2__.SelectContextState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "socr--home",
    style: {
      backgroundColor: "white",
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation_scoda, {
    logoHide: false,
    box_shadow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Employment, {
    indicator_ids: [935, 934, "n8", 933],
    minYear: 2015,
    maxYear: 2018,
    subNavContent: subNavContent,
    gridItems: 4,
    dropdownName: subNavContent.dropdownMenu[4].name,
    colors: _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.peopleHouseholdColors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);
//# sourceMappingURL=js_templates_Employment_jsx.js.map