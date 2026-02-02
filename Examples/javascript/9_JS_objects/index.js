// JSON - JavaScript Object Notation
const andrius = {
	vardas: "Andrius",
	pavarde: "Pakutinskas",
	gimimoData: "1989-12-08",
	tattooCount: 5,
	arSusituokes: true,
	vaikai: ["Elzė", "Jaunius", "Marytė"],
	zmona: {
		vardas: "Anzelmutė",
		pavarde: "Pakutinskienė",
		gimimoData: "1991-01-08",
		tattooCount: 2,
		arSusituokes: true,
		vaikai: ["Elzė", "Jaunius", "Marytė"],
	},
};

// Savybių reikšmių gavimas
console.log(andrius.gimimoData); // "1989-12-08"

let savybe = "gimimoData";
console.log(andrius[savybe]); // "1989-12-08"
console.log(andrius.savybe); // undefined

console.log(andrius.zmona.vardas.toUpperCase());
andrius.zmona = null;
// console.log(andrius.zmona.vardas.toUpperCase());
console.log(andrius.vaikai[0]);

console.log(andrius);

// Objekto savybių pavadinimų gavimas
const andriausSavybes = Object.keys(andrius);
console.log(andriausSavybes);
const andriausReiksmes = Object.values(andrius);
console.log(andriausReiksmes);
const entries = Object.entries(andrius);
console.log(entries);

// Objekto destruktūravimas

const objA = {
	a: 7,
	b: "abc",
	c: "dab",
};

const b = {
	...objA,
	d: true,
};

console.log(b);

// Objekto kopijos perdavimas kitam objektui (Galioja objektams ir masyvams)

let obj1 = { a: 7, b: true };

let obj2 = obj1;

console.log(obj2);
obj1.a = 8;
console.log(obj2);

console.log(typeof {}); // "object"
console.log(typeof []); // "object"

// Objekto konvertavimas į JSON (JavaScript Object Notation) formatą:

let andriusTekstu = JSON.stringify(andrius); //tekstinė objekto versija
console.log(andriusTekstu);

const kitasAndrius = JSON.parse(`{
	"vardas": "Andrius",
	"pavarde": "Pakutinskas",
	"gimimoData": "1989-12-08",
	"tattooCount": 5,
	"arSusituokes": true,
	"vaikai": ["Elzė", "Jaunius", "Marytė"],
	"zmona": null
}`);

console.log(kitasAndrius);
