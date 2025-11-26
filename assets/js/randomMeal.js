async function clickRandomBtn() {
    let data = await fetchDataRandomPage();

    if (data != null) {
        document.getElementById("randomMealName").innerText = data.meals[0].strMeal;
        document.getElementById("randomMealDetail").innerText ="Category : " + data.meals[0].strCategory + "  |  Area : " + data.meals[0].strArea;

        document.getElementById("randomMealImg").src = data.meals[0].strMealThumb;
        document.getElementById("homeVisitMealBtn").style.display = "block";
    }
}

async function fetchDataRandomPage() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await res.json();

        console.log("checkkkkk : ", data);
        return data;

    } catch (error) {
        console.log(error);

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });

        return null;
    }
}



async function homeViewRecipeBtn() {
    let meal = document.getElementById("randomMealName").innerText;
    let data = await fetchDataForSelectedRandomPage(meal);

    if (data != null) {
        showRecipeRandom(data);
    }

}

async function fetchDataForSelectedRandomPage(meal) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        let data = await res.json();

        return data;
    } catch (error) {
        return null;
    }
}

function showRecipeRandom(data) {
    if (data != null) {
        console.log("Resipe Page Load For Random.....\n");
        
        document.getElementById("homePageDiv").style.display = "none";
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


        for (let index = 0; index < 16; index++) {
            let messure = data.meals[0][`strMeasure${index + 1}`];
            let ingredient = data.meals[0][`strIngredient${index + 1}`];
            let txt = `${messure} , ${ingredient}`.trim();

            document.getElementById(`ingrediend${index + 1}`).innerText = txt;

            if (txt === "," || txt === "" || txt === "null," || txt === ",null" || txt === "null,null") {
                document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "none"
            } else {
                document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "flex";
            }
        } 

        console.log("data is  :", data);
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