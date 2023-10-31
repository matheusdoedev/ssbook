import type { Metadata } from 'next'

import { Header, Loader } from '@/components'
import { ssbooksService } from '@/services'

export const metadata: Metadata = {
  title: 'Carregando... | SSBook'
}

async function fetchData() {
  const { data: getUserPictureData } = await ssbooksService.getUserPicture()

  return getUserPictureData.userPicture
}

export default async function DefaultLoading() {
  const userPicture = await fetchData()

  return (
    <>
      <Header userPicture={userPicture} hideInMobile />
      <div style={{ padding: '128px 0', minHeight: '100vh' }}>
        <Loader loading />
      </div>
    </>
  )
}
