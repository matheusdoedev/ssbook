import { render, screen } from '@testing-library/react'

import { Footer } from '@/components'

describe('Footer component', () => {
  it('should render', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
