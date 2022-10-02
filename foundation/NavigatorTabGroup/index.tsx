import styled from '@emotion/styled'
import React from 'react'

import palette from '../palette'
import NavigatorTab, { NavigatorTabProps } from './NavigatorTab'

const Container = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  background-color: ${palette.Base.White};

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

interface Props {
  childProps: Omit<NavigatorTabProps, 'isActive'>[]
  activeIndex: number
}

const NavigatorTabGroup = ({ activeIndex, childProps }: Props) => {
  return (
    <Container>
      {childProps.map((childProp, index) => (
        <NavigatorTab
          key={index}
          {...childProp}
          isActive={activeIndex === index}
        />
      ))}
    </Container>
  )
}

export default NavigatorTabGroup
