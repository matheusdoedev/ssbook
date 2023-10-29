import { gql } from '@apollo/client'

export const ssbookQueries = {
  getUserAvatar: gql`
    query {
      userPicture
    }
  `,

  getFavoriteBooks: gql`
    query {
      favoriteBooks {
        id
        name
        author {
          name
        }
        cover
      }
    }
  `,

  getFavoriteAuthors: gql`
    query {
      favoriteAuthors {
        id
        name
        picture
        booksCount
      }
    }
  `,

  getLibraryBooks: gql`
    query {
      allBooks {
        id
        name
        cover
        author {
          name
        }
      }
    }
  `
}
