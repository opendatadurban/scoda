export const sortCities = (year, yearIndex,) => {
  
   // year.labels = year.labels.map((city) => cityLabels(city))
    let ogLabels = [...year.labels]

    year.labels.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })

    let indexes = []

    year.labels.forEach((label, labelIndex) => {
        indexes.push(ogLabels.indexOf(label))
    })

    let newValues = []

    indexes.forEach((newIndex_1) => newValues.push(year.values[newIndex_1]))

    year.values = newValues
}
