async function byIngredientBtn() {
    let data = await fetchDataByAllIngredients();
    setAllIngredients(data);
}


async function fetchDataByAllIngredients() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
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

function setAllIngredients(data) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("homePageDiv").style.display = "none";
        document.getElementById("ingredientsPageDiv").style.display = "grid";
        console.log("Ingredient Page Load");


        let size = array.length > 14 ? 14 : array.length;

        for (let index = 0; index < 14; index++) {
            console.log("index : ", index);

            document.getElementById(`ingredientsDiv${index + 1}`).style.display = "grid";
            document.getElementById(`ingredientsPDiv${index + 1}`).style.display = "grid";
        }

        console.log(size);
        for (let index = 0; index < size; index++) {
            document.getElementById(`ingredientsCategoryP${index + 1}`).innerText = array[index].strIngredient;

            document.getElementById(`ingredientsCategoryImg${index + 1}`).src = array[index].strThumb;
        }

        for (let index = size + 1; index < 14; index++) {
            document.getElementById(`ingredientsDiv${index + 1}`).style.display = "none";
            document.getElementById(`ingredientsPDiv${index + 1}`).style.display = "none";
        }
    } else {
        console.log("naaa");

    }
}
function selectIngredients(number) {
    passeExplorerBySelectedingredients(number)
}


async function passeExplorerBySelectedingredients(number) {
    let ingredient = document.getElementById(`ingredientsCategoryP${number}`).innerText;

    let data = await fetchGetIngredientsAllMeal(ingredient);

    setAllValueForSelectedIngredients(data, ingredient);
}

async function fetchGetIngredientsAllMeal(ingredient) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        let data = await res.json();
        console.log("data is :", data);

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

function setAllValueForSelectedIngredients(data, ingredient) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("ingredientsPageDiv").style.display = "none";
        document.getElementById("selectedMealPageDiv").style.display = "grid";
        console.log("Selected Meal Page Load For Ingredient Page...");


        document.getElementById("searchResultTitleSelected").innerText = "All Meal Categories In " + ingredient.toUpperCase();

        for (let index = 1; index <=25; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "grid";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "grid";
        }

        let size = array.length > 25 ? 25 : array.length;
        console.log(size);
        for (let index = 0; index < size; index++) {
            document.getElementById(`selectedPageCategoryP${index + 1}`).innerText = array[index].strMeal;
            document.getElementById(`selectedPageCategoryImg${index + 1}`).src = array[index].strMealThumb;
        }
        for (let index = size; index < 25; index++) {
            document.getElementById(`selectedPageDiv${index + 1}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index + 1}`).style.display = "none";
        }
        // scrollDown();
    } else {
        console.log("naaa");

    }
}


// function scrollDown() {
//      window.scrollBy({
//         top: 900,
//         left: 0,
//         behavior: 'smooth'
//     });
// }

