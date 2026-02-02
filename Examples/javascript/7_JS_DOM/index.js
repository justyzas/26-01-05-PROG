const myPhotos = [
	"carousel-1.webp",
	"carousel-2.webp",
	"logo-01.svg",
	"https://images.delfi.lt/media-api-image-cropper/v1/8044d98d-9588-4685-9a62-104c03a4791a.jpg?noup&w=1264&h=711",
];
// document.getElementById("id") - selects an element by its ID
// document.querySelector("selector") - selects the first element that matches the CSS selector
// HTML elementai
// const myTextParagraph = document.getElementById("my-text");
// CSS selektoriai
const myTextParagraph = document.querySelector("#my-text");
// textContent - keičia arba grąžina elemento tekstą (neinterpretuoja HTML žymų)

console.log(myTextParagraph.textContent); //old text

myTextParagraph.textContent =
	"This text has been changed using JavaScript! <br> nauja eilute";
// console.log(myTextParagraph.textContent);

// innerHTML - keičia arba grąžina elemento vidinį HTML kodą
myTextParagraph.innerHTML =
	"<b>This part is bold.</b> And this is the regular text. ";

// console.log(myTextParagraph.innerHTML);

function addStyles() {
	myTextParagraph.classList.add("special-text");
	// myTextParagraph.classList.remove("special-text");
}

let currentPhotoIndex = 0;

function showAnotherPhoto() {
	const photoImg = document.querySelector("#photo-switcher");
	// Elemento atributo reikšmės gavimas pagal pavadinimą
	// let photoSrc = photoImg.getAttribute("src");

	if (myPhotos.length - 1 === currentPhotoIndex) {
		currentPhotoIndex = 0;
	} else {
		currentPhotoIndex++;
	}
	let nextPhoto = myPhotos[currentPhotoIndex];
	photoImg.setAttribute("src", nextPhoto);
}
