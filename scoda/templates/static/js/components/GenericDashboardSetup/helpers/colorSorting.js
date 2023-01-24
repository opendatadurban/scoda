import { orangeGradientColors, peopleHouseholdColors, secondaryColors, sustainabilityColors } from "./helpers"

export const colorSorting = (item, index, genericIndex, dropdownName,colorCount, yearColors) => {

    if (dropdownName === "Life Expectancy and Health" && index > 1) {

        if (parseInt(item.year) === 2015 || parseInt(item.year) === 2016) {

          item.year = parseInt(item.year) === 2015 ? "2011-2015" : "2016-2020"
          item['color'] = item.year === "2011-2015" ? "#4AD2D5" : "#5F993B"
        } else {
          return
        }


      } else {
        item['color'] = yearColors[colorCount]
      }

      if(dropdownName === 'Citizen Engagement' && (index === 1 || index === 3)){
        item['color'] = orangeGradientColors[colorCount]
      }

      if (dropdownName === "Sustainability" && genericIndex === 3) {
        item['color'] = sustainabilityColors[colorCount]
      }

      if (index === 5 && dropdownName === "People and Households") {
        item['color'] = secondaryColors[colorCount]
      }

      if (index === 5 && dropdownName !== "People and Households") {
        item['color'] = peopleHouseholdColors[colorCount + 2]
      }

}