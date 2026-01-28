// True - Tiesa
// False - Melas

let isRaining = true;

// if (isRaining) {
// 	console.log("Take an umbrella!");
// } else {
// 	console.log("No need for an umbrella.");
// }

let temperature = 16;

if (temperature > 30) {
	console.log("It's hot outside.");
} else if (temperature <= 0) {
	console.log("Now water starts to freeze.");
} else if (temperature < 15) {
	console.log("It's cold outside.");
}

let pirkejoAmzius = 21;
let taikomaNuolaidaJubilijatams = false;
let bazineKaina = 1.5;

if (pirkejoAmzius < 18) {
	console.log("Energetiniio gėrimo neparduodame.");
} else {
	if (taikomaNuolaidaJubilijatams) {
		if (pirkejoAmzius % 5 == 0) {
			let kainaSuNuolaida = (bazineKaina * 0.8).toFixed(2);
			console.log(
				"Štai jūsų energetinis, sveikinu su Jubiliejumi! Kaina su nuolaida: " +
					kainaSuNuolaida +
					" EUR",
			);
		} else {
			console.log("Štai jūsų energetinis. Kaina: " + bazineKaina + " EUR");
		}
	} else {
		console.log("Štai jūsų energetinis. Kaina: " + bazineKaina + " EUR");
	}
}

// DRY - Don't Repeat Yourself
if (pirkejoAmzius < 18) {
	console.log("Energetiniio gėrimo neparduodame.");
} else if (
	taikomaNuolaidaJubilijatams &&
	(pirkejoAmzius % 5 == 0 || pirkejoAmzius == 18)
) {
	// && - ir
	// true && true = true
	// true && false = false
	// false && true = false
	// false && false = false

	// || - arba
	// true || true = true
	// true || false = true
	// false || true = true
	// false || false = false

	let kainaSuNuolaida = (bazineKaina * 0.8).toFixed(2);
	console.log(
		`Štai jūsų energetinis, sveikinu su Jubiliejumi! Kaina su nuolaida: ${kainaSuNuolaida}€`,
	);
} else {
	console.log("Štai jūsų energetinis. Kaina: " + bazineKaina + " EUR");
}
