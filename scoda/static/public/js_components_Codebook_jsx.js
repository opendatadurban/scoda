"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_Codebook_jsx"],{

/***/ "./js/components/Codebook.jsx":
/*!************************************!*\
  !*** ./js/components/Codebook.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Codebook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Codebook_Datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Codebook_Datatable */ "./js/components/Codebook_Datatable.jsx");
/* harmony import */ var _Codebook_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Codebook_Sidebar */ "./js/components/Codebook_Sidebar.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _Codebook_Filter_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Codebook_Filter_Search */ "./js/components/Codebook_Filter_Search.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Codebook = /*#__PURE__*/function (_Component) {
  _inherits(Codebook, _Component);
  var _super = _createSuper(Codebook);
  function Codebook(props) {
    var _this;
    _classCallCheck(this, Codebook);
    _this = _super.call(this, props);
    _this.state = {
      selected: null,
      loader: false,
      filterData: null
    };
    _this.setSelected = _this.setSelected.bind(_assertThisInitialized(_this));
    _this.filterData = _this.filterData.bind(_assertThisInitialized(_this));
    _this.scrollToAnchor = _this.scrollToAnchor.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Codebook, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showLoader();
      this.getFirstChildItem();
      this.scrollToAnchor('content-scoda', 'html,body', true);
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor(id, scrollElement, animate) {
      // Set the anchor
      var to = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#' + id);
      // Animate or jump scrollElement to anchor point
      if (animate) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(scrollElement).animate({
          scrollTop: to.offset().top
        }, 'fast');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(scrollElement).scrollTop(to.offset().top);
      }
      console.log('scroll function run');
    }
  }, {
    key: "setSelected",
    value: function setSelected(childItem) {
      this.setState({
        selected: childItem
      });
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.setState({
        loader: true
      });
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.setState({
        loader: false
      });
    }
  }, {
    key: "filterData",
    value: function filterData(filters) {
      this.setState({
        filterData: filters
      });
    }
  }, {
    key: "getFirstChildItem",
    value: function getFirstChildItem() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/codebook/1').then(function (res) {
        var firstItem = res.data.slice(1, 2);
        _this2.setState({
          selected: firstItem[0].children[0]
        });
        _this2.hideLoader();
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loader) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "loader",
          isOpen: this.state.loader,
          className: "modal-dialog-centered loader"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 ml-3 pt-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          type: "grow",
          color: "secondary",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          type: "grow",
          color: "success",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          type: "grow",
          color: "danger",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          type: "grow",
          color: "warning",
          size: "sm"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 pt-4 pl-4 float-left"
        }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fluid: true,
        className: "codebook-components",
        style: {
          leftPadding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Codebook_Filter_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        filter: this.filterData
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        xs: "12",
        sm: "12",
        md: "12",
        lg: "8",
        className: "no-padding"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Codebook_Datatable__WEBPACK_IMPORTED_MODULE_1__["default"], {
        codes: this.state.codes,
        setSelectedChild: this.setSelected,
        filteredData: this.state.filterData
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        xs: "12",
        sm: "12",
        md: "12",
        lg: "4",
        className: "no-padding"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Codebook_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        codes: this.state.codes,
        data: this.state.selected
      }))));
    }
  }]);
  return Codebook;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Codebook_Datatable.jsx":
/*!**********************************************!*\
  !*** ./js/components/Codebook_Datatable.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodebookDatatable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CodebookDatatable = /*#__PURE__*/function (_Component) {
  _inherits(CodebookDatatable, _Component);
  var _super = _createSuper(CodebookDatatable);
  function CodebookDatatable(props) {
    var _this;
    _classCallCheck(this, CodebookDatatable);
    _this = _super.call(this, props);
    _this.state = {
      data: [],
      filters: _this.props.filteredData,
      selected: null,
      currentPage: 1,
      isLoading: false,
      isSelection: true
    };
    _this.selectChild = _this.selectChild.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(CodebookDatatable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/codebook/1').then(function (res) {
        var copyData = res.data.slice(1, res.data.length);
        if (copyData.length > 0) {
          _this2.setState({
            isSelection: true
          });
        } else {
          _this2.setState({
            isSelection: false
          });
        }
        _this2.setOpen(copyData);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (prevProps.filteredData !== this.props.filteredData) {
        axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/codebook/1', this.props.filteredData).then(function (data) {
          var copyData = data.data.slice(1, data.data.length);
          if (copyData.length > 0) {
            _this3.setState({
              isSelection: true
            });
          } else {
            _this3.setState({
              isSelection: false
            });
          }
          _this3.setOpen(copyData);
        });
      }
    }
  }, {
    key: "setOpen",
    value: function setOpen(data) {
      // Append open property to each parent item
      var selected = null;
      var _iterator = _createForOfIteratorHelper(data.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            index = _step$value[0],
            item = _step$value[1];
          if (!selected) {
            item.open = item.children.length > 0;
            selected = item.children[0];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.setState({
        data: data,
        selected: selected
      });
    }
  }, {
    key: "selectChild",
    value: function selectChild(item) {
      this.props.setSelectedChild(item);
      this.setState({
        selected: item
      });
    }
  }, {
    key: "toggleAccordion",
    value: function toggleAccordion(index) {
      // copy data from state
      var copyData = this.state.data.slice();

      // set the open property to true/false one the selected item
      copyData[index].open = !copyData[index].open;
      this.setState({
        data: copyData
      });
    }
  }, {
    key: "selectChildAndToggleAccordion",
    value: function selectChildAndToggleAccordion(item, index) {
      this.selectChild(item);
      this.toggleAccordion(index);
    }
  }, {
    key: "getC88Code",
    value: function getC88Code(code) {
      if (!code) {
        return;
      }
      return code.split(".")[0];
    }
  }, {
    key: "getSORCCode",
    value: function getSORCCode(code) {
      if (!code) {
        return;
      }
      var strArr = code.split(" ");
      var sorc = "";
      strArr.map(function (str) {
        sorc += str.charAt(0);
      });
      return sorc;
    }
  }, {
    key: "getSDG",
    value: function getSDG(code) {
      if (!code) {
        return;
      }
      return code.match(/(?:)([0-9]+)/)[0];
    }

    // fetchData() {
    //     let nextPage = this.state.currentPage + 1;

    //     axios.get(`/api/codebook/${nextPage}`).then(res => {
    //         const copyData = res.data.slice(1, res.data.length);
    //         // Append open property to each parent item
    //         for(let item of copyData) {
    //             item.open = false;
    //         }

    //         const combinedData = [...this.state.data, ...copyData];

    //         this.setState({
    //             data: combinedData,
    //             currentPage: nextPage,
    //             isLoading: false,
    //         });
    //     });
    // }

    // trackScrolling(event) {
    //     const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    //     if (bottom) {
    //         this.setState({
    //             isLoading: true
    //         });
    //         this.fetchData();
    //     }
    // }
  }, {
    key: "renderDesktopChildren",
    value: function renderDesktopChildren(parent) {
      var _this4 = this;
      var selected = this.state.selected;
      if (parent.children.length > 0) {
        return parent.children.map(function (item) {
          if (parent.open) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              key: item.id
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
              className: "child-item" + (selected && selected.id === item.id ? " selected-child-item" : ""),
              onClick: function onClick() {
                _this4.selectChild(item);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              className: "pl-3"
            }, item.varCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
              title: item.indicator,
              colSpan: 2
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.indicator)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)));
          }
        });
      }
    }
  }, {
    key: "renderMobileChildren",
    value: function renderMobileChildren(parent) {
      var _this5 = this;
      var selected = this.state.selected;
      if (parent.children.length > 0) {
        return parent.children.map(function (item) {
          if (parent.open) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              key: item.id
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
              className: "child-item" + (selected && selected.id === item.id ? " selected-child-item" : ""),
              onClick: function onClick() {
                _this5.selectChild(item);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
              width: window.innerWidth / 100 * 10 + "%"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
              width: window.innerWidth / 100 * 90 + "%",
              colSpan: 2
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.indicator))));
          }
        });
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (this.state.isLoading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "codebook-loader-text"
        }, "Loading more on scroll...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null)));
      }
    }
  }, {
    key: "renderDesktopTable",
    value: function renderDesktopTable() {
      var _this6 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hover: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "7%"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "13%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "VAR CODE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "55%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "INDICATOR SHORT NAME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "5%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "THEMES:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "5%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "C88")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "5%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "SOCR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "5%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "font-weight-400"
      }, "SDG")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: "5%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))), this.state.isSelection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
        width: "100%"
      }, this.state.data.map(function (parentItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          className: "parent-item",
          width: "100%",
          onClick: function onClick() {
            return _this6.selectChildAndToggleAccordion(parentItem, index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "7%"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "13%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, parentItem.varCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "60%",
          colSpan: 2,
          title: parentItem.indicator
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, parentItem.indicator)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "5%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-c88"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text",
          title: parentItem.varCode
        }, _this6.getC88Code(parentItem.varCode)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "5%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-socr"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text",
          title: parentItem.socr
        }, _this6.getSORCCode(parentItem.socr)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: "5%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-sdg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text",
          title: parentItem.sdg
        }, _this6.getSDG(parentItem.sdg)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          className: "tooglebtn",
          width: "5%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand",
          style: {
            color: '#2F3442'
          },
          "aria-hidden": "true"
        })))), _this6.renderDesktopChildren(parentItem));
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "no-result"
      }, "No results related to your search/filter selection"), this.renderLoading());
    }
  }, {
    key: "renderMobileTable",
    value: function renderMobileTable() {
      var _this7 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hover: true,
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: window.innerWidth / 100 * 10 + "%"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: window.innerWidth / 100 * 70 + "%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "INDICATOR SHORT NAME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        width: window.innerWidth / 100 * 20 + "%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)))), this.state.isSelection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
        width: "100%"
      }, this.state.data.map(function (parentItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          className: "parent-item",
          width: "100%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: window.innerWidth / 100 * 10 + "%"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          width: window.innerWidth / 100 * 70 + "%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          width: window.innerWidth / 100 * 70 + "%"
        }, parentItem.indicator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mobile-meta"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mobile-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, parentItem.varCode))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mobile-icons"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-c88"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text"
        }, _this7.getC88Code(parentItem.varCode))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-socr"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text"
        }, _this7.getSORCCode(parentItem.socr))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-sdg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "circle-icon-text"
        }, _this7.getSDG(parentItem.sdg)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          className: "tooglebtn",
          width: window.innerWidth / 100 * 20 + "%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand",
          style: {
            color: '#2F3442'
          },
          "aria-hidden": "true",
          onClick: function onClick() {
            return _this7.toggleAccordion(index);
          }
        })))), _this7.renderMobileChildren(parentItem));
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "no-result"
      }, "No results related to your search/filter selection"), this.renderLoading());
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "data-table"
      }, !window.innerWidth <= 768 ? this.renderDesktopTable() : this.renderMobileTable());
    }
  }]);
  return CodebookDatatable;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Codebook_Filter_Search.jsx":
/*!**************************************************!*\
  !*** ./js/components/Codebook_Filter_Search.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodebookFilterModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Form.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var _data_filterData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/filterData.js */ "./js/data/filterData.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle */ "./js/components/Toggle.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CodebookFilterModal = /*#__PURE__*/function (_Component) {
  _inherits(CodebookFilterModal, _Component);
  var _super = _createSuper(CodebookFilterModal);
  function CodebookFilterModal(props) {
    var _this;
    _classCallCheck(this, CodebookFilterModal);
    _this = _super.call(this, props);
    _this.state = {
      modalVisible: false,
      c88: _data_filterData_js__WEBPACK_IMPORTED_MODULE_1__["default"][0],
      socr: _data_filterData_js__WEBPACK_IMPORTED_MODULE_1__["default"][1],
      sdg: _data_filterData_js__WEBPACK_IMPORTED_MODULE_1__["default"][2],
      searchFilterValue: "",
      filterData: null,
      criteriaChanged: false,
      loader: false
    };
    return _this;
  }
  _createClass(CodebookFilterModal, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        modalVisible: !this.state.modalVisible
      });
    }
  }, {
    key: "toggleParent",
    value: function toggleParent(event, isSelected) {
      var _this$setState;
      var copyObj = this.state[event.target.name];
      var filterName = event.target.name;
      copyObj[filterName].parentSelected = !isSelected;
      copyObj[filterName].children.forEach(function (child) {
        return child.selected = !isSelected;
      });

      // set an empty array when all items selected
      this.setState((_this$setState = {}, _defineProperty(_this$setState, this.state[filterName], []), _defineProperty(_this$setState, "criteriaChanged", true), _this$setState));
    }
  }, {
    key: "toggleChild",
    value: function toggleChild(event, index) {
      var _this$setState2;
      var copyObj = this.state[event.target.name];
      var filterName = event.target.name;
      copyObj[filterName].children[index].selected = !copyObj[filterName].children[index].selected;

      // if the parent is selected, this will deselect it when toggling a child
      if (copyObj[filterName].parentSelected === true) {
        copyObj[filterName].parentSelected = false;
      }

      // backwards logic to toggle parent item to true if all children are selected
      var deselectedChildren = copyObj[filterName].children.filter(function (child) {
        return child.selected === false;
      });
      if (deselectedChildren.length === 0) {
        copyObj[filterName].parentSelected = true;
      }
      this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, this.state[filterName], copyObj), _defineProperty(_this$setState2, "criteriaChanged", true), _this$setState2));
    }
  }, {
    key: "reset",
    value: function reset() {
      var copyC88 = this.state.c88;
      var copySOCR = this.state.socr;
      var copySDG = this.state.sdg;
      this.deselectToggles(copyC88.c88);
      this.deselectToggles(copySOCR.socr);
      this.deselectToggles(copySDG.sdg);
      this.setState({
        c88: copyC88,
        socr: copySOCR,
        sdg: copySDG,
        searchFilterValue: "",
        criteriaChanged: false
      });
    }
  }, {
    key: "deselectToggles",
    value: function deselectToggles(parentObj) {
      parentObj.parentSelected = false;
      var _iterator = _createForOfIteratorHelper(parentObj.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          child.selected = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "renderC88",
    value: function renderC88() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: {
          color: '#F73E55',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0',
          lineHeight: '20px',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "checkbox",
        labelClass: "primary-label",
        className: "primary-toggle",
        name: "c88",
        id: "C88Primary",
        onChange: function onChange(event) {
          return _this2.toggleParent(event, _this2.state.c88.c88.parentSelected);
        },
        value: this.state.c88.c88.parentSelected,
        checked: this.state.c88.c88.parentSelected,
        labelOff: this.state.c88.c88.label,
        labelOn: this.state.c88.c88.label
      })), this.state.c88.c88.children.map(function (childItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row toggle-switch-row",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "checkbox",
          id: index,
          value: childItem.selected,
          name: "c88",
          checked: _this2.state.c88.c88.parentSelected || childItem.selected,
          onChange: function onChange(event) {
            _this2.toggleChild(event, index);
          },
          labelOff: childItem.label,
          labelOn: childItem.label,
          className: "secondary-toggle"
        })));
      }));
    }
  }, {
    key: "renderSOCR",
    value: function renderSOCR() {
      var _this3 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: {
          color: '#EAB04B',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0',
          lineHeight: '20px',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "checkbox",
        name: "socr",
        id: "SOCRPrimary",
        className: "primary-toggle",
        labelClass: "primary-label",
        onChange: function onChange(event) {
          return _this3.toggleParent(event, _this3.state.socr.socr.parentSelected);
        },
        value: this.state.socr.socr.parentSelected,
        checked: this.state.socr.socr.parentSelected,
        labelOn: this.state.socr.socr.label,
        labelOff: this.state.socr.socr.label
      })), this.state.socr.socr.children.map(function (childItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row toggle-switch-row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "checkbox",
          name: "socr",
          id: "socr_" + index,
          checked: _this3.state.socr.socr.parentSelected || childItem.selected,
          onChange: function onChange(event) {
            _this3.toggleChild(event, index);
          },
          labelOn: childItem.label,
          labelOff: childItem.label,
          className: "secondary-toggle"
        })));
      }));
    }
  }, {
    key: "renderSDG",
    value: function renderSDG() {
      var _this4 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: {
          color: '#4F9DA6',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0',
          lineHeight: '20px',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "checkbox",
        name: "sdg",
        id: "SDGPrimary",
        className: "primary-toggle",
        labelClass: "primary-label",
        onChange: function onChange(event) {
          return _this4.toggleParent(event, _this4.state.sdg.sdg.parentSelected);
        },
        value: this.state.sdg.sdg.parentSelected,
        checked: this.state.sdg.sdg.parentSelected,
        labelOn: this.state.sdg.sdg.label,
        labelOff: this.state.sdg.sdg.label
      })), this.state.sdg.sdg.children.map(function (childItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row toggle-switch-row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "checkbox",
          className: "secondary-toggle",
          name: "sdg",
          id: "sdg_" + index,
          checked: _this4.state.sdg.sdg.parentSelected || childItem.selected,
          onChange: function onChange(event) {
            _this4.toggleChild(event, index);
          },
          labelOn: childItem.label,
          labelOff: childItem.label,
          title: childItem.label
        })));
      }));
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        searchFilterValue: event.target.value
      });
    }
  }, {
    key: "transformFilterFields",
    value: function transformFilterFields(children) {
      // used to return an array of strings for the filter query
      var selectedChildren = children.filter(function (child) {
        return child.selected === true;
      });
      return selectedChildren.map(function (child) {
        return child.value;
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var filterVal = {
        c88: this.transformFilterFields(this.state.c88.c88.children),
        socr: this.transformFilterFields(this.state.socr.socr.children),
        sdg: this.transformFilterFields(this.state.sdg.sdg.children),
        search: this.state.searchFilterValue
      };
      this.props.filter(filterVal);
      this.setState({
        loader: true
      });
      setTimeout(function () {
        this.setState({
          loader: false
        });
      }.bind(this), 1500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      if (this.state.loader) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "loader",
          isOpen: this.state.loader,
          className: "modal-dialog-centered loader"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 ml-3 pt-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "grow",
          color: "secondary",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "grow",
          color: "success",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "grow",
          color: "danger",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "grow",
          color: "warning",
          size: "sm"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 pt-4 pl-4 float-left"
        }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "filter-toggle",
        color: "danger",
        onClick: function onClick() {
          return _this5.toggleModal();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fas fa-filter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "codebook-modal",
        isOpen: this.state.modalVisible,
        size: "lg",
        backdrop: true,
        toggle: function toggle() {
          return _this5.toggleModal();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "modal-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: '0 5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "modal-subtitle"
      }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: this.state.searchFilterValue,
        onChange: function onChange(e) {
          return _this5.handleChange(e);
        },
        name: "searchFilter",
        type: "text",
        placeholder: "Search by name...",
        className: "modal-search-bar"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row codebook-components-pull-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "modal-button cancel " + [this.state.criteriaChanged && " active"],
        outline: true,
        onClick: function onClick() {
          return _this5.reset();
        }
      }, "Clear Search & Reset Filters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "modal-button filter " + [this.state.criteriaChanged && " active"],
        outline: true,
        onClick: function onClick() {
          _this5.toggleModal();
          _this5.submitForm();
        }
      }, "Apply Search & Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "pull-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "close",
        onClick: function onClick() {
          return _this5.toggleModal();
        }
      }, " "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "filter-content-wrapper",
        style: {
          padding: '0 5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "modal-subtitle"
      }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row filter-container-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "themes-c88-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "toggle-subitem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, this.renderC88()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "themes-socr-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "toggle-subitem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, this.renderSOCR())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "themes-sdg-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "toggle-subitem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, this.renderSDG())))))))))));
    }
  }]);
  return CodebookFilterModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Codebook_Sidebar.jsx":
/*!********************************************!*\
  !*** ./js/components/Codebook_Sidebar.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodebookSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var padding = {
  paddingBottom: '15px'
};
var CodebookSidebar = /*#__PURE__*/function (_Component) {
  _inherits(CodebookSidebar, _Component);
  var _super = _createSuper(CodebookSidebar);
  function CodebookSidebar(props) {
    var _this;
    _classCallCheck(this, CodebookSidebar);
    _this = _super.call(this, props);
    _this.state = {
      data: null,
      loader: true
    };
    return _this;
  }
  _createClass(CodebookSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: this.props.data,
        loader: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // Workaround for an issue when selecting a child item, the side-bar component does not update
      //  This helps us trigger a re-render
      if (prevProps.data !== this.props.data) {
        this.setState({
          data: this.props.data
        });
      }
    }
  }, {
    key: "getC88Code",
    value: function getC88Code(code) {
      if (!code) {
        return;
      }
      return code.split(".")[0];
    }
  }, {
    key: "getSOCRCode",
    value: function getSOCRCode(code) {
      if (!code) {
        return;
      }
      var strArr = code.split(" ");
      var sorc = "";
      strArr.map(function (str) {
        sorc += str.charAt(0);
      });
      return sorc;
    }
  }, {
    key: "getSDG",
    value: function getSDG(code) {
      if (!code) {
        return;
      }
      return code.match(/(?:)([0-9]+)/)[0];
    }
  }, {
    key: "renderFirstColumn",
    value: function renderFirstColumn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.data.indicator ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "INDICATOR SHORT NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-description"
      }, this.state.data.indicator)) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: padding
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, this.state.data.varCode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "VAR CODE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-codes"
      }, this.state.data.varCode)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "IND. GROUP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-codes"
      }, this.state.data.groupCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "THEMES:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "C88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "circle-c88"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: this.state.data.varCode,
        className: "circle-icon-text"
      }, this.getC88Code(this.state.data.varCode))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "SOCR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "circle-socr"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: this.state.data.socr,
        className: "circle-icon-text"
      }, this.getSOCRCode(this.state.data.socr))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "SDG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "circle-sdg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: this.state.data.sdg,
        className: "circle-icon-text"
      }, this.getSDG(this.state.data.sdg)))))));
    }
  }, {
    key: "renderSecondColumn",
    value: function renderSecondColumn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: padding
      }, this.state.data.definition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "DEFINITION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.definition)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: padding
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, this.state.data.reportingResponsibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "REPORTING RESPONSIBILITY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.reportingResponsibility)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, this.state.data.gathering_method ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sidebar-label text-right",
        style: {
          'width': '100%'
        }
      }, "GATHERING METHOD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-info text-right",
        style: {
          'width': '100%'
        }
      }, this.state.data.gathering_method))) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: padding
      }, this.state.data.source_link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "SOURCE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "item-link",
        href: this.state.data.source_link
      }, this.state.data.source)))) : ""));
    }
  }, {
    key: "renderThirdColumn",
    value: function renderThirdColumn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: padding
      }, this.state.data.unit_of_measurement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "UNIT OF MEASUREMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.unit_of_measurement)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: padding
      }, this.state.data.notesOnCalculation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "NOTES ON CALCULATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.notesOnCalculation)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: padding
      }, this.state.data.frequencyOfCollection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "FREQUENCY OF COLLECTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.frequencyOfCollection)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: padding
      }, this.state.data.period ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row sidebar-label"
      }, "PERIOD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row item-info"
      }, this.state.data.period)) : "")));
    }
  }, {
    key: "renderFourthColumn",
    value: function renderFourthColumn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col",
        style: padding
      }, this.state.data.variableType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sidebar-label"
      }, "VARIABLE TYPE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-info"
      }, this.state.data.variableType))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col",
        style: padding
      }, this.state.data.automatibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sidebar-label text-right",
        style: {
          'width': '100%'
        }
      }, "AUTOMATABILITY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-info text-right",
        style: {
          'width': '100%'
        }
      }, this.state.data.automatibility))) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col",
        style: padding
      }, this.state.data.granulity ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sidebar-label"
      }, "GRANULARITY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-info"
      }, this.state.data.granulity))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col",
        style: padding
      }, this.state.data.expandability ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sidebar-label text-right",
        style: {
          'width': '100%'
        }
      }, "EXPANDABILITY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-info text-right",
        style: {
          'width': '100%'
        }
      }, this.state.data.expandability))) : "")));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loader) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: "loader",
          isOpen: this.state.loader,
          className: "modal-dialog-centered loader"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 ml-3 pt-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "grow",
          color: "secondary",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "grow",
          color: "success",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "grow",
          color: "danger",
          size: "sm"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "grow",
          color: "warning",
          size: "sm"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 pt-4 pl-4 float-left"
        }, "Loading Content...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "table-cell sidebar"
      }, this.renderFirstColumn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
        style: padding
      })), this.renderSecondColumn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
        style: padding
      })), this.renderThirdColumn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
        style: padding
      })), this.renderFourthColumn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row",
        style: {
          justifyContent: 'space-around'
        }
      }, this.state.data.data_check ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "action-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "/scoda/toolkit#/codebook-explorer/" + this.state.data.id,
        target: "_blank"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "action-button-text"
      }, "View in Data Explorer"))) : ""));
    }
  }]);
  return CodebookSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Toggle.jsx":
/*!**********************************!*\
  !*** ./js/components/Toggle.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// ======================================================================================================

//                                        COMPONENT NOTES

// This component is built off boostraps toggle. The state has been built into the component, but doesn't 
// effect the ui. The ui changes in css checking the 'checked' property. The state just toggles onChange 
// of the checkbox. 

// ======================================================================================================



var Toggle = /*#__PURE__*/function (_Component) {
  _inherits(Toggle, _Component);
  var _super = _createSuper(Toggle);
  function Toggle(props) {
    var _this;
    _classCallCheck(this, Toggle);
    _this = _super.call(this, props);
    _this.state = {
      toggle: false,
      label: _this.props.labelOff,
      customStyles: {
        backgroundColor: _this.props.indicatorColour
      }
    };
    _this.toggleTrigger = _this.toggleTrigger.bind(_assertThisInitialized(_this));
    return _this;
  }

  // Function that adjusts state to open or close sidebar by adding or removing the "open" class
  _createClass(Toggle, [{
    key: "toggleTrigger",
    value: function toggleTrigger() {
      if (this.state.toggle === false) {
        this.setState({
          toggle: true,
          label: this.props.labelOn
        });
      } else {
        this.setState({
          toggle: false,
          label: this.props.labelOff
        });
      }
      console.log(this.state.toggle);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ["toggle "] + this.props.className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "custom-control custom-switch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        checked: this.props.checked,
        name: this.props.name,
        value: this.props.value,
        className: "custom-control-input",
        onChange: (this.toggleTrigger, this.props.onChange),
        id: this.props.id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "custom-control-label " + this.props.labelClass,
        title: this.props.title,
        htmlFor: this.props.id
      }, this.state.label.replace(/(.{40})..+/, "$1...")), this.props.indicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ["toggle--indicator "] + this.state.toggle,
        style: this.state.toggle === true ? this.state.customStyles : null
      })));
    }
  }]);
  return Toggle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

;
Toggle.propTypes = {
  /**
   * Each item needs an item which defines units and allows individual switching
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  /**
   * Text for the toggle when it is turned on
   */
  labelOn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  /**
   * Text for the toggle when it is turned off
   */
  labelOff: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./js/data/filterData.js":
/*!*******************************!*\
  !*** ./js/data/filterData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var filterData = [{
  "c88": {
    "label": "C88 Themes",
    "parentSelected": true,
    "value": "All",
    "children": [{
      "label": "City Transformation",
      "value": "City transformation",
      "selected": true
    }, {
      "label": "Energy & Electricity",
      "value": "Energy and electricity",
      "selected": true
    }, {
      "label": "Environment & Waste",
      "value": "Environment and waste",
      "selected": true
    }, {
      "label": "Fire & Emergency",
      "value": "Fire and emergency",
      "selected": true
    }, {
      "label": "Governance",
      "value": "Governance",
      "selected": true
    }, {
      "label": "Housing & Community",
      "value": "Housing and community",
      "selected": true
    }, {
      "label": "Transport & Roads",
      "value": "Transport and roads",
      "selected": true
    }, {
      "label": "Water & Sanitation",
      "value": "Water and sanitation",
      "selected": true
    }]
  }
}, {
  "socr": {
    "label": "SOCR Themes",
    "parentSelected": true,
    "value": "All",
    "children": [{
      "label": "Demography",
      "value": "Demography",
      "selected": true
    }, {
      "label": "Inclusive Cities",
      "value": "Inclusive Cities",
      "selected": true
    }, {
      "label": "Poverty and Inequality",
      "value": "Poverty and Inequality",
      "selected": true
    }, {
      "label": "Productive Cities",
      "value": "Productive Cities",
      "selected": true
    }, {
      "label": "Sustainable Cities",
      "value": "Sustainable Cities",
      "selected": true
    }, {
      "label": "Well Governed Cities",
      "value": "Well Governed Cities",
      "selected": true
    }]
  }
}, {
  "sdg": {
    "label": "SDG Themes",
    "parentSelected": true,
    "value": "All",
    "children": [{
      "label": "Goal 1. End poverty in all its forms everywhere",
      "value": "Goal 1. End poverty in all its forms everywhere",
      "selected": true
    }, {
      "label": "Goal 2. End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
      "value": "Goal 2. End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
      "selected": true
    }, {
      "label": "Goal 3. Ensure healthy lives and promote well-being for all at all ages",
      "value": "Goal 3. Ensure healthy lives and promote well-being for all at all ages",
      "selected": true
    }, {
      "label": "Goal 4. Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      "value": "Goal 4. Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      "selected": true
    }, {
      "label": "Goal 5. Achieve gender equality and empower all women and girls",
      "value": "Goal 5. Achieve gender equality and empower all women and girls",
      "selected": true
    }, {
      "label": "Goal 6. Ensure availability and sustainable management of water and sanitation for all",
      "value": "Goal 6. Ensure availability and sustainable management of water and sanitation for all",
      "selected": true
    }, {
      "label": "Goal 7. Ensure access to affordable, reliable, sustainable and modern energy for all",
      "value": "Goal 7. Ensure access to affordable, reliable, sustainable and modern energy for all",
      "selected": true
    }, {
      "label": "Goal 8. Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
      "value": "Goal 8. Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
      "selected": true
    }, {
      "label": "Goal 9. Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
      "value": "Goal 9. Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
      "selected": true
    }, {
      "label": "Goal 10. Reduce inequality within and among countries",
      "value": "Goal 10. Reduce inequality within and among countries",
      "selected": true
    }, {
      "label": "Goal 11. Make cities and human settlements inclusive, safe, resilient and sustainable",
      "value": "Goal 11. Make cities and human settlements inclusive, safe, resilient and sustainable",
      "selected": true
    }, {
      "label": "Goal 12. Ensure sustainable consumption and production patterns",
      "value": "Goal 12. Ensure sustainable consumption and production patterns",
      "selected": true
    }, {
      "label": "Goal 13. Take urgent action to combat climate change and its impacts",
      "value": "Goal 13. Take urgent action to combat climate change and its impacts",
      "selected": true
    }, {
      "label": "Goal 14. Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
      "value": "Goal 14. Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
      "selected": true
    }, {
      "label": "Goal 15. Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
      "value": "Goal 15. Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
      "selected": true
    }, {
      "label": "Goal 16. Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
      "value": "Goal 16. Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
      "selected": true
    }]
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterData);

/***/ })

}]);
//# sourceMappingURL=js_components_Codebook_jsx.js.map