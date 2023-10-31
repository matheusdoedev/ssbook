'use client'

import { ErrorLayout } from '@/layouts'
import { ssbooksService } from '@/services'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

async function fetchData() {
  const { data: getUserPictureData } = await ssbooksService.getUserPicture()

  return getUserPictureData.userPicture
}

export default async function ErrorPage({ error }: ErrorProps) {
  const userPicture = await fetchData()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorLayout
      userPicture={userPicture}
      message="Ops. Aconteceu algo de errado."
    />
  )
}
