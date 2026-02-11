import express from "express";

const app = express();
const port = 3000;
let visits = 0;

app.get("/", (req, res) => {
	visits++;
	res.send(`Hello, you are ${visits} visitor`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
