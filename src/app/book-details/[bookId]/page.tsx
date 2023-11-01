import { Metadata } from 'next'

import { Header } from '@/components'
import { GenerateMetadataProps } from '@/interfaces'
import { BookDetailsScreen } from '@/screens'
import { ssbooksService } from '@/services'

interface BookDetailsPageParams {
  bookId: string
}

interface BookDetailsPageProps {
  params: BookDetailsPageParams
}

async function fetchData(bookId: string) {
  const getBookDetailsData = await ssbooksService.getBookDetails(bookId)

  const { data: getUserPictureData } = await ssbooksService.getUserPicture()

  return {
    book: getBookDetailsData.data.book,
    userPicture: getUserPictureData.userPicture
  }
}

export async function generateMetadata({
  params
}: GenerateMetadataProps<BookDetailsPageParams>): Promise<Metadata> {
  const bookId = params.bookId

  const { book } = await fetchData(bookId)

  return {
    title: `${book.name} | SSBook`,
    description: book.description
  }
}

export default async function BookDetails({ params }: BookDetailsPageProps) {
  const { book, userPicture } = await fetchData(params.bookId)

  return (
    <>
      <Header userPicture={userPicture} hideInMobile />
      <BookDetailsScreen bookDetails={book} />
    </>
  )
}
