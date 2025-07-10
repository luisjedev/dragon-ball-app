import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
	favoriteIds: number[];
	addFavorite: (id: number) => void;
	removeFavorite: (id: number) => void;
	isFavorite: (id: number) => boolean;
	toggleFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set, get) => ({
			favoriteIds: [],

			addFavorite: (id: number) => {
				set((state) => ({
					favoriteIds: state.favoriteIds.includes(id)
						? state.favoriteIds
						: [...state.favoriteIds, id],
				}));
			},

			removeFavorite: (id: number) => {
				set((state) => ({
					favoriteIds: state.favoriteIds.filter(
						(favoriteId) => favoriteId !== id,
					),
				}));
			},

			isFavorite: (id: number) => {
				return get().favoriteIds.includes(id);
			},

			toggleFavorite: (id: number) => {
				const { isFavorite, addFavorite, removeFavorite } = get();
				if (isFavorite(id)) {
					removeFavorite(id);
				} else {
					addFavorite(id);
				}
			},
		}),
		{
			name: "dragon-ball-favorites",
		},
	),
);
