import { Container } from '@/components'
import { TabMenuProps } from '@/interfaces'

import './TabMenu.styles.scss'

export default function TabMenu({
  options,
  variant = 'default',
  className = ''
}: TabMenuProps) {
  const handleTabMenuOptions = () =>
    options.map(({ label, isActive }) => (
      <li key={label} className="tab-menu__item">
        <button
          className={`tab-menu__item__button ${variant} ${
            isActive ? 'active' : ''
          }`}>
          {label}
        </button>
        {isActive && variant === 'default' && (
          <div className="tab-menu__item__select-shape"></div>
        )}
      </li>
    ))

  return (
    <section data-testid="tab-menu" className={`tab-menu ${className}`}>
      <Container>
        <ul className={`tab-menu__list ${variant}`}>
          {handleTabMenuOptions()}
        </ul>
      </Container>
    </section>
  )
}
