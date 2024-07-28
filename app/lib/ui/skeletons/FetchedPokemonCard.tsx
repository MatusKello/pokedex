// app/pokemon/[name]/SkeletonFetchedPokemon.tsx

import { Card } from 'flowbite-react';

const SkeletonFetchedPokemon = () => {
  return (
    <Card className='bg-green-500 w-60 animate-pulse'>
      <div className='h-6 bg-green-300 rounded w-3/4 mb-4'></div>
      <div className='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
      <div className='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
      <div className='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
    </Card>
  );
};

export default SkeletonFetchedPokemon;
