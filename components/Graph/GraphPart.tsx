import styled from '@emotion/styled'
import React from 'react'

import { Skill } from '../../constants/skills'
import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import { Colors } from './constants'

const CONTAINER_WIDTH = pxToRem(126)
const CONTAINER_HEIGHT_SMALL = pxToRem(126)
const CONTAINER_HEIGHT_LARGE = pxToRem(544)

interface Props {
  variant: 'big' | 'small'
  skill: Skill
}

const GraphPart = ({ variant, skill }: Props) => {
  return (
    <Container variant={variant} skill={skill}>
      <Text type="title1" color={palette.Base.White}>
        {skill}
      </Text>
    </Container>
  )
}

const Container = styled.div<Props>`
  width: ${CONTAINER_WIDTH}rem;
  height: ${({ variant }) =>
    variant === 'big'
      ? `${CONTAINER_HEIGHT_LARGE}rem`
      : `${CONTAINER_HEIGHT_SMALL}rem`};
  background-color: ${({ skill }) => Colors[skill]};
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const Text = styled(Typo)`
  color: ${palette.Base.White};
  margin-bottom: pxToRem(24) rem;
  width: 100%;
  text-align: center;
`

export default GraphPart
