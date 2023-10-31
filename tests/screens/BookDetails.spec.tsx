import { render, screen } from '@testing-library/react'

import { BookDetailsScreen } from '@/screens'

import { FakeBook } from '@tests/fakes'

describe('BookDetails page', () => {
  it('should render', () => {
    render(<BookDetailsScreen bookDetails={FakeBook()} />)

    expect(screen.getByTestId('book-details')).toBeInTheDocument()
  })
})
