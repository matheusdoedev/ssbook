export interface Book {
  id: string
  name: string
  author: Author
  cover: string
  description: string
}

export interface Author {
  id: string
  name: string
  booksCount: number
  picture: string
}
