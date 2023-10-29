import { BookDetailsScreen } from '@/screens'
import { ssbooksService } from '@/services'

interface BookDetailsPageParams {
  params: { bookId: string }
}

async function fetchData(bookId: string) {
  const data = await ssbooksService.getBookDetails(bookId)

  return data.data.book
}

export default async function BookDetails({ params }: BookDetailsPageParams) {
  const bookDetails = await fetchData(params.bookId)

  return <BookDetailsScreen bookDetails={bookDetails} />
}
