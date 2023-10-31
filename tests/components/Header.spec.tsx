import { render, screen } from '@testing-library/react'

import { Header } from '@/components'

import { FakeUserPicture } from '@tests/fakes'

describe('Header component', () => {
  it('should render', async () => {
    render(<Header userPicture={FakeUserPicture()} />)

    expect(await screen.findByTestId('header')).toBeInTheDocument()
  })

  it('should have header--mobile className if hideInMobile is true', async () => {
    render(<Header userPicture={FakeUserPicture()} hideInMobile />)

    expect(await screen.findByTestId('header')).toHaveClass('header--mobile')
  })
})
