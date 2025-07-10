import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { useFavoritesStore } from "@/stores/favorites-store";
import { mockCharacter } from "@/testing/mocks/character-details";
import { CharacterDetailsCard } from "./character-details-card";

describe("CharacterDetailsCard", () => {
	beforeEach(() => {
		useFavoritesStore.setState({ favoriteIds: [] });
	});

	it("should toggle favorite status when favorite button is clicked", async () => {
		const user = userEvent.setup();

		render(<CharacterDetailsCard character={mockCharacter} />);

		const favoriteButton = screen.getByRole("button");

		expect(useFavoritesStore.getState().favoriteIds).toHaveLength(0);

		await user.click(favoriteButton);

		expect(useFavoritesStore.getState().favoriteIds).toContain(1);
		expect(useFavoritesStore.getState().favoriteIds).toHaveLength(1);

		await user.click(favoriteButton);

		expect(useFavoritesStore.getState().favoriteIds).not.toContain(1);
		expect(useFavoritesStore.getState().favoriteIds).toHaveLength(0);
	});
});
