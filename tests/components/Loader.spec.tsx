import { render, screen } from '@testing-library/react'

import { Loader } from '@/components'

describe('Loader component', () => {
  it('should render when loading is true', () => {
    render(<Loader loading />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('should not render when loading is false', () => {
    render(<Loader />)

    expect(screen.queryByTestId('loader')).toBeNull()
  })
})
