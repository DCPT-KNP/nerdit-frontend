import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import palette from '../../palette'
import Typo from '../../typography'

export interface NavigatorTabProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean
}

const NavigatorTab = ({ isActive, children, ...rest }: NavigatorTabProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Typo type="title1" color={isActive ? palette.Primary : palette.Gray[30]}>
        {children}
      </Typo>
    </Container>
  )
}

const Container = styled.div<{ isActive: boolean }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  white-space: nowrap;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid ${palette.Primary};
    `}
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`

export default NavigatorTab
