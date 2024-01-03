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
  "Prawns", 
  "Cod",
  "Trout",
  "Duck",
  "Sardines",
  "Mackerel",
  "Cheese",
  "Eggs",
];

var carbohydrates = [
  "",
  "Potatoes",
  "Sweet Potatoes",
  "Rice",
  "Oats",
  "Noodles",
  "Spaghetti",
  "Linguine",
  "Couscous",
  "Pasta",
  "Bread",
];

var vegetables1 = [
  "",
  "Lentils",
  "Chickpeas",
  "Black Beans",
  "Kidney Beans",
  "Spinach",
  "Broccoli",
  "Kale",
  "Brussels Sprouts",
  "Peas",
  "Sweetcorn",
  "Cauliflower", 
  "Asparagus",
  "Cauliflower",
  "Mushrooms",
  "Avocado",
  "Sweet Potatoes",
  "Cabbage",
  "Cucumber",
  "Bell Peppers",
  "Aubergine",
  "Courgette",
  "Tomatoes",
  "Carrots",
];

var vegetables2 = [
  "",
  "Lentils",
  "Chickpeas",
  "Black Beans",
  "Kidney Beans",
  "Spinach",
  "Broccoli",
  "Kale",
  "Brussels Sprouts",
  "Peas",
  "Sweetcorn",
  "Cauliflower", 
  "Asparagus",
  "Cauliflower",
  "Mushrooms",
  "Avocado",
  "Sweet Potatoes",
  "Cabbage",
  "Cucumber",
  "Bell Peppers",
  "Aubergine",
  "Courgette",
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

const saveButton = document.getElementById("js-save-button");
const mainModal = document.getElementById("saveModal");
if (saveButton) {
  saveButton.addEventListener("click", function () {
    const selections = {
      proteins: document.getElementById("Protein-choices").value,
      carbohydrates: document.getElementById("Carbohydrates-choices").value,
      vegetables1: document.getElementById("Vegetable1-choices").value,
      vegetables2: document.getElementById("Vegetable2-choices").value,
    };
    localStorage.setItem("userChoices", JSON.stringify(selections));

    // Open modal
    mainModal.classList.add("show");
    mainModal.style.display = "block";
    mainModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
}

const fetchRecipesButton = document.getElementById("js-fetch-recipes");
  if (fetchRecipesButton) {
    fetchRecipesButton.addEventListener("click", function () {
      window.location.href = "results.html";
    });
  }
});

function populateDropdown(selectElementId, items) {
  var selectElement = document.getElementById(selectElementId);
  items.forEach(function (item) {
    var option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    selectElement.appendChild(option);
  });
}
