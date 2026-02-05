const auto1 = {
	marke: "BMW",
	pagaminimoMetai: 2020,
	modelis: "X5",
	dureliuSkaicius: 4,
	sedynes: "odines",
	variklis: {
		darbinisTuris: "3l",
		galiaKw: 211,
		galiaAG: 283,
	},
	skaiciuKombinacijos: [56, 22, 108],
};

console.log(auto1.marke); // "BMW"

const {
	sedynes: seats,
	marke,
	modelis,
	variklis: { galiaKw: galia, darbinisTuris: dt },
	skaiciuKombinacijos: [pirmasSk, , treciasSk],
} = auto1;

console.log(marke);
console.log(modelis);
console.log(seats); // "odines"
console.log(galia); // 211
console.log(dt); // "3l"
console.log(pirmasSk); // 56
console.log(treciasSk); // 108

// ---- Masyvo destruktūravimas

const skaiciai = [3, 4, 9, 2, 4, 2, 1];

const [pirmas, , trecias] = skaiciai;

console.log(pirmas);
// console.log(antras);
console.log(trecias);
