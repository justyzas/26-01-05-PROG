const myTitleElement = document.getElementById("my-title");

myTitleElement.innerText = "Sveiki";

myTitleElement.style.color = "red";

myTitleElement.classList.add("klase1");
myTitleElement.classList.add("klase2");
myTitleElement.classList.add("klase3");

myTitleElement.classList.remove("neegzistuojanti");
myTitleElement.classList.remove("klase2");

myTitleElement.classList.toggle("klase2"); // prideda klase jei klases nebuvo/ pašalina jei klasė jau buvo

myTitleElement.setAttribute("name", "my-name-test");
myTitleElement.setAttribute("name", "my-name-test2");
myTitleElement.setAttribute("title", "Čia yra pasisveikinimo tekstas");

// ------

const tasksDiv = document.querySelector("#tasks");

const unorderedList = document.createElement("ul");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.innerText = "Užduotis 1";
li2.innerText = "Užduotis 2";
li3.innerText = "Užduotis 3";

// Prijungia jau sukurtą JS'e elementą į elemento pabaigą
unorderedList.appendChild(li3);
unorderedList.appendChild(li1);
unorderedList.appendChild(li2);

// tasksDiv.appendChild(unorderedList);

// Galima ieškoti Node'ų per kurį nors kitą Node.
const h3 = tasksDiv.querySelector("h3");
// Galimybė pasiekti elemento tėvinį elementą
// const h3Parent = h3.parentNode;

// Įterpia elementą prieš orientyrą (kitą elementą)
tasksDiv.insertBefore(unorderedList, h3);

console.log([h3]);

function print() {
	console.log([document.querySelector("input")]);
}
