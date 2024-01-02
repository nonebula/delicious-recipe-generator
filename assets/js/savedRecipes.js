document.addEventListener("DOMContentLoaded", function () {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  
    if (!savedRecipes === 0) {
      console.error("No recipes saved");
      return;
    }
  
    console.log(savedRecipes)
   
    const recipeResultsContainer = document.getElementById("recipe-container");
  
    displayRecipes(savedRecipes, recipeResultsContainer)

  });
  

  function displayRecipes(recipes, container) {
    container.innerHTML = "";
    if (recipes.length === 0) {
      container.innerHTML = "<p> No recipes saved.</p>";
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
  
      // nutrition button dynamic creation:
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
  
  
  }
  
  