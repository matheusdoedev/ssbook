import { render, screen } from '@testing-library/react'

import { TextField } from '@/components'

describe('TextField component', () => {
  it('should render', () => {
    render(<TextField name="test" />)

    expect(screen.getByTestId('text-field')).toBeInTheDocument()
  })

  it('should add focus class to input wrapper when input is focused', () => {
    render(<TextField name="test" />)

    const inputWrapper = screen.getByTestId('text-field-wrapper')
    const input = screen.getByTestId('input')

    input.focus()

    expect(inputWrapper).toHaveClass('focus')
  })

  it('should not add focus class to input wrapper when input is not focused', () => {
    render(
      <>
        <TextField name="test" />
        <input data-testid="input-2" name="test-2" />
      </>
    )

    const inputWrapper = screen.getByTestId('text-field-wrapper')
    const input = screen.getByTestId('input')
    const input2 = screen.getByTestId('input-2')

    input.focus()
    input2.focus()

    expect(inputWrapper.classList.contains('focus')).toBe(false)
  })
})
