async function selectCategory(num) {
    let getTiltle = document.getElementById(`explorerCategoryP${num}`).innerText;
    let getData = await fetchDataSelectCategoryPage(getTiltle);
    //  console.log("sadassasas", getData);

    setValuesSelectPage(getData, getTiltle);

}



async function fetchDataSelectCategoryPage(title) {
    // console.log("awa");

    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`);
        let data = await res.json();
        if (data.meals == null) {
            return null;
        } else {
            // console.log("data");

            return data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////

function setValuesSelectPage(data, getTiltle) {
    let array = data.meals;
    if (array != null) {
        document.getElementById("explorerMealPageDiv").style.display = "none";
        document.getElementById("selectedMealPageDiv").style.display = "grid";

        console.log("Load Selected Meal Page...");
        document.getElementById("searchResultTitleSelected").innerText = "All " + getTiltle + " Dish Categories";
        // console.log(data);


        let size = array.length > 25 ? 25 : array.length;

        for (let index = size + 1; index <= 25; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "grid";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "grid";
        }


        console.log("data length : ", size);
        for (let index = 0; index < size; index++) {

            document.getElementById(`selectedPageCategoryImg${index + 1}`).src = array[index].strMealThumb;

            // console.log("Error cardeka :", index + 1);

            document.getElementById(`selectedPageCategoryP${index + 1}`).innerText = array[index].strMeal;
        }



        for (let index = size + 1; index <= 25; index++) {
            document.getElementById(`selectedPageDiv${index}`).style.display = "none";
            document.getElementById(`selectedPagePDiv${index}`).style.display = "none";
        }
    } else {
        console.log("Data eka null");

    }
}

async function selectCategorySelectedPage(num) {
    let searchedValue = document.getElementById(`selectedPageCategoryP${num}`).innerText;
    let data = await fetchDataForSelectedCategoryPage(searchedValue);
    // console.log("data eka    ",data);

    if (data != null) {
        showRecipeSelectPage(data);
    }

}

async function fetchDataForSelectedCategoryPage(searchedValue) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`);
        let data = await res.json();

        return data;
    } catch (error) {
        return null;
    }
}

function showRecipeSelectPage(data) {
    if (data != null) {
        document.getElementById("selectedMealPageDiv").style.display = "none";
        document.getElementById("mealsPageDiv").style.display = "grid";
        console.log("Load recipe page.....");

        document.getElementById("heroImage").style.display = "grid";
        document.getElementById("heroImage").src = data.meals[0].strMealThumb;
        document.getElementById("mealsDetailsHeroTitle").innerText = data.meals[0].strMeal;
        document.getElementById("mealsDetailsCategory").innerText = "Category : " + data.meals[0].strCategory;
        document.getElementById("mealsDetailsArea").innerText = "Area : " + data.meals[0].strArea;
        document.getElementById("mealsDetailsTags").innerText = "Tags : " + data.meals[0].strTags;
        document.getElementById("mealsDetailsInstructions").innerText = data.meals[0].strInstructions;

        let urlLink = data.meals[0].strYoutube;

        let videocode = urlLink.split("v=")[1];
        let newUrl = `https://www.youtube.com/embed/${videocode}`;

        document.getElementById("mealsDetailsVideo").src = newUrl;
        document.getElementById("heroImage").src = data.meals[0].strMealThumb;



        // for (let index = 0; index < 16; index++) {
        //     document.getElementById(`ingrediend${index + 1}`).innerText.trim() === "," ||
        //         document.getElementById(`ingrediend${index + 1}`).innerText === ("null , null")
        //         ? document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "grid"
        //         : document.getElementById(`ingredienMainDiv${index + 1}`).style.display = "flex";
        // }

        for (let index = 0; index < 16; index++) {
            document.getElementById(`checkBox${index+1}`).checked = false;

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

        // for (let index = 0; index < 16; index++) {
        //     let txt = document.getElementById(`ingrediend${index + 1}`).innerText.trim();
        //     if (txt === "," || txt === " , " || txt === " ," || txt === ", " || txt === "null , null" || txt === "null,null") {


        //     }
        // }

        console.log("yes :", data);
    } else {
        document.getElementById("homePageDiv").style.display = "grid";
        document.getElementById("mealsPageDiv").style.display = "none";

        console.log("data eka null");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: searchedValue + " is not found!",
        });
    }
}





