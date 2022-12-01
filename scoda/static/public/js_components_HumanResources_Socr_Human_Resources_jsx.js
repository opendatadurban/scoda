"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_HumanResources_Socr_Human_Resources_jsx"],{

/***/ "./js/components/HumanResources/Charts.Human.Resources.jsx":
/*!*****************************************************************!*\
  !*** ./js/components/HumanResources/Charts.Human.Resources.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./js/components/Button.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _Barchart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Barchart */ "./js/components/Barchart.jsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PieChart */ "./js/components/PieChart.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Table */ "./js/components/HumanResources/Table.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var style = {
  control: function control(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #4A4A4A',
        borderRadius: '28px'
      }
    });
  }
};
var CitizenEngagmentes = function CitizenEngagmentes(_ref) {
  var select_values = _ref.select_values,
    total_posts = _ref.total_posts,
    municipal_posts = _ref.municipal_posts,
    cities = _ref.cities,
    onChange = _ref.onChange,
    senior_management = _ref.senior_management;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "loader",
    isOpen: total_posts.length < 1 && municipal_posts.length < 1 && senior_management.length < 1,
    className: "modal-dialog-centered loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-0 ml-3 pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "grow",
    color: "secondary",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "grow",
    color: "success",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "grow",
    color: "danger",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "grow",
    color: "warning",
    size: "sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-0 pt-4 pl-4 float-left"
  }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid charts_dashboards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts_dashboards--left_container p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts_dashboards--select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts_dashboards--select-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "multiple",
    name: "filters",
    placeholder: "Filter City",
    value: select_values,
    options: cities,
    onChange: onChange,
    isMulti: true,
    styles: style
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts_dashboards--barcharts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-12 left-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Total number of municipal posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/970",
    target: "_blank"
  }))), total_posts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stepSize: 5000,
    hundred: true,
    divide: 1000,
    x_label: "Number of Posts",
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_6___default().map(select_values, 'label'),
      datasets: total_posts.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    }
  }) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Municipal Management Vacancies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/968",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_6___default().map(select_values, 'label'),
      datasets: municipal_posts.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 2,
    hundred: false,
    divide: 1,
    x_label: "Number of Vacancies"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Number of Senior Management Vacancies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/969",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_6___default().map(select_values, 'label'),
      datasets: senior_management.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 2,
    hundred: false,
    divide: 1,
    x_label: "Number of Vacancies"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitizenEngagmentes);

/***/ }),

/***/ "./js/components/HumanResources/Human.Resources.Stat.Panel.jsx":
/*!*********************************************************************!*\
  !*** ./js/components/HumanResources/Human.Resources.Stat.Panel.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Select */ "./js/components/Select.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_panelData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/panelData.js */ "./js/data/panelData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var HumanResourcesStatPanel = function HumanResourcesStatPanel(_ref) {
  var last_municipal_posts = _ref.last_municipal_posts,
    last_total_posts = _ref.last_total_posts,
    last_senior_management_posts = _ref.last_senior_management_posts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Buffalo City'),
    _useState2 = _slicedToArray(_useState, 2),
    place = _useState2[0],
    setPlace = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    total_municipal_posts = _useState4[0],
    setTotal_municipal_posts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    municipal_management_vacancies = _useState6[0],
    setVacancies = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    senior_management_vacancies = _useState8[0],
    setSenior_management_vacancies = _useState8[1];
  //set data
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_panelData_js__WEBPACK_IMPORTED_MODULE_3__["default"][0]),
    _useState10 = _slicedToArray(_useState9, 2),
    data = _useState10[0],
    setData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    total_mun_posts_sum = _useState12[0],
    setTotalMunPostsSum = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    mangement_mun_posts_sum = _useState14[0],
    setTotalManagementMunPostsSum = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState16 = _slicedToArray(_useState15, 2),
    senior_posts_sum = _useState16[0],
    setSeniorPostsSum = _useState16[1];
  var municipality_focus = [{
    percentage: total_municipal_posts,
    type: "Total Municipal<br/>Posts"
  }, {
    percentage: municipal_management_vacancies,
    type: "Municipal Management<br/>Vacancies"
  }, {
    percentage: senior_management_vacancies,
    type: "Senior Management<br/>Vacancies"
  }];
  var places = function places(e) {
    setPlace(e.target.value);
    if (e.target.value === 'Buffalo City') {
      setTotal_municipal_posts(last_total_posts[0][2]);
      setVacancies(last_municipal_posts[0][2]);
      setSenior_management_vacancies(last_senior_management_posts[0][2]);
    }
    if (e.target.value === 'City of Cape Town') {
      setTotal_municipal_posts(last_total_posts[1][2]);
      setVacancies(last_municipal_posts[1][2]);
      setSenior_management_vacancies(last_senior_management_posts[1][2]);
    }
    if (e.target.value === 'City of Joburg') {
      setTotal_municipal_posts(last_total_posts[2][2]);
      setVacancies(last_municipal_posts[2][2]);
      setSenior_management_vacancies(last_senior_management_posts[2][2]);
    }
    if (e.target.value === 'Ekurhuleni') {
      setTotal_municipal_posts(last_total_posts[3][2]);
      setVacancies(last_municipal_posts[3][2]);
      setSenior_management_vacancies(last_senior_management_posts[3][2]);
    }
    if (e.target.value === 'eThekwini') {
      setTotal_municipal_posts(last_total_posts[8][2]);
      setVacancies(last_municipal_posts[8][2]);
      setSenior_management_vacancies(last_senior_management_posts[8][2]);
    }
    if (e.target.value === 'Mangaung') {
      setTotal_municipal_posts(last_total_posts[4][2]);
      setVacancies(last_municipal_posts[4][2]);
      setSenior_management_vacancies(last_senior_management_posts[4][2]);
    }
    if (e.target.value === 'Nelson Mandela Bay') {
      setTotal_municipal_posts(last_total_posts[6][2]);
      setVacancies(last_municipal_posts[6][2]);
      setSenior_management_vacancies(last_senior_management_posts[6][2]);
    }
    if (e.target.value === 'Tshwane') {
      setTotal_municipal_posts(last_total_posts[7][2]);
      setVacancies(last_municipal_posts[7][2]);
      setSenior_management_vacancies(last_senior_management_posts[7][2]);
    }
    if (e.target.value === 'Msunduzi') {
      setTotal_municipal_posts(last_total_posts[5][2]);
      setVacancies(last_municipal_posts[5][2]);
      setSenior_management_vacancies(last_senior_management_posts[5][2]);
    }
  };
  var isObjectEmpty = function isObjectEmpty(obj) {
    return obj // 👈 null and undefined check
    && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isObjectEmpty(last_total_posts)) {
      setTotal_municipal_posts(last_total_posts[0][2]);
      var sum = 0;
      for (var i = 0; i < last_total_posts.length; i++) {
        sum += last_total_posts[i][2];
      }
      setTotalMunPostsSum((sum / last_total_posts.length).toFixed(0));
    }
  }, [last_total_posts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isObjectEmpty(last_municipal_posts)) {
      setVacancies(last_municipal_posts[0][2]);
      var sum = 0;
      for (var i = 0; i < last_municipal_posts.length; i++) {
        sum += last_municipal_posts[i][2];
      }
      setTotalManagementMunPostsSum((sum / last_municipal_posts.length).toFixed(0));
    }
  }, [last_municipal_posts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isObjectEmpty(last_senior_management_posts)) {
      setSenior_management_vacancies(last_senior_management_posts[0][2]);
      var sum = 0;
      for (var i = 0; i < last_senior_management_posts.length; i++) {
        sum += last_senior_management_posts[i][2];
      }
      setSeniorPostsSum((sum / last_senior_management_posts.length).toFixed(0));
    }
  }, [last_senior_management_posts]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "stat_display_panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row stat_display_panel--numbers w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6 first_panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "stat_display_panel--averages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "catagory-name "
  }, "Averages ", !isObjectEmpty(last_municipal_posts) ? last_municipal_posts[0][1] : "", "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(Municipal Posts and Vacancies)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, total_mun_posts_sum ? total_mun_posts_sum : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " Total Municipal", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, mangement_mun_posts_sum ? mangement_mun_posts_sum : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Municipal Management", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Vacancies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, senior_posts_sum ? senior_posts_sum : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Senior Management", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Vacancies")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-8"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "catagory-name catagory-name--focusName"
  }, " ", !isObjectEmpty(last_municipal_posts) ? "Municipality Focus " + last_municipal_posts[0][1] + ":" : "Municipality Focus : ", " ", place)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3 select-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: place,
    placeholder: "Select a City",
    id: data.places.id,
    multiple: data.places.multiple,
    data: data.places.data,
    name: "gender",
    onChange: places
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: 'none'
  }, total_municipal_posts ? total_municipal_posts : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Total Municipal", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: 'none'
  }, municipal_management_vacancies ? municipal_management_vacancies : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Municipal Management", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Vacancies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: 'none'
  }, senior_management_vacancies ? senior_management_vacancies : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Senior Management", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Vacancies"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanResourcesStatPanel);

/***/ }),

/***/ "./js/components/HumanResources/Socr.Human.Resources.jsx":
/*!***************************************************************!*\
  !*** ./js/components/HumanResources/Socr.Human.Resources.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sidebar_left */ "./js/components/Sidebar_left.jsx");
/* harmony import */ var _Subnav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subnav */ "./js/components/Subnav.jsx");
/* harmony import */ var _Human_Resources_Stat_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Human.Resources.Stat.Panel */ "./js/components/HumanResources/Human.Resources.Stat.Panel.jsx");
/* harmony import */ var _Charts_Human_Resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Charts.Human.Resources */ "./js/components/HumanResources/Charts.Human.Resources.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







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
    active: true
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
var Socr_Human_Resources = function Socr_Human_Resources() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    senior_management = _useState2[0],
    setSeniorManagement = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    senior_management_sum = _useState4[0],
    setSeniorManagementSum = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    total_posts = _useState6[0],
    setTotalPosts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    total_posts_sum = _useState8[0],
    setTotalPostsSum = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    municipal_posts = _useState10[0],
    setMunicipalPosts = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    municipal_posts_sum = _useState12[0],
    setMunicipalPostsSum = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    cities = _useState14[0],
    setCities = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    select_values = _useState16[0],
    setSelectValues = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    last_total_posts = _useState18[0],
    setLastTotalPosts = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    last_municipal_posts = _useState20[0],
    setLastMunicipalPost = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    last_senior_management_posts = _useState22[0],
    setLastSeniorManagementPost = _useState22[1];
  var emptyChartsData = function emptyChartsData() {
    setTotalPosts([]);
    setMunicipalPosts([]);
    setSeniorManagement([]);
  };
  var colorsByYear = function colorsByYear(year) {
    switch (year) {
      case 2014:
        return '#E0E0E0';
      case 2015:
        return '#D0D1E6';
      case 2016:
        return '#74A9CF';
      case 2017:
        return '#0570B0';
      default:
        return '#d6d6d6';
    }
  };
  var labels = function labels(city) {
    switch (city) {
      case 'Buffalo City':
        return "BUF";
      case 'City of Cape Town':
        return "CPT";
      case 'City of Joburg':
        return "JHB";
      case 'Ekurhuleni':
        return "EKU";
      case "Mangaung":
        return "MAN";
      case "Msunduzi":
        return "MSU";
      case "Nelson Mandela Bay":
        return "NMA";
      case "Tshwane":
        return "TSH";
      case "eThekwini":
        return "ETH";
    }
  };
  //Total posts
  var total_posts_callback = function total_posts_callback(table) {
    var data = [];
    var current_year = 2014;
    var sum = 0;
    while (table.filter(function (value) {
      return value[1] === current_year.toString();
    }).length > 0) {
      var current_data = table.filter(function (value) {
        return value[1] === current_year.toString();
      });
      var chart_labels = [];
      var values = [];
      for (var i = 0; i < current_data.length; i++) {
        current_data[i][0] = labels(current_data[i][0]);
        chart_labels.push({
          label: current_data[i][0],
          value: current_data[i][0]
        });
        values.push(current_data[i][2]);
        sum += current_data[i][2] ? current_data[i][2] : 0;
      }
      data.push({
        year: current_year,
        data: current_data,
        labels: chart_labels,
        values: values,
        color: colorsByYear(current_year)
      });
      setCities(chart_labels);
      setSelectValues(chart_labels);
      current_year = current_year + 1;
    }
    setTotalPostsSum(sum);
    setTotalPosts(data);
    setLastTotalPosts(data[data.length - 1].data);
    console.log('total_posts', data[data.length - 1]);
  };
  var codebook_total_posts_api = function codebook_total_posts_api(callback) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=970").then(function (res) {
      callback(res.data.table);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    codebook_total_posts_api(total_posts_callback);
  }, []);
  //End Total posts

  // Municipal posts/vacancies 
  var municipal_posts_callback = function municipal_posts_callback(table) {
    var data = [];
    var current_year = 2014;
    var sum = 0;
    while (table.filter(function (value) {
      return value[1] === current_year.toString();
    }).length > 0) {
      var current_data = table.filter(function (value) {
        return value[1] === current_year.toString();
      });
      var chart_labels = [];
      var values = [];
      for (var i = 0; i < current_data.length; i++) {
        current_data[i][0] = labels(current_data[i][0]);
        chart_labels.push(current_data[i][0]);
        values.push(current_data[i][2]);
        sum += current_data[i][2] ? current_data[i][2] : 0;
      }
      data.push({
        year: current_year,
        data: current_data,
        labels: chart_labels,
        values: values,
        color: colorsByYear(current_year)
      });
      //setCities(chart_labels)
      current_year = current_year + 1;
    }
    setMunicipalPosts(data);
    setMunicipalPostsSum(sum);
    setLastMunicipalPost(data[data.length - 1].data);
    console.log('last_municipal_posts', data[data.length - 1]);
  };
  var codebook_municipal_posts_api = function codebook_municipal_posts_api(callback) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=968").then(function (res) {
      callback(res.data.table);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    codebook_municipal_posts_api(municipal_posts_callback);
  }, []);
  // End Municipal posts/vacancies 

  var senior_management_callback = function senior_management_callback(table) {
    var data = [];
    var current_year = 2014;
    var sum = 0;
    while (table.filter(function (value) {
      return value[1] === current_year.toString();
    }).length > 0) {
      var current_data = table.filter(function (value) {
        return value[1] === current_year.toString();
      });
      var chart_labels = [];
      var values = [];
      for (var i = 0; i < current_data.length; i++) {
        current_data[i][0] = labels(current_data[i][0]);
        chart_labels.push(current_data[i][0]);
        values.push(current_data[i][2]);
        sum += current_data[i][2] ? current_data[i][2] : 0;
      }
      data.push({
        year: current_year,
        data: current_data,
        labels: chart_labels,
        values: values,
        color: colorsByYear(current_year)
      });
      //setCities(chart_labels)
      current_year = current_year + 1;
    }
    setSeniorManagement(data);
    setSeniorManagementSum(sum);
    setLastSeniorManagementPost(data[data.length - 1].data);
    console.log('last_senior_management_posts', data[data.length - 1]);
  };
  var codebook_senior_management_api = function codebook_senior_management_api(callback) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=969").then(function (res) {
      console.log('codebook_senior_management_api', res);
      callback(res.data.table);
    });
  };
  var onChange = function onChange(e) {
    setSelectValues(e);
    emptyChartsData();
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=970").then(function (res) {
      callback_select(res.data.table, setTotalPosts, e, setTotalPostsSum);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=968").then(function (res) {
      callback_select(res.data.table, setMunicipalPosts, e, setMunicipalPostsSum);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/explore/codebook?indicator_id=969").then(function (res) {
      callback_select(res.data.table, setSeniorManagement, e, setSeniorManagementSum);
    });
  };
  var callback_select = function callback_select(table, callback, select_values, sum_callback) {
    console.log(table, "table value");
    var cit = lodash__WEBPACK_IMPORTED_MODULE_6___default().map(select_values, 'value');
    var data = [];
    var current_year = 2014;
    var sum = 0;
    while (table.filter(function (value) {
      return value[1] === current_year.toString();
    }).length > 0) {
      var current_data = table.filter(function (value) {
        return value[1] === current_year.toString();
      });
      var values = [];
      var chart_labels = [];
      for (var i = 0; i < current_data.length; i++) {
        var label = labels(current_data[i][0]);
        if (cit.includes(label)) {
          current_data[i][0] = label;
          values.push(current_data[i][2]);
          sum += current_data[i][2] ? current_data[i][2] : 0;
        }
      }
      data.push({
        year: current_year,
        data: current_data,
        labels: chart_labels,
        values: values,
        color: colorsByYear(current_year)
      });
      //setCities(chart_labels)
      current_year = current_year + 1;
    }
    callback(data);
    sum_callback(sum);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    codebook_senior_management_api(senior_management_callback);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sorc_dashboards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer--top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Subnav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "State of Cities Reports",
    dropdownName: "Municipal Human Resources",
    dropDownItem: subNavContent,
    buttonText: "Download as PNG"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Human_Resources_Stat_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    last_municipal_posts: last_municipal_posts,
    last_total_posts: last_total_posts,
    last_senior_management_posts: last_senior_management_posts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Charts_Human_Resources__WEBPACK_IMPORTED_MODULE_5__["default"], {
    select_values: select_values,
    total_posts: total_posts,
    municipal_posts: municipal_posts,
    cities: cities,
    onChange: onChange,
    senior_management: senior_management
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socr_Human_Resources);

/***/ }),

/***/ "./js/components/HumanResources/Table.jsx":
/*!************************************************!*\
  !*** ./js/components/HumanResources/Table.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _data_HumanResourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/HumanResourceData */ "./js/data/HumanResourceData.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var Table = function Table() {
  // Change the selector if needed
  var $table = jquery__WEBPACK_IMPORTED_MODULE_2___default()('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

  // Adjust the width of thead cells when window resizes
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
    // Get the tbody columns width array
    colWidth = $bodyCells.map(function () {
      return jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).width();
    }).get();

    // Set the width of thead columns
    $table.find('thead tr').children().each(function (i, v) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(v).width(colWidth[i]);
    });
  }).resize(); // Trigger resize handler
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "post_breakdown-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Municipal Post Breakdown: Indicators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "table-width"
  }, "Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: ""
  }, "Name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
    className: "table-scoll"
  }, _data_HumanResourceData__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "table-width"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "code"
    }, item.codebook_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Total number of municipal posts", item.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: item.link,
      target: "_blank"
    }, "View Indicator in the  Data Explorer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ""
    })));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./js/components/PieChart.jsx":
/*!************************************!*\
  !*** ./js/components/PieChart.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Charts = function Charts(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      legend: {
        position: 'right',
        labels: {
          fontColor: "#4A4A4A",
          fontSize: 8,
          fontFamily: "Montserrat"
        }
      },
      title: {
        display: false,
        text: 'Title',
        fontFamily: "Montserrat"
      },
      responsive: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container doughnut chart " + props.className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: props["class"]
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Pie, {
    options: options,
    data: props.data,
    redraw: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "source"
  }, props.source))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charts);

/***/ }),

/***/ "./js/data/HumanResourceData.js":
/*!**************************************!*\
  !*** ./js/data/HumanResourceData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var postBreakdown = [{
  "department": "",
  "codebook_id": "GG.SOCR.28.0",
  "link": "toolkit#/codebook-explorer/970"
}, {
  "department": ": Community & Social Services",
  "codebook_id": "GG.SOCR.28.1",
  "link": "toolkit#/codebook-explorer/971"
}, {
  "department": ": Financial & Administration",
  "codebook_id": "GG.SOCR.28.2",
  "link": "toolkit#/codebook-explorer/972"
}, {
  "department": ": Electricity",
  "codebook_id": "GG.SOCR.28.3",
  "link": "toolkit#/codebook-explorer/973"
}, {
  "department": ": Environmental Protection",
  "codebook_id": "GG.SOCR.28.4",
  "link": "toolkit#/codebook-explorer/974"
}, {
  "department": ": Health",
  "codebook_id": "GG.SOCR.28.5",
  "link": "toolkit#/codebook-explorer/975"
}, {
  "department": ": Public Safety",
  "codebook_id": "GG.SOCR.28.6",
  "link": "toolkit#/codebook-explorer/976"
}, {
  "department": ": Road Transport",
  "codebook_id": "GG.SOCR.28.7",
  "link": "toolkit#/codebook-explorer/977"
}, {
  "department": ": Sport & Recreation",
  "codebook_id": "GG.SOCR.28.8",
  "link": "toolkit#/codebook-explorer/978"
}, {
  "department": ": Waste Management",
  "codebook_id": "GG.SOCR.28.9",
  "link": "toolkit#/codebook-explorer/979"
}, {
  "department": ": Waste Water Management",
  "codebook_id": "GG.SOCR.28.10",
  "link": "toolkit#/codebook-explorer/980"
}, {
  "department": ": Water",
  "codebook_id": "GG.SOCR.28.11",
  "link": "toolkit#/codebook-explorer/981"
}, {
  "department": ": Other",
  "codebook_id": "GG.SOCR.28.12",
  "link": "toolkit#/codebook-explorer/982"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postBreakdown);

/***/ })

}]);
//# sourceMappingURL=js_components_HumanResources_Socr_Human_Resources_jsx.js.map