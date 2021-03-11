import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { getDetailPokemon } from '../../graphql/query/getDetailPokemon.query'
// import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Detail from './Detail'
import Layouts from '../../layouts'

export default function DetailPokemon() {
  const { name } = useParams()

  React.useEffect(() => {
    document.title = `${name} | Wardex`
    return () => {
      document.title = `Wardex`
    }
  }, [name])

  const {
    loading,
    // error,
    data = {},
  } = useQuery(getDetailPokemon, {
    variables: { name },
  })

  // if (error) return <Error />
  if (loading) return <Loading fullscreen />

  return (
    <React.Fragment>
      <Layouts>{data && <Detail data={data.pokemon} />}</Layouts>
    </React.Fragment>
  )
}
