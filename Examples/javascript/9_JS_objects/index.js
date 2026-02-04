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
// Savybių keitimas
andrius.gimimoData = "1990-12-08";

let savybe = "gimimoData";
console.log(andrius[savybe]); // "1989-12-08"
console.log(andrius.savybe); // undefined

console.log(andrius.zmona.vardas.toUpperCase());
andrius.zmona = null;
// console.log(andrius.zmona.vardas.toUpperCase()); // error (zmona is null)
console.log(andrius.vaikai[0]);

console.log(andrius);

// Objekto savybių pavadinimų gavimas
const andriausSavybes = Object.keys(andrius);
console.log(andriausSavybes);
const andriausReiksmes = Object.values(andrius);
console.log(andriausReiksmes);
const entries = Object.entries(andrius); // [["vardas", "Andrius"], ["pavarde", "Pakutinskas"], ["gimimoData", "1990-12-08"]....]
console.log(entries);

// Objekto destruktūravimas

const objA = {
	a: 7,
	b: "abc",
	c: "dab",
};

const b = {
	// ... reiškia destruktūravimą
	...objA,
	d: true,
};

console.log(b);

// Tas pats veikia ir su masyvais

const skaiciai = [1, 2, 3];
const pratesimas = [...skaiciai, 4, 5, 6]; // [1,2,3,4,5,6]
console.log(pratesimas);

// Objekto kopijos perdavimas kitam objektui (Galioja objektams ir masyvams)
let obj1 = { a: 7, b: true };

let obj2 = obj1;

console.log(obj2); //{ a: 7, b: true }
obj1.a = 8;
console.log(obj2); //{ a: 8, b: true }
//--- Tas pats galioja ir su masyvais

const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr2);
arr1.push(4);
console.log(arr2); // [1,2,3,4]

// ----

console.log(typeof {}); // "object"
console.log(typeof []); // "object"

// Objekto konvertavimas į JSON (JavaScript Object Notation) formatą:

// Deserializavimas:
let andriusTekstu = JSON.stringify(andrius); //tekstinė objekto versija
console.log(andriusTekstu);

// Serializavimas:
const kitasAndrius = JSON.parse(`{
	"vardas": "Andrius"
	"pavarde": "Pakutinskas",
	"gimimoData": "1989-12-08",
	"tattooCount": 5,
	"arSusituokes": true,
	"vaikai": ["Elzė", "Jaunius", "Marytė"],
	"zmona": null
}`);

console.log(kitasAndrius);
