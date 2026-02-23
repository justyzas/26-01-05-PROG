import { useState, useEffect } from "react";

export function Counter() {
	console.log("Komponentas užsikrovė iš naujo");
	const [dabartinisPaspaudimuSk, keistiSkaiciu] = useState(() => {
		const currentLocalStorageCount = localStorage.getItem("count");
		if (currentLocalStorageCount === null) {
			localStorage.setItem("count", 0);
			return 0;
		}
		return Number(currentLocalStorageCount);
	});

	// let dabartinisPaspaudimuSk = 0;
	return (
		<div>
			<p>
				Paspaudimai: <strong>{dabartinisPaspaudimuSk}</strong>
			</p>
			<button
				onClick={() => {
					// keistiSkaiciu(dabartinisPaspaudimuSk + 1); //0+1=1
					// keistiSkaiciu(dabartinisPaspaudimuSk + 1); //0+1=1
					// keistiSkaiciu(dabartinisPaspaudimuSk + 1); //0+1=1

					keistiSkaiciu((prev) => prev + 1); // 0+1 = 1
					// keistiSkaiciu((prev) => prev + 1); // 1+1 = 2
					// keistiSkaiciu((prev) => prev + 1); // 2+1 = 3
					// keistiSkaiciu((prev) => prev + 1); // 3+1 = 4
					localStorage.setItem("count", dabartinisPaspaudimuSk + 1);
					console.log("Skaicius padidejo per +1");
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					keistiSkaiciu(0);
					localStorage.setItem("count", 0);
				}}
			>
				Nustatyti iš naujo
			</button>
		</div>
	);
}

export function EffectiveCounter() {
	const [n, setN] = useState(() => {
		return Number(localStorage.getItem("count"));
	});
	const [showText, setShowText] = useState(false);
	// Šis kodas vyksta po KIEKVIENO n skaičiaus pasikeitimo
	useEffect(() => {
		document.title = `Paspaudimai: ${n}`;
		console.log("Paspaudimų sk. title pasikeitė");
		localStorage.setItem("count", n);
	}, [n]);

	// Šis kodas vyksta po kiekvieno showText pasikeitimo
	useEffect(() => {
		console.log("Show Text pasikeitė");
	}, [showText]);

	useEffect(() => {
		console.log("Pasikeitė Show Text arba N skaičius");
	}, [showText, n]);

	return (
		<div>
			<button
				onClick={() => {
					setN(n + 1);
				}}
			>
				Padidinti ({n})
			</button>
			<p style={{ color: "#888", fontSize: "0.9rem" }}>
				Pažiūrėkite į naršyklės kortelės pavadinimą!
			</p>

			<button onClick={() => setShowText((p) => !p)}>
				Rodyti/slepti teksta
			</button>
			{showText && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos cum
					nobis dolorum natus magni repellat consequatur eum rem? Iure
					reprehenderit ab quo animi quam asperiores nihil fugiat tenetur
					impedit!
				</p>
			)}
		</div>
	);
}
