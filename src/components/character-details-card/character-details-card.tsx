import Like from "@/assets/icons/like.svg?react";
import LikeOutline from "@/assets/icons/like-outline.svg?react";
import { useFavoritesStore } from "@/stores/favorites-store";
import type { CharacterDetailMapped } from "@/types/character-types";
import styles from "./character-details-card.module.css";

export function CharacterDetailsCard({
	character,
}: {
	character: CharacterDetailMapped;
}) {
	const isFavorite = useFavoritesStore((state) =>
		state.isFavorite(character.id),
	);
	const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

	return (
		<section className={styles["character-details-card-container"]}>
			<div className={styles["character-details-card"]}>
				<div className={styles["character-details-card__image-container"]}>
					<img
						src={character.image}
						alt={character.name}
						className={styles["character-details-card__image"]}
					/>
				</div>
				<main className={styles["character-details-card__info"]}>
					<div className={styles["character-details-card__info-content"]}>
						<p className={styles["character-details-card__info-name"]}>
							{character.name.toLocaleUpperCase()}
						</p>
						<button
							type="button"
							onClick={() => toggleFavorite(character.id)}
							className={styles["character-details-card__favorite-icon-button"]}
						>
							{isFavorite ? (
								<Like
									className={styles["character-details-card__favorite-icon"]}
								/>
							) : (
								<LikeOutline
									className={styles["character-details-card__favorite-icon"]}
								/>
							)}
						</button>
					</div>
					<div className={styles["character-details-card__info-description"]}>
						<p
							className={
								styles["character-details-card__info-description-text"]
							}
						>
							{character.description}
						</p>
					</div>
				</main>
			</div>
		</section>
	);
}
