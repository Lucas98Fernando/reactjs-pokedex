import { AllPokemons } from "./../types/Pokemons";
import { AxiosResponse } from "axios";
import httpClient from "../http/axios";

const usePokemons = {
  async getAllPokemons(offset = 0, limit = 20) {
    try {
      const { data }: AxiosResponse<AllPokemons> = await httpClient(
        `?offset=${offset}&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async getPokemonImage(url: string) {
    try {
      const { data }: AxiosResponse = await httpClient({
        url,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async pokemonDetails(pokemonName: string) {
    try {
      const { data }: AxiosResponse = await httpClient(`${pokemonName}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default usePokemons;
