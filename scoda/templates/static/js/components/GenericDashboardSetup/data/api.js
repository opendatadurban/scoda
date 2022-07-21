import axios from 'axios'
import { cityLabels, secondaryColors } from '../helpers/helpers'
import { tableData } from '../helpers/helpers'

export const populateChartGroup = (setChartGroup, indicator_ids, minYear, maxYear, yearColors, setOriginalValues) => {

  let gridData = []

  indicator_ids.forEach((id, index) => {

    let filterData = []
    let colorCount = 0


    if (id !== "manual") {

      axios.get(`/api/explore_new?indicator_id=${id}`).then((res) => {

        res.data.forEach((item,) => {
          

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

          item.labels = item.labels.map((city)=> cityLabels(city))
          
          filterData.push(item)

          colorCount++

        })
      })

    } else {

      axios.get("/api-temp/explore/?indicator_id=1").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }
   
    gridData.push(filterData)
  })


  setTimeout(() => {

    if (gridData.length === 6) {
      
      const copy = JSON.parse(JSON.stringify(gridData))
      setOriginalValues([...gridData])
      setChartGroup([...copy])
    } else {

      console.warn("Slow internet connection ")
    }

  }, 14000);
}

