import axios from "axios"

export const getStatTotals = (originalValues, cityLabels, setStats, selected) => {

    let totalHouseHolds = 0
    let houseHoldSize = 0
    let populationDensity = 0
    let totalHouseHoldsAverage = 0
    let houseHoldSizeAverage = 0
    let populationDensityAverage = 0

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

    //Averages
    let thAverageCount = 0
    let hsAverageCount = 0
    let pdAverageCount = 0

    originalValues[0].forEach((values, index) => {

        if (values.year !== "2018") return

        thAverageCount++
        totalHouseHoldsAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    originalValues[1].forEach((values, index) => {

        if (values.year !== "2018") return
        hsAverageCount++
        houseHoldSizeAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    originalValues[4].forEach((values, index) => {

        if (values.year !== "2018") return

        pdAverageCount++
        populationDensityAverage = values.values.reduce((a, b) => a + b, 0) / values.values.length
    })

    setStats({

        totalHouseHolds: [Math.round((totalHouseHolds + Number.EPSILON) * 100) / 100, "TOTAL Households"],
        houseHoldSize: [Math.round((houseHoldSize + Number.EPSILON) * 100) / 100, "Household size"],
        populationDensity: [Math.round((populationDensity + Number.EPSILON) * 100) / 100, "Population Density"],
        totalHouseHoldsAverage: [Math.round((totalHouseHoldsAverage + Number.EPSILON) * 100) / 100, "TOTAL Households"],
        houseHoldSizeAverage: [Math.round((houseHoldSizeAverage + Number.EPSILON) * 100) / 100, "Household size"],
        populationDensityAverage: [Math.round((populationDensityAverage + Number.EPSILON) * 100) / 100, "Population Density"]
    })

}

export const getEmploymentStatTotals = (setStats, selected) => {

    let endpoints = [
        '/api/explore_new?indicator_id=909',
        '/api/explore_new?indicator_id=915',
        '/api/explore_new?indicator_id=918',
        '/api/explore_new?indicator_id=921',
    ];

    let salariesAve = 0

    axios.get("/api/explore_new?indicator_id=900").then(res => {
        res.data.forEach((values, index) => {

            let valueIndex = values.labels.indexOf(selected)

            if (values.year !== "2018") return

            salariesAve = values.values.reduce((a, b) => a + b, 0) / values.values.length

            if (values.year !== "2018" && valueIndex !== -1) return

            setStats(prev => {

                let newArr = {...prev}

                newArr.salaries = [
                    Math.round((values.values[valueIndex] + Number.EPSILON) * 100) / 100
                    , "Income from a business"]
                newArr.salariesAve = [
                    Math.round((salariesAve + Number.EPSILON) * 100) / 100
                    , "Income from a business"
                ]
                return {...newArr}
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
                    Math.round((values.values[valueIndex] + Number.EPSILON) * 100) / 100
                    , "Income from a business"]
                newArr.businessIncomeAve = [
                    Math.round((businessAve + Number.EPSILON) * 100) / 100
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

                let newArr = {...prev}

                newArr.remittances = [
                    Math.round((remAve + Number.EPSILON) * 100) / 100
                    , "Remittances"]
                newArr.remittancesAve = [
                    Math.round((businessAve + Number.EPSILON) * 100) / 100
                    , "Remittances"
                ]
                return {...newArr}
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
                    Math.round((values.values[valueIndex] + Number.EPSILON) * 100) / 100
                    , "Grants"]
                newArr.grantsAve = [
                    Math.round((grantAve + Number.EPSILON) * 100) / 100
                    , "Grants"
                ]
                return {...newArr}
            })

        })
    })

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
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

                let newArr = {...prev}

                newArr.other = [
                    Math.round((totalOther + Number.EPSILON) * 100) / 100
                    , "Other"]
                newArr.otherAve = [
                    Math.round(((total) + Number.EPSILON) * 100) / 100
                    , "Other"
                ]
                return {...newArr}
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

        formal: [Math.round((formal + Number.EPSILON) * 100) / 100, "Formal Dwelling"],
        informal: [Math.round((informal + Number.EPSILON) * 100) / 100, "Informal Dwelling"],
        traditional: [Math.round((traditional + Number.EPSILON) * 100) / 100, "Traditional Dwelling"],
        other: [Math.round((other + Number.EPSILON) * 100) / 100, "Other Dwelling"],
        formalTot: [Math.round((formalTot + Number.EPSILON) * 100) / 100, "Formal Dwelling"],
        informalTot: [Math.round((informalTot + Number.EPSILON) * 100) / 100, "Informal Dwelling"],
        traditionalTot: [Math.round((traditionalTot + Number.EPSILON) * 100) / 100, "Traditional Dwelling"],
        otherTot: [Math.round((otherTot + Number.EPSILON) * 100) / 100, "Other Dwelling"],
    })

}