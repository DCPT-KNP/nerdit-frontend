import styled from '@emotion/styled'
import React from 'react'

import { Breakpoints } from '../../constants/breakpoints'
import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'
import { Colors, GraphPartVariant, SkillChoose } from './constants'
import SmileIcon from './images/smileImage.svg'

interface Props {
  variant: GraphPartVariant
  skill: SkillChoose
}

const GraphPart = ({ variant, skill }: Props) => {
  return (
    <Container
      variant={variant}
      skill={skill}
      flexDirection="column"
      justifyContent="flex-end"
    >
      {skill === SkillChoose.Choose && <Img src={SmileIcon} />}
      <Text type="header1" color={palette.Base.White}>
        {skill}
      </Text>
    </Container>
  )
}

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.25rem;
  @media (max-width: ${Breakpoints.ContentArea}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const Text = styled(Typo)`
  color: ${palette.Base.White};
  width: 100%;
  text-align: center;
  @media (max-width: ${Breakpoints.ContentArea}) {
    font-size: ${pxToRem(10)}rem;
  }
`

const Container = styled(Flex)<Props>`
  flex: 1;
  aspect-ratio: ${({ variant }) => (variant === 'small' ? 1 : undefined)};
  height: ${({ variant }) => (variant === 'big' ? '100%' : undefined)};
  background-color: ${({ skill }) => Colors[skill]};
  padding-bottom: ${({ skill }) =>
    skill === SkillChoose.Choose ? '1rem' : '1.5rem'};
  @media (max-width: ${Breakpoints.ContentArea}) {
    padding-bottom: 1rem;
  }
`

export default GraphPart
