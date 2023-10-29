'use client'

import { ChangeEvent, HTMLInputTypeAttribute, useLayoutEffect } from 'react'

import './TextField.styles.scss'

interface TextFieldProps {
  type?: HTMLInputTypeAttribute
  label?: string
  name: string
  placeholder?: string
  value?: string | number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

type InputOnFocusActions = 'on' | 'off'

export default function TextField({
  name,
  type = 'text',
  label,
  onChange,
  value,
  ...props
}: TextFieldProps) {
  const handleLabel = () =>
    label && (
      <label htmlFor={name} className="TextFieldLabel">
        {label}
      </label>
    )

  useLayoutEffect(() => {
    const inputWrapper = document.getElementById(
      'inputWrapper'
    ) as HTMLDivElement
    const input = document.getElementById(name) as HTMLInputElement

    const handleInputOnFocus = (action: InputOnFocusActions) => () => {
      if (action === 'on') {
        inputWrapper.classList.add('focus')
        return
      }
      inputWrapper.classList.remove('focus')
    }

    input.addEventListener('focusin', handleInputOnFocus('on'))
    input.addEventListener('focusout', handleInputOnFocus('off'))
  }, [])

  return (
    <div data-testid="text-field" className="text-field__wrapper">
      {handleLabel()}
      <div id="inputWrapper" className="text-field__input-wrapper">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="text-field__input"
          {...props}
        />
      </div>
    </div>
  )
}
