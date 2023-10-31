import { Author, Book } from '@/interfaces'

export interface HomeScreenData {
  favoriteBooks: Book[]
  libraryBooks: Book[]
  favoriteAuthors: Author[]
}
