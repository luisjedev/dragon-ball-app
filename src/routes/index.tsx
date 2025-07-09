import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CharacterCard } from "@/components/character-card/character-card";
import { charactersQueryOptions } from "@/services/get-characters";

export const Route = createFileRoute("/")({
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(charactersQueryOptions());
	},
	component: Index,
});

function Index() {
	const { data } = useSuspenseQuery(charactersQueryOptions());

	return (
		<div className={"home-container"}>
			<Suspense fallback={<div>Loading...</div>}>
				<ErrorBoundary fallbackRender={() => <div>Error</div>}>
					<ul className={"home-character-list"}>
						{data.map((character) => (
							<li key={character.id}>
								<CharacterCard character={character} />
							</li>
						))}
					</ul>
				</ErrorBoundary>
			</Suspense>
		</div>
	);
}
