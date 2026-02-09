export class Rectangle {
	constructor(width = 1, height = 1, unit = "m") {
		this.width = width;
		this.height = height;
		this.unit = unit;
	}

	get area() {
		return this.width * this.height;
	}

	get areaString() {
		return `${this.area}${this.unit}²`;
	}

	get perimeterString() {
		return `${this.perimeter}${this.unit}`;
	}

	get perimeter() {
		return (this.width + this.height) * 2;
	}

	get widthInMeters() {
		if (this.unit === "cm") {
			return this.width / 100;
		} else if (this.unit === "mm") {
			return this.width / 1000;
		} else {
			return this.width;
		}
	}
}

// const rect1 = new Rectangle();

// console.log(rect1.areaString); //plotas

// rect1.width = 20; //cm
// console.log(rect1);
// console.log(rect1.perimeter); //perimetras

class Circle {
	constructor(radius = 1) {
		this.radius = radius;
	}
	get area() {
		return this.radius ** 2 * Math.PI;
	}
	get areaStr() {
		return `${this.area.toFixed(2)}cm²`;
	}

	get length() {
		return this.radius * 2 * Math.PI;
	}
	get lengthStr() {
		return `${this.length.toFixed(2)}cm`;
	}
}

// const circle1 = new Circle();

// console.log(circle1);

class BankAccount {
	#balance;

	constructor(startingBalance) {
		if (isNaN(startingBalance)) {
			// Klaidos išmetimas
			throw new Error("pradinis balansas turėtų būti skaičius");
		}
		this.#balance = startingBalance;
	}

	withdraw(amount) {
		if (isNaN(amount)) {
			throw new Error("nuimamas pinigų kiekis turėtų būti skaičius");
		}
		if (this.#balance < amount)
			throw new Error("sąskaitoje nepakankamas pinigų likutis");
		this.#balance -= amount;
	}

	deposit(amount) {
		if (isNaN(amount)) {
			throw new Error("įnešamas pinigų kiekis turėtų būti skaičius");
		}
		this.#balance += amount;
	}

	get balance() {
		return this.#balance;
	}
}

const swedAccount = new BankAccount(56);
console.log(swedAccount.balance);
swedAccount.deposit(45);
console.log(swedAccount.balance);
