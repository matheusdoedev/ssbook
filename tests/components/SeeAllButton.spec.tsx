import { render, screen } from '@testing-library/react'

import { SeeAllButton } from '@/components'

describe('SeeAllButton component', () => {
  it('should render', () => {
    render(<SeeAllButton />)

    expect(screen.getByTestId('see-all-button')).toBeInTheDocument()
  })
})
