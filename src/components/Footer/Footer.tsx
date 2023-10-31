import Link from 'next/link'

import { Container, LinkWithIcon, Logo } from '@/components'
import { FOOTER_MOBILE_NAV_OPTIONS } from '@/constants'

import './Footer.styles.scss'

export default function Footer() {
  const handleMobileNavOptions = () =>
    FOOTER_MOBILE_NAV_OPTIONS.map(({ src, width, height, label, isActive }) => {
      if (isActive)
        return (
          <Link key={label} href="/" style={{ margin: '0 auto' }}>
            <LinkWithIcon
              iconSrc={src}
              iconWidth={width}
              iconHeight={height}
              label={label}
              isActive={isActive}
            />
          </Link>
        )

      return (
        <LinkWithIcon
          key={label}
          iconSrc={src}
          iconWidth={width}
          iconHeight={height}
          label={label}
          isActive={isActive}
        />
      )
    })

  return (
    <div data-testid="footer">
      <footer className="footer">
        <Container className="footer__container">
          <Link href="/">
            <Logo variant="white" />
          </Link>
          <p className="footer__copy">
            Todos os direitos reservados.
            <br />
            Studio Sol Books © 2023{' '}
          </p>
        </Container>
      </footer>

      <footer className="footer--mobile">{handleMobileNavOptions()}</footer>
    </div>
  )
}
