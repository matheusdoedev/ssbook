import type { Metadata } from 'next'

import { NotFoundScreen } from '@/screens'
import { ErrorLayout } from '@/layouts'

export const metadata: Metadata = {
  title: 'Pagina não encontrada | SSBook'
}

export default function NotFound() {
  return <ErrorLayout message="Ops. Página não encontrada." />
}