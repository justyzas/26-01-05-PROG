// Math - JavaScript Math functions
let skaicius1 = 5;
let skaicius2 = 10;
let skaicius3 = 15;

console.log("---- JS Math functions ----");

console.log(Math.min(4, 5, skaicius3)); // 5  - Argumentu skaicius neribotas
console.log(Math.max(skaicius1, skaicius2, skaicius3)); // 15

console.log(Math.sqrt(16)); // 4 - Sqrt - Šaknis

console.log(Math.pow(5, 2)); // 25 - Power - Laipsnis
console.log(Math.pow(2, 3)); // 8 - Power - Laipsnis

console.log(Math.abs(-7.25)); // 7.25 - Absolute - Absoliutusis dydis
console.log(Math.abs(7.25)); // 7.25 - Absolute - Absoliutusis dydis

console.log(10 + 3); // 13 - Sudėtis
console.log(10 - 3); // 7 - Atimtis
console.log(10 * 3); // 30 - Daugyba
console.log(10 / 3); // 3.333... - Dalyba
console.log(10 % 3); // 1 - Modulo operatorius - Liekana

console.log((4 + 6) * 2); //20
console.log(4 + 6 * 2); // 16

// Vidurkio skaičiavimas
console.log((4 + 5 + 6 + 7 + 8 + 9 + 10) / 7); // 7 - Aritmetinis vidurkis

// Apvalinimo funkcijos
let sk4 = 4.5;

console.log(Math.round(sk4)); // 5 - Suapvalinimas iki artimiausio sveikojo

console.log(Math.trunc(sk4)); // 4 - Skaičiaus "nesveikosios" dalies pašalinimas

console.log(Math.floor(sk4)); // 4 - Skaičiaus apvalinimas žemyn
console.log(Math.ceil(sk4)); // 5 - Suapvalinimas į viršų

// Skirtumas tarp Math.floor ir Math.trunc su neigiamais skaičiais
console.log(Math.floor(-4.7)); // -5  - Skaičiaus apvalinimas žemyn
console.log(Math.trunc(-4.7)); // -4 - Skaičiaus "nesveikosios" dalies pašalinimas

// Konstantos
console.log(Math.PI); // 3.141592653589793 - Pi konstanta
console.log(Math.E); // 2.718281828459045 - Eulerio skaičius
console.log(Math.SQRT2); // 1.4142135623730951 - Šaknis iš 2
console.log(Math.SQRT1_2); // 0.7071067811865476 - Šaknis iš 1/2

// Skaičiaus apvalinimas iki nurodyto skaičiaus skaitmenų po kablelio
console.log((54.276).toFixed(2)); // "54.28" - Apvalinimas iki nurodyto skaičiaus skaitmenų po kablelio (grąžina string)
console.log((54.276).toFixed(4)); // "54.2760" - Apvalinimas iki nurodyto skaičiaus skaitmenų po kablelio (grąžina string)
console.log((54).toFixed(2)); // "54.00" - Apvalinimas iki nurodyto skaičiaus skaitmenų po kablelio (grąžina string)
