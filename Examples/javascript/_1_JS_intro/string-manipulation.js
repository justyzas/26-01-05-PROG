// String manipuliacijos

let text1 = "My name's";
// prompt - funkcija, prašanti vartotojo įvesti kažką
let firstName = prompt("Įveskite savo vardą");

//Teksto sujunginėjimas
let result1 = text1 + " - " + firstName;

// Template literals - jie yra įmanomi, tik naudojant backtikus (simbolis po ESC mygtuku)
let result2 = `My name's ${firstName}. And what's yours?`;

console.log(result1);
console.log(result2);

// Atiduoda teksto ilgį
console.log(text1.length);
console.log("My name's".length);

// .charAt metodas - gražina simbolį, kuris yra tam tikroje teksto pozicijoje
let text = "HELLO WORLD";
//          0123456789(10)
let char1 = text.charAt(4);
let char2 = text[10];
let char3 = text.at(5);

console.log(char1);

// Teksto dalies pasirinkimas .slice

let fruits = "Apple, Banana, Kiwi, Melon";

console.log(fruits.slice(7, 13)); // banana
// Nuo 8 simb. iki galo
console.log(fruits.slice(7)); // Banana, Kiwi, Melon
// Pirmi 5 simboliai
console.log(fruits.slice(0, 5)); // Apple
// Paskutiniai 7 simboliai
console.log(fruits.slice(-5)); // Melon

// Case conversion - didinti/mažinti visas teksto raides

let fruitsUpper = fruits.toUpperCase(); // "APPLE, BANANA, KIWI, MELON"
let fruitsLower = fruits.toLowerCase(); // "apple, banana, kiwi, melon"

fruitsLower[0] = fruitsLower[0].toUpperCase(); //"Apple, banana, kiwi, melon" - taip neveikia, stringai yra immutable (nekeičiami)

console.log(fruitsUpper);
console.log(fruitsLower);

// Tarpų iš pradžios ir pabaigos šalinimas
let emailRaw = "  justinas@bit .lt      ";
console.log(emailRaw);

let emailCleanStart = emailRaw.trimStart(); // "justinas@bit .lt      "
let emailCleanEnd = emailRaw.trimEnd(); // "  justinas@bit .lt"
let emailClean = emailRaw.trim(); // "justinas@bit .lt"

console.log(emailCleanStart);
console.log(emailCleanEnd);
console.log(emailClean);

// PadStart/PadEnd (simbolių prijunginėjimas pradžioje/pabaigoje)

let metaiSk = 2026;
let menuoSk = 1;
let dienaSk = 6;

let menuoText = String(menuoSk).padStart(2, "0");
let dienaText = String(dienaSk).padStart(2, "0");
// 2026-01-06
let data = `${metaiSk}-${menuoText}-${dienaText}`;
console.log(data);

// Teksto kartojimas kelissyk

let originalLoveLetter = "I love You";
let boostedLoveLetter = originalLoveLetter.repeat(100);
// console.log(boostedLoveLetter);

// Teksto dalies keitimas kita .replace(), .replaceAll()
let originalText = "Please visit Microsoft! Microsoft island is really great!";

// Pakeičia tik vieną (pirmą pasitaikiusį teksto segmentą)
// let newText = originalText.replace("Microsoft", "W3Schools");

// Pakeičia visus tokius teksto segmentus
let newText = originalText
	.replaceAll(" is ", " __ ")
	.replaceAll("Microsoft", "BiT");

console.log(newText);
