"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[3644],{9365:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(67294),n=o(19755),a=o.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==i(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(n)?n:String(n)),r)}var n}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,o,n,i,p=(n=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(n);if(i){var o=u(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return s(this,e)});function f(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),p.call(this,e)}return t=f,(o=[{key:"componentDidUpdate",value:function(){0!==this.props.results.length&&this.loadGoogleVizApi(this.props.results,this.props.filterYear)}},{key:"loadGoogleVizApi",value:function(e,t){a().ajax({dataType:"script",cache:!0,url:"https://www.google.com/jsapi"}).done((function(){google.load("visualization","1",{packages:["controls","bar","corechart","geochart"],callback:function(){for(var o=e.table,r=[],n=[],a=0;a<o[0].length;a++)n.push(o[0][a]);r.push(n);for(var i=1;i<o.length;i++){var l=o[i],c=[];if(l[1].toString()===t){for(var s=0;s<l.length;s++)c.push(l[s]);r.push(c)}}google.visualization.arrayToDataTable(e.table),new google.visualization.ControlWrapper({controlType:"CategoryFilter",containerId:"categorySelector1",state:{selectedValues:e.cities},options:{filterColumnLabel:"City",ui:{labelStacking:"vertical",allowMultiple:!0,allowNone:!1,allowTyping:!1,caption:"Choose a city..."}}}),new google.visualization.ControlWrapper({controlType:"CategoryFilter",containerId:"categorySelector2",state:{selectedValues:e.years},options:{filterColumnLabel:"Year",ui:{labelStacking:"vertical",allowTyping:!1,allowMultiple:!1,allowNone:!1}}})}})}))}},{key:"render",value:function(){return r.createElement("div",{className:"ie-box-card box-height"},r.createElement("div",{className:"ie-box-card-header"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col ml-3"},"Select Data"))),r.createElement("div",{className:"mt-2 ml-2 mr-2"},r.createElement("div",{id:"categorySelector2"}),r.createElement("div",{id:"cat-spacer",className:"ml-2 mr-2 mt-4 mb-2 ie-small-border"}),r.createElement("div",{id:"categorySelector1"})),r.createElement("div",{className:"row mt-3"}))}}])&&l(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component)},33420:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(67294);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===n(a)?a:String(a)),r)}var a}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,o,n,u,p=(n=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(u){var o=s(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return l(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).reBindMap=t.reBindMap.bind(c(t)),t}return t=f,(o=[{key:"reBindMap",value:function(){2===this.props.results.plot_type&&this.props.changeHook(document.getElementById("map-selector").value,2)}},{key:"render",value:function(){var e=this,t=[];return 0!==this.props.results.length&&(2===this.props.results.plot_type&&(t=this.props.results.options_list.map((function(e,t){return r.createElement("option",{key:t,value:e.optid},e.optname)}))),1===this.props.results.plot_type&&(t=this.props.results.years_list.map((function(e,t){return r.createElement("option",{key:t,value:e.optid},e.optname)})))),r.createElement("div",{className:"ie-box-card"},r.createElement("div",{className:"ie-box-card-header"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col ml-3"},"Data on Map"))),r.createElement("div",{className:"col-0 pt-2 pl-1 pr-1"},r.createElement("div",{className:"ie-box-results mtp-2 mr-2 ml-2"},r.createElement("select",{id:"map-selector",className:"mt-2 mr-2 ie-dropdown-small",onChange:function(){return e.reBindMap()}},t))),r.createElement("div",{className:"row mt-3"}))}}])&&a(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component)},589:(e,t,o)=>{o.d(t,{Z:()=>_});var r=o(67294),n=o(19755),a=o.n(n),i=o(19192);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(n)?n:String(n)),r)}var n}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(y,e);var t,o,n,l,d=(n=y,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(l){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return u(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=d.call(this,e)).state={containerWidth:"100%",containerHeight:"450px"},t.handleResize=t.handleResize.bind(p(t)),t}return t=y,(o=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),0!==this.props.data.length&&this.loadGoogleVizApi(this.props.data,this.props.filterYear,"100%","100%")}},{key:"handleResize",value:function(){var e=document.getElementById("chart").getBoundingClientRect(),t=(e.height,e.width),o=document.getElementById("tableD").getBoundingClientRect(),r=(o.height,o.width,document.body.clientWidth),n=document.body.clientHeight;r<=768?(r=t,n="225px"):(r="100%",n="450px"),document.getElementById("chart").style.height=n,document.getElementById("chart").style.width=r}},{key:"loadGoogleVizApi",value:function(e,t,o,r){a().ajax({dataType:"script",cache:!0,url:"https://www.google.com/jsapi"}).done((function(){google.load("visualization","1",{packages:["controls","bar","corechart","geochart","line"],callback:function(){document.getElementById("chartPng").value="";for(var n=e.table,l={},c=[],s=[],u=0;u<n[0].length;u++)s.push(n[0][u]);c.push(s);for(var p=1;p<n.length;p++){var f=n[p],d=[];if(f[1].toString()===t){for(var y=0;y<f.length;y++)d.push(f[y]);c.push(d)}}2===e.plot_type&&(a()("#categorySelector2").show(),a()("#cat-spacer").show(),l={chartType:"Bar",dataTable:c,containerId:"chart",options:{stacked:!0,legend:{position:"right"},bars:"vertical",vAxis:{minValue:0},hAxis:{slantedText:!0},bar:{groupWidth:"99%"},tooltip:{isHtml:!0},chartArea:{left:"10%",right:"60%"},height:r,width:o,fontfamily:"Montserrat",fontsize:"10",series:e.series},view:{columns:e.view}}),1===e.plot_type&&(l={chartType:"Line",containerId:"chart",options:{legend:{position:"right"},axes:{y:{all:{range:{max:e.max,min:e.min>0?0:e.min-1}}}},hAxis:{slantedText:!0},height:r,lineWidth:4,interpolateNulls:!0,tooltip:{isHtml:!0},pointSize:5}});var m=new google.visualization.ChartWrapper(l),h={headerRow:"google-visualization-table-table",tableRow:"table-cell",oddTableRow:"table-cell",selectedTableRow:"table-cell",hoverTableRow:"table-cell",tableCell:"table-cell",table:"google-visualization-table-table"},b=new google.visualization.ChartWrapper({chartType:"Table",containerId:"tableD",options:{showRowNumber:!1,allowHtml:!0,cssClassNames:h}}),v=new google.visualization.ControlWrapper({controlType:"CategoryFilter",containerId:"categorySelector1",state:{selectedValues:e.cities},options:{filterColumnLabel:"City",ui:{labelStacking:"vertical",allowMultiple:!0,allowNone:!1,allowTyping:!1,caption:"Choose a city..."}}}),g=new google.visualization.ControlWrapper({controlType:"CategoryFilter",containerId:"categorySelector2",id:"dateSelector",state:{selectedValues:e.years},options:{filterColumnLabel:"Year",ui:{labelStacking:"vertical",allowTyping:!1,allowMultiple:!1,allowNone:!1}}}),w=google.visualization.arrayToDataTable(e.table),E=new google.visualization.Dashboard;2===e.plot_type?(E.bind([v,g],[m,b]),E.draw(w)):(g.setDataTable(w),g.draw(),b=new google.visualization.ChartWrapper({chartType:"Table",containerId:"tableD2",options:{allowHtml:!0,cssClassNames:h}}),w=new google.visualization.DataTable(e.table_plot),E.bind([v],[b]),E.draw(w)),google.visualization.events.addListener(b,"ready",(function(n){var l=b.getDataTable(),c=google.visualization.dataTableToCsv(l);if(1===e.plot_type){a()("#categorySelector2").hide(),a()("#cat-spacer").hide();for(var u=l=b.getDataTable(),p=u.getDistinctValues(0),f=[2],d=[],y=0;y<p.length;y++){var v=p[y];f.push({type:"number",label:v,calc:function(e){return function(t,o){return t.getValue(o,0)==e?t.getValue(o,1):null}}(v)}),d.push({type:"number",label:v,column:y+1,aggregation:google.visualization.data.sum})}(s=[]).push("Year");for(var g=0;g<d.length;g++)s.push(d[g].label);var w=new google.visualization.DataView(u);w.setColumns(f);var E=google.visualization.data.group(w,[0],d);m.setDataTable(E),m.draw();var O=new google.visualization.ChartWrapper({chartType:"Table",containerId:"tableD",options:{allowHtml:!0,cssClassNames:h}});O.setDataTable(E),O.draw(),l=O.getDataTable(),c=google.visualization.dataTableToCsv(l),a()("#map-selector").val(t);var j=b.getDataTable();p=j.getDistinctValues(0),f=[2],d=[];for(var T=0;T<p.length;T++){var S=p[T];f.push({type:"number",label:S,calc:function(e){return function(t,o){return t.getValue(o,0)==e?t.getValue(o,1):null}}(S)}),d.push({type:"number",label:S,column:T+1,aggregation:google.visualization.data.sum})}(w=new google.visualization.DataView(j)).setColumns(f);var C=L(E=google.visualization.data.group(w,[0],d)),z=new google.visualization.DataView(C);z.setColumns([0,Number(t)]);var k=new google.visualization.ChartWrapper({chartType:"GeoChart",containerId:"map",options:{region:"ZA",displayMode:"markers",resolution:"provinces",theme:"material",colorAxis:{colors:["#FED976","#FC4E2A","#800026"]},height:r,width:o,tooltip:{isHtml:!0},keepAspectRatio:!0}});k.setDataTable(z),k.draw(),a()("#map-selector").on("change",(function(e){e.preventDefault();for(var t=Number(document.getElementById("map-selector").value),n=b.getDataTable(),i=n.getDistinctValues(0),l=[2],c=[],s=0;s<i.length;s++){var u=i[s];l.push({type:"number",label:u,calc:function(e){return function(t,o){return t.getValue(o,0)==e?t.getValue(o,1):null}}(u)}),c.push({type:"number",label:u,column:s+1,aggregation:google.visualization.data.sum})}var p=new google.visualization.DataView(n);p.setColumns(l);var f=L(google.visualization.data.group(p,[0],c)),d=new google.visualization.DataView(f);d.setColumns([0,Number(t)]);var y=new google.visualization.ChartWrapper({chartType:"GeoChart",containerId:"map",options:{region:"ZA",displayMode:"markers",resolution:"provinces",theme:"material",colorAxis:{colors:["#FED976","#FC4E2A","#800026"]},height:r,width:o,tooltip:{isHtml:!0},keepAspectRatio:!0}});y.setDataTable(d),y.draw(),a()("#map-selector").val(t)}))}var P=s.join(",")+"\n"+c+"\n";document.getElementById("csv").value=P;var D=document.createElement("div");D.setAttribute("style","width:2000px;height:800px;font-size:10px,fontFamily:Montserrat,visibility:hidden"),document.body.appendChild(D);var R={};if(2===e.plot_type){R={chartType:"Bar",dataTable:b.getDataTable(),options:{stacked:!0,legend:{position:"right"},bars:"vertical",vAxis:{minValue:0},hAxis:{slantedText:!0},bar:{groupWidth:"99%"},tooltip:{isHtml:!0},chartArea:{left:"10%",right:"60%"},height:"100%",width:"100%",fontfamily:"Montserrat",fontsize:"10",series:e.series},view:{columns:e.view}},(W=new google.visualization.ChartWrapper(R)).draw(D);var _=e.table[0][2],x=b.getDataTable(),N=new google.visualization.DataView(x);N.setColumns([0,_]);var B=new google.visualization.ChartWrapper({chartType:"GeoChart",containerId:"map",options:{region:"ZA",displayMode:"markers",resolution:"provinces",theme:"material",colorAxis:{colors:["#FED976","#FC4E2A","#800026"]},height:r,width:o,tooltip:{isHtml:!0},keepAspectRatio:!0}});B.setDataTable(N),B.draw(),a()("#map-selector").on("change",(function(e){e.preventDefault();var t=Number(document.getElementById("map-selector").value);t+=1;var n=b.getDataTable(),a=new google.visualization.DataView(n);a.setColumns([0,t]);var i=new google.visualization.ChartWrapper({chartType:"GeoChart",containerId:"map",options:{region:"ZA",displayMode:"markers",resolution:"provinces",theme:"material",colorAxis:{colors:["#FED976","#FC4E2A","#800026"]},height:r,width:o,tooltip:{isHtml:!0},keepAspectRatio:!0}});i.setDataTable(a),i.draw()}))}if(1===e.plot_type){for(var V=l=b.getDataTable(),A=V.getDistinctValues(0),I=(f=[2],d=[],0);I<A.length;I++)v=A[I],f.push({type:"number",label:v,calc:function(e){return function(t,o){return t.getValue(o,0)==e?t.getValue(o,1):null}}(v)}),d.push({type:"number",label:v,column:I+1,aggregation:google.visualization.data.sum});R={chartType:"Line",options:{legend:{position:"right"},axes:{y:{all:{range:{min:0}}}},hAxis:{slantedText:!0},height:"100%",width:"100%",lineWidth:4,interpolateNulls:!0,tooltip:{isHtml:!0},pointSize:5}};var M=new google.visualization.DataView(V);M.setColumns(f);var W,F=google.visualization.data.group(M,[0],d);(W=new google.visualization.ChartWrapper(R)).setDataTable(F),W.draw(D)}function L(e){for(var t=[],o=0;o<e.getNumberOfRows();o++){for(var r=[],n=0;n<e.getNumberOfColumns();n++)r.push(e.getValue(o,n));t.push(r)}var a=new google.visualization.DataTable;a.addColumn("string",e.getColumnLabel(0)),a.addRows(e.getNumberOfColumns()-1),n=1;for(var i=0;i<e.getNumberOfColumns()-1;i++){var l=e.getColumnLabel(n);a.setValue(i,0,l),n++}for(var c=0;c<t.length;c++){r=t[c],a.addColumn("number",r[0]);for(var s=0,u=1;u<r.length;u++)a.setValue(s,c+1,r[u]),s++}return a}google.visualization.events.addListener(W,"ready",(function(e){var t=D.children[0].children[0].children[0].outerHTML,o=document.querySelector("canvas"),r=o.getContext("2d");i.ZP.fromString(r,t).start();var n=o.toDataURL("image/png");document.getElementById("chartPng").value=n,document.body.removeChild(D)}))}))}})}))}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{id:"chart",style:{fontSize:"9px",fontFamily:"Montserrat",fontWeight:"500"}}),r.createElement("input",{type:"hidden",id:"chartPng"}))}}])&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.PureComponent);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==y(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(n)?n:String(n)),r)}var n}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,o,n,i,l=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var o=v(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return b(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),l.call(this,e)}return t=c,(o=[{key:"componentDidMount",value:function(){0!==this.props.results.length&&this.loadGoogleVizApi(this.props.results,this.props.filterYear)}},{key:"componentDidUpdate",value:function(){0!==this.props.results.length&&this.loadGoogleVizApi(this.props.results,this.props.filterYear)}},{key:"loadGoogleVizApi",value:function(e,t){a().ajax({dataType:"script",cache:!0,url:"https://www.google.com/jsapi"}).done((function(){google.load("visualization","1",{packages:["corechart"],callback:function(){var o=new google.visualization.DataTable;e=e.table;for(var r=0;r<e[0].length;r++)o.addColumn("string",e[0][r]+"<br/><br/>");for(var n=1;n<e.length;n++){var a=e[n],i=[];if(a[1].toString()===t){for(var l=0;l<a.length;l++)i.push(a[l].toString());o.addRow(i)}}}})}))}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{id:"tableD"}),r.createElement("div",{id:"tableD2",style:{display:"none"}}))}}])&&m(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==w(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(n)?n:String(n)),r)}var n}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,o,n,i,l=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(i){var o=S(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={containerWidth:"100%",containerHeight:"450px"},t.handleResize=t.handleResize.bind(T(t)),t}return t=c,(o=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.handleResize),0!==this.props.geo.length&&this.loadGoogleVizApi(this.props.geo,this.props.filterYear,this.props.filter,"100%","100%")}},{key:"handleResize",value:function(){var e=document.body.clientWidth,t=document.body.clientHeight,o=document.getElementById("map").getBoundingClientRect(),r=(o.height,o.width);e<=768?(e=r,t="225px"):(e="100%",t="450px"),document.getElementById("map").style.height=t,document.getElementById("map").style.width=e,this.props.geo.length}},{key:"loadGoogleVizApi",value:function(e,t,o,r,n){a().ajax({dataType:"script",cache:!0,url:"https://www.google.com/jsapi"}).done((function(){google.load("visualization","1",{packages:["controls","bar","corechart","geochart","table"],callback:function(){var r,n=e.table;r="NA"===o?n[0][2]:o;var a=0,i=[],l=[];l.push(n[0][0]);for(var c=0;c<=n[0].length-1;c++)"Year"!==n[0][c].toString()&&n[0][c].toString()===r&&(a=c,l.push(n[0][c]));i.push(l);for(var s=1;s<=n.length-1;s++){var u=n[s];u[1].toString()===t&&i.push([u[0],u[a]])}}})}))}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{id:"map",style:{fontSize:"9px",fontFamily:"Montserrat",fontWeight:"500",marginTop:"0px"}}))}}])&&E(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function k(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==z(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===z(n)?n:String(n)),r)}var n}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function D(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,o,n,i,l=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(i){var o=R(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return D(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={csv:[]},t}return t=c,(o=[{key:"componentDidMount",value:function(){this.props.results.length>0&&this.loadGoogleVizApi(this.props.results,this.props.filterYear)}},{key:"componentDidUpdate",value:function(){0!==this.props.results.length&&this.loadGoogleVizApi(this.props.results,this.props.filterYear)}},{key:"loadGoogleVizApi",value:function(e,t){a().ajax({dataType:"script",cache:!0,url:"https://www.google.com/jsapi"}).done((function(){google.load("visualization","1",{packages:["controls","bar","corechart","geochart"],callback:function(){var o=new google.visualization.DataTable;e=e.table;for(var r=[],n=[],a=0;a<=e[0].length-1;a++)n.push(e[0][a]);r.push(n);for(var i=1;i<=e.length-1;i++){var l=e[i],c=[];if(l[1].toString()===t){for(var s=0;s<l.length;s++)c.push(l[s].toString());r.push(c)}}o=new google.visualization.DataTable(document.getElementById("table")),google.visualization.dataTableToCsv(o)}})}))}},{key:"renderDataSet",value:function(e,t){switch(e){case"table":return r.createElement(g,{results:this.props.results,key:e,filterYear:this.props.filterYear});case"chart":return r.createElement(d,{data:this.props.results,key:e,filterYear:this.props.filterYear});case"map":return r.createElement(C,{geo:this.props.results,key:e,filterYear:this.props.filterYear,filter:t})}}},{key:"download",value:function(e){switch(e){case"table":this.downloadTable();break;case"chart":this.downloadChart()}}},{key:"downloadTable",value:function(){var e="data:application/csv;charset=utf-8,"+encodeURIComponent(document.getElementById("csv").value);this.downloadData(e,"data.csv")}},{key:"downloadData",value:function(e,t){var o=document.createElement("a");o.download=t,o.href=e,o.target="_blank",document.body.appendChild(o),o.click((function(e){e.preventDefault(),document.body.removeChild(o)}))}},{key:"downloadChart",value:function(){var e=document.getElementById("chartPng").value;this.downloadData(e,"chart.png")}},{key:"render",value:function(){var e=this,t="";return"map"!==this.props.resultType&&(t=r.createElement("div",{className:"ie-button-download",onClick:function(){return e.download(e.props.resultType)}},"Download")),r.createElement("div",{id:"dashboard",style:{width:"100%"}},r.createElement("div",{id:"card",className:"ie-box-card"},r.createElement("div",{className:"ie-box-card-header"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col ml-3"},this.props.resultTitle),r.createElement("div",{className:"col-0 mt-2 mr-4 float-right"},t))),r.createElement("div",{className:"col ie-table"},r.createElement("div",{className:"mt-2 ml-3 mb-4"},this.renderDataSet(this.props.resultType,this.props.filter)),r.createElement("input",{type:"hidden",id:"csv"}),r.createElement("canvas",{style:{display:"none"}}))))}}])&&k(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component)},94341:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(67294),n=o(19755),a=o.n(n),i=(o(40686),o(50450));function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(n)?n:String(n)),r)}var n}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(y,e);var t,o,n,l,d=(n=y,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(l){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return u(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=d.call(this,e)).state={loader:!0},t.resetForm=t.resetForm.bind(p(t)),t.filterData=t.filterData.bind(p(t)),t}return t=y,(o=[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({loader:!1})}.bind(this),5e3),a()("#selector").select2({placeholder:"Empty"}),a()("#selector").on("select2:select",(function(e){document.getElementById("selector").value>0?document.getElementById("button-search").classList.remove("ie-button-inactive"):document.getElementById("button-search").classList.add("ie-button-inactive")}))}},{key:"resetForm",value:function(){console.log("reset"),a()("#selector").select2("val",0),document.getElementById("button-search").classList.add("ie-button-inactive"),this.props.toggle(!1)}},{key:"filterData",value:function(){var e=document.getElementById("selector").value;console.log("filtered",e),this.props.filterHook(e)}},{key:"render",value:function(){var e=this;console.log("current option",this.props.datasetOptions);var t=this.props.datasetOptions.map((function(e,t){return r.createElement("option",{key:t,value:e[0]},e[1])})),o=this.props.datasetOptions.map((function(t,o){if(t[0]===e.props.indicator_id)return r.createElement("option",{key:o,value:t[0]},t[1])}));return r.createElement("div",{className:"row"},this.state.loader?r.createElement(i.u_,{id:"loader",isOpen:this.state.loader,className:"modal-dialog-centered loader"},r.createElement(i.fe,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-2"}),r.createElement("div",{className:"col-0 ml-3 pt-4"},r.createElement(i.$j,{type:"grow",color:"secondary",size:"sm"}),r.createElement(i.$j,{type:"grow",color:"success",size:"sm"}),r.createElement(i.$j,{type:"grow",color:"danger",size:"sm"}),r.createElement(i.$j,{type:"grow",color:"warning",size:"sm"})),r.createElement("div",{className:"col-0 pt-4 pl-4 float-left"},"Loading Content...")),r.createElement("br",null))):"",r.createElement("div",{className:"col-6"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col ie-element-label"},"Choose Your Indicator:")),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("select",{id:"selector",className:"ie-dropdown mb-2",onChange:this.enableFilter},o.length?o:r.createElement("option",{value:"0"},"Empty"),t))),r.createElement("div",{className:"ie-spacer"}),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-6"},r.createElement("div",{id:"button-search",className:"ie-button-search ie-button-search-explorer ie-button-inactive",onClick:this.filterData},"Search")),r.createElement("div",{className:"col-6"},r.createElement("div",{className:"ie-button-reset",onClick:this.resetForm},"Reset Form")))),r.createElement("div",{className:"col-5 explainer-text"},"The data explorer provides access to the different indicators used by the South African Cities Network in the State of Cities Report."))}}])&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.Component)}}]);