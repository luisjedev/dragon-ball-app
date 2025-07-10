import type { Transformation } from "@/types/character-types";
import styles from "./transformation-card.module.css";

export function TransformationCard({
	transformation,
}: {
	transformation: Transformation;
}) {
	return (
		<article className={styles["transformation-card"]}>
			<div className={styles["transformation-card__image-container"]}>
				<img
					alt={transformation.name}
					className={styles["transformation-card__image"]}
					loading="lazy"
					src={transformation.image}
				/>
			</div>
			<div className={styles["transformation-card__info"]}>
				<p className={styles["transformation-card__info-name"]}>
					{transformation.name}
				</p>
				<p className={styles["transformation-card__info-ki"]}>
					{transformation.ki}
				</p>
			</div>
		</article>
	);
}
