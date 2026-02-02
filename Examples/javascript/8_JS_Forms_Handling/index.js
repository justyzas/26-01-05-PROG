const inputRunnerName = document.querySelector("#input-name");
const inputRunnerAge = document.querySelector("#input-age");
const inputAcceptTerms = document.querySelector("#accept-terms");
const runnersCountElement = document.querySelector("#runners-count");
const runnersListElement = document.querySelector("#runners-list");

const registeredRunners = [];

function registerRunner() {
	// Įvesties laukelio reikšmės gavimas
	let runnerName = inputRunnerName.value;

	// Visi įvesties laukeliai gražina string tipo reikšmes
	let runnerAgeStr = inputRunnerAge.value;
	let runnerAge = Number(runnerAgeStr); // Konvertuojame string į number

	// Jei varnelė pažymėta, gauname true, jei ne - false
	let hasAcceptedTerms = inputAcceptTerms.checked; // Gauname boolean reikšmę // false

	if (isNaN(runnerAge) || runnerAge <= 8) {
		alert("Amžius turi būti skaičius ir didesnis nei 8.");
		return; // Išeinam iš funkcijos, jei amžius neteisingas
	} else if (runnerAge >= 80) {
		alert("Amžius turi būti mažesnis nei 80.");
		return;
	}

	if (!hasAcceptedTerms) {
		alert("Turite sutikti su taisyklėmis.");
		return; // Išeinam iš funkcijos, jei sąlygos nepriimtos
	}

	// if (registeredRunners.includes(runnerName)) {
	// 	alert("Visi bėgikai privalo būti unikaliais vardais");
	// 	return; // Išeinam iš funkcijos, jei sąlygos nepriimtos
	// }

	registeredRunners.push(runnerName);
	// Pakeisti bėgikų skaičių HTML'e
	let runnersCount = registeredRunners.length;
	runnersCountElement.innerText = runnersCount;

	// Pridėti bėgiką prie sąrašo
	runnersListElement.innerHTML += `<li>${runnerName}</li>`;

	console.log(
		"Užregistruotas Bėgikas: " + runnerName + ", Amžius: " + runnerAge,
	);
}

function removeRunner(runnerIndex) {
	registeredRunners.splice(runnerIndex, 1);
	runnersListElement.children[runnerIndex].remove();
}
