const url = "https://jsonplaceholder.typicode.com/todos/";
// Randame elementą kuriame bus dedamos užduotys
const ul = document.querySelector("#tasks");

// GET
// Kreipimasis į serverį su tikslu gauti resursą
// Kreipimąsis į bet kokį serverį užtrunka laiko

// Užklausa į serverį gali būti: Pavykusi/Nepavykusi
const responseResult = [];

// fetch(url)
// 	.then((response) => {
// 		console.log("response:", response);
// 		return response.json();
// 	})
// 	.then((result) => {
// 		responseResult.concat(result);
// 		console.log("result", result);
// 	})
// 	.catch((err) => console.log(err)); //0.03s

console.log(responseResult);

// Asinchroninės funkcijos yra funkcijos, kurios užtrunka laiko
async function getDataFromServer() {
	const response = await fetch(url);
	console.log("response:", response);
	const data = await response.json();
	return data;
}
// Gauname duomenis iš f-jos
const data = await getDataFromServer();
console.log(data);

// Išrikiuojame užduotis
data.sort((task) => (task.completed ? 1 : -1)); //false = 0 | true = 1

// Atvaizduojame užduotis
data.forEach((task) => {
	const className = task.completed ? "task completed" : "task";
	ul.innerHTML += `<li class="${className}">${task.title}</li>`;
});
