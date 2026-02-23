// props.vparaste = "sm" | "md" | "lg" | "xl"
// sm - 8px
// md - 12px
// lg - 18px
// xl - 28px

import { useState } from "react";

const vParastes = {
	sm: 8,
	md: 12,
	lg: 18,
	xl: 28,
};

export function UserCard({ vardas, pareigos, vparaste = "md" }) {
	function decidePaddingSize() {
		let result = vParastes[vparaste];
		if (!result) result = vParastes["md"];
		return result;
	}

	return (
		<div
			style={{
				border: "1px solid #aaa",
				padding: decidePaddingSize(),
				borderRadius: "8px",
				margin: "8px 0",
			}}
		>
			<h3 style={{ margin: "0 0 4px" }}>{vardas || "Vardas yra nežinomas"}</h3>
			<p style={{ margin: 0, color: "#666" }}>
				{pareigos || "Pareigos yra nežinomos"}
			</p>
		</div>
	);
}

export function StatefulUserCard({ vardas, pareigos }) {
	const [likesCount, setLikesCount] = useState(0);

	return (
		<div
			style={{
				border: "1px solid #ccc",
				padding: "12px",
				margin: "8px 0",
				borderRadius: "8px",
				background: "#fff",
			}}
		>
			<strong>{vardas}</strong> —{" "}
			<span style={{ color: "#666" }}>{pareigos}</span>
			<div style={{ marginTop: "8px" }}>
				<button onClick={() => setLikesCount((prev) => prev + 1)}>
					👍 {likesCount}
				</button>
			</div>
		</div>
	);
}
