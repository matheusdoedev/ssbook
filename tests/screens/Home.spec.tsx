import { render, screen } from '@testing-library/react'

import { HomeScreenData } from '@/interfaces'
import { HomeScreen } from '@/screens'

import { authorsMock, booksMock } from '@tests/mocks'

const HOME_SCREEN_DATA: HomeScreenData = {
  favoriteBooks: booksMock(6),
  favoriteAuthors: authorsMock(3),
  libraryBooks: booksMock(9)
}

describe('Home page', () => {
  it('should render', () => {
    render(<HomeScreen data={HOME_SCREEN_DATA} />)

    expect(screen.getByTestId('home')).toBeInTheDocument()
  })
})
