import Image from 'next/image'

import './LinkWithIcon.styles.scss'

interface LinkWithIconProps {
  iconSrc: string
  iconWidth: number
  iconHeight: number
  label: string
  isActive?: boolean
}

export default function LinkWithIcon({
  label,
  iconHeight,
  iconSrc,
  iconWidth,
  isActive
}: LinkWithIconProps) {
  return (
    <button className={`link-with-icon ${isActive ? 'active' : ''}`}>
      <Image src={iconSrc} alt={label} width={iconWidth} height={iconHeight} />
      {label}
    </button>
  )
}
