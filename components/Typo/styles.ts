import { css, SerializedStyles } from '@emotion/react'

import pxToRem from '../../utils/pxToRem'
import { TypoType } from './constants'

const typoStyles: Record<TypoType, SerializedStyles> = {
  H: css`
    font-family: Pretendard, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(56)}rem;
    line-height: ${pxToRem(68)}rem;
  `,
  T1: css`
    font-family: Pretendard, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(24)}rem;
    line-height: ${pxToRem(32)}rem;
  `,
  T2: css`
    font-family: Inter, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
  `,
  T3: css`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: ${pxToRem(16)}rem;
    line-height: ${pxToRem(20)}rem;
  `,
  S1: css`
    font-family: Pretendard, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(16)}rem;
    line-height: ${pxToRem(22)}rem;
  `,
  S2: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(14)}rem;
    line-height: ${pxToRem(17)}rem;
  `,
  B1: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(29)}rem;
  `,
  B2: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(14)}rem;
    line-height: ${pxToRem(20)}rem;
  `,
  B3: css`
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(12)}rem;
    line-height: ${pxToRem(18)}rem;
  `,
  CAP: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: ${pxToRem(11)}rem;
    line-height: ${pxToRem(14)}rem;
  `,
  SH: css`
    font-family: Inter, sans-serif;
    font-weight: bold;
    font-size: ${pxToRem(40)}rem;
    line-height: ${pxToRem(48)}rem;
  `,
  L1: css`
    font-family: Inter, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(40)}rem;
    line-height: ${pxToRem(48)}rem;
  `,
  L2: css`
    font-family: Inter, sans-serif;
    font-weight: 900;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
  `,
}

export default typoStyles
