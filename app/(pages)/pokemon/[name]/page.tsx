import FetchedPokemon from './_components/FetchedPokemon';
import { Metadata } from 'next';
import { getPokemon } from '@/app/api/getPokemonList/route';

type PokemonPageProps = {
  params: {
    name: string;
  };
};

export const metadata: Metadata = {
  title: 'Pokémon Detail',
  description: 'Detailed information about a specific Pokémon.',
};

export default async function PokemonDetail({ params }: PokemonPageProps) {
  const { name } = params;
  const detail = await getPokemon(name);

  return (
    <div>
      {detail ? <FetchedPokemon detail={detail} /> : <p>Pokémon not found</p>}
    </div>
  );
}
