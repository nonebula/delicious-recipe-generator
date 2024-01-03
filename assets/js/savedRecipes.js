let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

document.addEventListener("DOMContentLoaded", function () {
  
    if (savedRecipes === 0) {
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

        console.log(recipe);

        const newRecipe = JSON.parse(recipe);
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
      titleH5.textContent = newRecipe.title;
  
      // ingredients
      const ingredientsP = document.createElement("p");
      ingredientsP.className = "card-text result-ingredients";
      ingredientsP.textContent = `Ingredients: ${newRecipe.ingredients.replace(
        /\|/g,
        ", "
      )}`;
  
      // instructions
      const instructionsP = document.createElement("p");
      instructionsP.className = "card-text result-instructions";
      instructionsP.textContent = `Instructions: ${newRecipe.instructions}`;
  
      // servings
      const servingsP = document.createElement("p");
      servingsP.className = "card-text result-servings";
      servingsP.textContent = `Servings: ${newRecipe.servings}`;

          // Save Recipe  DIV
    const removeRecipeDiv = document.createElement("div");
    removeRecipeDiv.className = "save-recipe";
    cardBodyDiv.appendChild(removeRecipeDiv);

    // nutrition button dynamic creation:
    const removeRecipeButton = document.createElement("button");
    removeRecipeButton.className = "btn btn-info js-save-recipe-button";
    removeRecipeButton.textContent = "Remove Recipe";
    removeRecipeButton.getAttribute("data-Recipe");
  
  
      // appending card
      recipeWrapper.appendChild(cardBodyDiv);
      cardBodyDiv.appendChild(titleH5);
      cardBodyDiv.appendChild(ingredientsP);
      cardBodyDiv.appendChild(instructionsP);
      cardBodyDiv.appendChild(servingsP);
      cardBodyDiv.appendChild(removeRecipeButton);
      cardDiv.appendChild(cardBodyDiv);
      container.appendChild(cardDiv);
      container.appendChild(recipeWrapper);
    });

  }
  
  function removeRecipe(recipeToRemove){
    const newSavedRecipes = [];
    savedRecipes.forEach((recipe)=>{
      if(recipe.title !== recipeToRemove.title){
        newSavedRecipes.push(recipe)
      }

      savedRecipes = newSavedRecipes;
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    } )

  }