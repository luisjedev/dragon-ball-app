import styles from "./error-component.module.css";

export function ErrorComponent() {
	return (
		<div className={styles["error-container"]}>
			<div className={styles["error-icon"]}>⚠️</div>
			<h2 className={styles["error-title"]}>Oops, ha ocurrido un error</h2>
			<p className={styles["error-message"]}>
				No hemos podido cargar el contenido que buscas. Por favor, inténtalo de
				nuevo más tarde.
			</p>
		</div>
	);
}
