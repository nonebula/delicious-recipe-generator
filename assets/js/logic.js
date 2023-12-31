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
  "Quinoa",
  "Oats",
  "Barley",
  "Buckwheat",
  "Noodles",
  "Spaghetti",
  "Glass Noodles",
  "Linguine",
  "Couscous",
  "Pasta",
  "Bread",
  "Butternut Squash",
  "Pumpkin",
];

var vegetables1 = [
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

// Variable to store customer input
let customerInput = '';

// Sorting arrays alphabetically
proteins.sort();
carbohydrates.sort();
vegetables1.sort();
vegetables2.sort();

// Function to display items in a dropdown list
document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom fully loaded and parsed."); 
  console.log("Proteins:", proteins);
  console.log("Carbohydrates:", carbohydrates);
  console.log("Vegetable 1:", vegetables1);
  console.log("Vegetable 2:", vegetables2);


  function updateCustomerInput (selectElementId, items) {
    const selectElement = document.querySelector(selectElementId);
    console.log("Updating dropdown for:", selectElementId); 

    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      selectElement.appendChild(option); 
    })

    selectElement.addEventListener("change", function () {
      customerInput = this.value; 
      console.log("Selected value for", selectElementId, ":", customerInput); 
    }); 
  } 
updateCustomerInput("#Protein-choices", proteins);
updateCustomerInput("#Carbohydrates-choices", carbohydrates);
updateCustomerInput("#Vegetable1-choices", vegetables1);
updateCustomerInput("#Vegetable2-choices", vegetables2);
}); 


// IDs of dropdown lists
  const optionElements = [
    "#Protein-choices",
    "#Carbohydrates-choices",
    "#Vegetable1-choices",
    "#Vegetable2-choices",
  ];


  //setting the customer input values
  function setOptionVariable(htmlElement) {
    document.querySelectorAll(htmlElement + " >option").forEach((option) => {
      option.addEventListener("click", () => {
        document
          .querySelector(htmlElement)
          .setAttribute("value", option.innerHTML);
        console.log(option.innerHTML);
      });
    });
  }

  setOptionVariable("#Carbohydrates-choices");
  setOptionVariable("#Protein-choices");
  setOptionVariable("#Vegetable1-choices");
  setOptionVariable("#Vegetable2-choices");

  //reading the customer input values
  function readCustomerInput() {
    customerInput = '' 
   optionElements.forEach(element => {
        //console.log(element);
        const optionValue = document.querySelector(element).value;
        console.log("optionValue "+optionValue);
        if(optionValue){
            customerInput += optionValue + '&';
        }
        //Save to local storage
        localStorage.setItem('userChoices', customerInput);
      });
  }
// });

//new js code to implement API within the search function and card group
//this worked to generate the recipes at the bottom of the page in cards, hasn't worked after merging.
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".recipe-search-btn");
  if (searchButton) {
    searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      const searchInput = document.querySelector("input[type=search]").value;
      fetchRecipes(searchInput);
    });
  }
  function fetchRecipes(query) {
    const recipeResults = document.querySelector("#js-recipe-section");
    const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + query;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
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
        let recipeHTML = "";
        // Display up to 3 recipes
        for (let index = 0; index < Math.min(3, data.length); index++) {
          const element = data[index];
          console.log(data);
          recipeHTML += `<div class="card">
          <img src="${element.image}" class="card-img-top" alt="Recipe Image">
          <div class="card-body">
            <h5>${element.title}</h5>
            <p>Ingredients: ${element.ingredients}</p>
            <div>Instructions ${element.instructions}</div>
            <div>Servings: ${element.servings}</div>
          </div>
        </div>`;
      }
        recipeResults.innerHTML = recipeHTML;
      })
      .catch((error) => {
        console.error("There was a problem:", error);
      });
  }
});
