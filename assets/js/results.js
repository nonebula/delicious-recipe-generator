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
}

function displayRecipes(recipes, container) {
  container.innerHTML = "";
  if (recipes.length === 0) {
    container.innerHTML = "<p> No recipes found based on your selections.</p>";
    return;
  }

  recipes.forEach((recipe) => {
    // recipe wrapper
    const recipeWrapper = document.createElement("div");
    recipeWrapper.className = "recipe-wrapper";

    // card div
    const cardDiv = document.createElement("div");
    cardDiv.className = "card text-center result-card";

    // card body div
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body result-card-body";

    // title h5
    const titleH5 = document.createElement("h5");
    titleH5.className = "card-title result-heading";
    titleH5.textContent = recipe.title;

    // ingredients
    const ingredientsP = document.createElement("p");
    ingredientsP.className = "card-text result-ingredients";
    ingredientsP.textContent = `Ingredients: ${recipe.ingredients.replace(
      /\|/g,
      ", "
    )}`;

    // instructions
    const instructionsP = document.createElement("p");
    instructionsP.className = "card-text result-instructions";
    instructionsP.textContent = `Instructions: ${recipe.instructions}`;

    // servings
    const servingsP = document.createElement("p");
    servingsP.className = "card-text result-servings";
    servingsP.textContent = `Servings: ${recipe.servings}`;

    // Nutritional Information DIV
    const nutritionDiv = document.createElement("div");
    nutritionDiv.className = "nutrition-info hidden";
    cardBodyDiv.appendChild(nutritionDiv);

    // nutrition button dynamic creation:
    const nutritionButton = document.createElement("button");
    nutritionButton.className = "btn btn-info ";
    nutritionButton.textContent = "Nutritional Information";
    nutritionButton.setAttribute("data-ingredients", recipe.ingredients);

    // Save Recipe  DIV
    const saveRecipeDiv = document.createElement("div");
    saveRecipeDiv.className = "save-recipe";
    cardBodyDiv.appendChild(saveRecipeDiv);

    // save recipe button dynamic creation:
    const saveRecipeButton = document.createElement("button");
    saveRecipeButton.className = "btn btn-info js-save-recipe-button";
    saveRecipeButton.textContent = "Save Recipe";
    saveRecipeButton.setAttribute("data-Recipe", JSON.stringify(recipe));

    nutritionButton.addEventListener("click", function () {
      const ingredients = this.getAttribute("data-ingredients");
      fetchAndDisplayNutrition(ingredients, nutritionDiv);

      // to hide nutrition data
      nutritionDiv.classList.toggle("hidden");
    });

    // appending card
    recipeWrapper.appendChild(cardBodyDiv);
    recipeWrapper.appendChild(nutritionDiv);
    cardBodyDiv.appendChild(titleH5);
    cardBodyDiv.appendChild(ingredientsP);
    cardBodyDiv.appendChild(instructionsP);
    cardBodyDiv.appendChild(servingsP);
    cardBodyDiv.appendChild(nutritionButton);
    cardBodyDiv.appendChild(saveRecipeButton);
    cardDiv.appendChild(cardBodyDiv);
    container.appendChild(cardDiv);
    container.appendChild(recipeWrapper);
  });

  let saveRecipeButton = document.querySelectorAll(".js-save-recipe-button");
  console.log("getting save-recipe-buttons")
  console.log(saveRecipeButton)

  saveRecipeButton.forEach( (item) => {
    item.addEventListener("click", function(){
      console.log(item);
      console.log(JSON.stringify(item.getAttribute("data-Recipe")))

      let savedRecipe = JSON.parse(localStorage.getItem("savedRecipes")) || [];

      savedRecipe.push(item.getAttribute("data-Recipe"));
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipe))

      const saveModal = new bootstrap.Modal("#js-save-modal")
      saveModal.show()
     //window.location.href = "savedRecipes.html";
   });
  })
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
      nutritionDiv.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error fetching nutrition data:", error);
    });
}

function displayNutritionData(data, nutritionDiv) {
  // const nutritionContainer = document.getElementById("nutrition-container");
  nutritionDiv.innerHTML = "";

  data.forEach((nutrition) => {
    let content = ` 
      <div class="nutrition-item"> 
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
