document.addEventListener('DOMContentLoaded', function() {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const recipeList = document.getElementById('saved-recipe-list');
    recipeList.innerHTML = ''; // Clear previous contents
    savedRecipes.forEach(function(recipe) {
        const recipeItem = document.createElement('li');
        recipeItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        const recipeDetails = document.createElement('div');
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeDetails.appendChild(recipeTitle);
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.classList.add('img-thumbnail', 'mr-3');
        recipeImage.style.width = '100px';
        recipeDetails.appendChild(recipeImage);
        recipeItem.appendChild(recipeDetails);
        recipeList.appendChild(recipeItem);
    });
});

