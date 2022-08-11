import axios, { AxiosInstance } from "axios";

export const httpClient: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});
