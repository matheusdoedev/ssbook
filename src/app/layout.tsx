import type { Metadata } from 'next'

import { Footer } from '@/components'

import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'SSBook',
  description: 'É um app onde o usuário pode gerenciar os próprios livros.',
  keywords: 'Livros, ssbook, gerenciar, ler, emprestar, favoritos, autores',
  robots: 'index, follow',
  icons: [
    { type: 'image/svg+x', url: '/assets/favicon.jpg' },
    { type: 'image/png', sizes: '32x32', url: '/assets/favicon-32x32.png' },
    { type: 'image/png', sizes: '16x16', url: '/assets/favicon-16x16.png' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/apple-touch-icon.png'
    }
  ],
  manifest: '/assets/site.webmanifest',
  openGraph: {
    type: 'website',
    description: 'É um app onde o usuário pode gerenciar os próprios livros.',
    title: 'SSBook',
    locale: 'pt-br'
  }
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
