let sk1Text = prompt("Įveskite pirmą skaičių:");
let sk2Text = prompt("Įveskite antrą skaičių:");
let sk3Text = prompt("Įveskite trečią skaičių:");

let sk1 = Number(sk1Text);
let sk2 = Number(sk2Text);
let sk3 = Number(sk3Text);

if (isNaN(sk1) || isNaN(sk2) || isNaN(sk3)) {
	console.log("Skaičiavimas negalimas. Klaida įvestyje");
} else {
	let sum = sk1 + sk2 + sk3;
	let avg = sum / 3;
	console.log(`Įvesti skaičiai: ${sk1}, ${sk2}, ${sk3}`);
	console.log(`Skaičių suma: ${sum}`);
	console.log(`Skaičių vidurkis: ${avg}`);
}
