import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default httpClient;
