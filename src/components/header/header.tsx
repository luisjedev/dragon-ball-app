import { Link } from "@tanstack/react-router";
import Like from "@/assets/icons/like.svg?react";
import logo from "@/assets/images/logo.webp";
import { useFavoritesStore } from "@/stores/favorites-store";
import styles from "./header.module.css";

export function Header() {
	const favoritesCount = useFavoritesStore((state) => state.favoriteIds.length);

	return (
		<header className={styles["header"]}>
			<nav className={styles["header__container"]}>
				<Link className={styles["header__logo-link"]} to="/">
					<img
						alt="logo"
						className={styles["header__logo"]}
						loading="eager"
						src={logo}
					/>
				</Link>
				<Link className={styles["header__favorite-container"]} to="/favorites">
					<div className={styles["header__favorite-icon-container"]}>
						<Like className={styles["header__favorite-icon"]} />
					</div>
					<span className={styles["header__favorite-count"]}>
						{favoritesCount}
					</span>
				</Link>
			</nav>
		</header>
	);
}
