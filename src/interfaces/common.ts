import { ApolloQueryResult } from '@apollo/client'

export type ApolloResponse<T> = Promise<ApolloQueryResult<T>>

export interface GenerateMetadataProps<T> {
  params: T
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface IconProps {
  src: string
  alt: string
  width: number
  height: number
}
