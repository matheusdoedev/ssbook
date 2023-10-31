import Image from 'next/image'
import Link from 'next/link'

import { Container, TabMenu } from '@/components'
import { LIBRARY_TAB_MENU_OPTIONS } from '@/constants'
import { Book } from '@/interfaces'

import './Library.styles.scss'

interface LibraryProps {
  libraryBooks: Book[]
}

export default function Library({ libraryBooks }: LibraryProps) {
  const handleLibraryBooks = () =>
    libraryBooks
      .filter((_, index) => index < 9)
      .map(({ id, name, author, cover }) => (
        <Link key={id} href={`/book-details/${id}`}>
          <article className="library-books__book">
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
        </Link>
      ))

  return (
    <section data-testid="library" className="library">
      <Container>
        <h2 className="library__title">Biblioteca</h2>
      </Container>

      <TabMenu options={LIBRARY_TAB_MENU_OPTIONS} variant="outline-buttons" />

      <Container>
        <section className="library-books">{handleLibraryBooks()}</section>
      </Container>
    </section>
  )
}
