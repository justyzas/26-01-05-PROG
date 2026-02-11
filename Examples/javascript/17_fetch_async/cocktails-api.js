export async function getCocktailBySearch(searchPhrase) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchPhrase}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export async function getRandomCocktail() {
	const response = await fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/random.php",
	);
	console.log(response);
	const data = await response.json();

	return data;
}

export async function getMyRandomCocktail() {
	const response = await fetch("http://localhost:3000/random-cocktail");
	console.log(response);
	const data = await response.json();

	return data;
}

export async function addNewCocktail(cocktail) {
	const cocktailJSON = JSON.stringify(cocktail);
	const response = await fetch("http://localhost:3000/add-cocktail", {
		method: "post",
		body: cocktailJSON,
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
	const data = await response.json();

	return data;
}
const searchedCocktail = await getMyRandomCocktail();

const newCocktail = {
	name: "Cosmopolitan",
	glassType: "Martini glass",
};
addNewCocktail(newCocktail);
console.log(searchedCocktail);
