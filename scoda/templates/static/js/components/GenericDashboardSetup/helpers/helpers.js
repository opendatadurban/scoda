import axios from "axios"
import { indicator_text_box_data } from "../data/data"

export const peopleHouseholdColors = [
  'rgba(208, 209, 230, 1)',
  'rgba(116, 169, 207, 1)',
  'rgba(5, 112, 176, 1)',
  'rgba(2, 56, 88, 1)'
]

export const greenGradientColors = [
  '#B7E0DE',
  '#6ABFBB',
  '#2D9B96',
  '#0F7671',
  '#0F7671'
]

export const orangeGradientColors = [
  '#FFD0B7',
  '#FFAD81',
  '#EE702D',
  '#D44F08',
  '#D44F08'
]

export const secondaryColors = [
  'rgba(165, 215, 216, 1)',
  'rgba(116, 169, 207, 1)',
  'rgba(94, 201, 146, 1)'
]

export const combinationColors = [
  '#C8E6F6',
  '#D9F0D3',
  '#FFE79B',
  '#F4BB8C'
]

export const travelTimeColors = [
  "#C8E6F6",
  "#D9F0D3",
  "#FFE79B",
  "#F7CCA9",
  "#E2918E"
]

export const sustainabilityColors = [
  '#023858',
  '#BBF2B4',
  '#8BDE9E'
]

export const ceChartTitles = {
  yAxes: ["Number of People", "Number of People", "Number of People", "Number of People"],
  main: ["National Election: Voter Turnout", "National Election: Registered Voters",
    "Local Election: Voter Turnout", "Local Election: Registered Voters"]
}

export const sdChartTitles = {
  yAxes: ["Percent of Households", "Percent of Households", "No. of Households", "Percent of Households", "Percent of Households", "No. of Domestic Units"],
  main: ["Households: Access to Basic Water Supply", "Households: Access to Basic Sanitation",
    "Total Number of Households/Municipality", "Households: Access to Electricity",
    "Households: Access to Refuse Removal", "Units Receiving Free Electricity"]
}

export const phChartTitles = {
  yAxes: ["Number of Households", "Average Number of People", "Percentage", "Population", "Population Density", "Percentage"],
  main: ["Total Households", "Household Size - Average Number of People per Household", "Percentage of Population Change",
    "Total Population in Metro", "Population Density - Population Size per Square km ", "Net migration rate"]
}

export const hiChartTitles = {
  yAxes: ["Number of Households"],
  main: ["Main Source of Income"]
}

export const echartTitles = {
  yAxes: ["Population", "Population", "Number of People Employed", "Percentage"],
  main: ["Number of people employed and seeking employment within the 15–66 year age group", "Number of Unemployed People", "Informal Sector Employment", "Unemployment Rate: Percentage of Unemployed Workers as a Proportion of the Total Labour Force"]
}

export const dChartTitles = {
  yAxes: ["Percentage", "Percentage", "Percentage", "Percentage", "Percentage"],
  main: ["Formal Dwellings", "Informal Dwellings", "Dwellings Comparison", "Traditional Dwellings", "Other Dwellings"]
}

export const leChartTitles = {
  yAxes: ["Percentage of Households", "Percentage of Population", "Average Number of Years", "Average Number of Years"],
  main: ["Public Healthcare Usage", "Medical Aid Coverage", "Average Male Life Expectancy", "Average Female Life Expectancy",],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey",
    "Stats SA Mid-Year Population Estimates", "Stats SA Mid-Year Population Estimates"]
}

export const fsChartTitles = {
  yAxes: ["Percentage of Households", "Percentage of Households", "Percentage of Households",
    "Gini Coefficient", "HDI", "Percentage of Population Aged 15 and Over"],
  main: ["Adequate Access to Food", "Inadequate Access to Food", "Severely Inadequate Access to Food",
    "Gini Coefficient", "Human Development Index (HDI)", "Literacy Rate"],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey",
    "Calculated from Stats SA General Household Survey", "IHS Global Insight",
    "IHS Global Insight", "Stats SA General Household Survey"]
}

export const mhrChartTitles = {
  yAxes: ["Number of Posts", "Number of Vaccibes", "", "Number of Vaccines"],
  main: ["Total number of municipal posts", "Municipal Management Vacancies", "Municipal Post Breakdown: Indicators",
    "Number of Senior Management Vacancies",]
}

export const ictChartTitles = {
  yAxes: ["Number of Connections", "Number of Connections", "Number of Connections"
  ],
  main: ["Fixed Line Telephone Connections", "Mobile Telephone Connections",
    "Internet Connections"],
  sub_main: ["Per 100 000 Population", "Per 100 000 Population", "Per 100 000 Population"],
  source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey",
    "Calculated from Stats SA General Household Survey"]
}

export const tpChartTitles = (genericIndex) => {

  if (genericIndex === 0) {
    return {
      yAxes: ["Percentage", "Percentage", "Percentage", "Percentage"],
      main: ["Spent Less Than 10% of Household Income on Public Transport", " Spent 10 - 20% of Household Income on Public Transport",
        "Spent 20 - 30% of Household Income on Public Transport", "Spent More Than 30% of Household Income on Public Transport"],
      top_main: ["Proportion of Households Who:", "Proportion of Households Who:",
        "Proportion of Households Who:", "Proportion of Households Who:"],
      source: ["Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey",
        "Calculated from Stats SA General Household Survey", "Calculated from Stats SA General Household Survey"]
    }
  } else {
    return {}
  }

}

export const sustainabilityChartTitles = (dropdownName, genericIndex) => {
  let chartTitles = { yAxes: "", main: "", source: "" }

  if (dropdownName === "Sustainability" && genericIndex === 2) {
    chartTitles = {
      yAxes: [`Percentage of Household`],
      main: ["Recycling Profile of Households in South Africa’s Major Metros (2019)"],
      source: ["Stats SA General Household Survey"]
    }
  }
  if (dropdownName === "Sustainability" && genericIndex === 3) {
    chartTitles = {
      yAxes: ["Days where PM2.5 levels exceed guidelines", "Days where PM10 levels\n\texceed guidelines"],
      main: ["Ambient Air Quality: PM2.5",
        "Ambient Air Quality: PM10"],
      source: ["South African Air Quality Information System (SAAQIS)",
        "South African Air Quality Information System (SAAQIS)"]
    }
  }

  return chartTitles
}

//TODO: use select to alter cities labels within chart grid 
export const handleSelectChange = (e, cities, setSelectedValues) => {

  if (e.length < cities.length) {
    setSelectedValues(e)
  } else {

  }
}

export const style = {
  control: (base) => ({
    ...base,
    width: '60%',
    border: '1px solid #4A4A4A',
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
    }
  })
}

export const cityLabels = city => {
  switch (city) {
    case 'Buffalo City':
      return "BUF";
    case 'City of Cape Town':
      return "CPT"
    case 'City of Joburg':
      return "JHB"
    case 'Ekurhuleni':
      return "EKU"
    case "Mangaung":
      return "MAN"
    case "Msunduzi":
      return "MSU"
    case "Nelson Mandela Bay":
      return "NMA"
    case "Tshwane":
      return "TSH"
    case "eThekwini":
      return "ETH"
    case 'Eastern Cape':
      return "EC";
    case 'Free State':
      return "FS"
    case 'Gauteng':
      return "GP"
    case 'KwaZulu-Natal':
      return "KZN"
    case "Limpopo":
      return "LP"
    case "Mpumalanga":
      return "MP"
    case "North West":
      return "NW"
    case "Northern Cape":
      return "NC"
    case "Western Cape":
      return "WC"
    default:
      return city
  }
}

export const extendAbbreviation = city => {
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
      return city
  }
}

export const populateSelect = (chartData, setOriginal, cityLabels, setSelected) => {

  if (chartData[1].length !== 0) {

    const chartLabels = chartData.map(chart => {
      return chart[0].labels
    })

    const abbrevLabels = chartLabels[0].map(city => {
      return cityLabels(city)
    })

    setSelected(abbrevLabels)
    setOriginal(abbrevLabels)
  } else {

    const manualGraph = ['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'Mangaung', 'Msunduzi', 'Nelson Mandela Bay', 'Tshwane', 'eThekwini']

    const abbrevLabels = manualGraph.map(city => {
      return cityLabels(city)
    })

    setSelected(abbrevLabels)
    setOriginal(abbrevLabels)
  }
}


export const tableData = (table, cities, min, max) => {

  const years = [2015, 2016, 2017, 2018, 2019, 2020]
  const labels = cities
  let newTable = []
  let byLabel = []
  let byYear = []
  let graphData = []

  let labelsShallowCopy = [...labels]
  let sortingShallowCopy = [...labels.map(city => cityLabels(city))]
  let abbrev = labelsShallowCopy.map(city => cityLabels(city))
  let abbrevSorted = sortingShallowCopy.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  })

  table.forEach(element => {
    if (element[0] === "City" || (parseInt(element[1]) < min || parseInt(element[1]) > max)) return
    newTable.push(element)
  });

  labels.forEach((byCity) => {
    let valuesByCity = []

    newTable.forEach((element) => {
      if (element[0] !== byCity) return

      valuesByCity.push(element)
    })

    byLabel.push(...valuesByCity)
  })

  years.forEach((year) => {

    if (year < min || year > max) return

    let valuesByYear = []

    byLabel.forEach(valueSet => {

      if (valueSet[1] !== year.toString()) return

      valuesByYear.push(valueSet)
    });

    byYear.push(valuesByYear)
  })


  graphData = byYear.map((year, index) => {

    const values = year.map((value) => {

      return value[2]
    })

    let indexes = []

    abbrevSorted.forEach((label, labelIndex) => {

      indexes.push(abbrev.indexOf(label))
    })

    let newValues = []

    indexes.forEach((newIndex_1) => newValues.push(values[newIndex_1]))
    return { labels: abbrevSorted, values: newValues, color: peopleHouseholdColors[index], year: year[0][1] }
  })

  return graphData
}

export const isNewApiIndicator = (indicator) => {

  /*Check if indicator id belongs to the new API
    if not returns false
    This can be expanded upon as the number and complexity of dashboards increase
    build this out as you add new charts for seperation of concerns and readability */

  const isNewApi = (typeof (indicator) === "number")

  return isNewApi
}

export const getTransportModePercentages = (a, b, c, d, e, f) => {
  let endpoints = [
    `${f}${a}`,
    `${f}${b}`,
    `${f}${c}`,
    `${f}${d}`,
    `${f}${e}`,
  ];

  Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(

    (data) => {

      const values = data.map((value, valueIndex) => {

        let chartdata = value.data



        return chartdata

      })

    }
  )
}

export const isCombinationIndicator = (indicator) => {

  /*Checks if indicator id is for a chart which represents a combination of
  other charts data within the same dashboard pages
  build this out as you add new charts for seperation of concerns and readability
  */

  const isCombinationChart = (indicator === "combination")

  return isCombinationChart

}

export const isSingleYearIndicator = (indicator) => {
  const isSingleYearChart = (indicator === "single year combination chart")

  return isSingleYearChart
}

export const isOldApiIndicator = (indicator) => {

  /*Checks if indicator id belongs to the older API/api-temp
    build this out as you add new charts for seperation of concerns and readability */

  const isOldApi = (typeof (indicator) === "string" && indicator.charAt(0) === "n")

  return isOldApi
}

export const isTextBoxIndicator = (indicator) => {

  /*Check if indicator id is for a non-chart entity within the ChartGrid Layout
    right now there is only a text box, but this could be any other type of component.
    build this out as you add new charts for seperation of concerns and readability */

  const isTextBox = (typeof (indicator) === "string" && indicator === "indicator text box")

  return isTextBox
}

export const chartHeights = (dropdownName, genericIndex) => {

  /* Create a conditional list of chart heights specified for each dashboard*/

  const heightByDropName = ((dropdownName === "Employment" ||
    (dropdownName === "Public Transport Spend" && genericIndex === 0)) ? 170 :
    dropdownName === "Municipal Human Resources" ? 140 :
      dropdownName === "Citizen Engagement" ? 140 :
        dropdownName === "Household Income" || dropdownName === "Education" ||
          dropdownName === "Transport Mode" ||
          ((dropdownName === "Sustainability" || dropdownName === "Travel Time")
            && genericIndex !== 3 && genericIndex !== 2) || (dropdownName === "Public Transport Spend" && genericIndex === 1) ? 100 :
          (dropdownName === "Sustainability" && genericIndex === 3) ? 150 :
            (dropdownName === "Sustainability" && genericIndex === 2) ? 60 :
              (dropdownName === "Life Expectancy and Health" ||
                dropdownName === "ICT Infrastructure") ? 150
                : 210) // 210 is the fallback value if height not specified

  return heightByDropName
}

export const isArrayOfIndicatorCodes = (indicatorObject, selectedDropDownChart) => {

  let isArrayOfIndicatorNames = Array.isArray(hhiDropdownNames(indicatorObject[0])[selectedDropDownChart].numberName)

  if (isArrayOfIndicatorNames) {

    return true
  } else {
    return false
  }
}

export const hhiDropdownNames = (input) => {

  const options = input.map((item, index) => {

    //Checks for array of shortnames or just one shortname string
    if (Array.isArray(item.number.name)) {

      let shortNames = item.number.name.map((shortNameInstance) => shortNameInstance.split(": "))

      return { //remove all zero index arrays 
        numberName: item.number.name,
        percentName: item.percent.name,
        shortName: shortNames.map((shortNameInstance) => shortNameInstance[1])[0],
        longName: shortNames.map((shortNameInstance) => shortNameInstance[0])[0],
        endpoints: item.endpoints,
        percentCode: item.percent.code,
        numberCode: item.number.code,
        index: index
      }

    } else {
      let shortName = item.number.name.split(": ")

      return {
        numberName: item.number.name,
        percentName: item.percent.name,
        shortName: shortName[1],
        longName: shortName[0],
        endpoints: item.endpoints,
        percentCode: item.percent.code,
        numberCode: item.number.code,
        index: index
      }
    }
  }

  )

  return options
}