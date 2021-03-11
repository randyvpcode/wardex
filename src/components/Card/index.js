import React from 'react'
import {
  Card,
  ImageContainer,
  Image,
  Name,
  Classification,
  Types,
} from './index.style'

export default function PokemonCard({ pokemon }) {
  return (
    <div
      initial={{ rotate: -180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.9 }}
    >
      <Card
        to={`/pokemon/${pokemon.name}`}
        className="hover:border-yellow-300 border-2
      "
      >
        <ImageContainer>
          <Image src={pokemon.image} alt={pokemon.name} width="100%" />
        </ImageContainer>
        <Name className="">{pokemon.name}</Name>
        <Classification className="bg-yellow-300 rounded pl-1 pr-1 text-gray-600 font-semibold">
          {pokemon.classification}
        </Classification>
        <Types>{pokemon.types.join(', ')}</Types>
      </Card>
    </div>
  )
}
