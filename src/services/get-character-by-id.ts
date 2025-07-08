import { queryOptions } from "@tanstack/react-query";
import httpClient from "../config/http-client";
import { mapCharacterDetail } from "../mappers/character-mapper";
import type {
	CharacterDetailMapped,
	CharacterDetailResponse,
} from "../types/character-types";

export async function getCharacterById(
	id: number,
): Promise<CharacterDetailMapped> {
	try {
		const data = await httpClient.get<CharacterDetailResponse>(
			`https://dragonball-api.com/api/characters/${id}`,
		);

		return mapCharacterDetail(data);
	} catch (error) {
		console.error("ERROR", error);
		throw error;
	}
}

export const characterByIdQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["characterById", id],
		queryFn: () => getCharacterById(id),
	});
