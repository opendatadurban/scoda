"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_templates_TravelTime_jsx"],{

/***/ "./js/templates/TravelTime.jsx":
/*!*************************************!*\
  !*** ./js/templates/TravelTime.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_GenericDashboardSetup_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GenericDashboardSetup/data/data */ "./js/components/GenericDashboardSetup/data/data.js");
/* harmony import */ var _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GenericDashboardSetup/helpers/helpers */ "./js/components/GenericDashboardSetup/helpers/helpers.js");



var Footer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Popover_js-node_modules_reactstrap_es_PopoverBody_js-node_-72dee4"), __webpack_require__.e("js_components_Footer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Footer */ "./js/components/Footer.jsx"));
});
var Navigation_scoda = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "js_components_Navigation_scoda_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Navigation_scoda */ "./js/components/Navigation_scoda.jsx"));
});
var TravelTime = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Modal_js"), __webpack_require__.e("vendors-node_modules_chart_js_dist_Chart_js-node_modules_moment_locale_af_js-node_modules_mom-96435a"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_react-chartjs-2_es_index_js"), __webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_html-to-image_es_index_js-no-b4b12f"), __webpack_require__.e("js_components_Subnav_jsx"), __webpack_require__.e("js_components_GenericDashboardSetup_GenericChart_jsx-node_modules_moment_locale_sync_recursive_"), __webpack_require__.e("js_context_jsx-_72b80")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/GenericDashboardSetup/GenericChart */ "./js/components/GenericDashboardSetup/GenericChart.jsx"));
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
      active: false
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
      active: true
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "socr--home",
    id: "content",
    style: {
      backgroundColor: "white",
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation_scoda, {
    logoHide: false,
    box_shadow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TravelTime, {
    indicator_ids: [_components_GenericDashboardSetup_data_data__WEBPACK_IMPORTED_MODULE_1__.travel_time_text_box_data, "indicator text box"],
    minYear: 2015,
    maxYear: 2018,
    subNavContent: subNavContent,
    gridItems: 2,
    dropdownName: subNavContent.dropdownMenu[14].name,
    colors: _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.peopleHouseholdColors,
    secondaryChart: false,
    genericIndex: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TravelTime, {
    indicator_ids: [_components_GenericDashboardSetup_data_data__WEBPACK_IMPORTED_MODULE_1__.travel_time_text_box_data_2, "indicator text box"],
    minYear: 2015,
    maxYear: 2018,
    subNavContent: subNavContent,
    gridItems: 2,
    dropdownName: subNavContent.dropdownMenu[14].name,
    colors: _components_GenericDashboardSetup_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.peopleHouseholdColors,
    secondaryChart: true,
    genericIndex: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "34px",
      backgroundColor: "rgb(241, 241, 241)"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);
//# sourceMappingURL=js_templates_TravelTime_jsx.js.map