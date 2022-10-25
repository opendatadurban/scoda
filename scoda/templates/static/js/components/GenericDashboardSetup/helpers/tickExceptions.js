export const tickExceptionsForDwellings = (dropdownName,chartIndex) => {
  
    const dwellingsConditions = {
        dashboard: dropdownName === "Dwellings",
        chart1: chartIndex === 0,
        chart2: chartIndex === 1,
        chart4: chartIndex === 3,
        chart5: chartIndex === 4 
    }

    const foodSecurityConditions = {
        dashboard: dropdownName === "Food Security, Literacy and Inequality",
        chart1: chartIndex === 0,
        chart2: chartIndex === 1,
        chart3: chartIndex === 2,
    }

    const lifeExpectancyConditions = {
        dashboard: dropdownName === "Life Expectancy and Health",
        chart1: chartIndex === 0,
        chart2: chartIndex === 1,
        chart3: chartIndex === 2,
        chart4: chartIndex === 3,
    }

    if(dwellingsConditions.dashboard){
        if(dwellingsConditions.chart1){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 100,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
        else if(dwellingsConditions.chart2){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 50,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }else if(dwellingsConditions.chart4){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 25,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }else if(dwellingsConditions.chart5){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 25,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
         else{
            return {
                fontFamily: "Montserrat",
                beginAtZero: true,
                callback: function (value, index, values) {
                 
                    if (value < 1000000 && value > 1000) { values = Math.round(value) / 1000 + 'K ' }
                    else if (value >= 1000000) { values = Math.round(value) / 1000000 + 'M ' }
                    else if (value <= 1000 && value > 11) { values = Math.round(value) / 1 }
                    else if (value <= 11) { values = value }
                    return values
                }
            }
        }
    }

    else if (foodSecurityConditions.dashboard){
        if(foodSecurityConditions.chart1){
            return {
                fontFamily: "Montserrat",
                    min: 0,
                    max: 100,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
        else if(foodSecurityConditions.chart2){
            return {
                fontFamily: "Montserrat",
                    min: 0,
                    max: 80,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
         else if(foodSecurityConditions.chart3){
            return {
                fontFamily: "Montserrat",
                    min: 0,
                    max: 80,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
         else {
            return {
                fontFamily: "Montserrat",
                beginAtZero: true,
                callback: function (value, index, values) {
                 
                    if (value < 1000000 && value > 1000) { values = Math.round(value) / 1000 + 'K ' }
                    else if (value >= 1000000) { values = Math.round(value) / 1000000 + 'M ' }
                    else if (value <= 1000 && value > 11) { values = Math.round(value) / 1 }
                    else if (value <= 11) { values = value }
                    return values
                }
            }
        }
    }

    else if( lifeExpectancyConditions.dashboard){
        
        if(lifeExpectancyConditions.chart2){
            return {
                fontFamily: "Montserrat",
                    min: 0,
                    max: 80,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
        else if(lifeExpectancyConditions.chart4){
            return {
                fontFamily: "Montserrat",
                    min: 0,
                    max: 70,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
        else {

            return {
    
                fontFamily: "Montserrat",
                beginAtZero: true,
                callback: function (value, index, values) {
                 
                    if (value < 1000000 && value > 1000) { values = Math.round(value) / 1000 + 'K ' }
                    else if (value >= 1000000) { values = Math.round(value) / 1000000 + 'M ' }
                    else if (value <= 1000 && value > 11) { values = Math.round(value) / 1 }
                    else if (value <= 11) { values = value }
                    return values
                }
            }
        }

    }

    else {

        return {

            fontFamily: "Montserrat",
            beginAtZero: true,
            callback: function (value, index, values) {
             
                if (value < 1000000 && value > 1000) { values = Math.round(value) / 1000 + 'K ' }
                else if (value >= 1000000) { values = Math.round(value) / 1000000 + 'M ' }
                else if (value <= 1000 && value > 11) { values = Math.round(value) / 1 }
                else if (value <= 11) { values = value }
                return values
            }
        }
    }
}