import { data } from "jquery"

export const peopleHouseholdColors = [
  'rgba(208, 209, 230, 1)',
  'rgba(116, 169, 207, 1)',
  'rgba(5, 112, 176, 1)',
  'rgba(2, 56, 88, 1)'
]

export const secondaryColors = [
  'rgba(165, 215, 216, 1)',
  'rgba(116, 169, 207, 1)',
  'rgba(94, 201, 146, 1)'
]

export const chartTitles = {
  yAxes: ["Number of Households", "Average Number of People", "Percentage", "Population", "Population Density", "Percentage"],
  main: ["Total Households", "Household Size - Average Number of People per Household", "Percentage of Population Change",
    "Total Population in Metro", "Population Density - Population Size per Square km ", "Net migration rate"]
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
      return "CCT"
    case 'City of Joburg':
      return "JHB"
    case 'Ekurhuleni':
      return "EKH"
    case "Mangaung":
      return "MAN"
    case "Msunduzi":
      return "PMB"
    case "Nelson Mandela Bay":
      return "NMB"
    case "Tshwane":
      return "TSH"
    case "eThekwini":
      return "ETK"
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



export const tableData = (table) => {

  const years = ["2015","2016","2017","2018"]
  const labels = ['Buffalo City', 'City of Cape Town', 'City of Joburg', 'Ekurhuleni', 'Mangaung', 'Msunduzi', 'Nelson Mandela Bay', 'Tshwane', 'eThekwini']
  let newTable = []
  let byLabel = []
  let byYear = []
  let graphData = []
  let abbrev = labels.map( city=> cityLabels(city))
  
  table.forEach(element => {
    if(element[0] === "City" || (parseInt(element[1]) < 2015 || parseInt(element[1]) > 2018) ) return
    newTable.push(element)
  });

  labels.forEach((byCity)=>{
      let valuesByCity = []

      newTable.forEach((element)=>{
        if(element[0] !== byCity) return

        valuesByCity.push(element)
       })

       byLabel.push(...valuesByCity)
  })

  years.forEach((year) => {

    let valuesByYear = []

    byLabel.forEach(valueSet => {

      if (valueSet[1] !== year) return

      valuesByYear.push(valueSet)
    });

    byYear.push(valuesByYear)
  })

  graphData = byYear.map((year,index) => {

    const values = year.map((value) => {
      return value[2]
    })
  
    return {labels: abbrev, values, color: peopleHouseholdColors[index], year: year[0][1]}
  })

  return graphData
}

