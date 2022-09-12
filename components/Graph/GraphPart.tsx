import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { Skill } from '../../constants/skills'
import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'
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
    <Container
      variant={variant}
      skill={skill}
      flexDirection="column"
      justifyContent={variant === 'big' ? 'flex-end' : 'center'}
    >
      <Text type="header1" color={palette.Base.White} variant={variant}>
        {skill}
      </Text>
    </Container>
  )
}

const Container = styled(Flex)<Props>`
  width: ${CONTAINER_WIDTH}rem;
  height: ${({ variant }) =>
    variant === 'big'
      ? `${CONTAINER_HEIGHT_LARGE}rem`
      : `${CONTAINER_HEIGHT_SMALL}rem`};
  background-color: ${({ skill }) => Colors[skill]};
`

const Text = styled(Typo)<Pick<Props, 'variant'>>`
  color: ${palette.Base.White};
  ${({ variant }) =>
    variant === 'big' &&
    css`
      margin-bottom: ${pxToRem(24)}rem;
    `}
  width: 100%;
  text-align: center;
`

export default GraphPart
