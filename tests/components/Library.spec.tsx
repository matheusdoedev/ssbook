import { render, screen } from '@testing-library/react'

import { Library } from '@/components'

import { booksMock } from '@tests/mocks'

describe('Library component', () => {
  it('should render', () => {
    render(<Library libraryBooks={booksMock(9)} />)

    expect(screen.getByTestId('library')).toBeInTheDocument()
  })
})
