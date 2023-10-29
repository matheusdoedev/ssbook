import Image from 'next/image'

import { Container, LinkWithIcon, Logo, TextField } from '@/components'
import { ssbooksService } from '@/services'

import './Header.styles.scss'

export default async function Header() {
  const { data } = await ssbooksService.getUserPicture()

  return (
    <div data-testid="header" className="header">
      <div className="header__shape"></div>
      <Container className="header__container">
        <Logo />
        <TextField name="search" placeholder="Busque um livro" />
        <LinkWithIcon
          iconSrc="/assets/icons/add-icon.svg"
          label="Adicionar"
          iconWidth={24}
          iconHeight={24}
        />
        <LinkWithIcon
          iconSrc="/assets/icons/hearth-icon.svg"
          label="Favoritos"
          iconWidth={24}
          iconHeight={24}
        />
        <div className="header__separator"></div>
        <section className="header__user-info">
          <Image
            className="header__user-info__avatar"
            src={data.userPicture}
            alt="Favoritos"
            width={20}
            height={18.35}
          />
          <span className="header__user-info__name">Jucicreide</span>
        </section>
      </Container>
    </div>
  )
}
