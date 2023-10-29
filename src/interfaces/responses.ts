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

export interface Book {
  id: string
  name: string
  author: Author
  cover: string
}

export interface Author {
  id: string
  name: string
  booksCount: number
  picture: string
}
