import { css } from '@emotion/react'

import pxToRem from '../../utils/pxToRem'
import { palette } from '../Palette'

export type ButtonVariant =
  | 'outlined_small'
  | 'outlined_big'
  | 'filled_primary'
  | 'filled_secondary'

export const basicStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

export const buttonStyles = {
  outlined_small: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.GRAY70};
    padding: ${pxToRem(8)}rem ${pxToRem(24)}rem;
    background-color: white;
    color: black;
    &:disabled {
      border-color: ${palette.GRAY40};
      color: ${palette.GRAY40};
    }
    &:hover {
      border-color: ${palette.GRAY50};
      background-color: ${palette.GRAY20};
      color: ${palette.GRAY50};
    }
  `,
  outlined_big: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.GRAY70};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
    background-color: white;
    color: black;
    &:disabled {
      border-color: ${palette.GRAY40};
      background-color: ${palette.GRAY10};
      color: ${palette.GRAY40};
    }
    &:hover {
      border-color: ${palette.GRAY50};
      background-color: ${palette.GRAY20};
      color: ${palette.GRAY50};
    }
  `,
  filled_primary: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.GRAY70};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
    background-color: ${palette.GRAY70};
    color: ${palette.GRAY10};
    &:disabled {
      border-color: ${palette.GRAY40};
      background-color: ${palette.GRAY40};
      color: ${palette.GRAY10};
    }
    &:hover {
      border-color: ${palette.GRAY50};
      background-color: ${palette.GRAY50};
      color: ${palette.GRAY10};
    }
  `,
  filled_secondary: css`
    ${basicStyle};
    border: ${pxToRem(1)}rem solid ${palette.GRAY20};
    padding: ${pxToRem(20)}rem ${pxToRem(64)}rem;
    background-color: ${palette.GRAY20};
    &:disabled {
      background-color: ${palette.GRAY20};
      color: ${palette.GRAY40};
    }
    &:hover {
      background-color: ${palette.GRAY30};
      color: ${palette.GRAY50};
    }
  `,
}
