import { useState, useEffect } from "react";

export function VienasVartotojas() {
	const [vartotojas, setVartotojas] = useState(null);
	useEffect(() => {
		async function callApi() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users/1",
			);
			const data = await response.json();
			setVartotojas(data);
		}
		callApi();
	}, []);

	if (!vartotojas) return <p>Kraunama...</p>;

	return (
		<div
			style={{ padding: "10px", background: "#f0f4ff", borderRadius: "6px" }}
		>
			<strong>{vartotojas.name}</strong>
			<br />
			{vartotojas.email}
		</div>
	);
}

export function IrasuSarasas() {
	const [irasai, setIrasai] = useState([]);
	const [kraunama, setKraunama] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=10",
			);
			const data = await response.json();
			setIrasai(data);
			setKraunama(false);
		})();
	}, []);

	if (kraunama) return <p>Kraunami įrašai...</p>;

	return (
		<ul style={{ paddingLeft: "20px" }}>
			{irasai.map((irasas) => (
				<li key={irasas.id}>{irasas.title}</li>
			))}
		</ul>
	);
}

export function VartotojasPagalId() {
	const [id, setId] = useState(1);
	const [vartotojas, setVartotojas] = useState(null);

	useEffect(() => {
		// setVartotojas(null); // nuvalome, kol kraunamas naujas

		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setVartotojas(data));
	}, [id]); // vyksta kiekvieną kartą kai id keičiasi

	return (
		<div>
			<label>
				Vartotojo ID (1–10):{" "}
				<input
					type="number"
					min="1"
					max="10"
					value={id}
					onChange={(e) => setId(Number(e.target.value))}
					style={{ width: "60px", marginLeft: "6px" }}
				/>
			</label>

			<div style={{ marginTop: "10px", minHeight: "40px" }}>
				{vartotojas ? (
					<div
						style={{
							padding: "10px",
							background: "#f0f4ff",
							borderRadius: "6px",
						}}
					>
						<strong>{vartotojas.name}</strong>
						<br />
						{vartotojas.email}
					</div>
				) : (
					<p>Kraunama...</p>
				)}
			</div>
		</div>
	);
}
