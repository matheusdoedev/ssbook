import { Header, Loader } from '@/components'

export default function DefaultLoading() {
  return (
    <>
      <Header />
      <div style={{ padding: '128px 0', minHeight: '100vh' }}>
        <Loader loading />
      </div>
    </>
  )
}
