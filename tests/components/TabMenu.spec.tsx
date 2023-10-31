import { render, screen } from '@testing-library/react'

import { TabMenu } from '@/components'
import { INTRO_TAB_MENU_OPTIONS } from '@/constants'

describe('TabMenu component', () => {
  it('should render', () => {
    render(<TabMenu options={INTRO_TAB_MENU_OPTIONS} />)

    expect(screen.getByTestId('tab-menu')).toBeInTheDocument()
  })
})
