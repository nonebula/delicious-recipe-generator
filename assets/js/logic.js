
const recipeInput = document.querySelector('.js-recipe-input')
const query = "chicken"
const recipeResults = document.querySelector('.js-recipe-section')
let recipeHTML = []
firstApiKey = 'IUKXhCYQdD3t3MqascU7xA==wsSQ4pSIPxsWQYpR'
seconfApiKey = 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e'
apiQueryUrl = `https://api.api-ninjas.com/v1/recipe?query=${recipeInput}&X-Api-Key`

//RECIPE API
const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=chicken';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

fetch(url, options)
.then (response => {
    if (!response.ok) { 
        throw new Error ('response not ok.');}
        else { 
            return response.json(); }
    }).then((data)=>{
        console.log(data);
        for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                 let htmlEl =  `<p>${element.title}</p>`;
                 recipeHTML.push(htmlEl);
                }
               recipeResults.innerHTML = recipeHTML;
    })



//     console.log(response);
//     return response.json();

// }).then (function  (data){
//     console.log(data);
//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         let htmlEl =  `<p>${element.title}</p>`;
//         recipeHTML.push(htmlEl);
//     }
//     recipeResults.innerHTML = recipeHTML;
// }).catch (function (error) {
// 	console.error(error);
// });

