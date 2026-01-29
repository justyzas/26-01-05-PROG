let sumaBePvm = 0;
// Funkcija pradžioje būna tiesiog apibrėžiama
function greet(name) {
	console.log(`Hello, ${name}!`);
}

// Vėliau funkcija gali būti iškviečiama
greet("Alice");
greet("Justinas");

function increment(x) {
	return x + 1;
}
// console.log(name); // Klaida: name nėra apibrėžtas čia

let num = 5;
let incrementedNum = increment(num); // 6  -  Funkcija grąžina reikšmę

function powCube(n) {
	return n * n * n;
}
console.log(powCube(4)); // 27

function pritaikytiPvm(vienetoKaina, kiekis = 1, pvm = 21) {
	if (pvm < 0) pvm = 0;
	if (kiekis < 0) kiekis = 1;

	sumaBePvm = vienetoKaina * kiekis;
	let pvmSuma = (sumaBePvm * pvm) / 100;
	return sumaBePvm + pvmSuma;
}
console.log(pritaikytiPvm(10, 10, 21)); // 121
console.log(pritaikytiPvm(10, 10)); // 121
console.log(pritaikytiPvm(10, 10, 25)); // 125
let pilnaiApskaiciuotaSuma = pritaikytiPvm(0.12, 100);
console.log(pritaikytiPvm(5, -10, -10000)); // 11.8

function formatuotiEur(suma) {
	return `${suma.toFixed(2)}€`;
}

function formatuotasSuPvm(vienetoKaina, kiekis = 1, pvm = 21) {
	let suma = pritaikytiPvm(vienetoKaina, kiekis, pvm);
	return formatuotiEur(suma);
}

function countdown() {
	alert(3);
	alert(2);
	alert(1);
}

// Naudojame funkciją formatuotiEur su pritaikytiPvm rezultatu
console.log(formatuotasSuPvm(0.12)); // '0.15€'
