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
  "Quail",
  "Venison",
  "Bison",
  "Elk",
  "Goose",
  "Rabbit",
  "Kangaroo",
  "Alligator",
  "Octopus",
  "Squid",
  "Pheasant",
  "Grouse",
  "Moose",
  "Wild Boar",
  "Snapper",
  "Sardines",
  "Catfish",
  "Haddock",
  "Mahi-Mahi",
  "Tilapia",
  "Perch",
  "Herring",
  "Anchovies",
  "Bluefish",
  "Carp",
  "Mackerel",
  "Eel",
  "Grouper",
  "Swordfish",
  "Yellowtail",
];
var vegetables1 = [
  "",
  "Lentils",
  "Chickpeas",
  "Black Beans",
  "Kidney Beans",
  "Soybeans",
  "Edamame",
  "Tofu",
  "Tempeh",
  "Seitan",
  "Quinoa",
  "Chia Seeds",
  "Hemp Seeds",
  "Flaxseeds",
  "Pumpkin Seeds",
  "Sunflower Seeds",
  "Almonds",
  "Walnuts",
  "Cashews",
  "Pistachios",
  "Peanuts",
  "Hazelnuts",
  "Brazil Nuts",
  "Spinach",
  "Broccoli",
  "Kale",
  "Brussels Sprouts",
  "Peas",
  "Artichokes",
  "Asparagus",
  "Cauliflower",
  "Mushrooms",
  "Spirulina",
  "Nutritional Yeast",
  "Cottage Cheese (plant-based)",
  "Greek Yogurt (plant-based)",
  "Avocado",
  "Sweet Potatoes",
  "Chard",
  "Collard Greens",
  "Cabbage",
  "Cucumber",
  "Bell Peppers",
  "Eggplant",
  "Zucchini",
  "Tomatoes",
  "Carrots",
];
var carbohydrates = [
  "",
  "Potatoes",
  "Sweet Potatoes",
  "Rice (brown, white)",
  "Quinoa",
  "Oats",
  "Barley",
  "Buckwheat",
  "Couscous",
  "Pasta",
  "Bread (whole grain, whole wheat)",
  "Corn",
  "Beans (black beans, kidney beans)",
  "Lentils",
  "Chickpeas",
  "Peas",
  "Bananas",
  "Apples",
  "Oranges",
  "Berries (strawberries, blueberries)",
  "Mangoes",
  "Pineapple",
  "Watermelon",
  "Grapes",
  "Peaches",
  "Plums",
  "Dates",
  "Raisins",
  "Figs",
  "Carrots",
  "Sweet Corn",
  "Butternut Squash",
  "Acorn Squash",
  "Pumpkin",
  "Beets",
  "Brussels Sprouts",
  "Artichokes",
  "Cabbage",
  "Broccoli",
  "Spinach",
  "Kale",
  "Asparagus",
  "Tomatoes",
  "Bell Peppers",
  "Zucchini",
  "Cucumbers",
  "Eggplant",
];
var vegetables2 = [
  "",
  "Lentils",
  "Chickpeas",
  "Black Beans",
  "Kidney Beans",
  "Soybeans",
  "Edamame",
  "Tofu",
  "Tempeh",
  "Seitan",
  "Quinoa",
  "Chia Seeds",
  "Hemp Seeds",
  "Flaxseeds",
  "Pumpkin Seeds",
  "Sunflower Seeds",
  "Almonds",
  "Walnuts",
  "Cashews",
  "Pistachios",
  "Peanuts",
  "Hazelnuts",
  "Brazil Nuts",
  "Spinach",
  "Broccoli",
  "Kale",
  "Brussels Sprouts",
  "Peas",
  "Artichokes",
  "Asparagus",
  "Cauliflower",
  "Mushrooms",
  "Spirulina",
  "Nutritional Yeast",
  "Cottage Cheese (plant-based)",
  "Greek Yogurt (plant-based)",
  "Avocado",
  "Sweet Potatoes",
  "Chard",
  "Collard Greens",
  "Cabbage",
  "Cucumber",
  "Bell Peppers",
  "Eggplant",
  "Zucchini",
  "Tomatoes",
  "Carrots",
];

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

// Variable to store customer input
let customerInput = '';

// Sorting arrays alphabetically
proteins.sort();
carbohydrates.sort();
vegetables1.sort();
vegetables2.sort();

// Function to display items in a dropdown list
function displayItems(idName, items) {
  const listElement = document.querySelector(idName);
  console.log(listElement);

  for (let index = 0; index < items.length; index++) {
    const listHTML = document.createElement("option");
    listHTML.innerHTML = items[index];
    listElement.appendChild(listHTML);
    //is this the most effective method? Can we instead print them to the cards provided? This would be tidier if possible.
    /* e.g.
    function displayItems(idName, items) {

    var todayContainer = $("#today");

      var todayContainerCard = $("<div>")
        .addClass("card today-card")
        .appendTo(todayContainer);
      var cardImage = $("<div>")
        .addClass("card-body")
        .appendTo(todayContainerCard);
      var cardBody = $("<div>")
        .addClass("card-body")
        .appendTo(todayContainerCard);

      $("<h2>").text(data.name).appendTo(cardBody); //today's date needs to be added here
      $("<h5>")
        .text(dayjs(data.dt_txt).format("dddd D MMMM YYYY"))
        .addClass("date")
        .appendTo(cardBody);
      var iconURL =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      $("<img>")
        .attr("src", iconURL)
        .addClass("today-card-image")
        .appendTo(cardImage);
      $("<p>")
        .text("Today's weather is " + data.weather[0].description + "!")
        .appendTo(cardBody);
      $("<p>")
        .text("Temp: " + data.main.temp.toFixed(2) + "°C")
        .appendTo(cardBody);
      $("<p>")
        .text(
          "Wind: " + data.wind.speed + "m/s"
        )
        .appendTo(cardBody);
      $("<p>")
        .text("Humidity: " + data.main.humidity + "%")
        .appendTo(cardBody);
    */
  }

  // items.forEach(element => {
  //     const listHTML = document.createElement("option");
  // //    listElement.setAttribute("value", element)
  //     listHTML.innerHTML = element;
  //     listElement.appendChild(listHTML);
  // });
}

// document.addEventListener('click', function () {
// });

// function addListItem(items) {
//     const listHTML = '';
//     items.forEach(item => {
//         listHTML += '<li>${item}</li>';
//     });
// }

// Event listener, display recipe results, fetch recipes
document.addEventListener("DOMContentLoaded", function () {
  const recipeResults = document.querySelector("#js-recipe-section");
  const fetchButton = document.querySelector("#js-fetch-recipes");

  if (fetchButton && recipeResults) {
    fetchButton.addEventListener("click", function () {
      readCustomerInput();

      console.log("customerInput " + customerInput);

      const query = customerInput;
      console.log(query);
      const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + query;
      console.log(url);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e",
          "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
        },
      };

      //FIXME: edit better messages for errors
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let recipeHTML = "";
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            recipeHTML += `<p>${element.title}</p>
              <p>Ingredients: ${element.ingredients}</p>
              <div>Instructions ${element.instructions}</div>
              <div> Servings: ${element.servings}</div>
              `;
          }
          recipeResults.innerHTML = recipeHTML;
        })
        .catch((error) => {
          console.error("There was a problem:", error);
        });
    });
  } else {
    console.error("Button or recipe section not found");
  }

// IDs of dropdown lists
  const optionElements = [
    "#Protein-choices",
    "#Carbohydrates-choices",
    "#Vegetable1-choices",
    "#Vegetable2-choices",
  ];

  //adding the options for each food group
  displayItems("#Protein-choices", proteins);
  displayItems("#Carbohydrates-choices", carbohydrates);
  displayItems("#Vegetable1-choices", vegetables1);
  displayItems("#Vegetable2-choices", vegetables2);

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
});


//new js code to implement API within the search function and card group
//this works to generate the recipes at the bottom of the page in cards
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