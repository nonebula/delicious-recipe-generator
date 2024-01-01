  function fetchAndDisplayNutrition(ingredients) {
    const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "99088a17fdmsh5b87115e6ccddc4p1da664jsnac40653791f8",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error ("Response not ok.");
            }
            return response.json(); 
        })
        .then(data => {
            displayNutritionData(data);
        })
        .catch(error => {
            console.error("Error fetching nutrition data:", error);
        });
    } 


function displayNutritionData(data) {
  const nutritionContainer = document.getElementById("nutrition-container");
    nutritionContainer.nutritionHTML = "";

data.forEach(nutrition => {
    let content = ` <div>
        <p>Name: ${element.name}</p>
        <p>Calories: ${element.calories}</p>
        <p>Carbohydrates (total) ${element.carbohydrates_total_g}</p>
        <p>Cholesterol ${element.cholesterol_mg}</p>
        <p>Saturarted Fat: ${element.fat_saturated_g}</p>
        <p>Fat (total): ${element.fat_total_g}</p>
        <p>Potassium: ${element.potassium_mg}</p>
        <p>Protein: ${element.protein_g}</p>
        <p>Sodium: ${element.sodium_mg}</p>
        <p>Sugar: ${element.sugar_g}</p>
        </div> 
        `;
    nutritionContainer.innerHTML += content; 
    }); 
} 
