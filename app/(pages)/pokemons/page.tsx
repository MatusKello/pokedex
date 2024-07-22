import { getPokemonList } from '@/app/api/getPokemonList/route';
import { PokemonListObject } from '@/app/lib/definitions';

export default async function Pokemon() {
  const pokemonList: PokemonListObject[] = await getPokemonList({ limit: 15 });

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}
