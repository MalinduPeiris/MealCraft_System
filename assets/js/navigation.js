function navBtnClicked(number) {
    switch (number) {
        case 1: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#");
            break;
        }
        case 2: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#ByCategories");
            break;
        }
        case 3: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#ByArea");
            break;
        }
        case 4: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#ByIngredients");
            break;
        }
        case 5: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#DiscoverRandomMeal");
            break;
        }
        case 6: {
            document.getElementById("explorerMealPageDiv").style.display = "none";
            document.getElementById("homePageDiv").style.display = "grid";
            document.getElementById("selectedMealPageDiv").style.display = "none";
            document.getElementById("ingredientsPageDiv").style.display = "none";
            document.getElementById("mealsPageDiv").style.display = "none";
            document.getElementById(`nav${number}`).setAttribute("href", "#TrendingMeals");
            break;
        }

    }

}