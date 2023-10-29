import Image from 'next/image'

const LOGO_VARIANTS = {
  default: '/assets/icons/ssbook.svg',
  white: '/assets/icons/ssbook-white.svg'
}

interface LogoProps {
  variant?: keyof typeof LOGO_VARIANTS
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const logoImg = LOGO_VARIANTS[variant]

  return <Image src={logoImg} alt="SSBook" width={76.9} height={23.76} />
}
