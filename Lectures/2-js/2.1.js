let input = prompt("Įveskite skaičių:");
let number = Number(input);

console.log(`Gauta įvestis: ${input}`);

if (isNaN(number)) {
	console.log("Ar tai yra skaičius? Ne");
} else {
	console.log("Ar tai yra skaičius? Taip");

	let isEven = number % 2 === 0;
	let answerIsEven = "";

	if (isEven) {
		answerIsEven = "Taip";
	} else {
		answerIsEven = "Ne";
	}

	console.log(`Ar skaičius yra lyginis skaičius? ${answerIsEven}`);

	let sqrt = Math.sqrt(number);
	let isIntegerSqrt = Number.isInteger(sqrt);
	let answerIsIntegerSqrt = "";

	if (isIntegerSqrt) {
		answerIsIntegerSqrt = "Taip";
	} else {
		answerIsIntegerSqrt = "Ne";
	}
	console.log(
		`Ar kvadratinė šaknis iš šio skaičiaus yra sveikas skaičius? ${answerIsIntegerSqrt}`,
	);
}
