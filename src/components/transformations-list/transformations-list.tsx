import type { Transformation } from "@/types/character-types";
import { TransformationCard } from "../transformation-card/transformation-card";
import styles from "./transformation-list.module.css";

export function TransformationsList({
	transformations,
}: {
	transformations: Transformation[];
}) {
	if (transformations.length === 0) return null;

	return (
		<section className={styles["transformation-list-container"]}>
			<h2 className={styles["transformation-list-title"]}>TRANSFORMACIONES</h2>
			<ul className={styles["transformation-list"]}>
				{transformations.map((transformation) => (
					<li key={transformation.id}>
						<TransformationCard transformation={transformation} />
					</li>
				))}
			</ul>
		</section>
	);
}
