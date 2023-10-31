import { render, screen } from '@testing-library/react'

import { Container } from '@/components'

describe('Container component', () => {
  it('should render', () => {
    render(<Container>teste</Container>)

    expect(screen.getByTestId('container')).toBeInTheDocument()
  })
})
