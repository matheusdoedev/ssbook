import { ReactNode } from 'react'

import './Container.styles.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({
  children,
  className = ''
}: ContainerProps) {
  return <div className={`container ${className}`}>{children}</div>
}
