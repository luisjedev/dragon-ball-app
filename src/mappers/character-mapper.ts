import type {
	CharacterDetailMapped,
	CharacterDetailResponse,
} from "@/types/character-types";
import type { Character, MappedCharacter } from "@/types/characters-types";

export function mapCharacter(character: Character): MappedCharacter {
	return {
		id: character.id,
		name: character.name,
		image: character.image,
	};
}

export function mapCharacters(characters: Character[]): MappedCharacter[] {
	return characters.map(mapCharacter);
}

export function mapCharacterDetail(
	character: CharacterDetailResponse,
): CharacterDetailMapped {
	return {
		id: character.id,
		name: character.name,
		image: character.image,
		description: character.description,
		transformations: character.transformations,
	};
}
