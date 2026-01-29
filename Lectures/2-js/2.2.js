function savaitesDiena(value) {
	const n = Number(value);

	if (isNaN(n)) return "";

	// Normalizuojam į intervalą 0–6
	const index = ((n % 7) + 7) % 7;

	let diena = "";
	if (index === 0) {
		diena = "Sekmadienis";
	} else if (index === 1) {
		diena = "Pirmadienis";
	} else if (index === 2) {
		diena = "Antradienis";
	} else if (index === 3) {
		diena = "Trečiadienis";
	} else if (index === 4) {
		diena = "Ketvirtadienis";
	} else if (index === 5) {
		diena = "Penktadienis";
	} else if (index === 6) {
		diena = "Šeštadienis";
	}

	return diena;
}

console.log(savaitesDiena(5)); // "Penktadienis"
console.log(savaitesDiena(7)); // "Sekmadienis"
console.log(savaitesDiena(1)); // "Pirmadienis"
console.log(savaitesDiena(0)); // "Sekmadienis"
console.log(savaitesDiena(-1)); // "Šeštadienis"
console.log(savaitesDiena(8)); // "Pirmadienis"
console.log(savaitesDiena(10)); // "Trečiadienis"
console.log(savaitesDiena(NaN)); // ""
console.log(savaitesDiena("text")); // ""
console.log(savaitesDiena("1")); // "Pirmadienis"
