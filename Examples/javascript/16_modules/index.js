// Jei norima tik paleisti modulio skript'ą
// import "./products.js";
// Jei norima importuoti kintamuosius:
import { productSettings as ps, sum, products } from "./products.js";

// Pagrindinės reikšmės importavimas
import produktuSkaicius from "./products.js";
// Sukombinuoti prieš tai naudoti importavimai
// import produktuSkaicius, { productSettings, products } from "./products.js";

console.log(ps);
console.log(products);
console.log(produktuSkaicius);
console.log(sum(1, 200));
