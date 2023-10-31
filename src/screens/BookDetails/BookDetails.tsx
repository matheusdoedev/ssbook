import Image from 'next/image'
import Link from 'next/link'

import { Container, LinkWithIcon } from '@/components'
import { Book } from '@/interfaces'

import './BookDetails.styles.scss'

interface BookDetailsScreenProps {
  bookDetails: Book
}

export default function BookDetailsScreen({
  bookDetails
}: BookDetailsScreenProps) {
  const { cover, name, author, description } = bookDetails

  const bookAbstract = {
    __html: description.replace(/\n/g, '<br />')
  }

  return (
    <section className="book-details">
      <div className="book-details__cover-mobile">
        <Image
          src={cover}
          alt={name}
          width={296}
          height={433}
          className="book-details__cover-mobile__cover"
        />

        <header className="book-details__cover-mobile__header">
          <Link href="/">
            <Image
              src="/assets/icons/back-icon.svg"
              alt="Voltar"
              width={16}
              height={14}
            />
          </Link>

          <button>
            <Image
              src="/assets/icons/burguer-icon.svg"
              alt="Menu"
              width={4}
              height={16}
            />
          </button>
        </header>
      </div>

      <Container className="book-details__container">
        <aside className="book-details__aside">
          <Image
            src={cover}
            alt={name}
            width={296}
            height={433}
            className="book-details__aside__cover"
          />
          <LinkWithIcon
            iconSrc="/assets/icons/hearth-icon.svg"
            label="Favoritar"
            iconWidth={24}
            iconHeight={24}
          />
          <LinkWithIcon
            iconSrc="/assets/icons/share-icon.svg"
            label="Compartilhar"
            iconWidth={24}
            iconHeight={24}
          />
          <LinkWithIcon
            iconSrc="/assets/icons/download-icon.svg"
            label="Salvar em uma lista"
            iconWidth={24}
            iconHeight={24}
          />
        </aside>

        <section className="book-details__content">
          <h2 className="book-details__content__title">{name}</h2>
          <span className="book-details__content__author">{author.name}</span>
          <div className="book-details__content__abstract">
            <div className="book-details__content__abstract__shape"></div>
            <p
              className="book-details__content__abstract__text"
              dangerouslySetInnerHTML={bookAbstract}></p>
          </div>

          <section>
            <h3 className="book-details__content__about-author__title">
              Sobre o Autor
            </h3>
            <p className="book-details__content__about-author__text">
              Os autores são criadores de mundos, arquitetos de sonhos e
              contadores de histórias. Eles têm a habilidade única de dar vida a
              personagens fictícios, explorar as complexidades da condição
              humana e transportar os leitores para lugares distantes e
              imaginários. Cada autor tem sua própria voz, seu estilo
              inconfundível e uma perspectiva única a oferecer ao mundo.
            </p>
          </section>
        </section>
      </Container>
    </section>
  )
}
