async function byAreaBtn() {
    let data = await fetchDataByAllAreas();

    setAllAreas(data);
}

async function fetchDataByAllAreas() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        let data = await res.json();

        if (data.meals != null) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log("erro check : ", error);
        return null;
    }
}

function setAllAreas(data) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("homePageDiv").style.display = "none";
        document.getElementById("explorerMealPageDiv").style.display = "grid";

        document.getElementById("explorerRow2").style.marginTop = "1.7rem"
        document.getElementById("explorerRow3").style.marginBottom = "7.5rem"

        document.getElementById("explorerRow3").style.textAlign = "start"
        document.getElementById("explorerRow2").style.textAlign = "start"
        document.getElementById("explorerRow1").style.textAlign = "start"


        for (let index = 1; index <= 14; index++) {
            document.getElementById(`explorerCategoryP${index}`).style.textAlign = "start";
            document.getElementById(`explorerCategoryP${index}`).style.transform = "translateY(-0.3rem)";
        }

        console.log("Explorer Page Load For Area...");

        document.getElementById("searchResultTitleExplorer").innerText = "All Area's";

        let size = array.length > 14 ? 14 : array.length;

        for (let index = 0; index < 25; index++) {

            document.getElementById(`selectedPageDiv${index + 1}`).style.display = "grid";
            document.getElementById(`selectedPagePDiv${index + 1}`).style.display = "grid";
        }


        console.log(size);
        for (let index = 0; index < size; index++) {
            console.log("uda", index);

            document.getElementById(`explorerCategoryP${index + 1}`).innerText = array[index].strArea;
            // document.getElementById("areaRow3").style.margin="-2rem";
            // console.log("Error cardeka :", index + 1);
            document.getElementById(`explorerCategoryImg${index + 1}`).style.display = "none";
        }

        for (let index = size + 1; index <= 14; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "none";
        }
    } else {
        console.log("naaa");

    }
}


async function passeExplorerBySelectedCountry(number) {
    let country = document.getElementById(`explorerCategoryP${number}`).innerText;

    let data = await fetchGetCountryAllMeal(country);
    setAllValueForSelectedCountry(data, country);
}

async function fetchGetCountryAllMeal(country) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        let data = await res.json();

        if (data.meals != null) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log("erro check : ", error);
        return null;
    }
}

function setAllValueForSelectedCountry(data, country) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("explorerMealPageDiv").style.display = "none";
        document.getElementById("selectedMealPageDiv").style.display = "grid";
        console.log("Selected Meal Page Load For Area...");


        document.getElementById("searchResultTitleSelected").innerText = "All Meal Categories In " + country.toUpperCase();

        for (let index = 1; index <= 25; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "grid";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "grid";
        }

        let size = array.length > 25 ? 25 : array.length;
        console.log("Size eka : ", size);
        for (let index = 0; index < size; index++) {

            document.getElementById(`selectedPageCategoryImg${index + 1}`).style.display = "grid";
            document.getElementById(`selectedPageCategoryP${index + 1}`).style.display = "flex";

            document.getElementById(`selectedPageCategoryP${index + 1}`).innerText = array[index].strMeal;

            document.getElementById(`selectedPageCategoryImg${index + 1}`).src = array[index].strMealThumb;
        }
        for (let index = size; index < 25; index++) {
            document.getElementById(`selectedPageDiv${index + 1}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index + 1}`).style.display = "none";
        }
    } else {
        console.log("naaa");

    }
}





