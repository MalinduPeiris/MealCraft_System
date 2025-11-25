

async function homeSearching() {
    let homeSearchedValue = document.getElementById("navSearchTxt");
    let searchedValue = homeSearchedValue.value.trim();

    console.log(searchedValue);

    if (searchedValue.length > 0) {
        console.log("Athula :", searchedValue);
        document.getElementById("heroImage").style.display = "none";
        document.getElementById("homePageDiv").style.display = "none";
        document.getElementById("mealsPageDiv").style.display = "grid";

        let data = await setAllIngredienceForSearched(searchedValue);
        setIngredientPageValues(data);


    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Plase Search Correctly !",
        });
    }
}

function setIngredientPageValues(data) {
    if (data != null) {

        document.getElementById("heroImage").style.display = "grid";
        document.getElementById("heroImage").src = data.meals[0].strMealThumb;
        document.getElementById("mealsDetailsHeroTitle").innerText = data.meals[0].strMeal;
        document.getElementById("mealsDetailsCategory").innerText = "Category : " + data.meals[0].strCategory;
        document.getElementById("mealsDetailsArea").innerText = "Area : " + data.meals[0].strArea;
        document.getElementById("mealsDetailsTags").innerText = "Tags : " + data.meals[0].strTags;
        document.getElementById("mealsDetailsInstructions").innerText = data.meals[0].strInstructions;
        //document.getElementById("mealsDetailsVideo").src = data.meals[0].strYoutube;
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

        document.getElementById("ingrediend1").innerText.trim() === "," ||
            document.getElementById("ingrediend1").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv1").style.display = "none"
            : document.getElementById("ingredienMainDiv1").style.display = "flex";

        document.getElementById("ingrediend2").innerText.trim() === "," ||
            document.getElementById("ingrediend2").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv2").style.display = "none"
            : document.getElementById("ingredienMainDiv2").style.display = "flex";

        document.getElementById("ingrediend3").innerText.trim() === "," ||
            document.getElementById("ingrediend3").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv3").style.display = "none"
            : document.getElementById("ingredienMainDiv3").style.display = "flex";

        document.getElementById("ingrediend4").innerText.trim() === "," ||
            document.getElementById("ingrediend4").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv4").style.display = "none"
            : document.getElementById("ingredienMainDiv4").style.display = "flex";

        document.getElementById("ingrediend5").innerText.trim() === "," ||
            document.getElementById("ingrediend5").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv5").style.display = "none"
            : document.getElementById("ingredienMainDiv5").style.display = "flex";

        document.getElementById("ingrediend6").innerText.trim() === "," ||
            document.getElementById("ingrediend6").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv6").style.display = "none"
            : document.getElementById("ingredienMainDiv6").style.display = "flex";

        document.getElementById("ingrediend7").innerText.trim() === "," ||
            document.getElementById("ingrediend7").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv7").style.display = "none"
            : document.getElementById("ingredienMainDiv7").style.display = "flex";

        document.getElementById("ingrediend8").innerText.trim() === "," ||
            document.getElementById("ingrediend8").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv8").style.display = "none"
            : document.getElementById("ingredienMainDiv8").style.display = "flex";

        document.getElementById("ingrediend9").innerText.trim() === "," ||
            document.getElementById("ingrediend9").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv9").style.display = "none"
            : document.getElementById("ingredienMainDiv9").style.display = "flex";

        document.getElementById("ingrediend10").innerText.trim() === "," ||
            document.getElementById("ingrediend10").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv10").style.display = "none"
            : document.getElementById("ingredienMainDiv10").style.display = "flex";

        document.getElementById("ingrediend11").innerText.trim() === "," ||
            document.getElementById("ingrediend11").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv11").style.display = "none"
            : document.getElementById("ingredienMainDiv11").style.display = "flex";

        document.getElementById("ingrediend12").innerText.trim() === "," ||
            document.getElementById("ingrediend12").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv12").style.display = "none"
            : document.getElementById("ingredienMainDiv12").style.display = "flex";

        document.getElementById("ingrediend13").innerText.trim() === "," ||
            document.getElementById("ingrediend13").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv13").style.display = "none"
            : document.getElementById("ingredienMainDiv13").style.display = "flex";

        document.getElementById("ingrediend14").innerText.trim() === "," ||
            document.getElementById("ingrediend14").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv14").style.display = "none"
            : document.getElementById("ingredienMainDiv14").style.display = "flex";

        document.getElementById("ingrediend15").innerText.trim() === "," ||
            document.getElementById("ingrediend15").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv15").style.display = "none"
            : document.getElementById("ingredienMainDiv15").style.display = "flex";

        document.getElementById("ingrediend16").innerText.trim() === "," ||
            document.getElementById("ingrediend16").innerText === ("null , null")
            ? document.getElementById("ingredienMainDiv16").style.display = "none"
            : document.getElementById("ingredienMainDiv16").style.display = "flex";

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

// async function setAllIngredienceForSearched(searchedValue) {
//     let getData = await fetchDataToSearched(searchedValue);
//     return getData;
// }


async function setAllIngredienceForSearched(searchedValue) {

    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`);
        let data = await res.json();
        if (data.meals == null) {
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

function categoryPage() {
    document.getElementById("explorerMealPageDiv").style.display = "grid";
    document.getElementById("homePageDiv").style.display = "none";
    console.log("Category loaded");

}


