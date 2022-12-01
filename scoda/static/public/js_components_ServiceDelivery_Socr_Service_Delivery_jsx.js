"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_ServiceDelivery_Socr_Service_Delivery_jsx"],{

/***/ "./js/components/ServiceDelivery/Socr.Service.Delivery.jsx":
/*!*****************************************************************!*\
  !*** ./js/components/ServiceDelivery/Socr.Service.Delivery.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Sidebar_left = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_fortawesome_re-6efdcb"), __webpack_require__.e("js_components_Sidebar_left_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Sidebar_left */ "./js/components/Sidebar_left.jsx"));
});
var Subnav = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Modal_js"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_html-to-image_es_index_js-no-b4b12f"), __webpack_require__.e("js_components_Subnav_jsx"), __webpack_require__.e("js_context_jsx-_72b81")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Subnav */ "./js/components/Subnav.jsx"));
});
var Stat_Panel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_select2_dist_js_select2_js"), __webpack_require__.e("vendors-node_modules_react-select2-wrapper_lib_components_Select2_js-node_modules_react-selec-120076"), __webpack_require__.e("js_components_ServiceDelivery_Service_Delivery_Stat_Panel_jsx-node_modules_css-loader_dist_ru-328a8c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Service.Delivery.Stat.Panel */ "./js/components/ServiceDelivery/Service.Delivery.Stat.Panel.jsx"));
});
var Charts_dashboards = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Modal_js"), __webpack_require__.e("vendors-node_modules_chart_js_dist_Chart_js-node_modules_moment_locale_af_js-node_modules_mom-96435a"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_react-chartjs-2_es_index_js"), __webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("js_components_ServiceDelivery_Charts_Service_Delivery_jsx-node_modules_moment_locale_sync_rec-124f78")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Charts.Service.Delivery */ "./js/components/ServiceDelivery/Charts.Service.Delivery.jsx"));
});
var Socr_dashboards = function Socr_dashboards() {
  var subNavContent = {
    dropdownMenu: [{
      name: "Service Delivery",
      href: "socr#/service_delivery",
      active: true
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
      active: false
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sorc_dashboards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer--top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Subnav, {
    name: "State of Cities Reports",
    dropdownName: "Service Delivery",
    dropDownItem: subNavContent,
    buttonText: "Download as PNG"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stat_Panel, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Charts_dashboards, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socr_dashboards);

/***/ })

}]);
//# sourceMappingURL=js_components_ServiceDelivery_Socr_Service_Delivery_jsx.js.map