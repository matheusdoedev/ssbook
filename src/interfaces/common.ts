import { ApolloQueryResult } from '@apollo/client'

export type ApolloResponse<T> = Promise<ApolloQueryResult<T>>
