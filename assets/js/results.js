document.addEventListener("DOMContentLoaded", function () {
  const userChoices = JSON.parse(localStorage.getItem("userChoices") || "{}");

  if (!userChoices || Object.keys(userChoices).length === 0) {
    console.error("No user choices found.");
    return;
  }

  const query = [
    userChoices.proteins,
    userChoices.carbohydrates,
    userChoices.vegetables1,
    userChoices.vegetables2,
  ]
    .filter(Boolean)
    .join("&");

  const recipeResultsContainer = document.getElementById("recipe-container");

  if (recipeResultsContainer) {
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

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      displayRecipes(data, displayElement);
    })
    .catch((error) => {
      console.error("Error fetching recipes: ", error);
      displayElement.innerHTML = `<p>Error fetching recipes: ${error.message}</p>`;
    });

  function displayRecipes(recipes, container) {
    container.innerHTML = "";
    if (recipes.length === 0) {
      container.innerHTML =
        "<p> No recipes found based on your selections.</p>";
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
      ingredientsP.textContent = `Ingredients: ${recipe.ingredients.replace(
        /\|/g,
        ", "
      )}`;
      instructionsP.textContent = `Instructions: ${recipe.instructions}`;
      servingsP.textContent = `Servings: ${recipe.servings}`;
     
      // Nutritional Information DIV
      const nutritionDiv = document.createElement("div");
      nutritionDiv.className = "nutrition-info";
      cardBodyDiv.appendChild(nutritionDiv);

      // nutrition button dynamic creation:
      const nutritionButton = document.createElement("button");
      nutritionButton.className = "btn btn-info";
      nutritionButton.textContent = "Nutritional Information";
      nutritionButton.setAttribute("data-ingredients", recipe.ingredients);
      nutritionButton.addEventListener("click", function () {
        const ingredients = this.getAttribute("data-ingredients");
        fetchAndDisplayNutrition(ingredients, nutritionDiv); 
      });

      // appending card
      cardBodyDiv.appendChild(titleH5);
      cardBodyDiv.appendChild(ingredientsP);
      cardBodyDiv.appendChild(instructionsP);
      cardBodyDiv.appendChild(servingsP);
      cardBodyDiv.appendChild(nutritionButton);
      cardDiv.appendChild(cardBodyDiv);
      container.appendChild(cardDiv);
    });
  }
}

// nutrition API call and functions


function fetchAndDisplayNutrition(ingredients, nutritionDiv) {
  const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${ingredients}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99088a17fdmsh5b87115e6ccddc4p1da664jsnac40653791f8",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response not ok.");
      }
      return response.json();
    })
    .then((data) => {
      displayNutritionData(data, nutritionDiv);
    })
    .catch((error) => {
      console.error("Error fetching nutrition data:", error);
    });
}

function displayNutritionData(data, nutritionDiv) {
  const nutritionContainer = document.getElementById("nutrition-container");
  nutritionDiv.innerHTML = ""; 

  data.forEach(nutrition => {
    let content = ` 
      <div class="nutrition-data"> 
        <p>Name: ${nutrition.name}</p>
        <p>Calories: ${nutrition.calories}</p>
        <p>Carbohydrates (total): ${nutrition.carbohydrates_total_g}</p>
        <p>Cholesterol: ${nutrition.cholesterol_mg}</p>
        <p>Saturarted Fat: ${nutrition.fat_saturated_g}</p>
        <p>Fat (total): ${nutrition.fat_total_g}</p>
        <p>Potassium: ${nutrition.potassium_mg}</p>
        <p>Protein: ${nutrition.protein_g}</p>
        <p>Sodium: ${nutrition.sodium_mg}</p>
        <p>Sugar: ${nutrition.sugar_g}</p>
      </div> 
      `;
    nutritionDiv.innerHTML += content;
  });
}
