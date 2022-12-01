"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_CitizenEngagement_Socr_Citizens_Engagement_jsx"],{

/***/ "./js/components/CitizenEngagement/Charts.Citizen.Engagements.jsx":
/*!************************************************************************!*\
  !*** ./js/components/CitizenEngagement/Charts.Citizen.Engagements.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./js/components/Button.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _Barchart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Barchart */ "./js/components/Barchart.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_components_Subnav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../scss/components/Subnav.scss */ "./scss/components/Subnav.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var CitizenEngagment = function CitizenEngagment() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cities = _useState2[0],
    setCities = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    turnout = _useState4[0],
    setTurnout = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    local_turnout = _useState6[0],
    setLocalTurnout = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    registered_voters = _useState8[0],
    setRegistered_voters = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    local_registered_voters = _useState10[0],
    setLocalRegistered_voters = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    select_values = _useState12[0],
    setSelectValues = _useState12[1];
  var colorsByYearGreen = function colorsByYearGreen(count) {
    switch (count) {
      case 0:
        return '#B7E0DE';
      case 1:
        return '#6ABFBB';
      case 2:
        return '#2D9B96';
      case 3:
        return '#0F7671';
      default:
        return '#0F7671';
    }
  };
  var colorsByYearOrange = function colorsByYearOrange(count) {
    switch (count) {
      case 0:
        return '#FFD0B7';
      case 1:
        return '#FFAD81';
      case 2:
        return '#EE702D';
      case 3:
        return '#D44F08';
      default:
        return '#D44F08';
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
  var emptyChartsData = function emptyChartsData() {
    setTurnout([]);
    setRegistered_voters([]);
    setLocalRegistered_voters([]);
    setLocalTurnout([]);
  };
  var onChange = function onChange(e) {
    setSelectValues(e);
    emptyChartsData();
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/explore/codebook?indicator_id=989").then(function (res) {
      callback_select(res.data.table, setTurnout, e, colorsByYearGreen);
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/explore/codebook?indicator_id=989").then(function (res) {
      callback_select(res.data.table, setRegistered_voters, e, colorsByYearOrange);
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/explore/codebook?indicator_id=987").then(function (res) {
      callback_select(res.data.table, setLocalTurnout, e, colorsByYearGreen);
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/explore/codebook?indicator_id=983").then(function (res) {
      callback_select(res.data.table, setLocalRegistered_voters, e, colorsByYearOrange);
    });
  };
  var callback_select = function callback_select(table, callback, select_values, colors) {
    var cit = lodash__WEBPACK_IMPORTED_MODULE_5___default().map(select_values, 'value');
    var data = [];
    var current_year = 2000;
    var sum = 0;
    var count = 0;
    while (current_year <= new Date().getFullYear()) {
      if (table.filter(function (value) {
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
          color: colors(count)
        });
        count = count + 1;
      }
      //setCities(chart_labels)
      current_year = current_year + 1;
    }
    callback(data);
  };
  var api = function api(url, callback) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then(function (res) {
      callback(res.data.table);
    });
  };
  var voter_turnout_callback = function voter_turnout_callback(table) {
    var data = [];
    var current_year = 2000;
    var sum = 0;
    var count = 0;
    while (current_year <= new Date().getFullYear()) {
      if (table.filter(function (value) {
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
          //data :  current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYearGreen(count)
        });
        setCities(chart_labels);
        setTurnout(data);
        setSelectValues(chart_labels);
        count = count + 1;
      }
      current_year = current_year + 1;
    }
    setTurnout(data);
  };
  var registered_voters_callback = function registered_voters_callback(table) {
    var data = [];
    var current_year = 2000;
    var sum = 0;
    var count = 0;
    while (current_year <= new Date().getFullYear()) {
      if (table.filter(function (value) {
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
          //data :  current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYearOrange(count)
        });
        count = count + 1;
      }
      current_year = current_year + 1;
    }
    setRegistered_voters(data);
  };
  var local_voter_turnout_callback = function local_voter_turnout_callback(table) {
    var data = [];
    var current_year = 2000;
    var sum = 0;
    var count = 0;
    while (current_year <= new Date().getFullYear()) {
      if (table.filter(function (value) {
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
          //data :  current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYearGreen(count)
        });
        count = count + 1;
      }
      current_year = current_year + 1;
    }
    setLocalTurnout(data);
  };
  var local_registered_voters_callback = function local_registered_voters_callback(table) {
    var data = [];
    var current_year = 2000;
    var sum = 0;
    var count = 0;
    while (current_year <= new Date().getFullYear()) {
      if (table.filter(function (value) {
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
          //data :  current_data,
          labels: chart_labels,
          values: values,
          color: colorsByYearOrange(count)
        });
        count = count + 1;
      }
      current_year = current_year + 1;
    }
    setLocalRegistered_voters(data);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    api("/api/explore/codebook?indicator_id=989", voter_turnout_callback);
    api("/api/explore/codebook?indicator_id=985", registered_voters_callback);
    api("/api/explore/codebook?indicator_id=987", local_voter_turnout_callback);
    api("/api/explore/codebook?indicator_id=983", local_registered_voters_callback);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, turnout.length < 1 && local_turnout.length < 1 && registered_voters.length < 1 && local_registered_voters.length < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "loader",
    isOpen: turnout.length < 1 && local_turnout.length < 1 && registered_voters.length < 1 && local_registered_voters.length < 1,
    className: "modal-dialog-centered loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-0 ml-3 pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "grow",
    color: "secondary",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "grow",
    color: "success",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "grow",
    color: "danger",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "National Election: Voter Turnout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/989",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_5___default().map(select_values, 'label'),
      datasets: turnout.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 200000,
    hundred: true,
    divide: 1000,
    x_label: "Number of People"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "National Election: Registered Voters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/985",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_5___default().map(select_values, 'label'),
      datasets: registered_voters.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 500000,
    hundred: true,
    divide: 1000,
    x_label: "Number of People"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Local Election: Voter Turnout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/987",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_5___default().map(select_values, 'label'),
      datasets: local_turnout.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 500000,
    hundred: true,
    divide: 1000,
    x_label: "Number of People"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Local Election: Registered Voters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "/scoda/toolkit#/codebook-explorer/983",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: {
      labels: lodash__WEBPACK_IMPORTED_MODULE_5___default().map(select_values, 'label'),
      datasets: local_registered_voters.map(function (data) {
        return {
          backgroundColor: data.color,
          borderColor: data.color,
          data: data.values,
          label: data.year,
          stack: data.year
        };
      })
    },
    stepSize: 200000,
    hundred: true,
    divide: 1000,
    x_label: "Number of People"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitizenEngagment);

/***/ }),

/***/ "./js/components/CitizenEngagement/Citizen.Engagments.Stat.Panel.jsx":
/*!***************************************************************************!*\
  !*** ./js/components/CitizenEngagement/Citizen.Engagments.Stat.Panel.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Select */ "./js/components/Select.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_panelData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/panelData */ "./js/data/panelData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CitizenEngagmentStatPanel = function CitizenEngagmentStatPanel() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Buffalo City'),
    _useState2 = _slicedToArray(_useState, 2),
    place = _useState2[0],
    setPlace = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(40),
    _useState4 = _slicedToArray(_useState3, 2),
    wasteful_expenditure_national = _useState4[0],
    setwasteful_expenditure_national = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(64),
    _useState6 = _slicedToArray(_useState5, 2),
    registered_national = _useState6[0],
    setRegistered_national = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(51),
    _useState8 = _slicedToArray(_useState7, 2),
    irregular_expenditure = _useState8[0],
    setirregular_expenditure = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(62),
    _useState10 = _slicedToArray(_useState9, 2),
    registered_local = _useState10[0],
    setRegistered_local = _useState10[1];
  //set data
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_panelData__WEBPACK_IMPORTED_MODULE_3__["default"][0]),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    setData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_panelData__WEBPACK_IMPORTED_MODULE_3__["default"][1].voting_and_reg_2019_averages),
    _useState14 = _slicedToArray(_useState13, 2),
    voting_and_reg_2019_averages = _useState14[0],
    setVoting_and_reg_2019_averages = _useState14[1];
  var municipality_focus = [{
    percentage: wasteful_expenditure_national,
    type: "VOTER TURNOUT<br/>NATIONAL"
  }, {
    percentage: registered_national,
    type: "REGISTERED<br/>NATIONAL"
  }, {
    percentage: irregular_expenditure,
    type: "VOTER TURNOUT<br/>LOCAL"
  }, {
    percentage: registered_local,
    type: "REGISTERED<br/>LOCAL"
  }];
  var places = function places(e) {
    setPlace(e.target.value);
    if (e.target.value === 'Buffalo City') {
      setwasteful_expenditure_national(40);
      setRegistered_national(64);
      setirregular_expenditure(51);
      setRegistered_local(62);
    }
    if (e.target.value === 'City of Cape Town') {
      setwasteful_expenditure_national(12);
      setRegistered_national(32);
      setirregular_expenditure(56);
      setRegistered_local(43);
    }
    if (e.target.value === 'City of Joburg') {
      setwasteful_expenditure_national(34);
      setRegistered_national(89);
      setirregular_expenditure(56);
      setRegistered_local(43);
    }
    if (e.target.value === 'Ekurhuleni') {
      setwasteful_expenditure_national(45);
      setRegistered_national(34);
      setirregular_expenditure(75);
      setRegistered_local(56);
    }
    if (e.target.value === 'eThekwini') {
      setwasteful_expenditure_national(12);
      setRegistered_national(34);
      setirregular_expenditure(34);
      setRegistered_local(56);
    }
    if (e.target.value === 'Mangaung') {
      setwasteful_expenditure_national(90);
      setRegistered_national(54);
      setirregular_expenditure(34);
      setRegistered_local(67);
    }
    if (e.target.value === 'Nelson Mandela Bay') {
      setwasteful_expenditure_national(34);
      setRegistered_national(45);
      setirregular_expenditure(56);
      setRegistered_local(64);
    }
    if (e.target.value === 'Tshwane') {
      setwasteful_expenditure_national(23);
      setRegistered_national(42);
      setirregular_expenditure(12);
      setRegistered_local(76);
    }
  };
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
  }, "Averages 2019/2016 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(Voting and Registration)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, voting_and_reg_2019_averages.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3 p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, item.percentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.type
      }
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-8"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "catagory-name catagory-name--focusName"
  }, "Municipality Focus 2018: ", place)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3 "
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
  }, municipality_focus.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: item.percentage > voting_and_reg_2019_averages[i].percentage ? 'green' : item.percentage < voting_and_reg_2019_averages[i].percentage ? 'red' : 'none'
    }, item.percentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.type
      }
    }));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitizenEngagmentStatPanel);

/***/ }),

/***/ "./js/components/CitizenEngagement/Socr.Citizens.Engagement.jsx":
/*!**********************************************************************!*\
  !*** ./js/components/CitizenEngagement/Socr.Citizens.Engagement.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Sidebar_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sidebar_left */ "./js/components/Sidebar_left.jsx");
/* harmony import */ var _Subnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subnav */ "./js/components/Subnav.jsx");
/* harmony import */ var _Citizen_Engagments_Stat_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Citizen.Engagments.Stat.Panel */ "./js/components/CitizenEngagement/Citizen.Engagments.Stat.Panel.jsx");
/* harmony import */ var _Charts_Citizen_Engagements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Charts.Citizen.Engagements */ "./js/components/CitizenEngagement/Charts.Citizen.Engagements.jsx");





var Socr_Citizens_Engagement = function Socr_Citizens_Engagement() {
  var subNavContent = {
    dropdownMenu: [{
      name: "Service Delivery",
      href: "socr#/service_delivery",
      active: false
    }, {
      name: "Citizen Engagement",
      href: "socr#/citizen_engagement",
      active: true
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Subnav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "State of Cities Reports",
    dropdownName: "Citizen Engagement",
    dropDownItem: subNavContent,
    buttonText: "Download as PNG"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sidebar_left__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content",
    className: "sorc_dashboards sorc_dashboards--citizen_engagement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Charts_Citizen_Engagements__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socr_Citizens_Engagement);

/***/ })

}]);
//# sourceMappingURL=js_components_CitizenEngagement_Socr_Citizens_Engagement_jsx.js.map