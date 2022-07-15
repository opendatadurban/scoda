import axios from 'axios'
import { cityLabels } from '../helpers/helpers'

export const populateChartGroup = (setChartGroup, setLabelGroup, indicator_ids, minYear, maxYear, yearColors, isLoaded) => {
  let gridData = []
  let labels = []

  indicator_ids.forEach((id, index) => {

    let filterData = []
    let colorCount = 0
    let chartIndex = 0

    axios.get(`/api/explore_new/codebook?indicator_id=${id}`).then((res) => {

      const abbrev = res.data[0].labels.map(item => cityLabels(item))
      labels.push(abbrev)

      res.data.forEach( (item,) => {

        /**
         * Filter out min max year range, or 
         * specify range for individual graphs on grid by using chartIndex
         */
        if ( 
          (parseInt(item.year) < minYear || parseInt(item.year) > maxYear) 
          &&
          index !== 4
          ) return
        // add corresponding color to each year/ dataset label
        item['color'] = yearColors[colorCount]

        filterData.push(item)

        colorCount++
        
      })
    });
    gridData.push(filterData)
  })

  if (gridData.length === indicator_ids.length) {
    setTimeout(() => {

      if((gridData.length === indicator_ids.length) && gridData[0][0].values){
       
        setChartGroup(gridData)
       setLabelGroup(labels)
        isLoaded(true)
      }else{
        alert("You might have a slow internet connection, Please refresh the page !")
      }
    }, 8000);
  }
}

