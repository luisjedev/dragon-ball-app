export interface Character {
	id: number;
	name: string;
	ki: string;
	maxKi: string;
	race: string;
	gender: string;
	description: string;
	image: string;
	affiliation: string;
	deletedAt: string | null;
}

interface Meta {
	totalItems: number;
	itemCount: number;
	itemsPerPage: number;
	totalPages: number;
	currentPage: number;
}

interface Links {
	first: string;
	previous: string;
	next: string;
	last: string;
}

export interface CharactersResponse {
	items: Character[];
	meta: Meta;
	links: Links;
}

export interface MappedCharacter {
	id: number;
	nombre: string;
	image: string;
}
