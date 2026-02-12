import express from "express";
import db from "./db.js";

const cocktails = await db`SELECT * FROM public.cocktails`;

console.log(cocktails);

// const app = express();
// const port = 3001;

// app.use(express.json());

// app.listen(port, (err) => {
// 	console.log("Server successfully launched on port", port);
// });
