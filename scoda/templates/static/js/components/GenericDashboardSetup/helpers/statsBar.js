import axios from "axios"

export const getStatTotals = (originalValues, cityLabels, setStats, selected) => {

    let totalHouseHolds = 0
    let houseHoldSize = 0
    let populationDensity = 0

    if (originalValues.length < 1) return
    //Totals
    originalValues[0].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        totalHouseHolds = values.values[valueIndex]
    })

    originalValues[1].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        houseHoldSize = values.values[valueIndex]
    })

    originalValues[4].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        populationDensity = values.values[valueIndex]
    })

    axios.get("/api/stats?indicator_id=704&average=True&year=2018").then(res => {
        setStats((prev) => (
            {
                ...prev,
                totalHouseHoldsAverage: [Math.round(res.data.total_average), "TOTAL Households"],
            }
        ))
    })
    axios.get(`/api/stats?indicator_id=1&average=True&year=2018&temp_indicator=${true}`).then(res => {
        setStats((prev) => (
            {
                ...prev,
                houseHoldSizeAverage: [Math.round(res.data.total_average), "Household size"],
            }
        ))
    })
    axios.get("/api/stats?indicator_id=701&average=True&year=2018").then(res => {
        setStats((prev) => (
            {
                ...prev,
                populationDensityAverage: [Math.round(res.data.total_average), "Population Density"]
            }
        )

        )
    })

    setStats((prev) => ({
        ...prev,
        totalHouseHolds: [Math.round(totalHouseHolds), "TOTAL Households"],
        houseHoldSize: [Math.round(houseHoldSize), "Household size"],
        populationDensity: [Math.round(populationDensity), "Population Density"],

    }))

}


export const getTransportModeStatsTotal = (setStats, selected) => {
    let endpoints = [
        `/api/explore_new?indicator_id=816&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=822&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=825&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=828&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=837&city=${selected}&year=2018`,
        `/api/stats?indicator_id=816&average=True&year=2018`,
        `/api/stats?indicator_id=822&average=True&year=2018`,
        `/api/stats?indicator_id=825&average=True&year=2018`,
        `/api/stats?indicator_id=828&average=True&year=2018`,
        `/api/stats?indicator_id=837&average=True&year=2018`,
        `/api/explore_new?indicator_id=816`,
        `/api/explore_new?indicator_id=822`,
        `/api/explore_new?indicator_id=825`,
        `/api/explore_new?indicator_id=828`,
        `/api/explore_new?indicator_id=837`,
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(

        (data) => {

            const rawChartData = [
                data[10].data, data[11].data, data[12].data, data[13].data, data[14].data
            ]

            let averageDenominatorForAllCities = []
            let averageDenominatorPerCity = []

            rawChartData.forEach((stat, statIndex) => {

                let averageValueForSingleChartAll = 0
                let averageValueForSingleChartByYear = 0

                stat.forEach(year => {

                    year.values.forEach(value => averageValueForSingleChartAll += value)

                    if (year.year === "2018") {

                        year.values.forEach(value => averageValueForSingleChartByYear += value)
                    }
                })
                averageDenominatorForAllCities.push(averageValueForSingleChartAll / rawChartData.length)
                averageDenominatorPerCity.push(averageValueForSingleChartByYear)
            })

            const values = data.map((value, valueIndex) => {

                if (valueIndex <= 4) {
                    let numberValue = value.data[0].values
                    return numberValue
                } else {

                    return value.data.total_average
                }
            })

            setStats(
                prev => {

                    let newArr = { ...prev }

                    newArr.first = [Math.round(values[0] / averageDenominatorPerCity[0] * 10000) / 100, "Walk"]
                    newArr.second = [Math.round(values[1] / averageDenominatorPerCity[1] * 10000) / 100, "MINIBUS TAXI"]
                    newArr.third = [Math.round(values[2] / averageDenominatorPerCity[2] * 10000) / 100, "BUS"]
                    newArr.fourth = [Math.round(values[3] / averageDenominatorPerCity[3] * 10000) / 100, "TRAIN"]
                    newArr.fifth = [Math.round(values[4] / averageDenominatorPerCity[4] * 10000) / 100, "OWN CAR"]
                    newArr.firstTot = [Math.round(values[5] / averageDenominatorForAllCities[0] * 10000) / 100, "Walk"]
                    newArr.secondTot = [Math.round(values[6] / averageDenominatorForAllCities[1] * 10000) / 100, "MINIBUS TAXI"]
                    newArr.thirdTot = [Math.round(values[7] / averageDenominatorForAllCities[2] * 10000) / 100, "BUS"]
                    newArr.fourthTot = [Math.round(values[8] / averageDenominatorForAllCities[3] * 10000) / 100, "TRAIN"]
                    newArr.fifthTot = [Math.round(values[9] / averageDenominatorForAllCities[4] * 10000) / 100, "OWN CAR"]

                    return newArr
                }
            )
        }
    )
}


export const getICTStatsTotal = (setStats, selected) => {
    let endpoints = [
        `/api/explore_new?indicator_id=941&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=944&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=947&city=${selected}&year=2018`,
        `/api/stats?indicator_id=941&average=True&year=2018`,
        `/api/stats?indicator_id=944&average=True&year=2018`,
        `/api/stats?indicator_id=947&average=True&year=2018`,
        `/api/explore_new?indicator_id=941`,
        `/api/explore_new?indicator_id=944`,
        `/api/explore_new?indicator_id=947`,
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(

        (data) => {

            const rawChartData = [
                data[6].data, data[7].data, data[8].data
            ]

            let averageDenominatorForAllCities = []
            let averageDenominatorPerCity = []

            rawChartData.forEach((stat, statIndex) => {

                let averageValueForSingleChartAll = 0
                let averageValueForSingleChartByYear = 0

                stat.forEach(year => {

                    year.values.forEach(value => averageValueForSingleChartAll += value)

                    if (year.year === "2018") {

                        year.values.forEach(value => averageValueForSingleChartByYear += value)
                    }
                })
                averageDenominatorForAllCities.push(averageValueForSingleChartAll / rawChartData.length)
                averageDenominatorPerCity.push(averageValueForSingleChartByYear)
            })

            const values = data.map((value, valueIndex) => {

                if (valueIndex <= 2) {

                    let numberValue = value.data[0].values[0]
                    return numberValue
                } else {

                    return value.data.total_average
                }
            })

            setStats(
                prev => {

                    let newArr = { ...prev }

                    newArr.first = [Math.round(values[0] / averageDenominatorPerCity[0] * 10000) / 100, "Fixed Line Telephone"]
                    newArr.second = [Math.round(values[1] / averageDenominatorPerCity[1] * 10000) / 100, "Mobile Telephone"]
                    newArr.third = [Math.round(values[2] / averageDenominatorPerCity[2] * 10000) / 100, "internet ConnectioN"]
                    newArr.firstTot = [Math.round(values[3] / averageDenominatorForAllCities[0] * 10000) / 100, "Fixed Line Telephone"]
                    newArr.secondTot = [Math.round(values[4] / averageDenominatorForAllCities[1] * 10000) / 100, "Mobile Telephone"]
                    newArr.thirdTot = [Math.round(values[5] / averageDenominatorForAllCities[2] * 10000) / 100, "internet ConnectioN"]

                    return newArr
                }
            )
        }
    )
}

export const getPublicTransportSpendStatsTotals = (setStats, selected) => {
    let endpoints = [
        `/api/explore_new?indicator_id=1084&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=1085&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=1086&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=1087&city=${selected}&year=2018`,

        `/api/stats?indicator_id=1084&average=True&year=2018`,
        `/api/stats?indicator_id=1085&average=True&year=2018`,
        `/api/stats?indicator_id=1086&average=True&year=2018`,
        `/api/stats?indicator_id=1087&average=True&year=2018`,

    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        (data) => {

            
            const values = data.map((value, valueIndex) => {

                if (valueIndex <= 3) {
                    let numberValue = value.data[0].values

                    return numberValue
                } else {

                    return value.data.total_average
                }

            })
            setStats(prev => {

                let newArr = { ...prev }

                newArr.first = [Math.round(values[0]), "< 10% of Household income"]
                newArr.second = [Math.round(values[1]), "10 - 20% of Household income"]
                newArr.third = [Math.round(values[2]), "20 - 30% of Household income"]
                newArr.fourth = [Math.round(values[3]), "> 30% of Household income"]

                newArr.firstTot = [Math.round(values[4]), "< 10% of Household income"]
                newArr.secondTot = [Math.round(values[5]), "10 - 20% of Household income"]
                newArr.thirdTot = [Math.round(values[6]), "20 - 30% of Household income"]
                newArr.fourthTot = [Math.round(values[7]), "> 30% of Household income"]

                return newArr
            })
        }
    )
}

export const getTravelTimeStatsTotals = (setStats, selected) => {
    let endpoints = [
        `/api/explore_new?indicator_id=845&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=854&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=863&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=872&city=${selected}&year=2018`,
        `/api/explore_new?indicator_id=881&city=${selected}&year=2018`,
        `/api/stats?indicator_id=845&average=True&year=2018`,
        `/api/stats?indicator_id=854&average=True&year=2018`,
        `/api/stats?indicator_id=863&average=True&year=2018`,
        `/api/stats?indicator_id=872&average=True&year=2018`,
        `/api/stats?indicator_id=881&average=True&year=2018`,
        `/api/explore_new?indicator_id=845`,
        `/api/explore_new?indicator_id=854`,
        `/api/explore_new?indicator_id=863`,
        `/api/explore_new?indicator_id=872`,
        `/api/explore_new?indicator_id=881`,
    ];


    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        (data) => {

            const rawChartData = [
                data[10].data, data[11].data, data[12].data, data[13].data, data[14].data
            ]

            let averageDenominatorForAllCities = []
            let averageDenominatorPerCity = []

            rawChartData.forEach((stat, statIndex) => {

                let averageValueForSingleChartAll = 0
                let averageValueForSingleChartByYear = 0

                stat.forEach(year => {

                    year.values.forEach(value => averageValueForSingleChartAll += value)

                    if (year.year === "2018") {

                        year.values.forEach(value => averageValueForSingleChartByYear += value)
                    }
                })
                averageDenominatorForAllCities.push(averageValueForSingleChartAll / rawChartData.length)
                averageDenominatorPerCity.push(averageValueForSingleChartByYear)
            })

            const values = data.map((value, valueIndex) => {

                if (valueIndex <= 4) {
                    let numberValue = value.data[0].values[0]

                    return numberValue
                } else {

                    return value.data.total_average
                }

            })
            setStats(prev => {

                let newArr = { ...prev }

                newArr.first = [Math.round(values[0] / averageDenominatorPerCity[0] * 10000) / 100, "15 minutes or less"]
                newArr.second = [Math.round(values[1] / averageDenominatorPerCity[1] * 10000) / 100, "15 - 30 Minutes"]
                newArr.third = [Math.round(values[2] / averageDenominatorPerCity[2] * 10000) / 100, "31 - 60 Minutes"]
                newArr.fourth = [Math.round(values[3] / averageDenominatorPerCity[3] * 10000) / 100, "61 - 90 Minutes"]
                newArr.fifth = [Math.round(values[4] / averageDenominatorPerCity[4] * 10000) / 100, "More Than 90 Minutes"]
                newArr.firstTot = [Math.round(values[5] / averageDenominatorForAllCities[0] * 10000) / 100, "15 minutes or less"]
                newArr.secondTot = [Math.round(values[6] / averageDenominatorForAllCities[1] * 10000) / 100, "15 - 30 Minutes"]
                newArr.thirdTot = [Math.round(values[7] / averageDenominatorForAllCities[2] * 10000) / 100, "31 - 60 Minutes"]
                newArr.fourthTot = [Math.round(values[8] / averageDenominatorForAllCities[3] * 10000) / 100, "61 - 90 Minutes"]
                newArr.fifthTot = [Math.round(values[9] / averageDenominatorForAllCities[4] * 10000) / 100, "More Than 90 Minutes"]

                return newArr
            })

        }
    )
}

export const getEmploymentStatTotals = (setStats, selected) => {

    let endpoints = [
        '/api/explore_new?indicator_id=909',
        '/api/explore_new?indicator_id=915',
        '/api/explore_new?indicator_id=918',
        '/api/explore_new?indicator_id=921',
    ];

    let salariesAve = 0

    axios.get("/api/stats?indicator_id=900&average=True&year=2018").then(res => {

        setStats(prev => {

            let newArr = { ...prev }

            newArr.salariesAve = [
                Math.round(res.data.total_average)
                , "Salaries/wages/ commission"
            ]

            return { ...newArr }
        })

    })

    axios.get("/api/explore_new?indicator_id=900").then(res => {
        res.data.forEach((values, index) => {

            let valueIndex = values.labels.indexOf(selected)

            if (values.year !== "2018") return

            salariesAve = values.values.reduce((a, b) => a + b, 0) / values.values.length

            if (values.year !== "2018" && valueIndex !== -1) return

            setStats(prev => {

                let newArr = { ...prev }

                newArr.salaries = [
                    Math.round(values.values[valueIndex])
                    , "Salaries/wages/ commission"]

                return { ...newArr }
            })

        })
    })

    let businessAve = 0
    axios.get("/api/explore_new?indicator_id=903").then(res => {
        res.data.forEach((values, index) => {

            let valueIndex = values.labels.indexOf(selected)

            if (values.year !== "2018") return

            businessAve = values.values.reduce((a, b) => a + b, 0) / values.values.length

            if (values.year !== "2018" && valueIndex !== -1) return

            setStats(prev => {

                let newArr = prev

                newArr.businessIncome = [
                    Math.round(values.values[valueIndex])
                    , "Income from a business"]
                newArr.businessIncomeAve = [
                    Math.round(businessAve)
                    , "Income from a business"
                ]
                return newArr
            })

        })
    })

    let remAve = 0

    axios.get("/api/explore_new?indicator_id=906").then(res => {
        res.data.forEach((values, index) => {

            let valueIndex = values.labels.indexOf(selected)

            if (values.year !== "2018") return
            remAve = values.values.reduce((a, b) => a + b, 0) / values.values.length

            if (values.year !== "2018" && valueIndex !== -1) return

            setStats(prev => {

                let newArr = { ...prev }

                newArr.remittances = [
                    Math.round(values.values[valueIndex])
                    , "Remittances"]
                newArr.remittancesAve = [
                    Math.round(remAve)
                    , "Remittances"
                ]
                return { ...newArr }
            })

        })
    })

    let grantAve = 0

    axios.get("/api/explore_new?indicator_id=912").then(res => {
        res.data.forEach((values, index) => {

            let valueIndex = values.labels.indexOf(selected)

            if (values.year !== "2018") return

            grantAve = values.values.reduce((a, b) => a + b, 0) / values.values.length

            if (values.year !== "2018" && valueIndex !== -1) return

            setStats(prev => {

                let newArr = prev

                newArr.grants = [
                    Math.round(values.values[valueIndex])
                    , "Grants"]
                newArr.grantsAve = [
                    Math.round(grantAve)
                    , "Grants"
                ]
                return { ...newArr }
            })

        })
    })

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        (data) => {

            let totalOther = 0
            let total = 0


            data.forEach((item, index) => {

                item.data.forEach((values, index) => {

                    let valueIndex = values.labels.indexOf(selected)

                    if (values.year !== "2018") return
                    total += values.values.reduce((a, b) => a + b, 0) / values.values.length

                    if (values.year !== "2018" && valueIndex !== -1) return

                    totalOther += values.values[valueIndex] === undefined ? 0 : values.values[valueIndex]
                })

            })

            setStats(prev => {

                let newArr = { ...prev }

                newArr.other = [
                    Math.round(totalOther)
                    , "Other"]
                newArr.otherAve = [
                    Math.round(total)
                    , "Other"
                ]
                return { ...newArr }
            })

        }
    );
}

export const getDwellingsStatTotals = (originalValues, cityLabels, setStats, selected) => {

    let formal = 0
    let informal = 0
    let traditional = 0
    let other = 0
    let formalTot = 0
    let informalTot = 0
    let traditionalTot = 0
    let otherTot = 0

    if (originalValues.length < 1) return
    //Totals
    originalValues[0].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        formal = values.values[valueIndex]
    })

    originalValues[1].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        informal = values.values[valueIndex]
    })

    originalValues[3].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        traditional = values.values[valueIndex]
    })

    originalValues[4].forEach((values, index) => {

        let valueIndex = values.labels.indexOf(cityLabels(selected))

        if (values.year !== "2018" && valueIndex !== -1) return

        other = values.values[valueIndex]
    })

    //Averages
    let thAverageCount = 0
    let hsAverageCount = 0
    let pdAverageCount = 0
    let otherCount = 0

    originalValues[0].forEach((values, index) => {

        if (values.year !== "2018") return

        thAverageCount++
        formalTot = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    originalValues[1].forEach((values, index) => {

        if (values.year !== "2018") return
        hsAverageCount++
        informalTot = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    originalValues[3].forEach((values, index) => {

        if (values.year !== "2018") return

        pdAverageCount++
        traditionalTot = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    originalValues[4].forEach((values, index) => {

        if (values.year !== "2018") return

        pdAverageCount++
        otherTot = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    setStats({

        formal: [Math.round(formal), "Formal Dwelling"],
        informal: [Math.round(informal), "Informal Dwelling"],
        traditional: [Math.round(traditional), "Traditional Dwelling"],
        other: [Math.round(other), "Other Dwelling"],
        formalTot: [Math.round(formalTot), "Formal Dwelling"],
        informalTot: [Math.round(informalTot), "Informal Dwelling"],
        traditionalTot: [Math.round(traditionalTot), "Traditional Dwelling"],
        otherTot: [Math.round(otherTot), "Other Dwelling"],
    })
}

export const getFoodSecurityStatTotals = async (originalValues, cityLabels, setStats, selected) => {

    let adequite = 0
    let inadequite = 0
    let severelyInadequite = 0

    let adequiteTot = 0
    let inadequiteTot = 0
    let severelyInadequiteTot = 0

    const [firstResponse, secondResponse, thirdResponse,
        firstAve, secondAve, thirdAve] = await Promise.all([
            axios.get(`/api/explore_new?indicator_id=1069&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1072&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1075&city=${selected}&year=2018`),

            axios.get(`/api/stats?indicator_id=1069&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1072&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1075&average=True&year=2018`),
        ]);

    adequite = firstResponse.data[0].values
    inadequite = secondResponse.data[0].values
    severelyInadequite = thirdResponse.data[0].values

    adequiteTot = firstAve.data.total_average
    inadequiteTot = secondAve.data.total_average
    severelyInadequiteTot = thirdAve.data.total_average


    setStats({
        ...{
            adequite: [Math.round(adequite), "Adequate Access to Food"],
            inadequite: [Math.round(inadequite), "Inadequate Access to Food"],
            severelyInadequite: [Math.round(severelyInadequite * 10) / 10, "Severely Inadequate Access to Food"],
            adequiteTot: [Math.round(adequiteTot), "Adequate Access to Food"],
            inadequiteTot: [Math.round(inadequiteTot), "Inadequate Access to Food"],
            severelyInadequiteTot: [Math.round(severelyInadequiteTot * 10) / 10, "Severely Inadequate Access to Food"],
        }
    })
}

export const getLifeExpectancyStatTotals = async (originalValues, cityLabels, setStats, selected) => {

    let aveMale = 0
    let aveFemale = 0
    let publicHealthCare = 0
    let medicalAid = 0

    let aveMaleTot = 0
    let aveFemaleTot = 0
    let publicHealthCareTot = 0
    let medicalAidTot = 0

    const [firstResponse, secondResponse, thirdResponse, fourthResponse,
        firstAve, secondAve, thirdAve, fourthAve] = await Promise.all([
            axios.get(`/api/explore_new?indicator_id=719&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=721&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1081&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1078&city=${selected}&year=2018`),

            axios.get(`/api/stats?indicator_id=719&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=721&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1081&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1078&average=True&year=2018`)
        ]);

    aveMale = firstResponse.data[0] ? firstResponse.data[0].values : 0

    aveFemale = secondResponse.data[0] ? secondResponse.data[0].values : 0

    publicHealthCare = thirdResponse.data[0] ? thirdResponse.data[0].values : 0

    medicalAid = fourthResponse.data[0] ? fourthResponse.data[0].values : 0

    aveMaleTot = firstAve.data.total_average ? firstAve.data.total_average : 0

    aveFemaleTot = secondAve.data.total_average ? secondAve.data.total_average : 0

    publicHealthCareTot = thirdAve.data.total_average ? thirdAve.data.total_average : 0

    medicalAidTot = fourthAve.data.total_average ? fourthAve.data.total_average : 0

    setStats({
        aveMale: [Math.round(aveMale), "AVE. Male life Expectancy"],
        aveFemale: [Math.round(aveFemale), "AVE. Female life Expectancy"],
        publicHealthCare: [Math.round(publicHealthCare * 10) / 10, "Public Healthcare Usage"],
        medicalAid: [Math.round(medicalAid * 10) / 10, "Medical Aid Coverage"],
        aveMaleTot: [Math.round(aveMaleTot), "AVE. Male life Expectancy"],
        aveFemaleTot: [Math.round(aveFemaleTot), "AVE. Female life Expectancy"],
        publicHealthCareTot: [Math.round(publicHealthCareTot * 10) / 10, "Public Healthcare Usage"],
        medicalAidTot: [Math.round(medicalAidTot * 10) / 10, "Medical Aid Coverage"],
    })
}

export const getEducationStatTotals = async (originalValues, cityLabels, setStats, selected) => {

    let noSchooling = 0
    let primarySchooling = 0
    let secondarySchooling = 0
    let tertiaryEducation = 0

    let noSchoolingTot = 0
    let primarySchoolingTot = 0
    let secondarySchoolingTot = 0
    let tertiaryEducationTot = 0

    const [firstResponse, secondResponse, thirdResponse, fourthResponse,
        firstAve, secondAve, thirdAve, fourthAve] = await Promise.all([
            axios.get(`/api/explore_new?indicator_id=1093&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1099&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1105&city=${selected}&year=2018`),
            axios.get(`/api/explore_new?indicator_id=1108&city=${selected}&year=2018`),

            axios.get(`/api/stats?indicator_id=1093&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1099&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1105&average=True&year=2018`),
            axios.get(`/api/stats?indicator_id=1108&average=True&year=2018`)
        ]);

    noSchooling = firstResponse.data[0].values

    primarySchooling = secondResponse.data[0].values

    secondarySchooling = thirdResponse.data[0].values

    tertiaryEducation = fourthResponse.data[0].values

    noSchoolingTot = firstAve.data.total_average

    primarySchoolingTot = secondAve.data.total_average

    secondarySchoolingTot = thirdAve.data.total_average

    tertiaryEducationTot = fourthAve.data.total_average

    setStats({
        noSchooling: [Math.round(noSchooling), "No Schooling"],
        primarySchooling: [Math.round(primarySchooling), "Primary School Completed"],
        secondarySchooling: [Math.round(secondarySchooling * 10) / 10, "Secondary SChool Completed"],
        tertiaryEducation: [Math.round(tertiaryEducation * 10) / 10, "Tertiary Edu. Completed"],
        noSchoolingTot: [Math.round(noSchoolingTot), "No Schooling"],
        primarySchoolingTot: [Math.round(primarySchoolingTot), "Primary School Completed"],
        secondarySchoolingTot: [Math.round(secondarySchoolingTot * 10) / 10, "Secondary SChool Completed"],
        tertiaryEducationTot: [Math.round(tertiaryEducationTot * 10) / 10, "Tertiary Edu. Completed"],
    })
}

