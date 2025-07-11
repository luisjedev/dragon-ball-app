import { queryOptions } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";
import { mapCharacterDetail } from "@/mappers/character-mapper";
import type { CharacterDetailResponse } from "@/types/character-types";

export async function getCharacterById(
	id: number
): Promise<CharacterDetailResponse> {
	try {
		const response = await httpClient.get<CharacterDetailResponse>(
			`/characters/${id}`
		);
		return response.data;
	} catch (error) {
		throw new Error("Error fetching character by id", { cause: error });
	}
}

export const characterByIdQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["characterById", id],
		queryFn: () => getCharacterById(id),
		select: (data) => mapCharacterDetail(data),
	});
