import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "@/routeTree.gen";
import "@/index.css";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 1000 * 60 * 60 * 24,
			staleTime: 1000 * 60 * 60 * 24,
		},
	},
});

const router = createRouter({
	routeTree,
	context: {
		queryClient,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
});
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const persister = createAsyncStoragePersister({
	storage: window.localStorage,
});

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister }}
		>
			<RouterProvider router={router} />
		</PersistQueryClientProvider>,
	);
}
