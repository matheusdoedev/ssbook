import { render, screen } from '@testing-library/react'

import { FavoriteAuthors } from '@/components'

import { authorsMock } from '@tests/mocks'

describe('FavoriteAuthors component', () => {
  it('should render', () => {
    render(<FavoriteAuthors favoriteAuthors={authorsMock(3)} />)

    expect(screen.getByTestId('favorite-authors')).toBeInTheDocument()
  })
})
