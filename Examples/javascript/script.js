// Čia yra komentaras
// Kintamųjų tipai:
// Skaičiai, Tekstas, (true/false), (null/undefined)

// Kintamojo deklaravimas yra nurodymas/direktyva,
// kad toks kintamasis egzistuoja mūsų programoje
let manoSkaicius,
	KazioSkaicius = 3;

manoSkaicius = 8;
// Matematiniai operatoriai:
// + = sudėtis,
// - = atimtis,
// * = daugyba,
// / = dalyba,
// % = Liekana
let rezultatas = manoSkaicius - 6;

// Tekstiniai kintamieji - String
// Išvestis į konsolę.
console.log(rezultatas);

let prisistatymas = "Mano vardas yra",
	vardas = "Justinas";

let pilnasPrisistatymas = prisistatymas + " " + vardas;
console.log(pilnasPrisistatymas);

// Būlis (boolean) - loginis kintamasis nusakantis, ar teiginys teisingas/melagingas

let pirkejoAmzius = 26;

// Skaičiai lyginami:
// == - lygu  ("15" == 15 yra True)
// != - nelygu
// === - lygu (griežtas palyginimas),  ("15" === 15 yra False)
// !== - nelygu (griežtas palyginimas),
// > - daugiau už
// < - daugiau už
// >= - daugiau už arba lygu
// <= - mažiau už arba lygu

// true (tiesa) / false (melas)
let arYraPilnametisPirkejas = pirkejoAmzius >= 18;
console.log(arYraPilnametisPirkejas);

if (arYraPilnametisPirkejas) alert("Prašome, jūsų energetinis");
else alert("Deja, energetinio negalime parduoti");

manoSkaicius = 13;
manoSkaicius = 17;
manoSkaicius = 18;
console.log(manoSkaicius); //18
