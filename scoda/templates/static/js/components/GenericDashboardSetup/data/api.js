import axios from 'axios'
import { cityLabels, secondaryColors } from '../helpers/helpers'

export const populateChartGroup = (setChartGroup, setLabelGroup, indicator_ids, minYear, maxYear, yearColors) => {

  let gridData = []
  let labels = []

  indicator_ids.forEach((id, index) => {

    let filterData = []
    let colorCount = 0
    let chartIndex = 0

    if (id === "manual") {
      labels.push(['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK'])
      
    } else {

      axios.get(`/api/explore_new?indicator_id=${id}`).then((res) => {

        const abbrev = res.data[0].labels.map(item => cityLabels(item))
        labels.push(abbrev)

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

          filterData.push(item)

          colorCount++

        })
      });
    }

    gridData.push(filterData)
  })

  
      setTimeout(() => {
        if(gridData.length === indicator_ids.length){
       
          setChartGroup(gridData)
          setLabelGroup(labels)
        }else{
          console.warn("Slow internet connection ")
        }
       
      }, 10000);
  
}

