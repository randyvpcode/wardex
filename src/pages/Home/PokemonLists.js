import React from 'react'
import Card from '../../components/Card'
import { ListContainer } from './index.style'

export default function PokemonLists({ pokemons, filters }) {
  return (
    <ListContainer>
      {filters.length > 0
        ? pokemons.map(
            (pokemon) =>
              filters.some((item) => pokemon.types.includes(item)) && (
                <Card pokemon={pokemon} key={pokemon.id} />
              )
          )
        : pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} />
          ))}
    </ListContainer>
  )
}
