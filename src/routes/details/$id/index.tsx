import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CharacterDetailsCard } from "@/components/character-details-card/character-details-card";
import { TransformationsList } from "@/components/transformations-list/transformations-list";
import { characterByIdQueryOptions } from "@/services/get-character-by-id";

export const Route = createFileRoute("/details/$id/")({
	parseParams: (params) => ({
		id: Number(params.id),
	}),
	loader: ({ context: { queryClient }, params }) => {
		return queryClient.ensureQueryData(characterByIdQueryOptions(params.id));
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(characterByIdQueryOptions(id));

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary fallbackRender={() => <div>Error</div>}>
				<main className={"details-container"}>
					<CharacterDetailsCard character={data} />
					<TransformationsList transformations={data.transformations} />
				</main>
			</ErrorBoundary>
		</Suspense>
	);
}
