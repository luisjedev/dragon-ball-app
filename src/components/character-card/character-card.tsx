import { Link } from "@tanstack/react-router";

import Like from "@/assets/icons/like.svg?react";
import LikeOutline from "@/assets/icons/like-outline.svg?react";
import { useFavoritesStore } from "@/stores/favorites-store";
import type { MappedCharacter } from "@/types/characters-types";
import styles from "./character-card.module.css";

interface CharacterCardProps {
	character: MappedCharacter;
	loading?: "eager" | "lazy";
}

export function CharacterCard({
	character,
	loading = "lazy",
}: CharacterCardProps) {
	const isFavorite = useFavoritesStore((state) =>
		state.isFavorite(character.id)
	);
	const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

	return (
		<Link
			aria-label={`View details for ${character.name}`}
			className={styles["character-card"]}
			data-testid="character-card"
			params={{ id: character.id }}
			to="/details/$id"
		>
			<div className={styles["character-card__image-container"]}>
				<img
					aria-hidden
					className={styles["character-card__image"]}
					loading={loading}
					src={character.image}
				/>
			</div>
			<div className={styles["character-card__content"]}>
				<p className={styles["character-card__name"]}>
					{character.name.toLocaleUpperCase()}
				</p>
				<button
					className={styles["character-card__favorite-button"]}
					onClick={(e) => {
						e.preventDefault();
						toggleFavorite(character.id);
					}}
					type="button"
				>
					{isFavorite ? (
						<Like className={styles["character-card__favorite-icon"]} />
					) : (
						<LikeOutline className={styles["character-card__favorite-icon"]} />
					)}
				</button>
			</div>
		</Link>
	);
}
