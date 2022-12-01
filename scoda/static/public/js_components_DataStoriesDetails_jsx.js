"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_DataStoriesDetails_jsx"],{

/***/ "./js/components/DataStories.Banner.jsx":
/*!**********************************************!*\
  !*** ./js/components/DataStories.Banner.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Image */ "./js/components/Image.jsx");
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


var Banner = /*#__PURE__*/function (_Component) {
  _inherits(Banner, _Component);
  var _super = _createSuper(Banner);
  function Banner(props) {
    _classCallCheck(this, Banner);
    return _super.call(this, props);
  }
  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var bannerImage = "/static/dist/img/scoda/datastories/".concat(this.props.section, ".webp");
      var viewButtonTitle = this.props.section.toUpperCase() + ' ' + this.props.viewType;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid ml-0 mt-0 p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "ds-top-header-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container ml-3 col-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "banner",
        className: "ds-banner-logo",
        imgSrc: bannerImage
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-8 ds-banner-title"
      }, this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-banner-view-button"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: this.props.siteLink,
        target: "blank__",
        className: "card-trigger"
      }), " View the ", viewButtonTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container ds-banner-content"
      }, this.props.content))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-banner-content-vspacer"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-3 ds-banner-hr"
      })));
    }
  }]);
  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.ContentSection.Right.Edge.jsx":
/*!*****************************************************************!*\
  !*** ./js/components/DataStories.ContentSection.Right.Edge.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSectionRightEdge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Image */ "./js/components/Image.jsx");
/* harmony import */ var _components_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.InfoBanner */ "./js/components/DataStories.InfoBanner.jsx");
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



var ContentSectionRightEdge = /*#__PURE__*/function (_Component) {
  _inherits(ContentSectionRightEdge, _Component);
  var _super = _createSuper(ContentSectionRightEdge);
  function ContentSectionRightEdge(props) {
    _classCallCheck(this, ContentSectionRightEdge);
    return _super.call(this, props);
  }
  _createClass(ContentSectionRightEdge, [{
    key: "render",
    value: function render() {
      var bannerImage = "/static/dist/img/scoda/datastories/edge.webp";
      var bannerImageSACN = "/static/dist/img/scoda/datastories/sacn.webp";
      var sectionImage = "/static/dist/img/scoda/datastories/".concat(this.props.img);
      var main_class = "justify-content-center ml-0 mt-3 p-0 data-story-card ".concat(this.props.filter_type);
      var filterTag = {
        boxSizing: 'border-box',
        height: '34px',
        width: '34px',
        border: '2px solid #FFFFFF',
        backgroundColor: this.props.filterColor,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        letterSpacing: '0',
        lineHeight: '29px',
        textAlign: 'center',
        borderRadius: '50px',
        position: 'relative',
        top: '42px',
        left: '8px',
        paddingTop: '1.2px',
        paddingLeft: '2px'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: main_class
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: this.props.href_,
        className: "card-trigger"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6 col-lg-8 col-xl-8 p-0 ds-content-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: filterTag
      }, this.props.imageTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "sectionImage",
        imgSrc: sectionImage,
        className: "ds-content-image-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-4 ds-content-diplay-text pr-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-2 pl-3 ds-content-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pl-3 ds-content-subtitle"
      }, this.props.subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pl-3 ds-content"
      }, this.props.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col pl-0 pr-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: this.props.infoBannerTitle,
        subtitle: this.props.infoBannerDate,
        minutes: this.props.infoBannerMins,
        imgSrc: bannerImage
      }))))));
    }
  }]);
  return ContentSectionRightEdge;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.ContentSection.Right.jsx":
/*!************************************************************!*\
  !*** ./js/components/DataStories.ContentSection.Right.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSectionRight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Image */ "./js/components/Image.jsx");
/* harmony import */ var _components_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataStories.InfoBanner */ "./js/components/DataStories.InfoBanner.jsx");
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



var ContentSectionRight = /*#__PURE__*/function (_Component) {
  _inherits(ContentSectionRight, _Component);
  var _super = _createSuper(ContentSectionRight);
  function ContentSectionRight(props) {
    _classCallCheck(this, ContentSectionRight);
    return _super.call(this, props);
  }
  _createClass(ContentSectionRight, [{
    key: "render",
    value: function render() {
      var bannerImage = "/static/dist/img/scoda/datastories/edge.webp";
      var bannerImageSACN = "/static/dist/img/scoda/datastories/sacn.webp";
      var sectionImage = "/static/dist/img/scoda/datastories/".concat(this.props.img);
      var main_class = "justify-content-center ml-0 mt-3 p-0 data-story-card ".concat(this.props.filter_type);
      var filterTag = {
        boxSizing: 'border-box',
        height: '34px',
        width: '34px',
        border: '2px solid #FFFFFF',
        backgroundColor: this.props.filterColor,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        letterSpacing: '0',
        lineHeight: '29px',
        textAlign: 'center',
        borderRadius: '50px',
        position: 'relative',
        top: '42px',
        left: '8px',
        paddingTop: '1.2px',
        paddingLeft: '2px'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: this.props.filter_id,
        className: main_class
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: this.props.href_,
        className: "card-trigger"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-6 col-lg-8 col-xl-8 p-0 ds-content-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: filterTag
      }, this.props.imageTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "sectionImage",
        imgSrc: sectionImage,
        className: "ds-content-image-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-4 ds-content-diplay-text p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 mt-2 pl-3 ds-content-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pl-3 ds-content-subtitle"
      }, this.props.subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pl-3 ds-content"
      }, this.props.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: this.props.infoBannerTitle,
        subtitle: this.props.infoBannerDate,
        minutes: this.props.infoBannerMins,
        imgSrc: bannerImageSACN
      }))))));
    }
  }]);
  return ContentSectionRight;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.ContentSection.Top.jsx":
/*!**********************************************************!*\
  !*** ./js/components/DataStories.ContentSection.Top.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSectionTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./js/components/Image.jsx");
/* harmony import */ var _DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStories.InfoBanner */ "./js/components/DataStories.InfoBanner.jsx");
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



var ContentSectionTop = /*#__PURE__*/function (_Component) {
  _inherits(ContentSectionTop, _Component);
  var _super = _createSuper(ContentSectionTop);
  function ContentSectionTop(props) {
    _classCallCheck(this, ContentSectionTop);
    return _super.call(this, props);
  }
  _createClass(ContentSectionTop, [{
    key: "render",
    value: function render() {
      var sectionImage = "/static/dist/img/scoda/datastories/".concat(this.props.img);
      var filterTag = {
        boxSizing: 'border-box',
        height: '34px',
        width: '34px',
        border: '2px solid #FFFFFF',
        backgroundColor: this.props.filterColor,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        letterSpacing: '0',
        lineHeight: '29px',
        textAlign: 'center',
        borderRadius: '50px',
        position: 'relative',
        top: '45px',
        left: '10px',
        paddingTop: '2px',
        paddingRight: "1px"
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: this.props.href_,
        className: "card-trigger"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-content-top-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: filterTag
      }, this.props.imageTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "sectionImage",
        imgSrc: sectionImage
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 pl-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-content-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-content-subtitle"
      }, this.props.subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-top-content"
      }, this.props.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-right-content-hspacer"
      }))));
    }
  }]);
  return ContentSectionTop;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.Filterbar.jsx":
/*!*************************************************!*\
  !*** ./js/components/DataStories.Filterbar.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Filter_Pill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Filter.Pill */ "./js/components/Filter.Pill.jsx");
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


var FilterBar = /*#__PURE__*/function (_Component) {
  _inherits(FilterBar, _Component);
  var _super = _createSuper(FilterBar);
  function FilterBar(props) {
    _classCallCheck(this, FilterBar);
    return _super.call(this, props);
  }
  _createClass(FilterBar, [{
    key: "render",
    value: function render() {
      var i = 0;
      var filterArray = this.props.filters.split(',');
      var colorArray = this.props.colors.split(',');
      var pill = filterArray.map(function (filter, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "col-0 p-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Filter_Pill__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: filter,
          filter: filter,
          color: colorArray[index]
        }));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid ml-0 mt-0 p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-filter-title"
      }, "FILTERS:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row ml-2"
      }, pill));
    }
  }]);
  return FilterBar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStories.InfoBanner.jsx":
/*!**************************************************!*\
  !*** ./js/components/DataStories.InfoBanner.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesInfoBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Image */ "./js/components/Image.jsx");
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


var DataStoriesInfoBanner = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesInfoBanner, _Component);
  var _super = _createSuper(DataStoriesInfoBanner);
  function DataStoriesInfoBanner(props) {
    _classCallCheck(this, DataStoriesInfoBanner);
    return _super.call(this, props);
  }
  _createClass(DataStoriesInfoBanner, [{
    key: "render",
    value: function render() {
      var main_class = "ds-durban-edge-card ds-info-banner-width ml-0 mt-2 p-0 mt-4 data-story-card ".concat(this.props.filter_type);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: main_class
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-info-banner-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "sectionImage",
        imgSrc: this.props.imgSrc
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-9 pl-3 ds-info-banner-width-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-10 ds-info-banner-detail-width"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        title: this.props.showTitle,
        className: "col ds-info-banner-title"
      }, this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col ds-info-banner-subtitle"
      }, this.props.subtitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 info-banner-mins"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 ds-info-banner-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ds-info-banner-title-num"
      }, this.props.minutes))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-info-banner-subtitle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ds-info-banner-title-mins"
      }, "MINS"))))))));
    }
  }]);
  return DataStoriesInfoBanner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./js/components/DataStoriesDetails.jsx":
/*!**********************************************!*\
  !*** ./js/components/DataStoriesDetails.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataStoriesDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DataStories_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStories.Banner */ "./js/components/DataStories.Banner.jsx");
/* harmony import */ var _DataStories_Filterbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStories.Filterbar */ "./js/components/DataStories.Filterbar.jsx");
/* harmony import */ var _DataStories_ContentSection_Right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataStories.ContentSection.Right */ "./js/components/DataStories.ContentSection.Right.jsx");
/* harmony import */ var _DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataStories.ContentSection.Top */ "./js/components/DataStories.ContentSection.Top.jsx");
/* harmony import */ var _DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataStories.InfoBanner */ "./js/components/DataStories.InfoBanner.jsx");
/* harmony import */ var _DataStories_ContentSection_Right_Edge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataStories.ContentSection.Right.Edge */ "./js/components/DataStories.ContentSection.Right.Edge.jsx");
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







var DataStoriesDetails = /*#__PURE__*/function (_Component) {
  _inherits(DataStoriesDetails, _Component);
  var _super = _createSuper(DataStoriesDetails);
  function DataStoriesDetails(props) {
    _classCallCheck(this, DataStoriesDetails);
    return _super.call(this, props);
  }
  _createClass(DataStoriesDetails, [{
    key: "render",
    value: function render() {
      var main_class = "ml-0 mt-3 p-0 data-story-card";
      var bannerImage = "/static/dist/img/scoda/datastories/edge.webp";
      var bannerImageSACN = "/static/dist/img/scoda/datastories/sacn.webp";
      var sacnContent = "The South African Cities Network data stories provide succinct visual insight into the key narratives from the South African Cities Network research outputs.";
      var edgeContent = "The eThekwini data stories provide succinct visual insight into the key narratives surrounding economic development and employment in the City.";
      var sacnFilters = "Productive Cities,Inclusive Cities,Well Governed Cities,Sustainable Cities,Built Enviroment,City Demographics";
      var sacnColors = "#F05252,#FFC057,#196CDB,#31C198,#870672,#131421";
      var edgeFilters = "Employment,Services,Economy";
      var edgeColors = "#F05252,#FFC057,#196CDB";
      var sacnSectionOneImage = 'spatial.webp';
      var sacnSectionOneTitle = 'State of City Finances 2018';
      var sacnSectionOneSubTitle = 'Financing Spatial Transformation';
      var sacnSectionOneContent = 'Despite the fact that South Africa’s national urban agenda prioritises urban densification, the municipal revenue mode…';
      var sacnSectionTwoImage = 'simon-hurry-_h-L45TSmGM-unsplash 1.webp';
      var sacnSectionTwoTitle = 'State of City Finances 2020: An Introduction';
      var sacnSectionTwoSubTitle = '';
      var sacnSectionTwoContent = 'Cities rely on a mix of grants and their own revenue sources to fund constitutionally mandated expenditure responsibilities.';
      var sacnSectionThreeImage = 'leo-moko-M59-iDrnoA0-unsplash 1.webp';
      var sacnSectionThreeTitle = 'Household Bills and Affordability';
      var sacnSectionThreeSubTitle = '';
      var sacnSectionThreeContent = 'The affordability of municipal services is an important concern for cities. Social policy in South Africa is focussed on...';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container data-story-landig-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "tab-content",
        id: "nav-tabContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "tab-pane fade show active",
        id: "nav-sacn-content",
        role: "tabpanel",
        "aria-labelledby": "nav-sacn-tab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        section: "sacn",
        title: "SACN Data Stories",
        content: sacnContent,
        viewType: "Webpage",
        siteLink: "https://www.sacities.net"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_Filterbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filters: sacnFilters,
        colors: sacnColors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Right__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: sacnSectionTwoImage,
        title: sacnSectionTwoTitle,
        subtitle: sacnSectionTwoSubTitle,
        content: sacnSectionTwoContent,
        filterColor: "#196CDB",
        filter: "Well Governed Cities",
        imageTag: "W",
        filter_type: "data-story-card-well",
        filter_id: "data-story-card-well-governed2",
        infoBannerTitle: "South African Cities Network",
        infoBannerDate: "SoCF 2020",
        infoBannerMins: "5",
        href_: "/scoda/toolkit#/ds-state-of-the-city-finance-2020"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Right__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: sacnSectionThreeImage,
        title: sacnSectionThreeTitle,
        subtitle: sacnSectionThreeSubTitle,
        content: sacnSectionThreeContent,
        filterColor: "#196CDB",
        filter: "Well Governed Cities",
        imageTag: "W",
        filter_type: "data-story-card-well",
        filter_id: "data-story-card-well-governed3",
        infoBannerTitle: "South African Cities Network",
        infoBannerDate: "SoCF 2020",
        infoBannerMins: "4",
        href_: "/scoda/toolkit#/ds-household-bills-and-affordibility"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Right__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: sacnSectionOneImage,
        title: sacnSectionOneTitle,
        subtitle: sacnSectionOneSubTitle,
        content: sacnSectionOneContent,
        filterColor: "#F05252",
        filter: "Productive Cities",
        imageTag: "P",
        filter_type: "data-story-card-productive",
        filter_id: "data-story-card-productive",
        infoBannerTitle: "South African Cities Network",
        infoBannerDate: "August 2018",
        infoBannerMins: "9",
        href_: "/scoda/toolkit#/ds-spatial-transformation-2018"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row ml-1 mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-inclusive",
        className: "col-md-4 " + main_class + " data-story-card-inclusives data-story-card-inclusive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "stateof.webp",
        title: "State of the EPWP",
        subtitle: "South African Cities 2017/18",
        content: "The unemployment rate remains at an unfortunate 26.7% in South Africa. Curbing this rate has been a great challenge for the ...",
        filterColor: "#FFC057",
        filter: "Inclusive Cities",
        imageTag: "I",
        filter_type: "data-story-card-inclusives",
        href_: "/scoda/toolkit#/ds-epw-metro-2018"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "South African Cities Network",
        showTitle: "South African Cities Network",
        subtitle: "July 2018",
        minutes: "8",
        filter_type: "data-story-card-inclusives",
        imgSrc: bannerImageSACN
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-well-governed4",
        className: "col-md-4 " + main_class + " data-story-card-inclusives data-story-card-inclusive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "affordability.webp",
        title: "State of City Finances 2018",
        subtitle: "Affordability",
        content: "A key message from the State of City Finances 2018 report is that citizens are in crisis. Although growth in the cost of munic...",
        filterColor: "#196CDB",
        filter: "Well Governed Cities",
        imageTag: "W",
        filter_type: "data-story-card-well",
        href_: "/scoda/toolkit#/ds-affordability-2018"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "South African Cities Network",
        showTitle: "South African Cities Network",
        subtitle: "July 2018",
        minutes: "5",
        filter_type: "data-story-card-inclusives",
        imgSrc: bannerImageSACN
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-well-governed5",
        className: "col-md-4 " + main_class + " data-story-card-well"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "urban-safety.webp",
        title: "Urban Safety",
        subtitle: "South African Cities in Context",
        content: "Cities worldwide generate about 80% of the gross value added in their respective countries. Due to their association with opp...",
        filterColor: "#196CDB",
        filter: "Well Governed Cities",
        filter_type: "data-story-card-well",
        imageTag: "W",
        href_: "/scoda/toolkit#/ds-urban-safety-2018"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "South African Cities Network",
        showTitle: "South African Cities Network",
        subtitle: "July 2018",
        minutes: "6",
        filter_type: "data-story-card-well",
        imgSrc: bannerImageSACN
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Right__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: "infrastructure.webp",
        title: "State of City Finances 2018",
        subtitle: "Financing Infrastructure",
        content: "While revenues are sufficient to cover operating expenditures in the metros, they do not generate enough internal finance to\u2026",
        filterColor: "#196CDB",
        filter: "Well Governed Cities",
        imageTag: "W",
        filter_type: "data-story-card-well",
        infoBannerTitle: "South African Cities Network",
        infoBannerDate: "August 2018",
        infoBannerMins: "7",
        filter_id: "data-story-card-well-governed1",
        href_: "/scoda/toolkit#/ds-state-of-finance-2018"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-vspacer"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "pt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-vspacer"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "tab-pane fade",
        id: "nav-eThekwini-content",
        role: "tabpanel",
        "aria-labelledby": "nav-eThekwini-tab",
        style: {
          display: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        section: "edge",
        title: "eThekwini Data Stories (via the Durban EDGE)",
        content: edgeContent,
        viewType: "Portal",
        siteLink: "https://edge.durban/"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_Filterbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filters: edgeFilters,
        colors: edgeColors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row ml-1 mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-employment",
        className: "col-md-4 " + main_class + " data-story-card-employment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "unemployed.webp",
        title: "Unemployment in SA\u2019s Major Cities",
        subtitle: "",
        content: "StatsSA has recently released 2019 Q2 unemployment figures, which show alarming rates of unemployment last seen\u2026",
        filterColor: "#F05252",
        filter: "Employment",
        imageTag: "E",
        filter_type: "data-story-card-employment",
        href_: "https://data-stories.edge.durban/edge/unemployed_around_major_citiies"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showTitle: "The Durban EDGE",
        title: "The Durban EDGE",
        subtitle: "2 August 2019",
        minutes: "5",
        filter_type: "data-story-card-employment",
        imgSrc: bannerImage
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-economy",
        className: "col-md-4 " + main_class + " data-story-card-economy"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "durban.webp",
        title: "Durban's Economy Recovers in the Second Quarter",
        subtitle: "",
        content: "GDP data on Durban's performance has recently been released. As expected, Durban's economy has recovered from the\u2026",
        filterColor: "#196CDB",
        filter: "Economy",
        imageTag: "Ec",
        filter_type: "data-story-card-economy",
        href_: "https://data-stories.edge.durban/edge/durban_economy_2nd_Q"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showTitle: "The Durban EDGE",
        title: "The Durban EDGE",
        subtitle: "14 October 2019",
        minutes: "4",
        filter_type: "data-story-card-economy",
        imgSrc: bannerImage
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-service",
        className: "col-md-4 " + main_class + " data-story-card-service"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "electricity.webp",
        title: "Electricity Usage",
        subtitle: "",
        content: "The cost of getting electricity in South Africa is 13 US cents per kilo watt hour on average, while the cost of getting electricity in Durb\u2026",
        filterColor: "#FFC057",
        filter: "Service",
        imageTag: "S",
        filter_type: "data-story-card-service",
        href_: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_InfoBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showTitle: "The Durban EDGE",
        title: "The Durban EDGE",
        subtitle: "June 2019",
        minutes: "6",
        filter_type: "data-story-card-service",
        imgSrc: bannerImage
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mt-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "data-story-card-economy1",
        className: "ds-ecomomy-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataStories_ContentSection_Right_Edge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        img: "economy.webp",
        title: "Economic Overview: State of the Durban Economy",
        subtitle: "",
        content: "The total gross value added (GVA) of Durban grew by R278 billion in 2018. This is a 0.5% increase from the 2017. In 2018, Durban exp\u2026",
        filterColor: "rgb(25, 108, 219)",
        filter: "Economy",
        imageTag: "Ec",
        infoBannerTitle: "The Durban EDGE",
        infoBannerDate: "June 2019",
        infoBannerMins: "8",
        filter_type: "data-story-card-economy",
        href_: "https://data-stories.edge.durban/edge/durban_economy"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-vspacer"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "pt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ds-content-vspacer"
      }))));
    }
  }]);
  return DataStoriesDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_DataStoriesDetails_jsx.js.map