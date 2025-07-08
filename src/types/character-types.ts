interface OriginPlanet {
	id: number;
	name: string;
	isDestroyed: boolean;
	description: string;
	image: string;
	deletedAt: string | null;
}

interface Transformation {
	id: number;
	name: string;
	image: string;
	ki: string;
	deletedAt: string | null;
}

export interface CharacterDetailResponse {
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
	originPlanet: OriginPlanet;
	transformations: Transformation[];
}

export interface CharacterDetailMapped {
	id: number;
	name: string;
	image: string;
	description: string;
	transformations: Transformation[];
}
