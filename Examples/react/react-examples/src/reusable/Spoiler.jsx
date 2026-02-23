import { useState } from "react";

export function Spoiler({ tekstas }) {
	const [rodoma, setRodoma] = useState(false);

	function switchRodoma() {
		setRodoma(!rodoma);
	}
	return (
		<div>
			<button onClick={switchRodoma}>
				{rodoma ? "Slėpti" : "Rodyti atsakymą"}
			</button>

			{rodoma && (
				<p
					style={{
						marginTop: 8,
						padding: 8,
						background: "#eef",
						borderRadius: 6,
					}}
				>
					{tekstas}
				</p>
			)}
		</div>
	);
}
