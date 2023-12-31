import Image from 'next/image'

import { Container, SeeAllButton } from '@/components'
import { Author } from '@/interfaces'

import './FavoriteAuthors.styles.scss'

interface FavoriteAuthorsProps {
  favoriteAuthors: Author[]
  className?: string
}

export default function FavoriteAuthors({
  favoriteAuthors,
  className
}: FavoriteAuthorsProps) {
  const handleFavoriteAuthors = () =>
    favoriteAuthors.map(({ id, name, booksCount, picture }) => (
      <li key={id} className={`favorite-authors__list__item ${className}`}>
        <Image
          className="favorite-authors__list__item__picture"
          src={picture}
          alt={name}
          width={68}
          height={68}
        />
        <section className="favorite-authors__list__item__author-info">
          <h3 className="favorite-authors__list__item__author-info__title">
            {name}
          </h3>
          <span className="favorite-authors__list__item__author-info__books-count">
            {booksCount} livros
          </span>
        </section>
      </li>
    ))

  return (
    <section data-testid="favorite-authors" className="favorite-authors">
      <Container className="favorite-authors__container">
        <div className="favorite-authors__shape"></div>

        <div className="favorite-authors__head">
          <h2 className="favorite-authors__head__title">Artistas favoritos</h2>
          <SeeAllButton />
        </div>

        <ul className="favorite-authors__list">{handleFavoriteAuthors()}</ul>
      </Container>
    </section>
  )
}
