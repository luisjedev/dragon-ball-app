import { Link } from "@tanstack/react-router";
import Like from "@/assets/icons/like.svg?react";
import logo from "@/assets/images/logo.png";
import styles from "./header.module.css";

export function Header() {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__container"]}>
				<Link to="/" className={styles["header__logo-link"]}>
					<img src={logo} alt="logo" className={styles["header__logo"]} />
				</Link>
				<div className={styles["header__favorite-container"]}>
					<div className={styles["header__favorite-icon-container"]}>
						<Like className={styles["header__favorite-icon"]} />
					</div>
					<span className={styles["header__favorite-count"]}>2</span>
				</div>
			</div>
		</header>
	);
}
