"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_Filter_Pill_jsx-js_components_Image_jsx"],{

/***/ "./js/components/Filter.Pill.jsx":
/*!***************************************!*\
  !*** ./js/components/Filter.Pill.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterPill)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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


var productive = "data-story-card-productive";
var inclusive = "data-story-card-inclusive";
var well = "data-story-card-well-governed";
var employnent = "data-story-card-employment";
var economy = "data-story-card-economy";
var service = "data-story-card-service";
var FilterPill = /*#__PURE__*/function (_Component) {
  _inherits(FilterPill, _Component);
  var _super = _createSuper(FilterPill);
  function FilterPill(props) {
    var _this;
    _classCallCheck(this, FilterPill);
    _this = _super.call(this, props);
    _this.filter = _this.filter.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(FilterPill, [{
    key: "filter",
    value: function filter(e) {
      if (e.target.classList.contains(productive)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + productive).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
      if (e.target.classList.contains(inclusive)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + inclusive).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + inclusive + "1").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
      if (e.target.classList.contains(well)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well + "1").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well + "2").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well + "3").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well + "4").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + well + "5").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
      if (e.target.classList.contains(employnent)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + employnent).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
      if (e.target.classList.contains(economy)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + economy).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + economy + "1").toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
      if (e.target.classList.contains(service)) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + service).toggle();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).toggleClass('selected');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var main_class = 'data-story-trigger';
      if (this.props.filter == 'Productive Cities') {
        main_class = 'data-story-trigger data-story-card-productive data-story-card-productive-filter';
      } else if (this.props.filter == 'Inclusive Cities') {
        main_class = 'data-story-trigger data-story-card-inclusive data-story-card-inclusives-filter';
      } else if (this.props.filter == 'Well Governed Cities') {
        main_class = 'data-story-trigger data-story-card-well-governed data-story-card-well-filter';
      } else if (this.props.filter == 'Sustainable Cities') {
        main_class = 'data-story-trigger data-story-card-sustainable data-story-card-sustainable-filter';
      } else if (this.props.filter == 'Built Enviroment') {
        main_class = 'data-story-trigger data-story-card-built data-story-card-built-filter';
      } else if (this.props.filter == 'City Demographics') {
        main_class = 'data-story-trigger data-story-card-city data-story-card-city-filter';
      } else if (this.props.filter == 'Employment') {
        main_class = 'data-story-trigger data-story-card-employment data-story-card-employment-filter';
      } else if (this.props.filter == 'Services') {
        main_class = 'data-story-trigger data-story-card-service';
      } else if (this.props.filter == 'Economy') {
        main_class = 'data-story-trigger data-story-card-economy';
      }
      var pillStyle = {
        boxSizing: 'border-box',
        height: '34px',
        width: '164px',
        border: "2px solid ".concat(this.props.color),
        borderRadius: '25px',
        backgroundColor: this.props.color,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        letterSpacing: '0',
        lineHeight: '30px',
        textAlign: 'center',
        cursor: "pointer"
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "filter_"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "" + main_class,
        style: pillStyle,
        onClick: this.filter
      }, this.props.filter));
    }
  }]);
  return FilterPill;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/Image.jsx":
/*!*********************************!*\
  !*** ./js/components/Image.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Image = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);
  var _super = _createSuper(Image);
  function Image() {
    _classCallCheck(this, Image);
    return _super.apply(this, arguments);
  }
  _createClass(Image, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        id: this.props.id,
        style: this.props.style,
        className: this.props.className,
        alt: this.props.alt,
        src: this.props.imgSrc
      });
    }
  }]);
  return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_Filter_Pill_jsx-js_components_Image_jsx.js.map