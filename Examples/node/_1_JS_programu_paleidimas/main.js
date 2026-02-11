import { sum } from "./math-functions.js";
import fs from "fs"; //fs - file system (modulis skirtas manipuliuoti failų sistema)
import path from "path";

console.log("Kuriamas failas");
// Failo kūrimas
fs.writeFileSync(
	"programos-sukurtas-failas.txt",
	"Sveiki, mieli Lietuvos gyventojai",
);
console.log("Failas jau yra sukurtas");

console.log(process.cwd());

const keliasIkiNuotrauku = path.join(process.cwd(), "nuotraukos", "seima");
console.log(keliasIkiNuotrauku);
