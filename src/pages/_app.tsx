import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { fetchProvider } from '@/providers'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={fetchProvider}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
