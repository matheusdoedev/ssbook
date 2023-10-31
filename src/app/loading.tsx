import type { Metadata } from 'next'

import { Header, Loader } from '@/components'

export const metadata: Metadata = {
  title: 'Carregando... | SSBook'
}

export default function DefaultLoading() {
  return (
    <>
      <Header hideInMobile />
      <div style={{ padding: '128px 0', minHeight: '100vh' }}>
        <Loader loading />
      </div>
    </>
  )
}
