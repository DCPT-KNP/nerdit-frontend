import styled from '@emotion/styled'
import React from 'react'
import { RoadMapStep, RoadMapDescMap, RoadMapStepCount } from './constants'
import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import Spacing from '../../foundation/Spacing'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'

import guideOneImage from './images/Guide_1.svg'
import guideTwoImage from './images/Guide_2.svg'
import guideThreeImage from './images/Guide_3.svg'
import guideFourImage from './images/Guide_4.svg'

const CONTAINER_WIDTH = pxToRem(388)
const SUB_CONTAINER_GAP = pxToRem(19)
const IMAGE_HEIGHT = pxToRem(215)
const TEXT_GROUP_HEIGHT = pxToRem(41)
const TEXT_GROUP_GAP = pxToRem(16)

const roadmapIamgeMap = {
  FIRST: guideOneImage,
  SECOND: guideTwoImage,
  THIRD: guideThreeImage,
  FOURTH: guideFourImage,
}

interface Props {
  roadmap: RoadMapStep
}

const RoadMapCard = ({ roadmap }: Props) => {
  return (
    <Container flexDirection="column">
      <SubContainer height={IMAGE_HEIGHT}>
        <Img src={roadmapIamgeMap[roadmap]}></Img>
      </SubContainer>
      <SubContainer height={TEXT_GROUP_HEIGHT}>
        <Chip type="title2" color="#fff">
          {RoadMapStepCount[roadmap]}
        </Chip>
        <Spacing rem={TEXT_GROUP_GAP} inline />
        <Text type="header1" color={palette.Gray[50]}>
          {RoadMapDescMap[roadmap]}
        </Text>
      </SubContainer>
    </Container>
  )
}

const Container = styled(Flex)`
  padding: 1rem;
  width: ${CONTAINER_WIDTH}rem;
  gap: ${SUB_CONTAINER_GAP}rem;
`
const SubContainer = styled(Flex)<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}rem;
`

const Img = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT}rem;
`

const Chip = styled(Typo)`
  border-radius: ${pxToRem(8)}rem;
  padding: ${pxToRem(10)}rem ${pxToRem(16)}rem;
  width: ${pxToRem(51)}rem;
  height: ${pxToRem(21)}rem;
  background-color: ${palette.Gray[50]};
`

const Text = styled(Typo)`
  width: ${pxToRem(290)}rem;
  text-align: left;
  font-size: ${pxToRem(12)}rem;
  font-weight: 500;
`

export default RoadMapCard
