import { Link } from "@tanstack/react-router";
import styles from "./header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<Link to="/">Home</Link>
		</header>
	);
}
