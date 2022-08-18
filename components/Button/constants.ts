import { css, SerializedStyles } from '@emotion/react'

import pxToRem from '../../utils/pxToRem'
import { palette } from '../Palette'

export type ButtonVariant =
  | 'outlined_small'
  | 'outlined_big'
  | 'filled'
  | 'filled_with_icon_primary'
  | 'filled_with_icon_secondary'

export const basicStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const filledStyle = css`
  ${basicStyle};
  border: ${pxToRem(1)}rem solid ${palette.gray70};
  background-color: ${palette.gray70};
  color: ${palette.gray10};
  &:disabled {
    border-color: ${palette.gray40};
    background-color: ${palette.gray40};
    color: ${palette.gray10};
  }
  &:hover {
    border-color: ${palette.gray50};
    background-color: ${palette.gray50};
    color: ${palette.gray10};
  }
`

export const buttonStyles: Record<ButtonVariant, SerializedStyles> = {
  outlined_small: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.gray70};
    padding: ${pxToRem(8)}rem ${pxToRem(24)}rem;
    background-color: white;
    color: black;
    &:disabled {
      border-color: ${palette.gray40};
      color: ${palette.gray40};
    }
    &:hover {
      border-color: ${palette.gray50};
      background-color: ${palette.gray20};
      color: ${palette.gray50};
    }
  `,
  outlined_big: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.gray70};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
    background-color: white;
    color: black;
    &:disabled {
      border-color: ${palette.gray40};
      background-color: ${palette.gray10};
      color: ${palette.gray40};
    }
    &:hover {
      border-color: ${palette.gray50};
      background-color: ${palette.gray20};
      color: ${palette.gray50};
    }
  `,
  filled: css`
    ${filledStyle};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
  `,
  filled_with_icon_primary: css`
    ${filledStyle};
    padding: ${pxToRem(20)}rem ${pxToRem(56)}rem ${pxToRem(20)}rem
      ${pxToRem(64)}rem;
  `,
  filled_with_icon_secondary: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.gray20};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
    background-color: ${palette.gray20};
    &:disabled {
      background-color: ${palette.gray20};
      color: ${palette.gray40};
    }
    &:hover {
      background-color: ${palette.gray30};
      color: ${palette.gray50};
    }
  `,
}
