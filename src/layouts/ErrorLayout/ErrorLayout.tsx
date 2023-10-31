import Link from 'next/link'

import { Container, Header } from '@/components'

import './ErrorLayout.styles.scss'

interface ErrorLayoutProps {
  message: string
  userPicture: string
}

export default function ErrorLayout({
  message,
  userPicture
}: ErrorLayoutProps) {
  return (
    <>
      <Header userPicture={userPicture} hideInMobile />

      <section className="error-layout">
        <Container className="error-layout__container">
          <h2 className="error-layout__title">{message}</h2>
          <Link className="error-layout__link" href="/">
            Voltar para a página inicial
          </Link>
        </Container>
      </section>
    </>
  )
}
