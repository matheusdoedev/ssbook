import Image from 'next/image'
import Link from 'next/link'

import { Container, SeeAllButton } from '@/components'
import { Book } from '@/interfaces'

import './FavoriteBooks.styles.scss'

interface FavoriteBooksProps {
  favoriteBooks: Book[]
  className?: string
}

export default function FavoriteBooks({
  className = '',
  favoriteBooks
}: FavoriteBooksProps) {
  const handleFavoriteBooks = () =>
    favoriteBooks
      .filter((_, index) => index < 6)
      .map(({ id, name, author, cover }) => (
        <li key={id}>
          <Link
            href={`/book-details/${id}`}
            className="favorite-books__list__button">
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
          </Link>
        </li>
      ))

  return (
    <section className={`favorite-books ${className}`}>
      <Container>
        <section className="favorite-books__head">
          <h2 className="favorite-books__head__title">Livros favoritos</h2>
          <SeeAllButton />
        </section>

        <ul className="favorite-books__list">{handleFavoriteBooks()}</ul>
      </Container>
    </section>
  )
}
