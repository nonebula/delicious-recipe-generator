document.addEventListener('DOMContentLoaded', function () {
    const recipeResults = document.querySelector('.js-recipe-section');
    const fetchButton = document.querySelector('.js-fetch-recipes');    if (fetchButton && recipeResults) {
      fetchButton.addEventListener('click', function () {
        const query = "chicken";
        const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
          }
        };        
        
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

});