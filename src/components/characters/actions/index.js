import { ADD_CHARACTER, REMOVE_CHARACTER } from "./types";

export const addCharacter = () => ( {
	type : ADD_CHARACTER,
	payload : {}
} );

export const removeCharacter = () => ( {
	type : REMOVE_CHARACTER,
	payload : {}
} );