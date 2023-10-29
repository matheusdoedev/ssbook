import Image from 'next/image'

import './LinkWithIcon.styles.scss'

interface LinkWithIconProps {
  iconSrc: string
  iconWidth: number
  iconHeight: number
  label: string
}

export default function LinkWithIcon({
  label,
  iconHeight,
  iconSrc,
  iconWidth
}: LinkWithIconProps) {
  return (
    <button className="link-with-icon">
      <Image src={iconSrc} alt={label} width={iconWidth} height={iconHeight} />
      {label}
    </button>
  )
}
