export const peopleHouseholdColors = [
  'rgba(208, 209, 230, 1)',
  'rgba(116, 169, 207, 1)',
  'rgba(5, 112, 176, 1)',
  'rgba(2, 56, 88, 1)'
]

export const chartTitles = {
  yAxes: ["Number of Households","Average Number of People","Percentage","Population", "Population Density","Percentage"],
  main: ["Total Households", "Household Size - Average Number of People per Household","Percentage of Population Change",
"Total Population in Metro","Population Density - Population Size per Square km ","Net migration rate"] 
}

//TODO: use select to alter cities labels within chart grid 
export const handleSelectChange = (e, cities, setSelectedValues) => {

  console.log(e)
  if (e.length < cities.length) {
    setSelectedValues(e)
    console.log("even more wow")
  } else {
    console.log("wow")
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
  }
}

export const populateSelect = (chartData,setOriginal,cityLabels,setSelected) => {
    
  const chartLabels = chartData.map(chart => {
      return chart[0].labels
  })
  
  console.log(chartLabels,"chart labels")
  
 const abbrevLabels = chartLabels[0].map(city => {
  return cityLabels(city)
 })

 setSelected(abbrevLabels) 
 setOriginal(abbrevLabels)
}