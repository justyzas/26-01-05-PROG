const juozas = {
	name: "Juozas",
	secondName: "Wickas",
	dob: "1997-10-05",
	isMarried: false,
	marriedTo: null,

	// Metodas
	giveFullName: function () {
		return `${this.name} ${this.secondName}`;
	},
	// Metodas
	marry: function (who) {
		this.marriedTo = who;
		this.isMarried = true;
	},
	// Metodas
	divorce: function () {
		this.marriedTo = null;
		this.isMarried = false;
	},
};

juozas.marry("Marcelė");

console.log(juozas);

juozas.divorce();

console.log(juozas);

function getFullName(name, lastName) {
	return `${name} ${lastName}`;
}

// Klasė - tai yra šablonas, sukurti objektui
class Person {
	// Konstruktoriaus tikslas - sukurti objektą iš konstruktoriaus funkcijoje paminėtų parametrų
	constructor(name, lastName, dob, marriedTo) {
		this.name = name;
		this.lastName = lastName;
		this.dob = dob;

		if (!marriedTo) {
			this.marriedTo = null;
		} else {
			this.marriedTo = marriedTo;
		}
	}

	getFullName() {
		return `${this.name} ${this.lastName}`;
	}
	getFullNameInHtml() {
		let marriedText = "";
		if (this.isMarried) marriedText += `, Laimingai vedęs ${this.marriedTo}`;
		return `<h3 class="formatted-name">${this.getFullName()}${marriedText}</h3>`;
	}

	// getter'io funkcija
	get age() {
		const today = new Date();
		const birthDate = new Date(this.dob);
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();
		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}
		return age;
	}

	get isMarried() {
		return Boolean("Marytė");
	}

	// setterio funkcija
	// Setterio funkcija priima tik vieną parametrą
	set isMarried(isMarried) {
		console.log("Buvo išviestas setteris");
		if (!isMarried) {
			this.marriedTo = null;
		}
	}
}

// Konstruktoriaus klasėje iškvietimas
const petras = new Person("Petras", "Paulavičius", "2000-02-10");
const antanas = new Person("Antanas", "Rudolfas", "1999-06-01", "Marytė");
const laimonas = new Person("Laimonas", "Pomidorauskas", "2003-01-22");

console.log(petras.isMarried);

console.log(petras.getFullName());
console.log(petras.getFullNameInHtml());
console.log(antanas.getFullName());
console.log(antanas.getFullNameInHtml());
console.log(laimonas.getFullName());
console.log(laimonas.getFullNameInHtml());

antanas.marriedTo = null;
