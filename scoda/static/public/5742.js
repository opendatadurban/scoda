/*! For license information please see 5742.js.LICENSE.txt */
"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[5742],{95742:(t,e,r)=>{r.r(e),r.d(e,{default:()=>j});var n=r(67294),o=r(50450),a=(r(19755),r(78648)),i=r(94341),c=r(589),l=r(9365),s=r(33420);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:S(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function h(){}function m(){}function y(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==e&&r.call(b,a)&&(v=b);var w=y.prototype=h.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,c){var l=d(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function d(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,c,"next",t)}function c(t){d(a,n,o,i,c,"throw",t)}i(void 0)}))}}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function y(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}r(19192);var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(x,t);var e,r,u,d,b,w,E=(b=x,w=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(b);if(w){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return y(this,t)});function x(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,x),(e=E.call(this,t)).state={indicators:[],dataset:[],table:[],selectedYear:"2010",mapFilter:"NA",display:!1,modal:!1,loader:!1},e.filterIndicatorData=e.filterIndicatorData.bind(v(e)),e.toggleComponentDisplay=e.toggleComponentDisplay.bind(v(e)),e.toggleModal=e.toggleModal.bind(v(e)),e.setMapFilter=e.setMapFilter.bind(v(e)),e.showLoader=e.showLoader.bind(v(e)),e.hideLoader=e.hideLoader.bind(v(e)),e}return e=x,r=[{key:"componentDidMount",value:function(){this.init(),this.loadIndicators()}},{key:"init",value:function(){this.toggleComponentDisplay(!1)}},{key:"toggleComponentDisplay",value:function(t){document.getElementById("explorer-details").style.display=t?"block":"none"}},{key:"toggleModal",value:function(){this.state.modal?this.setState({modal:!1}):this.setState({modal:!0})}},{key:"loadIndicators",value:function(){var t=this;a.Z.get("/api/indicators-list/codebook").then((function(e){t.setState({indicators:e.data})}))}},{key:"showLoader",value:function(){this.setState({loader:!0})}},{key:"hideLoader",value:function(){this.setState({loader:!1})}},{key:"filterIndicatorData",value:(d=p(f().mark((function t(e){var r,n,o,i,c=this;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showLoader(),this.setState({mapFilter:"NA"}),this.setState({selectedYear:"2010"}),this.setState({dataset:[]}),this.setState({table:[]}),this.toggleComponentDisplay(!1),t.next=8,a.Z.get("/api/explore/codebook?indicator_id=".concat(e)).catch((function(t){c.hideLoader(),c.setState({modal:!0,toggle:!0})}));case 8:if(r=t.sent,t.prev=9,null===r){t.next=30;break}if(2===r.data.plot_type&&this.setState({selectedYear:r.data.year}),1!==r.data.plot_type){t.next=24;break}n=r.data.year,o=[],r.data.years_list.map((function(t,e){return o.push({id:t.optid,val:t.optname.replace("Year:","").trim()})})),i=0;case 17:if(!(i<o.length)){t.next=24;break}if(o[i].val!==n){t.next=21;break}return this.setState({selectedYear:o[i].id}),t.abrupt("break",24);case 21:i++,t.next=17;break;case 24:this.setState({mapFilter:"NA"}),this.setState({dataset:r.data}),this.setState({table:r.data.table}),this.toggleComponentDisplay(!0),t.next=35;break;case 30:this.setState({mapFilter:"NA"}),this.setState({selectedYear:"2010"}),this.setState({dataset:[]}),this.setState({table:[]}),this.toggleComponentDisplay(!1);case 35:this.validateDocumentReady().then((function(){c.hideLoader()})),t.next=42;break;case 38:t.prev=38,t.t0=t.catch(9),console.log(t.t0),this.hideLoader();case 42:case"end":return t.stop()}}),t,this,[[9,38]])}))),function(t){return d.apply(this,arguments)})},{key:"validateDocumentReady",value:(u=p(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=setInterval((function(){""!==document.getElementById("chartPng").value&&clearInterval(e)}),2e3);case 3:case"end":return t.stop()}}),t)}))),function(){return u.apply(this,arguments)})},{key:"setMapFilter",value:function(t,e){2===e&&this.setState({mapFilter:t}),1===e&&this.setState({selectedYear:t})}},{key:"render",value:function(){var t=n.createElement("i",{className:"modal-close fa fa-times","aria-hidden":"true",onClick:this.toggleModal});return n.createElement("div",{className:"mt-4 "},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-12"},n.createElement("div",{className:"ie-content-card"},n.createElement("div",{className:"ie-content-card-header"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement(i.Z,{datasetOptions:this.state.indicators,filterHook:this.filterIndicatorData,toggle:this.toggleComponentDisplay,filterYear:this.state.selectedYear})))),n.createElement("div",{id:"explorer-details",style:{marginTop:"30px"},className:"col-md-12 col-lg-12 col-xl-12"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 col-lg-12 col-xl-12"},n.createElement(c.Z,{resultTitle:"Selected Data",results:this.state.dataset,resultType:"table",filterYear:this.state.selectedYear}))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 col-lg-3 col-xl-3"},n.createElement(l.Z,{results:this.state.dataset,filterYear:this.state.selectedYear})),n.createElement("div",{className:"col-md-12 col-lg-9 col-xl-9"},n.createElement(c.Z,{resultTitle:"Plotting Window",results:this.state.dataset,resultType:"chart",filterYear:this.state.selectedYear}))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12 col-lg-3 col-xl-3"},n.createElement(s.Z,{results:this.state.dataset,filterYear:this.state.selectedYear,changeHook:this.setMapFilter})),n.createElement("div",{className:"col-md-12 col-lg-9 col-xl-9"},n.createElement(c.Z,{resultTitle:"Geographic Representation",results:this.state.dataset,resultType:"map",filterYear:this.state.selectedYear,filter:this.state.mapFilter}))),n.createElement("div",{className:"row mt-3"}))))),n.createElement(o.u_,{isOpen:this.state.modal,toggle:this.toggleModal,modalclassname:"fade"},n.createElement(o.xB,{toggle:this.toggleModal,modalclassname:"modal-header",close:t},n.createElement("i",{className:"fa fa-exclamation-triangle","aria-hidden":"true"})," Server Error"),n.createElement(o.fe,{className:"modal-body"},n.createElement("br",null),"There is currently no data available for the selected indicator!",n.createElement("br",null),n.createElement("br",null))),n.createElement(o.u_,{id:"loader",isOpen:this.state.loader,className:"modal-dialog-centered loader"},n.createElement(o.fe,null,n.createElement("div",{className:"row"},n.createElement("div",{className:"col-2"}),n.createElement("div",{className:"col-0 ml-3 pt-4"},n.createElement(o.$j,{type:"grow",color:"secondary",size:"sm"}),n.createElement(o.$j,{type:"grow",color:"success",size:"sm"}),n.createElement(o.$j,{type:"grow",color:"danger",size:"sm"}),n.createElement(o.$j,{type:"grow",color:"warning",size:"sm"})),n.createElement("div",{className:"col-0 pt-4 pl-4 float-left"},"Loading Content...")),n.createElement("br",null))))}}],r&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),x}(n.Component);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function S(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(c,t);var e,r,o,a,i=(o=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(o);if(a){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return S(this,t)});function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t)}return e=c,(r=[{key:"render",value:function(){return n.createElement("div",{className:"container pb-5"},n.createElement("div",{className:"row pb-5 "},n.createElement("div",{className:"col-12"},n.createElement(b,null))))}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(n.Component)}}]);