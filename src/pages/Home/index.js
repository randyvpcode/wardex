import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import { getListPokemon } from '../../graphql/query/getListPokemon.query'
import Loading from '../../components/Loading'
import Filter from '../../components/Filter'
import PokemonLists from './PokemonLists'
import Layouts from '../../layouts'

export default function Home() {
  const [variables, setVariables] = React.useState({
    first: 18,
  })
  const { loading, error, data, fetchMore } = useQuery(getListPokemon, {
    variables,
  })
  const dataPokemons = data ? data.pokemons : []
  const limitExceed = dataPokemons.length > 150

  const handleScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop
    const offsetHeight = document.documentElement.offsetHeight
    if (window.innerHeight + scrollTop < offsetHeight - 100) return

    if (variables.first <= 150) {
      fetchMore({
        variables: {
          ...variables,
          first: variables.first + 12,
        },
        updateQuery: (prev, { fetchMoreResult, variables }) => {
          setVariables(variables)
          if (!fetchMoreResult) return prev
          return Object.assign({}, prev, {
            pokemons: [...fetchMoreResult.pokemons],
          })
        },
      })
    }
  }, [fetchMore, variables])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const [displayFilter, setDisplayFilter] = React.useState(false)
  const closeFilter = () => {
    setDisplayFilter(false)
  }
  const openFilter = () => {
    setDisplayFilter(true)
  }

  const { filter } = useParams()
  const filterArray = filter ? filter.split('&') : []

  if (
    !loading &&
    document.body.offsetHeight < window.innerHeight &&
    !limitExceed
  ) {
    fetchMore({
      variables: {
        ...variables,
        first: variables.first + 15,
      },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setVariables(variables)
        if (!fetchMoreResult) return prev
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons],
        })
      },
    })
  }

  if (error) return <h1>Error</h1>

  return (
    <React.Fragment>
      <Layouts openFilter={openFilter} filters={filterArray}>
        <PokemonLists pokemons={dataPokemons} filters={filterArray} />
        {(loading || !limitExceed) && <Loading />}
        <Filter
          display={displayFilter}
          onClose={closeFilter}
          filters={filterArray}
        />
      </Layouts>
    </React.Fragment>
  )
}
