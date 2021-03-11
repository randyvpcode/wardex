import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
// import Routes from './routes'
import { client } from './graphql/connector'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Muli';
  }
`

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      {/* <Routes /> */}
    </ApolloProvider>
  )
}

export default App
