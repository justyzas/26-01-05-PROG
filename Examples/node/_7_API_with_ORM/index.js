import express from "express";
import db from "./db.js";
import { CocktailCreationSchema, CocktailUpdateSchema } from "./validations.js";
import { Cocktail } from "./models.js";
import { Op, where } from "sequelize";
import { success } from "zod";
const app = express();
const port = 3001;

app.use(express.json());

app.get("/all-cocktails", async (req, res) => {
	// const cocktails = await db`SELECT * FROM public.cocktails ORDER BY name`;
	const cocktails = await Cocktail.findAll();
	res.send(cocktails);
});

app.get("/cocktail/search", async (req, res) => {
	const searchPhrase = req.query.phrase;
	if (!searchPhrase) {
		res.status(400).send({
			message: `Searh phrase is a mandatory query parameter. Got ${searchPhrase}`,
			success: false,
		});
		return;
	}

	const matchedCocktails = await Cocktail.findAll({
		where: {
			[Op.or]: {
				name: `%${searchPhrase.toLowerCase()}%`,
				recipe: `%${searchPhrase.toLowerCase()}%`,
				glass: `%${searchPhrase.toLowerCase()}%`,
			},
		},
	});

	res.send({ data: matchedCocktails, message: "success", success: true });
});

app.get("/cocktail/:id", async (req, res) => {
	const id = req.params.id;

	if (isNaN(id)) {
		res
			.status(400)
			.send({ message: "Id should be a number", success: false, data: null });
		return;
	}

	// const cocktails = await db`SELECT * FROM public.cocktails WHERE id = ${id}`;

	// const cocktail = await Cocktail.findOne({
	// 	where: {
	// 		id,
	// 	},
	// });
	const cocktail = await Cocktail.findByPk(id);
	// {
	// 	name: "",
	// 	recipe: "",
	// 	glass: ""
	// } || null
	if (!cocktail) {
		res.status(404).send({
			message: `Cocktail with given ID = ${id} was not found`,
			success: false,
			data: null,
		});
		return;
	}

	res.send({
		message: `Cocktail was found successfuly`,
		success: true,
		data: cocktail,
	});
});

app.post("/add-cocktail", async (req, res) => {
	try {
		const body = req.body;
		console.log(body);
		const validatedCocktail = CocktailCreationSchema.parse(body); // ERROR

		const newCocktail = await Cocktail.create(validatedCocktail);
		// const result = await db`INSERT INTO public.cocktails (name, recipe, glass)
		// VALUES (${validatedCocktail.name}, ${validatedCocktail.recipe}, ${validatedCocktail.glass})`;

		res.send(newCocktail);
	} catch (err) {
		if (err.name === "ZodError") {
			res.status(400).send({
				message: "Duomenų pridėjimas nesėkmingas - Validacijos klaida",
				success: false,
				errorMessage: JSON.parse(err.message),
			});
		}
	}
});

app.delete("/cocktails/delete/:id", async (req, res) => {
	const id = req.params.id;

	if (isNaN(id)) {
		res.status(400).send({
			message: `Gautas ID = ${id} privalo būti skaičius`,
			success: false,
		});
		return;
	}
	// const cocktails = await db`SELECT * FROM public.cocktails WHERE id = ${id}`;
	// const cocktailsCount = await Cocktail.count({ where: { id } });

	// console.log(id);
	// await db`DELETE FROM public.cocktails WHERE id = ${id}`;
	const deletedCount = await Cocktail.destroy({ where: { id } });
	console.log(deletedCount);
	if (deletedCount === 0) {
		res.status(404).send({
			message: `Pagal gautą ID = ${id}, nerastą, ką ištrinti`,
			success: false,
		});
		return;
	}
	res.status(204).send();
});

app.put("/cocktails/update/:id", async (req, res) => {
	try {
		const id = req.params.id;

		if (!id || isNaN(id)) {
			res.status(400).send({
				message: "Gautas ID privalo būti skaičius",
				success: false,
				data: null,
			});
			return;
		}

		const updateData = CocktailUpdateSchema.parse(req.body);

		if (Object.keys(updateData).length === 0) {
			res.status(400).send({
				message: "Nėra ką atnaujinti",
				success: false,
				data: null,
			});
			return;
		}

		// const cocktails = await db`SELECT * FROM public.cocktails WHERE id = ${id}`;
		const [affectedCount] = await Cocktail.update(updateData, {
			where: { id },
		});

		if (affectedCount === 0) {
			res.status(404).send({
				message: `Kokteilis su ID = ${id} nerastas`,
				success: false,
				data: null,
			});
			return;
		}
		res.send({
			message: "Kokteilis sėkmingai atnaujintas",
			success: true,
		});
	} catch (err) {
		if (err.name === "ZodError") {
			res.status(400).send({
				message: "Duomenų pridėjimas nesėkmingas - Validacijos klaida",
				success: false,
				errorMessage: JSON.parse(err.message),
			});
		}
	}
});

app.listen(port, (err) => {
	console.log("Server successfully launched on port", port);
});
