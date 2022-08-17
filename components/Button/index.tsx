import React, { HTMLAttributes, HTMLProps, ReactNode } from 'react'

import { buttonStyles, ButtonVariant } from './constants'

interface ButtonProps extends Pick<HTMLProps<HTMLButtonElement>, 'type'> {
  variant: ButtonVariant
  children: ReactNode
}

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button css={buttonStyles[variant]} {...rest}>
      {children}
    </button>
  )
}

export default Button
