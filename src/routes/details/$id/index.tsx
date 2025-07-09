import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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
		<div>
			<h1>Hello {id}!</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<ErrorBoundary fallbackRender={() => <div>Error</div>}>
					<p>{JSON.stringify(data)}</p>
				</ErrorBoundary>
			</Suspense>
		</div>
	);
}
