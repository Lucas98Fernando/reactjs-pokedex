import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import httpClient from "../http/axios";
import { PokemonTypes } from "../types/Pokemons";

export default function usePokemonImage(url: string) {
  const [pokemonSprite, setPokemonSprite] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState<PokemonTypes[]>([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonImage(url).then((data) => {
      setPokemonData(data);
      setPokemonSprite(data.sprites.other.dream_world.front_default);
      setPokemonTypes(data.types);
    });
  }, []);

  const getPokemonImage = async (url: string) => {
    try {
      const { data }: AxiosResponse = await httpClient({
        url,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { pokemonSprite, pokemonTypes };
}
