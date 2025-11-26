document.getElementById("navSearchTxt").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        homeSearching();
    }
});

async function homeSearching() {
    let homeSearchedValue = document.getElementById("navSearchTxt");
    let searchedValue = homeSearchedValue.value.trim();

    console.log(searchedValue);

    if (searchedValue.length > 0) {
        console.log("Athula :", searchedValue);
        document.getElementById("heroImage").style.display = "none";
        document.getElementById("homePageDiv").style.display = "none";
        document.getElementById("mealsPageDiv").style.display = "grid";

        let data = await fetchDataIngredienceForSearched(searchedValue);
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

        let urlLink = data.meals[0].strYoutube;
        console.log(urlLink);


        let videocode = urlLink.split("v=")[1];

        console.log(videocode);
        let newLink = `https://www.youtube.com/embed/${videocode}`;

        document.getElementById("mealsDetailsVideo").src = newLink;

        document.getElementById("heroImage").src = data.meals[0].strMealThumb;

        for (let index = 0; index < 16; index++) {
            document.getElementById(`ingrediend${index + 1}`).innerText = data.meals[0][`strMeasure${index + 1}`] + " , " + data.meals[0][`strIngredient${index + 1}`];
        }

        for (let index = 0; index < 16; index++) {

            document.getElementById(`ingrediend${index + 1}`).innerText.trim() === "," ||
                document.getElementById(`ingrediend${index + 1}`).innerText === ("null , null")
                ? document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "none"
                : document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "flex";
        }

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


async function fetchDataIngredienceForSearched(searchedValue) {

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


