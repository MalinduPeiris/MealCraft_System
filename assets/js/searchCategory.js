async function selectCategory(num) {
    let getTiltle = document.getElementById(`explorerCategoryP${num}`).innerText;
    let getData = await fetchData(getTiltle);
    console.log("sadassasas", getData);

    setValues(getData, getTiltle);

}


async function fetchData(title) {
    console.log("awa");

    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`);
        let data = await res.json();
        if (data.meals == null) {
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////

function setValues(data, getTiltle) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("explorerMealPageDiv").style.display = "none";
        document.getElementById("selectedMealPageDiv").style.display = "grid";

        console.log("Load Selected Meal Page...", getTiltle);
        document.getElementById("searchResultTitleSelected").innerText = "All " + getTiltle + " Dish Categories";



        let size = array.length > 14 ? 14 : array.length;
        console.log(size);
        for (let index = 0; index < size; index++) {

            document.getElementById(`selectedPageCategoryImg${index + 1}`).src = array[index].strMealThumb;

            console.log("Error cardeka :", index + 1);

            document.getElementById(`selectedPageCategoryP${index + 1}`).innerText = array[index].strMeal;
        }



        for (let index = size + 1; index <= 14; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "none";
        }
    } else {
        console.log("naaa");

    }
}

async function selectCategorySelectedPage(num) {
    let searchedValue = document.getElementById(`selectedPageCategoryP${num}`).innerText;
    let data = await fetchDataForSelected(searchedValue);

    if (data != null) {
        showRecipe(data);
    }

}

async function fetchDataForSelected(searchedValue) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`);
        let data = await res.json();

        return data;
    } catch (error) {
        return null;
    }
}

function showRecipe(data) {
    if (data != null) {
        console.log("Load recipe page.....");

        document.getElementById("selectedMealPageDiv").style.display = "none";
        document.getElementById("mealsPageDiv").style.display = "grid";

        document.getElementById("heroImage").style.display = "grid";
        document.getElementById("heroImage").src = data.meals[0].strMealThumb;
        document.getElementById("mealsDetailsHeroTitle").innerText = data.meals[0].strMeal;
        document.getElementById("mealsDetailsCategory").innerText = "Category : " + data.meals[0].strCategory;
        document.getElementById("mealsDetailsArea").innerText = "Area : " + data.meals[0].strArea;
        document.getElementById("mealsDetailsTags").innerText = "Tags : " + data.meals[0].strTags;
        document.getElementById("mealsDetailsInstructions").innerText = data.meals[0].strInstructions;

        let urlLink = data.meals[0].strYoutube;

        let videoId = urlLink.split("v=")[1];
        let newUrl = `https://www.youtube.com/embed/${videoId}`; 
 
        document.getElementById("mealsDetailsVideo").src = newUrl;
        document.getElementById("heroImage").src = data.meals[0].strMealThumb;

        document.getElementById("ingrediend1").innerText = data.meals[0].strMeasure1 + " , " + data.meals[0].strIngredient1;
        document.getElementById("ingrediend2").innerText = data.meals[0].strMeasure2 + " , " + data.meals[0].strIngredient2;
        document.getElementById("ingrediend3").innerText = data.meals[0].strMeasure3 + " , " + data.meals[0].strIngredient3;
        document.getElementById("ingrediend4").innerText = data.meals[0].strMeasure4 + " , " + data.meals[0].strIngredient4;
        document.getElementById("ingrediend5").innerText = data.meals[0].strMeasure5 + " , " + data.meals[0].strIngredient5;
        document.getElementById("ingrediend6").innerText = data.meals[0].strMeasure6 + " , " + data.meals[0].strIngredient6;
        document.getElementById("ingrediend7").innerText = data.meals[0].strMeasure7 + " , " + data.meals[0].strIngredient7;
        document.getElementById("ingrediend8").innerText = data.meals[0].strMeasure8 + " , " + data.meals[0].strIngredient8;
        document.getElementById("ingrediend9").innerText = data.meals[0].strMeasure9 + " , " + data.meals[0].strIngredient9;
        document.getElementById("ingrediend10").innerText = data.meals[0].strMeasure10 + " , " + data.meals[0].strIngredient10;
        document.getElementById("ingrediend11").innerText = data.meals[0].strMeasure11 + " , " + data.meals[0].strIngredient11;
        document.getElementById("ingrediend12").innerText = data.meals[0].strMeasure12 + " , " + data.meals[0].strIngredient12;
        document.getElementById("ingrediend13").innerText = data.meals[0].strMeasure13 + " , " + data.meals[0].strIngredient13;
        document.getElementById("ingrediend14").innerText = data.meals[0].strMeasure14 + " , " + data.meals[0].strIngredient14;
        document.getElementById("ingrediend15").innerText = data.meals[0].strMeasure15 + " , " + data.meals[0].strIngredient15;
        document.getElementById("ingrediend16").innerText = data.meals[0].strMeasure16 + " , " + data.meals[0].strIngredient16;

        for (let index = 0; index < 16; index++) {
            document.getElementById(`ingrediend${index + 1}`).innerText.trim() === "," ||
                document.getElementById(`ingrediend${index + 1}`).innerText === ("null , null")
                ? document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "none"
                : document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "flex";
        }

        console.log("yes :", data);
    } else {
        document.getElementById("homePageDiv").style.display = "grid";
        document.getElementById("mealsPageDiv").style.display = "none";

        console.log(data);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: searchedValue + " is not found!",
        });
    }
}





