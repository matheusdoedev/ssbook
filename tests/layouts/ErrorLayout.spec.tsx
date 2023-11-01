import { render, screen } from '@testing-library/react'

import { ErrorLayout } from '@/layouts'
import { FakeUserPicture } from '@tests/fakes'

describe('ErrorLayout', () => {
  it('should render', () => {
    render(
      <ErrorLayout
        message="Ops. Página não encontrada."
        userPicture={FakeUserPicture()}
      />
    )

    expect(screen.getByTestId('error-layout')).toBeInTheDocument()
  })
})
