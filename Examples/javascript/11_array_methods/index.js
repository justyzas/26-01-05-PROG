// function uzduotiesIteracija(value) {
// 	// masyvo reiksme, index
// 	console.log(originalArray);
// }

const tasksList = document.getElementById("tasks");

// masyvo metodas - foreach
// Anoniminė funkcija => arrow funkcija
tasks.forEach((v) => {
	tasksList.innerHTML += `<li>${v.title}</li>`;
});

// .map - funkcija iteruojanti per visus masyvo elementus, atliekanti apskaičiavimą ir atiduodama rezultatą kiekvienam masyvo elementui
const shorterTasks = tasks.map((task) => {
	// const t = { ...task };
	// if (t.completed === true) {
	// 	t.completed = "Taip";
	// } else {
	// 	t.completed = "Ne";
	// }
	// t.id += 1000;
	const sutrumpintaUzduotis = {
		title: task.title,
		arPabaigta: task.completed,
		// liHtmlText: `<li>${task.title}</li>`,
	};
	return sutrumpintaUzduotis;
});

console.log(shorterTasks);

// filtrų parametras-funkcija turi atiduoti true/false reikšmę.
// true reikšmė reiškia, kad elementas filtrą praeina.
const onlyNotCompletedTasks = tasks.filter((task) => task.completed);
console.log(onlyNotCompletedTasks);
const onlyCompletedTasks = tasks.filter((task) => task.completed);
console.log(onlyCompletedTasks);

const skaiciai = [10, 20, 11, 28, 18, 6, 2, -10];

const arYraNeigiamu = skaiciai.some((sk) => {
	return sk < 0;
}); //True - Taip / False - Ne

console.log(arYraNeigiamu);

const min = -30,
	max = 30;

const arVisiSkaiciaiAtitinkaApribojimus = skaiciai.every((sk) => {
	return sk >= min && sk <= max;
});

console.log(arVisiSkaiciaiAtitinkaApribojimus);

// Indekso gražinimas
const andrewTaskIndex = tasks.findIndex((task) => {
	return task.userId === 7 && !task.completed;
});
const andrewTask = tasks.find((task) => {
	return task.userId === 7 && !task.completed;
});

console.log(tasks[andrewTaskIndex] === andrewTask); //true

// Rikiavimo funkcija -
// [10, 20, 11, 28, 18, 6, 2, -10];

// sort funkcija priima du lygintinus skaičius. Gražinamas f-joje rezultatas nurodo kuris elementas eina pirmiau
skaiciai.sort((a, b) => {
	// a > b - teigiamas sk.
	// a = b - 0
	// a < b - neigiamas sk.
	return b - a;
});
console.log(skaiciai.reverse());
