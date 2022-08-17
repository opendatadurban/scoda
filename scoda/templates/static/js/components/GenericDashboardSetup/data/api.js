import axios from 'axios'
import { cityLabels, combinationColors, secondaryColors } from '../helpers/helpers'
import { tableData } from '../helpers/helpers'
import { indicator_text_box_data } from './data'

export const populateChartGroup = (setChartGroup, indicator_ids, minYear, maxYear, yearColors, setOriginalValues
) => {

  let newApiUri = "/api/explore_new?indicator_id="
  let oldApiUri = "/api-temp/explore/?indicator_id="

  let gridData = []

  let indicator_id_requests = []

  indicator_ids.forEach(id => {

    if (id !== "n1" && id !== "n8" && id !== "n35" && id !== "n36" && id !== "n37" && id !== "n38"
      && id !== "combination" && id !== "indicator text box") {

      indicator_id_requests.push({ request: axios.get(newApiUri + id), type: "new" })
    } 
    else if (id === "combination") {

      indicator_id_requests.push({ request: { data: [] }, type: "combination" })
    } 
    else if (typeof (id) === "string" && id.charAt(0) === "n") {

      indicator_id_requests.push({ request: axios.get(oldApiUri + id.substring(1)), type: "old" })
    } 
    else if (typeof (id) === "string" && id === "indicator text box") {

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

            // add corresponding color to each year/ dataset label
            item['color'] = yearColors[colorCount]

            if (index === 5) {
              item['color'] = secondaryColors[colorCount]
            }

            item.labels = item.labels.map((city) => cityLabels(city))

            filterData.push(item)

            colorCount++
          })
        } else if (indicator_id_requests[index].type === "old") {

          const table = tableData(chart.data.table, chart.data.cities)

          filterData.push(...table)
        } else if (indicator_id_requests[index].type === "combination") {

          const yearEquivalent = ["Formal Dwelling", "Informal Dwelling", "Traditional Dwelling", "Other"]
          const combinationChart = yearEquivalent.map((category, index) => {
            return {
              year: category,
              labels: ['BUF', 'CPT', 'JHB', 'EKU', 'MAN', 'NMB', 'TSH', 'ETH'],
              values: [0, 0, 0, 0, 0, 0, 0, 0],
              color: yearColors[index]
            }
          })

          filterData.push(...combinationChart)
        }else if (indicator_id_requests[index].type === "indicator text box") {

          filterData.push(...indicator_text_box_data)
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

      setOriginalValues([...gridData])
      const copy = JSON.parse(JSON.stringify(gridData)) // deep copy to be manipuilated
      setChartGroup([...copy])

    }
  ).catch(err => console.warn(err))
}

