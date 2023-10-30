import type { Metadata } from 'next'

import { Footer } from '@/components'

import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'SSBook'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
