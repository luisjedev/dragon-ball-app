import { queryOptions } from "@tanstack/react-query";
import { getCharacters } from "../services/get-characters";

export const charactersQueryOptions = queryOptions({
	queryKey: ["characters"],
	queryFn: () => getCharacters(),
});
