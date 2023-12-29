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
    
})




// Section for fetching nutrition data
 /* const nutritionButton = document.querySelector(".js-fetch-nutrition");
  const nutritionResults = document.querySelector(".js-nutrition-section");

  if (nutritionButton && nutritionResults) {
    nutritionButton.addEventListener("click", function () {
      const url =
        "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "99088a17fdmsh5b87115e6ccddc4p1da664jsnac40653791f8",
          "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let nutritionHTML = "";
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            nutritionHTML += `<p>Name: ${element.name}</p>
              <div>Calories: ${element.calories}</div>
              <div>Carbohydrates (total) ${element.carbohydrates_total_g}</div>
              <div>Cholesterol ${element.cholesterol_mg}</div>
              <div>Saturarted Fat: ${element.fat_saturated_g}</div>
              <div>Fat (total): ${element.fat_total_g}</div>
              <div>Potassium: ${element.potassium_mg}</div>
              <div>Protein: ${element.protein_g}</div>
              <div>Sodium: ${element.sodium_mg}</div>
              <div>Sugar: ${element.sugar_g}</div>
              `;
          }

          nutritionResults.innerHTML = nutritionHTML;
        })
        .catch((error) => {
          console.error("There was a problem:", error);
        });
    });
  } else {
    console.error("Nutrition or nutrition section was not found");
  } 
  */