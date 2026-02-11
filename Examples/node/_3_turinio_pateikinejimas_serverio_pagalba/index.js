import express from "express";
import { cocktails } from "./cocktails.js";
import { generateRandomNumber } from "./random-number-generator.js";
import cors from "cors";
// HTTP Serverio sukūrimas
const app = express();

// Middlewares/Nustatymai
// Priimti užklausas iš bet kur
app.use(cors());
// Priimti JSON formato užklausas
app.use(express.json());

// HTTP GET endpoint kūrimas
app.get("/test", (req, res) => {
	console.log("Nuorodos parametrai", req.params);
	console.log("Užklausos parametrai", req.query);
	console.log("Kreiptasi į", req.url);
	console.log("Kreiptasi į", req.originalUrl);
	console.log("IP adresas", req.ip);
	console.log("IPS", req.ips);

	res.send("bet koks tekstas");
});

app.get("/random-cocktail", (req, res) => {
	// query-parameters
	// /random-cocktail?count=3 Parametrų už klaustuko gavimas pagal pavadinimą
	const params = req.query;
	const countStr = params.count || 1; // string | undefined

	console.log(countStr);
	console.log(typeof countStr);

	const count = Number(countStr);

	if (isNaN(countStr) || count < 1) {
		res.status(400).send({
			message: "Pateiktas parametras 'count' privalo būti teigiamas skaičius",
		});
	}
	const temporaryCocktails = [...cocktails];

	const randomCocktails = [];
	for (let i = 0; i < count; i++) {
		const randomCocktailIndex = generateRandomNumber(
			0,
			temporaryCocktails.length - 1,
		);
		const randomCocktail = temporaryCocktails[randomCocktailIndex];
		randomCocktails.push(randomCocktail);

		temporaryCocktails.splice(randomCocktailIndex, 1);
	}

	res.send(randomCocktails);
});

app.get("/get-cocktail-by-id/:id", (req, res) => {
	const searchingForId = req.params.id; // string | undefined
	if (isNaN(searchingForId)) {
		res.status(400).send({
			message: `ID privalo būti skaičius. Gautas id:'${searchingForId}'`,
		});
		return;
	}
	const id = Number(searchingForId);

	const foundCocktail = cocktails.find((c) => c.id === id);

	if (!foundCocktail) {
		res.status(404).send({
			message: `Kokteilis pagal pateiktą id: '${searchingForId}' buvo nerastas`,
		});
		return;
	}

	res.send(foundCocktail);
});

app.get("/all-cocktails", (req, res) => {
	res.send(cocktails);
});

// HTTP POST - Duomenų pridėjimas į serverį
app.post("/add-cocktail", (req, res) => {
	console.log("BODY:");
	console.log(req.body);

	const newCocktail = req.body;
	const newId = cocktails[cocktails.length - 1].id + 1;
	cocktails.push({
		...newCocktail,
		id: newId,
	});
});

// HTTP Serverio paleidimas
app.listen(3000);

console.log("Express serveris sėkmingai pasileido");
