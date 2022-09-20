import { startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispath, getState) => {
        dispath(startLoadingPokemons());
        // dispath(setPokemons());
    }
}

// https://pokeapi.co/api/v2/pokemon?limit=10&offset=0