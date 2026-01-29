let data = "2023-11-07";

let metaiStr = data.slice(0, 4);
let menuoStr = data.slice(5, 7);
let dienaStr = data.slice(8, 10);

let metai = Number(metaiStr);
let menuo = Number(menuoStr);
let diena = Number(dienaStr);

let menuoName = "";
let dataValid = true;
if (menuo == 1) {
	menuoName = "Sausis";
} else if (menuo == 2) {
	menuoName = "Vasaris";
} else if (menuo == 3) {
	menuoName = "Kovas";
} else if (menuo == 4) {
	menuoName = "Balandis";
} else if (menuo == 5) {
	menuoName = "Gegužė";
} else if (menuo == 6) {
	menuoName = "Birželis";
} else if (menuo == 7) {
	menuoName = "Liepa";
} else if (menuo == 8) {
	menuoName = "Rugpjūtis";
} else if (menuo == 9) {
	menuoName = "Rugsėjis";
} else if (menuo == 10) {
	menuoName = "Spalis";
} else if (menuo == 11) {
	menuoName = "Lapkritis";
} else if (menuo == 12) {
	menuoName = "Gruodis";
} else {
	menuoName = "Nėra tokio mėnesio";
	dataValid = false;
}

console.log(`Įvesta data: ${dienaStr}-${menuoStr}-${metaiStr}`);
if (dataValid) {
	console.log("Data yra teisinga.");
	console.log(`Mėnesio skaičius ${menuo} - ${menuoName}`);
} else {
	console.log("Data yra neteisinga.");
}
