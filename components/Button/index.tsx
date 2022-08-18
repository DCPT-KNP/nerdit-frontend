import React, { HTMLAttributes, ReactNode } from 'react'

import { buttonStyles, ButtonVariant } from './constants'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  children: ReactNode
}

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return <button css={buttonStyles[variant]} {...rest}></button>
}

export default Button
