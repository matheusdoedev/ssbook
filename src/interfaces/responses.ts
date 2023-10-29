import { Author, Book } from '.'

export interface GetUserPictureDto {
  userPicture: string
}

export interface GetFavoriteBooksDto {
  favoriteBooks: Book[]
}

export interface GetFavoriteAuthorsDto {
  favoriteAuthors: Author[]
}

export interface GetLibraryBooksDto {
  allBooks: Book[]
}

export interface GetBookDetailsDto {
  book: Book
}
