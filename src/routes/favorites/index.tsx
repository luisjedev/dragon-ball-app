import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { CharacterCard } from "@/components/character-card/character-card";
import { useDebounce } from "@/hooks/use-debounce";
import { useGetFavoritesCharacters } from "@/services/get-favorites-characters";
import { useFavoritesStore } from "@/stores/favorites-store";

export const Route = createFileRoute("/favorites/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [inputValue, setInputValue] = useState("");
	const debouncedSearch = useDebounce(inputValue);
	const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
	const results = useGetFavoritesCharacters(favoriteIds);

	const data = results
		.map((result) => result.data)
		.filter((character) => character !== undefined);

	const filteredData = data.filter((character) =>
		character.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
	);

	return (
		<div className={"home-container"}>
			<h1 className={"home-title"}>FAVORITES</h1>
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
					{results.some((result) => result.isLoading)
						? "LOADING..."
						: `${filteredData?.length} RESULTS`}
				</span>
			</div>
			<ul className={"home-character-list"}>
				{filteredData?.map((character) => (
					<li key={character.id}>
						<CharacterCard character={character} />
					</li>
				))}
			</ul>
		</div>
	);
}
