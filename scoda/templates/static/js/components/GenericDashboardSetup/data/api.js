import axios from 'axios'
import { cityLabels, combinationColors, extendAbbreviation, isCombinationIndicator, isNewApiIndicator, isOldApiIndicator, isSingleYearIndicator, isTextBoxIndicator, travelTimeColors } from '../helpers/helpers'
import { tableData } from '../helpers/helpers'
import { sortCities } from '../helpers/sorting'
import { indicator_text_box_data } from './data'
import {getTravelTimeAverages, treatTravelTimeDataPerCity } from './chartPercentageData'
import { colorSorting } from '../helpers/colorSorting'
import { type } from 'jquery'

export const populateChartGroup = (setChartGroup, indicator_ids, minYear, maxYear,
  yearColors, setOriginalValues, dropdownName, genericIndex, singleCityIndex

) => {



  let newApiUri = "/api/explore_new?indicator_id="
  let oldApiUri = "/api-temp/explore/?indicator_id="

  let gridData = []

  let indicator_id_requests = []

  indicator_ids.forEach(id => {

    if (isNewApiIndicator(id)) {

        indicator_id_requests.push({ request: axios.get(newApiUri + id), type: "new" }) 
    }

    else if (isCombinationIndicator(id)) {

      indicator_id_requests.push({ request: { data: [] }, type: "combination" })
    }
    else if (isSingleYearIndicator(id)) {

      indicator_id_requests.push({ request: { data: [] }, type: "single year combination chart" })
    }
    else if (isOldApiIndicator(id)) {

      indicator_id_requests.push({ request: axios.get(oldApiUri + id.substring(1)), type: "old" })
    }
    else if (typeof (id) === "object") {
      
      if (id.single_city_select) {

        indicator_id_requests.push({
          request: Promise.all([
            axios.get(newApiUri + id.endpoints[0]),
            axios.get(newApiUri + id.endpoints[1]),
            axios.get(newApiUri + id.endpoints[2]),
            axios.get(newApiUri + id.endpoints[3]),
            axios.get(newApiUri + id.endpoints[4])
          ])
          , type: "toggle_single_city"
        })
      } else if (id.toggle_calculation) {
        indicator_id_requests.push({
          request: axios.get(newApiUri + id.endpoints[0])
          , type: "toggle_calculation"
        })

      } else if (id.barchart_by_year) {

        indicator_id_requests.push({
          request: Promise.all([
            axios.get(newApiUri + id.endpoints[0]),
            axios.get(newApiUri + id.endpoints[1]),
            axios.get(newApiUri + id.endpoints[2]),
            axios.get(newApiUri + id.endpoints[3])
          ])
          , type: "toggle_barchart_by_year"
        })
      } else if (id.manual_toggle_values){

        indicator_id_requests.push({ request:{data: id.manual_toggle_values}, type: "new" }) 
      }else if (Array.isArray(id)){

        indicator_id_requests.push({ request:{data: []}, type: "new" }) 
      }else {
        indicator_id_requests.push({
          request: Promise.all([
            axios.get(newApiUri + id.endpoints[1]),
            axios.get(newApiUri + id.endpoints[0])])
          , type: "toggle"
        })
      }


    }
    else if (isTextBoxIndicator(id)) {

      indicator_id_requests.push({ request: { data: [] }, type: "indicator text box" })
    }
  });

  Promise.all(indicator_id_requests.map(request => request.request)).then(

    (chartData) => {



      chartData.forEach((chart, index) => {

        let filterData = []

        if (indicator_id_requests[index].type === "new") {
          let colorCount = 0
          chart.data.forEach((item) => {

            /**
             * Filter out min max year range, or 
             * specify range for individual graphs on grid by using chartIndex
             */
            if (
              (parseInt(item.year) < minYear || parseInt(item.year) > maxYear)
              &&
              index !== 5
            ) return

            colorSorting(item, index, genericIndex, dropdownName,colorCount, yearColors)
            
            /** Sorting labels and values alphabetically */
            item.labels = item.labels.map((city) => cityLabels(city))

            let ogLabels = [...item.labels]


            item.labels.sort(function (a, b) {
              return a.toLowerCase().localeCompare(b.toLowerCase());
            })

           
            let indexes = []

            item.labels.forEach((label, labelIndex) => {
              indexes.push(ogLabels.indexOf(label))
            })

            let newValues = []

            indexes.forEach((newIndex_1) => newValues.push(item.values[newIndex_1]))

            item.values = newValues
            /**End of Label/Value sorting */

            filterData.push(item)

            colorCount++
          })
        } else if (indicator_id_requests[index].type === "old") {
          const table = tableData(chart.data.table, chart.data.cities, minYear, maxYear)

          filterData.push(...table)
        } else if (indicator_id_requests[index].type === "combination") {

          const yearEquivalent = ["Formal Dwelling", "Informal Dwelling", "Traditional Dwelling", "Other"]
          const combinationChart = yearEquivalent.map((category, index) => {
            return {
              year: category,
              labels: ['BUF', 'CPT', 'EKU', 'ETH', 'JHB', 'MAN', 'NMA', 'TSH'],
              values: [0, 0, 0, 0, 0, 0, 0, 0],
              color: yearColors[index]
            }
          })

          filterData.push(...combinationChart)
        } else if (indicator_id_requests[index].type === "toggle") {

          const toggleCharts = chart.map((data) => { return data.data })

          const toggleChartWithColor = toggleCharts.map(chart => {

            let newChart = []

            chart.forEach((year, yearIndex) => {

              if ((parseInt(year.year) < minYear || parseInt(year.year) > maxYear)) return

              year.color = yearColors[yearIndex]
              year.labels = year.labels.map((city) => cityLabels(city))
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

              newChart.push(year)
            })

            return newChart
          })

          filterData.push(toggleChartWithColor)
        } else if (indicator_id_requests[index].type === "toggle_calculation") {

          const toggleCharts = chart.data
          let numberChart = []
          let percentageChart = []

          toggleCharts.forEach((year, yearIndex) => {

            if ((parseInt(year.year) < minYear || parseInt(year.year) > maxYear)) return

            year.color = yearColors[yearIndex]

            sortCities(year)

            numberChart.push(year)
          })

          numberChart.forEach((year, labelIndex) => {

            const newValues = year.values.map((value, valueIndex) => {

              let denominator = getTravelTimeAverages(
                year.year, extendAbbreviation(year.labels[valueIndex]),
                dropdownName, genericIndex
              )

              return (value / denominator) * 100

            })

            let newYear = {

              ...year,
              values: newValues
            }

            percentageChart.push(newYear)
          })

          filterData.push([numberChart, percentageChart])

        } else if (indicator_id_requests[index].type === "toggle_single_city") {

          const toggleCharts = chart.map((data) => { return data.data })

          const toggleChartSortedByMetro = toggleCharts.map(chart => {
            let newChart = []

            chart.forEach((year, yearIndex) => {

              if ((parseInt(year.year) < minYear || parseInt(year.year) > maxYear)) return

              year.labels = year.labels.map((city) => cityLabels(city))
              sortCities(year, yearIndex)

              newChart.push(year)
            })

            return newChart
          })

          const newYears = ["15mins or less", "15 - 30mins", "31 - 60mins", "61 - 90mins ", "More than 90mins"]

          const mutatedChart = newYears.map((travelDuration, travelDurationIndex) => {

            let newLabels = []
            let valuesByTravelDuration = []

            toggleChartSortedByMetro[travelDurationIndex].forEach((chartItem, chartItemIndex) => {

              newLabels.push(chartItem.year)
              valuesByTravelDuration.push(chartItem.values[singleCityIndex])
            })

            let numberChart = {
              year: travelDuration,
              labels: newLabels,
              color: travelTimeColors[travelDurationIndex],
              values: valuesByTravelDuration
            }

            return numberChart
          })

          const treatedToggleDataPerCity = treatTravelTimeDataPerCity(singleCityIndex)

          let percentageChart = []


          let aveValues = [0, 0, 0, 0]

          mutatedChart.forEach((year, yearIndex) => {

          
            year.labels.forEach((label, labelIndex) => {

              if (label === "2015") {
                aveValues[0] += year.values[labelIndex]
              }
              if (label === "2016") {
                aveValues[1] += year.values[labelIndex]
              }
              if (label === "2017") {
                aveValues[2] += year.values[labelIndex]
              }
              if (label === "2018") {
                aveValues[3] += year.values[labelIndex]
              }
            })
          })

      
          mutatedChart.forEach((year, travelDurationIndex) => {

            let newYearValues = year.values.map((value, valueIndex) => {
          
                if (year.labels[valueIndex] === "2015") {

                  return (value/aveValues[0]) * 100
                }
                if (year.labels[valueIndex] === "2016") {

                  return (value/aveValues[1]) * 100
                }
                if (year.labels[valueIndex] === "2017") {

                  return (value/aveValues[2]) * 100
                }
                if (year.labels[valueIndex] === "2018") {

                  return (value/aveValues[3]) * 100
                }
            })

            let newYear = {
              ...year,
              values: newYearValues
            }

            percentageChart.push(newYear)
          })

          filterData.push([mutatedChart, percentageChart])

        } else if (indicator_id_requests[index].type === "toggle_barchart_by_year") {

          const toggleCharts = chart.map((data) => { return data.data })
          const toggleChartSortedByMetro = toggleCharts.map(chart => {

            let newChart = []


            chart.forEach((year, yearIndex) => {

              if ((parseInt(year.year) < minYear || parseInt(year.year) > maxYear)) return

              year.labels = year.labels.map((city) => cityLabels(city))
              sortCities(year, yearIndex)

              newChart.push(year)
            })

            return newChart
          })

          const newYears = ["< 10%", "10 - 20%", "20 - 30%", "> 30%"]

          let newChartWithPercentages = []

          toggleChartSortedByMetro.forEach((percentage, index) => {

            let filteredByYear = []

            percentage.forEach((filterYear, filterIndex) => {

              if (filterIndex === singleCityIndex) {

                filteredByYear.push(filterYear)
              }
            })

            newChartWithPercentages.push(...filteredByYear)
          })

          const newYearsWithPercentages = newChartWithPercentages.map((newItem, percentageIndex) => {
            return { ...newItem, year: newYears[percentageIndex], color: travelTimeColors[percentageIndex] }
          })

          filterData.push([newYearsWithPercentages, newYearsWithPercentages])
        }
        else if (indicator_id_requests[index].type === "indicator text box") {


          filterData.push(...indicator_text_box_data)

        }
        else if (indicator_id_requests[index].type === "single year combination chart") {
          const yearEquivalent = ["Do not sort waste", "Waste is sorted for or by Waster Picker", "Waste is collected or dropped at recycling depot", "No data"]
          const combinationChart = yearEquivalent.map((category, index) => {
            return {
              year: category,
              labels: ['BUF', 'CPT', 'EKU', 'ETH', 'JHB', 'MAN', 'NMA', 'TSH'],
              values: [0, 0, 0, 0, 0, 0, 0, 0],
              color: yearColors[index]
            }
          })

          filterData.push(...combinationChart)
        }
        else {

          return
        }

        gridData.push(filterData)
      })

      if (indicator_ids.includes("combination")) {
        let formalDwellings = [0, 0, 0, 0, 0, 0, 0, 0]
        let informalDwellings = [0, 0, 0, 0, 0, 0, 0, 0]
        let traditionalDwellings = [0, 0, 0, 0, 0, 0, 0, 0]
        let otherDwellings = [0, 0, 0, 0, 0, 0, 0, 0]

        gridData.forEach((element, elementIndex) => {
          if (elementIndex === 2) return

          if (elementIndex === 0) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2018') return
              year.values.forEach((value, valueIndex) => {

                formalDwellings[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 1) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2018') return
              year.values.forEach((value, valueIndex) => {

                informalDwellings[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 3) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2018') return
              year.values.forEach((value, valueIndex) => {

                traditionalDwellings[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 4) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2018') return
              year.values.forEach((value, valueIndex) => {

                otherDwellings[valueIndex] += value ? value : 0

              })
            })
          }
        });
        let colorCount = 0
        gridData[2] = gridData[2].map((item, index) => {

          item.color = combinationColors[colorCount]
          if (index === 0) {
            item.values = formalDwellings
          } else if (index === 1) {
            item.values = informalDwellings
          } else if (index === 2) {
            item.values = traditionalDwellings
          } else if (index === 3) {
            item.values = otherDwellings
          }
          colorCount++
          return item
        })

      }

      if (indicator_ids.includes("single year combination chart")) {
        let sortedWaste = [0, 0, 0, 0, 0, 0, 0, 0]
        let wastePicker = [0, 0, 0, 0, 0, 0, 0, 0]
        let recyclingDepot = [0, 0, 0, 0, 0, 0, 0, 0]
        let noData = [0, 0, 0, 0, 0, 0, 0, 0]
        gridData.forEach((element, elementIndex) => {
          if (elementIndex === 2) return

          if (elementIndex === 0) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2019') return
              year.values.forEach((value, valueIndex) => {

                sortedWaste[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 1) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2019') return
              year.values.forEach((value, valueIndex) => {

                wastePicker[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 3) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2019') return
              year.values.forEach((value, valueIndex) => {

                recyclingDepot[valueIndex] += value ? value : 0

              })
            })
          }
          if (elementIndex === 4) {

            element.forEach((year, yearIndex) => {
              if (year.year !== '2019') return
              year.values.forEach((value, valueIndex) => {

                noData[valueIndex] += value ? value : 0

              })
            })
          }
        });
        let colorCount = 0
        gridData = [gridData[2].map((item, index) => {

          item.color = combinationColors[colorCount]
          if (index === 0) {
            item.values = sortedWaste
          } else if (index === 1) {
            item.values = wastePicker
          } else if (index === 2) {
            item.values = recyclingDepot
          } else if (index === 3) {
            item.values = noData
          }
          colorCount++

          //gridData.length = 1
          return item
        })]
      }

      setOriginalValues([...gridData])
      const copy = JSON.parse(JSON.stringify(gridData)) // deep copy to be manipuilated
      console.log(gridData,"api data")
      setChartGroup([...copy])
    }
  ).catch(err => console.warn(err + "error fetching chart data in api.js"))
}

