// Arrays (Masyvas/Matrica) - JavaScript Example

// Masyvo kūrime, dažniausiai naudojamas const deklaravimo būdas;
const fruits = ["Apple", "Banana", "Peach"];

console.log(fruits);
console.log(fruits[1]);

// Array Methods

fruits.push("Mango"); // Add to the end
console.log(fruits); // ["Apple", "Banana", "Peach", "Mango"]
fruits.unshift("Lemon"); // Add to the beginning
console.log(fruits); // ["Lemon", "Apple", "Banana", "Peach", "Mango"]

// Length of the array
console.log(fruits.length); // 5

// Elementų sujungimas į tekstą
console.log(fruits.join(" - ")); // "Lemon - Apple - Banana - Peach - Mango"

// Elementų išskaidymas į masyvą
const fruitString = "Orange, Pineapple, Kiwi";
const fruitArray = fruitString.split(", ");
console.log(fruitArray); // ["Orange", "Pineapple", "Kiwi"]

fruitArray[1] = "Lime"; // Keičiamas antras elementas

console.log(fruitArray); // ["Orange", "Lime", "Kiwi"]

// Masyvų sujungimas:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
// const myChildren = [...myGirls, ...myBoys]; // Using spread operator

console.log(myChildren); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
//                             0       1        2        3        4

// Masyvo elementų šalinimas:
// 1. argumentas - nuo kurio indekso šaliname
// 2. argumentas - kiek elementų šaliname
myChildren.splice(2, 1); // Pašalinamas trečiasis elementas
console.log(myChildren); // ["Cecilie", "Lone", "Tobias", "Linus"]

// Masyvo dalies pasiėmimas:

const myNumbers = [12, 8, 7, 9, 22, 2, 4, 14];
const firstFive = myNumbers.slice(0, 5); // Paimami pirmi 5 elementai
console.log(firstFive); // [12, 8, 7, 9, 22]

const lastThree = myNumbers.slice(-3); // Paimami paskutiniai 3 elementai

// reikia paimti [7, 9, 22, 2]
const specialNumbers = myNumbers.slice(2, -2); // [7, 9, 22, 2]

console.log(myChildren.sort()); // Surikiuoja masyvą (pagal Unicode reikšmes)
console.log(myChildren.reverse()); // Apverčia masyvą

specialNumbers.push(10);

// Includes atiduoda boolean reikšmę  ( true/false )
// Patikrinimas, ar masyve yra tam tikras elementas
if (specialNumbers.includes(10)) {
	console.log("Sąraše yra 10");
} else {
	console.log("Sąraše nėra 10");
}

// Patikrinimas, ar tekste yra tam tikras posakis
if ("akademija".includes("cad")) {
	console.log("Tekste yra 'cad'");
} else {
	console.log("Tekste nėra 'cad'");
}
