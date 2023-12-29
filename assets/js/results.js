document.addEventListener("DOMContentLoaded", function () {
  const resultSection = document.querySelector("#js-search-results");

  resultSection.textContent = "";

  const userChoices = localStorage.getItem("userChoices");

  //add logic to fetch & display
  

  //adding array for each data strand
  const recipeData = [
      //1
      {
          title: "userChoices.title",
          ingredients: "userChoices.ingredients",
          instructions: "userChoices.instructions",
          servings: "userChoices.servings",
      },
      //2
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //3
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //4
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //5
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //6
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //7
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //8
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //9
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
      //10
      {
          title: "element.title",
          ingredients: "element.ingredients",
          instructions: "element.instructions",
          servings: "element.servings",
      },
  ]
  recipeData.forEach(recipe => {
      const resultCard = document.createElement("div");
      resultCard.className = "card text-center result-card"

      const resultCardBody = document.createElement("div");
      resultCardBody.className = "card-body result-card-body";

      const titleElement = document.createElement("h5");
      titleElement.className = "card-title result-heading";
      titleElement.textContent = recipe.title;
      
      const ingredientsElement = document.createElement("p");
      ingredientsElement.className = "card-title result-ingredients";
      ingredientsElement.textContent = recipe.ingredients;
      
      const instructionsElement = document.createElement("p");
      instructionsElement.className = "card-title result-instructions";
      instructionsElement.textContent = recipe.instructions;
      
      const servingsElement = document.createElement("p");
      servingsElement.className = "card-title result-servings";
      servingsElement.textContent = recipe.servings;
      
      const showNutritionalButton = document.createElement("a");
      showNutritionalButton.href = "#";
      showNutritionalButton.className = "card-title btn btn-primary";
      showNutritionalButton.textContent = "Show Nutritional Values";
      
//appending results

      resultCardBody.appendChild(titleElement);
      resultCardBody.appendChild(ingredientsElement);
      resultCardBody.appendChild(instructionsElement);
      resultCardBody.appendChild(servingsElement);
      resultCardBody.appendChild(showNutritionalButton);

      resultCard.appendChild(resultCardBody);

      resultSection.appendChild(resultCard);

  })
  