import { TabMenuOption } from '@/interfaces'

export const INTRO_TAB_MENU_OPTIONS: TabMenuOption[] = [
  { label: 'Meus livros', isActive: true },
  { label: 'Emprestados' }
]

export const LIBRARY_TAB_MENU_OPTIONS: TabMenuOption[] = [
  { label: 'Todos', isActive: true },
  { label: 'Romance' },
  { label: 'Aventura' },
  { label: 'Comédia' }
]

export const FOOTER_MOBILE_NAV_OPTIONS = [
  {
    src: '/assets/icons/home-icon.svg',
    width: 24,
    height: 24,
    label: 'Início',
    isActive: true
  },
  {
    src: '/assets/icons/add-icon.svg',
    width: 24,
    height: 24,
    label: 'Adicionar'
  },
  {
    src: '/assets/icons/share-icon.svg',
    width: 24,
    height: 24,
    label: 'Buscar'
  },
  {
    src: '/assets/icons/hearth-icon.svg',
    width: 24,
    height: 24,
    label: 'Favoritos'
  }
]
