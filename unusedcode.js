

// // IDs of dropdown lists
// const optionElements = [
//   "#Protein-choices",
//   "#Carbohydrates-choices",
//   "#Vegetable1-choices",
//   "#Vegetable2-choices",
// ];

// function updateCustomerSelections() {
//   let selections = [];

//   optionElements.forEach((elementId) => {
//     const selectedValue = document.querySelector(elementId).value;
//     if (selectedValue) {
//       selections.push(selectedValue);
//     }
//   });

//   console.log("Current customer selections: ", selections);
//   localStorage.setItem("userChoices", JSON.stringify(selections));
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // localStorage.removeItem("userChoices");
//   document.getElementById("js-save-button").addEventListener("click", function() {
//     updateCustomerSelections();
//     window.location.href = "results.html"; 
//   }); 
// }); 

//   function updateCustomerInput(selectElementId, items) {
//     const selectElement = document.querySelector(selectElementId);

//     items.forEach((item) => {
//       const option = document.createElement("option");
//       option.value = item;
//       option.textContent = item;
//       selectElement.appendChild(option);
//     });

//     selectElement.addEventListener("change", function () {
//       updateCustomerSelections();
//     });
//   }

//   updateCustomerInput("#Protein-choices", proteins);
//   updateCustomerInput("#Carbohydrates-choices", carbohydrates);
//   updateCustomerInput("#Vegetable1-choices", vegetables1);
//   updateCustomerInput("#Vegetable2-choices", vegetables2);
// });

// function fetchRecipeData(choice) {
//   return {
//     title: choice,
//     ingredients: "List of ingredients",
//     instructions: "Cooking instructions",
//     servings: "Number of servings:",
//   };
// }

// //reading the customer input values
// document.addEventListener("DOMContentLoaded", function () {
//   const resultSection = document.querySelector("#js-search-results");
//   const userChoices = JSON.parse(localStorage.getItem("userChoices") || "[]");

//   userChoices.forEach((choice) => {
//     const recipe = fetchRecipeData(choice);

//     const resultCard = document.createElement("div");
//     resultCard.className = "card text-center result-card";

//     const resultCardBody = document.createElement("div");
//     resultCardBody.className = "card-body result-card-body";

//     const titleElement = document.createElement("h5");
//     titleElement.className = "card-title result-heading";
//     titleElement.textContent = recipe.title;

//     const ingredientsElement = document.createElement("p");
//     ingredientsElement.className = "card-text result-ingredients";
//     ingredientsElement.textContent = "Ingredients: " + recipe.ingredients;

//     const instructionsElement = document.createElement("p");
//     instructionsElement.className = "card-text result-instructions";
//     instructionsElement.textContent = "Instructions: " + recipe.instructions;

//     const servingsElement = document.createElement("p");
//     servingsElement.className = "card-text result-servings";
//     servingsElement.textContent = "Servings: " + recipe.servings;

//     const showNutritionalButton = document.createElement("a");
//     showNutritionalButton.href = "#";
//     showNutritionalButton.className = "btn btn-primary";
//     showNutritionalButton.textContent = "Show Nutritional Values";

//     resultCardBody.appendChild(titleElement);
//     resultCardBody.appendChild(ingredientsElement);
//     resultCardBody.appendChild(instructionsElement);
//     resultCardBody.appendChild(servingsElement);
//     resultCardBody.appendChild(showNutritionalButton);

//     resultCard.appendChild(resultCardBody);
//     resultSection.appendChild(resultCard);

//     window.location.href = "recipes.html";
//   });
// });

// function readCustomerInput() {
//   customerInput = "";
//   optionElements.forEach((element) => {
//     //console.log(element);
//     const optionValue = document.querySelector(element).value;
//     console.log("optionValue " + optionValue);
//     if (optionValue) {
//       customerInput += optionValue + "&";
//     }
//     //Save to local storage
//     localStorage.setItem("userChoices", customerInput);
//   });
// }
// // });

// //new js code to implement API within the search function and card group
// //this worked to generate the recipes at the bottom of the page in cards, hasn't worked after merging.
// document.addEventListener("DOMContentLoaded", function () {
//   const searchButton = document.querySelector(".recipe-search-btn");
//   if (searchButton) {
//     searchButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       const searchInput = document.querySelector("input[type=search]").value;
//       fetchRecipes(searchInput);
//     });
//   }
//   function fetchRecipes(query) {
//     const recipeResults = document.querySelector("#js-recipe-section");
//     const url =
//       "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=" + query;
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
//         "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
//       },
//     };
//     fetch(url, options)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         let recipeHTML = "";
//         // Display up to 3 recipes
//         for (let index = 0; index < Math.min(3, data.length); index++) {
//           const element = data[index];
//           console.log(data);
//           recipeHTML += `<div class="card">
//           <img src="${element.image}" class="card-img-top" alt="Recipe Image">
//           <div class="card-body">
//             <h5>${element.title}</h5>
//             <p>Ingredients: ${element.ingredients}</p>
//             <div>Instructions ${element.instructions}</div>
//             <div>Servings: ${element.servings}</div>
//           </div>
//         </div>`;
//         }
//         recipeResults.innerHTML = recipeHTML;
//       })
//       .catch((error) => {
//         console.error("There was a problem:", error);
//       });
//   }
// });




// function displayItems(idName, items) {
//   const listElement = document.querySelector(idName);
//   console.log(listElement);

//   for (let index = 0; index < items.length; index++) {
//     const listHTML = document.createElement("option");
//     listHTML.innerHTML = items[index];
//     listElement.appendChild(listHTML);
//   }

  // items.forEach(element => {
  //     const listHTML = document.createElement("option");
  // //    listElement.setAttribute("value", element)
  //     listHTML.innerHTML = element;
  //     listElement.appendChild(listHTML);
  // });

// this will not work with current api as meal needed, not recipe.
// Event listener, display recipe results, fetch recipes
// document.addEventListener("DOMContentLoaded", function () {
//   const recipeResults = document.querySelector("#js-search-results");
//   const fetchButton = document.querySelector("#js-fetch-recipes");

//   if (fetchButton && recipeResults) {
//     fetchButton.addEventListener("click", function () {
//       readCustomerInput();

//       console.log("customerInput " + customerInput);

//       const query = customerInput;
//       console.log(query);
//       const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + query;
//       console.log(url);
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
//           "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
//         },
//       };

//       //FIXME: edit better messages for errors
//       fetch(url, options)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Response was not ok");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           let recipeHTML = "";
//           for (let index = 0; index < data.length; index++) {
//             const element = data[index];
//             recipeHTML += `<p>${element.title}</p>
//               <p>Ingredients: ${element.ingredients}</p>
//               <div>Instructions ${element.instructions}</div>
//               <div> Servings: ${element.servings}</div>
//               `;
//           }
//           recipeResults.textContent = recipeHTML;
//         })
//         .catch((error) => {
//           console.error("There was a problem:", error);
//         });
//     });
//   } else {
//     console.error("Button or recipe section not found");
//   }
// local storage check
/* $(document).ready(function () {
  var searchHistory = JSON.parse(localStorage.getItem("userChoices")) || [];

  for (let index = 0; index < searchHistory.length; index++) {
    customerInput.push(searchHistory[index]);
  }
  // renderButtons();

  if (searchHistory.length > 0) {
    var lastSearchedRecipe = searchHistory[searchHistory.length - 1];
    previousRecipes(lastSearchedRecipe);
  }
}); */  
  
  //adding the options for each food group
  // displayItems("#Protein-choices", proteins);
  // displayItems("#Carbohydrates-choices", carbohydrates);
  // displayItems("#Vegetable1-choices", vegetables1);
  // displayItems("#Vegetable2-choices", vegetables2);

  // // Function to display items in a dropdown list
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Dom fully loaded and parsed."); 
//   console.log("Proteins:", proteins);
//   console.log("Carbohydrates:", carbohydrates);
//   console.log("Vegetable 1:", vegetables1);
//   console.log("Vegetable 2:", vegetables2);
    // if (selectElement === null) {
    //   console.error("Element not found:", selectElementId);
    //   return;
    // }
    // console.log("Updating dropdown for:", selectElementId);

     // customerInput = this.value;
      // console.log("Selected value for", selectElementId, ":", customerInput);

        //setting the customer input values
  // function setOptionVariable(htmlElement) {
  //   document.querySelectorAll(htmlElement + " >option").forEach((option) => {
  //     option.addEventListener("click", () => {
  //       document
  //         .querySelector(htmlElement)
  //         .setAttribute("value", option.innerHTML);
  //       console.log(option.innerHTML);
  //     });
  //   });
  // }

  // setOptionVariable("#Carbohydrates-choices");
  // setOptionVariable("#Protein-choices");
  // setOptionVariable("#Vegetable1-choices");
  // setOptionVariable("#Vegetable2-choices");

  

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'IUKXhCYQdD3t3MqascU7xA==wsSQ4pSIPxsWQYpR',
    //         'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    //     }
    // };

//     document.getElementById("js-save-button").addEventListener("click", function)

//   const resultSection = document.querySelector("#js-search-results");

//   resultSection.textContent = "";

//   const userChoices = localStorage.getItem("userChoices");

//   //add logic to fetch & display
  

//   //adding array for each data strand
//   const recipeData = [
//       //1
//       {
//           title: "userChoices.title",
//           ingredients: "userChoices.ingredients",
//           instructions: "userChoices.instructions",
//           servings: "userChoices.servings",
//       },
//       //2
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //3
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //4
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //5
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //6
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //7
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //8
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //9
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//       //10
//       {
//           title: "element.title",
//           ingredients: "element.ingredients",
//           instructions: "element.instructions",
//           servings: "element.servings",
//       },
//   ]
//   recipeData.forEach(recipe => {
//       const resultCard = document.createElement("div");
//       resultCard.className = "card text-center result-card"

//       const resultCardBody = document.createElement("div");
//       resultCardBody.className = "card-body result-card-body";

//       const titleElement = document.createElement("h5");
//       titleElement.className = "card-title result-heading";
//       titleElement.textContent = recipe.title;
      
//       const ingredientsElement = document.createElement("p");
//       ingredientsElement.className = "card-title result-ingredients";
//       ingredientsElement.textContent = recipe.ingredients;
      
//       const instructionsElement = document.createElement("p");
//       instructionsElement.className = "card-title result-instructions";
//       instructionsElement.textContent = recipe.instructions;
      
//       const servingsElement = document.createElement("p");
//       servingsElement.className = "card-title result-servings";
//       servingsElement.textContent = recipe.servings;
      
//       const showNutritionalButton = document.createElement("a");
//       showNutritionalButton.href = "#";
//       showNutritionalButton.className = "card-title btn btn-primary";
//       showNutritionalButton.textContent = "Show Nutritional Values";
      
// //appending results

//       resultCardBody.appendChild(titleElement);
//       resultCardBody.appendChild(ingredientsElement);
//       resultCardBody.appendChild(instructionsElement);
//       resultCardBody.appendChild(servingsElement);
//       resultCardBody.appendChild(showNutritionalButton);

//       resultCard.appendChild(resultCardBody);

//       resultSection.appendChild(resultCard);

//   })
// });

// fetch(url,options) 
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     } 
//     return response.json(); 
//     }) 
// .then(data => {
//     if (Array.isArray(data)) {
//         displayRecipes(data);
//     } else {
//         console.error("Data is not an array:", data); 
//     }
// })
// .catch(error => {
//     console.error("Error fetching recipes:", error);
// }); 
// }
// if (!userChoices) {
//   console.error("No user choices found.");
//   return; 
//   } 

//   const query = `${userChoices.proteins}, ${userChoices.carbohydrates}, ${userChoices.vegetables1}, ${userChoices.vegetables2}`.trim();