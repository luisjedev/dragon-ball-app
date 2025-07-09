import { queryOptions } from "@tanstack/react-query";
import httpClient from "../config/http-client";
import { mapCharacters } from "../mappers/character-mapper";
import type {
	CharactersResponse,
	MappedCharacter,
} from "../types/characters-types";

async function getCharacters(): Promise<MappedCharacter[]> {
	try {
		const data = await httpClient.get<CharactersResponse>(
			`https://dragonball-api.com/api/characters`,
		);

		return mapCharacters(data.items);
	} catch (error) {
		console.error("ERROR", error);
		throw error;
	}
}

export const charactersQueryOptions = queryOptions({
	queryKey: ["characters"],
	queryFn: () => getCharacters(),
});
