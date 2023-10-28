import Image from 'next/image'

import { Container, Logo, TextField } from '@/components'
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
        <button className="header__button">
          <Image
            src="/assets/icons/add-icon.svg"
            alt="Adicionar"
            width={24}
            height={24}
          />
          Adicionar
        </button>
        <button className="header__button">
          <Image
            src="/assets/icons/hearth-icon.svg"
            alt="Favoritos"
            width={24}
            height={24}
          />
          Favoritos
        </button>
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
