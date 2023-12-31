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

  var saveButton = document.getElementById("js-save-button");
  if (saveButton) {
    saveButton.addEventListener("click", function () {
      var selections = {
        proteins: document.getElementById("Protein-choices").value,
        carbohydrates: document.getElementById("Carbohydrates-choices").value,
        vegetables1: document.getElementById("Vegetable1-choices").value,
        vegetables2: document.getElementById("Vegetable2-choices").value,
      };
      localStorage.setItem("userChoices", JSON.stringify(selections));
      window.location.href = "results.html";
      });
    } 
}); 

function populateDropdown(selectElementId, items) {
  var selectElement = document.getElementById(selectElementId);
  if (!selectElement) {
    console.error(`dropdown element not found: ${selectElementId}`);
    return;
  }
  items.forEach(function(item) {
    var option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    selectElement.appendChild(option);
  });
}