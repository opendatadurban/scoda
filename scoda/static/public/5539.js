"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[5539],{23645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",s=e[3];if(!s)return i;if(t&&"function"==typeof btoa){var a=(n=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),c=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(c).concat([a]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},10183:(e,t,n)=>{n.r(t),n.d(t,{getFontEmbedCSS:()=>L,toBlob:()=>A,toCanvas:()=>T,toJpeg:()=>I,toPixelData:()=>$,toPng:()=>Z,toSvg:()=>k});const r="application/font-woff",o="image/jpeg",i={woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function s(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return i[t]||""}function a(e){return-1!==e.search(/^(data:)/)}function c(e,t){return`data:${t};base64,${e}`}async function l(e,t,n){const r=await fetch(e,t);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise(((e,t)=>{const i=new FileReader;i.onerror=t,i.onloadend=()=>{try{e(n({res:r,result:i.result}))}catch(e){t(e)}},i.readAsDataURL(o)}))}const u={};async function p(e,t,n){const r=function(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}(e,t,n.includeQueryParams);if(null!=u[r])return u[r];let o;n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());try{const r=await l(e,n.fetchRequestInit,(({res:e,result:n})=>(t||(t=e.headers.get("Content-Type")||""),function(e){return e.split(/,/)[1]}(n))));o=c(r,t)}catch(t){o=n.imagePlaceholder||"";let r=`Failed to fetch resource: ${e}`;t&&(r="string"==typeof t?t:t.message),r&&console.warn(r)}return u[r]=o,o}const d=(()=>{let e=0;return()=>(e+=1,`u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${e}`)})();function h(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function f(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function g(e,t={}){return{width:t.width||function(e){const t=f(e,"border-left-width"),n=f(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){const t=f(e,"border-top-width"),n=f(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}const m=16384;function v(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e}))}function y(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=d();try{t.className=`${t.className} ${i}`}catch(e){return}const s=document.createElement("style");s.appendChild(function(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return h(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}(i,n,r)),t.appendChild(s)}async function w(e,t,n){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>async function(e,t){return e instanceof HTMLCanvasElement?async function(e){const t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):v(t)}(e):e instanceof HTMLVideoElement&&e.poster?async function(e,t){const n=e.poster,r=s(n);return v(await p(n,r,t))}(e,t):e.cloneNode(!1)}(e,t))).then((n=>async function(e,t,n){var r;const o=null!=(i=e).tagName&&"SLOT"===i.tagName.toUpperCase()&&e.assignedNodes?h(e.assignedNodes()):h((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);var i;return 0===o.length||e instanceof HTMLVideoElement||await o.reduce(((e,r)=>e.then((()=>w(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()),t}(e,n,t))).then((t=>function(e,t){return t instanceof Element&&(function(e,t){const n=t.style;if(!n)return;const r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):h(r).forEach((e=>{let t=r.getPropertyValue(e);if("font-size"===e&&t.endsWith("px")){const e=Math.floor(parseFloat(t.substring(0,t.length-2)))-.1;t=`${e}px`}n.setProperty(e,t,r.getPropertyPriority(e))}))}(e,t),function(e,t){y(e,t,":before"),y(e,t,":after")}(e,t),function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t),function(e,t){if(e instanceof HTMLSelectElement){const n=t,r=Array.from(n.children).find((t=>e.value===t.getAttribute("value")));r&&r.setAttribute("selected","")}}(e,t)),t}(e,t))):null}const b=/url\((['"]?)([^'"]+?)\1\)/g,x=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,C=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function R(e){return-1!==e.search(b)}async function E(e,t,n){if(!R(e))return e;const r=function(e,{preferredFontFormat:t}){return t?e.replace(C,(e=>{for(;;){const[n,,r]=x.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n),o=function(e){const t=[];return e.replace(b,((e,n,r)=>(t.push(r),e))),t.filter((e=>!a(e)))}(r);return o.reduce(((e,r)=>e.then((e=>async function(e,t,n,r,o){try{const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}(t,n):t,a=s(t);let l;return l=o?c(await o(i),a):await p(i,a,r),e.replace(function(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${l}$3`)}catch(e){}return e}(e,r,t,n)))),Promise.resolve(r))}async function D(e,t){e instanceof Element&&(await async function(e,t){var n;const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");if(r){const n=await E(r,null,t);e.style.setProperty("background",n,e.style.getPropertyPriority("background"))}}(e,t),await async function(e,t){if((!(e instanceof HTMLImageElement)||a(e.src))&&(!(e instanceof SVGImageElement)||a(e.href.baseVal)))return;const n=e instanceof HTMLImageElement?e.src:e.href.baseVal,r=await p(n,s(n),t);await new Promise(((t,n)=>{e.onload=t,e.onerror=n,e instanceof HTMLImageElement?(e.srcset="",e.src=r):e.href.baseVal=r}))}(e,t),await async function(e,t){const n=h(e.childNodes).map((e=>D(e,t)));await Promise.all(n).then((()=>e))}(e,t))}const N={};async function P(e){let t=N[e];if(null!=t)return t;const n=await fetch(e);return t={url:e,cssText:await n.text()},N[e]=t,t}async function M(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,e.url).href),l(i,t.fetchRequestInit,(({result:e})=>(n=n.replace(o,`url(${e})`),[o,e])))}));return Promise.all(o).then((()=>n))}function S(e){if(null==e)return[];const t=[];let n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(e=i.exec(n),null===e)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}async function O(e,t){const n=await async function(e,t){if(null==e.ownerDocument)throw new Error("Provided element is not within a Document");const n=h(e.ownerDocument.styleSheets),r=await async function(e,t){const n=[],r=[];return e.forEach((n=>{if("cssRules"in n)try{h(n.cssRules||[]).forEach(((e,o)=>{if(e.type===CSSRule.IMPORT_RULE){let i=o+1;const s=P(e.href).then((e=>M(e,t))).then((e=>S(e).forEach((e=>{try{n.insertRule(e,e.startsWith("@import")?i+=1:n.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})))).catch((e=>{console.error("Error loading remote css",e.toString())}));r.push(s)}}))}catch(o){const i=e.find((e=>null==e.href))||document.styleSheets[0];null!=n.href&&r.push(P(n.href).then((e=>M(e,t))).then((e=>S(e).forEach((e=>{i.insertRule(e,n.cssRules.length)})))).catch((e=>{console.error("Error loading remote stylesheet",e.toString())}))),console.error("Error inlining remote css file",o.toString())}})),Promise.all(r).then((()=>(e.forEach((e=>{if("cssRules"in e)try{h(e.cssRules||[]).forEach((e=>{n.push(e)}))}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t.toString())}})),n)))}(n,t);return function(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>R(e.style.getPropertyValue("src"))))}(r)}(e,t);return(await Promise.all(n.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return E(e.cssText,n,t)})))).join("\n")}async function k(e,t={}){const{width:n,height:r}=g(e,t),o=await w(e,t,!0);return await async function(e,t){const n=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await O(e,t);if(n){const t=document.createElement("style"),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}(o,t),await D(o,t),function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]}))}(o,t),await async function(e,t,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),async function(e){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}(o)}(o,n,r)}async function T(e,t={}){const{width:n,height:r}=g(e,t),o=await k(e,t),i=await v(o),s=document.createElement("canvas"),a=s.getContext("2d"),c=t.pixelRatio||function(){let e,t;try{t=process}catch(e){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}(),l=t.canvasWidth||n,u=t.canvasHeight||r;return s.width=l*c,s.height=u*c,t.skipAutoScale||function(e){(e.width>m||e.height>m)&&(e.width>m&&e.height>m?e.width>e.height?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m):e.width>m?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m))}(s),s.style.width=`${l}`,s.style.height=`${u}`,t.backgroundColor&&(a.fillStyle=t.backgroundColor,a.fillRect(0,0,s.width,s.height)),a.drawImage(i,0,0,s.width,s.height),s}async function $(e,t={}){const{width:n,height:r}=g(e,t);return(await T(e,t)).getContext("2d").getImageData(0,0,n,r).data}async function Z(e,t={}){return(await T(e,t)).toDataURL()}async function I(e,t={}){return(await T(e,t)).toDataURL("image/jpeg",t.quality||1)}async function A(e,t={}){const n=await T(e,t),r=await function(e,t={}){return e.toBlob?new Promise((n=>{e.toBlob(n,t.type?t.type:"image/png",t.quality?t.quality:1)})):new Promise((n=>{const r=window.atob(e.toDataURL(t.type?t.type:void 0,t.quality?t.quality:void 0).split(",")[1]),o=r.length,i=new Uint8Array(o);for(let e=0;e<o;e+=1)i[e]=r.charCodeAt(e);n(new Blob([i],{type:t.type?t.type:"image/png"}))}))}(n);return r}async function L(e,t={}){return O(e,t)}},81385:(e,t,n)=>{n.d(t,{C8:()=>l,ZP:()=>p,mq:()=>u});var r=n(94578),o=n(97326),i=n(4942),s=n(67294),a=n(88740),c=n.n(a),l=c()(),u=c()(),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,(0,i.Z)((0,o.Z)((0,o.Z)(t)),"referenceNode",void 0),(0,i.Z)((0,o.Z)((0,o.Z)(t)),"setReferenceNode",(function(e){e&&t.referenceNode!==e&&(t.referenceNode=e,t.forceUpdate())})),t}(0,r.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.referenceNode=null},n.render=function(){return s.createElement(l.Provider,{value:this.referenceNode},s.createElement(u.Provider,{value:this.setReferenceNode},this.props.children))},t}(s.Component)},67139:(e,t,n)=>{n.d(t,{$p:()=>r,DL:()=>o,k$:()=>i});var r=function(e){return Array.isArray(e)?e[0]:e},o=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},i=function(e,t){if("function"==typeof e)return o(e,t);null!=e&&(e.current=t)}},6408:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),o=n(67294),i=n(45697),s=n.n(i),a=n(63366),c=n(97326),l=n(94578),u=n(81385),p=n(94184),d=n.n(p),h=n(80935),f=n(23663),g=["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag","menuRole"],m={a11y:s().bool,disabled:s().bool,direction:s().oneOf(["up","down","left","right"]),group:s().bool,isOpen:s().bool,nav:s().bool,active:s().bool,addonType:s().oneOfType([s().bool,s().oneOf(["prepend","append"])]),size:s().string,tag:f.iC,toggle:s().func,children:s().node,className:s().string,cssModule:s().object,inNavbar:s().bool,setActiveFromChild:s().bool,menuRole:s().oneOf(["listbox","menu"])},v=[f.Do.space,f.Do.enter,f.Do.up,f.Do.down,f.Do.end,f.Do.home],y=function(e){function t(t){var n;return(n=e.call(this,t)||this).addEvents=n.addEvents.bind((0,c.Z)(n)),n.handleDocumentClick=n.handleDocumentClick.bind((0,c.Z)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,c.Z)(n)),n.removeEvents=n.removeEvents.bind((0,c.Z)(n)),n.toggle=n.toggle.bind((0,c.Z)(n)),n.handleMenuRef=n.handleMenuRef.bind((0,c.Z)(n)),n.containerRef=o.createRef(),n.menuRef=o.createRef(),n}(0,l.Z)(t,e);var n=t.prototype;return n.handleMenuRef=function(e){this.menuRef.current=e},n.getContextValue=function(){return{toggle:this.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar,disabled:this.props.disabled,onMenuRef:this.handleMenuRef,menuRole:this.props.menuRole}},n.componentDidMount=function(){this.handleProps()},n.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},n.componentWillUnmount=function(){this.removeEvents()},n.getContainer=function(){return this.containerRef.current},n.getMenu=function(){return this.menuRef.current},n.getMenuCtrl=function(){return this._$menuCtrl||(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]")),this._$menuCtrl},n.getItemType=function(){return"listbox"===this.context.menuRole?"option":"menuitem"},n.getMenuItems=function(){var e=this.getMenu()||this.getContainer();return[].slice.call(e.querySelectorAll('[role="'+this.getItemType()+'"]'))},n.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},n.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},n.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===f.Do.tab)){var t=this.getContainer(),n=this.getMenu(),r=t.contains(e.target)&&t!==e.target,o=n&&n.contains(e.target)&&n!==e.target;(!r&&!o||"keyup"===e.type&&e.which!==f.Do.tab)&&this.toggle(e)}},n.handleKeyDown=function(e){var t=this,n="menuitem"===e.target.getAttribute("role")||"option"===e.target.getAttribute("role"),r=this.getMenuCtrl()===e.target,o=f.Do.tab===e.which;if(!(/input|textarea/i.test(e.target.tagName)||o&&!this.props.a11y||o&&!n&&!r)&&((-1!==v.indexOf(e.which)||e.which>=48&&e.which<=90)&&e.preventDefault(),!this.props.disabled&&(r&&([f.Do.space,f.Do.enter,f.Do.up,f.Do.down].indexOf(e.which)>-1?(this.props.isOpen||this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))):this.props.isOpen&&o?(e.preventDefault(),this.getMenuItems()[0].focus()):this.props.isOpen&&e.which===f.Do.esc&&this.toggle(e)),this.props.isOpen&&n)))if([f.Do.tab,f.Do.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([f.Do.space,f.Do.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([f.Do.down,f.Do.up].indexOf(e.which)>-1||[f.Do.n,f.Do.p].indexOf(e.which)>-1&&e.ctrlKey){var i=this.getMenuItems(),s=i.indexOf(e.target);f.Do.up===e.which||f.Do.p===e.which&&e.ctrlKey?s=0!==s?s-1:i.length-1:(f.Do.down===e.which||f.Do.n===e.which&&e.ctrlKey)&&(s=s===i.length-1?0:s+1),i[s].focus()}else if(f.Do.end===e.which){var a=this.getMenuItems();a[a.length-1].focus()}else if(f.Do.home===e.which)this.getMenuItems()[0].focus();else if(e.which>=48&&e.which<=90)for(var c=this.getMenuItems(),l=String.fromCharCode(e.which).toLowerCase(),u=0;u<c.length;u+=1)if((c[u].textContent&&c[u].textContent[0].toLowerCase())===l){c[u].focus();break}},n.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},n.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e,t,n=(0,f.CE)(this.props,["toggle","disabled","inNavbar","a11y"]),i=n.className,s=n.cssModule,c=n.direction,l=n.isOpen,p=n.group,m=n.size,v=n.nav,y=n.setActiveFromChild,w=n.active,b=n.addonType,x=n.tag,C=(n.menuRole,(0,a.Z)(n,g)),R=x||(v?"li":"div"),E=!1;y&&o.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(E=!0)}));var D=(0,f.mx)(d()(i,"down"!==c&&"drop"+c,!(!v||!w)&&"active",!(!y||!E)&&"active",((e={})["input-group-"+b]=b,e["btn-group"]=p,e["btn-group-"+m]=!!m,e.dropdown=!p&&!b,e.show=l,e["nav-item"]=v,e)),s);return o.createElement(h.D.Provider,{value:this.getContextValue()},o.createElement(u.ZP,null,o.createElement(R,(0,r.Z)({},C,((t={})["string"==typeof R?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:D}))))},t}(o.Component);y.propTypes=m,y.defaultProps={a11y:!0,isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1};const w=y;var b={children:s().node},x=function(e){return o.createElement(w,(0,r.Z)({group:!0},e))};x.propTypes=b;const C=x},80935:(e,t,n)=>{n.d(t,{D:()=>r});var r=n(67294).createContext({})},98227:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),o=n(63366),i=n(97326),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),u=n(94184),p=n.n(u),d=n(80935),h=n(23663),f=["className","cssModule","divider","tag","header","active","text"],g={children:l().node,active:l().bool,disabled:l().bool,divider:l().bool,tag:h.iC,header:l().bool,onClick:l().func,className:l().string,cssModule:l().object,toggle:l().bool,text:l().bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,i.Z)(n)),n.getTabIndex=n.getTabIndex.bind((0,i.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.getRole=function(){return"listbox"===this.context.menuRole?"option":"menuitem"},n.onClick=function(e){var t=this.props,n=t.disabled,r=t.header,o=t.divider,i=t.text;n||r||o||i?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){var e=this.props,t=e.disabled,n=e.header,r=e.divider,o=e.text;return t||n||r||o?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?this.getRole():void 0,n=(0,h.CE)(this.props,["toggle"]),i=n.className,s=n.cssModule,c=n.divider,l=n.tag,u=n.header,d=n.active,g=n.text,m=(0,o.Z)(n,f),v=(0,h.mx)(p()(i,{disabled:m.disabled,"dropdown-item":!c&&!u&&!g,active:d,"dropdown-header":u,"dropdown-divider":c,"dropdown-item-text":g}),s);return"button"===l&&(u?l="h6":c?l="div":m.href?l="a":g&&(l="span")),a.createElement(l,(0,r.Z)({type:"button"===l&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:v,onClick:this.onClick}))},t}(a.Component);m.propTypes=g,m.defaultProps={tag:"button",toggle:!0},m.contextType=d.D;const v=m},42365:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(87462),o=n(4942),i=n(63366),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),u=n(73935),p=n(94184),d=n.n(p),h=n(77420),f=n(80935),g=n(23663),m=["className","cssModule","right","tag","flip","modifiers","persist","positionFixed","container"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={tag:g.iC,children:l().node.isRequired,right:l().bool,flip:l().bool,modifiers:l().object,className:l().string,cssModule:l().object,persist:l().bool,positionFixed:l().bool,container:g.qW},b={flip:{enabled:!1}},x={up:"top",left:"left",right:"right",down:"bottom"},C=function(e){function t(){return e.apply(this,arguments)||this}(0,s.Z)(t,e);var n=t.prototype;return n.getRole=function(){return"listbox"===this.context.menuRole?"listbox":"menu"},n.render=function(){var e=this,t=this.props,n=t.className,o=t.cssModule,s=t.right,c=t.tag,l=t.flip,p=t.modifiers,f=t.persist,v=t.positionFixed,w=t.container,C=(0,i.Z)(t,m),R=(0,g.mx)(d()(n,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),o),E=c;if(f||this.context.isOpen&&!this.context.inNavbar){var D=(x[this.context.direction]||"bottom")+"-"+(s?"end":"start"),N=l?p:y(y({},p),b),P=!!v,M=a.createElement(h.ZP,{placement:D,modifiers:N,positionFixed:P},(function(t){var n=t.ref,o=t.style,i=t.placement,s=y(y({},e.props.style),o);return a.createElement(E,(0,r.Z)({tabIndex:"-1",role:e.getRole(),ref:function(t){n(t);var r=e.context.onMenuRef;r&&r(t)}},C,{style:s,"aria-hidden":!e.context.isOpen,className:R,"x-placement":i}))}));return w?u.createPortal(M,(0,g.U9)(w)):M}return a.createElement(E,(0,r.Z)({tabIndex:"-1",role:this.getRole()},C,{"aria-hidden":!this.context.isOpen,className:R,"x-placement":C.placement}))},t}(a.Component);C.propTypes=w,C.defaultProps={tag:"div",flip:!0},C.contextType=f.D;const R=C},32842:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(87462),o=n(63366),i=n(97326),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),u=n(94184),p=n.n(u),d=n(4942),h=n(42473),f=n.n(h),g=n(81385),m=n(67139),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,d.Z)((0,i.Z)((0,i.Z)(t)),"refHandler",(function(e){(0,m.k$)(t.props.innerRef,e),(0,m.DL)(t.props.setReferenceNode,e)})),t}(0,s.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){(0,m.k$)(this.props.innerRef,null)},n.render=function(){return f()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),(0,m.$p)(this.props.children)({ref:this.refHandler})},t}(a.Component);function y(e){return a.createElement(g.mq.Consumer,null,(function(t){return a.createElement(v,(0,r.Z)({setReferenceNode:t},e))}))}var w=n(80935),b=n(23663),x=n(97975),C=["className","color","cssModule","caret","split","nav","tag","innerRef"],R={caret:l().bool,color:l().string,children:l().node,className:l().string,cssModule:l().object,disabled:l().bool,onClick:l().func,"aria-haspopup":l().bool,split:l().bool,tag:b.iC,nav:l().bool},E=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,i.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.getRole=function(){return this.context.menuRole||this.props["aria-haspopup"]},n.render=function(){var e,t=this,n=this.props,i=n.className,s=n.color,c=n.cssModule,l=n.caret,u=n.split,d=n.nav,h=n.tag,f=n.innerRef,g=(0,o.Z)(n,C),m=g["aria-label"]||"Toggle Dropdown",v=(0,b.mx)(p()(i,{"dropdown-toggle":l||u,"dropdown-toggle-split":u,"nav-link":d}),c),w=void 0!==g.children?g.children:a.createElement("span",{className:"sr-only"},m);return d&&!h?(e="a",g.href="#"):h?e=h:(e=x.Z,g.color=s,g.cssModule=c),this.context.inNavbar?a.createElement(e,(0,r.Z)({},g,{className:v,onClick:this.onClick,"aria-expanded":this.context.isOpen,"aria-haspopup":this.getRole(),children:w})):a.createElement(y,{innerRef:f},(function(n){var o,i=n.ref;return a.createElement(e,(0,r.Z)({},g,((o={})["string"==typeof e?"ref":"innerRef"]=i,o),{className:v,onClick:t.onClick,"aria-expanded":t.context.isOpen,"aria-haspopup":t.getRole(),children:w}))}))},t}(a.Component);E.propTypes=R,E.defaultProps={color:"secondary","aria-haspopup":!0},E.contextType=w.D;const D=E},93379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},90569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},19216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);