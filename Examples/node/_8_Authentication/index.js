import express from "express";
// var session = require('express-session')
import session from "express-session";
import { LoginDataSchema } from "./validations.js";

const app = express();
const PORT = 3000;

const users = [
	{
		username: "Justinas123",
		password: "Bananas123?",
		role: "admin",
	},
	{
		username: "Algirdas",
		password: "123456!",
		role: "user",
	},
];
const secretPhrase = "Pica su ananasais yra pati geriausia.";

// Middleware - tai yra funkcija, atsitinkanti su kiekviena užklausa, pereinančia per šią aplikacijos dalį
app.use(express.json());

app.use(
	session({
		secret: "keyboard cat",
		resave: false, //Padaro, kad sesija nebūtų perkuriama kiekvienos užklausos metu
		saveUninitialized: true, // Jei sesija dar nebuvo sukurta, ji būna sukuriama po pirmosios užklausos
		cookie: {
			httpOnly: true, // Jei svetainė turi HTTPS - nustatyti į false
			secure: false,
			//        ms    s   m     h    d
			maxAge: 1000 * 60 * 60 * 24 * 7, // kiek laiko milisekundėmis turėtų trukti naudotojo sesija
		},
	}),
);

app.get("/visits", (req, res) => {
	if (!req.session.visits) {
		req.session.visits = 0;
	}
	console.log(req.session);
	req.session.visits++; // Apsilankymu skaicius padideja

	res.send({ visit: req.session.visits });
});

app.get("/my-role", (req, res) => {
	res.send({ role: req.session.role });
});

app.post("/login", (req, res) => {
	try {
		const validatedLoginData = LoginDataSchema.parse(req.body);
		const foundUser = users.find(
			(u) => u.username === validatedLoginData.username,
		);

		if (!foundUser) {
			res.status(403).send({
				message: "Prisijungimas nesėkmingas - neteisingi prisijungimo duomenys",
				success: false,
			});
			return;
		}

		if (foundUser.password === validatedLoginData.password) {
			req.session.role = foundUser.role;
			res.send({
				message: "Prisijungimas sėkmingai pavyko",
				success: true,
			});
			return;
		}
		res.status(403).send({
			message: "Prisijungimas nesėkmingas - neteisingi prisijungimo duomenys",
			success: false,
		});
	} catch (err) {
		if (err.name === "ZodError") {
			res.status(400).send({
				message: "Prisijungimas nesėkmingas - Duomenų validacijos klaida",
				success: false,
				errorMessage: JSON.parse(err.message),
			});
			return;
		}

		console.log(`INTERNAL ERROR!`, err);
		res.status(500).send({
			message: "Internal server error occured. Please try again later",
		});
	}
});

app.get("/logout", (req, res) => {
	if (req.session.role) {
		req.session.destroy();
		res.send({
			message: "Logout was successful",
			success: true,
		});
		return;
	}
	res.send({
		message: "You have to be logged in to log out",
		success: false,
	});
});

app.get("/get-secret", (req, res) => {
	if (req.session.role === "admin") {
		res.send({ secretPhrase, message: "succcess", success: true });
		return;
	}
	if (!req.session.role) {
		res.status(403).send({
			message: "You have to log in to access this resource",
			success: false,
		});
		return;
	}
	res.status(403).send({
		message: "You do not have access to this resource",
		success: false,
	});
});

app.listen(PORT, (err) => {
	if (!err) {
		console.log(`APP was successfully launched via port ${PORT}`);
	} else {
		console.log(`APP didnt start successfully`);
		process.exit(1);
	}
});
