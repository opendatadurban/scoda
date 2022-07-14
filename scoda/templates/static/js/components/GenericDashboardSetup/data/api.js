import axios from 'axios'

export const populateChartGroup = (setChartGroup, setLabelGroup, indicator_ids, minYear, maxYear, yearColors, isLoaded) => {
  let gridData = []
  let labels = ['BUF', 'CPT', 'EKU', 'ETH', 'JHB', 'MAN', 'NMB', 'TSH']

  indicator_ids.forEach((id, index) => {

    let filterData = []
    let colorCount = 0

    axios.get(`/api/explore_new/codebook?indicator_id=${id}`).then((res) => {

      res.data.forEach((item, index) => {

        //exclude api data which false out of min and max year range
        if (parseInt(item.year) < minYear || parseInt(item.year) > maxYear) return

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
      console.log("Worked")
      setChartGroup(gridData)
      setLabelGroup(labels)
      isLoaded(true)
    }, 6000);
  }
  
}

