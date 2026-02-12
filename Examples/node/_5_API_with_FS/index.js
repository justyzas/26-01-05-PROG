import express from "express";
import {
	createVisitorsFileIfNotExists,
	createCocktailsFileIfNotExists,
	readVisitsCount,
	readCocktails,
	updateVisitorsCount,
	writeToCocktailsFile,
} from "./files.js";

const app = express();
const port = 3001;

app.use(express.json());

createVisitorsFileIfNotExists();
createCocktailsFileIfNotExists();

app.get("/visits", (req, res) => {
	const visitorsCount = readVisitsCount();
	updateVisitorsCount(visitorsCount + 1);
	res.send(visitorsCount + 1);
});

app.get("/cocktails", (req, res) => {
	const cocktails = readCocktails();

	res.send(cocktails);
});

app.post("/add-cocktail", (req, res) => {
	const newCocktail = req.body;

	const cocktails = readCocktails();

	// Getting new cocktail ID
	const lastCocktailId = cocktails[cocktails.length - 1]?.id || 100;
	const newId = lastCocktailId + 1;
	cocktails.push({ ...newCocktail, id: newId });

	//saving to file
	const cocktailsJson = JSON.stringify(cocktails);
	writeToCocktailsFile(cocktailsJson);

	res.send(cocktails);
});

app.listen(port, (err) => {
	console.log("Server successfully launched on port", port);
});
