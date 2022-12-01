"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_context_jsx-_72b81"],{

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

/***/ })

}]);
//# sourceMappingURL=js_context_jsx-_72b81.js.map