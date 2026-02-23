import styles from "./styled-button-second.module.css";

export function StyledButtonSecond(props) {
	return <button className={styles.styledButton}>{props.children}</button>;
}
