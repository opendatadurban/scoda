"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_Navigation_scoda_jsx"],{

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


/***/ }),

/***/ "./js/components/Navigation_scoda.jsx":
/*!********************************************!*\
  !*** ./js/components/Navigation_scoda.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation_scoda)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./js/components/Image.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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



var Navigation_scoda = /*#__PURE__*/function (_Component) {
  _inherits(Navigation_scoda, _Component);
  var _super = _createSuper(Navigation_scoda);
  function Navigation_scoda(props) {
    var _this;
    _classCallCheck(this, Navigation_scoda);
    _this = _super.call(this, props);
    _this.state = {
      logo_hide: "none"
    };
    _this.checkSoCR = _this.checkSoCR.bind(_assertThisInitialized(_this));
    _this.checkToolkit = _this.checkToolkit.bind(_assertThisInitialized(_this));
    _this.checkHome = _this.checkHome.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Navigation_scoda, [{
    key: "checkHome",
    value: function checkHome() {
      if (document.location.href == window.location.origin + '/scoda/home#/' || document.location.href == window.location.origin + '/scoda/#/') {
        return true;
      }
      return false;
    }
  }, {
    key: "checkSoCR",
    value: function checkSoCR() {
      if (document.location.href == window.location.origin + '/scoda/socr#/' || document.location.href == window.location.origin + '/scoda/socr#/human_resources' || document.location.href == window.location.origin + '/scoda/socr#/city_finances' || document.location.href == window.location.origin + '/scoda/socr#/citizen_engagement' || document.location.href == window.location.origin + '/scoda/socr#/service_delivery') {
        return true;
      }
      return false;
    }
  }, {
    key: "checkToolkit",
    value: function checkToolkit() {
      if (document.location.href == window.location.origin + '/scoda/toolkit#/explorer' || document.location.href == window.location.origin + '/scoda/toolkit#/codebook' || document.location.href == window.location.origin + '/scoda/toolkit#/demographic-modeller' || document.location.href == window.location.origin + '/scoda/toolkit#/data-stories-details') {
        return true;
      }
      return false;
    }

    // //HIDE SCODA LOGO ON SCROLL
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      //Remove spinner
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.spinner--container').remove();

      //window.scrollTo(0,0);

      this.props.logoHide ? document.addEventListener("scroll", function () {
        var logo = window.scrollY < 50 ? "none" : "block";
        _this2.setState({
          logo_hide: logo
        });
      }) : this.setState({
        logo_hide: "block"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dropShadow = "";
      this.props.box_shadow && (dropShadow = "box-shadow");
      this.state.logo_hide == "block" ? dropShadow = "box-shadow" : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "navigation-scoda " + dropShadow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "top-header d-flex align-items-center justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col d-flex align-items-center justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://ckan.scoda.co.za/user/login"
      }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://ckan.scoda.co.za/user/register",
        className: "register"
      }, "Register"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        style: {
          position: "absolute",
          left: "0"
        },
        className: "navbar-brand d-flex align-items-center",
        href: "/scoda/home#/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        alt: "scoda_logo",
        className: "navigation-logo",
        style: {
          width: "105px",
          display: "".concat(this.state.logo_hide)
        },
        imgSrc: "/static/img/scoda_logo.png"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "navbar-toggler-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "navbar-nav "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "nav-item home_"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: this.checkHome() ? "nav-link active" : "nav-link ",
        href: "/scoda/home"
      }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "nav-item tookit_ dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: this.checkToolkit() ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "Toolkits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        target: "_blank",
        href: "https://ckan.scoda.co.za/dataset"
      }, "Data Management System"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/toolkit#/explorer"
      }, "Data Explorer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/toolkit#/codebook"
      }, "Codebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/toolkit#/demographic-modeller"
      }, "Demographic Modeller"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/toolkit#/data-stories-details"
      }, "Data Stories"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "nav-item tookit_ socr_ dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: this.checkSoCR() ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown1",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "SoCR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr"
      }, "SoCR Directory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/citizen_engagement"
      }, "Citizen Engagement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/human_resources"
      }, "Municipal Human Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/service_delivery"
      }, "Service Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/people_household"
      }, "People and Households"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/employment"
      }, "Employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/dwellings"
      }, "Dwellings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/household_income"
      }, "Household Income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/food_security"
      }, "Food Security, Literacy and Inequality"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/life_expectancy"
      }, "Life Expectancy and Health"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/education"
      }, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/sustainability"
      }, "Sustainability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/infrastructure"
      }, "ICT Infrastructure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/transport_mode"
      }, "Transport Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/public_transport_spend"
      }, "Public Transport Spend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "dropdown-item",
        href: "/scoda/socr#/travel_time"
      }, "Travel Time"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "nav-item about_"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: document.location.href == window.location.origin + '/scoda/about-us#/' ? "nav-link active" : "nav-link ",
        href: "/scoda/about-us"
      }, "About Us ")))))));
    }
  }]);
  return Navigation_scoda;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_Navigation_scoda_jsx.js.map