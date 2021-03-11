const POKEMON_TYPES = [
  'Normal',
  'Fire',
  'Fighting',
  'Water',
  'Flying',
  'Grass',
  'Poison',
  'Electric',
  'Ground',
  'Psychic',
  'Rock',
  'Ice',
  'Bug',
  'Dragon',
  'Ghost',
  'Dark',
  'Steel',
  'Fairy',
]

const { REACT_APP_GRAPHQL_URL } = process.env

const GRAPHQL_API = REACT_APP_GRAPHQL_URL

export { POKEMON_TYPES, GRAPHQL_API }
