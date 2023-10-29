import { HomeScreen } from '@/screens'
import { ssbooksService } from '@/services'

async function fetchData() {
  const { data: getFavoriteBooksData } = await ssbooksService.getFavoriteBooks()

  const { data: getFavoriteAuthorsData } =
    await ssbooksService.getFavoriteAuthors()

  const { data: getLibraryBooksData } = await ssbooksService.getLibraryBooks()

  return {
    favoriteBooks: getFavoriteBooksData.favoriteBooks,
    libraryBooks: getLibraryBooksData.allBooks,
    favoriteAuthors: getFavoriteAuthorsData.favoriteAuthors
  }
}

export default async function Home() {
  const data = await fetchData()

  return <HomeScreen data={data} />
}
