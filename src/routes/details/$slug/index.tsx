import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { charactersQueryOptions } from "../../../queries/characters-query-options";

export const Route = createFileRoute("/details/$slug/")({
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(charactersQueryOptions);
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { slug } = Route.useParams();
	const characters = useSuspenseQuery(charactersQueryOptions);

	return (
		<div>
			<h1>Hello {slug}!</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<ErrorBoundary fallbackRender={() => <div>Error</div>}>
					<p>{JSON.stringify(characters.data.results[0])}</p>
				</ErrorBoundary>
			</Suspense>
		</div>
	);
}
