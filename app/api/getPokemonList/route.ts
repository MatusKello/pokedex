import { GetPokemonListArg } from '@/app/lib/definitions';

export async function getPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch pokemon', error);
  }
}

export async function getPokemonList({ limit }: GetPokemonListArg) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Failed to fetch pokemon list', error);
    throw new Error('Failed to fetch pokemon list');
  }
}
