export type PokemonListObject = {
  name: string;
  url: string;
};

export type GetPokemonListArg = { limit: number };

export type FetchedPokemonProps = { name: string | string[] };
