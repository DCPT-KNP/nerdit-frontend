import { css, SerializedStyles } from '@emotion/react'

import { TypographyType } from './types'

const typoStyles: Record<TypographyType, SerializedStyles> = {
  [TypographyType.Display1]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  `,
  [TypographyType.Display2]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  `,
  [TypographyType.Header1]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  `,
  [TypographyType.Header2]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  `,
  [TypographyType.Title1]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
  `,
  [TypographyType.Title2]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 150%;
  `,
  [TypographyType.Body1]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
  `,
  [TypographyType.Body2]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 150%;
  `,
  [TypographyType.Caption1]: css`
    font-family: Pretendard, sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 150%;
  `,
}

export default typoStyles
