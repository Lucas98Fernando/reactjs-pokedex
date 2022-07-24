import { useState } from "react";
import { AxiosResponse } from "axios";
import httpClient from "../http/axios";
import { AllPokemons } from "../types/Pokemons";

export default function useFetchPokemons() {
  const [offset, setOffset] = useState(20);
  const [limit, setLimit] = useState(20);

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

  const loadMore = async () => {
    setOffset((offset) => offset + 20);

    const response = await getPokemons(offset, limit);
    return response;
  };

  const findByName = async (name: string) => {
    try {
      const request: AxiosResponse = await httpClient(name);
      return request;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getPokemons,
    loadMore,
    findByName,
  };
}
