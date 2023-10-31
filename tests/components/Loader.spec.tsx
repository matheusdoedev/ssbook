import { render, screen } from '@testing-library/react'

import { Loader } from '@/components'

describe('Loader component', () => {
  it('should render', () => {
    render(<Loader loading />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})
