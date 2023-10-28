import type { Metadata } from 'next'

import { Footer, Header } from '@/components'

import '@/styles/generic/reset.css'
import { globalStyles } from '@/styles'

export const metadata: Metadata = {
  title: 'SSBook'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={globalStyles.app} lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
