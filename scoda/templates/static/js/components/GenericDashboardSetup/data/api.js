import axios from 'axios'
import { cityLabels, secondaryColors } from '../helpers/helpers'
import { tableData } from '../helpers/helpers'

export const populateChartGroup = (setChartGroup, indicator_ids, minYear, maxYear, yearColors, setOriginalValues,
  gridLength) => {

  let gridData = []

  indicator_ids.forEach((id, index) => {

    let filterData = []
    let colorCount = 0


    if (id !== "manual" && id !=="n8" && id !== "n35" && id !== "n36" && id !== "n37" && id !== "n38" && id !== "combination") {

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

    } else if (id === "manual") {

      axios.get("/api-temp/explore/?indicator_id=1").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    } else if (id === "n8"){
      axios.get("/api-temp/explore/?indicator_id=8").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }else if (id === "n35"){
      axios.get("/api-temp/explore/?indicator_id=35").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }else if (id === "n36"){
      axios.get("/api-temp/explore/?indicator_id=36").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }else if (id === "n37"){
      axios.get("/api-temp/explore/?indicator_id=37").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }else if (id === "n38"){
      axios.get("/api-temp/explore/?indicator_id=38").then((res) => {

        const table = tableData(res.data.table)
        console.log(table,"table to be restructured")
        filterData.push(...table)
      })
    }else if (id === "combination"){
      axios.get("/api-temp/explore/?indicator_id=38").then((res) => {

        const table = tableData(res.data.table)

        filterData.push(...table)
      })
    }
   
    gridData.push(filterData)
  })


  setTimeout(() => {

    if (gridData.length === gridLength) {
      
      const copy = JSON.parse(JSON.stringify(gridData))
      setOriginalValues([...gridData])
      setChartGroup([...copy])
    } else {

      console.warn("Slow internet connection ")
    }

  }, 20000);
}

