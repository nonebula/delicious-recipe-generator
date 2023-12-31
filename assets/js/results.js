document.addEventListener("DOMContentLoaded", function () {
    const userChoices = JSON.parse(localStorage.getItem("userChoices") || '{}');

    if (!userChoices || Object.keys(userChoices).length === 0) {
        console.error("no user choices found.");
        return;
    }

    const query = [userChoices.proteins, userChoices.carbohydrates, userChoices.vegetables1, userChoices.vegetables2]
            .filter(Boolean)
            .join(", ");

    const recipeResultsContainer = document.getElementById("recipe-container");

    if(recipeResultsContainer) {
        fetchRecipes(query, recipeResultsContainer);
    } else {
        console.error("Recipe results container not found."); 
    }
}); 
    
function fetchRecipes(query, displayElement) {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  console.log("making APi call with url:", url); 

  fetch(url, options)
    .then((response) => {
        console.log("APi response:", response); 
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
        console.log("Fetched data: ", data); 
        displayRecipes(data, displayElement);
    })
    .catch((error) => {
      console.error("There was a problem: ", error);
      displayElement.innerHTML = `<p>Error fetching recipes: ${error.message}</p>`;
    });
}

function displayRecipes(recipes, container) {
  container.innerHTML = "";

  if (recipes.length === 0) {
    container.innerHTML = "<p> No recipes found based on your selections.</p>";
    return;
  }

recipes.forEach((recipe) => {
  const cardDiv = document.createElement("div");
  const cardBodyDiv = document.createElement("div");
  const titleH5 = document.createElement("h5");
  const ingredientsP = document.createElement("p");
  const instructionsP = document.createElement("p");
  const servingsP = document.createElement("p");

  cardDiv.className = "card text-center result-card";
  cardBodyDiv.className = "card-body result-card-body";
  titleH5.className = "card-title result-heading";
  ingredientsP.className = "card-text result-ingredients";
  instructionsP.className = "card-text result-instructions";
  servingsP.className = "card-text result-servings";

  titleH5.textContent = recipe.title;
  ingredientsP.textContent = `Ingredients: ${recipe.ingredients}`;
  instructionsP.textContent = `Instructions: ${recipe.instructions}`;
  servingsP.textContent = `Servings: ${recipe.servings}`;

  cardBodyDiv.appendChild(titleH5);
  cardBodyDiv.appendChild(ingredientsP);
  cardBodyDiv.appendChild(instructionsP);
  cardBodyDiv.appendChild(servingsP);
  cardDiv.appendChild(cardBodyDiv);
  container.appendChild(cardDiv);
});
}