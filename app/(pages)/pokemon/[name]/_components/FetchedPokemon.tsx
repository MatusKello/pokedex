import { Card } from 'flowbite-react';
import Image from 'next/image';

type FetchedPokemonProps = {
  detail: {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: { front_default: string };
  };
};

const FetchedPokemon = ({ detail }: FetchedPokemonProps) => {
  return (
    <Card className='bg-green-500 w-60'>
      <h1>{detail.name}</h1>
      <p>ID: {detail.id}</p>
      <p>Height: {detail.height}</p>
      <p>Weight: {detail.weight}</p>
      <Image
        src={detail.sprites.front_default}
        width={150}
        height={150}
        alt={`${detail.name} image`}
      />
    </Card>
  );
};

export default FetchedPokemon;
