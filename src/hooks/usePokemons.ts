import { useContext } from "react";
import { PokemonsContext } from "@context/PokemonsContext";

export function usePokemons() {
  const pokemons = useContext(PokemonsContext);
  return pokemons;
}
