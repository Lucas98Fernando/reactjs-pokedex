import { useEffect, useState } from "react";
import { PokemonResults } from "../types/Pokemons";
import { AxiosResponse } from "axios";
import httpClient from "../http/axios";
import { AllPokemons } from "../types/Pokemons";

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState<PokemonResults[]>();
  const [offset, setOffset] = useState(20);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data?.results));
  }, []);

  const getPokemons = async (offset = 0, limit = 20) => {
    try {
      const { data }: AxiosResponse<AllPokemons> = await httpClient(
        `?offset=${offset}&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = () => {
    setOffset((offset) => offset + 20);

    getPokemons(offset, limit).then((data) =>
      setPokemons((poke) => [...poke!, ...data?.results!])
    );
  };

  const findByName = async (name: string) => {
    try {
      const { data, request }: AxiosResponse = await httpClient(name);
      setPokemons([{ name: data.name, url: request.responseURL }]);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { pokemons, loadMore, findByName };
}
