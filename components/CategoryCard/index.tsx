import styled from '@emotion/styled'
import React from 'react'

import { Skill } from '../../constants/skills'

import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'
import SkillChips from './SkillChips'
import ProgressBar from './ProgressBar'

const CONTAINER_WIDTH = pxToRem(312)

interface Props {
  variant: 'notStarted' | 'inProgress' | 'done'
  title: string
  description: string
  skillSet: Skill[]
  missionsDone?: number
  numOfMissions?: number
}

const CategoryCard = ({
  variant,
  title,
  description,
  skillSet,
  missionsDone = 0,
  numOfMissions = 1,
}: Props) => {
  const isNotStarted: boolean = variant === 'notStarted'

  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header type="title1" color={palette.Primary}>
        {title}
      </Header>
      <Description type="caption1" color={palette.Gray[50]}>
        {description}
      </Description>
      <DataContainer justifyContent="space-between">
        <SkillChips skillSet={skillSet} />
        <Description type="caption1" color={palette.Gray[40]}>
          {!isNotStarted
            ? `${missionsDone} of ${numOfMissions} Missions Done`
            : 'Add Your Mission'}
        </Description>
      </DataContainer>
      {!isNotStarted && (
        <ProgressBar
          skillSet={skillSet}
          progressPercentage={Math.round((missionsDone / numOfMissions) * 100)}
        />
      )}
    </Container>
  )
}

const Container = styled(Flex)`
  border: ${pxToRem(1)}rem solid ${palette.Gray[20]};
  padding: ${pxToRem(24)}rem;
  width: ${CONTAINER_WIDTH}rem;
`

const Header = styled(Typo)`
  margin-bottom: ${pxToRem(8)}rem;
  width: 100%;
`

const Description = styled(Typo)``

const DataContainer = styled(Flex)`
  margin-top: ${pxToRem(16)}rem;
  width: 100%;
`

export default CategoryCard
