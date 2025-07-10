import { useQueries } from "@tanstack/react-query";
import { getCharacterById } from "@/services/get-character-by-id";

export const useGetFavoritesCharacters = (ids: number[]) =>
	useQueries({
		queries: ids.map((id) => ({
			queryKey: ["characterById", id],
			queryFn: () => getCharacterById(id),
		})),
	});
