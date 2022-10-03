import styled from '@emotion/styled'
import React from 'react'

import { Skill, SkillColorMap } from '../../constants/skills'

import palette from '../../foundation/palette'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'

interface Props {
  skillSet: Skill[]
  progressPercentage: number
}

const ProgressBar = ({ skillSet, progressPercentage }: Props) => {
  return (
    <Container>
      <FilledPart
        skill={skillSet.length === 1 ? skillSet[0] : 'ALL'}
        progressPercentage={progressPercentage}
      />
      <UnfilledPart />
    </Container>
  )
}

const Container = styled(Flex)`
  margin-top: ${pxToRem(8)}rem;
  width: 100%;
  height: ${pxToRem(16)}rem;
  background-color: ${palette.Gray[20]};
`

const FilledPart = styled(Flex)<{
  skill: Skill | 'ALL'
  progressPercentage: number
}>`
  width: ${({ progressPercentage }) => `${progressPercentage}%`};
  height: 100%;
  background-color: ${({ skill }) =>
    skill === 'ALL' ? '#000' : SkillColorMap[skill]};
`

const UnfilledPart = styled(Flex)`
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
`

export default ProgressBar
