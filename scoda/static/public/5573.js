"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[5573],{65573:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n,r=o(67294),l=o(19755),c=o.n(l);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var t,o,l,i,m=(l=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(l);if(i){var o=d(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return p(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=m.call(this,e)).state={hero_caret:"fa fa-caret-up fa-2x hero-block-arrow-expand",hero_state:"expand"},t.toggleHero=t.toggleHero.bind(u(t)),t}return t=f,(o=[{key:"componentDidMount",value:function(){}},{key:"toggleHero",value:function(){"expand"==this.state.hero_state?(this.setState({hero_state:"collapse"}),this.setState({hero_caret:"fa fa-caret-down fa-2x hero-block-arrow-expand"}),document.getElementById("contentContainer").style.display="none",document.getElementById("contentContainer").style.height="0px",document.getElementById("buttonContainer").style.display="none",document.getElementById("infoBlockContainer").style.visibility="hidden",document.getElementById("infoBlock").style.height=this.props.collapseHeight+"px",document.getElementById("hero-content-column").style.height="50px",document.getElementById("hero-content-column").style.paddingBottom="0px",document.getElementById("hero-title").style.paddingBottom="0px"):(this.setState({hero_state:"expand"}),this.setState({hero_caret:"fa fa-caret-up fa-2x hero-block-arrow-expand"}),document.getElementById("contentContainer").style.display="block",document.getElementById("buttonContainer").style.display="block",document.getElementById("infoBlockContainer").style.visibility="visible",c()("#infoBlock").height(n),document.getElementById("hero-content-column").style.height=n,document.getElementById("hero-content-column").style.paddingBottom="90px")}},{key:"render",value:function(){this.props.primaryColor,this.props.primaryColor;var e={border:"2px solid ".concat(this.props.primaryColor),color:this.props.primaryColor},t={color:this.props.secondaryColor},o={color:this.props.primaryColor,border:"2px solid ".concat(this.props.secondaryColor)},n={background:this.props.linearGradient},l=this.props.infoTitle.substring(0,1);return r.createElement("div",{id:"hero",className:"hero-block"},r.createElement("div",{className:"container-fluid mt-0 p-0 hero-tab-header"},r.createElement("div",{className:[this.state.hero_state+" row ml-0 mr-0 p-0 content-collapsible"]},r.createElement("div",{className:"row hero-title p-0",id:"hero-title"},r.createElement("a",{className:"click-layer",onClick:this.toggleHero}),r.createElement("div",{className:"col-0 hero-block-title",onClick:this.toggleHero},this.props.title),r.createElement("div",{className:"col-1 tooglebtn"},r.createElement("i",{className:this.state.hero_caret,"aria-hidden":"true"}))),r.createElement("div",{className:" col-md-6 hero-content-column",id:"hero-content-column"},r.createElement("div",{id:"contentContainer",className:"row"},r.createElement("div",{className:"col hero-block-text",dangerouslySetInnerHTML:{__html:this.props.content}}),r.createElement("div",{className:"col-12"},r.createElement("button",{className:"hero-block-button",style:e,onClick:this.toggleHero},"Got It!")),r.createElement("div",{className:"spacer"})),r.createElement("div",{id:"buttonContainer",className:"row"})),r.createElement("div",{id:"infoBlock",className:"col-md-6 hero-block-background p-0 mr-0",style:n},r.createElement("div",{id:"infoBlockContainer",className:"row ml-0 p-0 hero-block-info-display"},r.createElement("div",{className:"col-0 hero-block-info-hspacer"}),r.createElement("div",{className:"col-0 hero-block-info-logo hero-block-info-logo-title",style:o},l),r.createElement("div",{className:"col-0 hero-block-info-hspacer"}),r.createElement("div",{className:"col-0 hero-block-info-display-text",style:t},this.props.infoTitle))))))}}])&&a(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component)}}]);