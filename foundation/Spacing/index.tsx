import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  rem: number
  inline?: boolean
}

const normalStyle = (rem: number) => css`
  height: ${rem}px;
`

const inlineStyle = (rem: number) => css`
  display: inline;
  width: ${rem}px;
`

const Spacing = styled('div', {
  shouldForwardProp: (prop) => prop !== 'rem',
})<Props>`
  flex-shrink: 0;
  ${({ inline, rem }) => (inline ? inlineStyle(rem) : normalStyle(rem))}
`

export default Spacing
