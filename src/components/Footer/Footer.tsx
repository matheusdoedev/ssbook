import { Container, Logo } from '@/components'

import './Footer.styles.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Logo variant="white" />
        <p className="footer__copy">
          Todos os direitos reservados.
          <br />
          Studio Sol Books © 2023{' '}
        </p>
      </Container>
    </footer>
  )
}
