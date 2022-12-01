"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_templates_codebook_Explore_jsx"],{

/***/ "./js/templates/codebook/Explore.jsx":
/*!*******************************************!*\
  !*** ./js/templates/codebook/Explore.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");


var Navigation_scoda = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("js_components_Navigation_scoda_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Navigation_scoda */ "./js/components/Navigation_scoda.jsx"));
});
var Hero_Collapsable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("js_components_Hero_Collapsible_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Hero.Collapsible */ "./js/components/Hero.Collapsible.jsx"));
});
var CBIndicatorExplorer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Modal_js"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_select2_dist_js_select2_js"), __webpack_require__.e("vendors-node_modules_reactstrap_es_ModalBody_js-node_modules_reactstrap_es_ModalHeader_js-nod-156e7b"), __webpack_require__.e("js_components_IndicatorExplorer_Data_Box_Small_ChartFilter_jsx-js_components_IndicatorExplore-c66174"), __webpack_require__.e("js_components_codebook-explorer_CBIndicatorExplorer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/codebook-explorer/CBIndicatorExplorer */ "./js/components/codebook-explorer/CBIndicatorExplorer.jsx"));
});
var Footer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactstrap_es_Fade_js-node_modules_babel_runtime_helpers_esm_assertThisI-9a4f1c"), __webpack_require__.e("vendors-node_modules_react-popper_lib_esm_Popper_js-node_modules_reactstrap_es_Button_js"), __webpack_require__.e("vendors-node_modules_reactstrap_es_Popover_js-node_modules_reactstrap_es_PopoverBody_js-node_-72dee4"), __webpack_require__.e("js_components_Footer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Footer */ "./js/components/Footer.jsx"));
});
var _heroTitle_explore = 'Data Explorer';
var _heroContent_explore = "Our Indicators: We use a diverse range of carefully selected and tested indicators to compile our State of Cities Report.  \nYou can browse, analyse and download these individual indicators using our Data Explorer tool.";
var _heroInfoTitle_explore = 'ANALYSIS TOOLS';
var _heroPrimaryColor_explore = '#FFAD5A';
var _heroSecondaryColor_explore = '#FFAD5A';
var Explore = function Explore() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation_scoda, {
    box_shadow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hero_Collapsable, {
    title: _heroTitle_explore,
    content: _heroContent_explore,
    infoTitle: _heroInfoTitle_explore,
    primaryColor: _heroPrimaryColor_explore,
    secondaryColor: _heroSecondaryColor_explore
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBIndicatorExplorer, {
    id: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explore);

/***/ })

}]);
//# sourceMappingURL=js_templates_codebook_Explore_jsx.js.map