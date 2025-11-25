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
        console.log("Load Explorer Page...");
        

        document.getElementById("searchResultTitleExplorer").innerText = "All Meal Categories By Area";




        let size = array.length > 14 ? 14 : array.length;
        console.log(size);
        for (let index = 0; index < size; index++) {
            document.getElementById(`explorerCategoryP${index + 1}`).innerText = array[index].strArea;
            console.log("Error cardeka :", index + 1);
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

    let data = await fetchGetCountrAllMeal(country);
    setAllValueForSelectedCountry(data, country);
}

async function fetchGetCountrAllMeal(country) {
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
        console.log("Load Selected Meal Page...");
        

        document.getElementById("searchResultTitleSelected").innerText = "All Meal Categories In " + country.toUpperCase();

        let size = array.length > 14 ? 14 : array.length;
        console.log(size);
        for (let index = 0; index < size; index++) {

            document.getElementById(`selectedPageCategoryImg${index + 1}`).style.display = "grid";

            document.getElementById(`selectedPageCategoryP${index + 1}`).innerText =array[index].strMeal;

            document.getElementById(`selectedPageCategoryImg${index + 1}`).src =array[index].strMealThumb;
        }
        for (let index = size; index < 14; index++) {
            document.getElementById(`selectedPageDiv${index + 1}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index + 1}`).style.display = "none";
        }
    } else {
        console.log("naaa");

    }
}





