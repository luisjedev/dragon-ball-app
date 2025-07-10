import styles from "./not-found-component.module.css";

export function NotFoundComponent() {
	return (
		<div className={styles["not-found-container"]}>
			<div className={styles["not-found-icon"]}>🔍</div>
			<h2 className={styles["not-found-title"]}>Página no encontrada</h2>
			<p className={styles["not-found-message"]}>
				La página que buscas no existe o ha sido movida. Verifica la URL o
				regresa al inicio.
			</p>
		</div>
	);
}
