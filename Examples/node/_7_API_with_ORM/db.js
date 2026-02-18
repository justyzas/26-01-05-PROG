// db.js
// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const { DATABASE_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

// encodeURIComponent užkoduoja informaciją URL'e tinkamu formatu
const connUrl = `postgres://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}:5432/${DATABASE_NAME}`;

const sequelize = new Sequelize(connUrl);

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

console.log("✅ Successfully connected to PostgreSQL Database");
export default sequelize;
