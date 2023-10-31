import type { Metadata } from 'next'

import { ErrorLayout } from '@/layouts'
import { ssbooksService } from '@/services'

export const metadata: Metadata = {
  title: 'Pagina não encontrada | SSBook'
}

async function fetchData() {
  const { data: getUserPictureData } = await ssbooksService.getUserPicture()

  return getUserPictureData.userPicture
}

export default async function NotFound() {
  const userPicture = await fetchData()

  return (
    <ErrorLayout
      userPicture={userPicture}
      message="Ops. Página não encontrada."
    />
  )
}
