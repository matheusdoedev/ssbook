import { render, screen } from '@testing-library/react'

import { FavoriteBooks } from '@/components'

import { booksMock } from '@tests/mocks'

describe('FavoriteBooks component', () => {
  it('should render', () => {
    render(<FavoriteBooks favoriteBooks={booksMock(2)} />)

    expect(screen.getByTestId('favorite-books')).toBeInTheDocument()
  })
})
