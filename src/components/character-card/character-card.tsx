import { Link } from "@tanstack/react-router";
import type { MappedCharacter } from "../../types/characters-types";
import styles from "./character-card.module.css";

export function CharacterCard({ character }: { character: MappedCharacter }) {
	return (
		<Link
			to="/details/$id"
			params={{ id: character.id }}
			className={styles.character_card}
		>
			<img src={character.image} alt={character.nombre} />
			<h2>{character.nombre}</h2>
		</Link>
	);
}
