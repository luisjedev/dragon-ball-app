import { expect, test } from "@playwright/test";

const characterDetailsRegex = /\/details\/\d+/;

test("should filter characters by name and navigate to character details", async ({
	page,
}) => {
	await page.goto("/");

	const searchInput = page.locator('input[id="home-search-input"]');
	await searchInput.fill("Goku");

	await page.waitForTimeout(2000);

	const characterCard = page.locator('[data-testid="character-card"]').first();
	await expect(characterCard).toBeVisible();

	await characterCard.click();

	await expect(page).toHaveURL(characterDetailsRegex);

	await expect(
		page.locator('[data-testid="character-details-card__info-name"]')
	).toContainText("GOKU");
});
