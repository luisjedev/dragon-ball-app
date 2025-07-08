export async function getCharacters() {
	const response = await fetch(
		"https://gateway.marvel.com:443/v1/public/characters?ts=1",
	);
	const data = await response.json();
	return data;
}
