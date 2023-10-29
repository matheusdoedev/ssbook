import Image from 'next/image'

import { Container, SeeAllButton } from '@/components'
import { ssbooksService } from '@/services'

import './Home.styles.scss'

const TAB_MENU_OPTIONS = [
  { label: 'Meus livros', isActive: true },
  { label: 'Emprestados' }
]

const LIBRARY_TAB_MENU_OPTIONS = [
  { label: 'Todos', isActive: true },
  { label: 'Romance' },
  { label: 'Aventura' },
  { label: 'Comédia' }
]

export default async function HomeScreen() {
  const { data: getFavoriteBooksData } = await ssbooksService.getFavoriteBooks()

  const { data: getFavoriteAuthorsData } =
    await ssbooksService.getFavoriteAuthors()

  const { data: getLibraryBooksData } = await ssbooksService.getLibraryBooks()

  const handleTabMenuOptions = () =>
    TAB_MENU_OPTIONS.map(({ label, isActive }) => (
      <li key={label} className="tab-menu__item">
        <button className="tab-menu__item__button">{label}</button>
        {isActive && <div className="tab-menu__item__select-shape"></div>}
      </li>
    ))

  const handleLibraryTabMenuOptions = () =>
    LIBRARY_TAB_MENU_OPTIONS.map(({ label, isActive }) => (
      <li key={label}>
        <button
          className={`library__tab-menu__item__button ${
            isActive ? 'active' : ''
          }`}>
          {label}
        </button>
      </li>
    ))

  const handleFavoriteBooks = () =>
    getFavoriteBooksData.favoriteBooks
      .filter((_, index) => index < 6)
      .map(({ id, name, author, cover }) => (
        <li key={id} className="favorite-books__list__item">
          <Image
            src={cover}
            alt={name}
            width={136}
            height={198}
            className="favorite-books__list__item__cover"
          />
          <h3 className="favorite-books__list__item__title">{name}</h3>
          <span className="favorite-books__list__item__author">
            {author.name}
          </span>
        </li>
      ))

  const handleFavoriteAuthors = () =>
    getFavoriteAuthorsData.favoriteAuthors.map(
      ({ id, name, booksCount, picture }) => (
        <li key={id} className="favorite-artists__list__item">
          <Image
            className="favorite-artists__list__item__picture"
            src={picture}
            alt={name}
            width={68}
            height={68}
          />
          <section className="favorite-artists__list__item__author-info">
            <h3 className="favorite-artists__list__item__author-info__title">
              {name}
            </h3>
            <span className="favorite-artists__list__item__author-info__books-count">
              {booksCount} livros
            </span>
          </section>
        </li>
      )
    )

  const handleLibraryBooks = () =>
    getLibraryBooksData.allBooks
      .filter((_, index) => index < 9)
      .map(({ id, name, author, cover }) => (
        <article key={id} className="library-books__book">
          <Image
            src={cover}
            alt={name}
            width={68}
            height={100}
            className="library-books__book__cover"
          />
          <section className="library-books__book__info">
            <h3 className="library-books__book__info__title">{name}</h3>
            <span className="library-books__book__info__author">
              {author.name}
            </span>
          </section>
        </article>
      ))

  return (
    <>
      <section className="home">
        <Container>
          <ul className="tab-menu">{handleTabMenuOptions()}</ul>
        </Container>
      </section>

      <section className="favorite-books">
        <Container>
          <section className="favorite-books__head">
            <h2 className="favorite-books__head__title">Livros favoritos</h2>
            <SeeAllButton />
          </section>

          <ul className="favorite-books__list">{handleFavoriteBooks()}</ul>
        </Container>
      </section>

      <div className="bottom-sections">
        <div className="bottom-sections__shape"></div>

        <section className="favorite-artists">
          <Container>
            <h2 className="favorite-artists__title">Artistas favoritos</h2>

            <ul className="favorite-artists__list">
              {handleFavoriteAuthors()}
            </ul>
          </Container>
        </section>

        <section className="library">
          <Container>
            <h2 className="library__title">Biblioteca</h2>

            <ul className="library__tab-menu">
              {handleLibraryTabMenuOptions()}
            </ul>

            <section className="library-books">{handleLibraryBooks()}</section>
          </Container>
        </section>
      </div>
    </>
  )
}
