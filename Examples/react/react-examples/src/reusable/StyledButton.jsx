import styles from "./styled-button.module.css";

export function StyledButton(props) {
	console.log(styles);
	return (
		<button
			className={styles.styledButton}
			title={props.tooltip}
		>
			{props.children}
		</button>
	);
}
// export function StyledButton(props) {
// 	return (
// 		<button
// 			style={{
// 				background: "green",
// 				color: "white",
// 				// "font-size":
// 				fontSize: 20,
// 				padding: "6px 12px",
// 				borderRadius: 6,
// 				border: "none",
// 				boxShadow: "3px 2px 3px rgba(108, 108, 108, 0.5)",
// 			}}
// 		>
// 			{props.children}
// 		</button>
// 	);
// }
