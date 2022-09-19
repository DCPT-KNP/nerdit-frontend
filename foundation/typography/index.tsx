import {
  ElementType,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'

import { TypographyType } from './types'
import typoStyles from './typoStyles'

const DEFAULT_COMPONENT_TYPE = 'div' as const

interface TypoProps<T extends ElementType = typeof DEFAULT_COMPONENT_TYPE>
  extends HTMLAttributes<T> {
  type: TypographyType
  Component?: ElementType
  color?: string
}

const Typo = <T extends ElementType = typeof DEFAULT_COMPONENT_TYPE>(
  {
    type,
    children,
    Component = DEFAULT_COMPONENT_TYPE,
    color,
    ...rest
  }: PropsWithChildren<TypoProps>,
  ref: ForwardedRef<T>
) => {
  return (
    <Component
      ref={ref}
      css={typoStyles[type]}
      style={{ color: color }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default forwardRef(Typo)
