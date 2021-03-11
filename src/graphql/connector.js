import ApolloClient from 'apollo-boost'
import { GRAPHQL_API } from '../utils/globals'

const client = new ApolloClient({ uri: GRAPHQL_API })

export { client }
