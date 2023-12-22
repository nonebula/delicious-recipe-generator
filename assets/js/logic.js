var proteins = ['',"Beef", "Chicken", "Turkey", "Pork", "Lamb", "Salmon", "Tuna", "Shrimp", "Cod", "Halibut", "Trout", "Crab", "Lobster", "Duck", "Quail", "Venison", "Bison", "Elk", "Goose", "Rabbit", "Kangaroo", "Alligator", "Octopus", "Squid", "Pheasant", "Grouse", "Moose", "Wild Boar", "Snapper", "Sardines", "Catfish", "Haddock", "Mahi-Mahi", "Tilapia", "Perch", "Herring", "Anchovies", "Bluefish", "Carp", "Mackerel", "Eel", "Grouper", "Swordfish", "Yellowtail"];
var vegetables1 = ['',"Lentils", "Chickpeas", "Black Beans", "Kidney Beans", "Soybeans", "Edamame", "Tofu", "Tempeh", "Seitan", "Quinoa", "Chia Seeds", "Hemp Seeds", "Flaxseeds", "Pumpkin Seeds", "Sunflower Seeds", "Almonds", "Walnuts", "Cashews", "Pistachios", "Peanuts", "Hazelnuts", "Brazil Nuts", "Spinach", "Broccoli", "Kale", "Brussels Sprouts", "Peas", "Artichokes", "Asparagus", "Cauliflower", "Mushrooms", "Spirulina", "Nutritional Yeast", "Cottage Cheese (plant-based)", "Greek Yogurt (plant-based)", "Avocado", "Sweet Potatoes", "Chard", "Collard Greens", "Cabbage", "Cucumber", "Bell Peppers", "Eggplant", "Zucchini", "Tomatoes", "Carrots"];
var carbohydrates = ['',"Potatoes", "Sweet Potatoes", "Rice (brown, white)", "Quinoa", "Oats", "Barley", "Buckwheat", "Couscous", "Pasta", "Bread (whole grain, whole wheat)", "Corn", "Beans (black beans, kidney beans)", "Lentils", "Chickpeas", "Peas", "Bananas", "Apples", "Oranges", "Berries (strawberries, blueberries)", "Mangoes", "Pineapple", "Watermelon", "Grapes", "Peaches", "Plums", "Dates", "Raisins", "Figs", "Carrots", "Sweet Corn", "Butternut Squash", "Acorn Squash", "Pumpkin", "Beets", "Brussels Sprouts", "Artichokes", "Cabbage", "Broccoli", "Spinach", "Kale", "Asparagus", "Tomatoes", "Bell Peppers", "Zucchini", "Cucumbers", "Eggplant"];
var vegetables2 = ['',"Lentils", "Chickpeas", "Black Beans", "Kidney Beans", "Soybeans", "Edamame", "Tofu", "Tempeh", "Seitan", "Quinoa", "Chia Seeds", "Hemp Seeds", "Flaxseeds", "Pumpkin Seeds", "Sunflower Seeds", "Almonds", "Walnuts", "Cashews", "Pistachios", "Peanuts", "Hazelnuts", "Brazil Nuts", "Spinach", "Broccoli", "Kale", "Brussels Sprouts", "Peas", "Artichokes", "Asparagus", "Cauliflower", "Mushrooms", "Spirulina", "Nutritional Yeast", "Cottage Cheese (plant-based)", "Greek Yogurt (plant-based)", "Avocado", "Sweet Potatoes", "Chard", "Collard Greens", "Cabbage", "Cucumber", "Bell Peppers", "Eggplant", "Zucchini", "Tomatoes", "Carrots"];
let customerInput = "";

proteins.sort();
carbohydrates.sort();
vegetables1.sort();
vegetables2.sort()


function displayItems(idName, items) {
    const listELement = document.querySelector(idName)
    console.log(listELement)

    for (let index = 0; index < items.length; index++) {
        const listHTML = document.createElement("option");
        listHTML.innerHTML = items[index];
        listELement.appendChild(listHTML);
    }

    // items.forEach(element => {
    //     const listHTML = document.createElement("option");
    // //    listELement.setAttribute("value", element)
    //     listHTML.innerHTML = element;
    //     listELement.appendChild(listHTML);
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

document.addEventListener('DOMContentLoaded', function () {
    const recipeResults = document.querySelector('#js-recipe-section');
    const fetchButton = document.querySelector('#js-fetch-recipes'); 
    
    if (fetchButton && recipeResults) {
        fetchButton.addEventListener('click', function () {

            readCustomerInput();
            console.log(customerInput);


            const query = customerInput;
            const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
                    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
                }
            };

            //FIXME: edit better messages for errors
            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    let recipeHTML = '';
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
                .catch(error => {
                    console.error('There was a problem:', error);
                });
        });
    } else {
        console.error('Button or recipe section not found');
    }

    const nutritionButton = document.querySelector('.js-fetch-nutrition');
    const nutritionResults = document.querySelector('.js-nutrition-section');

    if (nutritionButton && nutritionResults) {

        nutritionButton.addEventListener('click', function () {
            const url = 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '99088a17fdmsh5b87115e6ccddc4p1da664jsnac40653791f8',
                    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
                }
            }

            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    let nutritionHTML = '';
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
                .catch(error => {
                    console.error('There was a problem:', error);
                });
        });
    } else {
        console.error('Nutrition or nutrition section was not found');
    }

    const optionElements = ["#Protein-choices", "#Carbohydrates-choices", "#Vegetable1-choices", "#Vegetable2-choices"]


    //adding the oprions for each food group
    displayItems("#Protein-choices", proteins);
    displayItems("#Carbohydrates-choices", carbohydrates);
    displayItems("#Vegetable1-choices", vegetables1);
    displayItems("#Vegetable2-choices", vegetables2);

   //setting the customer input values
    function setOptionVariable(htmlElement){
        document.querySelectorAll(htmlElement+" >option").forEach((option) => {
            option.addEventListener("click", () => {
                document.querySelector(htmlElement).setAttribute('value', option.innerHTML);
                console.log(option.innerHTML);
            })
        }); 
    }

    setOptionVariable("#Carbohydrates-choices");
    setOptionVariable("#Protein-choices");
    setOptionVariable("#Vegetable1-choices");
    setOptionVariable("#Vegetable2-choices");

    //reading the customer input values
    function readCustomerInput(){
        for (htmlElement of optionElements){
            console.log(htmlElement);
            console.log("Value is "+ document.querySelector(htmlElement).value);
            customerInput += document.querySelector(htmlElement).value+' ';
        }
    }
});