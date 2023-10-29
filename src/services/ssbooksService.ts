import {
  ApolloResponse,
  GetFavoriteBooksDto,
  GetFavoriteAuthorsDto,
  GetUserPictureDto,
  GetLibraryBooksDto
} from '@/interfaces'
import { fetchProvider } from '@/providers'
import { ssbookQueries } from '@/schemas'

export const ssbooksService = {
  getUserPicture(): ApolloResponse<GetUserPictureDto> {
    return fetchProvider.query({
      query: ssbookQueries.getUserAvatar
    })
  },

  getFavoriteBooks(): ApolloResponse<GetFavoriteBooksDto> {
    return fetchProvider.query({
      query: ssbookQueries.getFavoriteBooks
    })
  },

  getFavoriteAuthors(): ApolloResponse<GetFavoriteAuthorsDto> {
    return fetchProvider.query({
      query: ssbookQueries.getFavoriteAuthors
    })
  },

  getLibraryBooks(): ApolloResponse<GetLibraryBooksDto> {
    return fetchProvider.query({
      query: ssbookQueries.getLibraryBooks
    })
  }
}
