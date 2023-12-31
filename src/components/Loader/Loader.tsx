'use client'

import { CSSProperties } from 'react'
import BarLoader from 'react-spinners/BarLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#A076F2'
}

interface LoaderProps {
  loading?: boolean
  color?: string
}

export default function Loader({ loading, color = '#A076F2' }: LoaderProps) {
  return (
    <BarLoader
      data-testid="loader"
      color={color}
      loading={!!loading}
      cssOverride={override}
      width={200}
    />
  )
}
