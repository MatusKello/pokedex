import { getPokemonList } from '@/app/api/getPokemonList/route';
import { PokemonListObject } from '@/app/lib/definitions';
import { Card } from 'flowbite-react';
import Link from 'next/link';

export default async function Pokemon() {
  const pokemonList: PokemonListObject[] = await getPokemonList({ limit: 40 });

  return (
    <div className='grid grid-cols-10 gap-1'>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.name}>
          <p>{pokemon.name}</p>
          <Link href={`/pokemon/${pokemon.name}`}>Detail</Link>
        </Card>
      ))}
    </div>
  );
}
