import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { CharacterCard } from "@/components/character-card/character-card";
import { useDebounce } from "@/hooks/use-debounce";
import { charactersQueryOptions } from "@/services/get-characters";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				name: "description",
				content: "Search for your favorite Dragon Ball characters",
			},
			{
				title: "Dragon Ball Characters",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),
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
						className={"home-search-input"}
						id="home-search-input"
						name="home-search-input"
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="SEARCH A CHARACTER..."
						type="text"
						value={inputValue}
					/>
				</div>
				<span className={"home-search-results"}>
					{isLoading ? "LOADING..." : `${data?.length} RESULTS`}
				</span>
			</div>
			<ul className={"home-character-list"}>
				{data?.map((character, index) => (
					<li key={character.id}>
						<CharacterCard
							character={character}
							loading={index < 10 ? "eager" : "lazy"}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
