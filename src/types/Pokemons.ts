export type AllPokemons = {
  count: number;
  next: string;
  previous: string;
  results: PokemonResults[];
};

export type PokemonResults = {
  name: string;
  url: string;
};

export type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
