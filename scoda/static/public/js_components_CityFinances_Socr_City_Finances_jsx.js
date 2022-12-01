"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_CityFinances_Socr_City_Finances_jsx"],{

/***/ "./js/components/CityFinances/Charts.City.Finances.jsx":
/*!*************************************************************!*\
  !*** ./js/components/CityFinances/Charts.City.Finances.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./js/components/Button.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _Barchart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Barchart */ "./js/components/Barchart.jsx");
/* harmony import */ var _data_HumanResourceData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/HumanResourceData */ "./js/data/HumanResourceData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
// let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]

var wasteful_expenditure = [];
var wasteful_expenditure_data = [];
var wasteful_expenditure_clean = [];
var final_wasteful_expenditure = [];
var WastefulExpenditureCollection = [];
var irregular_expenditure = [];
var irregular_expenditure_data = [];
var irregular_expenditure_clean = [];
var final_irregular_expenditure = [];
var IrregularExpenditureCollection = [];
var fruitless_expenditure = [];
var fruitless_expenditure_data = [];
var fruitless_expenditure_clean = [];
var final_fruitless_expenditure = [];
var FruitlessExpenditureCollection = [];
var unauthorised_expenditure = [];
var unauthorised_expenditure_data = [];
var unauthorised_expenditure_clean = [];
var final_unauthorised_expenditure = [];
var UnauthorisedExpenditureCollection = [];

//Testing data

var unauthorised_irre_expend = [[0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3],
//2014
[1.3, 1.6, 1.4, 1.1, 1.7, 1.4, 3, 1.4],
//2015
[1, 1, 2, 3, 4, 3, 4, 1],
//2016
[7, 5, 3, 5, 8, 8, 5, 4] //2017
];

var irre_expend = [[2, 0, 0, 8, 2, 1, 1, 0],
//2014
[2, 2, 3, 3, 4, 2, 2, 0],
//2015
[2, 1, 9, 4, 4, 2, 2, 4],
//2016
[1, 0, 14, 6, 2, 11, 0, 2] //2017
];

var fruitless_w_expend = [[0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3],
//2014
[0.3, 0.6, 0.4, 0.1, 1.1, 0.4, 0.3, 0.4],
//2015
[1, 1, 0.1, 0.3, 1.4, 0.3, 1.4, 0],
//2016
[0, 0.5, 0.5, 1.0, 0.0, 0.0, 0.5, 0.4] //2017
];

var unauthorised_expend = [[0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3],
//2014
[1.3, 1.6, 1.4, 1.1, 1.7, 1.4, 0.3, 1.4],
//2015
[1, 1, 2, 0.3, 1.4, 0.3, 1.4, 1],
//2016
[2, 0.5, 1.5, 1.7, 0.6, 0.8, 0.5, 1.4] //2017
];

var data_waste_exp = {
  labels: sortedData,
  datasets: []
};
var irregular_expend = {
  labels: sortedData,
  datasets: []
};
var data_fruit_expend = {
  labels: sortedData,
  datasets: []
};
var data_unauth_expend = {
  labels: sortedData,
  datasets: []
};
//chart declarations
var chartRef1, chartRef2, chartRef3, chartRef4;

//City and year data
var sortedData = ["BUF", "CCT", "EKH", "ETK", "JHB", "MAN", "NMB", "TSH"];

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

var myData = [];

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

var style = {
  control: function control(base, state) {
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
var CitizenEngagmentes = function CitizenEngagmentes() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  // let [final_wasteful_expenditure, setFinal_wasteful_expenditure] = useState([])
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(200000),
    _useState2 = _slicedToArray(_useState, 2),
    stepSize = _useState2[0],
    setStepSize = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    waste_exp = _useState4[0],
    setWaste_exp = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    fruit_ex = _useState6[0],
    setFruit_ex = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    irreg_expend = _useState8[0],
    setIrre_expend = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    unauth_exp = _useState10[0],
    setUnauth_exp = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    isMulti = _useState12[0],
    setIsMulti = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loader = _useState14[0],
    setLoader = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Year', '2014', '2015', '2016', '2017']),
    _useState16 = _slicedToArray(_useState15, 2),
    chartYears = _useState16[0],
    setChartYears = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['2014', '2015', '2016', '2017']),
    _useState18 = _slicedToArray(_useState17, 2),
    noYears = _useState18[0],
    setNoYears = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['2000', '2006', '2011', '2016']),
    _useState20 = _slicedToArray(_useState19, 2),
    noYears1 = _useState20[0],
    setNoYears1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['a']),
    _useState22 = _slicedToArray(_useState21, 2),
    pie = _useState22[0],
    setPie = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_HumanResourceData__WEBPACK_IMPORTED_MODULE_4__["default"]),
    _useState24 = _slicedToArray(_useState23, 2),
    data = _useState24[0],
    setData = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      value: "BUF",
      label: "BUF"
    }, {
      value: "CCT",
      label: "CCT"
    }, {
      value: "JHB",
      label: "JHB"
    }, {
      value: "EKH",
      label: "EKH"
    }, {
      value: "ETK",
      label: "ETK"
    }, {
      value: "MAN",
      label: "MAN"
    }, {
      value: "NMB",
      label: "NMB"
    }, {
      value: "TSH",
      label: "TSH"
    }]),
    _useState26 = _slicedToArray(_useState25, 2),
    multiValue = _useState26[0],
    setMultiValue = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      value: "BUF",
      label: "BUF"
    }, {
      value: "CCT",
      label: "CCT"
    }, {
      value: "JHB",
      label: "JHB"
    }, {
      value: "EKH",
      label: "EKH"
    }, {
      value: "ETK",
      label: "ETK"
    }, {
      value: "MAN",
      label: "MAN"
    }, {
      value: "NMB",
      label: "NMB"
    }, {
      value: "TSH",
      label: "TSH"
    }]),
    _useState28 = _slicedToArray(_useState27, 2),
    filterOptions = _useState28[0],
    setfilterOptions = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!mounted.current) {
      //equivilent to componentdidmount
      func_wasteful_expenditure();
      func_irregular_expenditure();
      func_fruitless_expenditure();
      func_unauthorised_expenditure();
      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();
      mounted.current = true;
    } else {
      //equivilent to componentdidupdate
      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();
    }
  }, []);
  var func_wasteful_expenditure = function func_wasteful_expenditure() {
    var toNum = new Object();
    var years = 2020;
    var startingYear = 2015;
    var count = 0;
    for (var i = 0; i < 5; i++) {
      for (var k = 0; k < 1; k++) {
        if (i === 0) {} else {
          toNum[2014 + i] = i;
        }
      }
    }
    for (var year = startingYear; year < years; year++) {
      WastefulExpenditureCollection.push(unauthorised_irre_expend[toNum[year] - 1]);
      wasteful_expenditure.push(WastefulExpenditureCollection[count]);
      wasteful_expenditure_clean.push(wasteful_expenditure);
      count++;
    }
    final_wasteful_expenditure = wasteful_expenditure_clean[0];
  };
  var func_irregular_expenditure = function func_irregular_expenditure() {
    var toNum = new Object();
    var years = 2020;
    var startingYear = 2015;
    var count = 0;
    for (var i = 0; i < 5; i++) {
      for (var k = 0; k < 1; k++) {
        if (i === 0) {} else {
          toNum[2014 + i] = i;
        }
      }
    }
    for (var year = startingYear; year < years; year++) {
      IrregularExpenditureCollection.push(irre_expend[toNum[year] - 1]);
      irregular_expenditure.push(IrregularExpenditureCollection[count]);
      irregular_expenditure_clean.push(irregular_expenditure);
      count++;
    }
    final_irregular_expenditure = irregular_expenditure_clean[0];
  };
  var func_fruitless_expenditure = function func_fruitless_expenditure() {
    var toNum = new Object();
    var years = 2020;
    var startingYear = 2015;
    var count = 0;
    for (var i = 0; i < 5; i++) {
      for (var k = 0; k < 1; k++) {
        if (i === 0) {} else {
          toNum[2014 + i] = i;
        }
      }
    }
    for (var year = startingYear; year < years; year++) {
      FruitlessExpenditureCollection.push(fruitless_w_expend[toNum[year] - 1]);
      fruitless_expenditure.push(FruitlessExpenditureCollection[count]);
      fruitless_expenditure_clean.push(fruitless_expenditure);
      count++;
    }
    final_fruitless_expenditure = fruitless_expenditure_clean[0];
  };
  var func_unauthorised_expenditure = function func_unauthorised_expenditure() {
    var toNum = new Object();
    var years = 2020;
    var startingYear = 2015;
    var count = 0;
    for (var i = 0; i < 5; i++) {
      for (var k = 0; k < 1; k++) {
        if (i === 0) {} else {
          toNum[2014 + i] = i;
        }
      }
    }
    for (var year = startingYear; year < years; year++) {
      UnauthorisedExpenditureCollection.push(unauthorised_expend[toNum[year] - 1]);
      unauthorised_expenditure.push(UnauthorisedExpenditureCollection[count]);
      unauthorised_expenditure_clean.push(unauthorised_expenditure);
      count++;
    }
    final_unauthorised_expenditure = unauthorised_expenditure_clean[0];
  };
  var handleMultiChange = function handleMultiChange(option) {
    setMultiValue(option);
    wasteful_expenditure_data = [];
    irregular_expenditure_data = [];
    fruitless_expenditure_data = [];
    unauthorised_expenditure_data = [];
    var cYears = chartYears;
    for (var item = 0; item < cYears.length - 1; item++) {
      wasteful_expenditure_data.push([]);
      irregular_expenditure_data.push([]);
      fruitless_expenditure_data.push([]);
      unauthorised_expenditure_data.push([]);
    }

    //Empty array so new data can be assigned
    myData = [];

    //new 
    final_wasteful_expenditure = [];
    final_irregular_expenditure = [];
    final_fruitless_expenditure = [];
    final_unauthorised_expenditure = [];
    option.map(function (item, i) {
      myData.push(item.value);
      sortedData = myData.sort();
      if (sortedData.includes('BUF')) {
        //wasteful_expenditure_data[year][index]  WastefulExpenditureCollection[year][index]
        for (var index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][0] = WastefulExpenditureCollection[index][0];
          irregular_expenditure_data[index][0] = IrregularExpenditureCollection[index][0];
          fruitless_expenditure_data[index][0] = FruitlessExpenditureCollection[index][0];
          unauthorised_expenditure_data[index][0] = UnauthorisedExpenditureCollection[index][0];
        }
      }
      if (sortedData.includes('CCT')) {
        for (var _index = 0; _index < cYears.length - 1; _index++) {
          wasteful_expenditure_data[_index][1] = WastefulExpenditureCollection[_index][1];
          irregular_expenditure_data[_index][1] = IrregularExpenditureCollection[_index][1];
          fruitless_expenditure_data[_index][1] = FruitlessExpenditureCollection[_index][1];
          unauthorised_expenditure_data[_index][1] = UnauthorisedExpenditureCollection[_index][1];
        }
      }
      if (sortedData.includes('EKH')) {
        for (var _index2 = 0; _index2 < cYears.length - 1; _index2++) {
          wasteful_expenditure_data[_index2][2] = WastefulExpenditureCollection[_index2][2];
          irregular_expenditure_data[_index2][2] = IrregularExpenditureCollection[_index2][2];
          fruitless_expenditure_data[_index2][2] = FruitlessExpenditureCollection[_index2][2];
          unauthorised_expenditure_data[_index2][2] = UnauthorisedExpenditureCollection[_index2][2];
        }
      }
      if (sortedData.includes('ETK')) {
        for (var _index3 = 0; _index3 < cYears.length - 1; _index3++) {
          wasteful_expenditure_data[_index3][3] = WastefulExpenditureCollection[_index3][3];
          irregular_expenditure_data[_index3][3] = IrregularExpenditureCollection[_index3][3];
          fruitless_expenditure_data[_index3][3] = FruitlessExpenditureCollection[_index3][3];
          unauthorised_expenditure_data[_index3][3] = UnauthorisedExpenditureCollection[_index3][3];
        }
      }
      if (sortedData.includes('JHB')) {
        for (var _index4 = 0; _index4 < cYears.length - 1; _index4++) {
          wasteful_expenditure_data[_index4][4] = WastefulExpenditureCollection[_index4][4];
          irregular_expenditure_data[_index4][4] = IrregularExpenditureCollection[_index4][4];
          fruitless_expenditure_data[_index4][4] = FruitlessExpenditureCollection[_index4][4];
          unauthorised_expenditure_data[_index4][4] = UnauthorisedExpenditureCollection[_index4][4];
        }
      }
      if (sortedData.includes('MAN')) {
        for (var _index5 = 0; _index5 < cYears.length - 1; _index5++) {
          wasteful_expenditure_data[_index5][5] = WastefulExpenditureCollection[_index5][5];
          irregular_expenditure_data[_index5][5] = IrregularExpenditureCollection[_index5][5];
          fruitless_expenditure_data[_index5][5] = FruitlessExpenditureCollection[_index5][5];
          unauthorised_expenditure_data[_index5][5] = UnauthorisedExpenditureCollection[_index5][5];
        }
      }
      if (sortedData.includes('NMB')) {
        for (var _index6 = 0; _index6 < cYears.length - 1; _index6++) {
          wasteful_expenditure_data[_index6][6] = WastefulExpenditureCollection[_index6][6];
          irregular_expenditure_data[_index6][6] = IrregularExpenditureCollection[_index6][6];
          fruitless_expenditure_data[_index6][6] = FruitlessExpenditureCollection[_index6][6];
          unauthorised_expenditure_data[_index6][6] = UnauthorisedExpenditureCollection[_index6][6];
        }
      }
      if (sortedData.includes('TSH')) {
        for (var _index7 = 0; _index7 < cYears.length - 1; _index7++) {
          wasteful_expenditure_data[_index7][7] = WastefulExpenditureCollection[_index7][7];
          irregular_expenditure_data[_index7][7] = IrregularExpenditureCollection[_index7][7];
          fruitless_expenditure_data[_index7][7] = FruitlessExpenditureCollection[_index7][7];
          unauthorised_expenditure_data[_index7][7] = UnauthorisedExpenditureCollection[_index7][7];
        }
      }
      for (var _index8 = 0; _index8 < cYears.length - 1; _index8++) {
        final_wasteful_expenditure[_index8] = wasteful_expenditure_data[_index8].filter(Boolean);
        final_irregular_expenditure[_index8] = irregular_expenditure_data[_index8].filter(Boolean);
        final_fruitless_expenditure[_index8] = fruitless_expenditure_data[_index8].filter(Boolean);
        final_unauthorised_expenditure[_index8] = unauthorised_expenditure_data[_index8].filter(Boolean);
      }
      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();
    });
  };
  var renderChart_wasteful_expenditure = function renderChart_wasteful_expenditure() {
    var color = '#d6d6d6';
    data_waste_exp = {
      labels: sortedData,
      datasets: []
    };
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0';
          break;
        case 1:
          color = '#D0D1E6';
          break;
        case 2:
          color = '#74A9CF';
          break;
        case 3:
          color = '#0570B0';
          break;
        default:
          color = '#d6d6d6';
      }
      data_waste_exp.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_wasteful_expenditure[i],
        backgroundColor: color,
        borderColor: color
      });
    });
    setWaste_exp(data_waste_exp);
  };
  var renderChart_irregular_expenditure = function renderChart_irregular_expenditure() {
    var color = '#d6d6d6';
    irregular_expend = {
      labels: sortedData,
      datasets: []
    };
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0';
          break;
        case 1:
          color = '#D0D1E6';
          break;
        case 2:
          color = '#74A9CF';
          break;
        case 3:
          color = '#0570B0';
          break;
        default:
          color = '#d6d6d6';
      }
      irregular_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_irregular_expenditure[i],
        backgroundColor: color,
        borderColor: color
      });
    });
    setIrre_expend(irregular_expend);
  };
  var renderChart_fruitless_expenditure = function renderChart_fruitless_expenditure() {
    var color = '#d6d6d6';
    data_fruit_expend = {
      labels: sortedData,
      datasets: []
    };
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0';
          break;
        case 1:
          color = '#D0D1E6';
          break;
        case 2:
          color = '#74A9CF';
          break;
        case 3:
          color = '#0570B0';
          break;
        default:
          color = '#d6d6d6';
      }
      data_fruit_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_fruitless_expenditure[i],
        backgroundColor: color,
        borderColor: color
      });
    });
    setFruit_ex(data_fruit_expend);
  };
  var renderChart_unauthorised_expenditure = function renderChart_unauthorised_expenditure() {
    var color = '#d6d6d6';
    data_unauth_expend = {
      labels: sortedData,
      datasets: []
    };
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0';
          break;
        case 1:
          color = '#D0D1E6';
          break;
        case 2:
          color = '#74A9CF';
          break;
        case 3:
          color = '#0570B0';
          break;
        default:
          color = '#d6d6d6';
      }
      data_unauth_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_unauthorised_expenditure[i],
        backgroundColor: color,
        borderColor: color
      });
    });
    setUnauth_exp(data_unauth_expend);
  };

  //Pie chart

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "loader",
    isOpen: loader,
    className: "modal-dialog-centered loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-0 ml-3 pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "grow",
    color: "secondary",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "grow",
    color: "success",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "grow",
    color: "danger",
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "multiple",
    name: "filters",
    placeholder: "Filter City",
    value: multiValue,
    options: filterOptions,
    onChange: handleMultiChange,
    isMulti: isMulti,
    styles: style
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts_dashboards--barcharts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4 left-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Unauthorised, irregular, fruitless & wastful expenditure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "#",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: waste_exp,
    stepSize: 2,
    hundred: false,
    divide: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "post_breakdown-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Context Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Vitae tempus quam pellentesque nec."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Link to Budget Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.budgetreportspending1.gov.za",
    target: "_blank"
  }, "https://www.budgetreportspending1.gov.za"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.budgetreportspending2.gov.za",
    target: "_blank"
  }, "https://www.budgetreportspending2.gov.za"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.budgetreportspending3.gov.za",
    target: "_blank"
  }, "https://www.budgetreportspending3.gov.za"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Irregular Expenditure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "#",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: irreg_expend,
    stepSize: 2,
    hundred: false,
    divide: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "post_breakdown-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Definitions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Irregular Expenditure: "), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. Voluptatum libero facilis corporis soluta ex. Earum officia eaque, autem quia et expedita."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "fruitless & Wasteful Expenditure: "), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. Voluptatum libero facilis corporis soluta ex. Earum officia eaque, autem quia et expedita."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Unauthorised Expenditure: "), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. Voluptatum libero facilis corporis soluta ex. Earum officia eaque, autem quia et expedita."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Fruitless & Wasteful Expenditure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "#",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: fruit_ex,
    stepSize: 0.2,
    hundred: false,
    divide: 1,
    finance: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "charts_dashboards--households"
  }, "Unauthorised Expenditure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "charts_dashboards--button",
    text: "Raw Data",
    href: "#",
    target: "_blank"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Barchart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: unauth_exp,
    stepSize: 0.5,
    hundred: false,
    divide: 1,
    finance: true
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitizenEngagmentes);

/***/ }),

/***/ "./js/components/CityFinances/City.Finances.Stat.Panel.jsx":
/*!*****************************************************************!*\
  !*** ./js/components/CityFinances/City.Finances.Stat.Panel.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Select */ "./js/components/Select.jsx");
/* harmony import */ var _data_panelData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/panelData.js */ "./js/data/panelData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var HumanResourcesStatPanel = function HumanResourcesStatPanel() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Buffalo City'),
    _useState2 = _slicedToArray(_useState, 2),
    place = _useState2[0],
    setPlace = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(39300000),
    _useState4 = _slicedToArray(_useState3, 2),
    total_municipal_posts = _useState4[0],
    setTotal_municipal_posts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4300000),
    _useState6 = _slicedToArray(_useState5, 2),
    irregular_expenditure = _useState6[0],
    setirregular_expenditure = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3800000),
    _useState8 = _slicedToArray(_useState7, 2),
    senior_management_vacancies = _useState8[0],
    setSenior_management_vacancies = _useState8[1];
  //set data
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_panelData_js__WEBPACK_IMPORTED_MODULE_2__["default"][0]),
    _useState10 = _slicedToArray(_useState9, 2),
    data = _useState10[0],
    setData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_data_panelData_js__WEBPACK_IMPORTED_MODULE_2__["default"][3].expenditure),
    _useState12 = _slicedToArray(_useState11, 2),
    expenditure = _useState12[0],
    setExpenditure = _useState12[1];
  var municipality_focus = [{
    percentage: total_municipal_posts,
    type: "Irregular<br/>Expenditure"
  }, {
    percentage: irregular_expenditure,
    type: "Fruitless & Wasteful<br/>Expenditure"
  }, {
    percentage: senior_management_vacancies,
    type: "Unauthorised<br/>Expenditure"
  }];
  var places = function places(e) {
    setPlace(e.target.value);
    if (e.target.value === 'Buffalo City') {
      setTotal_municipal_posts(39300000);
      setirregular_expenditure(43000000);
      setSenior_management_vacancies(3800000);
    }
    if (e.target.value === 'City of Cape Town') {
      setTotal_municipal_posts(33455412);
      setirregular_expenditure(1323421);
      setSenior_management_vacancies(1234234);
    }
    if (e.target.value === 'City of Joburg') {
      setTotal_municipal_posts(12345876);
      setirregular_expenditure(45783111);
      setSenior_management_vacancies(5432567);
    }
    if (e.target.value === 'Ekurhuleni') {
      setTotal_municipal_posts(1234564);
      setirregular_expenditure(1432234);
      setSenior_management_vacancies(2345678);
    }
    if (e.target.value === 'eThekwini') {
      setTotal_municipal_posts(123453);
      setirregular_expenditure(1234565);
      setSenior_management_vacancies(6554321);
    }
    if (e.target.value === 'Mangaung') {
      setTotal_municipal_posts(1234563);
      setirregular_expenditure(34554321);
      setSenior_management_vacancies(3345534);
    }
    if (e.target.value === 'Nelson Mandela Bay') {
      setTotal_municipal_posts(32343454);
      setirregular_expenditure(4234515);
      setSenior_management_vacancies(5612222);
    }
    if (e.target.value === 'Tshwane') {
      setTotal_municipal_posts(2123323);
      setirregular_expenditure(4133212);
      setSenior_management_vacancies(12123211);
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
  }, "Averages 2019 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(Expenditure)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, expenditure.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-md-4 p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "R", (Math.abs(Number(item.percentage)) / 1.0e+6).toFixed(2) + "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
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
    className: "col-md-3"
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
      className: "col-md-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: item.percentage > expenditure[i].percentage ? 'green' : item.percentage < expenditure[i].percentage ? 'red' : 'none'
    }, "R", (Math.abs(Number(item.percentage)) / 1.0e+6).toFixed(2) + "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.type
      }
    }));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanResourcesStatPanel);

/***/ }),

/***/ "./js/components/CityFinances/Socr.City.Finances.jsx":
/*!***********************************************************!*\
  !*** ./js/components/CityFinances/Socr.City.Finances.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Sidebar_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sidebar_left */ "./js/components/Sidebar_left.jsx");
/* harmony import */ var _Subnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subnav */ "./js/components/Subnav.jsx");
/* harmony import */ var _City_Finances_Stat_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./City.Finances.Stat.Panel */ "./js/components/CityFinances/City.Finances.Stat.Panel.jsx");
/* harmony import */ var _Charts_City_Finances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Charts.City.Finances */ "./js/components/CityFinances/Charts.City.Finances.jsx");





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
    active: false
  }]
};
var Socr_City_Finances = function Socr_City_Finances() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sorc_dashboards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spacer--top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Subnav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "State of Cities Reports",
    dropdownName: "City Finances",
    dropDownItem: subNavContent,
    buttonText: "Download as PNG"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_City_Finances_Stat_Panel__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Charts_City_Finances__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socr_City_Finances);

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
//# sourceMappingURL=js_components_CityFinances_Socr_City_Finances_jsx.js.map