// db.js
import postgres from "postgres";

import { config } from "dotenv";
config();

// Nuo dabar process.env kintamasis gavo reikšmes iš .env failo

const sql = postgres({
	host: process.env["DB_HOST"],
	database: process.env["DATABASE_NAME"],
	username: process.env["DB_USER"],
	password: process.env["DB_PASSWORD"],
});

console.log("✅ Successfully connected to PostgreSQL Database");
export default sql;
