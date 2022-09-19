import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import { ButtonColorByState, ButtonVariant } from './constants'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} variant={variant}>
      <Typo type="title2">{children}</Typo>
    </Container>
  )
}

const filledStyle = css`
  color: ${palette.Base.White};
  background-color: ${ButtonColorByState.Enabled};

  &:hover {
    background-color: ${ButtonColorByState.Hover};
  }
  &:disabled {
    background-color: ${ButtonColorByState.Disabled};
  }
`

const outlinedStyle = css`
  background-color: ${palette.Base.White};
  border-color: ${ButtonColorByState.Enabled};
  color: ${ButtonColorByState.Enabled};

  &:hover {
    border-color: ${ButtonColorByState.Hover};
    color: ${ButtonColorByState.Hover};
  }
  &:disabled {
    border-color: ${ButtonColorByState.Disabled};
    color: ${ButtonColorByState.Disabled};
  }
`

const Container = styled.button<{ variant: ButtonVariant }>`
  border: ${pxToRem(1)}px solid ${palette.Primary[10]};
  padding: 0.75rem 2rem;
  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.Filled:
        return filledStyle
      case ButtonVariant.Outlined:
        return outlinedStyle
    }
  }}
`

export default Button
