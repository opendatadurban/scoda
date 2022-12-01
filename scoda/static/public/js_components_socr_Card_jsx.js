"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_socr_Card_jsx"],{

/***/ "./js/components/socr/Card.jsx":
/*!*************************************!*\
  !*** ./js/components/socr/Card.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardInfo */ "./js/components/socr/CardInfo.js");


var Card = function Card() {
  var _GetCardInfo = (0,_CardInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    info = _GetCardInfo.info;
  console.log(info, "info");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid socr-cards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bootstrap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, info.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i,
      className: "col-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card card_data-story-preview card_data-story-preview" + [item["class"]] + " module",
      id: "card_data-story-preview_durban-economy"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: item.href,
      className: "card--trigger"
    }, "Card click layer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card--body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card--body--content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "card_data-story-preview--title"
    }, item.header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "card_data-story-preview--title--meta"
    }, item.subheader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card_data-story-preview--metadata"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, item.type))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card--gaussian-blur" + [item["class"]]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card--gaussian-blur" + [item["class"]]
    }))));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./js/components/socr/CardInfo.js":
/*!****************************************!*\
  !*** ./js/components/socr/CardInfo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function GetCardInfo() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      header: 'Citizen Engagement',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_citizen_engagement',
      href: '/scoda/socr#/citizen_engagement'
    }, {
      header: 'Human Resources',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_human_resources',
      href: '/scoda/socr#/human_resources'
    }, {
      header: 'Service Delivery',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_service_delivery',
      href: '/scoda/socr#/service_delivery'
    }, {
      header: 'People and Households',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_people_household',
      href: '/scoda/socr#/people_household'
    }, {
      header: 'Employment',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_employment',
      href: '/scoda/socr#/employment'
    }, {
      header: 'Dwellings',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_dwellings',
      href: '/scoda/socr#/dwellings'
    }, {
      header: 'Household Income',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_household_income',
      href: '/scoda/socr#/household_income'
    }, {
      header: 'Food Security, Literacy and Inequality',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_food_security',
      href: '/scoda/socr#/food_security'
    }, {
      header: 'Life Expectancy and Health',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_life_expectancy',
      href: '/scoda/socr#/life_expectancy'
    }, {
      header: 'Education',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_education',
      href: '/scoda/socr#/education'
    }, {
      header: 'Sustainability',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_sustainability',
      href: '/scoda/socr#/sustainability'
    }, {
      header: 'ICT Infrastructure',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_infrastructure',
      href: '/scoda/socr#/infrastructure'
    }, {
      header: 'Transport Mode',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_transport_mode',
      href: '/scoda/socr#/transport_mode'
    }, {
      header: 'Public Transport Spend',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_public_transport_spend',
      href: '/scoda/socr#/public_transport_spend'
    }, {
      header: 'Travel Time',
      subheader: " (From SoCR 2021)",
      type: 'DASHBOARD',
      "class": '_travel_time',
      href: '/scoda/socr#/travel_time'
    }

    //   {
    //     header:'State of City Finances 2020: An Introduction',
    //     subheader:" (From SoCR 2021)",
    //     type:'DATA STORY',
    //     class:'_state_of_municipal_finance',
    //     href:'/scoda/toolkit#/ds-state-of-the-city-finance-2020'
    //   },
    //   {
    //   header:'Household Bills & Affordability',
    //   subheader:" (From SoCR 2021)",
    //   type:'DATA STORY',
    //   class:'_household_bills_affordability',
    //   href:'/scoda/toolkit#/ds-household-bills-and-affordibility'
    // },
    ]),
    _useState2 = _slicedToArray(_useState, 1),
    info = _useState2[0];
  return {
    info: info
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetCardInfo);

/***/ })

}]);
//# sourceMappingURL=js_components_socr_Card_jsx.js.map