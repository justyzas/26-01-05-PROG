import fs from "fs";
const visitsCountFile = `C:/Users/kruti/Desktop/PROG-26-01-05/Examples/node/_5_API_with_FS/visits.txt`;
const cocktailsFile = `C:/Users/kruti/Desktop/PROG-26-01-05/Examples/node/_5_API_with_FS/cocktails.json`;

export function readVisitsCount() {
	const fileContent = fs.readFileSync(visitsCountFile);
	const fileContentStr = String(fileContent);
	const visitorsCount = Number(fileContentStr);

	return visitorsCount;
}

export function createVisitorsFileIfNotExists() {
	const doesFileExist = fs.existsSync(visitsCountFile);
	if (!doesFileExist) {
		fs.writeFileSync(visitsCountFile, "0");
	}
}

export function updateVisitorsCount(count) {
	fs.writeFileSync(visitsCountFile, `${count}`);
}

export function createCocktailsFileIfNotExists() {
	const doesFileExist = fs.existsSync(cocktailsFile);
	if (!doesFileExist) {
		fs.writeFileSync(cocktailsFile, "[]");
	}
}

export function readCocktails() {
	const fileContent = fs.readFileSync(cocktailsFile);
	const fileContentStr = String(fileContent);
	const result = JSON.parse(fileContentStr);

	return result;
}

export function writeToCocktailsFile(data) {
	fs.writeFileSync(cocktailsFile, data);
}
