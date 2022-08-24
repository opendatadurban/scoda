export const tickExceptionsForDwellings = (dropdownName,chartIndex) => {
  
    const conditions = {
        dashboard: dropdownName === "Dwellings",
        chart1: chartIndex === 0,
        chart2: chartIndex === 1,
        chart4: chartIndex === 3,
        chart5: chartIndex === 4 
    }

    if(conditions.dashboard){
        if(conditions.chart1){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 100,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }else if(conditions.chart2){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 50,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }else if(conditions.chart4){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 25,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }else if(conditions.chart5){
            return{
                fontFamily: "Montserrat",
                    min: 0,
                    max: 25,
                    callback: function (value) { 
                        return value + "" 
                    }
            }
        }
    }
}