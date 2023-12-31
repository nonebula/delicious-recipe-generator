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

  