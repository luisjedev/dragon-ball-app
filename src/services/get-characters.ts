import { queryOptions } from "@tanstack/react-query";
import { httpClient } from "../config/http-client";
import { mapCharacters } from "../mappers/character-mapper";
import type { Character, CharactersResponse } from "../types/characters-types";

async function getCharacters({
	name,
	limit,
}: {
	name?: string;
	limit?: number;
}): Promise<CharactersResponse | Character[]> {
	try {
		const response = await httpClient.get<CharactersResponse | Character[]>(
			`/characters`,
			{
				params: {
					limit: limit ?? import.meta.env.VITE_LIMIT_PER_CALL,
					name,
				},
			},
		);
		return response.data;
	} catch (error) {
		console.error("ERROR", error);
		throw error;
	}
}

export const charactersQueryOptions = (name?: string, limit?: number) =>
	queryOptions({
		queryKey: ["characters", name, limit],
		queryFn: () => getCharacters({ name, limit }),
		select: (data) => {
			if (Array.isArray(data)) {
				return mapCharacters(data);
			}
			return mapCharacters(data.items);
		},
	});
