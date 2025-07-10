import type { CharacterDetailMapped } from "@/types/character-types";

export const mockCharacter: CharacterDetailMapped = {
	id: 1,
	name: "Goku",
	image: "https://dragonball-api.com/characters/goku_normal.webp",
	description:
		"El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
	transformations: [
		{
			id: 1,
			name: "Goku SSJ",
			image: "https://dragonball-api.com/transformaciones/goku_ssj.webp",
			ki: "3 Billion",
			deletedAt: null,
		},
		{
			id: 2,
			name: "Goku SSJ2",
			image: "https://dragonball-api.com/transformaciones/goku_ssj2.webp",
			ki: "6 Billion",
			deletedAt: null,
		},
		{
			id: 3,
			name: "Goku SSJ3",
			image: "https://dragonball-api.com/transformaciones/goku_ssj3.webp",
			ki: "24 Billion",
			deletedAt: null,
		},
		{
			id: 4,
			name: "Goku SSJ4",
			image: "https://dragonball-api.com/transformaciones/goku_ssj4.webp",
			ki: "2 Quadrillion",
			deletedAt: null,
		},
		{
			id: 5,
			name: "Goku SSJB",
			image: "https://dragonball-api.com/transformaciones/goku_ssjb.webp",
			ki: "9 Quintillion",
			deletedAt: null,
		},
		{
			id: 44,
			name: "Goku Ultra Instinc",
			image: "https://dragonball-api.com/transformaciones/goku_ultra.webp",
			ki: "90 Septillion",
			deletedAt: null,
		},
	],
};
