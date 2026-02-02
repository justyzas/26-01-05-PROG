let amzius = 19;

function svestiGimtadieni() {
	amzius += 1;
	console.log(`⌛ Yayy, esu daug protingesnis šiais metais. Man jau ${amzius}`);
}

// Manipuliavimas salyga įtakoja, kiek ciklas turės iteracijų
while (amzius < 250) {
	svestiGimtadieni();
}

console.log("Daugiau nebenoriu švęst gimtadienių");

// for ciklas
// sintaksė for(A; B; C)
// A - Komanda, kuri pasileidžia ciklo pradžioje
// B - Salyga, kad ciklas tęstūsi
// C - Komanda, kuri pasileidžia kiekvienos iteracijos pabaigoje

for (let index = 1; index < 100; index++) {
	console.log(index);
}

const begikai = [
	{ vardas: "Tomas", amzius: 27, kelintasAtbego: 4 },
	{ vardas: "Asta", amzius: 36, kelintasAtbego: 2 },
	{ vardas: "Justinas", amzius: 29, kelintasAtbego: 3 },
	{ vardas: "Andrej", amzius: 30, kelintasAtbego: 1 },
];
const prizinesVietos = [];
for (let index = 0; index < begikai.length; index++) {
	const dabartinisBegikas = begikai[index];
	if (dabartinisBegikas.kelintasAtbego <= 25) {
		prizinesVietos.push(dabartinisBegikas);
	}
}

const skaiciai = [1, 5, 6, 7, 6, 2, 90, 4, 2, -14, 26, 22];
let sum = 0;
let susumuotiSkaiciai = 0;
for (let i = 0; i < skaiciai.length; i++) {
	if (skaiciai[i] > 20 || skaiciai[i] < 0) {
		continue; // ciklo iteracijos praleidimas
	}
	if (skaiciai[i] === 7) {
		break; // ciklo nutraukimas
	}
	sum += skaiciai[i];
	susumuotiSkaiciai++;
}

console.log(`Visų skaičių vidurkis: ${sum / susumuotiSkaiciai}`);
// ---- Ciklai naudotini kai yra sąrašai----

for (const skaicius of skaiciai) {
	console.log(skaicius);
}

for (const index in skaiciai) {
	console.log(index);
}

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

for (const zmogausProperty of Object.entries(andrius)) {
	const propertyPavadinimas = zmogausProperty[0];
	const propertyReiksme = zmogausProperty[1];
	console.log(`${propertyPavadinimas} = ${propertyReiksme}`);
}
