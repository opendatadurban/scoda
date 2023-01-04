"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[8292,6132],{6214:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(67294);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(m,e);var t,o,r,d,u=(r=m,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(d){var o=s(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return l(this,e)});function m(){return a(this,m),u.apply(this,arguments)}return t=m,(o=[{key:"render",value:function(){return n.createElement("img",{id:this.props.id,style:this.props.style,className:this.props.className,alt:this.props.alt,src:this.props.imgSrc})}}])&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),m}(n.Component)},98292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=o(67294),r=o(6214),a=o(19755),c=o.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function d(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var t,o,a,i,p=(a=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(i){var o=m(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return d(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).state={logo_hide:"none"},t.checkSoCR=t.checkSoCR.bind(u(t)),t.checkToolkit=t.checkToolkit.bind(u(t)),t.checkHome=t.checkHome.bind(u(t)),t}return t=f,(o=[{key:"checkHome",value:function(){return document.location.href==window.location.origin+"/scoda/home#/"||document.location.href==window.location.origin+"/scoda/#/"}},{key:"checkSoCR",value:function(){return!!document.location.href.includes(window.location.origin+"/scoda/socr#/")}},{key:"checkToolkit",value:function(){return document.location.href==window.location.origin+"/scoda/toolkit#/explorer"||document.location.href==window.location.origin+"/scoda/toolkit#/codebook"||document.location.href==window.location.origin+"/scoda/toolkit#/demographic-modeller"||document.location.href==window.location.origin+"/scoda/toolkit#/data-stories-details"}},{key:"componentDidMount",value:function(){var e=this;c()(".spinner--container").remove(),this.props.logoHide?document.addEventListener("scroll",(function(){var t=window.scrollY<50?"none":"block";e.setState({logo_hide:t})})):this.setState({logo_hide:"block"})}},{key:"render",value:function(){var e="";return this.props.box_shadow&&(e="box-shadow"),"block"==this.state.logo_hide&&(e="box-shadow"),n.createElement("div",{className:"navigation-scoda "+e},n.createElement("div",{className:"top-header d-flex align-items-center justify-content-end"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col d-flex align-items-center justify-content-end"},n.createElement("a",{href:"https://ckan.scoda.co.za/user/login"},"Log In"),n.createElement("a",{href:"https://ckan.scoda.co.za/user/register",className:"register"},"Register"))))),n.createElement("div",{className:"container"},n.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.createElement("a",{style:{position:"absolute",left:"0"},className:"navbar-brand d-flex align-items-center",href:"/scoda/home#/"},n.createElement(r.Z,{alt:"scoda_logo",className:"navigation-logo",style:{width:"105px",display:"".concat(this.state.logo_hide)},imgSrc:"/static/img/scoda_logo.png"})),n.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav "},n.createElement("li",{className:"nav-item home_"},n.createElement("a",{className:this.checkHome()?"nav-link active":"nav-link ",href:"/scoda/home"},"Home")),n.createElement("li",{className:"nav-item tookit_ dropdown"},n.createElement("a",{className:this.checkToolkit()?"nav-link dropdown-toggle active":"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Toolkits"),n.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.createElement("a",{className:"dropdown-item",target:"_blank",href:"https://ckan.scoda.co.za/dataset"},"Data Management System"),n.createElement("a",{className:"dropdown-item",href:"/scoda/toolkit#/explorer"},"Data Explorer"),n.createElement("a",{className:"dropdown-item",href:"/scoda/toolkit#/codebook"},"Codebook"),n.createElement("a",{className:"dropdown-item",href:"/scoda/toolkit#/demographic-modeller"},"Demographic Modeller"),n.createElement("a",{className:"dropdown-item",href:"/scoda/toolkit#/data-stories-details"},"Data Stories"))),n.createElement("li",{className:"nav-item tookit_ socr_ dropdown"},n.createElement("a",{className:this.checkSoCR()?"nav-link dropdown-toggle active":"nav-link dropdown-toggle",href:"#",id:"navbarDropdown1",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"SoCR"),n.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.createElement("a",{className:"dropdown-item",href:"/scoda/socr"},"SoCR Directory"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/citizen_engagement"},"Citizen Engagement"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/human_resources"},"Municipal Human Resources"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/service_delivery"},"Service Delivery"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/people_household"},"People and Households"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/employment"},"Employment"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/dwellings"},"Dwellings"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/household_income"},"Household Income"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/food_security"},"Food Security, Literacy and Inequality"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/life_expectancy"},"Life Expectancy and Health"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/education"},"Education"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/sustainability"},"Sustainability"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/infrastructure"},"ICT Infrastructure"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/transport_mode"},"Transport Mode"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/public_transport_spend"},"Public Transport Spend"),n.createElement("a",{className:"dropdown-item",href:"/scoda/socr#/travel_time"},"Travel Time"))),n.createElement("li",{className:"nav-item about_"},n.createElement("a",{className:document.location.href==window.location.origin+"/scoda/about-us#/"?"nav-link active":"nav-link ",href:"/scoda/about-us"},"About Us ")))))))}}])&&l(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(n.Component)}}]);