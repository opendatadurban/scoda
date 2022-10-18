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
    // totalHouseHoldsAverage: [Math.round(totalHouseHoldsAverage ) , "TOTAL Households"],
    // houseHoldSizeAverage: [Math.round(houseHoldSizeAverage ) , "Household size"],
    // populationDensityAverage: [Math.round(populationDensityAverage ) , "Population Density"]

    setStats((prev) => ({
        ...prev,
        totalHouseHolds: [Math.round(totalHouseHolds), "TOTAL Households"],
        houseHoldSize: [Math.round(houseHoldSize), "Household size"],
        populationDensity: [Math.round(populationDensity), "Population Density"],

    }))

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

export const getFoodSecurityStatTotals = (originalValues, cityLabels, setStats, selected) => {

    let adequite = 0
    let inadequite = 0
    let severelyInadequite = 0
    let adequiteTot = 0
    let inadequiteTot = 0
    let severelyInadequiteTot = 0

    setStats({

        adequite: [Math.round(adequite), "Adequate Access to Food"],
        inadequite: [Math.round(inadequite), "Inadequate Access to Food"],
        severelyInadequite: [Math.round(severelyInadequite), "Severely Inadequate Access to Food"],
        adequiteTot: [Math.round(adequiteTot), "Adequate Access to Food"],
        inadequiteTot: [Math.round(inadequiteTot), "Inadequate Access to Food"],
        severelyInadequiteTot: [Math.round(severelyInadequiteTot), "Severely Inadequate Access to Food"],
    })
}

export const getLifeExpectancyStatTotals = (originalValues, cityLabels, setStats, selected) => {

    let aveMale = 0
    let aveFemale = 0
    let publicHealthCare = 0
    let medicalAid = 0
    let aveMaleTot = 0
    let aveFemaleTot = 0
    let publicHealthCareTot = 0
    let medicalAidTot = 0


    setStats({

        aveMale: [0, "AVE. Male life Expectancy"],
        aveFemale: [0, "AVE. Female life Expectancy"],
        publicHealthCare: [0, "Public Healthcare Usage"],
        medicalAid: [0, "Medical Aid Coverage"],
        aveMaleTot: [0, "AVE. Male life Expectancy"],
        aveFemaleTot: [0, "AVE. Female life Expectancy"],
        publicHealthCareTot: [0, "Public Healthcare Usage"],
        medicalAidTot: [0, "Medical Aid Coverage"],
    })
}

export const getEducationStatTotals = async (originalValues, cityLabels, setStats, selected) => {


    let noSchooling = 0
    let primarySchooling = 0
    let secondarySchooling = 0
    let tertiaryEducation = 0

    const [firstResponse, secondResponse, thirdResponse, fourthResponse] = await Promise.all([
        axios.get(`/api/explore_new?indicator_id=1093`),
        axios.get(`/api/explore_new?indicator_id=1099`),
        axios.get(`/api/explore_new?indicator_id=1105`),
        axios.get(`/api/explore_new?indicator_id=1108`)
      ]);

    firstResponse.data.forEach((values, index) => {
        let valueIndex = values.labels.indexOf(selected)

        if (values.year !== "2018" && valueIndex !== -1) return
        noSchooling = values.values[valueIndex]
    })

    secondResponse.data.forEach((values, index) => {
        let valueIndex = values.labels.indexOf(selected)

        if (values.year !== "2018" && valueIndex !== -1) return
        primarySchooling = values.values[valueIndex]
    })

    thirdResponse.data.forEach((values, index) => {
        let valueIndex = values.labels.indexOf(selected)

        if (values.year !== "2018" && valueIndex !== -1) return
        secondarySchooling = values.values[valueIndex]
    })

    fourthResponse.data.forEach((values, index) => {

        let valueIndex = values.labels.indexOf(selected)

        if (values.year !== "2018" && valueIndex !== -1) return
        tertiaryEducation = values.values[valueIndex]
    })

    setStats({
        noSchooling: [Math.round(noSchooling), "No Schooling"],
        primarySchooling: [Math.round(primarySchooling), "Primary School Completed"],
        secondarySchooling: [Math.round(secondarySchooling), "Secondary SChool Completed"],
        tertiaryEducation: [Math.round(tertiaryEducation), "Tertiary Edu. Completed"],
        noSchoolingTot: [0, "No Schooling"],
        primarySchoolingTot: [0, "Primary School Completed"],
        secondarySchoolingTot: [0, "Secondary SChool Completed"],
        tertiaryEducationTot: [0, "Tertiary Edu. Completed"],
    })
} 