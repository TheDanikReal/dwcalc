import { atom } from "nanostores";
import type { CharacterDefinition, CharacterValue } from "../utils/GameData";

export interface SelectedCharacter {
	name: CharacterValue;
	definition: CharacterDefinition;
}

export const selectedCharacter = atom<SelectedCharacter | null>(null);

export function selectCharacter(
	name: CharacterValue,
	definition: CharacterDefinition,
) {
	selectedCharacter.set({ name, definition });
}
