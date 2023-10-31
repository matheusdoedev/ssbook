import { render, screen } from '@testing-library/react'

import { LinkWithIcon } from '@/components'

describe('LinkWithIcon component', () => {
  it('should render', () => {
    render(
      <LinkWithIcon
        label="Favoritos"
        iconSrc="/assets/icons/hearth-icon.svg"
        iconHeight={24}
        iconWidth={24}
      />
    )

    expect(screen.getByTestId('link-with-icon')).toBeInTheDocument()
  })
})
