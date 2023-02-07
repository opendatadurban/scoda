export const phAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

export const phRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

export const phClearAll = (originalValues, setSelected, setOptions) => {

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
    let filled = newArr.length > 1 ? newArr.map((chart, cIndex) => {


      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMA', 'TSH', 'ETH']
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const eAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

      //dictates number of charts effected by add operation
      newArr[0] = optionState[0]
      newArr[1] = optionState[1]
      newArr[2] = optionState[2]
      newArr[3] = optionState[3]


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

export const eRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

      //dictates number of charts effected by remove operation
      newArr[0] = selectedState[0]
      newArr[1] = selectedState[1]
      newArr[2] = selectedState[2]
      newArr[3] = selectedState[3]

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const eClearAll = (originalValues, setSelected, setOptions) => {

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
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETH']
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}




export const hiAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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


    setChartGroup(prev => {

      let newArr = prev

      newArr[0][0][0] = optionState[0]
      newArr[0][0][1] = optionState[1]

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

export const hiRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

      let newArr2 = prev
      newArr2[0][0][0] = selectedState[0]
      newArr2[0][0][1] = selectedState[1]
      return prev
    })

    return [...selectedState]
  })



}

export const hiClearAll = (originalValues, setSelected, setOptions) => {

  setOptions(prev => {

    let fallbackValue = JSON.parse(JSON.stringify(originalValues))

    return fallbackValue[0][0]
  })

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
}

export const dAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

export const dRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

export const dClearAll = (originalValues, setSelected, setOptions) => {

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
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {

        year.labels = ['BUF', 'CPT', 'JHB', 'EKU', 'MAN', 'NMA', 'TSH', 'ETH']
        year.values = fillRef[yIndex].values
        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const leAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

export const leRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const leClearAll = (originalValues, setSelected, setOptions) => {

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
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMB', 'TSH', 'ETH']
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const fsAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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
      newArr[5] = optionState[5]

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

export const fsRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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
      newArr[5] = selectedState[5]

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const fsClearAll = (originalValues, setSelected, setOptions) => {

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
  ///  let removed = fallbackValue
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {


      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'PMB', 'NMA', 'TSH', 'ETH']
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const edAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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


    setChartGroup(prev => {

      let newArr = prev

      newArr[0][0][0] = optionState[0]
      newArr[0][0][1] = optionState[1]

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

export const edRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

      let newArr2 = prev
      newArr2[0][0][0] = selectedState[0]
      newArr2[0][0][1] = selectedState[1]
      return prev
    })

    return [...selectedState]
  })



}

export const edClearAll = (originalValues, setSelected, setOptions) => {

  setOptions(prev => {

    let fallbackValue = JSON.parse(JSON.stringify(originalValues))

    return fallbackValue[0][0]
  })

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
}

export const sustainabilityAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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
      if(newArr[1]) newArr[1] = optionState[1]

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

export const sustainabilityRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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
      if(newArr[1]) newArr[1] = selectedState[1]
    
      return [...newArr]
    })

    return [...selectedState]
  })


}

export const sustainabilityClearAll = (originalValues, setSelected, setOptions) => {

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
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['CPT', 'EKU', 'ETH', 'JHB', 'MAN', 'TSH']
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}


export const ictAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

export const ictRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const ictClearAll = (originalValues, setSelected, setOptions) => {

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
    //let removed = fallbackValue.splice(-1)
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'NMA', 'TSH', 'ETH'].sort()
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const ptsAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

export const ptsRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const ptsClearAll = (originalValues, setSelected, setOptions) => {

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
    //let removed = fallbackValue.splice(-1)
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'NMA', 'TSH', 'ETH'].sort()
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

export const sdAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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
      newArr[5] = optionState[5]

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

export const sdRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
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

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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
      newArr[5] = selectedState[5]

      return [...newArr]
    })

    return [...selectedState]
  })


}

export const sdClearAll = (originalValues, setSelected, setOptions) => {

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
    //let removed = fallbackValue.splice(-1)
    let filled = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let fillRef = fallbackValue[cIndex]
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKH', 'MAN', 'NMA', 'TSH', 'ETH'].sort()
        year.values = fillRef[yIndex].values

        return year
      })
    }) : fallbackValue

    return filled
  })
}

function filterArray(year, clickIndex) {
  const index = year.values.findIndex(val => val === year.values[clickIndex]);
  return year.values.filter((val, i) => i === index);
}

function reverseFilterArray(year, clickIndex) {
  const index = year.values.findIndex(val => val === year.values[clickIndex]);
  return year.values.filter((val, i) => i !== index);
}

export const ceAddItem = (clickIndex, options, setSelected, setChartGroup, setOptions) => {

  let optionsTemp = []
  let selectTemp = []

  options.forEach((chart, cIndex) => {
    let optionsChart = []
    let selectChart = []

    chart.forEach((year, yIndex) => {

      let optionYear = {
        ...year,
        labels: year.labels.filter(clicked => clicked === year.labels[clickIndex]),
        values: filterArray(year,clickIndex)
      }
      let selectYear = {
        ...year,
        labels: year.labels.filter(clicked => clicked !== year.labels[clickIndex]),
        values: reverseFilterArray(year,clickIndex)
      }
      optionsChart.push(optionYear)
      selectChart.push(selectYear)
    })

    optionsTemp.push(optionsChart)
    selectTemp.push(selectChart)
  })

  setSelected(prev => {

    let newArr = prev

    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

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


    setChartGroup(prev => {

      let newArr = prev

      //dictates number of charts effected by add operation
      newArr[0] = optionState[0]
      newArr[1] = optionState[1]
      newArr[2].length > 0 ? newArr[2] = optionState[2] : newArr[2] = []
      newArr[3] = optionState[3]
      

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

export const ceRemoveItem = (clickIndex, selected, setSelected, setChartGroup, setOptions) => {
  //set labels and chart data
  let optionsTemp = []
  let selectTemp = []

  selected.forEach((chart, cIndex) => {

    let optionsChart = []
    let selectChart = []

    chart.forEach((year, yIndex) => {

      let optionYear = {
        ...year,
        labels: [year.labels[clickIndex]],
        values: [year.values[clickIndex]]
      }

      let selectYear = {
        ...year,
        labels: year.labels.filter((_, i) => i !== clickIndex),
        values: year.values.filter((_, i) => i !== clickIndex)
      }

      optionsChart.push(optionYear)
      selectChart.push(selectYear)

    })
    
    optionsTemp.push(optionsChart)
    selectTemp.push(selectChart)
  })

  setOptions(prev => {

    let newArr = prev
    
    let optionState = newArr.length > 0 ? newArr.map((chart, cIndex) => {

      let optionChart = optionsTemp[cIndex]

      return chart.map((year, yIndex) => {

        let optionYear = {
          ...year,
          labels: year.labels.concat(optionChart[yIndex].labels[0]),
          values: year.values.concat(optionChart[yIndex].values[0])
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

      //dictates number of charts affected by remove operation
      newArr[0] = selectedState[0]
      newArr[1] = selectedState[1]
      newArr[2].length > 0 ? newArr[2] = selectedState[2] : newArr[2] = []
      newArr[3] = selectedState[3]
    

      return [...newArr]
    }) 
  })
}


export const ceClearAll = (originalValues, setSelected, setOptions) => {
  setSelected(prev => {
    let cleared = prev.map(chart => chart.map(year => {
      year.labels = [];
      year.values = [];
      return year;
    }));

    return cleared;
  });

  setOptions(prev => {
    let fallbackValue = JSON.parse(JSON.stringify(originalValues));
    let filled = prev.length > 0 ? prev.map((chart, cIndex) => {
      let fillRef = fallbackValue[cIndex];
      return chart.map((year, yIndex) => {
        year.labels = ['BUF', 'CPT', 'JHB', 'EKU', 'MAN', 'MSU', 'NMA', 'TSH', 'ETH'];
        year.values = fillRef[yIndex].values;
        return year;
      });
    }) : fallbackValue;

    return filled;
  });
};

