"use strict";(self.webpackChunkocl_bb_library=self.webpackChunkocl_bb_library||[]).push([[2408,7644],{87644:(e,r,t)=>{t.d(r,{L6:()=>s,pl:()=>f,pu:()=>m,zH:()=>u});var n=t(67294);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,c,i=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=(0,n.createContext)(null),i=(0,n.createContext)(null),l=(0,n.createContext)(null),u=function(){return(0,n.useContext)(c)},s=function(){return(0,n.useContext)(i)},m=function(){return(0,n.useContext)(l)},f=function(e){var r=e.children,t=o((0,n.useState)(!1),2),a=t[0],u=t[1],s=o((0,n.useState)([{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1},{errorThrown:!1}]),2),m=s[0],f=s[1];return n.createElement(c.Provider,{value:{selectOpen:a,setSelect:u}},n.createElement(i.Provider,{value:function(){a&&u(!1)}},n.createElement(l.Provider,{value:{error:m,setError:f}},r)))}},32408:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var n=t(67294),o=t(26623),a=t(87644),c=(0,n.lazy)((function(){return Promise.all([t.e(6103),t.e(6436),t.e(4909),t.e(6239)]).then(t.bind(t,95671))})),i=(0,n.lazy)((function(){return Promise.all([t.e(7526),t.e(6132)]).then(t.bind(t,98292))})),l=(0,n.lazy)((function(){return Promise.all([t.e(7526),t.e(6103),t.e(1762),t.e(8615),t.e(6436),t.e(2547),t.e(6675),t.e(883)]).then(t.bind(t,59682))}));const u=function(){var e={dropdownMenu:[{name:"Service Delivery",href:"socr#/service_delivery",active:!1},{name:"Citizen Engagement",href:"socr#/citizen_engagement",active:!1},{name:"Municipal Human Resources",href:"socr#/human_resources",active:!1},{name:"People and Households",href:"socr#/people_household",active:!1},{name:"Employment",href:"socr#/employment",active:!1},{name:"Dwellings",href:"socr#/dwellings",active:!1},{name:"Household Income",href:"socr#/household_income",active:!1},{name:"Food Security, Literacy and Inequality",href:"socr#/food_security",active:!0},{name:"Life Expectancy and Health",href:"socr#/life_expectancy",active:!1},{name:"Education",href:"socr#/education",active:!1},{name:"Sustainability",href:"socr#/sustainability",active:!1},{name:"ICT Infrastructure",href:"socr#/infrastructure",active:!1},{name:"Transport Mode",href:"socr#/transport_mode",active:!1},{name:"Public Transport Spend",href:"socr#/public_transport_spend",active:!1},{name:"Travel Time",href:"socr#/travel_time",active:!1}]};return n.createElement(a.pl,null,n.createElement("div",{className:"socr--home",style:{backgroundColor:"white",overflowX:"hidden"}},n.createElement(i,{logoHide:!1,box_shadow:!0}),n.createElement(l,{indicator_ids:[1069,1072,1075,"n2","n3",959],minYear:2015,maxYear:2018,subNavContent:e,gridItems:6,dropdownName:e.dropdownMenu[7].name,colors:o.Rv}),n.createElement(c,null)))}}}]);