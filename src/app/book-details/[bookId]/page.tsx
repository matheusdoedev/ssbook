import { Metadata } from 'next'

import { Header, Loader } from '@/components'
import { BookDetailsScreen } from '@/screens'
import { ssbooksService } from '@/services'
import { GenerateMetadataProps } from '@/interfaces'

interface BookDetailsPageParams {
  bookId: string
}

interface BookDetailsPageProps {
  params: BookDetailsPageParams
}

async function fetchData(bookId: string) {
  const data = await ssbooksService.getBookDetails(bookId)

  return data.data.book
}

export async function generateMetadata({
  params
}: GenerateMetadataProps<BookDetailsPageParams>): Promise<Metadata> {
  const bookId = params.bookId

  const data = await fetchData(bookId)

  return {
    title: `${data.name} | SSBook`,
    description: data.description
  }
}

export default async function BookDetails({ params }: BookDetailsPageProps) {
  const bookDetails = await fetchData(params.bookId)

  return (
    <>
      <Header hideInMobile />
      <BookDetailsScreen bookDetails={bookDetails} />
    </>
  )
}
