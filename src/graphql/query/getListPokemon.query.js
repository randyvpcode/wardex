import { gql } from 'apollo-boost'

export const getListPokemon = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      number
      classification
    }
  }
`
