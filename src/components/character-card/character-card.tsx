import { Link } from "@tanstack/react-router";

import Like from "@/assets/icons/like.svg?react";
import LikeOutline from "@/assets/icons/like-outline.svg?react";
import { useFavoritesStore } from "@/stores/favorites-store";
import type { MappedCharacter } from "@/types/characters-types";
import styles from "./character-card.module.css";

export function CharacterCard({ character }: { character: MappedCharacter }) {
	const isFavorite = useFavoritesStore((state) =>
		state.isFavorite(character.id),
	);

	return (
		<Link
			to="/details/$id"
			params={{ id: character.id }}
			className={styles["character-card"]}
			aria-label={`View details for ${character.name}`}
			data-testid="character-card"
		>
			<div className={styles["character-card__image-container"]}>
				<img
					src={character.image}
					aria-hidden
					className={styles["character-card__image"]}
				/>
			</div>
			<div className={styles["character-card__content"]}>
				<p className={styles["character-card__name"]}>
					{character.name.toLocaleUpperCase()}
				</p>
				<div className={styles["character-card__favorite-icon"]}>
					{isFavorite ? <Like /> : <LikeOutline />}
				</div>
			</div>
		</Link>
	);
}
