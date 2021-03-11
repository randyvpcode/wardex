import React, { useState } from 'react'
import Layouts from '../../layouts'
import { Container, ComparePageTitle } from '../Compare/index.style'
import { useApolloClient, useQuery } from '@apollo/react-hooks'
import { getDetailPokemon } from '../../graphql/query/getDetailPokemon.query'
import { getListPokemon } from '../../graphql/query/getListPokemon.query'
import Loading from '../../components/Loading'
import Select  from 'react-select'
import Preview from './Preview'

export default function DetailPokemon() {
  const client = useApolloClient()
  const [loaded, setLoaded] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [state, setState] = useState({
    selectName1: '',
    selectName2: '',
    searchName1: '',
    searchName2: '',
    resultFirst: '',
    resultSecond: '',
    loading: false
  })
  const {
    loading,
    // error
    data,
  } = useQuery(getListPokemon, { variables: { first: 50 } })

  React.useEffect(() => {
    if (pokemons.length === 0 && data) { 
      const lists = []
      data && data.pokemons.map(val => {
        lists.push({
          value: val.name,
          label: val.name
        })
      })
      setPokemons([...pokemons, ...lists])
    } 
  }, [data])


  const getPokemons = async () => {
    if (state.searchName1 && state.searchName2) {
      const result1 = await client.query({
        query: getDetailPokemon,
        variables: { name: state.searchName1 },
      })
      const result2 = await client.query({
        query: getDetailPokemon,
        variables: { name: state.searchName2 },
      })
      setState({ ...state, loading: false, resultFirst: result1.data.pokemon, resultSecond: result2.data.pokemon })
      setLoaded(true)

    } else {
      window.alert('Please select pokemon to compare!')
      
    }

  }

  // if (error) return <Error />
  if (loading) return <Loading isFullscreen/>

  function onChange1(data) {
    setState({...state, searchName1: data.value, selectName1: data})
  }

  function onChange2(data) {
    setState({...state, searchName2: data.value, selectName2: data})
  }

  function onSubmit(e) {
    e.preventDefault()
    setState({...state, loading: true})
    getPokemons()
  }

  return (
    <Layouts>
      <Container>
        <ComparePageTitle>Compare Pokemons</ComparePageTitle>
        <form onSubmit={onSubmit}>
          <Select
            className="m-5 focus:ring-yellow-300 focus:border-yellow-300 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md p-10"
            placeholder="Select your first pokemon"
            options={pokemons}
            value={state.selectName1}
            onChange={value => onChange1(value)}
          />
          <Select
            className="m-5 focus:ring-yellow-300 focus:border-yellow-300 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md p-10"
            placeholder="Select your second pokemon"
            options={pokemons}
            value={state.selectName2}
            onChange={value => onChange2(value)}
          />
          <button type="submit" className="bg-yellow-300 rounded p-2 border-gray-600 border-2">
            Compare
          </button>
        </form>
        {state.loading && <Loading />}
        {loaded && (
            <Preview data={state} />
        )}
      </Container>
    </Layouts>
  )
}
