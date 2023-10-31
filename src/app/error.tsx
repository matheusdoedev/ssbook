'use client'

import { ErrorLayout } from '@/layouts'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorLayout message="Ops. Aconteceu algo de errado." />
}
