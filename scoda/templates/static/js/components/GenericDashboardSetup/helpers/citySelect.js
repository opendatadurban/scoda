export const phAddItem = (clickIndex,options,setSelected,setChartGroup,setOptions) => {

    let optionsTemp = []
    let selectTemp = []

    options.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setSelected(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {
//TODO: evaluate selection process further
          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp


      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = optionState[0]
        newArr[1] = optionState[1]
        newArr[2] = optionState[2]
        newArr[3] = optionState[3]
        newArr[4] = optionState[4]

        return [...newArr]
      })

      return [...optionState]
    })

    setOptions(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          return selectedYear
        })
      })

      return [...selectedState]
    })
  }

export const phRemoveItem = (clickIndex,selected,setSelected,setChartGroup,setOptions) => {
    //set labels and chart data
    let optionsTemp = []
    let selectTemp = []

    selected.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setOptions(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {

          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp

      return [...optionState]
    })

    setSelected(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]

          return selectedYear
        })
      })

      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = selectedState[0]
        newArr[1] = selectedState[1]
        newArr[2] = selectedState[2]
        newArr[3] = selectedState[3]
        newArr[4] = selectedState[4]

        return [...newArr]
      })

      return [...selectedState]
    })


  }

export const phClearAll = (originalValues,setSelected,setOptions) => {

    setSelected(prev => {
      let newArr = prev

      let cleared = newArr.map((chart) => {
        return chart.map((year) => {
          year.labels = []
          year.values = []
          return year
        })
      })

      return cleared
    })

    setOptions(prev => {
      let newArr = prev

      let fallbackValue = JSON.parse(JSON.stringify(originalValues))
      let removed = fallbackValue.splice(-1)
console.log(originalValues,"fallbackvalue")
      let filled = newArr.length > 1 ? newArr.map((chart, cIndex) => {

     
        let fillRef = fallbackValue[cIndex]
        return chart.map((year, yIndex) => {
            console.log(year,"year")
          year.labels = ['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK']
          year.values = fillRef[yIndex].values

          return year
        })
      }) : fallbackValue

      return filled
    })
  }

  export const eAddItem = (clickIndex,options,setSelected,setChartGroup,setOptions) => {

    let optionsTemp = []
    let selectTemp = []

    options.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setSelected(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {
//TODO: evaluate selection process further
          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp


      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = optionState[0]
        newArr[1] = optionState[1]
        newArr[2] = optionState[2]
       // newArr[3] = optionState[3]
  

        return [...newArr]
      })

      return [...optionState]
    })

    setOptions(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          return selectedYear
        })
      })

      return [...selectedState]
    })
  }

export const eRemoveItem = (clickIndex,selected,setSelected,setChartGroup,setOptions) => {
    //set labels and chart data
    let optionsTemp = []
    let selectTemp = []

    selected.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []
      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setOptions(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {

          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }
          console.log(optionYear,"setOptions")
          return optionYear
        })
      }) : optionsTemp

      return [...optionState]
    })

    setSelected(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          console.log(selectedYear,"setSelected")
          return selectedYear
        })
      })

      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = selectedState[0]
        newArr[1] = selectedState[1]
        newArr[2] = selectedState[2]
       // newArr[3] = selectedState[3]
    

        return [...newArr]
      })

      return [...selectedState]
    })


  }

export const eClearAll = (originalValues,setSelected,setOptions) => {

    setSelected(prev => {
      
      let newArr = prev

      let cleared = newArr.map((chart) => {
        return chart.map((year) => {
          year.labels = []
          year.values = []
          return year
        })
      })

      return cleared
    })

    setOptions(prev => {
     
      let newArr = prev

      let fallbackValue = JSON.parse(JSON.stringify(originalValues))

      let filled = newArr.length > 1 ? newArr.map((chart, cIndex) => {
     
        let fillRef = fallbackValue[cIndex]
        return chart.map((year, yIndex) => {
            console.log(year,"year")
          year.labels = ['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK']
          year.values = fillRef[yIndex].values

          return year
        })
      }) : fallbackValue

      return filled
    })
  }

  export const dAddItem = (clickIndex,options,setSelected,setChartGroup,setOptions) => {

    let optionsTemp = []
    let selectTemp = []

    options.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []

      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setSelected(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {
//TODO: evaluate selection process further
          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }

          return optionYear
        })
      }) : optionsTemp


      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = optionState[0]
        newArr[1] = optionState[1]
        newArr[2] = optionState[2]
       // newArr[3] = optionState[3]
  

        return [...newArr]
      })

      return [...optionState]
    })

    setOptions(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          return selectedYear
        })
      })

      return [...selectedState]
    })
  }

export const dRemoveItem = (clickIndex,selected,setSelected,setChartGroup,setOptions) => {
    //set labels and chart data
    let optionsTemp = []
    let selectTemp = []

    selected.forEach((chart, cIndex) => {
      let optionsChart = []
      let selectChart = []
      chart.forEach((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked === year.values[clickIndex])
        }
        let selectYear = {
          ...year,
          labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
          values: year.values.filter(clicked => clicked !== year.values[clickIndex])
        }
        optionsChart.push(optionYear)
        selectChart.push(selectYear)
      })

      optionsTemp.push(optionsChart)
      selectTemp.push(selectChart)
    })

    setOptions(prev => {

      let newArr = prev

      let optionState = newArr.length > 1 ? newArr.map((chart, cIndex) => {

        let optionChart = optionsTemp[cIndex]

        return chart.map((year, yIndex) => {

          let optionYear = {
            ...year,
            labels: [...year.labels].concat(optionChart[yIndex].labels[0]),
            values: [...year.values].concat(optionChart[yIndex].values[0])
          }
          console.log(optionYear,"setOptions")
          return optionYear
        })
      }) : optionsTemp

      return [...optionState]
    })

    setSelected(prev => {

      let newArr = prev

      let selectedState = newArr.map((chart, cIndex) => {

        let selectedChart = selectTemp[cIndex]

        return chart.map((year, yIndex) => {

          let selectedYear = selectedChart[yIndex]
          console.log(selectedYear,"setSelected")
          return selectedYear
        })
      })

      setChartGroup(prev => {

        let newArr = prev

        newArr[0] = selectedState[0]
        newArr[1] = selectedState[1]
        newArr[2] = selectedState[2]
       // newArr[3] = selectedState[3]
    

        return [...newArr]
      })

      return [...selectedState]
    })


  }

export const dClearAll = (originalValues,setSelected,setOptions) => {

    setSelected(prev => {
      
      let newArr = prev

      let cleared = newArr.map((chart) => {
        return chart.map((year) => {
          year.labels = []
          year.values = []
          return year
        })
      })

      return cleared
    })

    setOptions(prev => {
     
      let newArr = prev

      let fallbackValue = JSON.parse(JSON.stringify(originalValues))

      let filled = newArr.length > 1 ? newArr.map((chart, cIndex) => {
     
        let fillRef = fallbackValue[cIndex]
        return chart.map((year, yIndex) => {

          year.labels = ['BUF', 'CCT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETK']
          year.values = fillRef[yIndex].values

          return year
        })
      }) : fallbackValue

      return filled
    })
  }