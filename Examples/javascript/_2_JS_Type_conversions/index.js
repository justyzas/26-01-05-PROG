console.log("---- JS Type conversions ----");

// Types in JS:
// Primitive types: string, number, boolean, null, undefined, NaN
// Object (complex) types: object, array, function

let text = "a"; // string

console.log(4 * text); // NaN - Not a Number

// Checking the type of variable
console.log(typeof NaN); // "number"
console.log(typeof 4); // "number"
console.log(typeof "4"); // "string"
console.log(typeof false); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JS)
console.log(typeof console.log); // "function"
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object" (arrays are objects in JS)
console.log(typeof new Date()); // "object"

// -- Checking for NaN ----
let a = "hello" / 2; // NaN
console.log(a); // NaN
console.log(isNaN(a)); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(5)); // false
console.log(isNaN("Tekstas")); // true
console.log(isNaN("5")); // false

// -- Implicit type conversion (coercion) ----
console.log("5" + 3); // "53" - number 3 is converted to string "3"
console.log("5" - 3); // 2 - string "5" is converted to number 5
console.log("5" * "2"); // 10 - both strings converted to numbers

console.log("10" / 2); // 5 - string "10" converted to number 10
console.log("10" / "2"); // 5 - both strings converted to numbers

console.log(4 + true); // 5 - true converted to 1
console.log(4 + false); // 4 - false converted to 0

console.log(4 + null); // 4 - null converted to 0
console.log(4 + undefined); // NaN - undefined converted to NaN

console.log("5" + null); // "5null" - null converted to "null"
console.log("5" + undefined); // "5undefined" - undefined converted to "undefined"

// -- Explicit type conversion ----

console.log(Number("5")); // 5 - string to number

console.log(String(5)); // "5" - number to string
console.log(String(true)); // "true" - boolean to string
console.log(String(false)); // "false" - boolean to string

console.log(Boolean(-1)); // true - number to boolean
console.log(Boolean(-1)); // true - number to boolean
console.log(Boolean(0)); // false - number to boolean
console.log(Boolean("hello")); // true - non-empty string to boolean
console.log(Boolean("")); // false - empty string to boolean

console.log(Boolean(null)); // false - null to boolean
console.log(Boolean(NaN)); // false - NaN to boolean
console.log(Boolean(undefined)); // false - undefined to boolean

console.log(Number(true)); // 1 - boolean to number
console.log(Number(false)); // 0 - boolean to number
