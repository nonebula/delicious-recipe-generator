document.addEventListener("DOMContentLoaded", function () {
    const userChoices = JSON.parse(localStorage.getItem("userChoices") || '{}');
    if (!userChoices || Object.keys(userChoices).length === 0) {
        console.error("No user choices found."); 
        return; 
    }
    // const query = Object.values(userChoices).filter(Boolean).join(", ");
    var query = [userChoices.proteins, userChoices.carbohydrates, userChoices.vegetables1, userChoices.vegetables2].filter(Boolean).join(" ");
    fetchRecipes(encodeURIComponent(query)); 
}); 

function fetchRecipes(query) {
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    }; 

    fetch(url, options)
    .then(function(response){
        if(!response.ok) {
            throw new Error("Network response not ok.");
        }
        return response.json();
    })
    .then(function(data){
        displayRecipes(data);
     })
     .catch(function(error){
        console.error("Error fetching recipes:", error);
     });
    } 

function displayRecipes(recipes) {
    const container = document.getElementById("recipe-container"); 
    container.innerHTML = "";

    if (recipes.length === 0) {
        container.innerHTML = "<p> No recipes found based on your selections.</p>";
        return; 
    }

    recipes.forEach(function(recipe) {
        const recipeElement = document.createElement("div");
        recipeElement.className = "card text-center result-card"; 

        recipeElement.innerHTML = `
        <div class="card-body result-card-body">
            <h5 class="card-title result-heading">${recipe.title}</h5>
            <p class="card-text result-ingredients">${recipe.ingredients}</p>
            <p class="card-text result-instructions">${recipe.instructions}</p>
            <p class="card-text result-servings"${recipe.servings}.</p>
            <a href="#" class="btn btn-primary">Show Nutritional Values</a>
      </div>
        `; 
        container.appendChild(recipeElement); 
    })
}

function displayError(error) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = `<p>Error fetching recipes: ${error.message}</p>`;
}