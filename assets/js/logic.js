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
  "Venison",
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

// Section for fetching nutrition data
  const nutritionButton = document.querySelector(".js-fetch-nutrition");
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

// Save event - taken from previous homework, commented out for now
// function saveHistory(event) {
      // Saving user's choices to local storage
    // }

// $("#js-fetch-recipes").on("click", function (event) {
//   event.preventDefault();
//   var userChoices = customerInput.val();

//   if (!cities.includes(textInput)) {
//     cities.push(textInput);
//   }

//   renderButtons();
//   displayCityInfo(textInput);
//   futureForecast(textInput);
//   saveHistory();
// });