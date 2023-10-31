import Image from 'next/image'
import Link from 'next/link'

import { Container, LinkWithIcon, Logo, TabMenu, TextField } from '@/components'
import { INTRO_TAB_MENU_OPTIONS } from '@/constants'
import { IconProps } from '@/interfaces'

import './Header.styles.scss'

const SEARCH_FIELD_ICON: IconProps = {
  src: '/assets/icons/magnifying-glass.svg',
  alt: 'Buscar',
  width: 24,
  height: 24
}

interface HeaderProps {
  hideInMobile?: boolean
  userPicture: string
}

export default function Header({ hideInMobile, userPicture }: HeaderProps) {
  return (
    <div
      data-testid="header"
      className={`header ${hideInMobile ? 'header--mobile' : ''}`}>
      <Container className="header__container">
        <div className="header__shape"></div>
        <Link href="/">
          <Logo />
        </Link>
        <TextField
          name="search"
          placeholder="Busque um livro"
          className="header__search-input"
          icon={SEARCH_FIELD_ICON}
        />
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
            src={userPicture}
            alt="Favoritos"
            width={20}
            height={18.35}
          />
          <span className="header__user-info__name">Jucicreide</span>
        </section>
      </Container>

      <TabMenu options={INTRO_TAB_MENU_OPTIONS} className="header-tab-menu" />
    </div>
  )
}
