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
	const data = await response.json();

	return data;
}

const searchedCocktail = await getCocktailBySearch("beer");

console.log(searchedCocktail);
