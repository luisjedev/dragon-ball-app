import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CharacterCard } from "../components/character-card/character-card";
import { charactersQueryOptions } from "../services/get-characters";

export const Route = createFileRoute("/")({
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(charactersQueryOptions);
	},
	component: Index,
});

function Index() {
	const { data } = useSuspenseQuery(charactersQueryOptions);

	return (
		<div>
			<h3>Welcome Home!</h3>
			<Suspense fallback={<div>Loading...</div>}>
				<ErrorBoundary fallbackRender={() => <div>Error</div>}>
					{data.map((character) => (
						<CharacterCard key={character.id} character={character} />
					))}
				</ErrorBoundary>
			</Suspense>
		</div>
	);
}
