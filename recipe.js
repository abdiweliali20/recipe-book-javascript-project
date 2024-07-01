document.addEventListener("DOMContentLoaded", function () {
    // Home Page
    const popularRecipeList = document.getElementById("popular-recipe-list");
    // Search button event listener
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", searchRecipes);
    function searchRecipes() {
        // Get search input value
        const searchInput = document.getElementById("search-input").value;
        // Call API to get search results
        const apiKey = '4c811a63f3d7470cbf41a177c6295dab';
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchInput}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displaySearchResults(data.results))
            .catch(error => console.log(error));
    }
    function displaySearchResults(recipes) {
        popularRecipeList.innerHTML = "";
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            const recipeCard = document.createElement("li");
            recipeCard.classList.add("recipe-card", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
            const recipeImage = document.createElement("img");
            recipeImage.src = recipe.image;
            recipeImage.classList.add("img-thumbnail", "mr-3");
            recipeImage.style.width = "100px";
            recipeCard.appendChild(recipeImage);
            const recipeDetails = document.createElement("div");
            recipeDetails.classList.add("recipe-card-details");
            const recipeTitle = document.createElement("h3");
            recipeTitle.textContent = recipe.title;
            recipeDetails.appendChild(recipeTitle);
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save Recipe";
            saveButton.classList.add("btn", "btn-success", "btn-sm");
            saveButton.addEventListener("click", () => saveRecipe(recipe));
            recipeDetails.appendChild(saveButton);
            recipeCard.appendChild(recipeDetails);
            popularRecipeList.appendChild(recipeCard);
        }
    }
    function saveRecipe(recipe) {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        savedRecipes.push({
            title: recipe.title,
            image: recipe.image,
            id: recipe.id
        });
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        alert("Recipe saved to Recipe Book!");
    }
});

