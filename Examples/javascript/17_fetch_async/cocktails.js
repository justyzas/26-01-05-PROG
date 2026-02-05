import { getRandomCocktail } from "./cocktails-api.js";

const cocktailImg = document.querySelector("#cocktail-img");
const ingredientsList = document.querySelector("#ingredients");
const title = document.querySelector("#cocktail-title");
const recipeElement = document.querySelector("#recipe");

function extractIngredientsAndMeasures(randomCocktail) {
	const ingredientsAndMeasures = [];

	const ingredientPrefix = "strIngredient";
	const measurePrefix = "strMeasure";

	for (let i = 1; i <= 15; i++) {
		const ingredientKey = `${ingredientPrefix}${i}`;
		const measureKey = `${measurePrefix}${i}`;
		const ingredient = randomCocktail[ingredientKey];
		const measure = randomCocktail[measureKey];

		if (ingredient === null) break;
		const ingredientAndMeasure = {
			ingredient,
			measure,
		};

		ingredientsAndMeasures.push(ingredientAndMeasure);
	}
	return ingredientsAndMeasures;
}

const randomCocktails = await getRandomCocktail(); //30ms

const randomCocktail = randomCocktails.drinks[0];
console.log(randomCocktail);

title.innerText = randomCocktail.strDrink;
recipeElement.innerText = randomCocktail.strInstructions;
cocktailImg.setAttribute("src", randomCocktail.strDrinkThumb);

const ingredientsAndMeasures = extractIngredientsAndMeasures(randomCocktail);

console.log(ingredientsAndMeasures);
ingredientsAndMeasures.forEach((im) => {
	ingredientsList.innerHTML += `<li>
						<span class="ingredient">${im.ingredient}</span> -
						<span class="measure">${im.measure === null ? "some" : im.measure}</span>
					</li>`;
});
