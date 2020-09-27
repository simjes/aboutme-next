import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQL_URL, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_KEY}`,
  },
})

export default client
