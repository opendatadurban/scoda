export const chartWrapperClassNames = (gridItems, dropdownName, indicator_ids) => {

    return gridItems > 4 &&
        (dropdownName === "Food Security, Literacy and Inequality") ?
        "grid-container horizontal_food" :
        gridItems > 4 ?
            "grid-container" :
            gridItems === 4 && (dropdownName === "Life Expectancy and Health") ?
                "grid-container-4 horizontal" :
                gridItems === 4 && (dropdownName === "Public Transport Spend") ?
                "grid-container-4 no_divider" :
                gridItems === 4 ?
                    "grid-container-4" :
                    gridItems === 3 ?
                        "grid-container-4 three_charts" :
                        gridItems === 2 && indicator_ids.includes("indicator text box") ?
                            "grid-2-text" :
                            gridItems === 2 ? "grid-only-charts-2" : "grid-container-1"
}