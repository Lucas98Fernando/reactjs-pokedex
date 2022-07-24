import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useState } from "react";
import httpClient from "../http/axios";
import { AllPokemons, PokemonResults } from "../types/Pokemons";

type PokemonsContextType = {
  pokemons: PokemonResults[];
  showLoadMore: boolean;
  getPokemons(offset?: number, limit?: number): void;
  loadMore(): void;
  getByName(name: string): void;
};

export const PokemonsContext = createContext({} as PokemonsContextType);

export const PokemonsProvider = ({ children }: PropsWithChildren) => {
  const [pokemons, setPokemons] = useState<PokemonResults[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [offset, setOffset] = useState(20);
  const [limit, setLimit] = useState(20);

  const resetPokemons = () => setPokemons([]);

  const getPokemons = async (offset = 0, limit = 20) => {
    try {
      resetPokemons();
      setShowLoadMore(true);

      const { data }: AxiosResponse<AllPokemons> = await httpClient(
        `?offset=${offset}&limit=${limit}`
      );

      setPokemons(data.results);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    try {
      setOffset((offset) => offset + 20);

      const { data }: AxiosResponse<AllPokemons> = await httpClient(
        `?offset=${offset}&limit=${limit}`
      );

      setPokemons((poke) => [...poke!, ...data?.results!]);
    } catch (error) {
      console.log(error);
    }
  };

  const getByName = async (name: string) => {
    try {
      resetPokemons();

      setShowLoadMore(false);

      const response: AxiosResponse = await httpClient(name);

      setPokemons([
        { name: response?.data.name, url: response?.request.responseURL },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonsContext.Provider
      value={{ pokemons, showLoadMore, getPokemons, loadMore, getByName }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
