import { Container, LinkWithIcon, Logo } from '@/components'

import './Footer.styles.scss'

export default function Footer() {
  return (
    <div>
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

      <footer className="footer--mobile">
        <LinkWithIcon
          iconSrc="/assets/icons/home-icon.svg"
          iconWidth={24}
          iconHeight={24}
          label="Início"
          isActive
        />
        <LinkWithIcon
          iconSrc="/assets/icons/add-icon.svg"
          iconWidth={24}
          iconHeight={24}
          label="Adicionar"
        />
        <LinkWithIcon
          iconSrc="/assets/icons/share-icon.svg"
          iconWidth={24}
          iconHeight={24}
          label="Buscar"
        />
        <LinkWithIcon
          iconSrc="/assets/icons/hearth-icon.svg"
          iconWidth={24}
          iconHeight={24}
          label="Favoritos"
        />
      </footer>
    </div>
  )
}
