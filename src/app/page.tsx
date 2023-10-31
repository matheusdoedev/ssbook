import type { Metadata } from 'next'

import { Header } from '@/components'
import { HomeScreen } from '@/screens'
import { ssbooksService } from '@/services'

export const metadata: Metadata = {
  title: 'Pagina Inicial | SSBook'
}

async function fetchData() {
  const { data: getFavoriteBooksData } = await ssbooksService.getFavoriteBooks()

  const { data: getFavoriteAuthorsData } =
    await ssbooksService.getFavoriteAuthors()

  const { data: getLibraryBooksData } = await ssbooksService.getLibraryBooks()

  const { data: getUserPictureData } = await ssbooksService.getUserPicture()

  return {
    favoriteBooks: getFavoriteBooksData.favoriteBooks,
    libraryBooks: getLibraryBooksData.allBooks,
    favoriteAuthors: getFavoriteAuthorsData.favoriteAuthors,
    userPicture: getUserPictureData.userPicture
  }
}

export default async function Home() {
  const data = await fetchData()

  return (
    <>
      <Header userPicture={data.userPicture} />
      <HomeScreen data={data} />
    </>
  )
}
