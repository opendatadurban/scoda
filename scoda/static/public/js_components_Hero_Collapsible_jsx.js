"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_Hero_Collapsible_jsx"],{

/***/ "./js/components/Hero.Collapsible.jsx":
/*!********************************************!*\
  !*** ./js/components/Hero.Collapsible.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
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


var height;
var Hero = /*#__PURE__*/function (_Component) {
  _inherits(Hero, _Component);
  var _super = _createSuper(Hero);
  function Hero(props) {
    var _this;
    _classCallCheck(this, Hero);
    _this = _super.call(this, props);
    _this.state = {
      hero_caret: 'fa fa-caret-up fa-2x hero-block-arrow-expand',
      hero_state: 'expand'
    };
    _this.toggleHero = _this.toggleHero.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.hero-tab-header').height() + 30;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#infoBlock').height(height);
    }
  }, {
    key: "toggleHero",
    value: function toggleHero() {
      var switchState = this.state.hero_state;
      if (switchState == 'expand') {
        this.setState({
          hero_state: 'collapse'
        });
        this.setState({
          hero_caret: 'fa fa-caret-down fa-2x hero-block-arrow-expand'
        });
        document.getElementById('contentContainer').style.display = 'none';
        document.getElementById('contentContainer').style.height = '0px';
        document.getElementById('buttonContainer').style.display = 'none';
        document.getElementById('infoBlockContainer').style.visibility = 'hidden';
        document.getElementById('infoBlock').style.height = '300px';
        document.getElementById('hero-content-column').style.height = '50px';
        document.getElementById('hero-content-column').style.paddingBottom = '0px';
        document.getElementById('hero-title').style.paddingBottom = '0px';
      } else {
        this.setState({
          hero_state: 'expand'
        });
        this.setState({
          hero_caret: 'fa fa-caret-up fa-2x hero-block-arrow-expand'
        });
        document.getElementById('contentContainer').style.display = 'block';
        document.getElementById('buttonContainer').style.display = 'block';
        document.getElementById('infoBlockContainer').style.visibility = 'visible';
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#infoBlock').height(height);
        document.getElementById('hero-content-column').style.height = height;
        document.getElementById('hero-content-column').style.paddingBottom = '90px';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var primaryColor = {
        color: this.props.primaryColor
      };
      var backgroundPrimary = {
        backgroundColor: this.props.primaryColor
      };
      var buttonPrimaryColor = {
        border: "2px solid ".concat(this.props.primaryColor),
        color: this.props.primaryColor
      };
      var secondaryColor = {
        color: this.props.secondaryColor
      };
      var infoBlock = {
        color: this.props.primaryColor,
        border: "2px solid ".concat(this.props.secondaryColor)
      };
      var infoBlockBackground = {
        background: this.props.linearGradient
      };
      var infoTitleCaps = this.props.infoTitle.substring(0, 1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "hero",
        className: "hero-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container-fluid mt-0 p-0 hero-tab-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: [this.state.hero_state + " row ml-0 mr-0 p-0 content-collapsible"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row hero-title p-0",
        id: "hero-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "click-layer",
        onClick: this.toggleHero
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 hero-block-title",
        onClick: this.toggleHero
      }, this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-1 tooglebtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: this.state.hero_caret,
        "aria-hidden": "true"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: " col-md-6 hero-content-column",
        id: "hero-content-column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "contentContainer",
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col hero-block-text",
        dangerouslySetInnerHTML: {
          __html: this.props.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "hero-block-button",
        style: buttonPrimaryColor,
        onClick: this.toggleHero
      }, "Got It!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "spacer"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "buttonContainer",
        className: "row"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "infoBlock",
        className: "col-md-6 hero-block-background p-0 mr-0",
        style: infoBlockBackground
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "infoBlockContainer",
        className: "row ml-0 p-0 hero-block-info-display"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 hero-block-info-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 hero-block-info-logo hero-block-info-logo-title",
        style: infoBlock
      }, infoTitleCaps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 hero-block-info-hspacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-0 hero-block-info-display-text",
        style: secondaryColor
      }, this.props.infoTitle))))));
    }
  }]);
  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

}]);
//# sourceMappingURL=js_components_Hero_Collapsible_jsx.js.map