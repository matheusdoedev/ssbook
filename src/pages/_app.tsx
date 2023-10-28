import { fetchProvider } from '@/providers'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={fetchProvider}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
