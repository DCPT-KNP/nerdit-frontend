import { css } from '@emotion/react'

import pxToRem from '../../utils/pxToRem'
import { TypographyType } from './typography.types'

export const typography: TypographyType = {
  headline: css`
    font-family: Pretendard, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(56)}rem;
    line-height: ${pxToRem(68)}rem;
  `,
  title1: css`
    font-family: Pretendard, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(24)}rem;
    line-height: ${pxToRem(32)}rem;
  `,
  title2: css`
    font-family: Inter, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
  `,
  title3: css`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: ${pxToRem(16)}rem;
    line-height: ${pxToRem(20)}rem;
  `,
  subtitle1: css`
    font-family: Pretendard, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(16)}rem;
    line-height: ${pxToRem(22)}rem;
  `,
  subtitle2: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(14)}rem;
    line-height: ${pxToRem(17)}rem;
  `,
  body1: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(29)}rem;
  `,
  body2: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(14)}rem;
    line-height: ${pxToRem(20)}rem;
  `,
  body3: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(12)}rem;
    line-height: ${pxToRem(18)}rem;
  `,
  caption: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(11)}rem;
    line-height: ${pxToRem(14)}rem;
  `,
  subheadline: css`
    font-family: Inter, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(40)}rem;
    line-height: ${pxToRem(48)}rem;
  `,
  label1: css`
    font-family: Inter, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(40)}rem;
    line-height: ${pxToRem(48)}rem;
  `,
  label2: css`
    font-family: Inter, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
  `,
}
