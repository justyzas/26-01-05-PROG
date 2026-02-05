const passwordExplanation = document.querySelector("#password-explanation");
const passwordInput = document.querySelector("#password-input");
const showPasswordBtn = document.querySelector("#show-password");
const checkPasswordBtn = document.querySelector("#check-password");

// Čia yra slaptažodžio rodymo/paslėpimo funkcionalumas
showPasswordBtn.addEventListener("click", () => {
	// "text" | "password"
	const inputType = passwordInput.getAttribute("type");
	if (inputType === "text") {
		passwordInput.setAttribute("type", "password");
		showPasswordBtn.innerText = "Rodyti slaptažodį";
	} else {
		passwordInput.setAttribute("type", "text");
		showPasswordBtn.innerText = "Paslėpti slaptažodį";
	}
});

// let currentDarknessFactor = 255;
// window.addEventListener("resize", () => {
// 	console.log("Browser was resized");
// 	currentDarknessFactor--;

// 	document.body.style.backgroundColor = `rgb(${currentDarknessFactor},${currentDarknessFactor},${currentDarknessFactor})`;
// 	if (currentDarknessFactor <= 0) {
// 		currentDarknessFactor = 255;
// 	}
// });

// Kai input aktyvuojamas
passwordInput.addEventListener("focus", (e) => {
	console.log(e);
	console.log("Įvesties laukelis aktyvuotas");
	passwordExplanation.classList.remove("hidden");
});
// Kai input deaktyvuojamas
passwordInput.addEventListener("blur", () => {
	console.log("Įvesties laukelis deaktyvuotas");
	passwordExplanation.classList.add("hidden");
});

// Pelės užvedimo ant elemento įvykis
showPasswordBtn.addEventListener("mouseover", (e) => {
	// Įvykio aprašymas/objektas
	console.log(e);
	console.log("Užvesta pelytė ant mygtuko");
	passwordInput.setAttribute("type", "text");
	// e.target.innerText = "Neliesk manęs!";
});

showPasswordBtn.addEventListener("mouseout", () => {
	console.log("Išvesta pelytė iš mygtuko");
	passwordInput.setAttribute("type", "password");
});

// Klaviatūros įvykis: mygtuko paspaudimas
window.addEventListener("keydown", (e) => {
	console.log(e);
});
