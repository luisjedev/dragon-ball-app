import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { CharacterCard } from "@/components/character-card/character-card";
import { useDebounce } from "@/hooks/use-debounce";
import { charactersQueryOptions } from "@/services/get-characters";

export const Route = createFileRoute("/")({
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(charactersQueryOptions());
	},
	component: Index,
});

function Index() {
	const [inputValue, setInputValue] = useState("");
	const debouncedSearch = useDebounce(inputValue);
	const { data, isLoading } = useQuery(charactersQueryOptions(debouncedSearch));

	return (
		<div className={"home-container"}>
			<div className={"home-search-container"}>
				<div className={"home-search-input-container"}>
					<div className={"home-search-icon-container"}>
						<SearchIcon className={"home-search-icon"} />
					</div>
					<input
						type="text"
						id="home-search-input"
						name="home-search-input"
						placeholder="SEARCH A CHARACTER..."
						className={"home-search-input"}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</div>
				<span className={"home-search-results"}>
					{isLoading ? "LOADING..." : `${data?.length} RESULTS`}
				</span>
			</div>
			<ul className={"home-character-list"}>
				{data?.map((character) => (
					<li key={character.id}>
						<CharacterCard character={character} />
					</li>
				))}
			</ul>
		</div>
	);
}
