// Eksportuojamas kintamasis
export const products = [
	{ name: "jogurtas", price: 2.8 },
	{ name: "braškės", price: 3 },
];
export const productSettings = {
	naudojamaValiuta: "€",
	lang: "LT",
};

export function sum(a, b) {
	return a + b;
}
console.log(products);

// Pagrindinės reikšmės eksportavimas:
export default 5;
