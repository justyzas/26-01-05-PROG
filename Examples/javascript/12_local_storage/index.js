const taskInput = document.getElementById("new-task");
const ulList = document.getElementById("my-tasks");

const savedTasksText = localStorage.getItem("tasks"); //STRING | NULL

const tasks = JSON.parse(savedTasksText) || [];
renderTasks(tasks);

function extractTask() {
	const inputValue = taskInput.value;

	taskInput.value = "";

	tasks.push(inputValue);

	saveTasksToLocalStorage(tasks);
	renderTasks(tasks);
}

function renderTasks(whichTasksToRender) {
	ulList.innerHTML = "";

	whichTasksToRender.forEach((task) => {
		ulList.innerHTML += `<li>${task}</li>`;
	});
}

function saveTasksToLocalStorage(tasksToSave) {
	const tasksText = JSON.stringify(tasksToSave);
	localStorage.setItem("tasks", tasksText);
}

// localStorage - lokalios saugyklos kontroliavimas

// localStorage yra pririštas prie domeno;
// 1. Raktažodis saugomiems duomenims (STRING)
// 2. Tai ką saugome (STRING)
// localStorage.setItem("X", "123");

// const myData = localStorage.getItem("X");
// console.log(typeof myData);

const begikai = [
	{ vardas: "Tomas", amzius: 27, kelintasAtbego: 4 },
	{ vardas: "Asta", amzius: 36, kelintasAtbego: 2 },
	{ vardas: "Justinas", amzius: 29, kelintasAtbego: 3 },
	{ vardas: "Andrej", amzius: 30, kelintasAtbego: 1 },
];
// Objekto deserializavimas į tekstą
const begikaiText = JSON.stringify(begikai);

localStorage.setItem("begikai", begikaiText);

// Gauname tekstą iš localStorage
const deserializedRunners = localStorage.getItem("begikai");
// Serializuojame tekstą į JS kintamąjį - masyvą
const runners = JSON.parse(deserializedRunners);
console.log(runners);
