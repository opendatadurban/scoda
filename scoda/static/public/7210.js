(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[7210,7644],{11741:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,n,o,s,d=(o=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(o);if(s){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(){return a(this,f),d.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return r.createElement("a",{href:this.props.href,target:this.props.target,id:this.props.id,onClick:this.props.onClick,className:"btn "+this.props.className,style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"12px"}},this.props.text,this.props.icon,this.props.children,this.props.downloadBtn?r.createElement("img",{className:"subnav--cta---download_icon",style:{position:"relative",top:"unset",right:"unset"},src:"/static/dist/img/icon_download.webp",alt:"download_icon"}):"","      ")}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component)},92202:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(67294),o=n(11741),a=n(85677),i=n(10684),l=n(36955);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const u=function(e){var t,u,s=(t=(0,r.useState)(!1),u=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(t,u)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(t,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=s[0],f=s[1];return r.createElement(r.Fragment,null,r.createElement(o.Z,{className:["download-screen-capture "]+e.className,onClick:function(e){f(!0);var t=n(10183);e.preventDefault(),t.toJpeg(document.getElementById("content"),{quality:.95}).then((function(e){f(!1);var t=document.createElement("a");t.download="data-snapshot.png",t.href=e,t.click()}))},text:e.buttonText,id:"download",downloadBtn:!0}),d?r.createElement(a.Z,{id:"loader",isOpen:d,className:"modal-dialog-centered loader"},r.createElement(i.Z,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-2"}),r.createElement("div",{className:"col-0 ml-3 pt-4"},r.createElement(l.Z,{type:"grow",color:"secondary",size:"sm"}),r.createElement(l.Z,{type:"grow",color:"success",size:"sm"}),r.createElement(l.Z,{type:"grow",color:"danger",size:"sm"}),r.createElement(l.Z,{type:"grow",color:"warning",size:"sm"})),r.createElement("div",{className:"col-0 pt-4 pl-4 float-left"},"Downloading Image...")),r.createElement("br",null))):"")};var s=n(6408),d=n(32842),f=n(42365),p=n(98227);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(44448);const y=function(e){var t,n,o=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return r.createElement(s.Z,{isOpen:a,toggle:function(){return i(!a)},className:"dropdown"},r.createElement(d.Z,{caret:!0},e.name),r.createElement(f.Z,null,e.dropDownItem.dropdownMenu.map((function(e,t){return r.createElement(p.Z,{key:t,active:e.active,href:e.href},e.name)}))))};var b=n(45697),h=n.n(b),v=n(87644),w=function(e){var t="Employment"===e.dropdownName||"Dwellings"===e.dropdownName||"Household Income"===e.dropdownName,n=function(){};t&&(n=(0,v.L6)());var o=(0,v.pu)();return r.createElement("div",{className:["subnav subnav--wrapper container-fluid "]+e.className,onClick:function(){!function(){n();var e=!1;if(o.error.forEach((function(t){!0===t.errorThrown&&(e=!0)})),e){var t=o.error.map((function(e){return{errorThrown:!1}}));o.setError(t)}}()}},r.createElement("div",{className:"subnav--breadcrumbs"},r.createElement("strong",null,e.name)," / ",r.createElement(y,{name:e.dropdownName,header:e.dropdownHeading,menu:e.dropdownMenu,dropDownItem:e.dropDownItem})),r.createElement("div",{className:"subnav--cta"},r.createElement("div",{className:"row"},r.createElement("div",{className:""},r.createElement(u,{targetID:"charts-container",filename:"image.png",className:"round btn_secondary",buttonText:e.buttonText})," "))))};const g=w;w.propTypes={name:h().string,dropdownName:h().string,dropdownHeading:h().string,dropdownMenu:h().object,buttonText:h().string,className:h().string}},87644:(e,t,n)=>{"use strict";n.d(t,{L6:()=>s,pl:()=>f,pu:()=>d,zH:()=>u});var r=n(67294);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=(0,r.createContext)(null),l=(0,r.createContext)(null),c=(0,r.createContext)(null),u=function(){return(0,r.useContext)(i)},s=function(){return(0,r.useContext)(l)},d=function(){return(0,r.useContext)(c)},f=function(e){var t=e.children,n=o((0,r.useState)(!1),2),a=n[0],u=n[1],s=o((0,r.useState)([{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1}]),2),d=s[0],f=s[1];return r.createElement(i.Provider,{value:{selectOpen:a,setSelect:u}},r.createElement(l.Provider,{value:function(){a&&u(!1)}},r.createElement(c.Provider,{value:{error:d,setError:f}},t)))}},95280:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".charts_dashboards--button{box-shadow:none !important}.charts_dashboards--button:hover{box-shadow:none !important}.dropdown>.btn{box-shadow:none !important}.dropdown>.btn:hover{box-shadow:none !important}",""]),e.exports=t},23663:(e,t,n)=>{"use strict";n.d(t,{CE:()=>u,Do:()=>h,JL:()=>v,Nq:()=>w,Rf:()=>l,U9:()=>x,X9:()=>i,ei:()=>s,iC:()=>m,ku:()=>j,mx:()=>c,n5:()=>f,pp:()=>a,qW:()=>p,rb:()=>b,wF:()=>y});var r=n(45697),o=n.n(r);function a(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&a(n+e)}function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=undefined),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function s(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var d="object"==typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=o().oneOfType([o().string,o().func,f,o().shape({current:o().any})]),m=o().oneOfType([o().func,o().string,o().shape({$$typeof:o().symbol,render:o().func}),o().arrayOf(o().oneOfType([o().func,o().string,o().shape({$$typeof:o().symbol,render:o().func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],w=!("undefined"==typeof window||!window.document||!window.document.createElement);function g(e){if(function(e){return!(!e||"object"!=typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!function(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}(e))return!1;var t=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"==typeof e&&w){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function E(e){return null!==e&&(Array.isArray(e)||w&&"number"==typeof e.length)}function x(e,t){var n=g(e);return t?E(n)?n:null===n?[]:[n]:E(n)?n[0]:n}var j=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},44448:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),a=n(7795),i=n.n(a),l=n(90569),c=n.n(l),u=n(3565),s=n.n(u),d=n(19216),f=n.n(d),p=n(44589),m=n.n(p),y=n(95280),b=n.n(y),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(b(),h),b()&&b().locals&&b().locals}}]);