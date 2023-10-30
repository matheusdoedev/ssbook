export interface TabMenuOption {
  label: string
  isActive?: boolean
}

export interface TabMenuProps {
  options: TabMenuOption[]
  variant?: 'default' | 'outline-buttons'
  className?: string
}
