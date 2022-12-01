"use strict";
(self["webpackChunkocl_bb_library"] = self["webpackChunkocl_bb_library"] || []).push([["js_components_GenericDashboardSetup_helpers_helpers_js"],{

/***/ "./js/components/GenericDashboardSetup/data/data.js":
/*!**********************************************************!*\
  !*** ./js/components/GenericDashboardSetup/data/data.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "education_text_box_data": () => (/* binding */ education_text_box_data),
/* harmony export */   "indicator_text_box_data": () => (/* binding */ indicator_text_box_data),
/* harmony export */   "public_transport_text_box_data": () => (/* binding */ public_transport_text_box_data),
/* harmony export */   "sustainability_text_box_data": () => (/* binding */ sustainability_text_box_data),
/* harmony export */   "sustainability_text_box_data_2": () => (/* binding */ sustainability_text_box_data_2),
/* harmony export */   "transport_mode_data": () => (/* binding */ transport_mode_data),
/* harmony export */   "travel_time_text_box_data": () => (/* binding */ travel_time_text_box_data),
/* harmony export */   "travel_time_text_box_data_2": () => (/* binding */ travel_time_text_box_data_2)
/* harmony export */ });
var indicator_text_box_data = [{
  number: {
    name: "Number of households whose main source of income is: Salaries/wages/commission",
    code: "GG.SOCR.5.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Salaries/wages/commission",
    code: "GG.SOCR.5.0"
  },
  endpoints: [900, 901]
}, {
  number: {
    name: "Number of households whose main source of income is: Income from a business",
    code: "GG.SOCR.6.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Income from a business",
    code: "GG.SOCR.6.0"
  },
  endpoints: [903, 904]
}, {
  number: {
    name: "Number of households whose main source of income is: Remittances (money received from people living elsewhere)",
    code: "GG.SOCR.7.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Remittances (money received from people living elsewhere)",
    code: "GG.SOCR.7.0"
  },
  endpoints: [906, 907]
}, {
  number: {
    name: "Number of households whose main source of income is: Pensions",
    code: "GG.SOCR.8.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Pensions",
    code: "GG.SOCR.8.0"
  },
  endpoints: [909, 910]
}, {
  number: {
    name: "Number of households whose main source of income is: Grants (include old-age grant here)	",
    code: "GG.SOCR.9.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Grants (include old-age grant here)	",
    code: "GG.SOCR.9.0"
  },
  endpoints: [912, 913]
}, {
  number: {
    name: "Number of households whose main source of income is: Sales of farming products and services	",
    code: "GG.SOCR.10.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Sales of farming products and services	",
    code: "GG.SOCR.10.0"
  },
  endpoints: [915, 916]
}, {
  number: {
    name: "Number of households whose main source of income is: Other income sources, e.g. rental income, interest	",
    code: "GG.SOCR.11.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: Other income sources, e.g. rental income, interest",
    code: "GG.SOCR.11.0"
  },
  endpoints: [918, 919]
}, {
  number: {
    name: "Number of households whose main source of income is: No income",
    code: "GG.SOCR.12.1"
  },
  percent: {
    name: "Proportion of households whose main source of income is: No income",
    code: "GG.SOCR.12.0"
  },
  endpoints: [921, 922]
}];
var sustainability_text_box_data = [{
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Electricity from mains",
    code: "EE.SOCR.14.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Electricity from mains",
    code: "EE.SOCR.14.1"
  },
  endpoints: [483, 484]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Other source of electricity (not from mains)",
    code: "EE.SOCR.15.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Other source of electricity (not from mains)",
    code: "EE.SOCR.15.1"
  },
  endpoints: [501, 502]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Gas",
    code: "EE.SOCR.16.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Gas",
    code: "EE.SOCR.16.1"
  },
  endpoints: [519, 520]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Paraffin",
    code: "EE.SOCR.17.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Paraffin",
    code: "EE.SOCR.17.1"
  },
  endpoints: [537, 538]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Wood",
    code: "EE.SOCR.18.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Wood",
    code: "EE.SOCR.18.1"
  },
  endpoints: [555, 556]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Coal",
    code: "EE.SOCR.19.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Coal",
    code: "EE.SOCR.19.1"
  },
  endpoints: [573, 574]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Candles",
    code: "EE.SOCR.20.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Candles",
    code: "EE.SOCR.20.1"
  },
  endpoints: [591, 592]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Animal Dung",
    code: "EE.SOCR.21.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Animal Dung",
    code: "EE.SOCR.21.1"
  },
  endpoints: [609, 610]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Solar Energy",
    code: "EE.SOCR.22.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Solar Energy",
    code: "EE.SOCR.22.1"
  },
  endpoints: [627, 628]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: Other",
    code: "EE.SOCR.23.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: Other",
    code: "EE.SOCR.23.1"
  },
  endpoints: [645, 646]
}, {
  percent: {
    name: "Proportion of population whose main source of energy/fuel is: None",
    code: "EE.SOCR.24.0"
  },
  number: {
    name: "Number of households whose main source of energy/fuel is: None",
    code: "EE.SOCR.24.1"
  },
  endpoints: [663, 664]
}];
var transport_mode_data = [{
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Walking",
    code: "TR.SOCR.4.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Walking",
    code: "TR.SOCR.4.0"
  },
  endpoints: [816]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Bicycle/motorcycle",
    code: "TR.SOCR.5.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Bicycle/motorcycle",
    code: "TR.SOCR.5.0"
  },
  endpoints: [819]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Taxi",
    code: "TR.SOCR.6.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Taxi",
    code: "TR.SOCR.6.0"
  },
  endpoints: [822]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Bus",
    code: "TR.SOCR.7.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Bus",
    code: "TR.SOCR.7.0"
  },
  endpoints: [825]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Train",
    code: "TR.SOCR.8.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Train",
    code: "TR.SOCR.8.0"
  },
  endpoints: [828]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Minibus/bus provided by institution/government and not paid for",
    code: "TR.SOCR.9.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Minibus/bus provided by institution/government and not paid for",
    code: "TR.SOCR.9.0"
  },
  endpoints: [831]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Vehicle hired by a group of parents/lift club",
    code: "TR.SOCR.10.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Vehicle hired by a group of parents/lift club",
    code: "TR.SOCR.10.0"
  },
  endpoints: [834]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Own car or other private vehicle or company car",
    code: "TR.SOCR.11.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Own car or other private vehicle or company car",
    code: "TR.SOCR.11.0"
  },
  endpoints: [837]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals travelling to education or work: Other transportation",
    code: "TR.SOCR.12.0"
  },
  number: {
    name: "Number of individuals travelling to education or work: Other transportation",
    code: "TR.SOCR.12.0"
  },
  endpoints: [840]
}];
var travel_time_text_box_data = [{
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals that take: 15 minutes or less to get to work",
    code: "TR.SOCR.14.0"
  },
  number: {
    name: "Number of individuals that take: 15 minutes or less to get to work",
    code: "TR.SOCR.14.0"
  },
  endpoints: [845]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals that take: 15-30 minutes to get to work",
    code: "TR.SOCR.15.0"
  },
  number: {
    name: "Number of individuals that take: 15-30 minutes to get to work",
    code: "TR.SOCR.15.0"
  },
  endpoints: [854]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals that take: 31-60 minutes to get to work",
    code: "TR.SOCR.16.0"
  },
  number: {
    name: "Number of individuals that take: 31-60 minutes to get to work",
    code: "TR.SOCR.16.0"
  },
  endpoints: [863]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals that take: 61-90 minutes to get to work",
    code: "TR.SOCR.17.0"
  },
  number: {
    name: "Number of individuals that take: 61-90 minutes to get to work",
    code: "TR.SOCR.17.0"
  },
  endpoints: [872]
}, {
  toggle_calculation: true,
  percent: {
    name: "Proportion of individuals that take: more than 90 minutes to get to work",
    code: "TR.SOCR.18.0"
  },
  number: {
    name: "Number of individuals that take: more than 90 minutes to get to work",
    code: "TR.SOCR.18.0"
  },
  endpoints: [881]
}];
var public_transport_text_box_data = [{
  barchart_by_year: true,
  number: {
    name: ["Number of individuals that spent Less Than 10% of Household Income on Public Transport", "Number of individuals that spent 10 - 20% of Household Income on Public Transport", "Number of individuals that spent 20 - 30% of Household Income on Public Transport", "Number of individuals that spent > 30% of Household Income on Public Transport"],
    code: ["TR.SOCR.19.0", "TR.SOCR.20.0", "TR.SOCR.21.0", "TR.SOCR.22.0"]
  },
  percent: {
    name: ["Proportion of individuals that spent Less Than 10% of Household Income on Public Transport", "Proportion of individuals that spent 10 - 20% of Household Income on Public Transport", "Proportion of individuals that spent 20 - 30% of Household Income on Public Transport", "Proportion of individuals that spent >30% of Household Income on Public Transport"],
    code: ["TR.SOCR.19.0", "TR.SOCR.20.0", "TR.SOCR.21.0", "TR.SOCR.22.0"]
  },
  endpoints: [1084, 1085, 1086, 1087]
}];
var travel_time_text_box_data_2 = [{
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Walking", "Number of individuals that take 15-30 minutes  to get to work: Walking", "Number of individuals that take 31-60 minutes  to get to work: Walking", "Number of individuals that take 61-90 minutes  to get to work: Walking", "Number of individuals that take more than 90 minutes  to get to work: Walking"],
    code: ["TR.SOCR.14.1", "TR.SOCR.15.1", "TR.SOCR.16.1", "TR.SOCR.17.1", "TR.SOCR.18.1"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Walking", "Proportion of individuals that take 15-30 minutes  to get to work: Walking", "Proportion of individuals that take 31-60 minutes  to get to work: Walking", "Proportion of individuals that take 61-90 minutes  to get to work: Walking", "Proportion of individuals that take more than 90 minutes  to get to work: Walking"],
    code: ["TR.SOCR.14.1", "TR.SOCR.15.1", "TR.SOCR.16.1", "TR.SOCR.17.1", "TR.SOCR.18.1"]
  },
  endpoints: [846, 855, 864, 873, 882]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Bicycle/motorcycle", "Number of individuals that take 15-30 minutes  to get to work: Bicycle/motorcycle", "Number of individuals that take 31-60 minutes  to get to work: Bicycle/motorcycle", "Number of individuals that take 61-90 minutes  to get to work: Bicycle/motorcycle", "Number of individuals that take more than 90 minutes  to get to work: Bicycle/motorcycle"],
    code: ["TR.SOCR.14.2", "TR.SOCR.15.2", "TR.SOCR.16.2", "TR.SOCR.17.2", "TR.SOCR.18.2"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Bicycle/motorcycle", "Proportion of individuals that take 15-30 minutes  to get to work: Bicycle/motorcycle", "Proportion of individuals that take 31-60 minutes  to get to work: Bicycle/motorcycle", "Proportion of individuals that take 61-90 minutes  to get to work: Bicycle/motorcycle", "Proportion of individuals that take more than 90 minutes  to get to work: Bicycle/motorcycle"],
    code: ["TR.SOCR.14.2", "TR.SOCR.15.2", "TR.SOCR.16.2", "TR.SOCR.17.2", "TR.SOCR.18.2"]
  },
  endpoints: [847, 856, 865, 874, 883]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Number of individuals that take 15-30 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Number of individuals that take 31-60 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Number of individuals that take 61-90 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Number of individuals that take more than 90 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi"],
    code: ["TR.SOCR.14.3", "TR.SOCR.15.3", "TR.SOCR.16.3", "TR.SOCR.17.3", "TR.SOCR.18.3"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Proportion of individuals that take 15-30 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Proportion of individuals that take 31-60 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Proportion of individuals that take 61-90 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi", "Proportion of individuals that take more than 90 minutes  to get to work: Minibus taxi/sedan taxi/bakkie taxi"],
    code: ["TR.SOCR.14.3", "TR.SOCR.15.3", "TR.SOCR.16.3", "TR.SOCR.17.3", "TR.SOCR.18.3"]
  },
  endpoints: [848, 857, 866, 875, 884]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Bus", "Number of individuals that take 15-30 minutes  to get to work: Bus", "Number of individuals that take 31-60 minutes  to get to work: Bus", "Number of individuals that take 61-90 minutes  to get to work: Bus", "Number of individuals that take more than 90 minutes  to get to work: Bus"],
    code: ["TR.SOCR.14.4", "TR.SOCR.15.4", "TR.SOCR.16.4", "TR.SOCR.17.4", "TR.SOCR.18.4"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Bus", "Proportion of individuals that take 15-30 minutes  to get to work: Bus", "Proportion of individuals that take 31-60 minutes  to get to work: Bus", "Proportion of individuals that take 61-90 minutes  to get to work: Bus", "Proportion of individuals that take more than 90 minutes  to get to work: Bus"],
    code: ["TR.SOCR.14.4", "TR.SOCR.15.4", "TR.SOCR.16.4", "TR.SOCR.17.4", "TR.SOCR.18.4"]
  },
  endpoints: [849, 858, 867, 876, 885]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Train", "Number of individuals that take 15-30 minutes  to get to work: Train", "Number of individuals that take 31-60 minutes  to get to work: Train", "Number of individuals that take 61-90 minutes  to get to work: Train", "Number of individuals that take more than 90 minutes  to get to work: Train"],
    code: ["TR.SOCR.14.5", "TR.SOCR.15.5", "TR.SOCR.16.5", "TR.SOCR.17.5", "TR.SOCR.18.5"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Train", "Proportion of individuals that take 15-30 minutes  to get to work: Train", "Proportion of individuals that take 31-60 minutes  to get to work: Train", "Proportion of individuals that take 61-90 minutes  to get to work: Train", "Proportion of individuals that take more than 90 minutes  to get to work: Train"],
    code: ["TR.SOCR.14.5", "TR.SOCR.15.5", "TR.SOCR.16.5", "TR.SOCR.17.5", "TR.SOCR.18.5"]
  },
  endpoints: [850, 859, 868, 877, 886]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Lift club by a group of people sharing a private vehicle", "Number of individuals that take 15-30 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Number of individuals that take 31-60 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Number of individuals that take 61-90 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Number of individuals that take more than 90 minutes  to get to work: Lift club by a group of people sharing a private vehicle"],
    code: ["TR.SOCR.14.6", "TR.SOCR.15.6", "TR.SOCR.16.6", "TR.SOCR.17.6", "TR.SOCR.18.6"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Lift club by a group of people sharing a private vehicle", "Proportion of individuals that take 15-30 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Proportion of individuals that take 31-60 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Proportion of individuals that take 61-90 minutes  to get to work: Lift club by a group of people sharing a private vehicle", "Proportion of individuals that take more than 90 minutes  to get to work: Lift club by a group of people sharing a private vehicle"],
    code: ["TR.SOCR.14.6", "TR.SOCR.15.6", "TR.SOCR.16.6", "TR.SOCR.17.6", "TR.SOCR.18.6"]
  },
  endpoints: [851, 860, 869, 878, 887]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Own car/other private vehicle/company vehicle", "Number of individuals that take 15-30 minutes  to get to work: Own car/other private vehicle/company vehicle", "Number of individuals that take 31-60 minutes  to get to work: Own car/other private vehicle/company vehicle", "Number of individuals that take 61-90 minutes  to get to work: Own car/other private vehicle/company vehicle", "Number of individuals that take more than 90 minutes  to get to work: Own car/other private vehicle/company vehicle"],
    code: ["TR.SOCR.14.7", "TR.SOCR.15.7", "TR.SOCR.16.7", "TR.SOCR.17.7", "TR.SOCR.18.7"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Own car/other private vehicle/company vehicle", "Proportion of individuals that take 15-30 minutes  to get to work: Own car/other private vehicle/company vehicle", "Proportion of individuals that take 31-60 minutes  to get to work: Own car/other private vehicle/company vehicle", "Proportion of individuals that take 61-90 minutes  to get to work: Own car/other private vehicle/company vehicle", "Proportion of individuals that take more than 90 minutes  to get to work: Own car/other private vehicle/company vehicle"],
    code: ["TR.SOCR.14.7", "TR.SOCR.15.7", "TR.SOCR.16.7", "TR.SOCR.17.7", "TR.SOCR.18.7"]
  },
  endpoints: [852, 861, 870, 879, 888]
}, {
  single_city_select: true,
  number: {
    name: ["Number of individuals that take 15 minutes or less to get to work: Other", "Number of individuals that take 15-30 minutes  to get to work: Other", "Number of individuals that take 31-60 minutes  to get to work: Other", "Number of individuals that take 61-90 minutes  to get to work: Other", "Number of individuals that take more than 90 minutes  to get to work: Other"],
    code: ["TR.SOCR.14.8", "TR.SOCR.15.8", "TR.SOCR.16.8", "TR.SOCR.17.8", "TR.SOCR.18.8"]
  },
  percent: {
    name: ["Proportion of individuals that take 15 minutes or less to get to work: Other", "Proportion of individuals that take 15-30 minutes  to get to work: Other", "Proportion of individuals that take 31-60 minutes  to get to work: Other", "Proportion of individuals that take 61-90 minutes  to get to work: Other", "Proportion of individuals that take more than 90 minutes  to get to work: Other"],
    code: ["TR.SOCR.14.8", "TR.SOCR.15.8", "TR.SOCR.16.8", "TR.SOCR.17.8", "TR.SOCR.18.8"]
  },
  endpoints: [853, 862, 871, 880, 889]
}];
var sustainability_text_box_data_2 = [{
  percent: {
    name: "Proportion of population who experience: Littering",
    code: "ENV.SOCR.1.0"
  },
  number: {
    name: "Number of households who experience: Littering",
    code: "ENV.SOCR.1.1"
  },
  endpoints: [1051, 1052]
}, {
  percent: {
    name: "Proportion of population who experience: Air Pollution",
    code: "ENV.SOCR.2.0"
  },
  number: {
    name: "Number of households who experience: Air Pollution",
    code: "ENV.SOCR.2.1"
  },
  endpoints: [1054, 1055]
}, {
  percent: {
    name: "Proportion of population who experience: Water Pollution",
    code: "ENV.SOCR.3.0"
  },
  number: {
    name: "Number of households who experience: Water Pollution",
    code: "ENV.SOCR.3.1"
  },
  endpoints: [1057, 1058]
}, {
  percent: {
    name: "Proportion of population who experience: Land Degradation",
    code: "ENV.SOCR.4.0"
  },
  number: {
    name: "Number of households who experience: Land Degradation",
    code: "ENV.SOCR.4.1"
  },
  endpoints: [1060, 1061]
}, {
  percent: {
    name: "Proportion of population who experience: Noise Pollution",
    code: "ENV.SOCR.5.0"
  },
  number: {
    name: "Number of households who experience: Noise Pollution",
    code: "ENV.SOCR.5.1"
  },
  endpoints: [1063, 1064]
}, {
  percent: {
    name: "Proportion of population who experience: Irregular or No Waste Removal",
    code: "ENV.SOCR.6.0"
  },
  number: {
    name: "Number of households who experience: Irregular or No Waste Removal",
    code: "ENV.SOCR.6.1"
  },
  endpoints: [1066, 1067]
}];
var education_text_box_data = [{
  percent: {
    name: "Proportion of population with: No schooling",
    code: "GG.SOCR.49.0"
  },
  number: {
    name: "Number of people with: No schooling",
    code: "GG.SOCR.49.1"
  },
  endpoints: [1093, 1094]
}, {
  percent: {
    name: "Proportion of population with: Less than primary completed",
    code: "GG.SOCR.50.0"
  },
  number: {
    name: "Number of people with: Less than primary completed",
    code: "GG.SOCR.50.1"
  },
  endpoints: [1096, 1097]
}, {
  percent: {
    name: "Proportion of population with: Primary completed",
    code: "GG.SOCR.51.0"
  },
  number: {
    name: "Number of people with: Primary completed",
    code: "GG.SOCR.51.1"
  },
  endpoints: [1099, 1100]
}, {
  percent: {
    name: "Proportion of population with: Secondary not completed",
    code: "GG.SOCR.52.0"
  },
  number: {
    name: "Number of people with: Secondary not completed",
    code: "GG.SOCR.52.1"
  },
  endpoints: [1102, 1103]
}, {
  percent: {
    name: "Proportion of population with: Secondary completed",
    code: "GG.SOCR.53.0"
  },
  number: {
    name: "Number of people with: Secondary completed",
    code: "GG.SOCR.53.1"
  },
  endpoints: [1105, 1105]
}, {
  percent: {
    name: "Proportion of population with: Tertiary education",
    code: "GG.SOCR.54.0"
  },
  number: {
    name: "Number of people with: Tertiary education",
    code: "GG.SOCR.54.1"
  },
  endpoints: [1108, 1109]
}];

/***/ }),

/***/ "./js/components/GenericDashboardSetup/helpers/helpers.js":
/*!****************************************************************!*\
  !*** ./js/components/GenericDashboardSetup/helpers/helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartHeights": () => (/* binding */ chartHeights),
/* harmony export */   "cityLabels": () => (/* binding */ cityLabels),
/* harmony export */   "combinationColors": () => (/* binding */ combinationColors),
/* harmony export */   "dChartTitles": () => (/* binding */ dChartTitles),
/* harmony export */   "echartTitles": () => (/* binding */ echartTitles),
/* harmony export */   "extendAbbreviation": () => (/* binding */ extendAbbreviation),
/* harmony export */   "fsChartTitles": () => (/* binding */ fsChartTitles),
/* harmony export */   "handleSelectChange": () => (/* binding */ handleSelectChange),
/* harmony export */   "hhiDropdownNames": () => (/* binding */ hhiDropdownNames),
/* harmony export */   "hiChartTitles": () => (/* binding */ hiChartTitles),
/* harmony export */   "ictChartTitles": () => (/* binding */ ictChartTitles),
/* harmony export */   "isArrayOfIndicatorCodes": () => (/* binding */ isArrayOfIndicatorCodes),
/* harmony export */   "isCombinationIndicator": () => (/* binding */ isCombinationIndicator),
/* harmony export */   "isNewApiIndicator": () => (/* binding */ isNewApiIndicator),
/* harmony export */   "isOldApiIndicator": () => (/* binding */ isOldApiIndicator),
/* harmony export */   "isSingleYearIndicator": () => (/* binding */ isSingleYearIndicator),
/* harmony export */   "isTextBoxIndicator": () => (/* binding */ isTextBoxIndicator),
/* harmony export */   "leChartTitles": () => (/* binding */ leChartTitles),
/* harmony export */   "peopleHouseholdColors": () => (/* binding */ peopleHouseholdColors),
/* harmony export */   "phChartTitles": () => (/* binding */ phChartTitles),
/* harmony export */   "populateSelect": () => (/* binding */ populateSelect),
/* harmony export */   "secondaryColors": () => (/* binding */ secondaryColors),
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "sustainabilityChartTitles": () => (/* binding */ sustainabilityChartTitles),
/* harmony export */   "sustainabilityColors": () => (/* binding */ sustainabilityColors),
/* harmony export */   "tableData": () => (/* binding */ tableData),
/* harmony export */   "tpChartTitles": () => (/* binding */ tpChartTitles),
/* harmony export */   "travelTimeColors": () => (/* binding */ travelTimeColors)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ "./js/components/GenericDashboardSetup/data/data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var peopleHouseholdColors = ['rgba(208, 209, 230, 1)', 'rgba(116, 169, 207, 1)', 'rgba(5, 112, 176, 1)', 'rgba(2, 56, 88, 1)'];
var secondaryColors = ['rgba(165, 215, 216, 1)', 'rgba(116, 169, 207, 1)', 'rgba(94, 201, 146, 1)'];
var combinationColors = ['#C8E6F6', '#D9F0D3', '#FFE79B', '#F4BB8C'];
var travelTimeColors = ["#C8E6F6", "#D9F0D3", "#FFE79B", "#F7CCA9", "#E2918E"];
var sustainabilityColors = ['#023858', '#BBF2B4', '#8BDE9E'];
var phChartTitles = {
  yAxes: ["Number of Households", "Average Number of People", "Percentage", "Population", "Population Density", "Percentage"],
  main: ["Total Households", "Household Size - Average Number of People per Household", "Percentage of Population Change", "Total Population in Metro", "Population Density - Population Size per Square km ", "Net migration rate"]
};
var hiChartTitles = {
  yAxes: ["Number of Households"],
  main: ["Main Source of Income"]
};
var echartTitles = {
  yAxes: ["Population", "Population", "Number of People Employed", "Percentage"],
  main: ["Number of people employed and seeking employment within the 15–66 year age group", "Number of Unemployed People", "Informal Sector Employment", "Unemployment Rate: Percentage of Unemployed Workers as a Proportion of the Total Labour Force"]
};
var dChartTitles = {
  yAxes: ["Percentage", "Percentage", "Percentage", "Percentage", "Percentage"],
  main: ["Formal Dwellings", "Informal Dwellings", "Dwellings Comparison", "Traditional Dwellings", "Other Dwellings"]
};
var leChartTitles = {
  yAxes: ["Percentage of Households", "Percentage of Population", "Average Number of Years", "Average Number of Years"],
  main: ["Public Healthcare Usage", "Medical Aid Coverage", "Average Male Life Expectancy", "Average Female Life Expectancy"],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "Stats SA Mid-Year Population Estimates", "Stats SA Mid-Year Population Estimates"]
};
var fsChartTitles = {
  yAxes: ["Percentage of Households", "Percentage of Households", "Percentage of Households", "Gini Coefficient", "HDI", "Percentage of Population Aged 15 and Over"],
  main: ["Adequate Access to Food", "Inadequate Access to Food", "Severely Inadequate Access to Food", "Gini Coefficient", "Human Development Index (HDI)", "Literacy Rate"],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "IHS Global Insight", "IHS Global Insight", "Stats SA General Household Survey"]
};
var ictChartTitles = {
  yAxes: ["Number of Connections", "Number of Connections", "Number of Connections"],
  main: ["Fixed Line Telephone Connections", "Mobile Telephone Connections", "Internet Connections"],
  sub_main: ["Per 100 000 Population", "Per 100 000 Population", "Per 100 000 Population"],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey"]
};
var tpChartTitles = function tpChartTitles(genericIndex) {
  if (genericIndex === 0) {
    return {
      yAxes: ["Percentage", "Percentage", "Percentage", "Percentage"],
      main: ["Spent Less Than 10% of Household Income on Public Transport", " Spent 10 - 20% of Household Income on Public Transport", "Spent 20 - 30% of Household Income on Public Transport", "Spent More Than 30% of Household Income on Public Transport"],
      top_main: ["Proportion of Households Who:", "Proportion of Households Who:", "Proportion of Households Who:", "Proportion of Households Who:"],
      source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey"]
    };
  } else {
    return {};
  }
};
var sustainabilityChartTitles = function sustainabilityChartTitles(dropdownName, genericIndex) {
  var chartTitles = {
    yAxes: "",
    main: "",
    source: ""
  };
  if (dropdownName === "Sustainability" && genericIndex === 2) {
    chartTitles = {
      yAxes: ["Percentage of Household"],
      main: ["Recycling Profile of Households in South Africa’s Major Metros (2019)"],
      source: ["Stats SA General Household Survey"]
    };
  }
  if (dropdownName === "Sustainability" && genericIndex === 3) {
    chartTitles = {
      yAxes: ["Days where PM2.5 levels exceed guidelines", "Days where PM10 levels\n\texceed guidelines"],
      main: ["Ambient Air Quality: PM2.5", "Ambient Air Quality: PM10"],
      source: ["South African Air Quality Information System (SAAQIS)", "South African Air Quality Information System (SAAQIS)"]
    };
  }
  return chartTitles;
};

//TODO: use select to alter cities labels within chart grid 
var handleSelectChange = function handleSelectChange(e, cities, setSelectedValues) {
  if (e.length < cities.length) {
    setSelectedValues(e);
  } else {}
};
var style = {
  control: function control(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      width: '60%',
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #4A4A4A',
        borderRadius: '28px'
      }
    });
  }
};
var cityLabels = function cityLabels(city) {
  switch (city) {
    case 'Buffalo City':
      return "BUF";
    case 'City of Cape Town':
      return "CPT";
    case 'City of Joburg':
      return "JHB";
    case 'Ekurhuleni':
      return "EKU";
    case "Mangaung":
      return "MAN";
    case "Msunduzi":
      return "MSU";
    case "Nelson Mandela Bay":
      return "NMA";
    case "Tshwane":
      return "TSH";
    case "eThekwini":
      return "ETH";
    case 'Eastern Cape':
      return "EC";
    case 'Free State':
      return "FS";
    case 'Gauteng':
      return "GP";
    case 'KwaZulu-Natal':
      return "KZN";
    case "Limpopo":
      return "LP";
    case "Mpumalanga":
      return "MP";
    case "North West":
      return "NW";
    case "Northern Cape":
      return "NC";
    case "Western Cape":
      return "WC";
    default:
      return city;
  }
};
var extendAbbreviation = function extendAbbreviation(city) {
  switch (city) {
    case "BUF":
      return 'Buffalo City';
    case "CPT":
      return 'City of Cape Town';
    case "JHB":
      return 'City of Joburg';
    case "EKU":
      return 'Ekurhuleni';
    case "MAN":
      return "Mangaung";
    case "MSU":
      return "Msunduzi";
    case "NMA":
      return "Nelson Mandela Bay";
    case "TSH":
      return "Tshwane";
    case "ETH":
      return "eThekwini";
    case "EC":
      return 'Eastern Cape';
    case "FS":
      return 'Free State';
    case "GP":
      return 'Gauteng';
    case "KZN":
      return 'KwaZulu-Natal';
    case "LP":
      return "Limpopo";
    case "MP":
      return "Mpumalanga";
    case "NW":
      return "North West";
    case "NC":
      return "Northern Cape";
    case "WC":
      return "Western Cape";
    default:
      return city;
  }
};
var populateSelect = function populateSelect(chartData, setOriginal, cityLabels, setSelected) {
  if (chartData[1].length !== 0) {
    var chartLabels = chartData.map(function (chart) {
      return chart[0].labels;
    });
    var abbrevLabels = chartLabels[0].map(function (city) {
      return cityLabels(city);
    });
    setSelected(abbrevLabels);
    setOriginal(abbrevLabels);
  } else {
    var manualGraph = ['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'Mangaung', 'Msunduzi', 'Nelson Mandela Bay', 'Tshwane', 'eThekwini'];
    var _abbrevLabels = manualGraph.map(function (city) {
      return cityLabels(city);
    });
    setSelected(_abbrevLabels);
    setOriginal(_abbrevLabels);
  }
};
var tableData = function tableData(table, cities, min, max) {
  var years = [2015, 2016, 2017, 2018, 2019, 2020];
  var labels = cities;
  var newTable = [];
  var byLabel = [];
  var byYear = [];
  var graphData = [];
  var labelsShallowCopy = _toConsumableArray(labels);
  var sortingShallowCopy = _toConsumableArray(labels.map(function (city) {
    return cityLabels(city);
  }));
  var abbrev = labelsShallowCopy.map(function (city) {
    return cityLabels(city);
  });
  var abbrevSorted = sortingShallowCopy.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  table.forEach(function (element) {
    if (element[0] === "City" || parseInt(element[1]) < min || parseInt(element[1]) > max) return;
    newTable.push(element);
  });
  labels.forEach(function (byCity) {
    var valuesByCity = [];
    newTable.forEach(function (element) {
      if (element[0] !== byCity) return;
      valuesByCity.push(element);
    });
    byLabel.push.apply(byLabel, valuesByCity);
  });
  years.forEach(function (year) {
    if (year < min || year > max) return;
    var valuesByYear = [];
    byLabel.forEach(function (valueSet) {
      if (valueSet[1] !== year.toString()) return;
      valuesByYear.push(valueSet);
    });
    byYear.push(valuesByYear);
  });
  graphData = byYear.map(function (year, index) {
    var values = year.map(function (value) {
      return value[2];
    });
    var indexes = [];
    abbrevSorted.forEach(function (label, labelIndex) {
      indexes.push(abbrev.indexOf(label));
    });
    var newValues = [];
    indexes.forEach(function (newIndex_1) {
      return newValues.push(values[newIndex_1]);
    });
    return {
      labels: abbrevSorted,
      values: newValues,
      color: peopleHouseholdColors[index],
      year: year[0][1]
    };
  });
  return graphData;
};
var isNewApiIndicator = function isNewApiIndicator(indicator) {
  /*Check if indicator id belongs to the new API
    if not returns false
    This can be expanded upon as the number and complexity of dashboards increase
    build this out as you add new charts for seperation of concerns and readability */

  var isNewApi = typeof indicator === "number";
  return isNewApi;
};
var isCombinationIndicator = function isCombinationIndicator(indicator) {
  /*Checks if indicator id is for a chart which represents a combination of
  other charts data within the same dashboard pages
  build this out as you add new charts for seperation of concerns and readability
  */

  var isCombinationChart = indicator === "combination";
  return isCombinationChart;
};
var isSingleYearIndicator = function isSingleYearIndicator(indicator) {
  var isSingleYearChart = indicator === "single year combination chart";
  return isSingleYearChart;
};
var isOldApiIndicator = function isOldApiIndicator(indicator) {
  /*Checks if indicator id belongs to the older API/api-temp
    build this out as you add new charts for seperation of concerns and readability */

  var isOldApi = typeof indicator === "string" && indicator.charAt(0) === "n";
  return isOldApi;
};
var isTextBoxIndicator = function isTextBoxIndicator(indicator) {
  /*Check if indicator id is for a non-chart entity within the ChartGrid Layout
    right now there is only a text box, but this could be any other type of component.
    build this out as you add new charts for seperation of concerns and readability */

  var isTextBox = typeof indicator === "string" && indicator === "indicator text box";
  return isTextBox;
};
var chartHeights = function chartHeights(dropdownName, genericIndex) {
  /* Create a conditional list of chart heights specified for each dashboard*/

  var heightByDropName = dropdownName === "Employment" || dropdownName === "Public Transport Spend" && genericIndex === 0 ? 170 : dropdownName === "Household Income" || dropdownName === "Education" || dropdownName === "Transport Mode" || (dropdownName === "Sustainability" || dropdownName === "Travel Time") && genericIndex !== 3 && genericIndex !== 2 || dropdownName === "Public Transport Spend" && genericIndex === 1 ? 100 : dropdownName === "Sustainability" && genericIndex === 3 ? 150 : dropdownName === "Sustainability" && genericIndex === 2 ? 60 : dropdownName === "Life Expectancy and Health" || dropdownName === "ICT Infrastructure" ? 150 : 210; // 210 is the fallback value if height not specified

  return heightByDropName;
};
var isArrayOfIndicatorCodes = function isArrayOfIndicatorCodes(indicatorObject, selectedDropDownChart) {
  var isArrayOfIndicatorNames = Array.isArray(hhiDropdownNames(indicatorObject[0])[selectedDropDownChart].numberName);
  if (isArrayOfIndicatorNames) {
    return true;
  } else {
    return false;
  }
};
var hhiDropdownNames = function hhiDropdownNames(input) {
  var options = input.map(function (item, index) {
    //Checks for array of shortnames or just one shortname string
    if (Array.isArray(item.number.name)) {
      var shortNames = item.number.name.map(function (shortNameInstance) {
        return shortNameInstance.split(": ");
      });
      return {
        //remove all zero index arrays 
        numberName: item.number.name,
        percentName: item.percent.name,
        shortName: shortNames.map(function (shortNameInstance) {
          return shortNameInstance[1];
        })[0],
        longName: shortNames.map(function (shortNameInstance) {
          return shortNameInstance[0];
        })[0],
        endpoints: item.endpoints,
        percentCode: item.percent.code,
        numberCode: item.number.code,
        index: index
      };
    } else {
      var shortName = item.number.name.split(": ");
      return {
        numberName: item.number.name,
        percentName: item.percent.name,
        shortName: shortName[1],
        longName: shortName[0],
        endpoints: item.endpoints,
        percentCode: item.percent.code,
        numberCode: item.number.code,
        index: index
      };
    }
  });
  return options;
};

/***/ })

}]);
//# sourceMappingURL=js_components_GenericDashboardSetup_helpers_helpers_js.js.map