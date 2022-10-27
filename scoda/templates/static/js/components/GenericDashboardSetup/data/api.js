import axios from 'axios'
import { cityLabels, combinationColors, isCombinationIndicator, isNewApiIndicator, isOldApiIndicator, isSingleYearIndicator, isTextBoxIndicator, peopleHouseholdColors, secondaryColors, sustainabilityColors } from '../helpers/helpers'
import { tableData } from '../helpers/helpers'
import { indicator_text_box_data } from './data'

export const populateChartGroup = (setChartGroup, indicator_ids, minYear, maxYear,
   yearColors, setOriginalValues,dropdownName,genericIndex
  
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
    else if(typeof(id) === "object"){

      indicator_id_requests.push({ request: Promise.all([
        axios.get(newApiUri + id.endpoints[1]),
        axios.get(newApiUri + id.endpoints[0])])
        , type: "toggle" })
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

            

              if(dropdownName === "Life Expectancy and Health" && index > 1 ){

                if(parseInt(item.year) === 2015 || parseInt(item.year) === 2016 ){
                
                  item.year = parseInt(item.year) === 2015 ? "2011-2015": "2016-2020"
                  item['color'] = item.year === "2011-2015" ? "#4AD2D5" : "#5F993B"
                }else{
                  return
                }
                
            
              }else{
                item['color'] = yearColors[colorCount]
              }

            // add corresponding color to each year/ dataset label
        


            if(dropdownName === "Sustainability" && genericIndex === 3 ){
              item['color'] = sustainabilityColors[colorCount]
            }

            if (index === 5 && dropdownName === "People and Households") {
              item['color'] = secondaryColors[colorCount]
            }

            if (index === 5 && dropdownName !== "People and Households") {
              item['color'] = peopleHouseholdColors[colorCount + 2]
            }

            item.labels = item.labels.sort().map((city) => cityLabels(city))

            filterData.push(item)

            colorCount++
          })
        } else if (indicator_id_requests[index].type === "old") {
  
          const table = tableData(chart.data.table, chart.data.cities.sort(),minYear,maxYear)

          filterData.push(...table)
        } else if (indicator_id_requests[index].type === "combination") {

          const yearEquivalent = ["Formal Dwelling", "Informal Dwelling", "Traditional Dwelling", "Other"]
          const combinationChart = yearEquivalent.map((category, index) => {
            return {
              year: category,
              labels: ['BUF', 'CPT', 'JHB', 'EKU', 'MAN', 'NMA', 'TSH', 'ETH'],
              values: [0, 0, 0, 0, 0, 0, 0, 0],
              color: yearColors[index]
            }
          })

          filterData.push(...combinationChart)
        }else if (indicator_id_requests[index].type === "toggle") {

          const toggleCharts = chart.map((data) => {return data.data})

          const toggleChartWithColor = toggleCharts.map(chart => {

            let newChart = []

            chart.forEach((year,yearIndex) => {
              if ((parseInt(year.year) < minYear || parseInt(year.year) > maxYear) ) return
              year.color = yearColors[yearIndex]
              year.labels = year.labels.sort().map((city) => cityLabels(city))
              newChart.push(year)
            })

            return newChart 
          })

          filterData.push(toggleChartWithColor)
        }else if (indicator_id_requests[index].type === "indicator text box") {

          filterData.push(...indicator_text_box_data)
        }
        else if( indicator_id_requests[index].type === "single year combination chart" ){
          const yearEquivalent = ["Do not sort waste", "Waste is sorted for or by Waster Picker", "Waste is collected or dropped at recycling depot", "No data"]
          const combinationChart = yearEquivalent.map((category, index) => {
            return {
              year: category,
              labels: ['BUF', 'CPT', 'JHB', 'EKU', 'MAN', 'NMA', 'TSH', 'ETH'],
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
      setChartGroup([...copy])
    }
  ).catch(err => console.warn(err + "error fetching chart data in api.js"))
}

