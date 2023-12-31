// Arrays containing food choices for different categories
var proteins = [
  "",
  "Beef",
  "Chicken",
  "Turkey",
  "Pork",
  "Lamb",
  "Salmon",
  "Tuna",
  "Shrimp",
  "Cod",
  "Halibut",
  "Trout",
  "Crab",
  "Lobster",
  "Duck",
  "Octopus",
  "Squid",
  "Snapper",
  "Sardines",
  "Haddock",
  "Tilapia",
  "Perch",
  "Herring",
  "Anchovies",
  "Carp",
  "Tofu",
  "Tempeh",
  "Mackerel",
];

var carbohydrates = [
  "",
  "Potatoes",
  "Sweet Potatoes",
  "Rice",
  "Oats",
  "Noodles",
  "Spaghetti",
  "Noodles",
  "Pasta",
  "Bread",
];

var vegetables1 = [
  "",
  "Green peppers", 
  "Celery",
  "Mushrooms",
  "Onions",
  "Scallions", 


];

var vegetables2 = [
  "",
  "Lentils",
  "Chickpeas",
  "Black Beans",
  "Kidney Beans",
  "Soybeans",
  "Edamame",
  "Quinoa",
  "Spinach",
  "Broccoli",
  "Kale",
  "Brussels Sprouts",
  "Peas",
  "Artichokes",
  "Asparagus",
  "Cauliflower",
  "Mushrooms",
  "Avocado",
  "Sweet Potatoes",
  "Cabbage",
  "Cucumber",
  "Bell Peppers",
  "Eggplant",
  "Zucchini",
  "Tomatoes",
  "Carrots",
];

// Sorting arrays alphabetically
proteins.sort();
carbohydrates.sort();
vegetables1.sort();
vegetables2.sort();

document.addEventListener("DOMContentLoaded", function () {
    populateDropdown("Protein-choices", proteins);
    populateDropdown("Carbohydrates-choices", carbohydrates);
    populateDropdown("Vegetable1-choices", vegetables1);
    populateDropdown("Vegetable2-choices", vegetables2);

const fetchButton = document.querySelector("#js-fetch-recipes");
const recipeResults = document.querySelector("#js-recipe-section"); 

if (fetchButton && recipeResults) {
  fetchButton.addEventListener("click", function() {
    const proteinChoice = document.getElementById("Protein-choices").value;
    const carbChoice = document.getElementById("Carbohydrates-choices").value;
    const veg1Choice = document.getElementById("Vegetable1-choices").value;
    const veg2Choice = document.getElementById("Vegetable2-choices").value;

    const query = [proteinChoice, carbChoice, veg1Choice, veg2Choice]
    .filter(Boolean)
    .join(", ");

  fetchAndDisplayRecipes(query, recipeResults); 
   });
  }
}); 

function fetchAndDisplayRecipes(query, displayElement) {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    displayRecipes(data, displayElement);
  })
  .catch(error => {
    console.error("Error fetching recipes:", error);
    displayElement.innerHTML = `<p>Error: ${error.message}</p>`;
  });
} 

function displayRecipes(recipes, container) {
  container.innerHTML = "";
  if (recipes.length === 0) {
    container.innerHTML = "<p>No recipes found based on your selections.</p>";
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
    ingredientsP.textContent = `Ingredients: ${recipe.ingredients.replace(/\|/g, ', ')}`;
    instructionsP.textContent = `Instructions: ${recipe.instructions}`;
    servingsP.textContent = `Servings: ${recipe.servings}`;
  
    cardBodyDiv.appendChild(titleH5);
    cardBodyDiv.appendChild(ingredientsP);
    cardBodyDiv.appendChild(instructionsP);
    cardBodyDiv.appendChild(servingsP);
    cardDiv.appendChild(cardBodyDiv);
    container.appendChild(cardDiv);
  });

  function displayItems(idName, items) {
    const listElement = document.querySelector(idName);
    items.forEach(item => {
      const option = document.createElement("option");
      option.textContent = item;
      listElement.appendChild(option); 
    })
  }
}
function populateDropdown(selectElementId, items) {
  var selectElement = document.getElementById(selectElementId);
  items.forEach(function(item) {
    var option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    selectElement.appendChild(option);
  });
} 