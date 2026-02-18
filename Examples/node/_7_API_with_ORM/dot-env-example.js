import dotenv from "dotenv";

dotenv.config();

const { DATABASE_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
console.log(process.env.DATABASE_NAME);
console.log(process.env["DB_HOST"]);
console.log(DB_USER);
console.log(DB_PASSWORD);
